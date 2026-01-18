'use server'

import { prisma as db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function subscribeNewsletter(email: string) {
    if (!email || !email.includes('@')) {
        return { success: false, error: "Invalid email" };
    }

    try {
        await db.newsletterSubscription.upsert({
            where: { email },
            create: { email },
            update: { status: "active" }
        });

        revalidatePath("/admin/newsletter");
        return { success: true };
    } catch (error) {
        console.error("Newsletter error:", error);
        return { success: false, error: "Database error" };
    }
}

export async function getNewsletterSubscriptions() {
    try {
        return await db.newsletterSubscription.findMany({
            orderBy: { createdAt: 'desc' }
        });
    } catch (error) {
        return [];
    }
}

export async function deleteNewsletterSubscription(id: string) {
    try {
        await db.newsletterSubscription.delete({ where: { id } });
        revalidatePath("/admin/newsletter");
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}
