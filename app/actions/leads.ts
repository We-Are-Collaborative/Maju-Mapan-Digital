'use server'

import { prisma as db } from "@/lib/db";
import { revalidatePath } from "next/cache";

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
    const source = (formData.get("source") as string) || "Unknown";

    const errors: LeadState["errors"] = {};

    if (!name || name.length < 2) {
        errors.name = ["Name must be at least 2 characters"];
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = ["Please enter a valid email"];
    }
    if (!whatsapp || whatsapp.length < 8) {
        errors.whatsapp = ["Please enter a valid WhatsApp number"];
    }
    if (!service) {
        errors.service = ["Please select a service"];
    }

    if (Object.keys(errors).length > 0) {
        return { errors, success: false, message: "Please fix the errors below" };
    }

    try {
        await db.lead.create({
            data: {
                name,
                email,
                whatsapp,
                service,
                source,
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
