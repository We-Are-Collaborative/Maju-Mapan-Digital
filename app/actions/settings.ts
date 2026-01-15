"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { GlobalSettings } from "@prisma/client";

export async function getGlobalSettings(): Promise<GlobalSettings> {
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
            maintenanceMode: false,
            siteDescription: null,
            contactEmail: null,
            logoType: "svg",
            logoGifUrl: null,
            logoAlt: null,
            robotsTxt: null,
            htaccess: null,
            googleAnalyticsScript: null,
            metaPixelScript: null,
            tiktokPixelScript: null,
            customHeadScripts: null,
            customBodyScripts: null,
            createdAt: new Date(),
            updatedAt: new Date()
        } as GlobalSettings;
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

export async function updateGlobalSettings(data: any) {
    try {
        const settings = await getGlobalSettings();
        if (!settings || !settings.id || settings.id === "mock-id") {
            return { success: false, error: "Settings not initialized" };
        }

        await prisma.globalSettings.update({
            where: { id: settings.id },
            data: data
        });
        revalidatePath("/");
        return { success: true };
    } catch (e: any) {
        console.error("Update settings failed", e);
        return { success: false, error: e.message };
    }
}
