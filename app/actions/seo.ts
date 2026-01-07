"use server";

import { prisma } from "@/lib/db";

export async function getPageSeoAnalysis(slug: string) {
    // Mock response
    return {
        seo: {
            title: "Mock Title",
            description: "Mock Description",
            keywords: "mock, seo, keywords",
            canonicalUrl: "https://example.com/mock-slug",
            structuredData: "",
            indexable: true,
            ogVariants: []
        },
        analysis: {
            checks: {
                content: {
                    h1Count: 1,
                    imgAltMissing: 0,
                    wordCount: 500
                }
            }
        },
        hasRecord: true
    };
}

export async function saveSeoSettings(slug: string, data: any) {
    return { success: true };
}

export async function getSeoHealth() {
    return {
        score: 85,
        issues: 2,
        crawledPages: 10
    };
}

export async function getAllSeoPages() {
    try {
        const pages = await prisma.pageContent.findMany({
            include: {
                navMenu: true
            }
        });
        return pages.map(p => ({
            id: p.id,
            pageSlug: p.pageSlug,
            title: p.title,
            lastCrawled: p.updatedAt,
            score: 90,
            status: 'healthy'
        }));
    } catch {
        return [];
    }
}
