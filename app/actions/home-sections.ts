'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

const HOME_SLUG = 'home';

export interface SectionItem {
    id: string;
    type: string;
    name: string;
    position: number;
    isEnabled: boolean;
}

export async function getHomeSections(): Promise<SectionItem[]> {
    try {
        let page = await prisma.pageContent.findUnique({
            where: { slug: HOME_SLUG },
            include: { sections: { orderBy: { position: 'asc' } } }
        });

        // Seed if page or sections missing
        if (!page) {
            page = await prisma.pageContent.create({
                data: {
                    title: 'Home',
                    slug: HOME_SLUG,
                    pageSlug: '/',
                },
                include: { sections: true }
            });
        }

        const requiredSections = [
            { type: 'section_values', name: 'Values / About' },
            { type: 'section_clients', name: 'Clients' },
            { type: 'section_mapan_dashboard', name: 'Mapan Dashboard' },
            { type: 'section_solutions', name: 'Global Solutions' },
            { type: 'section_works', name: 'Featured Works' },
            { type: 'section_cta', name: 'Call to Action' },
        ];

        const existingTypes = (page.sections as any[]).map(s => s.type);
        const missing = requiredSections.filter(req => !existingTypes.includes(req.type));

        if (missing.length > 0) {
            let lastPos = page.sections.length > 0 ? Math.max(...(page.sections as any[]).map(s => s.position)) : -1;

            for (const section of missing) {
                lastPos++;
                await prisma.pageSection.create({
                    data: {
                        pageId: page.id,
                        type: section.type,
                        name: section.name,
                        position: lastPos,
                        // Storing enabled state in JSON for flexibility or relying on existence
                        splitFeatureSection: JSON.stringify({ enabled: true })
                    }
                });
            }

            // Re-fetch after seeding
            page = await prisma.pageContent.findUnique({
                where: { slug: HOME_SLUG },
                include: { sections: { orderBy: { position: 'asc' } } }
            });
        }

        return ((page?.sections || []) as any[]).map(s => ({
            id: s.id,
            type: s.type,
            name: s.name || 'Untitled Section',
            position: s.position,
            isEnabled: true // Ideally fetch from s.splitFeatureSection if we implement toggling
        }));

    } catch (error) {
        console.error("Failed to get home sections", error);
        return [];
    }
}

export async function updateHomeSectionOrder(items: { id: string; position: number }[]) {
    try {
        // Run in transaction to ensure integrity
        await prisma.$transaction(
            items.map((item) =>
                prisma.pageSection.update({
                    where: { id: item.id },
                    data: { position: item.position },
                })
            )
        );

        revalidatePath('/');
        revalidatePath('/admin/settings/hero');
        return { success: true };
    } catch (error) {
        console.error("Failed to reorder sections", error);
        return { success: false, error: "Failed to save order" };
    }
}
