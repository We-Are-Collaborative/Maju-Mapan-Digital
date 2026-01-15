const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allLogos = [
    { name: 'Axis', file: 'Axis_logo.svg', color: '#4F2D7F' },
    { name: 'Camel', file: 'Camel-Logo.svg', color: '#006C35' },
    { name: 'Citroen', file: 'Citroen-Logo-PNG-Cutout.svg', color: '#CC0000' },
    { name: 'HokBen', file: 'HokBen_new_logo.svg', color: '#FFD100' },
    { name: 'Home Credit', file: 'Home_Credit_logo.svg.svg', color: '#E30613' },
    { name: 'J&T Express', file: 'J&T_Express_logo.svg', color: '#FF0000' },
    { name: 'Kahf', file: 'Kahf-Logo-Vector.svg-.svg', color: '#2F3E33' },
    { name: 'Pegadaian Syariah', file: 'Logo Pegadaian  Syariah.svg', color: '#006B3F' },
    { name: 'OVO', file: 'Logo_ovo_purple.svg.svg', color: '#4C2A86' },
    { name: 'Morf', file: 'Morf-Logo-1.svg', color: '#000000' },
    { name: 'Astro', file: 'New-Astro-Logo.svg', color: '#F58220' },
    { name: 'Pegadaian', file: 'Pegadaian_logo.svg', color: '#006B3F' },
    { name: 'Shopee', file: 'Shopee_logo.svg', color: '#EE4D2D' },
    { name: 'The Ascott', file: 'The_Ascott_Limited.svg', color: '#A88F54' },
    { name: 'Torabika', file: 'Torabika-sponsor.svg', color: '#8B4513' },
    { name: 'Traveloka', file: 'Traveloka-Logo-Vector.svg-.svg', color: '#0194F3' },
    { name: 'Achieva AI', file: 'achievaai.svg', color: '#6366F1' },
    { name: 'Finally Found You', file: 'finally found you.svg', color: '#E11D48' },
    { name: 'Good Doctor', file: 'good docter.svg', color: '#00AEEF' },
    { name: 'BCAS', file: 'logo-bcas-full-color.svg', color: '#005696' },
    { name: 'Metrox', file: 'metrox.svg', color: '#000000' },
    { name: 'Mind ID', file: 'mind id.svg', color: '#005AAB' },
    { name: 'Pina', file: 'pina.svg', color: '#6366F1' },
    { name: 'Shopback', file: 'shopback.svg', color: '#FA3F55' }
];

async function main() {
    console.log("Starting seed...");
    for (let i = 0; i < allLogos.length; i++) {
        const logo = allLogos[i];
        const slug = logo.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

        // Encode file for URL if it has spaces
        const encodedFile = encodeURIComponent(logo.file);

        await prisma.client.upsert({
            where: { slug },
            update: {
                name: logo.name,
                logoUrl: `/assets/client/${encodedFile}`,
                brandColor: logo.color,
                isFeatured: true,
                order: i
            },
            create: {
                name: logo.name,
                slug,
                logoUrl: `/assets/client/${encodedFile}`,
                brandColor: logo.color,
                isFeatured: true,
                order: i,
                status: 'active'
            }
        });
        console.log(`Upserted: ${logo.name} -> /assets/client/${encodedFile}`);
    }
    console.log("Seed complete.");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
