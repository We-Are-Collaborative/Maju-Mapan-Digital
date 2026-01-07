import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const theme = await prisma.theme.findUnique({
            where: { name: "public" }
        });

        if (!theme) {
            // Return default if not found
            return NextResponse.json({
                primaryColor: "#a3e635",
                secondaryColor: "#000000",
                backgroundColor: "#ffffff",
                textColor: "#0f172a",
                headingFont: "Inter",
                bodyFont: "Inter"
            });
        }

        // Parse stored JSON config
        // Schema has 'colors' field which likely stores the whole config based on usage
        let config = {};
        try {
            config = JSON.parse(theme.colors);
        } catch (e) {
            console.error("Failed to parse theme config", e);
        }

        return NextResponse.json({
            id: theme.id,
            ...config
        });
    } catch (error) {
        console.error("Error fetching theme:", error);
        return NextResponse.json({ error: "Failed to fetch theme" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Remove ID from body if present to avoid collision or misuse
        const { id, ...config } = body;

        const theme = await prisma.theme.upsert({
            where: { name: "public" },
            update: {
                colors: JSON.stringify(config)
            },
            create: {
                name: "public",
                colors: JSON.stringify(config)
            }
        });

        return NextResponse.json({ success: true, theme });
    } catch (error) {
        console.error("Error saving theme:", error);
        return NextResponse.json({ error: "Failed to save theme" }, { status: 500 });
    }
}
