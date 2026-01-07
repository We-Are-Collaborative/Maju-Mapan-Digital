'use server'

import { prisma as db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// --- About Us / Specific Page Content ---

export async function getPageContent(slug: string) {
    const page = await db.pageContent.findUnique({
        where: { slug },
        include: { sections: true }
    });

    if (!page) return null;

    const mainSection = page.sections.find((s: any) => s.type === 'json_content');
    let content: any = {};

    if (mainSection && mainSection.splitFeatureSection) {
        try {
            content = JSON.parse(mainSection.splitFeatureSection);
        } catch (e) {
            console.error("Failed to parse page content", e);
        }
    }

    return content;
}

export async function updatePageContent(slug: string, content: any) {
    try {
        const page = await db.pageContent.findUnique({
            where: { slug }
        });

        if (!page) {
            // Create if not exists (though typically seeded)
            await db.pageContent.create({
                data: {
                    slug,
                    title: slug, // Default title
                    pageSlug: slug,
                    sections: {
                        create: {
                            type: 'json_content',
                            name: 'main_content',
                            splitFeatureSection: JSON.stringify(content)
                        }
                    }
                }
            });
        } else {
            // Find existing section or create
            const existingSection = await db.pageSection.findFirst({
                where: { pageId: page.id, type: 'json_content' }
            });

            if (existingSection) {
                await db.pageSection.update({
                    where: { id: existingSection.id },
                    data: { splitFeatureSection: JSON.stringify(content) }
                });
            } else {
                await db.pageSection.create({
                    data: {
                        pageId: page.id,
                        type: 'json_content',
                        name: 'main_content',
                        splitFeatureSection: JSON.stringify(content)
                    }
                });
            }
        }

        revalidatePath(`/${slug}`);
        revalidatePath(`/admin/pages/${slug}`);
        return { success: true };
    } catch (error) {
        console.error("Failed to update page content", error);
        return { error: 'Failed to update content' };
    }
}

// --- General Page Management (Restored) ---

export async function getAllPages() {
    try {
        return await db.pageContent.findMany({
            include: {
                navMenu: true,
                sections: true
            },
            orderBy: { updatedAt: 'desc' }
        });
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getSystemPages() {
    try {
        return await db.pageContent.findMany({
            where: {
                slug: { in: ['header', 'footer'] }
            }
        });
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getPageContentById(id: string) {
    try {
        return await db.pageContent.findUnique({
            where: { id },
            include: {
                sections: {
                    orderBy: { position: 'asc' }
                }
            }
        });
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function createPage(title: string, slug: string) {
    try {
        await db.pageContent.create({
            data: {
                title,
                slug: slug + "-" + Date.now(), // Ensure uniqueness for demo
                pageSlug: slug
            }
        });
        revalidatePath("/admin/content");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function deletePage(id: string) {
    try {
        await db.pageContent.delete({ where: { id } });
        revalidatePath("/admin/content");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}


// --- Sections Management (Restored) ---

export async function createSection(pageId: string, type: string) {
    try {
        const count = await db.pageSection.count({ where: { pageId } });
        await db.pageSection.create({
            data: {
                pageId,
                type,
                position: count,
                name: type === 'html' ? 'New HTML Block' : 'New Feature'
            }
        });
        revalidatePath(`/admin/content/edit/${pageId}`);
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function updateSectionContent(id: string, htmlContent: string, type: string, componentData: any) {
    try {
        const data: any = {};
        if (type === 'html') {
            data.htmlContent = htmlContent;
            // Also update name if provided in componentData for rename
            if (componentData?.name) data.name = componentData.name;
        } else if (type === 'split-feature') {
            data.splitFeatureSection = JSON.stringify(componentData);
            if (componentData?.title) data.name = componentData.title;
        }

        await db.pageSection.update({
            where: { id },
            data
        });
        // We don't verify revalidate path here as it might be called frequently, handled by frontend refresh
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function deleteSection(id: string) {
    try {
        await db.pageSection.delete({ where: { id } });
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

export async function reorderSections(ids: string[]) {
    try {
        const updates = ids.map((id, index) =>
            db.pageSection.update({
                where: { id },
                data: { position: index }
            })
        );
        await db.$transaction(updates);
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}
