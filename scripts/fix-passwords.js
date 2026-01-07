const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    console.log('Fixing user passwords...');

    // Define users with their plain text passwords
    const users = [
        { email: 'admin@majumapan.com', password: 'password' },
        { email: 'yousuf@majumapandigital.com', password: 'password' },
        { email: 'editor@majumapandigital.com', password: 'password' }
    ];

    for (const userData of users) {
        // Hash the password
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        
        // Update the user in the database
        await prisma.user.update({
            where: { email: userData.email },
            data: { password: hashedPassword }
        });
        
        console.log(`✓ Updated password for ${userData.email}`);
    }

    console.log('\n✅ All passwords have been hashed successfully!');
    console.log('\nYou can now login with:');
    console.log('- Email: admin@majumapan.com | Password: password');
    console.log('- Email: yousuf@majumapandigital.com | Password: password');
    console.log('- Email: editor@majumapandigital.com | Password: password');
}

main()
    .catch((e) => {
        console.error('Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
