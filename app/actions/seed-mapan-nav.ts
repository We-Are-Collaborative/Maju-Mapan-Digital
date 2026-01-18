'use server'

import { prisma } from '@/lib/db'

export async function seedMapanNavigation() {
    try {
        console.log("Seeding Mapan Navigation...");

        // 1. Create or Update the Category
        const category = await prisma.adminNavCategory.upsert({
            where: { id: "mapan-dashboard-cat" }, // Fixed ID to prevent duplicates if we re-run
            update: {
                title: "Mapan Dashboard",
                position: 2 // Assuming usually top is 0, 1. Adjust if needed.
            },
            create: {
                id: "mapan-dashboard-cat",
                title: "Mapan Dashboard",
                position: 2
            }
        });

        // 2. Define Items
        const items = [
            { name: "Dashboard", href: "/admin/mapan/dashboard", icon: "LayoutDashboard" },
            { name: "Brands", href: "/admin/mapan/brands", icon: "Briefcase" },
            { name: "AVE Calculator", href: "/admin/mapan/ave-calculator", icon: "Calculator" }, // "Calculator" isn't in default Lucide imports often, check availability or use 'Activity'
            { name: "Settings", href: "/admin/mapan/settings", icon: "Settings" },
        ];

        // 3. Upsert Items
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemId = `mapan-nav-${item.name.toLowerCase().replace(' ', '-')}`;

            await prisma.adminNavItem.upsert({
                where: { id: itemId },
                update: {
                    name: item.name,
                    href: item.href,
                    icon: item.icon,
                    position: i,
                    categoryId: category.id
                },
                create: {
                    id: itemId,
                    name: item.name,
                    href: item.href,
                    icon: item.icon,
                    position: i,
                    categoryId: category.id
                }
            });
        }

        console.log("Mapan Navigation Seeded Successfully.");
        return { success: true };
    } catch (error) {
        console.error("Failed to seed Mapan navigation:", error);
        return { success: false, error };
    }
}
