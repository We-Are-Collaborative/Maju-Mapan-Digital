const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    console.log('Resetting admin password...');

    const oldEmail = 'admin@majumapan.com';
    const newEmail = 'yousuf@majumapandigital.com';
    const newPassword = 'Majorana@2025';

    // Hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    try {
        // 1. Check if the target user already exists
        const targetUser = await prisma.user.findUnique({ where: { email: newEmail } });

        if (targetUser) {
            // Update existing target user
            await prisma.user.update({
                where: { email: newEmail },
                data: { password: hashedPassword, role: 'admin' }
            });
            console.log(`✅ Updated existing user ${newEmail}`);
        } else {
            // 2. Check if old default admin exists to rename
            const oldUser = await prisma.user.findUnique({ where: { email: oldEmail } });

            if (oldUser) {
                // Rename old admin to new email
                await prisma.user.update({
                    where: { email: oldEmail },
                    data: {
                        email: newEmail,
                        password: hashedPassword,
                        name: 'Yusuf Noor'
                    }
                });
                console.log(`✅ Renamed ${oldEmail} to ${newEmail}`);
            } else {
                // 3. Create new user
                await prisma.user.create({
                    data: {
                        email: newEmail,
                        password: hashedPassword,
                        name: 'Yusuf Noor',
                        role: 'admin'
                    }
                });
                console.log(`✅ Created new user ${newEmail}`);
            }
        }
        console.log(`✅ Password set to: ${newPassword}`);
    } catch (error) {
        console.error('Failed to update credentials:', error);
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
