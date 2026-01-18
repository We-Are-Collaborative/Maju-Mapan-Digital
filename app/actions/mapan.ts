'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

// Use a local instance to ensure fresh model definition loading
const prisma = new PrismaClient()

// --- DASHBOARD METRICS ---
export async function getDashboardMetrics() {
    try {
        // Casting to any to bypass potential IDE type staleness
        const db = prisma as any;

        const campaignCount = await db.campaign.count();
        const brandCount = await db.client.count({ where: { status: 'active' } });

        const campaigns = await db.campaign.findMany({
            select: {
                spend: true,
                status: true,
                client: true
            }
        });

        const totalSpend = campaigns.reduce((acc: number, curr: any) => acc + (curr.spend || 0), 0);
        const activeCampaigns = campaigns.filter((c: any) => c.status === 'active').length;

        const recentActivity = await db.campaign.findMany({
            take: 5,
            orderBy: { updatedAt: 'desc' },
            include: { client: true }
        });

        return {
            campaignCount,
            brandCount,
            totalSpend,
            activeCampaigns,
            recentActivity
        };
    } catch (error) {
        console.error("Error fetching metrics:", error);
        return null;
    }
}

// --- BRANDS ---
export async function getBrandPortfolio() {
    try {
        const db = prisma as any;
        const brands = await db.client.findMany({
            orderBy: { name: 'asc' },
            include: { campaigns: { select: { spend: true } } }
        });

        return brands.map((b: any) => ({
            ...b,
            totalSpend: b.campaigns ? b.campaigns.reduce((sum: number, c: any) => sum + (c.spend || 0), 0) : 0
        }));
    } catch (error) {
        return [];
    }
}

// --- SETTINGS CRUD (Generic-ish) ---

// Marketing Services
export async function getMarketingServices() {
    return (prisma as any).marketingService.findMany({ orderBy: { name: 'asc' } });
}
export async function createMarketingService(data: { name: string, description?: string }) {
    await (prisma as any).marketingService.create({ data });
    revalidatePath('/admin/mapan/settings');
}
export async function deleteMarketingService(id: string) {
    await (prisma as any).marketingService.delete({ where: { id } });
    revalidatePath('/admin/mapan/settings');
}

// Channels
export async function getCampaignChannels() {
    return (prisma as any).campaignChannel.findMany({ orderBy: { name: 'asc' } });
}
export async function createCampaignChannel(data: { name: string, type: string }) {
    await (prisma as any).campaignChannel.create({ data });
    revalidatePath('/admin/mapan/settings');
}
export async function deleteCampaignChannel(id: string) {
    await (prisma as any).campaignChannel.delete({ where: { id } });
    revalidatePath('/admin/mapan/settings');
}

// Metrics
export async function getBuyingMetrics() {
    return (prisma as any).buyingMetric.findMany({ orderBy: { name: 'asc' } });
}
export async function createBuyingMetric(data: { name: string, description?: string }) {
    await (prisma as any).buyingMetric.create({ data });
    revalidatePath('/admin/mapan/settings');
}
export async function deleteBuyingMetric(id: string) {
    await (prisma as any).buyingMetric.delete({ where: { id } });
    revalidatePath('/admin/mapan/settings');
}

// Objectives
export async function getCampaignObjectives() {
    return (prisma as any).campaignObjective.findMany({ orderBy: { name: 'asc' } });
}
export async function createCampaignObjective(data: { name: string, funnelStage: string }) {
    await (prisma as any).campaignObjective.create({ data });
    revalidatePath('/admin/mapan/settings');
}
export async function deleteCampaignObjective(id: string) {
    await (prisma as any).campaignObjective.delete({ where: { id } });
    revalidatePath('/admin/mapan/settings');
}

// --- CLIENT AUTH HELPER ---
export async function getClientByEmail(email: string) {
    try {
        const db = prisma as any;
        return await db.client.findUnique({
            where: { email },
            include: {
                caseStudies: true,
                campaigns: true
            }
        });
    } catch (error) {
        console.error("Error fetching client:", error);
        return null;
    }
}
