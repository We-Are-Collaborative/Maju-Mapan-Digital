"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getArticlesAdmin() {
    try {
        const articles = await prisma.article.findMany({
            include: {
                category: {
                    select: { name: true }
                }
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw new Error("Failed to fetch articles");
    }
}

export async function getArticleById(id: string) {
    try {
        const article = await prisma.article.findUnique({
            where: { id },
            include: {
                category: true,
            },
        });
        return article;
    } catch (error) {
        console.error("Error fetching article:", error);
        throw new Error("Failed to fetch article");
    }
}

export async function createArticle(data: any) {
    try {
        await prisma.article.create({
            data: {
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt,
                content: data.content,
                thumbnailUrl: data.thumbnailUrl,
                thumbnailAlt: data.thumbnailAlt,
                status: data.status,
                isFeatured: data.isFeatured,
                category: data.categoryId ? {
                    connect: { id: data.categoryId }
                } : undefined,
            },
        });
        revalidatePath("/admin/insights");
        revalidatePath("/insights");
    } catch (error) {
        console.error("Error creating article:", error);
        throw new Error("Failed to create article");
    }
}

export async function updateArticle(id: string, data: any) {
    try {
        // Handle category connection/disconnection logic if needed, 
        // for now assuming simple connect or disconnect
        const updateData: any = {
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            content: data.content,
            thumbnailUrl: data.thumbnailUrl,
            thumbnailAlt: data.thumbnailAlt,
            status: data.status,
            isFeatured: data.isFeatured,
        };

        if (data.categoryId) {
            updateData.category = {
                connect: { id: data.categoryId }
            };
        } else {
            // If explicitly removing category, you might use disconnect: true or set to null if optional
            // For simple dropdown usage, usually we just connect to the new one.
            // If data.categoryId is "", we might want to disconnect.
            if (data.categoryId === "") {
                updateData.category = {
                    disconnect: true
                }
            }
        }

        await prisma.article.update({
            where: { id },
            data: updateData,
        });
        revalidatePath("/admin/insights");
        revalidatePath("/insights");
        revalidatePath(`/insights/${data.slug}`);
    } catch (error) {
        console.error("Error updating article:", error);
        throw new Error("Failed to update article");
    }
}

export async function deleteArticle(id: string) {
    try {
        await prisma.article.delete({
            where: { id },
        });
        revalidatePath("/admin/insights");
        revalidatePath("/insights");
    } catch (error) {
        console.error("Error deleting article:", error);
        throw new Error("Failed to delete article");
    }
}

// Also helpful to get categories for the dropdown
export async function getCategoriesForSelect() {
    try {
        const categories = await prisma.category.findMany({
            select: { id: true, name: true }
        });
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}
