import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding Admin Navigation...');

    // 1. Dashboard & Hero
    const dashCat = await prisma.adminNavCategory.create({
        data: {
            title: 'Dashboard & Hero',
            position: 0,
            items: {
                create: [
                    { name: 'Dashboard', href: '/admin', icon: 'LayoutDashboard', position: 0 },
                    { name: 'Hero Home', href: '/admin/settings/hero', icon: 'Zap', uiRowClass: 'bg-lime-400/10 text-lime-400', position: 1 },
                ],
            },
        },
    });

    // 2. Content & Portfolio
    const contentCat = await prisma.adminNavCategory.create({
        data: {
            title: 'Content & Portfolio',
            position: 1,
            items: {
                create: [
                    { name: 'Solutions', href: '/admin/solutions', icon: 'Zap', position: 0 },
                    { name: 'Clients', href: '/admin/clients', icon: 'Building', position: 1 },
                    { name: 'Insights', href: '/admin/insights', icon: 'FileText', position: 2 },
                    { name: 'Content Blocks', href: '/admin/content', icon: 'LayoutDashboard', position: 3 },
                    { name: 'Media Library', href: '/admin/media', icon: 'Activity', position: 4 },
                    { name: 'Categories', href: '/admin/categories', icon: 'Tag', position: 5 },
                    { name: 'Team', href: '/admin/team', icon: 'Users', position: 6 },
                ],
            },
        },
    });

    // 3. Recruitment
    const recruitCat = await prisma.adminNavCategory.create({
        data: {
            title: 'Recruitment',
            position: 2,
            items: {
                create: [
                    { name: 'Jobs / Careers', href: '/admin/careers', icon: 'Briefcase', position: 0 },
                    { name: 'Applications', href: '/admin/careers/applications', icon: 'FileText', position: 1 },
                    { name: 'Candidates', href: '/admin/candidate-users', icon: 'Users', position: 2 },
                ],
            },
        },
    });

    // 4. Business
    const businessCat = await prisma.adminNavCategory.create({
        data: {
            title: 'Business',
            position: 3,
            items: {
                create: [
                    { name: 'Leads', href: '/admin/leads', icon: 'MessageSquare', position: 0 },
                ],
            },
        },
    });

    // 5. SEO & GEO Manager
    const seoCat = await prisma.adminNavCategory.create({
        data: {
            title: 'SEO & GEO Manager',
            position: 4,
            items: {
                create: [
                    { name: 'Dashboard', href: '/admin/seo', icon: 'LayoutDashboard', position: 0 },
                    { name: 'Audit & Scan', href: '/admin/seo/audit', icon: 'Activity', position: 1 },
                    { name: 'Geo Targeting', href: '/admin/seo/geo', icon: 'Map', position: 2 },
                    { name: 'Content Analysis', href: '/admin/seo/analysis', icon: 'BarChart', position: 3 },
                    { name: 'Settings', href: '/admin/seo/settings', icon: 'Settings', position: 4 },
                ],
            },
        },
    });

    // 6. System
    const systemCat = await prisma.adminNavCategory.create({
        data: {
            title: 'System',
            position: 5,
            items: {
                create: [
                    { name: 'Users', href: '/admin/users', icon: 'Users', position: 0 },
                    { name: 'File Directory', href: '/admin/system/files', icon: 'Folder', position: 1 },
                    { name: 'General Settings', href: '/admin/settings', icon: 'Settings', position: 2 },
                    { name: 'Website Config', href: '/admin/settings/global', icon: 'Globe', position: 3 },
                ],
            },
        },
    });

    console.log('Admin navigation seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
