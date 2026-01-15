import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// Reload Trigger: 2026-01-14 22:09:00 (Forcing SEO Alt Tags Sync)
const db = globalThis.prisma ?? prismaClientSingleton()

export { db as prisma }

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
