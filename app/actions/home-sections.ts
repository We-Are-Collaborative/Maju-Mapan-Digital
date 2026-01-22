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

const DEFAULT_SECTIONS: SectionItem[] = [
    { id: 'default-values', type: 'section_values', name: 'Values / About', position: 0, isEnabled: true },
    { id: 'default-clients', type: 'section_clients', name: 'Clients', position: 1, isEnabled: true },
    { id: 'default-dashboard', type: 'section_mapan_dashboard', name: 'Mapan Dashboard', position: 2, isEnabled: true },
    { id: 'default-solutions', type: 'section_solutions', name: 'Global Solutions', position: 3, isEnabled: true },
    { id: 'default-works', type: 'section_works', name: 'Featured Works', position: 4, isEnabled: true },
    { id: 'default-cta', type: 'section_cta', name: 'Call to Action', position: 5, isEnabled: true },
];

export async function getHomeSections(): Promise<SectionItem[]> {
    try {
        let page = await prisma.pageContent.findUnique({
            where: { slug: HOME_SLUG },
            include: { sections: { orderBy: { position: 'asc' } } }
        }).catch(() => null);

        // Seed if page or sections missing
        if (!page) {
            try {
                page = await prisma.pageContent.upsert({
                    where: { slug: HOME_SLUG },
                    update: {},
                    create: {
                        title: 'Home',
                        slug: HOME_SLUG,
                        pageSlug: '/',
                    },
                    include: { sections: true }
                }).catch(() => null);
            } catch (seedError) {
                // Return default sections if seeding fails
                return DEFAULT_SECTIONS;
            }
        }

        if (!page) return DEFAULT_SECTIONS;

        const requiredSections = [
            { type: 'section_values', name: 'Values / About' },
            { type: 'section_clients', name: 'Clients' },
            { type: 'section_mapan_dashboard', name: 'Mapan Dashboard' },
            { type: 'section_solutions', name: 'Global Solutions' },
            { type: 'section_works', name: 'Featured Works' },
            { type: 'section_cta', name: 'Call to Action' },
        ];

        const existingTypes = (page?.sections as any[] || []).map(s => s.type);
        const missing = requiredSections.filter(req => !existingTypes.includes(req.type));

        if (missing.length > 0 && page) {
            let lastPos = page.sections.length > 0 ? Math.max(...(page.sections as any[]).map(s => s.position)) : -1;

            for (const section of missing) {
                try {
                    // Check again to handle race conditions with other workers
                    const existing = await prisma.pageSection.findFirst({
                        where: { pageId: page.id, type: section.type }
                    }).catch(() => null);

                    if (!existing) {
                        lastPos++;
                        await prisma.pageSection.create({
                            data: {
                                pageId: page.id,
                                type: section.type,
                                name: section.name,
                                position: lastPos,
                                splitFeatureSection: JSON.stringify({ enabled: true })
                            }
                        }).catch(() => null);
                    }
                } catch (innerError) {
                    // Silently fail section-specific seeding
                }
            }

            // Re-fetch after seeding
            try {
                page = await prisma.pageContent.findUnique({
                    where: { slug: HOME_SLUG },
                    include: { sections: { orderBy: { position: 'asc' } } }
                }).catch(() => null);
            } catch (refetchError) {
                // Fallthrough to existing page data
            }
        }

        const sections = ((page?.sections || []) as any[]);
        if (sections.length === 0) return DEFAULT_SECTIONS;

        return sections.map(s => ({
            id: s.id,
            type: s.type,
            name: s.name || 'Untitled Section',
            position: s.position,
            isEnabled: true
        }));

    } catch (error) {
        // Silently return defaults on critical failure
        return DEFAULT_SECTIONS;
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
