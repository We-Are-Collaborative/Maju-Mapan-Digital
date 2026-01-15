const { PrismaClient } = require('@prisma/client');
// @ts-ignore
const prisma = new PrismaClient();

async function main() {
    console.log("Seeding Design System Themes...");

    // 1. Define Public Theme (The source of truth)
    const publicTheme = {
        name: "public",
        colors: {
            "Background (Deep Black)": "#0f172a", // oklch(0.145 0 0)
            "Foreground (White)": "#ffffff",      // oklch(0.985 0 0)
            "Primary Brand (Teal Green)": "#2fddad",
            "Secondary (Emerald)": "#10b981",
            "Accent (Lime)": "#84cc16",
            "Gradient One": "from-black via-black/80 to-transparent"
        },
        config: {
            typography: {
                primaryFont: "DM Sans (Fallback: System Sans)",
                headings: "font-black tracking-tight (text-4xl to text-6xl)",
                body: "text-gray-300 or text-gray-400"
            },
            buttons: {
                "Branded CTA": {
                    style: "rounded-full bg-brand-500 (#2fddad) text-black font-bold",
                    interaction: "hover:scale-105 + shadow-lg (Glow effect)"
                },
                "Standard Default": {
                    style: "White text on Dark background (Primary)"
                },
                "Standard Secondary": {
                    style: "Dark text on Light background"
                }
            },
            components: {
                navbar: "Dynamic SVG/GIF managed via Global Settings",
                hero: "Full-width background images with gradient overlays",
                animations: "Custom slide-up and fade-in CSS animations"
            }
        }
    };

    // 2. Define Admin Theme (Default / Clean)
    const adminTheme = {
        name: "admin",
        colors: {
            primary: "#a3e635",    // Lime 400
            secondary: "#000000",
            backgroundColor: "#f8fafc", // Slate 50
            textColor: "#0f172a"
        },
        config: {
            typography: {
                primaryFont: "Inter / System UI",
                headings: "font-black tracking-tight text-slate-900",
                body: "text-slate-600 font-medium"
            },
            buttons: {
                primary: {
                    style: "rounded-xl bg-lime-400 text-black font-bold shadow-lg"
                },
                danger: {
                    style: "rounded-xl bg-rose-50 text-rose-600 border border-rose-200"
                }
            }
        }
    };

    // 3. Upsert Records
    await upsertTheme(publicTheme);
    await upsertTheme(adminTheme);
}

// @ts-ignore
async function upsertTheme(themeData) {
    const { name, colors, config } = themeData;

    // Store objects as JSON strings for the DB
    const colorsString = JSON.stringify(colors);
    const configString = JSON.stringify(config);

    const existing = await prisma.theme.findUnique({ where: { name } });

    if (existing) {
        await prisma.theme.update({
            where: { name },
            data: { colors: colorsString, config: configString }
        });
        console.log(`✅ Updated theme: ${name}`);
    } else {
        await prisma.theme.create({
            data: {
                name,
                colors: colorsString,
                config: configString
            }
        });
        console.log(`✅ Created theme: ${name}`);
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
