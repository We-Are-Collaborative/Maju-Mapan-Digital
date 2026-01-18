import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare global {
    var prismaGlobalV3: undefined | ReturnType<typeof prismaClientSingleton>
}

// Reload Trigger: Force re-init for Admin Navigation & Page Metadata
let db = globalThis.prismaGlobalV3 ?? prismaClientSingleton()

// Self-healing: Check if the instance is stale (missing the new model)
// We use 'any' cast to check for the property existence dynamically
if (!(db as any).adminPageMetadata) {
    console.warn('Detected stale Prisma client (missing adminPageMetadata). Forcing re-initialization...');
    db = prismaClientSingleton();
    if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobalV3 = db;
}

export { db as prisma }

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobalV3 = db
