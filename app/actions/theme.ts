'use server';

import { prisma } from "@/lib/db";

export async function getDesignSystems() {
    try {
        const themes = await prisma.theme.findMany();

        // Transform for UI
        return themes.map((t: any) => {
            let config = {};
            let colors = {};
            try {
                config = JSON.parse(t.config || '{}');
                colors = JSON.parse(t.colors || '{}');
            } catch (e) {
                // Ignore parse errors
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
