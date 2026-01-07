"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getScripts() {
    try {
        return await prisma.script.findMany({
            orderBy: { createdAt: 'desc' }
        });
    } catch {
        return [];
    }
}

export async function createScript(name: string, code: string, location: string) {
    try {
        await prisma.script.create({
            data: { name, code, location }
        });
        revalidatePath("/admin/scripts");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function deleteScript(id: string) {
    try {
        await prisma.script.delete({ where: { id } });
        revalidatePath("/admin/scripts");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function updateScript(id: string, code: string, location: string) {
    try {
        await prisma.script.update({
            where: { id },
            data: { code, location }
        });
        revalidatePath("/admin/scripts");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}
