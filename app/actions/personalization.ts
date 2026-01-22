'use server'

import { prisma as db } from '@/lib/db';
import { Prisma } from '@prisma/client';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { cookies } from 'next/headers';

const PERSONALIZATION_COOKIE = 'mjmp_session_context';

export async function updateAudienceContext(path: string, search?: string) {
    const cookieStore = await cookies();
    let sessionId = cookieStore.get('chat-session-id')?.value;

    if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 11);
        cookieStore.set('chat-session-id', sessionId, { path: '/' });
    }

    try {
        const prisma = db;
        let intel: any = null;

        if ((prisma as any).audienceIntelligence) {
            // @ts-ignore
            intel = await prisma.audienceIntelligence.upsert({
                where: { sessionId },
                create: {
                    sessionId,
                    browsingHistory: JSON.stringify([path]),
                    lastSearch: search || null
                },
                update: {
                    lastSearch: search || undefined,
                    updatedAt: new Date()
                }
            }).catch(() => null);
        } else {
            // Raw SQL fallback for upsert - catch all errors locally
            try {
                // @ts-ignore
                const existing: any[] = await prisma.$queryRawUnsafe('SELECT * FROM AudienceIntelligence WHERE sessionId = ?', sessionId).catch(() => []);
                if (existing && existing.length > 0) {
                    // @ts-ignore
                    await prisma.$executeRawUnsafe(
                        'UPDATE AudienceIntelligence SET lastSearch = ?, updatedAt = ? WHERE sessionId = ?',
                        search || existing[0].lastSearch, new Date().toISOString(), sessionId
                    ).catch(() => null);
                    intel = existing[0];
                } else {
                    // @ts-ignore
                    await prisma.$executeRawUnsafe(
                        'INSERT INTO AudienceIntelligence (id, sessionId, browsingHistory, lastSearch, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)',
                        Math.random().toString(36).substring(2, 11), sessionId, JSON.stringify([path]), search || null, new Date().toISOString(), new Date().toISOString()
                    ).catch(() => null);
                    intel = { sessionId, browsingHistory: JSON.stringify([path]), lastSearch: search };
                }
            } catch (e) {
                // Ignore raw SQL failures
            }
        }

        // Update history (simplified: keep last 10 paths)
        if (intel && intel.browsingHistory) {
            const history = JSON.parse(intel.browsingHistory);
            if (!history.includes(path)) {
                history.push(path);
                if (history.length > 10) history.shift();

                if ((prisma as any).audienceIntelligence) {
                    // @ts-ignore
                    await prisma.audienceIntelligence.update({
                        where: { sessionId },
                        data: { browsingHistory: JSON.stringify(history) }
                    }).catch(() => null);
                } else {
                    // @ts-ignore
                    await prisma.$executeRawUnsafe(
                        'UPDATE AudienceIntelligence SET browsingHistory = ? WHERE sessionId = ?',
                        JSON.stringify(history), sessionId
                    );
                }
            }
        }

        return { success: true };
    } catch (e) {
        console.error("Failed to update audience context", e);
        return { success: false };
    }
}

export async function getPersonalizedHero(defaultHero: any) {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('chat-session-id')?.value;

    if (!sessionId) return defaultHero;

    try {
        const prisma = db;
        // 1. Get Audience Intelligence
        let intel: any = null;
        if ((prisma as any).audienceIntelligence) {
            // @ts-ignore
            intel = await prisma.audienceIntelligence.findUnique({ where: { sessionId } }).catch(() => null);
        } else {
            // @ts-ignore
            const results: any[] = await prisma.$queryRawUnsafe('SELECT * FROM AudienceIntelligence WHERE sessionId = ?', sessionId).catch(() => []);
            if (results && results.length > 0) intel = results[0];
        }

        // 2. Get Chat History
        const chatMessages = await db.chatMessage.findMany({
            where: { sessionId },
            orderBy: { createdAt: 'desc' },
            take: 5
        }).catch(() => []);

        if (!intel && chatMessages.length === 0) return defaultHero;

        // 3. Get Trending Topics (Mocked for now)
        const trendingTopics = ["AI Performance Marketing", "KOL ROI tracking", "Cookie-less tracking", "SEO Core Web Vitals"];

        const contextData = {
            browsedPaths: intel?.browsingHistory ? JSON.parse(intel.browsingHistory) : [],
            lastSearch: intel?.lastSearch,
            lastUserChat: chatMessages.filter((m: Prisma.ChatMessageGetPayload<object>) => m.role === 'user').map((m: Prisma.ChatMessageGetPayload<object>) => m.content).join(", "),
            trendingTopics
        };

        // 4. Generate Personalized Content
        const { text } = await generateText({
            model: openai('gpt-4o'),
            system: `You are a marketing personalization engine. 
            Given the default hero content and user context, generate a personalized title and subtitle.
            Return ONLY a JSON object with: 
            "titleLine1", "titleHighlight", "subtitle".
            Keep the tone premium, high-impact, and professional.
            Title Line 1 should be 1-2 words.
            Highlight should be the most impactful word.
            Subtitle should be a single powerful sentence (max 15 words).`,
            prompt: `
            Default Hero:
            Title: ${defaultHero.titleLine1} ${defaultHero.titleHighlight}
            Subtitle: ${defaultHero.subtitle}

            User Context:
            - Recent Pages: ${contextData.browsedPaths.join(", ")}
            - Search/Interest: ${contextData.lastSearch || "None"}
            - Chat Summary: ${contextData.lastUserChat || "None"}
            - Industry Trends: ${contextData.trendingTopics.join(", ")}
            `
        });

        try {
            // Strip markdown code blocks if present
            const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
            const personalized = JSON.parse(cleanText);

            // Validate essential fields to prevent blank banners
            const finalHero = {
                ...defaultHero,
                titleLine1: personalized.titleLine1 || defaultHero?.titleLine1,
                titleHighlight: personalized.titleHighlight || defaultHero?.titleHighlight,
                subtitle: personalized.subtitle || defaultHero?.subtitle,
                isPersonalized: true
            };

            return finalHero;
        } catch (e) {
            console.error("Failed to parse personalized text", text);
            return defaultHero;
        }

    } catch (error) {
        console.error("Personalization failed:", error);
        return defaultHero;
    }
}
