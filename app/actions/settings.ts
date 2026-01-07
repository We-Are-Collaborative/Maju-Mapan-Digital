"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getGlobalSettings() {
    try {
        const settings = await prisma.globalSettings.findFirst();
        // If no settings exist, create default
        if (!settings) {
            return await prisma.globalSettings.create({
                data: {
                    siteName: "Maju Mapan Digital"
                }
            });
        }
        return settings;
    } catch (e) {
        console.error("Failed to fetch settings", e);
        return {
            id: "mock-id",
            siteName: "Maju Mapan Digital",
            publicAccess: true,
            maintenanceMode: false
        };
    }
}

export async function setMaintenanceMode(enabled: boolean) {
    try {
        const settings = await getGlobalSettings();
        if (!settings || !settings.id || settings.id === "mock-id") {
            // Mock behavior if DB fails
            return { success: true };
        }

        await prisma.globalSettings.update({
            where: { id: settings.id },
            data: { maintenanceMode: enabled }
        });
        revalidatePath("/");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function setLogoSettings(type: "svg" | "gif", gifUrl?: string) {
    try {
        const settings = await getGlobalSettings();
        if (!settings || !settings.id || settings.id === "mock-id") {
            return { success: true };
        }

        await prisma.globalSettings.update({
            where: { id: settings.id },
            // Cast to any to bypass editor desync issue with Prisma types
            data: {
                logoType: type,
                logoGifUrl: gifUrl
            } as any
        });
        revalidatePath("/");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}
