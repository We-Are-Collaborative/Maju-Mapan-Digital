"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function getNavMenu(type: string = "public") {
    try {
        return await prisma.navMenu.findMany({
            orderBy: { position: 'asc' },
            include: { page: true }
        });
    } catch {
        return [];
    }
}

export async function reorderNavMenu(items: { id: string, order: number }[]) {
    try {
        const updates = items.map(item =>
            prisma.navMenu.update({
                where: { id: item.id },
                data: { position: item.order }
            })
        );
        await prisma.$transaction(updates);
        revalidatePath("/admin/content/menu");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function toggleNavActive(menuId: string | undefined, isActive: boolean) {

    if (!menuId) return { success: false, error: "No menu ID" };

    try {
        await prisma.navMenu.update({
            where: { id: menuId },
            data: { isActive }
        });
        revalidatePath("/admin/content");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}
