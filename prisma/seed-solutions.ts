import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const solutions = [
    {
        title: "Brand Strategy & Positioning",
        subtitle: "Define your north star",
        description: "Kami membantu memetakan posisi merek—mulai dari brand audit, audience insight, hingga messaging framework. Hasilnya: diferensiasi jelas dan arah kreatif yang konsisten di semua kanal.",
        slug: "brand-strategy-positioning",
    },
    {
        title: "Creative & Content Production",
        subtitle: "Stories that move people",
        description: "Produksi konten end-to-end—video, foto, desain, copy—berbasis insight dan pilar konten. Optimized untuk setiap platform agar kampanye terasa relevan dan engaging.",
        slug: "creative-content-production",
    },
    {
        title: "Social Media & Community Management",
        subtitle: "From followers to fans",
        description: "Strategi kanal (IG, TikTok, X, LinkedIn), kalender konten, dan community management. Kami bangun percakapan bermakna yang mendorong loyalitas dan advocacy.",
        slug: "social-media-community-management",
    },
    {
        title: "Digital Performance Marketing",
        subtitle: "Results you can measure",
        description: "Strategi funnel dan eksekusi iklan di Meta, TikTok, Google. Fokus pada creative testing, optimasi CPA/ROAS, dan atribusi yang jelas.",
        slug: "digital-performance-marketing",
    },
    {
        title: "SEO & Organic Growth",
        subtitle: "Be found, stay chosen",
        description: "Pertumbuhan organik melalui technical SEO, on-page, content cluster, dan link building. Dirancang untuk stabil, berkelanjutan, dan anti-volatile.",
        slug: "seo-organic-growth",
    },
    {
        title: "Web & Conversion (CRO)",
        subtitle: "Turn clicks into customers",
        description: "Landing page dan website berorientasi konversi: UX jelas, copy tajam, tracking rapi. Tujuannya: CTR naik, CPA turun.",
        slug: "web-conversion-cro",
    },
    {
        title: "Influencer & KOL Marketing",
        subtitle: "Creators who convert",
        description: "Aktivasi KOL end-to-end: mapping, outreach, brief kreatif, contract & tracking performa. Fokus ke relevansi dan dampak bisnis.",
        slug: "influencer-kol-marketing",
    },
    {
        title: "CRM & Lifecycle Marketing",
        subtitle: "Retention beats acquisition",
        description: "Email, WhatsApp, dan automation untuk meningkatkan repeat rate & CLV. Segmentasi, personalisasi, dan journey yang relevan.",
        slug: "crm-lifecycle-marketing",
    },
];

async function main() {
    console.log("Start seeding solutions...");

    // Clear existing to avoid duplicates if re-running (optional, but safer for "Insert all these" request)
    // await prisma.speciality.deleteMany({}); 

    for (const sol of solutions) {
        const exists = await prisma.speciality.findUnique({ where: { slug: sol.slug } });
        if (!exists) {
            await prisma.speciality.create({
                data: {
                    title: sol.title,
                    subtitle: sol.subtitle,
                    excerpt: sol.description, // Using description as excerpt for now
                    description: sol.description, // And as description (maybe HTML later)
                    slug: sol.slug,
                    order: solutions.indexOf(sol),
                },
            });
            console.log(`Created solution: ${sol.title}`);
        } else {
            console.log(`Skipped (already exists): ${sol.title}`);
        }
    }
    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
