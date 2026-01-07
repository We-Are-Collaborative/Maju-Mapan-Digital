import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const PublicLayout = (props: PropsWithChildren) => {
    const currentPath = window.location.pathname;

    const navItems = [
        {
            title: 'Home',
            href: route('home'),
            active: currentPath === '/',
        },
        {
            title: 'About Us',
            href: route('about-us'),
            active: currentPath.startsWith('/about-us'),
        },
        {
            title: 'Solutions',
            href: route('speciality'),
            active: currentPath.startsWith('/solutions'),
        },
        {
            title: 'Insights',
            href: route('article'),
            active: currentPath.startsWith('/article'),
        },
        {
            title: 'Careers',
            href: route('career'),
            active: currentPath.startsWith('/career'),
        },
        {
            title: 'Contact Us',
            href: route('contact'),
            active: currentPath.startsWith('/contact-us'),
        },
        {
            title: 'Case Studies',
            href: route('client'),
            active: currentPath.startsWith('/client'),
        },
    ];

    return (
        <div className="relative min-h-screen bg-black text-white">
            <Toaster />
            <Navbar navItems={navItems} ctaHref={route('contact')} />
            {props.children}
            <Footer />
        </div>
    );
};
