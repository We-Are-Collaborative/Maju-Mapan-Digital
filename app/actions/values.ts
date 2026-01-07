"use server";

import { prisma as db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getValuesAdmin() {
    try {
        const values = await db.value.findMany({
            orderBy: { order: "asc" },
        });
        return values;
    } catch (error) {
        console.error("Failed to fetch values:", error);
        return [];
    }
}

export async function getValueById(id: string) {
    try {
        const value = await db.value.findUnique({
            where: { id },
        });
        return value;
    } catch (error) {
        console.error("Failed to fetch value:", error);
        return null;
    }
}

export async function createValue(data: { title: string; subtitle?: string; description?: string; iconUrl?: string; bgUrl?: string }) {
    try {
        const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        await db.value.create({
            data: {
                title: data.title,
                subtitle: data.subtitle,
                // description field does not exist on Value model, map to excerpt
                excerpt: data.description,
                slug,
                iconUrl: data.iconUrl,
                bgUrl: data.bgUrl,
            },
        });
        revalidatePath("/admin/values");
        revalidatePath("/value/[slug]");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to create value:", error);
        return { success: false, error };
    }
}

export async function updateValue(id: string, data: { title: string; subtitle?: string; description?: string; iconUrl?: string; bgUrl?: string; slug?: string }) {
    try {
        await db.value.update({
            where: { id },
            data: {
                title: data.title,
                subtitle: data.subtitle,
                excerpt: data.description, // Update excerpt
                slug: data.slug,
                iconUrl: data.iconUrl,
                bgUrl: data.bgUrl,
            },
        });
        revalidatePath("/admin/values");
        revalidatePath("/value/[slug]");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to update value:", error);
        return { success: false, error };
    }
}

export async function deleteValue(id: string) {
    try {
        await db.value.delete({
            where: { id },
        });
        revalidatePath("/admin/values");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete value:", error);
        return { success: false, error };
    }
}
