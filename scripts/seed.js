const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // 1. Create Default User (Admin)
    const adminEmail = 'admin@majumapan.com';
    const existingUser = await prisma.user.findUnique({ where: { email: adminEmail } });

    if (!existingUser) {
        await prisma.user.create({
            data: {
                email: adminEmail,
                name: 'Admin User',
                role: 'admin',
                // In real app, hash this. For demo/dev: simple text or pre-hashed
                password: '$2b$10$EpIx.i4/.r7.r7.r7.r7.r7.r7.r7.r7.r7.r7', // mock hash
            }
        });
        console.log('Created admin user');
    }

    // 2. Create System Pages
    const systemPages = [
        { title: 'Header', slug: 'header', pageSlug: 'system-header' },
        { title: 'Footer', slug: 'footer', pageSlug: 'system-footer' },
    ];

    for (const p of systemPages) {
        const exists = await prisma.pageContent.findUnique({ where: { slug: p.slug } });
        if (!exists) {
            await prisma.pageContent.create({
                data: {
                    title: p.title,
                    slug: p.slug,
                    pageSlug: p.pageSlug
                }
            });
            console.log(`Created system page: ${p.title}`);
        }
    }

    // 3. Create Home Page
    const homeExists = await prisma.pageContent.findFirst({ where: { pageSlug: 'home' } });
    if (!homeExists) {
        await prisma.pageContent.create({
            data: {
                title: 'Home Page',
                slug: 'home-page',
                pageSlug: 'home',
                sections: {
                    create: [
                        {
                            name: 'Hero Section',
                            type: 'html',
                            position: 0,
                            htmlContent: '<h1>Welcome to Maju Mapan</h1><p>Your success is our priority.</p>'
                        }
                    ]
                }
            }
        });
        console.log('Created Home page');
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
