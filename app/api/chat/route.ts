import { streamText, tool, zodSchema, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

interface BehaviorContext {
    currentPath: string;
    timeOnPage: number;
    clicks: number;
    mouseConcentration: string;
    scrollDepth: number;
    isActive: boolean;
}

// Define schema outside to infer type
const createLeadParameters = z.object({
    name: z.string().describe('The user\'s name'),
    email: z.string().email().describe('The user\'s email address'),
    serviceInterest: z.string().optional().describe('Service they are interested in'),
});

const tools = {
    createLead: tool({
        description: 'Save user contact information as a Lead',
        inputSchema: z.object({
            name: z.string().describe("The user's name"),
            email: z.string().email().describe("The user's email address"),
            serviceInterest: z.string().optional().describe("Service they are interested in"),
        }),
        execute: async ({ name, email, serviceInterest }) => {
            try {
                await prisma.lead.create({
                    data: {
                        name,
                        email,
                        service: serviceInterest || 'General Inquiry',
                        status: 'new',
                        whatsapp: "", // Provide empty string to satisfy required field
                    },
                });
                return 'Thank you so much! I\'ve saved your details. Our team will reach out to you within the next 24 hours.';
            } catch (error) {
                console.error("Failed to save lead:", error);
                return 'There was an issue saving your details, but I have noted them down.';
            }
        },
    }),
};

export async function POST(req: Request) {
    const { messages: rawMessages, behaviorContext, sessionId }: { messages: any[], behaviorContext?: BehaviorContext, sessionId?: string } = await req.json();

    const messages = await convertToModelMessages(rawMessages, { tools });

    // Create context summary string if available
    let behaviorSummary = "User behavior data unavailable.";
    if (behaviorContext) {
        behaviorSummary = `
User Context:
- Current Page: ${behaviorContext.currentPath}
- Time on Page: ${behaviorContext.timeOnPage}s
- Clicks: ${behaviorContext.clicks}
- Mouse Concentration: ${behaviorContext.mouseConcentration}
- Scroll Depth: ${behaviorContext.scrollDepth}%
- Active Status: ${behaviorContext.isActive ? 'Active' : 'Idle'}
    `.trim();
    }

    const result = streamText({
        model: openai('gpt-4o'),
        system: `
      You are a friendly, professional sales assistant for "Maju Mapan Digital".
      Your goal is to help visitors and, if relevant, ask for their contact details to set up a meeting.
      
      ${behaviorSummary}

      Guidelines:
      1. Be concise and helpful.
      2. If the user has been on a specific page (like "Solutions") for a while, ask if they need help with that specific topic.
      3. If the user seems interested (asks about pricing, services, or "how to start"), ask for their name and email to have a specialist contact them.
      4. DO NOT be pushy.
      5. Use the 'createLead' tool ONLY when the user explicitly provides their name and email/contact info.
    `,
        messages,
        tools,
        onFinish: async ({ text, toolResults }) => {
            if (sessionId) {
                try {
                    // 1. Ensure the session exists
                    const session = await prisma.chatSession.upsert({
                        where: { id: sessionId },
                        create: { id: sessionId },
                        update: {},
                    });

                    // 2. Identify and Link Lead if tool was used
                    const leadResult = toolResults?.find(tr => tr.toolName === 'createLead');
                    if (leadResult && (leadResult as any).result?.includes('successfully')) {
                        // Extract email from original call args to find lead
                        const callArgs = (leadResult as any).args;
                        if (callArgs?.email) {
                            const lead = await prisma.lead.findFirst({
                                where: { email: callArgs.email },
                                orderBy: { createdAt: 'desc' }
                            });
                            if (lead) {
                                await prisma.chatSession.update({
                                    where: { id: sessionId },
                                    data: { leadId: lead.id }
                                });
                            }
                        }
                    }

                    // 3. Store User Message (the last one in prompt)
                    const lastUserMsg = rawMessages[rawMessages.length - 1];
                    if (lastUserMsg && lastUserMsg.role === 'user') {
                        await prisma.chatMessage.create({
                            data: {
                                sessionId,
                                role: 'user',
                                content: typeof lastUserMsg.content === 'string' ? lastUserMsg.content : JSON.stringify(lastUserMsg.parts),
                                behaviorContext: behaviorContext ? JSON.stringify(behaviorContext) : null,
                            }
                        });
                    }

                    // 4. Store Assistant Response
                    await prisma.chatMessage.create({
                        data: {
                            sessionId,
                            role: 'assistant',
                            content: text || (toolResults ? JSON.stringify(toolResults) : "Handled tool call."),
                        }
                    });

                } catch (error) {
                    console.error("Failed to persist chat:", error);
                }
            }
        }
    });

    return result.toUIMessageStreamResponse();
}
