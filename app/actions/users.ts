"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true
            }
        });
        // Convert dates to strings for serialization if needed, 
        // but Next.js Server Actions can handle dates.
        // Prisma User model might be different, let's check schema/types implicitly.
        return users;
    } catch {
        return [];
    }
}

export async function createUser(data: any) {
    try {
        // Basic validation
        if (!data.email || !data.password) {
            return { success: false, error: "Missing required fields" };
        }

        const existingUser = await prisma.user.findUnique({
            where: { email: data.email }
        });

        if (existingUser) {
            return { success: false, error: "User already exists" };
        }

        // In a real app, hash password here.
        // For this demo/CMS, we store as is or mock hash.
        await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                role: data.role || "admin",
                password: data.password // Store as plain text for now per CMS demo requirement
            }
        });

        revalidatePath("/admin/users");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function deleteUser(id: string) {
    try {
        await prisma.user.delete({ where: { id } });
        revalidatePath("/admin/users");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}
