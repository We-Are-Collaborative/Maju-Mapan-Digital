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

export async function getBrandBySlug(slug: string) {
    try {
        const db = prisma as any;
        return await db.client.findUnique({
            where: { slug },
            include: {
                campaigns: {
                    orderBy: { createdAt: 'desc' },
                    include: { objective: true }
                }
            }
        });
    } catch (error) {
        console.error("Error fetching brand by slug:", error);
        return null;
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

// --- CAMPAIGNS ---
export async function createCampaign(data: {
    name: string,
    clientId: string,
    objectiveId?: string,
    status?: string,
    startDate?: Date,
    endDate?: Date,
    spend?: number,
    channels?: string,
    services?: string
}) {
    try {
        const db = prisma as any;
        if (!data.clientId) throw new Error("Client ID is required");

        const campaign = await db.campaign.create({
            data: {
                ...data,
                status: data.status || 'draft',
                spend: data.spend || 0
            }
        });

        if (campaign?.clientId) {
            revalidatePath(`/admin/mapan/brands/${campaign.clientId}`);
        }
        return { success: true, data: campaign };
    } catch (error) {
        console.error("Error creating campaign:", error);
        return { success: false, error: "Failed to create campaign" };
    }
}

// --- SEEDING HELPER ---
export async function seedCampaignMetadata() {
    try {
        const db = prisma as any;

        // 1. Seed Objectives
        const objectives = [
            { name: 'Brand Awareness', funnelStage: 'Awareness' },
            { name: 'Reach & Frequency', funnelStage: 'Awareness' },
            { name: 'Traffic & Clicks', funnelStage: 'Consideration' },
            { name: 'Engagement & Viral', funnelStage: 'Consideration' },
            { name: 'App Installs', funnelStage: 'Consideration' },
            { name: 'Video Views', funnelStage: 'Consideration' },
            { name: 'Lead Generation', funnelStage: 'Consideration' },
            { name: 'Conversions / Sales', funnelStage: 'Conversion' },
            { name: 'Catalog Sales', funnelStage: 'Conversion' },
            { name: 'Store Traffic', funnelStage: 'Conversion' },
        ];

        for (const obj of objectives) {
            await db.campaignObjective.upsert({
                where: { name: obj.name }, // This might fail if name is not unique in schema, checking...
                update: { funnelStage: obj.funnelStage },
                create: obj,
            });
        }

        // 2. Seed Services (Solutions)
        const services = [
            { name: 'Digital Performance Marketing', description: 'Paid media optimization' },
            { name: 'SEO & Organic Growth', description: 'Search engine optimization' },
            { name: 'Influencer & KOL Marketing', description: 'Creator-led campaigns' },
            { name: 'Brand Strategy & Creative', description: 'Identity and assets' },
            { name: 'Social Media Management', description: 'Community and content' },
            { name: 'Web & App Development', description: 'Digital product engineering' },
        ];

        for (const svc of services) {
            await db.marketingService.upsert({
                where: { name: svc.name },
                update: { description: svc.description },
                create: svc,
            });
        }

        // 3. Seed Channels
        const channels = [
            { name: 'Meta (Facebook & Instagram)', type: 'Social' },
            { name: 'Google Ads (Search & Display)', type: 'Search' },
            { name: 'TikTok Ads', type: 'Social' },
            { name: 'YouTube Ads', type: 'Video' },
            { name: 'LinkedIn Ads', type: 'Social' },
            { name: 'Twitter (X) Ads', type: 'Social' },
            { name: 'Marketplace Ads (Shopee/Tokopedia)', type: 'Marketplace' },
            { name: 'Programmatic Display', type: 'Display' },
        ];

        for (const chan of channels) {
            await db.campaignChannel.upsert({
                where: { name: chan.name },
                update: { type: chan.type },
                create: chan,
            });
        }

        // 4. Seed Buying Models (BuyingMetric in schema)
        const buyingModels = [
            { name: 'CPM', description: 'Cost Per Mille' },
            { name: 'CPC', description: 'Cost Per Click' },
            { name: 'CPV', description: 'Cost Per View' },
            { name: 'CPL', description: 'Cost Per Lead' },
            { name: 'CPS', description: 'Cost Per Sale' },
            { name: 'CPE', description: 'Cost Per Engagement' },
            { name: 'CPF', description: 'Cost Per Follower' },
            { name: 'CPI', description: 'Cost Per Install' },
        ];

        for (const model of buyingModels) {
            await db.buyingMetric.upsert({
                where: { name: model.name },
                update: { description: model.description },
                create: model,
            });
        }

        // 5. Seed Performance Metrics
        const perfMetrics = [
            { name: 'Impressions', category: 'Reach' },
            { name: 'Reach', category: 'Reach' },
            { name: 'Clicks', category: 'Engagement' },
            { name: 'Views', category: 'Engagement' },
            { name: 'Viewers', category: 'Reach' },
            { name: 'Video Views', category: 'Video' },
            { name: '2s Video Play', category: 'Video' },
            { name: '3s Video Play', category: 'Video' },
            { name: '6s Video Views', category: 'Video' },
            { name: '6s Focused Video Views', category: 'Video' },
            { name: '25% Video View', category: 'Video' },
            { name: '50% Video View', category: 'Video' },
            { name: '75% Video View', category: 'Video' },
            { name: '100% Video View', category: 'Video' },
            { name: 'ThruPlay', category: 'Video' },
            { name: 'Likes', category: 'Social' },
            { name: 'Comments', category: 'Social' },
            { name: 'Saves', category: 'Social' },
            { name: 'Shares', category: 'Social' },
        ];

        for (const metric of perfMetrics) {
            await db.performanceMetric.upsert({
                where: { name: metric.name },
                update: { category: metric.category },
                create: metric,
            });
        }

        return { success: true };
    } catch (error) {
        console.error("Error seeding metadata:", error);
        return { success: false, error: "Seeding failed" };
    }
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
