import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

// Aggressive Reset: We use a stable global key but ensured type safety
const db = (globalThis as any).prismaGlobal ?? prismaClientSingleton()

export { db as prisma }

if (process.env.NODE_ENV !== 'production') (globalThis as any).prismaGlobal = db
