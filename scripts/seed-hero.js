const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedHero() {
    try {
        const hero = await prisma.homeHero.create({
            data: {
                titleLine1: "Award",
                titleHighlight: "Winning",
                titleSuffix: "Agency",
                subtitle: "Your partner in profitable growth—turning traffic into tangible revenue.",
                ctaText: "Set a Meeting",
                ctaLink: "#",
                isActive: true
            }
        });
        console.log('Hero Seeded Successfully:', hero);
    } catch (error) {
        console.error('Error seeding Hero:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedHero();
