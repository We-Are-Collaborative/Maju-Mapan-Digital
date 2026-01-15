'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { unlink } from 'fs/promises';
import { join } from 'path';

export async function getMediaAssets() {
    try {
        const assets = await prisma.mediaAsset.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return { success: true, assets };
    } catch (error) {
        console.error('Error fetching media assets:', error);
        return { success: false, error: 'Failed to fetch assets' };
    }
}

export async function deleteMediaAsset(id: string) {
    try {
        const asset = await prisma.mediaAsset.findUnique({
            where: { id }
        });

        if (!asset) {
            return { success: false, error: 'Asset not found' };
        }

        // Delete the physical file
        const filePath = join(process.cwd(), 'public', asset.filePath);
        try {
            await unlink(filePath);
        } catch (e) {
            console.warn(`File not found on disk: ${filePath}`);
        }

        // Delete database record
        await prisma.mediaAsset.delete({
            where: { id }
        });

        revalidatePath('/admin/media');
        return { success: true };
    } catch (error) {
        console.error('Error deleting media asset:', error);
        return { success: false, error: 'Failed to delete asset' };
    }
}

export async function deleteMediaAssets(ids: string[]) {
    try {
        const assets = await prisma.mediaAsset.findMany({
            where: { id: { in: ids } }
        });

        for (const asset of assets) {
            // Delete the physical file
            const filePath = join(process.cwd(), 'public', asset.filePath);
            try {
                await unlink(filePath);
            } catch (e) {
                console.warn(`File not found on disk: ${filePath}`);
            }
        }

        // Delete database records
        await prisma.mediaAsset.deleteMany({
            where: { id: { in: ids } }
        });

        revalidatePath('/admin/media');
        return { success: true, count: assets.length };
    } catch (error) {
        console.error('Error deleting media assets:', error);
        return { success: false, error: 'Failed to delete assets' };
    }
}

export async function updateMediaMetadata(id: string, data: { altTag?: string; fileName?: string }) {
    try {
        await prisma.mediaAsset.update({
            where: { id },
            data
        });
        revalidatePath('/admin/media');
        return { success: true };
    } catch (error) {
        console.error('Error updating media metadata:', error);
        return { success: false, error: 'Failed to update metadata' };
    }
}
