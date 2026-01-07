import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding additional careers...');

    // Fetch Categories
    const techCategory = await prisma.category.findUnique({ where: { slug: 'technology' } });
    const designCategory = await prisma.category.findUnique({ where: { slug: 'design' } });
    const businessCategory = await prisma.category.findUnique({ where: { slug: 'business' } });

    if (!techCategory || !designCategory || !businessCategory) {
        console.error('Categories not found. Please run the main seed script first.');
        return;
    }

    const newCareers = [
        {
            title: 'Senior Frontend Engineer',
            slug: 'senior-frontend-engineer-2024',
            location: 'Remote (Indonesia)',
            type: 'Full-time',
            minSalary: 15000000,
            maxSalary: 25000000,
            isRemote: true,
            description: 'We are seeking a talented Senior Frontend Engineer to lead our web application development using Next.js and React.',
            content: `
                <p><strong>About the Role</strong></p>
                <p>As a Senior Frontend Engineer, you will be responsible for architecting and building scalable web applications. You will work closely with designers and backend engineers to deliver high-quality user experiences.</p>
                <p><strong>Responsibilities</strong></p>
                <ul>
                    <li>Develop new user-facing features using React.js and Next.js</li>
                    <li>Build reusable code and libraries for future use</li>
                    <li>Ensure the technical feasibility of UI/UX designs</li>
                    <li>Optimize application for maximum speed and scalability</li>
                </ul>
            `,
            requirements: JSON.stringify([
                '5+ years of experience with React and modern JavaScript',
                'Deep understanding of Next.js and Server Side Rendering',
                'Experience with TypeScript and Tailwind CSS',
                'Strong problem-solving skills and attention to detail'
            ]),
            categoryId: techCategory.id,
            status: 'published'
        },
        {
            title: 'Product Designer (UI/UX)',
            slug: 'product-designer-ui-ux',
            location: 'Jakarta, Indonesia',
            type: 'Full-time',
            minSalary: 12000000,
            maxSalary: 20000000,
            isRemote: false,
            description: 'Join our creative team to design intuitive and beautiful digital products that users love.',
            content: `
                <p><strong>The Opportunity</strong></p>
                <p>We are looking for a Product Designer who is passionate about solving complex problems through design. You will own the design process from concept to hand-off.</p>
                <p><strong>What You Will Do</strong></p>
                <ul>
                    <li>Create wireframes, prototypes, and high-fidelity mockups</li>
                    <li>Conduct user research and usability testing</li>
                    <li>Collaborate with product managers and engineers</li>
                    <li>Maintain and evolve our design system</li>
                </ul>
            `,
            requirements: JSON.stringify([
                'Portfolio demonstrating strong UI and UX skills',
                'Proficiency in Figma and prototyping tools',
                'Experience designing for both web and mobile platforms',
                'Understanding of basic frontend technologies is a plus'
            ]),
            categoryId: designCategory.id,
            status: 'published'
        },
        {
            title: 'Digital Marketing Specialist',
            slug: 'digital-marketing-specialist',
            location: 'Bali, Indonesia',
            type: 'Contract',
            minSalary: 8000000,
            maxSalary: 15000000,
            isRemote: true,
            description: 'Drive growth for our clients through data-driven digital marketing strategies and campaign management.',
            content: `
                <p><strong>About the Role</strong></p>
                <p>We need a Digital Marketing Specialist to manage SEO, SEM, and social media campaigns. You will analyze performance data to optimize ROI for our diverse client base.</p>
                <p><strong>Key Responsibilities</strong></p>
                <ul>
                    <li>Plan and execute digital marketing campaigns</li>
                    <li>Monitor and report on campaign performance</li>
                    <li>Conduct keyword research and optimize content</li>
                    <li>Manage social media calendars</li>
                </ul>
            `,
            requirements: JSON.stringify([
                'Proven experience in digital marketing',
                'Strong knowledge of Google Analytics and Google Ads',
                'Experience with SEO tools (Ahrefs, SEMrush)',
                'Excellent written and verbal communication skills'
            ]),
            categoryId: businessCategory.id,
            status: 'published'
        },
        {
            title: 'Account Manager',
            slug: 'account-manager',
            location: 'Jakarta, Indonesia',
            type: 'Full-time',
            minSalary: 10000000,
            maxSalary: 18000000,
            isRemote: false,
            description: 'Build and maintain strong relationships with our key clients, ensuring their success and satisfaction.',
            content: `
                <p><strong>Join Our Client Services Team</strong></p>
                <p>As an Account Manager, you will be the primary point of contact for our clients. You will understand their business goals and ensure our agency delivers value.</p>
                <p><strong>What You'll Do</strong></p>
                <ul>
                    <li>Manage day-to-day client communications</li>
                    <li>Identify opportunities for account growth</li>
                    <li>Coordinate with internal teams to deliver projects on time</li>
                    <li>Handle client feedback and resolve issues</li>
                </ul>
            `,
            requirements: JSON.stringify([
                '3+ years of account management experience in an agency',
                'Strong interpersonal and negotiation skills',
                'Ability to manage multiple accounts simultaneously',
                'strategic thinking and problem-solving abilities'
            ]),
            categoryId: businessCategory.id,
            status: 'published'
        },
        {
            title: 'Senior Backend Developer',
            slug: 'senior-backend-developer',
            location: 'Remote',
            type: 'Full-time',
            minSalary: 16000000,
            maxSalary: 28000000,
            isRemote: true,
            description: 'Architect and build robust backend systems using Node.js and PostgreSQL to power our digital solutions.',
            content: `
                <p><strong>Role Overview</strong></p>
                <p>We are looking for a backend expert to join our engineering team. You will be responsible for server-side logic, database management, and API development.</p>
                <p><strong>Responsibilities</strong></p>
                <ul>
                    <li>Design and implement RESTful APIs and GraphQL services</li>
                    <li>Manage database schemas and optimize queries</li>
                    <li>Implement security and data protection measures</li>
                    <li> Mentor junior developers</li>
                </ul>
            `,
            requirements: JSON.stringify([
                'Strong proficiency in Node.js and TypeScript',
                'Experience with SQL databases (PostgreSQL) and ORMs (Prisma)',
                'Knowledge of cloud platforms (AWS/GCP)',
                'Experience with Docker and CI/CD pipelines'
            ]),
            categoryId: techCategory.id,
            status: 'published'
        }
    ];

    for (const career of newCareers) {
        await prisma.career.upsert({
            where: { slug: career.slug },
            update: {},
            create: career
        });
        console.log(`Created: ${career.title}`);
    }

    console.log('Done!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
