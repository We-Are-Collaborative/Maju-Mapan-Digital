import { prisma } from "@/lib/db";
import { defaultAdminTheme, defaultPublicTheme, AdminTheme, PublicTheme } from "./design-system";
import { unstable_noStore as noStore } from 'next/cache';

export const defaultTheme = defaultAdminTheme;

export async function getTheme(type: "admin" | "public") {
    noStore(); // Disable caching for fresh updates
    try {
        const theme = await prisma.theme.findUnique({
            where: { name: type }
        });

        if (type === 'admin') {
            let loadedConfig = {};
            if (theme?.config) {
                try { loadedConfig = JSON.parse(theme.config); } catch (e) { }
            }

            // Simplistic merge for now, prioritizing config
            if ((loadedConfig as any).colors) {
                return { ...defaultAdminTheme, ...loadedConfig } as AdminTheme;
            }
            return defaultAdminTheme;
        }

        if (type === 'public') {
            let loadedConfig = {};
            if (theme?.config) {
                try { loadedConfig = JSON.parse(theme.config); } catch (e) { }
            }

            if ((loadedConfig as any).colors) {
                return { ...defaultPublicTheme, ...loadedConfig } as PublicTheme;
            }
            return defaultPublicTheme;
        }

    } catch (e) {
        console.warn("Failed to fetch theme", e);
    }
    return defaultTheme;
}

function flattenTheme(obj: any, prefix = ''): Record<string, string> {
    const flattened: Record<string, string> = {};

    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        const value = obj[key];
        const newKey = prefix ? `${prefix}-${key}` : key;

        if (typeof value === 'object' && value !== null) {
            Object.assign(flattened, flattenTheme(value, newKey));
        } else {
            // CSS Variable Key: --key-subkey
            // Convert camelCase to kebab-case for CSS standards? 
            // The prompt says "colors.sidebar.background", let's make it --colors-sidebar-background
            // But camelCase is easier to map from JSON. Let's stick to hyphens for CSS.
            const kebabKey = newKey.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
            flattened[`--${kebabKey}`] = value;
        }
    }
    return flattened;
}

export function generateThemeCss(theme: any) {
    const vars = flattenTheme(theme);

    // Also include legacy fallback vars for generic components
    // --primary, --secondary etc.
    const legacyVars: Record<string, string> = {};
    if (theme.colors?.global) {
        legacyVars['--primary'] = theme.colors.global.primary;
        legacyVars['--secondary'] = theme.colors.global.secondary;
        legacyVars['--accent'] = theme.colors.global.accent;
        legacyVars['--background'] = theme.colors.global.background;
        legacyVars['--foreground'] = theme.colors.global.text?.body || '#000';
    }

    const allVars = { ...vars, ...legacyVars };

    const cssString = Object.entries(allVars)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n');

    return `
    :root {
      ${cssString}
    }
  `;
}

