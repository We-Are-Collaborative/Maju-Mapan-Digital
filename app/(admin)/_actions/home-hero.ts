'use server'

import { prisma as db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getHomeHeroData() {
    try {
        console.log("[HeroAction] Fetching HomeHero...");
        const hero = await (db as any).homeHero.findFirst({
            where: { isActive: true },
            select: {
                id: true,
                isDynamic: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
                slides: {
                    select: {
                        id: true,
                        titleLine1: true,
                        titleHighlight: true,
                        subtitle: true,
                        ctaText: true,
                        ctaLink: true,
                        bgImageDesktop: true,
                        bgImageDesktopAlt: true,
                        bgImageMobile: true,
                        bgImageMobileAlt: true,
                        bgOpacity: true,
                        order: true
                    },
                    orderBy: { order: 'asc' }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        if (!hero) {
            console.log("[HeroAction] No hero found, creating default...");
            const defaultData = {
                isActive: true,
                isDynamic: true,
                slides: {
                    create: [
                        {
                            titleLine1: "Award",
                            titleHighlight: "Winning",
                            subtitle: "Your partner in profitable growth—turning traffic into tangible revenue.",
                            ctaText: "Set a Meeting",
                            ctaLink: "#",
                            bgOpacity: 0.4,
                            order: 0
                        }
                    ]
                }
            };

            const created = await (db as any).homeHero.create({
                data: defaultData,
                select: {
                    id: true,
                    isDynamic: true,
                    isActive: true,
                    slides: {
                        select: {
                            id: true,
                            titleLine1: true,
                            titleHighlight: true,
                            bgOpacity: true
                        }
                    }
                }
            });
            return created;
        }

        return hero;
    } catch (error: any) {
        console.error("[HeroAction] CRITICAL ERROR:", error.message);
        return null;
    }
}

export async function updateHomeHeroData(id: string, data: any) {
    try {
        const updated = await (db as any).$transaction(async (tx: any) => {
            await tx.homeHero.update({
                where: { id },
                data: {
                    isDynamic: data.isDynamic,
                    isActive: data.isActive
                },
                select: { id: true }
            });

            const incomingSlideIds = data.slides.map((s: any) => s.id).filter(Boolean);
            await tx.homeHeroSlide.deleteMany({
                where: {
                    heroId: id,
                    id: { notIn: incomingSlideIds }
                }
            });

            for (const slide of data.slides) {
                if (slide.id) {
                    await tx.homeHeroSlide.update({
                        where: { id: slide.id },
                        data: {
                            titleLine1: slide.titleLine1,
                            titleHighlight: slide.titleHighlight,
                            subtitle: slide.subtitle,
                            ctaText: slide.ctaText,
                            ctaLink: slide.ctaLink,
                            bgImageDesktop: slide.bgImageDesktop,
                            bgImageDesktopAlt: slide.bgImageDesktopAlt,
                            bgImageMobile: slide.bgImageMobile,
                            bgImageMobileAlt: slide.bgImageMobileAlt,
                            bgOpacity: slide.bgOpacity ?? 0.4,
                            order: slide.order
                        },
                        select: { id: true }
                    });
                } else {
                    await tx.homeHeroSlide.create({
                        data: {
                            heroId: id,
                            titleLine1: slide.titleLine1,
                            titleHighlight: slide.titleHighlight,
                            subtitle: slide.subtitle,
                            ctaText: slide.ctaText,
                            ctaLink: slide.ctaLink,
                            bgImageDesktop: slide.bgImageDesktop,
                            bgImageDesktopAlt: slide.bgImageDesktopAlt,
                            bgImageMobile: slide.bgImageMobile,
                            bgImageMobileAlt: slide.bgImageMobileAlt,
                            bgOpacity: slide.bgOpacity ?? 0.4,
                            order: slide.order
                        },
                        select: { id: true }
                    });
                }
            }

            return await tx.homeHero.findUnique({
                where: { id },
                select: {
                    id: true,
                    isDynamic: true,
                    isActive: true,
                    slides: {
                        select: {
                            id: true,
                            titleLine1: true,
                            titleHighlight: true,
                            subtitle: true,
                            ctaText: true,
                            ctaLink: true,
                            bgImageDesktop: true,
                            bgImageDesktopAlt: true,
                            bgImageMobile: true,
                            bgImageMobileAlt: true,
                            bgOpacity: true,
                            order: true
                        },
                        orderBy: { order: 'asc' }
                    }
                }
            });
        });

        revalidatePath('/');
        return { success: true, data: updated };
    } catch (error: any) {
        console.error("Failed to update home hero:", error.message || error);
        return { success: false, error: error.message || 'Failed to update hero banner' };
    }
}

export async function createHomeHeroData(data: any) {
    try {
        if (data.isActive) {
            await (db as any).homeHero.updateMany({
                where: { isActive: true },
                data: { isActive: false }
            });
        }

        const created = await (db as any).homeHero.create({
            data: {
                isDynamic: data.isDynamic ?? true,
                isActive: data.isActive ?? true,
                slides: {
                    create: data.slides.map((s: any) => ({
                        titleLine1: s.titleLine1,
                        titleHighlight: s.titleHighlight,
                        subtitle: s.subtitle,
                        ctaText: s.ctaText,
                        ctaLink: s.ctaLink,
                        bgImageDesktop: s.bgImageDesktop,
                        bgImageDesktopAlt: s.bgImageDesktopAlt,
                        bgImageMobile: s.bgImageMobile,
                        bgImageMobileAlt: s.bgImageMobileAlt,
                        bgOpacity: s.bgOpacity ?? 0.4,
                        order: s.order || 0
                    }))
                }
            },
            select: {
                id: true,
                isDynamic: true,
                isActive: true,
                slides: {
                    select: {
                        id: true,
                        titleLine1: true,
                        titleHighlight: true,
                        bgOpacity: true
                    }
                }
            }
        });

        revalidatePath('/');
        return { success: true, data: created };
    } catch (error: any) {
        console.error("Failed to create home hero:", error.message || error);
        return { success: false, error: error.message || 'Failed to create hero banner' };
    }
}
