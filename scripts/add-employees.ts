
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const employees = [
        { name: 'Ferdi', email: 'ferdi@majumapandigital.com', password: 'password' },
        { name: 'Naufal', email: 'naufal@majumapandigital.com', password: 'password' },
    ];

    for (const emp of employees) {
        const hashedPassword = await bcrypt.hash(emp.password, 10);

        const user = await prisma.user.upsert({
            where: { email: emp.email },
            update: {
                password: hashedPassword,
                role: 'user'
            },
            create: {
                name: emp.name,
                email: emp.email,
                password: hashedPassword,
                role: 'user'
            }
        });

        console.log(`User ${user.email} created/updated.`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
