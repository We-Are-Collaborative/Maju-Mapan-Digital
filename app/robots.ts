import { MetadataRoute } from 'next';
import { prisma } from '@/lib/db';

export default async function robots(): Promise<MetadataRoute.Robots> {
    try {
        const settings = await prisma.globalSettings.findFirst();

        if (settings?.robotsTxt) {
            // Basic parser for manual content (very simplified)
            // For now, if manual content exists, we might just return it if the API allowed raw string.
            // But Next.js robots() returns an object.
            // So we will parse the custom string or valid defaults.

            // If the user provided a full Custom robots.txt string, we technically can't fully return it via this object structure easily without parsing.
            // However, usually robots.txt is simple. 
            // If we want to support RAW content, we might need a route.ts at app/robots.txt/route.ts instead.
            // But let's stick to the Next.js convention for now and assume the user puts "User-agent: *\nAllow: /"

            const rules = [];
            const lines = settings.robotsTxt.split('\n');
            let currentUserAgent = '*';
            const allow = [];
            const disallow = [];

            // Very naive parser to map string to object
            for (const line of lines) {
                if (line.trim().startsWith('User-agent:')) {
                    currentUserAgent = line.split(':')[1].trim();
                } else if (line.trim().startsWith('Allow:')) {
                    allow.push(line.split(':')[1].trim());
                } else if (line.trim().startsWith('Disallow:')) {
                    disallow.push(line.split(':')[1].trim());
                }
            }

            return {
                rules: {
                    userAgent: currentUserAgent,
                    allow: allow.length > 0 ? allow : undefined,
                    disallow: disallow.length > 0 ? disallow : undefined,
                },
                sitemap: `${process.env.NEXTAUTH_URL}/sitemap.xml`,
            }
        }
    } catch (e) {
        // ignore
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/admin/',
        },
        sitemap: `${process.env.NEXTAUTH_URL}/sitemap.xml`,
    }
}
