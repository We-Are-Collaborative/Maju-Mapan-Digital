import { Client } from '@/types/client';
import { Page } from '@/types/page';
import { Speciality } from '@/types/speciality';
import { Value } from '@/types/value';
import { Category } from '@/types/category';
import { CaseStudy } from '@/types/case-study';
import { Article } from '@/types/article';
import { Career } from '@/types/career';

export const mockValues: any[] = [
    {
        id: '1',
        title: 'Innovation',
        subtitle: 'Forward Thinking',
        excerpt: 'We constantly push boundaries to deliver cutting-edge solutions.',
        slug: 'innovation',
        iconUrl: '/assets/icons/innovation.svg',
        background: { originalUrl: '/assets/images/value-bg-1.jpg' },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Integrity',
        subtitle: 'Honest & Transparent',
        excerpt: 'We believe in building trust through transparency and honesty.',
        slug: 'integrity',
        iconUrl: '/assets/icons/integrity.svg',
        background: { originalUrl: '/assets/images/value-bg-2.jpg' },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '3',
        title: 'Excellence',
        subtitle: 'Quality First',
        excerpt: 'We differ in our commitment to delivering the highest quality work.',
        slug: 'excellence',
        iconUrl: '/assets/icons/excellence.svg',
        background: { originalUrl: '/assets/images/value-bg-3.jpg' },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
];

export const mockTeam: any[] = [
    {
        id: '1',
        name: 'John Doe',
        position: 'CEO',
        excerpt: 'Visionary leader with 10+ years of experience.',
        thumbnail: { originalUrl: '/assets/images/team-1.jpg' },
        linkedinUrl: 'https://linkedin.com',
        email: 'john@example.com',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Jane Smith',
        position: 'CTO',
        excerpt: 'Tech enthusiast and problem solver.',
        thumbnail: { originalUrl: '/assets/images/team-2.jpg' },
        linkedinUrl: 'https://linkedin.com',
        email: 'jane@example.com',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
];

export const mockSpecialities: Speciality[] = [
    {
        id: '1',
        title: 'Digital Marketing',
        subtitle: 'Data-Driven Strategies',
        iconUrl: '/assets/icons/marketing.svg',
        slug: 'digital-marketing',
        excerpt: 'We help you reach your target audience and achieve your business goals.',
        description: '<p>Comprehensive digital marketing services including SEO, SEM, and Social Media Marketing.</p>',
        background: { originalUrl: '/assets/images/speciality-bg-1.jpg' } as any,
        thumbnail: { originalUrl: '/assets/images/speciality-thumb-1.jpg' } as any,
        keyComponent: [
            { title: 'SEO', description: 'Search Engine Optimization', iconUrl: '' },
            { title: 'SEM', description: 'Search Engine Marketing', iconUrl: '' }
        ],
        strategyWork: [
            { title: 'Analysis', description: 'Deep dive into your market.' },
            { title: 'Execution', description: 'Implementing the plan.' }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Web Development',
        subtitle: 'Robust & Scalable',
        iconUrl: '/assets/icons/development.svg',
        slug: 'web-development',
        excerpt: 'From landing pages to complex web applications.',
        description: '<p>We build high-performance websites and web applications tailored to your needs.</p>',
        background: { originalUrl: '/assets/images/speciality-bg-2.jpg' } as any,
        thumbnail: { originalUrl: '/assets/images/speciality-thumb-2.jpg' } as any,
        keyComponent: [
            { title: 'Frontend', description: 'React, Next.js, Vue', iconUrl: '' },
            { title: 'Backend', description: 'Node.js, Laravel, Python', iconUrl: '' }
        ],
        strategyWork: [
            { title: 'Architecture', description: 'Designing the system.' },
            { title: 'Development', description: 'Writing clean code.' }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
];

export const mockClients: Client[] = [
    {
        id: '1',
        name: 'Client A',
        slug: 'client-a',
        description: 'A great client',
        excerpt: 'Great client',
        isFeatured: true,
        status: 'active',
        order: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: { originalUrl: '/assets/net.svg' } as any
    },
    {
        id: '2',
        name: 'Client B',
        slug: 'client-b',
        description: 'Another great client',
        excerpt: 'Another client',
        isFeatured: true,
        status: 'active',
        order: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: { originalUrl: '/assets/net.svg' } as any
    },
    {
        id: '3',
        name: 'Grab',
        slug: 'grab',
        description: 'Leading super-app in Southeast Asia.',
        excerpt: 'Southeast Asia\'s leading superapp with over 187 million users.',
        isFeatured: true,
        status: 'active',
        order: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: { originalUrl: '/assets/client/grab.svg' } as any
    },
    {
        id: '4',
        name: 'Traveloka',
        slug: 'traveloka',
        description: 'Southeast Asia\'s leading travel platform.',
        excerpt: 'The ultimate lifestyle companion for millions across the region.',
        isFeatured: true,
        status: 'active',
        order: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: { originalUrl: '/assets/client/traveloka.svg' } as any
    },
    {
        id: '5',
        name: 'Shopee',
        slug: 'shopee',
        description: 'Leading e-commerce platform in Southeast Asia and Taiwan.',
        excerpt: 'Connecting millions of users through a mobile-first social commerce experience.',
        isFeatured: true,
        status: 'active',
        order: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: { originalUrl: '/assets/client/shopee.svg' } as any
    }
];

export const mockCategories: Category[] = [
    { id: '1', name: 'Technology', slug: 'technology', createdAt: '', updatedAt: '' },
    { id: '2', name: 'Design', slug: 'design', createdAt: '', updatedAt: '' },
    { id: '3', name: 'Business', slug: 'business', createdAt: '', updatedAt: '' },
];

export const mockArticles: Article[] = [
    {
        id: '1',
        title: 'The Future of Web Development',
        slug: 'future-web-development',
        excerpt: 'Exploring the latest trends in web tech.',
        content: '<p>Full article content here...</p>',
        thumbnail: { originalUrl: '/assets/bg-speciality.webp' } as any,
        categoryId: '1',
        category: mockCategories[0],
        status: 'published',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'The Future of Web Development', language: 'en' } as any
    },
    {
        id: '2',
        title: 'Design Principles for 2024',
        slug: 'design-principles-2024',
        excerpt: 'Key design principles to follow.',
        content: '<p>Design content...</p>',
        thumbnail: { originalUrl: '/assets/bg-speciality.webp' } as any,
        categoryId: '2',
        category: mockCategories[1],
        status: 'published',
        isFeatured: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'Design Principles', language: 'en' } as any
    }
];

export const mockCaseStudies: CaseStudy[] = [
    {
        id: '1',
        clientId: '1',
        client: mockClients[0],
        title: 'Project Alpha',
        slug: 'project-alpha',
        excerpt: 'A groundbreaking project for Client A.',
        content: '<p>Detailed case study content here...</p>',
        thumbnail: { originalUrl: '/assets/bg-speciality.webp' } as any,
        status: 'published',
        startDate: '2023-01-01',
        endDate: '2023-06-01',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'Project Alpha', language: 'en' } as any
    },
    {
        id: '2',
        clientId: '2',
        client: mockClients[1],
        title: 'Project Beta',
        slug: 'project-beta',
        excerpt: 'Another successful collaboration.',
        content: '<p>More case study details...</p>',
        thumbnail: { originalUrl: '/assets/bg-speciality.webp' } as any,
        status: 'published',
        startDate: '2023-07-01',
        endDate: '2023-12-01',
        isFeatured: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'Project Beta', language: 'en' } as any
    },
    {
        id: '3',
        clientId: '3',
        client: mockClients[2],
        title: 'Influencer Marketing',
        slug: 'grab-influencer',
        excerpt: 'Driving hyper-growth in user acquisition through highly targeted influencer campaigns.',
        content: `
            <h3>Objective</h3><p>To acquire 1 million new users across Southeast Asia through hyper-localized influencer marketing.</p>
            <h3>Challenges</h3><p>Fragmented influencer landscape and difficulty in measuring direct ROI for brand-awareness campaigns.</p>
            <h3>Strategy</h3><p>Collaborated with 500+ micro-influencers and 50 mega-influencers using a data-driven approach based on geographic and behavior segmentation.</p>
            <h3>Results</h3><p>30% growth in user acquisition and 12% engagement rate across all social channels.</p>
        `,
        thumbnail: { originalUrl: '/assets/bg-speciality.webp' } as any,
        status: 'published',
        startDate: '2024-01-01',
        endDate: '2024-06-01',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'Grab Influencer Marketing', language: 'en' } as any
    },
    {
        id: '4',
        clientId: '4',
        client: mockClients[3],
        title: 'Brand Marketing',
        slug: 'traveloka-brand',
        excerpt: 'Redefining Traveloka as the ultimate lifestyle companion through emotive storytelling.',
        content: `
            <h3>Objective</h3><p>Shift brand perception from a functional booking engine to an aspirational lifestyle companion.</p>
            <h3>Challenges</h3><p>High market saturated with "transaction-focused" competitors and low emotional engagement.</p>
            <h3>Strategy</h3><p>Launched "Your World, Your Way" campaign featuring scenic travel paths and emotive storytelling across digital and OOH media.</p>
            <h3>Results</h3><p>45% brand lift and 80% increase in brand awareness across target demographics.</p>
        `,
        thumbnail: { originalUrl: '/assets/bg-speciality.webp' } as any,
        status: 'published',
        startDate: '2024-02-01',
        endDate: '2024-08-01',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'Traveloka Brand Marketing', language: 'en' } as any
    },
    {
        id: '5',
        clientId: '5',
        client: mockClients[4],
        title: 'Performance Marketing',
        slug: 'shopee-performance',
        excerpt: 'Scaling seasonal mega-sales through advanced performance marketing and data analytics.',
        content: `
            <h3>Objective</h3><p>Maximize GMV and ROAS during seasonal mega-sale events (9.9, 11.11, 12.12).</p>
            <h3>Challenges</h3><p>Intense competition and surging cost-per-acquisition during peak periods.</p>
            <h3>Strategy</h3><p>Full-funnel performance marketing using dynamic product ads, behavioral retargeting, and real-time bid optimization.</p>
            <h3>Results</h3><p>3.5x ROAS and 1M+ followers gained across the campaign period.</p>
        `,
        thumbnail: { originalUrl: '/assets/bg-speciality.webp' } as any,
        status: 'published',
        startDate: '2024-03-01',
        endDate: '2024-09-01',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'Shopee Performance Marketing', language: 'en' } as any
    }
];

export const mockCareers: Career[] = [
    {
        id: '1',
        title: 'Senior React Developer',
        slug: 'senior-react-developer',
        location: 'Remote',
        type: 'Full-time',
        minSalary: 5000000,
        maxSalary: 10000000,
        description: 'We are looking for an experienced React developer.',
        content: '<p>Detailed job description...</p>',
        categoryId: '1',
        category: mockCategories[0],
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'Senior React Developer', language: 'en' } as any,
        applyUrl: '#'
    },
    {
        id: '2',
        title: 'UI/UX Designer',
        slug: 'ui-ux-designer',
        location: 'Jakarta',
        type: 'Full-time',
        minSalary: 4000000,
        maxSalary: 8000000,
        description: 'Creative designer needed.',
        content: '<p>Design job description...</p>',
        categoryId: '2',
        category: mockCategories[1],
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seoConfig: { title: 'UI/UX Designer', language: 'en' } as any,
        applyUrl: '#'
    }
];

export const mockPageSeo: Page = {
    id: 'home',
    name: 'Home',
    slug: 'home',
    content: {
        heroCtaText: 'Get Started',
        heroCtaLink: '#',
        bannerTitle: 'Welcome to Maju Mapan',
        bannerSubtitle: 'Your Digital Partner',
        bannerDescription: 'We help you grow.',
        valuesTitle: 'Our Values',
        valuesSubtitle: 'What guides us.',
        specialtiesTitle: 'Global Solutions',
        specialtiesSubtitle: 'For every need.',
        worksTitle: 'Our Case Studies',
        worksSubtitle: 'Discover how we drive measurable growth for our partners.',
        ctaTitle: 'Contact Us',
        ctaDescription: 'Let\'s talk.',
    },
    seoConfig: {
        title: 'Maju Mapan - Home',
        description: 'Home page',
        language: 'en',
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isActive: true,
};
