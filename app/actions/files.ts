'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

const ROOT_DIR = process.cwd();

// Helper to sanitize paths and prevent directory traversal
function sanitizePath(relativePath: string) {
    const absolutePath = path.join(ROOT_DIR, relativePath);
    if (!absolutePath.startsWith(ROOT_DIR)) {
        throw new Error('Access denied: Unauthorized path access');
    }
    return absolutePath;
}

// Helper to check if a file/folder should be hidden
const EXCLUDED_ITEMS = ['.git', '.next', 'node_modules', '.env', 'package-lock.json', '.DS_Store'];

function isExcluded(name: string) {
    return EXCLUDED_ITEMS.includes(name);
}

export type FileItem = {
    name: string;
    path: string;
    type: 'file' | 'directory';
    size?: number;
    updatedAt: Date;
};

export async function getDirectory(relativePath: string = ''): Promise<{ success: boolean; items?: FileItem[]; error?: string }> {
    try {
        const absolutePath = sanitizePath(relativePath);
        const entries = await fs.readdir(absolutePath, { withFileTypes: true });

        const items: FileItem[] = await Promise.all(
            entries
                .filter(entry => !isExcluded(entry.name))
                .map(async (entry) => {
                    const itemPath = path.join(relativePath, entry.name);
                    const stats = await fs.stat(path.join(absolutePath, entry.name));
                    return {
                        name: entry.name,
                        path: itemPath,
                        type: entry.isDirectory() ? 'directory' : 'file',
                        size: entry.isFile() ? stats.size : undefined,
                        updatedAt: stats.mtime,
                    };
                })
        );

        // Sort: Directories first, then alphabetically
        items.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === 'directory' ? -1 : 1;
        });

        return { success: true, items };
    } catch (error: any) {
        console.error('Error reading directory:', error);
        return { success: false, error: error.message || 'Failed to read directory' };
    }
}

export async function getFileContent(relativePath: string): Promise<{ success: boolean; content?: string; error?: string }> {
    try {
        const absolutePath = sanitizePath(relativePath);
        const stats = await fs.stat(absolutePath);
        if (!stats.isFile()) throw new Error('Not a file');

        const content = await fs.readFile(absolutePath, 'utf-8');
        return { success: true, content };
    } catch (error: any) {
        console.error('Error reading file:', error);
        return { success: false, error: error.message || 'Failed to read file' };
    }
}

export async function saveFileContent(relativePath: string, content: string): Promise<{ success: boolean; error?: string }> {
    try {
        const absolutePath = sanitizePath(relativePath);

        // Don't allow saving to excluded files
        if (isExcluded(path.basename(absolutePath))) {
            throw new Error('Action prohibited on this file');
        }

        await fs.writeFile(absolutePath, content, 'utf-8');
        revalidatePath('/admin/system/files');
        return { success: true };
    } catch (error: any) {
        console.error('Error saving file:', error);
        return { success: false, error: error.message || 'Failed to save file' };
    }
}

export async function renameItem(relativePath: string, newName: string): Promise<{ success: boolean; error?: string }> {
    try {
        const absolutePath = sanitizePath(relativePath);
        const parentDir = path.dirname(absolutePath);
        const newAbsolutePath = path.join(parentDir, newName);

        // Security check for new path
        if (!newAbsolutePath.startsWith(ROOT_DIR)) throw new Error('Invalid path');
        if (isExcluded(newName)) throw new Error('Invalid name');

        await fs.rename(absolutePath, newAbsolutePath);
        revalidatePath('/admin/system/files');
        return { success: true };
    } catch (error: any) {
        console.error('Error renaming item:', error);
        return { success: false, error: error.message || 'Failed to rename item' };
    }
}

export async function deleteItem(relativePath: string): Promise<{ success: boolean; error?: string }> {
    try {
        if (!relativePath || relativePath === '.') throw new Error('Cannot delete root directory');

        const absolutePath = sanitizePath(relativePath);

        if (isExcluded(path.basename(absolutePath))) {
            throw new Error('Action prohibited on this item');
        }

        const stats = await fs.stat(absolutePath);
        if (stats.isDirectory()) {
            await fs.rm(absolutePath, { recursive: true, force: true });
        } else {
            await fs.unlink(absolutePath);
        }

        revalidatePath('/admin/system/files');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting item:', error);
        return { success: false, error: error.message || 'Failed to delete item' };
    }
}
