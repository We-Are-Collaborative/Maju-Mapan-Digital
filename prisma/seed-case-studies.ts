import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const caseStudies = [
    {
        title: "TechStart Rebrand 2025",
        slug: "techstart-rebrand-2025",
        excerpt: "Complete visual identity overhaul for a leading fintech startup.",
        content: "<p>Full rebranding campaign including logo design, brand guidelines, and web design.</p>",
        thumbnailUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
        clientName: "TechStart Inc",
    },
    {
        title: "Coffee Culture Social Campaign",
        slug: "coffee-culture-social",
        excerpt: "Viral TikTok and Instagram campaign driving 200% foot traffic increase.",
        content: "<p>Strategic content creation and influencer partnerships.</p>",
        thumbnailUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
        clientName: "Daily Brew",
    },
    {
        title: "EcoLife E-commerce Launch",
        slug: "ecolife-ecommerce",
        excerpt: "Shopify Plus development with customheadless frontend.",
        content: "<p>High-conversion e-commerce store for sustainable products.</p>",
        thumbnailUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000",
        clientName: "EcoLife",
    },
    {
        title: "Urban Gym App UI/UX",
        slug: "urban-gym-app",
        excerpt: "User-centric mobile app design for fitness tracking.",
        content: "<p>Intuitive interface design focusing on user retention and gamification.</p>",
        thumbnailUrl: "https://images.unsplash.com/photo-1534096210335-a3b9615e3e9d?auto=format&fit=crop&q=80&w=1000",
        clientName: "Urban Fitness",
    },
    {
        title: "Luxury Estate Video Tour",
        slug: "luxury-estate-video",
        excerpt: "Cinematic property tours for high-end real estate listings.",
        content: "<p>4K drone footage and interior walkthroughs.</p>",
        thumbnailUrl: "https://images.unsplash.com/photo-1600596542815-ecad4c98c253?auto=format&fit=crop&q=80&w=1000",
        clientName: "Prime Estates",
    }
];

async function main() {
    console.log("Start seeding case studies...");

    for (const item of caseStudies) {
        // Ensure Client Exists
        let client = await prisma.client.findUnique({ where: { slug: item.clientName.toLowerCase().replace(/ /g, '-') } });
        if (!client) {
            client = await prisma.client.create({
                data: {
                    name: item.clientName,
                    slug: item.clientName.toLowerCase().replace(/ /g, '-'),
                    description: "Generated client for case study seed.",
                    logoUrl: "https://via.placeholder.com/150"
                }
            });
            console.log(`Created client: ${client.name}`);
        }

        // Create CaseStudy
        // @ts-ignore
        const exists = await prisma.caseStudy.findUnique({ where: { slug: item.slug } });
        if (!exists) {
            // @ts-ignore
            await prisma.caseStudy.create({
                data: {
                    title: item.title,
                    slug: item.slug,
                    excerpt: item.excerpt,
                    content: item.content,
                    thumbnailUrl: item.thumbnailUrl,
                    clientId: client.id,
                    isFeatured: true, // Make them featured for visibility
                },
            });
            console.log(`Created case study: ${item.title}`);
        } else {
            console.log(`Skipped (already exists): ${item.title}`);
        }
    }
    console.log("Case studies seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
