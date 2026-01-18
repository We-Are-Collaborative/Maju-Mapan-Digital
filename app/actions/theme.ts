'use server';

import { revalidatePath, unstable_noStore as noStore } from "next/cache";

import { prisma } from "@/lib/db";
import { defaultAdminTheme, defaultPublicTheme } from "@/lib/design-system";

export async function getDesignSystems() {
    noStore();
    try {
        const themes = await prisma.theme.findMany();

        // Ensure we always have the base themes even if DB is empty
        const systemThemes = ['admin', 'public'];
        const existingNames = themes.map((t: any) => t.name);

        // If DB is missing core themes, return defaults for them (mocking DB response)
        // or actually create them? Better to just return merged structure for UI.

        return themes.map((t: any) => {
            let config = {};
            let colors = {};
            try {
                config = JSON.parse(t.config || '{}');
                colors = JSON.parse(t.colors || '{}');
            } catch (e) {
                // Ignore parse errors
            }

            // MERGE DEFAULTS
            if (t.name === 'admin') {
                // Merge defaultAdminTheme with whatever is in DB
                // Prioritize DB config over default
                config = { ...defaultAdminTheme, ...config };
                // Also ensure nested properties are merged if possible, 
                // but for now top-level merge of 'colors', 'typography' etc is good start.
                // Deep merge would be better but expensive. 
                // Let's rely on the fact that we treat the default object as the structure source.
            } else if (t.name === 'public') {
                config = { ...defaultPublicTheme, ...config };
            }

            return {
                ...t,
                config,
                colors
            };
        });
    } catch (error) {
        console.error("Failed to fetch themes", error);
        return [];
    }
}

export async function updateTheme(id: string, data: { colors: any, config: any }) {
    try {
        await prisma.theme.update({
            where: { id },
            data: {
                colors: JSON.stringify(data.colors),
                config: JSON.stringify(data.config)
            }
        });
        revalidatePath('/admin/settings');
        return { success: true };
    } catch (error) {
        console.error("Failed to update theme", error);
        return { success: false, error };
    }
}
