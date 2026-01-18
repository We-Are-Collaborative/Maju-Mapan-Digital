import type { Metadata } from "next";
import "./admin.css";
// import { Inter } from 'next/font/google'; // Disabled due to build network restrictions
import MainClientLayout from "./layout-client"; // Client wrapper for sidebar/header
import NextAuthSessionProvider from "@/components/providers/SessionProvider";
import { GlobalErrorProvider } from "@/components/providers/GlobalErrorProvider";
import { GlobalErrorBoundary } from "@/components/providers/GlobalErrorBoundary";

// const inter = Inter({ subsets: ["latin"] });
const inter = { className: 'font-sans' }; // Fallback


export const metadata: Metadata = {
    title: "Admin Dashboard | Maju Mapan Digital",
    description: "CMS Dashboard",
};

export const dynamic = 'force-dynamic';

import { getTheme, generateThemeCss } from "@/lib/theme";

import { getAdminNavigation } from "@/app/actions/navigation";

export default async function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = await getTheme("admin");
    const themeCss = generateThemeCss(theme);
    const navData = await getAdminNavigation();

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <style dangerouslySetInnerHTML={{ __html: themeCss }} />
            </head>
            <body className={`${inter.className} bg-gradient-to-br from-slate-50 to-indigo-50/30 min-h-screen text-slate-900`}>
                <GlobalErrorBoundary>
                    <GlobalErrorProvider>
                        <NextAuthSessionProvider>
                            <MainClientLayout navData={navData}>
                                {children}
                            </MainClientLayout>
                        </NextAuthSessionProvider>
                    </GlobalErrorProvider>
                </GlobalErrorBoundary>
            </body>
        </html>
    );
}
