const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("USERS:");
    const users = await prisma.user.findMany({ take: 5 });
    console.log(JSON.stringify(users, null, 2));

    console.log("\nCANDIDATES:");
    const candidates = await prisma.candidate.findMany({ take: 5 });
    console.log(JSON.stringify(candidates, null, 2));

    console.log("\nCLIENTS:");
    const clients = await prisma.client.findMany({ take: 5 });
    console.log(JSON.stringify(clients, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
