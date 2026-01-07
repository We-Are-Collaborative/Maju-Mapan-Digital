"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

// 1. Get Models (Dynamically parsed from schema.prisma)
export async function getModels() {
    try {
        const schemaPath = path.join(process.cwd(), "prisma/schema.prisma");
        const schema = fs.readFileSync(schemaPath, "utf8");

        // Match "model ModelName {" but not comments
        const modelRegex = /^model\s+(\w+)\s+\{/gm;
        const models: string[] = [];
        let match;

        while ((match = modelRegex.exec(schema)) !== null) {
            models.push(match[1]);
        }

        return models.sort();
    } catch (error) {
        console.error("Error parsing schema.prisma for models:", error);
        // Fallback to a minimal list or empty if file cannot be read
        return ["User"];
    }
}

// 2. Dynamic Fetch
export async function getModelData(modelName: string, page: number = 1, limit: number = 10) {
    if (!modelName) return { data: [], total: 0 };

    try {
        // Find the correct prisma delegate key (Prisma uses camelCase for delegates)
        const prismaKeys = Object.keys(prisma);
        const delegateKey = prismaKeys.find(k => k.toLowerCase() === modelName.toLowerCase());

        // @ts-ignore
        const model = delegateKey ? prisma[delegateKey] : null;
        if (!model) throw new Error(`Model ${modelName} not found`);

        const skip = (page - 1) * limit;

        // All models have updatedAt field, use it for sorting
        const sortField = 'updatedAt';

        const [data, total] = await Promise.all([
            model.findMany({
                take: limit,
                skip: skip,
                orderBy: { [sortField]: 'desc' }
            }),
            model.count()
        ]);

        return { data, total };
    } catch (error: any) {
        console.error("Error fetching model data:", error);
        return { error: error.message };
    }
}

// 3. Dynamic Create/Update
export async function saveModelData(modelName: string, data: any, id?: string | number) {
    try {
        const prismaKeys = Object.keys(prisma);
        const delegateKey = prismaKeys.find(k => k.toLowerCase() === modelName.toLowerCase());

        // @ts-ignore
        const model = delegateKey ? prisma[delegateKey] : null;
        if (!model) throw new Error(`Model ${modelName} not found`);

        // Basic formatting for types (rudimentary)
        // In a real app, uses schema reflection to cast types. 
        // For now, we assume frontend sends correct types or Prisma throws.

        if (id) {
            await model.update({
                where: { id },
                data
            });
        } else {
            await model.create({
                data
            });
        }
        revalidatePath("/admin/database");
        return { success: true };
    } catch (error: any) {
        return { error: error.message };
    }
}

// 4. Delete
export async function deleteModelData(modelName: string, id: string | number) {
    try {
        const prismaKeys = Object.keys(prisma);
        const delegateKey = prismaKeys.find(k => k.toLowerCase() === modelName.toLowerCase());

        // @ts-ignore
        const model = delegateKey ? prisma[delegateKey] : null;
        if (!model) throw new Error(`Model ${modelName} not found`);

        await model.delete({ where: { id } });
        revalidatePath("/admin/database");
        return { success: true };
    } catch (error: any) {
        return { error: error.message };
    }
}

// 5. Raw SQL
export async function executeRawQuery(query: string) {
    try {
        const result = await prisma.$queryRawUnsafe(query);
        // Serialize BigInt if any
        const serialized = JSON.parse(JSON.stringify(result, (key, value) =>
            typeof value === 'bigint'
                ? value.toString()
                : value // return everything else unchanged
        ));
        return { data: serialized };
    } catch (error: any) {
        return { error: error.message };
    }
}

// Restore Backup (Seed)
export async function restoreBackup() {
    const { exec } = require('child_process');
    const util = require('util');
    const execAsync = util.promisify(exec);

    try {
        await execAsync("npx prisma db seed");
        revalidatePath("/admin");
        return { success: true };
    } catch (error: any) {
        console.error("Restore failed:", error);
        return { success: false, error: error.message };
    }
}
