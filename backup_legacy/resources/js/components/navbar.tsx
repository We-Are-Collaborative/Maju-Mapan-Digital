import React from 'react';

import { ArrowRight, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

interface NavItem {
    title: string;
    href: string;
    active?: boolean;
}

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    navItems: NavItem[];
    logoText?: string;
    logoNumber?: string;
    ctaHref?: string;
}

export function Navbar({ navItems, ctaHref = '/#contact-us', className, ...props }: NavbarProps) {
    const isMobile = useIsMobile();
    const [open, setOpen] = React.useState(false);

    if (isMobile) {
        return (
            <div className="fixed top-6 right-0 left-0 z-50 mx-auto w-full max-w-sm px-2">
                <div
                    className={cn(
                        'flex h-14 items-center justify-between rounded-full bg-black px-6 shadow-sm shadow-emerald-500/20 backdrop-blur-sm',
                        className,
                    )}
                    {...props}
                >
                    {/* Mobile logo */}
                    <Link href={route('home')} className="flex items-center">
                        <img src="/assets/logo.svg" className="h-8 w-auto" alt="" />
                    </Link>

                    {/* Mobile menu trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-brand-400 text-black hover:bg-brand-300">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-gray-800 bg-black/95 text-white">
                            <div className="mt-8 flex flex-col space-y-6 px-4">
                                {/* Logo in mobile menu */}
                                <Link href={route('home')} className="flex items-center justify-center border-b border-gray-800 pb-4">
                                    <img src="/assets/logo.svg" className="h-8 w-auto" alt="logo" />
                                </Link>

                                {/* Navigation links */}
                                <nav className="flex flex-col space-y-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                'py-2 text-lg font-medium transition-colors',
                                                item.active ? 'text-emerald-400' : 'text-white/60 hover:text-emerald-400',
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </nav>

                                {/* CTA button in mobile menu */}
                                <Button
                                    asChild
                                    className="mt-8 rounded-full bg-brand-400 text-black hover:bg-brand-300"
                                    onClick={() => setOpen(false)}
                                >
                                    <Link href={ctaHref}>
                                        Let's Talk <ArrowRight className="ml-2 size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        );
    }

    // Desktop version
    return (
        <div className="fixed top-6 right-0 left-0 z-50 mx-auto w-full max-w-7xl px-2">
            <div className={cn('flex h-14 items-center justify-between rounded-full bg-black px-6 backdrop-blur-sm', className)} {...props}>
                {/* Left navigation links */}
                <nav className="flex items-center space-x-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                                'text-sm font-medium transition-colors',
                                item.active ? 'text-emerald-400' : 'text-white/60 hover:text-emerald-400',
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Center logo */}
                <Link href={route('home')} className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center">
                    <img src="/assets/logo.svg" className="h-9 w-auto" alt="" />
                </Link>

                {/* Right CTA button */}
                <Button asChild className="rounded-full bg-brand-400 text-black hover:bg-brand-300">
                    <Link href={ctaHref}>
                        Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
