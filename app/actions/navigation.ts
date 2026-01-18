"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function getNavMenu(type: string = "public") {
    try {
        return await prisma.navMenu.findMany({
            orderBy: { position: 'asc' },
            include: { page: true }
        });
    } catch {
        return [];
    }
}



export async function toggleNavActive(menuId: string | undefined, isActive: boolean) {

    if (!menuId) return { success: false, error: "No menu ID" };

    try {
        await prisma.navMenu.update({
            where: { id: menuId },
            data: { isActive }
        });
        revalidatePath("/admin/content");
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}

// Admin Navigation Actions

export async function getAdminNavigation() {
    try {
        const categories = await prisma.adminNavCategory.findMany({
            include: {
                items: {
                    orderBy: {
                        position: 'asc',
                    },
                },
            },
            orderBy: {
                position: 'asc',
            },
        });
        return categories;
    } catch (error) {
        console.error('Error fetching admin navigation:', error);
        return [];
    }
}

export type AdminNavCategoryWithItems = Awaited<ReturnType<typeof getAdminNavigation>>[number];

export async function upsertAdminNavCategory(data: {
    id?: string;
    title: string;
    position: number;
}) {
    try {
        if (data.id) {
            await prisma.adminNavCategory.update({
                where: { id: data.id },
                data: {
                    title: data.title,
                    position: data.position,
                },
            });
        } else {
            await prisma.adminNavCategory.create({
                data: {
                    title: data.title,
                    position: data.position,
                },
            });
        }
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error('Error upserting admin nav category:', error);
        return { success: false, error };
    }
}

export async function upsertAdminNavItem(data: {
    id?: string;
    categoryId: string;
    name: string;
    href: string;
    icon: string;
    uiRowClass?: string;
    position: number;
    roles?: string;
}) {
    try {
        if (data.id) {
            await prisma.adminNavItem.update({
                where: { id: data.id },
                data: {
                    categoryId: data.categoryId,
                    name: data.name,
                    href: data.href,
                    icon: data.icon,
                    uiRowClass: data.uiRowClass,
                    position: data.position,
                    roles: data.roles,
                },
            });
        } else {
            await prisma.adminNavItem.create({
                data: {
                    categoryId: data.categoryId,
                    name: data.name,
                    href: data.href,
                    icon: data.icon,
                    uiRowClass: data.uiRowClass,
                    position: data.position,
                    roles: data.roles,
                },
            });
        }
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error('Error upserting admin nav item:', error);
        return { success: false, error };
    }
}

export async function deleteAdminNavItem(id: string) {
    try {
        await prisma.adminNavItem.delete({
            where: { id },
        });
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error('Error deleting admin nav item:', error);
        return { success: false, error };
    }
}

export async function deleteAdminNavCategory(id: string) {
    try {
        await prisma.adminNavCategory.delete({
            where: { id },
        });
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error('Error deleting admin nav category:', error);
        return { success: false, error };
    }
}

export async function updateAdminNavOrder(
    categories: { id: string; position: number; items: { id: string; position: number; categoryId: string }[] }[]
) {
    try {
        // Transaction to update all positions
        await prisma.$transaction(async (tx: any) => {
            for (const cat of categories) {
                // Update category position
                await tx.adminNavCategory.update({
                    where: { id: cat.id },
                    data: { position: cat.position },
                });

                // Update items within category
                for (const item of cat.items) {
                    await tx.adminNavItem.update({
                        where: { id: item.id },
                        data: {
                            position: item.position,
                            categoryId: item.categoryId, // Allow moving between categories
                        },
                    });
                }
            }
        });

        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error('Error updating admin nav order:', error);
        return { success: false, error };
    }
}
