'use server'

import { prisma as db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export type LeadState = {
    success?: boolean;
    errors?: {
        name?: string[];
        email?: string[];
        whatsapp?: string[];
        service?: string[];
        _form?: string[];
    };
    message?: string;
}

export async function submitLead(prevState: LeadState | undefined, formData: FormData): Promise<LeadState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const service = formData.get("service") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const source = (formData.get("source") as string) || "Unknown";

    const errors: LeadState["errors"] = {};

    if (!name || name.length < 2) {
        errors.name = ["Name must be at least 2 characters"];
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = ["Please enter a valid email"];
    }

    if (Object.keys(errors).length > 0) {
        return { errors, success: false, message: "Please fix the errors below" };
    }

    const cookieStore = await cookies();
    const sessionId = cookieStore.get('chat-session-id')?.value;

    // Attempt to get browsing history if session exists
    let browsingHistory = "";
    if (sessionId) {
        const intel = await db.audienceIntelligence.findUnique({ where: { sessionId } });
        if (intel?.browsingHistory) {
            browsingHistory = intel.browsingHistory;
        }
    }

    try {
        await db.lead.create({
            data: {
                name,
                email,
                whatsapp,
                service,
                subject,
                message,
                source,
                sessionId,
                browsingHistory,
                notes: subject ? `${subject}: ${message}` : message,
            },
        });

        // Optional: Send notification email/slack

        revalidatePath("/admin/leads"); // Future admin page

        return { success: true, message: "Thanks! We'll be in touch soon." };
    } catch (error) {
        console.error("Lead submission error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again or contact us directly.",
            errors: { _form: ["Database error"] }
        };
    }
}

export async function submitApplication(data: {
    name: string;
    email: string;
    company: string;
    role: string;
    spend: string;
    goal: string;
}) {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('chat-session-id')?.value;

    let browsingHistory = "";
    if (sessionId) {
        const intel = await db.audienceIntelligence.findUnique({ where: { sessionId } });
        if (intel?.browsingHistory) {
            browsingHistory = intel.browsingHistory;
        }
    }

    try {
        await db.lead.create({
            data: {
                name: data.name,
                email: data.email,
                company: data.company,
                role: data.role,
                monthlySpend: data.spend,
                primaryGoal: data.goal,
                source: "Mapan Qualification",
                service: "Mapan Dashboard Access",
                sessionId,
                browsingHistory,
                notes: `Goal: ${data.goal} | Spend: ${data.spend}`,
            },
        });

        revalidatePath("/admin/leads");
        return { success: true };
    } catch (error) {
        console.error("Application submission error:", error);
        return { success: false, error: "Database error" };
    }
}

// -- Admin Actions --

export async function getLeadsAdmin() {
    try {
        const leads = await db.lead.findMany({
            include: {
                _count: {
                    select: { chatSessions: true }
                }
            },
            orderBy: { createdAt: "desc" },
        });
        return leads;
    } catch (error) {
        console.error("Error fetching leads:", error);
        return [];
    }
}

export async function deleteLead(id: string) {
    try {
        await db.lead.delete({
            where: { id },
        });
        revalidatePath("/admin/leads");
        return { success: true };
    } catch (error) {
        console.error("Error deleting lead:", error);
        return { success: false, error: "Failed to delete lead" };
    }
}

export async function updateLeadStatus(id: string, status: string) {
    try {
        await db.lead.update({
            where: { id },
            data: { status },
        });
        revalidatePath("/admin/leads");
        return { success: true };
    } catch (error) {
        console.error("Error updating lead status:", error);
        return { success: false, error: "Failed to update status" };
    }
}
