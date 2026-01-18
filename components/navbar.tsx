"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@/lib/inertia-adapter';
import { OverlayMenu } from '@/components/overlay-menu';
import { NewsletterModal } from '@/components/newsletter-modal';
import { LeadModal } from '@/components/lead-modal';

interface NavItem {
    title: string;
    href: string;
    // active state calculated internally
    active?: boolean;
}

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    navItems: NavItem[];
    logoText?: string;
    logoNumber?: string;
    ctaHref?: string;
    logoType?: "svg" | "gif";
    logoGifUrl?: string;
}

export function Navbar({ navItems, ctaHref = '/#contact-us', logoType = "svg", logoGifUrl, className, ...props }: NavbarProps) {
    const pathname = usePathname();
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [newsletterOpen, setNewsletterOpen] = useState(false);
    const [newsletterTriggered, setNewsletterTriggered] = useState(false);
    const [strategyOpen, setStrategyOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Filter nav items based on requirements
    const visibleNavItems = navItems.filter(item => {
        // Remove "Contact Us"
        if (item.title === 'Contact Us') return false;
        // Hide "Home" when on home page
        if (item.title === 'Home' && pathname === '/') return false;
        return true;
    });

    // Handle scroll behavior (hide/show and glass effect intensity)
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // Trigger newsletter on scroll (if not already triggered)
            if (!newsletterTriggered && currentY > 500) {
                setNewsletterTriggered(true);
                setNewsletterOpen(true);
            }

            // Show/Hide based on direction
            if (currentY > lastScrollY && currentY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            // Glass intensity
            setScrolled(currentY > 20);
            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, newsletterTriggered]);

    // Secondary trigger: 10 second timer
    useEffect(() => {
        if (!newsletterTriggered) {
            const timer = setTimeout(() => {
                if (!newsletterTriggered) {
                    setNewsletterTriggered(true);
                    setNewsletterOpen(true);
                }
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [newsletterTriggered]);

    return (
        <>
            <OverlayMenu
                open={overlayOpen}
                onClose={() => setOverlayOpen(false)}
                navItems={navItems}
                onNewsletterClick={() => setNewsletterOpen(true)}
                onStrategyClick={() => setStrategyOpen(true)}
            />

            <NewsletterModal open={newsletterOpen} onOpenChange={setNewsletterOpen} />
            <LeadModal
                open={strategyOpen}
                onOpenChange={setStrategyOpen}
                source="Navbar Overlay Menu"
                title="Book Strategy Call"
                description="Our experts are ready to help you grow. Fill out the form below."
            />

            <header
                className={cn(
                    "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-in-out",
                    visible ? "translate-y-0" : "-translate-y-full"
                )}
                {...props}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div
                        id="headerWrap"
                        className={cn(
                            "mt-4 sm:mt-6 rounded-full transition-all duration-500",
                            scrolled
                                ? "bg-black/80 backdrop-blur-md shadow-lg border border-white/10"
                                : "bg-black/20 backdrop-blur-sm border border-white/5"
                        )}
                    >
                        <nav className="relative flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2 z-10">
                                {logoType === 'gif' && logoGifUrl ? (
                                    <Image
                                        src={logoGifUrl}
                                        alt="5758 Creative Lab"
                                        width={54}
                                        height={68}
                                        priority
                                        className="h-8 w-auto unoptimized"
                                        unoptimized // Important for GIFs to animate
                                    />
                                ) : (
                                    <Image
                                        src="/assets/logo-5758.svg"
                                        alt="Maju Mapan"
                                        width={54}
                                        height={68}
                                        priority
                                        className="h-8 w-auto"
                                    />
                                )}
                            </Link>

                            {/* Desktop Inline Nav */}
                            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <ul className="flex items-center gap-8">
                                    {visibleNavItems.map((item) => {
                                        const isActive = item.active !== undefined ? item.active : (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
                                        return (
                                            <li key={item.title}>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "text-base font-semibold transition-all duration-300 px-4 py-2 rounded-lg whitespace-nowrap",
                                                        isActive
                                                            ? "bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-500/20"
                                                            : "text-white/80 hover:text-brand-500 hover:bg-white/5"
                                                    )}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Right Side: CTA + Menu Button */}
                            <div className="flex items-center gap-3 sm:gap-4 z-10">
                                <Button
                                    asChild
                                    className="hidden sm:flex rounded-full bg-emerald-500 text-black hover:bg-emerald-400 font-semibold px-5"
                                >
                                    <Link href={ctaHref}>
                                        Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>

                                <button
                                    onClick={() => setOverlayOpen(true)}
                                    className="rounded-full bg-zinc-900 text-white border border-white/10 p-2.5 hover:bg-zinc-800 transition-colors"
                                    aria-label="Open Menu"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
