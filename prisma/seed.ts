import { PrismaClient } from '@prisma/client';
import { mockValues, mockTeam, mockSpecialities, mockClients, mockCategories, mockArticles, mockCaseStudies, mockCareers, mockPageSeo } from '../lib/mock-data';

import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding ...');

    // Admin User
    const adminEmail = 'admin@majumapandigital.com';
    const hashedPassword = hashSync('admin123', 10);

    await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: 'Master Admin',
            password: hashedPassword,
            role: 'admin'
        }
    });

    console.log(`Admin user created: ${adminEmail} / admin123`);

    // Nav Menu
    const navItems = [
        { label: 'Home', path: '/', position: 0 },
        { label: 'About Us', path: '/about-us', position: 1 },
        { label: 'Solutions', path: '/solutions', position: 2 },
        { label: 'Case Studies', path: '/case-studies', position: 3 },
        { label: 'Insights', path: '/insights', position: 4 },
        { label: 'Careers', path: '/careers', position: 5 },
        { label: 'Contact Us', path: '/contact-us', position: 6 },
    ];

    // @ts-ignore
    await prisma.navMenu.deleteMany({});

    for (const item of navItems) {
        // @ts-ignore
        await prisma.navMenu.create({
            data: {
                label: item.label,
                path: item.path,
                position: item.position,
                isActive: true
            }
        });
    }

    // Values
    for (const value of mockValues) {
        // @ts-ignore
        await prisma.value.upsert({
            where: { slug: value.slug },
            update: {},
            create: {
                title: value.title,
                subtitle: value.subtitle,
                excerpt: value.excerpt,
                slug: value.slug,
                iconUrl: value.iconUrl,
                bgUrl: value.background?.originalUrl,
            },
        });
    }

    // Team
    for (const member of mockTeam) {
        // @ts-ignore
        await prisma.teamMember.create({
            data: {
                name: member.name,
                position: member.position,
                excerpt: member.excerpt,
                thumbnailUrl: member.thumbnail?.originalUrl,
                linkedinUrl: member.linkedinUrl,
                email: member.email,
            },
        });
    }

    // Specialities
    for (const item of mockSpecialities) {
        // @ts-ignore
        await prisma.speciality.upsert({
            where: { slug: item.slug },
            update: {},
            create: {
                title: item.title || '',
                subtitle: item.subtitle,
                slug: item.slug || '',
                excerpt: item.excerpt,
                description: item.description,
                iconUrl: item.iconUrl,
                bgUrl: (item.background as any)?.originalUrl,
                thumbnailUrl: (item.thumbnail as any)?.originalUrl,
            },
        });
    }

    // Clients
    for (const client of mockClients) {
        // @ts-ignore
        await prisma.client.upsert({
            where: { slug: client.slug },
            update: {},
            create: {
                name: client.name,
                slug: client.slug,
                description: client.description,
                excerpt: client.excerpt,
                logoUrl: (client.logo as any)?.originalUrl,
                isFeatured: client.isFeatured,
                status: client.status,
            }
        });
    }

    // Categories
    for (const cat of mockCategories) {
        // @ts-ignore
        await prisma.category.upsert({
            where: { slug: cat.slug },
            update: {},
            create: {
                name: cat.name || '',
                slug: cat.slug || '',
            }
        })
    }

    // Articles
    for (const article of mockArticles) {
        const cat = mockCategories.find(c => c.id === article.categoryId);
        let catId: string | undefined;
        if (cat) {
            // @ts-ignore
            const dbCat = await prisma.category.findUnique({ where: { slug: cat.slug } });
            catId = dbCat?.id;
        }

        // @ts-ignore
        await prisma.article.upsert({
            where: { slug: article.slug },
            update: {},
            create: {
                title: article.title || '',
                slug: article.slug || '',
                excerpt: article.excerpt,
                content: article.content,
                thumbnailUrl: (article.thumbnail as any)?.originalUrl,
                categoryId: catId,
                status: article.status,
                isFeatured: article.isFeatured,
            }
        })
    }

    // Case Studies
    for (const study of mockCaseStudies) {
        if (!study.client?.slug) continue;
        const client = await prisma.client.findUnique({ where: { slug: study.client.slug } });
        if (client) {
            // @ts-ignore
            await prisma.caseStudy.upsert({
                where: { slug: study.slug },
                update: {},
                create: {
                    title: study.title,
                    slug: study.slug,
                    excerpt: study.excerpt,
                    content: study.content,
                    thumbnailUrl: (study.thumbnail as any)?.originalUrl,
                    clientId: client.id,
                    status: study.status,
                    isFeatured: study.isFeatured,
                }
            });
        }
    }

    // Page Content (Home)
    // Page Content (Home)
    const homePage = await prisma.pageContent.upsert({
        where: { slug: 'home' },
        update: {},
        create: {
            title: 'Home',
            slug: 'home',
            pageSlug: 'home',
        }
    });

    // Create the content section (Avoid duplicates)
    const existingMainContent = await prisma.pageSection.findFirst({
        where: { pageId: homePage.id, name: 'main_content', type: 'json_content' }
    });

    if (!existingMainContent) {
        await prisma.pageSection.create({
            data: {
                pageId: homePage.id,
                name: 'main_content',
                type: 'json_content',
                splitFeatureSection: JSON.stringify(mockPageSeo.content),
                position: 0
            }
        });
    } else {
        await prisma.pageSection.update({
            where: { id: existingMainContent.id },
            data: {
                splitFeatureSection: JSON.stringify(mockPageSeo.content)
            }
        });
    }

    // SEO Config
    // @ts-ignore
    await prisma.sEO.upsert({
        where: { pageId: homePage.id },
        update: {
            metaTitle: mockPageSeo.seoConfig?.title,
            metaDescription: mockPageSeo.seoConfig?.description,
        },
        create: {
            pageId: homePage.id,
            metaTitle: mockPageSeo.seoConfig?.title,
            metaDescription: mockPageSeo.seoConfig?.description,
        }
    });

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
