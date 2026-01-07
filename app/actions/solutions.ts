"use server";

import { prisma as db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getSolutionsAdmin() {
    try {
        const solutions = await db.speciality.findMany({
            orderBy: { order: "asc" },
        });
        return solutions;
    } catch (error) {
        console.error("Failed to fetch solutions:", error);
        return [];
    }
}

export async function getSolutionById(id: string) {
    try {
        const solution = await db.speciality.findUnique({
            where: { id },
        });
        return solution;
    } catch (error) {
        console.error("Failed to fetch solution:", error);
        return null;
    }
}

export async function createSolution(data: { title: string; subtitle?: string; description?: string; excerpt?: string; iconUrl?: string; bgUrl?: string; thumbnailUrl?: string }) {
    try {
        const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        await db.speciality.create({
            data: {
                title: data.title,
                subtitle: data.subtitle,
                description: data.description, // HTML content
                excerpt: data.excerpt,
                slug,
                iconUrl: data.iconUrl,
                bgUrl: data.bgUrl,
                thumbnailUrl: data.thumbnailUrl,
            },
        });
        revalidatePath("/admin/solutions");
        revalidatePath("/solutions/[slug]");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to create solution:", error);
        return { success: false, error };
    }
}

export async function updateSolution(id: string, data: { title: string; subtitle?: string; description?: string; excerpt?: string; iconUrl?: string; bgUrl?: string; thumbnailUrl?: string; slug?: string }) {
    try {
        await db.speciality.update({
            where: { id },
            data: {
                title: data.title,
                subtitle: data.subtitle,
                description: data.description,
                excerpt: data.excerpt,
                slug: data.slug,
                iconUrl: data.iconUrl,
                bgUrl: data.bgUrl,
                thumbnailUrl: data.thumbnailUrl,
            },
        });
        revalidatePath("/admin/solutions");
        revalidatePath("/solutions/[slug]");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to update solution:", error);
        return { success: false, error };
    }
}

export async function deleteSolution(id: string) {
    try {
        await db.speciality.delete({
            where: { id },
        });
        revalidatePath("/admin/solutions");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete solution:", error);
        return { success: false, error };
    }
}
