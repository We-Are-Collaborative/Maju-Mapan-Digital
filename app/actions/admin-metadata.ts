'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getAdminPageMetadata(routePath: string) {
    // Ensure prisma client is fresh
    try {
        const metadata = await prisma.adminPageMetadata.findUnique({
            where: { routePath },
        });
        return metadata;
    } catch (error) {
        console.error('Failed to get page metadata:', error);
        return null;
    }
}

export async function upsertAdminPageMetadata(data: { routePath: string; title: string; subtitle: string }) {
    try {
        const metadata = await prisma.adminPageMetadata.upsert({
            where: { routePath: data.routePath },
            update: {
                title: data.title,
                subtitle: data.subtitle,
            },
            create: {
                routePath: data.routePath,
                title: data.title,
                subtitle: data.subtitle,
            },
        });

        revalidatePath(data.routePath);
        return { success: true, data: metadata };
    } catch (error) {
        console.error('Failed to update page metadata:', error);
        return { success: false, error: 'Failed to save metadata' };
    }
}
