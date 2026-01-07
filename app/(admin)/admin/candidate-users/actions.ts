'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getCandidateUsers() {
    return await prisma.candidate.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export async function updateCandidateAccountStatus(id: string, status: string) {
    try {
        await prisma.candidate.update({
            where: { id },
            data: { status }
        });
        revalidatePath('/admin/candidate-users');
        return { success: true };
    } catch (error) {
        console.error("Failed to update candidate status", error);
        return { success: false, error: 'Failed to update status' };
    }
}

export async function deleteCandidateAccount(id: string) {
    try {
        await prisma.candidate.delete({
            where: { id }
        });
        revalidatePath('/admin/candidate-users');
        return { success: true };
    } catch (error) {
        console.error("Failed to delete candidate", error);
        return { success: false, error: 'Failed to delete' };
    }
}
