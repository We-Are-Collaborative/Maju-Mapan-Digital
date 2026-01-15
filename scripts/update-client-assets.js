const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const clientUpdates = [
    {
        slug: 'grab',
        logoUrl: '/assets/client/Grab_logo.svg', // Assuming Grab might be there or I'll use another if not
        brandColor: '#00B14F'
    },
    {
        slug: 'traveloka',
        logoUrl: '/assets/client/Traveloka-Logo-Vector.svg-.svg',
        brandColor: '#0194F3'
    },
    {
        slug: 'shopee',
        logoUrl: '/assets/client/Shopee_logo.svg',
        brandColor: '#EE4D2D'
    },
    {
        slug: 'axis',
        logoUrl: '/assets/client/Axis_logo.svg',
        brandColor: '#4F2D7F'
    },
    {
        slug: 'ovo',
        logoUrl: '/assets/client/Logo_ovo_purple.svg.svg',
        brandColor: '#4C2A86'
    },
    {
        slug: 'hokben',
        logoUrl: '/assets/client/HokBen_new_logo.svg',
        brandColor: '#FFD100'
    },
    {
        slug: 'jt-express',
        logoUrl: '/assets/client/J&T_Express_logo.svg',
        brandColor: '#FF0000'
    },
    {
        slug: 'pegadaian',
        logoUrl: '/assets/client/Pegadaian_logo.svg',
        brandColor: '#006B3F'
    }
];

async function main() {
    for (const update of clientUpdates) {
        try {
            const client = await prisma.client.update({
                where: { slug: update.slug },
                data: {
                    logoUrl: update.logoUrl,
                    brandColor: update.brandColor,
                    isFeatured: true
                }
            });
            console.log(`Updated client: ${client.name}`);
        } catch (e) {
            console.log(`Client with slug ${update.slug} not found, skipping.`);
            // Optionally create them if they don't exist but for now let's just update existing ones
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
