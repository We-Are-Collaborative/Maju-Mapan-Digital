import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Start restoration of premium case studies...");

    // 1. Clear existing data
    await prisma.caseStudy.deleteMany({});
    await prisma.client.deleteMany({});
    console.log("Cleared existing clients and case studies.");

    // 2. Insert Premium Clients
    const clients = [
        {
            name: "Grab",
            legalName: "PT Grab Teknologi Indonesia",
            slug: "grab",
            description: "Southeast Asia's leading superapp with over 187 million users.",
            brandColor: "#00B14F",
            logoUrl: "/assets/client/grab.svg",
            isFeatured: true,
            status: "active",
            order: 1
        },
        {
            name: "Traveloka",
            legalName: "PT Traveloka Indonesia",
            slug: "traveloka",
            description: "The ultimate lifestyle companion for millions across the region.",
            brandColor: "#0194F3",
            logoUrl: "/assets/client/traveloka.svg",
            isFeatured: true,
            status: "active",
            order: 2
        },
        {
            name: "Shopee",
            legalName: "Shopee International Southeast Asia Limited",
            slug: "shopee",
            description: "Connecting millions of users through a mobile-first social commerce experience.",
            brandColor: "#EE4D2D",
            logoUrl: "/assets/client/shopee.svg",
            isFeatured: true,
            status: "active",
            order: 3
        }
    ];

    const createdClients = [];
    for (const c of clients) {
        const client = await prisma.client.create({ data: c });
        createdClients.push(client);
        console.log(`Created client: ${client.name}`);
    }

    // 3. Insert Premium Case Studies
    const caseStudies = [
        {
            title: "Influencer Marketing Mastery",
            slug: "grab-influencer-marketing",
            excerpt: "Driving hyper-growth in user acquisition through highly targeted influencer campaigns.",
            content: `
                <h3>Objective</h3><p>To acquire 1 million new users across Southeast Asia through hyper-localized influencer marketing.</p>
                <h3>Challenges</h3><p>Fragmented influencer landscape and difficulty in measuring direct ROI for brand-awareness campaigns.</p>
                <h3>Strategy</h3><p>Collaborated with 500+ micro-influencers and 50 mega-influencers using a data-driven approach based on geographic and behavior segmentation.</p>
                <h3>Results</h3><p>30% growth in user acquisition and 12% engagement rate across all social channels.</p>
            `,
            thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
            clientId: createdClients.find(c => c.slug === "grab")?.id,
            isFeatured: true,
            status: "published",
            metrics: JSON.stringify([
                { label: "REACH", value: "5M+" },
                { label: "ENGAGEMENT", value: "12%" }
            ])
        },
        {
            title: "Brand Storytelling Evolution",
            slug: "traveloka-brand-evolution",
            excerpt: "Redefining Traveloka as the ultimate lifestyle companion through emotive storytelling.",
            content: `
                <h3>Objective</h3><p>Shift brand perception from a functional booking engine to an aspirational lifestyle companion.</p>
                <h3>Challenges</h3><p>High market saturated with "transaction-focused" competitors and low emotional engagement.</p>
                <h3>Strategy</h3><p>Launched "Your World, Your Way" campaign featuring scenic travel paths and emotive storytelling across digital and OOH media.</p>
                <h3>Results</h3><p>45% brand lift and 80% increase in brand awareness across target demographics.</p>
            `,
            thumbnailUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1000",
            clientId: createdClients.find(c => c.slug === "traveloka")?.id,
            isFeatured: true,
            status: "published",
            metrics: JSON.stringify([
                { label: "BRAND LIFT", value: "45%" },
                { label: "AWARENESS", value: "80%" }
            ])
        },
        {
            title: "Social Commerce Revolution",
            slug: "shopee-social-commerce",
            excerpt: "Revolutionizing social commerce with hyper-targeted content and viral trends.",
            content: `
                <h3>Objective</h3><p>Increase conversion rates from social media referrals by 50% through viral and interactive content.</p>
                <h3>Challenges</h3><p>Algorithm changes reducing organic reach and high competition during seasonal sales (9.9, 11.11, 12.12).</p>
                <h3>Strategy</h3><p>Implemented an always-on "Entertain-commerce" strategy with interactive live sessions and trending social challenges.</p>
                <h3>Results</h3><p>Reached 1M+ followers and achieved an 8.5% click-through rate to Shopee storefronts.</p>
            `,
            thumbnailUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000",
            clientId: createdClients.find(c => c.slug === "shopee")?.id,
            isFeatured: true,
            status: "published",
            metrics: JSON.stringify([
                { label: "FOLLOWERS", value: "1M+" },
                { label: "CTR", value: "8.5%" }
            ])
        }
    ];

    for (const cs of caseStudies) {
        await prisma.caseStudy.create({ data: cs });
        console.log(`Created case study: ${cs.title}`);
    }

    console.log("Restoration finished successfully.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
