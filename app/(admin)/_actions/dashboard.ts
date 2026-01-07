"use server";
import { prisma } from "@/lib/db";

export async function getKpiStats() {
    try {
        const [visits, usersCount, pagesCount] = await Promise.all([
            // Mock visits or fetch from a hypothetical analytics table
            Promise.resolve(124500),
            prisma.user.count(),
            prisma.pageContent.count()
        ]);

        return {
            visits: (visits / 1000).toFixed(1) + "K",
            activeUsers: usersCount,
            totalPages: pagesCount
        };
    } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
        return { visits: "0", activeUsers: 0, totalPages: 0 };
    }
}
