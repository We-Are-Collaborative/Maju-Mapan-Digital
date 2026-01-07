"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

// --- CLIENTS ---

export async function getClientsAdmin() {
    try {
        // @ts-ignore
        const clients = await prisma.client.findMany({
            orderBy: { order: "asc" },
            // @ts-ignore
            include: { caseStudies: true }
        });
        return clients;
    } catch (error) {
        console.error("Error fetching clients:", error);
        return [];
    }
}

export async function getClientById(id: string) {
    try {
        // @ts-ignore
        const client = await prisma.client.findUnique({
            where: { id },
            // @ts-ignore
            include: { caseStudies: { orderBy: { createdAt: "desc" } } }
        });
        return client;
    } catch (error) {
        console.error("Error fetching client:", error);
        return null;
    }
}

export async function getClientByEmail(email: string) {
    try {
        // @ts-ignore
        const client = await prisma.client.findUnique({
            where: { email },
            // @ts-ignore
            include: { caseStudies: { orderBy: { createdAt: "desc" } } }
        });
        return client;
    } catch (error) {
        console.error("Error fetching client by email:", error);
        return null;
    }
}

export async function createClient(data: any) {
    try {
        const client = await prisma.client.create({
            data: {
                ...data,
                slug: data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
            },
        });
        revalidatePath("/admin/clients");
        return { success: true, client };
    } catch (error) {
        console.error("Error creating client:", error);
        return { success: false, error: "Failed to create client" };
    }
}

export async function updateClient(id: string, data: any) {
    try {
        const client = await prisma.client.update({
            where: { id },
            data,
        });
        revalidatePath("/admin/clients");
        revalidatePath(`/admin/clients/${id}`);
        return { success: true, client };
    } catch (error) {
        console.error("Error updating client:", error);
        return { success: false, error: "Failed to update client" };
    }
}

export async function deleteClient(id: string) {
    try {
        await prisma.client.delete({
            where: { id },
        });
        revalidatePath("/admin/clients");
        return { success: true };
    } catch (error) {
        console.error("Error deleting client:", error);
        return { success: false, error: "Failed to delete client" };
    }
}

// --- CASE STUDIES ---

export async function createCaseStudy(data: any) {
    try {
        // @ts-ignore
        const caseStudy = await prisma.caseStudy.create({
            data: {
                ...data,
                slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
            },
        });
        revalidatePath(`/admin/clients/${data.clientId}`);
        revalidatePath("/case-studies");
        return { success: true, caseStudy };
    } catch (error) {
        console.error("Error creating case study:", error);
        return { success: false, error: "Failed to create case study" };
    }
}

export async function updateCaseStudy(id: string, data: any) {
    try {
        // @ts-ignore
        const caseStudy = await prisma.caseStudy.update({
            where: { id },
            data,
        });
        revalidatePath("/admin/clients");
        if (caseStudy.clientId) revalidatePath(`/admin/clients/${caseStudy.clientId}`);
        revalidatePath("/case-studies");
        revalidatePath(`/case-studies/${caseStudy.slug}`);
        return { success: true, caseStudy };
    } catch (error) {
        console.error("Error updating case study:", error);
        return { success: false, error: "Failed to update case study" };
    }
}

export async function deleteCaseStudy(id: string) {
    try {
        // @ts-ignore
        const study = await prisma.caseStudy.findUnique({ where: { id }, select: { clientId: true, slug: true } });
        // @ts-ignore
        await prisma.caseStudy.delete({
            where: { id },
        });
        if (study?.clientId) revalidatePath(`/admin/clients/${study.clientId}`);
        revalidatePath("/case-studies");
        return { success: true };
    } catch (error) {
        console.error("Error deleting case study:", error);
        return { success: false, error: "Failed to delete case study" };
    }
}
