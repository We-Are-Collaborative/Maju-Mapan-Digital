'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getAdminCandidates() {
    return await prisma.jobApplication.findMany({
        include: {
            career: {
                select: {
                    title: true,
                    slug: true
                }
            },
            user: {
                select: {
                    name: true,
                    email: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export async function getCandidateApplications(candidateId: string) {
    return await prisma.jobApplication.findMany({
        where: { userId: candidateId },
        include: {
            career: {
                select: {
                    title: true,
                    slug: true,
                    location: true,
                    type: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export async function updateCandidateStatus(id: string, status: string) {
    try {
        await prisma.jobApplication.update({
            where: { id },
            data: { status }
        });
        revalidatePath('/admin/careers/applications');
        return { success: true };
    } catch (error) {
        console.error("Failed to update status", error);
        return { success: false, error: 'Failed to update status' };
    }
}
