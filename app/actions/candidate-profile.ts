'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function updateCandidateProfile(data: {
    name?: string;
    phone?: string;
    resumeUrl?: string;
    portfolioUrl?: string;
    linkedinUrl?: string;
}) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'candidate') {
        return { success: false, error: 'Unauthorized' };
    }

    try {
        await prisma.candidate.update({
            where: { email: session.user.email || '' },
            data
        });
        revalidatePath('/profile');
        return { success: true };
    } catch (error) {
        console.error("Failed to update profile", error);
        return { success: false, error: 'Failed to update profile' };
    }
}

export async function deleteCandidateProfile() {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'candidate') {
        return { success: false, error: 'Unauthorized' };
    }

    try {
        await prisma.candidate.delete({
            where: { email: session.user.email || '' }
        });
        // Note: Job applications linked via userId might need cleanup if not on cascade
        // In schema.prisma, JobApplication.userId relates to User, not Candidate.
        // This confirms we need to fix the schema relation later or handle it manually.

        return { success: true };
    } catch (error) {
        console.error("Failed to delete profile", error);
        return { success: false, error: 'Failed to delete profile' };
    }
}
