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

        const [dbValues, dbSpecialities, dbClients, dbShowcases, pageContent] = await Promise.all([
            // @ts-ignore
            db.value.findMany({ orderBy: { order: 'asc' } }).catch(() => []),
            // @ts-ignore
            db.speciality.findMany({ orderBy: { order: 'asc' } }).catch(() => []),
            // @ts-ignore
            db.client.findMany({
                where: { isFeatured: true },
                orderBy: { order: 'asc' },
                take: 50 // Increased to support infinite carousel
            }).catch(() => []),
            // @ts-ignore
            db.caseStudy.findMany({
                where: { isFeatured: true },
                orderBy: { createdAt: 'desc' },
                take: 3,
                include: { client: true }
            }).catch(() => []),
            db.pageContent.findUnique({
                where: { slug: 'home' },
                include: {
                    sections: { orderBy: { position: 'asc' } },
                }
            }).catch(() => null)
        ]);

        // --- Premium Mocks ---
        const values = dbValues.length > 0 ? dbValues : [
            { id: 'v1', slug: 'innovative', title: 'Innovative Strategy', subtitle: 'Leading with tech', excerpt: 'We leverage AI to drive marketing performance.', bgUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', iconUrl: 'lucide:cpu', order: 0, createdAt: new Date(), updatedAt: new Date() },
            { id: 'v2', slug: 'data-driven', title: 'Data Driven', subtitle: 'Numbers don\'t lie', excerpt: 'Deep analytics for every campaign we run.', bgUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop', iconUrl: 'lucide:bar-chart', order: 1, createdAt: new Date(), updatedAt: new Date() }
        ];

        const specialities = dbSpecialities.length > 0 ? dbSpecialities : [
            { id: 's1', slug: 'influencer', title: 'Influencer Marketing', subtitle: 'Scale with creators', excerpt: 'Connect with the right audience through trusted voices.', bgUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop', iconUrl: 'lucide:users', order: 0, createdAt: new Date(), updatedAt: new Date() },
        ];

        const clients = dbClients.length > 0 ? dbClients : [
            { id: 'c1', name: 'Grab', slug: 'grab', logoUrl: '/assets/client/shopee.svg', logoAlt: 'Grab', isFeatured: true, order: 0, createdAt: new Date(), updatedAt: new Date() },
            { id: 'c2', name: 'Traveloka', slug: 'traveloka', logoUrl: '/assets/client/traveloka.svg', logoAlt: 'Traveloka', isFeatured: true, order: 1, createdAt: new Date(), updatedAt: new Date() },
            { id: 'c3', name: 'Shopee', slug: 'shopee', logoUrl: '/assets/client/shopee.svg', logoAlt: 'Shopee', isFeatured: true, order: 2, createdAt: new Date(), updatedAt: new Date() },
        ];

        const showcases = dbShowcases.length > 0 ? dbShowcases : [
            {
                id: 'cs1',
                title: 'Grab Influencer Campaign',
                slug: 'grab-influencer',
                excerpt: 'Driving 300% growth in user acquisition through micro-influencers.',
                thumbnailUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
                thumbnailAlt: 'Grab Campaign',
                client: { name: 'Grab', slug: 'grab', logoUrl: '/assets/client/shopee.svg', brandColor: '#00B14F' },
                metrics: JSON.stringify([{ label: 'Reach', value: '1.2M+' }, { label: 'Conversion', value: '15%' }]),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];

        let seo = null;
        let content: any = {};
        if (pageContent) {
            seo = await db.sEO.findUnique({ where: { pageId: pageContent.id } }).catch(() => null);

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
    try {
        // @ts-ignore
        const items = await db.value.findMany({ orderBy: { order: 'asc' } }).catch(() => []);
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
    } catch (error) {
        console.error('Error fetching values:', error);
        return [];
    }
}

export async function getTeam(): Promise<any[]> { // Type 'StakeHolder' is used in AboutUs
    // @ts-ignore
    const items = await db.teamMember.findMany({ orderBy: { order: 'asc' } }).catch(() => []);
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
    const items = await db.speciality.findMany({ orderBy: { order: 'asc' } }).catch(() => []);
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
    const items = await db.client.findMany({ orderBy: { order: 'asc' } }).catch(() => []);
    return items.map((c: any) => ({
        ...c,
        logo: { originalUrl: c.logoUrl, alt: c.logoAlt },
        isFeatured: c.isFeatured,
        createdAt: c.createdAt.toISOString(),
        updatedAt: c.updatedAt.toISOString(),
    } as Client));
}

export async function getPageSeo(slug: string): Promise<Page> {
    try {
        const pageContent = await db.pageContent.findUnique({
            where: { slug: slug },
            include: { sections: true }
        }).catch(() => null);

        let seo = null;
        let content: any = {};
        if (pageContent) {
            seo = await db.sEO.findUnique({ where: { pageId: pageContent.id } }).catch(() => null);
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
    } catch (error) {
        console.error(`Error fetching SEO for ${slug}:`, error);
        return {
            content: {},
            name: slug,
            slug: slug
        };
    }
}

export async function getNavItems() {
    try {
        const items = await db.navMenu.findMany({
            where: { isActive: true },
            orderBy: { position: 'asc' }
        }).catch(() => []);
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
    } catch (error) {
        console.error('Error fetching nav items:', error);
        return [
            { title: 'Home', href: '/' },
            { title: 'Solutions', href: '/solutions' },
            { title: 'Case Studies', href: '/case-studies' },
            { title: 'Insights', href: '/insights' },
            { title: 'Careers', href: '/careers' },
            { title: 'Contact', href: '/contact-us' },
        ];
    }
}

export async function getArticles() {
    try {
        // @ts-ignore
        const items = await db.article.findMany({
            where: { status: 'published' },
            orderBy: { createdAt: 'desc' },
            include: { category: true }
        }).catch(() => []);

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
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}

export async function getCareers() {
    try {
        const items = await db.career.findMany({
            where: { status: 'published' },
            orderBy: { createdAt: 'desc' }
        }).catch(() => []);

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
    } catch (error) {
        console.error('Error fetching careers:', error);
        return [];
    }
}

export async function getCategories() {
    try {
        // @ts-ignore
        return await db.category.findMany({
            orderBy: { name: 'asc' }
        }).catch(() => []);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export async function getSpecialityBySlug(slug: string) {
    try {
        // @ts-ignore
        const item = await db.speciality.findFirst({
            where: { slug }
        }).catch(() => null);

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
    } catch (error) {
        console.error(`Error fetching speciality by slug ${slug}:`, error);
        return null;
    }
}

export async function getClientBySlug(slug: string) {
    try {
        // @ts-ignore
        const item = await db.client.findFirst({
            where: { slug }
        }).catch(() => null);

        if (!item) return null;

        return {
            ...item,
            logo: { originalUrl: item.logoUrl },
            isFeatured: item.isFeatured,
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
        };
    } catch (error) {
        console.error(`Error fetching client by slug ${slug}:`, error);
        return null;
    }
}

export async function getArticleBySlug(slug: string) {
    try {
        // @ts-ignore
        const item = await db.article.findFirst({
            where: { slug },
            include: { category: true }
        }).catch(() => null);

        if (!item) return null;

        return {
            ...item,
            thumbnail: item.thumbnailUrl ? { originalUrl: item.thumbnailUrl } : null,
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
        };
    } catch (error) {
        console.error(`Error fetching article by slug ${slug}:`, error);
        return null;
    }
}

export async function getCareerBySlug(slug: string) {
    try {
        // @ts-ignore
        const item = await db.career.findFirst({ // db.career usually works but safe guarding against IDE lag
            where: { slug },
            include: { category: true }
        }).catch(() => null);

        if (!item) return null;

        return {
            ...item,
            requirements: item.requirements ? JSON.parse(item.requirements) : [],
            created_at: item.createdAt.toISOString(),
            updated_at: item.updatedAt.toISOString(),
        };
    } catch (error) {
        console.error(`Error fetching career by slug ${slug}:`, error);
        return null;
    }
}

export async function getCaseStudyBySlug(slug: string) {
    try {
        // @ts-ignore
        const item = await db.caseStudy.findFirst({
            where: { slug },
            include: { client: true }
        }).catch(() => null);

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
    } catch (error) {
        console.error(`Error fetching case study by slug ${slug}:`, error);
        return null;
    }
}

export async function getRelatedCaseStudies(excludeId: string, clientId?: string) {
    if (!clientId) return [];

    try {
        // @ts-ignore
        const items = await db.caseStudy.findMany({
            where: {
                id: { not: excludeId },
                clientId: clientId,
                status: 'published'
            },
            include: { client: true },
            take: 4
        }).catch(() => []);

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
    } catch (error) {
        console.error('Error fetching related case studies:', error);
        return [];
    }
}

export async function getCaseStudies() {
    try {
        // @ts-ignore
        const items = await db.caseStudy.findMany({
            where: { status: 'published' },
            include: { client: true },
            orderBy: { createdAt: 'desc' }
        }).catch(() => []);

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
    } catch (error) {
        console.error('Error fetching case studies:', error);
        return [];
    }
}

export async function getValueBySlug(slug: string) {
    try {
        // @ts-ignore
        const item = await db.value.findFirst({
            where: { slug }
        }).catch(() => null);

        if (!item) return null;

        return {
            ...item,
            iconUrl: item.iconUrl,
            background: { originalUrl: item.bgUrl },
            thumbnail: { originalUrl: null }, // Schema doesn't have thumbnail yet
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
        };
    } catch (error) {
        console.error(`Error fetching value by slug ${slug}:`, error);
        return null;
    }
}
