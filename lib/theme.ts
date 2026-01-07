import { prisma } from "@/lib/db";

export const defaultTheme = {
    colors: {
        primary: "#84cc16", // lime-500
        secondary: "#0f172a", // slate-900
        accent: "#10b981", // emerald-500
        background: "#f8fafc", // slate-50
        foreground: "#0f172a", // slate-900
    }
};

export async function getTheme(type: "admin" | "public") {
    try {
        const theme = await prisma.theme.findUnique({
            where: { name: type }
        });

        if (theme && theme.colors) {
            return { ...JSON.parse(theme.colors) };
        }
    } catch (e) {
        console.warn("Failed to fetch theme", e);
    }
    return defaultTheme;
}

export function generateThemeCss(theme: any) {
    // Simple CSS variable generation
    const colors = theme.colors || defaultTheme.colors;

    return `
    :root {
      --primary: ${colors.primary};
      --secondary: ${colors.secondary};
      --accent: ${colors.accent};
      --background: ${colors.background};
      --foreground: ${colors.foreground};
    }
  `;
}
