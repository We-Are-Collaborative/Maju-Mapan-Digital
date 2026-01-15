const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const additionalClients = [
    {
        name: 'Axis',
        slug: 'axis',
        logoUrl: '/assets/client/Axis_logo.svg',
        brandColor: '#4F2D7F',
        isFeatured: true,
        order: 4
    },
    {
        name: 'HokBen',
        slug: 'hokben',
        logoUrl: '/assets/client/HokBen_new_logo.svg',
        brandColor: '#FFD100',
        isFeatured: true,
        order: 5
    },
    {
        name: 'OVO',
        slug: 'ovo',
        logoUrl: '/assets/client/Logo_ovo_purple.svg.svg',
        brandColor: '#4C2A86',
        isFeatured: true,
        order: 6
    },
    {
        name: 'J&T Express',
        slug: 'jt-express',
        logoUrl: '/assets/client/J&T_Express_logo.svg',
        brandColor: '#FF0000',
        isFeatured: true,
        order: 7
    },
    {
        name: 'Pegadaian',
        slug: 'pegadaian',
        logoUrl: '/assets/client/Pegadaian_logo.svg',
        brandColor: '#006B3F',
        isFeatured: true,
        order: 8
    },
    {
        name: 'Astro',
        slug: 'astro',
        logoUrl: '/assets/client/New-Astro-Logo.svg',
        brandColor: '#F58220',
        isFeatured: true,
        order: 9
    },
    {
        name: 'Home Credit',
        slug: 'home-credit',
        logoUrl: '/assets/client/Home_Credit_logo.svg.svg',
        brandColor: '#E30613',
        isFeatured: true,
        order: 10
    }
];

async function main() {
    for (const data of additionalClients) {
        await prisma.client.upsert({
            where: { slug: data.slug },
            update: {
                logoUrl: data.logoUrl,
                brandColor: data.brandColor,
                isFeatured: true,
                order: data.order
            },
            create: data
        });
        console.log(`Upserted client: ${data.name}`);
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
