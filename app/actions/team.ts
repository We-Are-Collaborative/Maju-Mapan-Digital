'use server'

import { prisma as db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const TeamMemberSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    position: z.string().min(1, "Position is required"),
    excerpt: z.string().optional(),
    thumbnailUrl: z.string().optional(),
    linkedinUrl: z.string().optional(),
    email: z.string().email().optional().or(z.literal('')),
    order: z.number().default(0),
});

export type TeamMemberInput = z.infer<typeof TeamMemberSchema>;

export async function getEmployees() {
    const employees = await db.teamMember.findMany({
        orderBy: { order: 'asc' },
    });
    return employees;
}

export async function getEmployee(id: string) {
    const employee = await db.teamMember.findUnique({
        where: { id },
    });
    return employee;
}

export async function upsertEmployee(data: TeamMemberInput) {
    const validation = TeamMemberSchema.safeParse(data);
    if (!validation.success) {
        return { error: validation.error.flatten().fieldErrors };
    }

    const { id, ...fields } = validation.data;

    try {
        if (id) {
            await db.teamMember.update({
                where: { id },
                data: fields,
            });
        } else {
            await db.teamMember.create({
                data: fields,
            });
        }
        revalidatePath('/admin/team');
        revalidatePath('/about-us');
        return { success: true };
    } catch (error) {
        console.error('Failed to upsert employee:', error);
        return { error: 'Failed to save employee' };
    }
}

export async function deleteEmployee(id: string) {
    try {
        await db.teamMember.delete({
            where: { id },
        });
        revalidatePath('/admin/team');
        revalidatePath('/about-us');
        return { success: true };
    } catch (error) {
        console.error('Failed to delete employee:', error);
        return { error: 'Failed to delete employee' };
    }
}

// Simple reordering helper
export async function updateEmployeeOrder(items: { id: string; order: number }[]) {
    try {
        await db.$transaction(
            items.map((item) =>
                db.teamMember.update({
                    where: { id: item.id },
                    data: { order: item.order },
                })
            )
        );
        revalidatePath('/admin/team');
        revalidatePath('/about-us');
        return { success: true };
    } catch (error) {
        return { error: 'Failed to reorder' };
    }
}
