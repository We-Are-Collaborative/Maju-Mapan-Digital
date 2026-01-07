"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getCategoriesAdmin() {
    try {
        const categories = await prisma.category.findMany({
            include: { _count: { select: { articles: true, careers: true } } },
            orderBy: { name: "asc" },
        });
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export async function createCategory(name: string) {
    try {
        await prisma.category.create({
            data: {
                name,
                slug: name.toLowerCase().replace(/ /g, "-"),
            },
        });
        revalidatePath("/admin/categories");
        return { success: true };
    } catch (error) {
        console.error("Error creating category:", error);
        return { success: false, error: "Failed to create category" };
    }
}

export async function deleteCategory(id: string) {
    try {
        await prisma.category.delete({
            where: { id },
        });
        revalidatePath("/admin/categories");
        return { success: true };
    } catch (error) {
        console.error("Error deleting category:", error);
        return { success: false, error: "Failed to delete category" };
    }
}
