'use server'

import { prisma as db } from '@/lib/db';
import { Page } from '@/types/page';
import { SeoConfig } from '@/types/seo_config';
import { Value } from '@/types/value';
import { Speciality } from '@/types/speciality';
import { Client } from '@/types/client';
import { getHomeSections, SectionItem } from './home-sections';

interface HomePageData {
    values: Value[];
    specialities: Speciality[];
    clients: Client[];
    caseStudies: any[]; // Using any for now or strictly typed if possible
    pageSeo?: Page;
    sections?: SectionItem[];
}

export async function getHomePageData(): Promise<HomePageData> {
    try {
        // Ensure sections exist (Seeding side-effect)
        const sortedSections = await getHomeSections();

        const [values, specialities, clients, showcases, pageContent] = await Promise.all([
            // @ts-ignore
            db.value.findMany({ orderBy: { order: 'asc' } }),
            // @ts-ignore
            db.speciality.findMany({ orderBy: { order: 'asc' } }),
            // @ts-ignore
            db.client.findMany({
                where: { isFeatured: true },
                orderBy: { order: 'asc' },
                take: 50 // Increased to support infinite carousel
            }),
            // @ts-ignore
            db.caseStudy.findMany({
                where: { isFeatured: true },
                orderBy: { createdAt: 'desc' },
                take: 3,
                include: { client: true }
            }),
            db.pageContent.findUnique({
                where: { slug: 'home' },
                include: {
                    sections: { orderBy: { position: 'asc' } },
                }
            })
        ]);

        let seo = null;
        let content: any = {};
        if (pageContent) {
            seo = await db.sEO.findUnique({ where: { pageId: pageContent.id } });

            // Find the main content section
            const mainSection = pageContent.sections.find((s: any) => s.name === 'main_content');
            if (mainSection && mainSection.splitFeatureSection) {
                try {
                    content = JSON.parse(mainSection.splitFeatureSection);
                } catch (e) {
                    console.error("Failed to parse page content JSON", e);
                }
            }
        }

        const seoConfig: SeoConfig | undefined = seo ? {
            title: seo.metaTitle || undefined,
            description: seo.metaDescription || undefined,
            language: 'en'
        } : undefined;

        // Map DB models to UI types
        // Using 'any' for DB items to bypass 'property does not exist' if usage is correct but types lag

        const mappedValues = values.map((v: any) => ({
            ...v,
            iconUrl: v.iconUrl,
            iconAlt: v.iconAlt,
            background: { originalUrl: v.bgUrl, alt: v.bgAlt },
            // Ensure types match
            id: v.id,
            slug: v.slug,
            title: v.title,
            subtitle: v.subtitle || '',
            excerpt: v.excerpt || '',
            createdAt: v.createdAt.toISOString(),
            updatedAt: v.updatedAt.toISOString(),
        } as Value));

        const mappedSpecialities = specialities.map((s: any) => ({
            ...s,
            iconUrl: s.iconUrl,
            iconAlt: s.iconAlt,
            background: { originalUrl: s.bgUrl, alt: s.bgAlt },
            thumbnail: { originalUrl: s.thumbnailUrl, alt: s.thumbnailAlt },
            keyComponent: [], // Generic
            strategyWork: [], // Generic
            createdAt: s.createdAt.toISOString(),
            updatedAt: s.updatedAt.toISOString(),
        } as Speciality));

        const mappedClients = clients.map((c: any) => ({
            ...c,
            logo: { originalUrl: c.logoUrl, alt: c.logoAlt },
            isFeatured: c.isFeatured,
            createdAt: c.createdAt.toISOString(),
            updatedAt: c.updatedAt.toISOString(),
        } as Client));

        const mappedCaseStudies = showcases.map((s: any) => ({
            ...s,
            thumbnail: s.thumbnailUrl ? { originalUrl: s.thumbnailUrl, alt: s.thumbnailAlt } : null,
            metrics: s.metrics ? JSON.parse(s.metrics) : [],
            client: s.client ? {
                ...s.client,
                logo: { originalUrl: s.client.logoUrl },
                brandColor: s.client.brandColor
            } : null,
            createdAt: s.createdAt.toISOString(),
            updatedAt: s.updatedAt.toISOString(),
        }));

        const pageSeo: Page = {
            content,
            seoConfig: seoConfig,
            name: 'Home',
            slug: 'home'
        };

        const safeSections: SectionItem[] = (pageContent?.sections || sortedSections).map((s: any) => ({
            id: s.id,
            type: s.type,
            name: s.name || '',
            position: s.position,
            isEnabled: true
        }));

        return {
            values: mappedValues,
            specialities: mappedSpecialities,
            clients: mappedClients,
            caseStudies: mappedCaseStudies,
            pageSeo,
            sections: safeSections
        };
    } catch (error) {
        console.error('Error fetching home page data:', error);
        return {
            values: [],
            specialities: [],
            clients: [],
            caseStudies: [],
            pageSeo: {},
            sections: []
        };
    }
}

export async function getValues(): Promise<Value[]> {
    // @ts-ignore
    const items = await db.value.findMany({ orderBy: { order: 'asc' } });
    return items.map((v: any) => ({
        ...v,
        iconUrl: v.iconUrl,
        iconAlt: v.iconAlt,
        background: { originalUrl: v.bgUrl, alt: v.bgAlt },
        id: v.id,
        slug: v.slug,
        title: v.title,
        subtitle: v.subtitle || '',
        excerpt: v.excerpt || '',
        createdAt: v.createdAt.toISOString(),
        updatedAt: v.updatedAt.toISOString(),
    } as Value));
}

export async function getTeam(): Promise<any[]> { // Type 'StakeHolder' is used in AboutUs
    // @ts-ignore
    const items = await db.teamMember.findMany({ orderBy: { order: 'asc' } });
    return items.map((m: any) => ({
        id: m.id,
        name: m.name,
        position: m.position,
        excerpt: m.excerpt,
        thumbnail: { originalUrl: m.thumbnailUrl, alt: m.imageAlt },
        linkedinUrl: m.linkedinUrl,
        email: m.email,
        createdAt: m.createdAt.toISOString(),
        updatedAt: m.updatedAt.toISOString(),
    }));
}

export async function getSpecialities(): Promise<Speciality[]> {
    // @ts-ignore
    const items = await db.speciality.findMany({ orderBy: { order: 'asc' } });
    return items.map((s: any) => ({
        ...s,
        iconUrl: s.iconUrl,
        iconAlt: s.iconAlt,
        background: { originalUrl: s.bgUrl, alt: s.bgAlt },
        thumbnail: { originalUrl: s.thumbnailUrl, alt: s.thumbnailAlt },
        keyComponent: [],
        strategyWork: [],
        createdAt: s.createdAt.toISOString(),
        updatedAt: s.updatedAt.toISOString(),
    } as Speciality));
}

export async function getClients(): Promise<Client[]> {
    // @ts-ignore
    const items = await db.client.findMany({ orderBy: { order: 'asc' } });
    return items.map((c: any) => ({
        ...c,
        logo: { originalUrl: c.logoUrl, alt: c.logoAlt },
        isFeatured: c.isFeatured,
        createdAt: c.createdAt.toISOString(),
        updatedAt: c.updatedAt.toISOString(),
    } as Client));
}

export async function getPageSeo(slug: string): Promise<Page> {
    const pageContent = await db.pageContent.findUnique({
        where: { slug: slug },
        include: { sections: true }
    });

    let seo = null;
    let content: any = {};
    if (pageContent) {
        seo = await db.sEO.findUnique({ where: { pageId: pageContent.id } });
        const mainSection = pageContent.sections.find((s: any) => s.type === 'json_content');
        if (mainSection && mainSection.splitFeatureSection) {
            try {
                content = JSON.parse(mainSection.splitFeatureSection);
            } catch (e) {
                // ignore
            }
        }
    }

    const seoConfig: SeoConfig | undefined = seo ? {
        title: seo.metaTitle || undefined,
        description: seo.metaDescription || undefined,
        language: 'en'
    } : undefined;

    return {
        content,
        seoConfig: seoConfig,
        name: slug,
        slug: slug
    };
}

export async function getNavItems() {
    const items = await db.navMenu.findMany({
        where: { isActive: true },
        orderBy: { position: 'asc' }
    });
    return items.map((item: any) => {
        let label = item.label;
        let path = item.path;

        if (label === 'Portfolio') {
            label = 'Case Studies';
            path = '/case-studies';
        }

        return {
            title: label,
            href: path,
        };
    });
}

export async function getArticles() {
    // @ts-ignore
    const items = await db.article.findMany({
        where: { status: 'published' },
        orderBy: { createdAt: 'desc' },
        include: { category: true }
    });

    return items.map((a: any) => ({
        id: a.id,
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        content: a.content,
        thumbnail: { originalUrl: a.thumbnailUrl, alt: a.thumbnailAlt },
        categoryId: a.categoryId,
        category: a.category ? { name: a.category.name, slug: a.category.slug } : null,
        status: a.status,
        isFeatured: a.isFeatured,
        createdAt: a.createdAt.toISOString(),
        updatedAt: a.updatedAt.toISOString(),
    }));
}

export async function getCareers() {
    const items = await db.career.findMany({
        where: { status: 'published' },
        orderBy: { createdAt: 'desc' }
    });

    return items.map((c: any) => ({
        id: c.id,
        title: c.title,
        slug: c.slug,
        type: c.type,
        location: c.location,
        minSalary: c.minSalary,
        maxSalary: c.maxSalary,
        isRemote: c.isRemote,
        description: c.description,
        requirements: c.requirements ? JSON.parse(c.requirements) : [],
        categoryId: c.categoryId,
        createdAt: c.createdAt.toISOString(),
        updatedAt: c.updatedAt.toISOString(),
    }));
}

export async function getCategories() {
    // @ts-ignore
    return await db.category.findMany({
        orderBy: { name: 'asc' }
    });
}

export async function getSpecialityBySlug(slug: string) {
    // @ts-ignore
    const item = await db.speciality.findFirst({
        where: { slug }
    });

    if (!item) return null;

    return {
        ...item,
        iconUrl: item.iconUrl,
        background: { originalUrl: item.bgUrl },
        thumbnail: { originalUrl: item.thumbnailUrl },
        features: [], // Not in schema yet
        keyComponent: [],
        strategyWork: [],
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
    };
}

export async function getClientBySlug(slug: string) {
    // @ts-ignore
    const item = await db.client.findFirst({
        where: { slug }
    });

    if (!item) return null;

    return {
        ...item,
        logo: { originalUrl: item.logoUrl },
        isFeatured: item.isFeatured,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
    };
}

export async function getArticleBySlug(slug: string) {
    // @ts-ignore
    const item = await db.article.findFirst({
        where: { slug },
        include: { category: true }
    });

    if (!item) return null;

    return {
        ...item,
        thumbnail: item.thumbnailUrl ? { originalUrl: item.thumbnailUrl } : null,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
    };
}

export async function getCareerBySlug(slug: string) {
    // @ts-ignore
    const item = await db.career.findFirst({ // db.career usually works but safe guarding against IDE lag
        where: { slug },
        include: { category: true }
    });

    if (!item) return null;

    return {
        ...item,
        requirements: item.requirements ? JSON.parse(item.requirements) : [],
        created_at: item.createdAt.toISOString(),
        updated_at: item.updatedAt.toISOString(),
    };
}

export async function getCaseStudyBySlug(slug: string) {
    // @ts-ignore
    const item = await db.caseStudy.findFirst({
        where: { slug },
        include: { client: true }
    });

    if (!item) {
        return null;
    }

    return {
        ...item,
        start_date: item.startDate?.toISOString() || null,
        end_date: item.endDate?.toISOString() || null,
        thumbnail: item.thumbnailUrl ? { originalUrl: item.thumbnailUrl } : null,
        metrics: item.metrics ? JSON.parse(item.metrics) : [],
        client: item.client ? {
            ...item.client,
            logo: { originalUrl: item.client.logoUrl },
            brandColor: item.client.brandColor
        } : null,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
        seoConfig: undefined // Add SEO config mapping if available in schema later
    };
}

export async function getRelatedCaseStudies(excludeId: string, clientId?: string) {
    if (!clientId) return [];

    // @ts-ignore
    const items = await db.caseStudy.findMany({
        where: {
            id: { not: excludeId },
            clientId: clientId,
            status: 'published'
        },
        include: { client: true },
        take: 4
    });

    return items.map((item: any) => ({
        ...item,
        start_date: item.startDate?.toISOString() || null,
        end_date: item.endDate?.toISOString() || null,
        thumbnail: item.thumbnailUrl ? { originalUrl: item.thumbnailUrl } : null,
        client: item.client ? {
            ...item.client,
            logo: { originalUrl: item.client.logoUrl }
        } : null,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
    }));
}

export async function getCaseStudies() {
    // @ts-ignore
    const items = await db.caseStudy.findMany({
        where: { status: 'published' },
        include: { client: true },
        orderBy: { createdAt: 'desc' }
    });

    return items.map((item: any) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        thumbnailUrl: item.thumbnailUrl,
        thumbnailAlt: item.thumbnailAlt,
        client: item.client ? {
            name: item.client.name,
            slug: item.client.slug,
            logo: item.client.logo ? { originalUrl: item.client.logo } : (item.client.logoUrl ? { originalUrl: item.client.logoUrl } : null)
        } : null
    }));
}

export async function getValueBySlug(slug: string) {
    // @ts-ignore
    const item = await db.value.findFirst({
        where: { slug }
    });

    if (!item) return null;

    return {
        ...item,
        iconUrl: item.iconUrl,
        background: { originalUrl: item.bgUrl },
        thumbnail: { originalUrl: null }, // Schema doesn't have thumbnail yet
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
    };
}
