import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
import { getNavItems } from '@/app/actions/public-data';

type NavItem = Awaited<ReturnType<typeof getNavItems>>[number];

export default async function PublicClientLayout({ children }: PropsWithChildren) {
    const navData = await getNavItems();

    // Transform for Navbar component which expects 'active' flag calculation or just base items
    // Navbar likely needs current path to calculate 'active'. 
    // Since this is a server layout, we can't easily use `usePathname` here to set 'active' property on the server 
    // IF the Navbar component expects a static list with 'active' pre-set.
    // However, the Navbar (from previous context) is a Client Component (usually) or uses client hooks.
    // Let's check Navbar implementation. If it accepts just items and handles active state itself, that's best.
    // The previous code had `usePathname()` and calculated active here. 
    // If I make this a Server Component (async), I cannot use usePathname.
    // I should pass the `navItems` to the Navbar and let Navbar (Client Component) determine active state.

    // For now, mapping to the structure expectd by Navbar, but 'active' will be false initially 
    // and Navbar should ideally handle highlighting if it's a client component.
    const navItems = navData.map((item: NavItem) => ({
        title: item.title,
        href: item.href,
        // Client side handles active state calculation since active is undefined
    }));

    // Fetch global settings
    const settings = await import("@/app/actions/settings").then(mod => mod.getGlobalSettings());
    const logoType = (settings as any).logoType || "svg";
    const logoGifUrl = (settings as any).logoGifUrl || "";

    return (
        <div className="relative min-h-screen bg-black text-white">
            <Toaster />
            <Navbar navItems={navItems} ctaHref="/contact-us" logoType={logoType} logoGifUrl={logoGifUrl} />
            <main className="flex-1 relative flex flex-col">
                {children}
                <Footer />
            </main>
        </div>
    );
}
