
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function verifyLogin(email: string, password: string) {
    console.log(`Verifying login for: ${email}`);

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        console.error(`  [FAIL] User not found.`);
        return;
    }

    if (!user.password) {
        console.error(`  [FAIL] Password not set in DB.`);
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
        console.log(`  [SUCCESS] Password is valid.`);
        console.log(`  [INFO] Role in DB: ${user.role}`);
    } else {
        console.error(`  [FAIL] Invalid password.`);
    }
}

async function main() {
    await verifyLogin('ferdi@majumapandigital.com', 'password');
    await verifyLogin('naufal@majumapandigital.com', 'password');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
