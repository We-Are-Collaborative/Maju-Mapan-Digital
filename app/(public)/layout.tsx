import { Metadata } from "next";
import { headers } from 'next/headers';
import "../globals.css";
import PublicClientLayout from "./public-layout";
import { CustomCursor } from "@/components/custom-cursor";
import { ChatWidget } from "@/components/chat/chat-widget";
import { AudienceTracker } from "@/components/audience-tracker";
import { CookieConsentBanner } from "@/components/cookie-consent/banner";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
    let baseUrl = 'https://majumapandigital.com';
    try {
        const headersList = await headers();
        const host = headersList.get('host');
        const proto = headersList.get('x-forwarded-proto') || 'https';
        if (host) {
            baseUrl = `${proto}://${host}`;
        }
    } catch (e) {
        // Fallback to production if headers are not available (e.g. during build)
    }

    return {
        metadataBase: new URL(baseUrl),
        title: "Maju Mapan Digital | Powering Your Growth with AI-Driven Performance Marketing",
        description: "Maju Mapan provides comprehensive digital marketing, web development, and creative solutions for businesses in Indonesia.",
        openGraph: {
            title: "Maju Mapan Digital | Powering Your Growth with AI-Driven Performance Marketing",
            description: "Excellence in Digital Solutions. Your partner in profitable growth—turning traffic into tangible revenue.",
            url: baseUrl,
            siteName: 'Maju Mapan Digital',
            images: [
                {
                    url: '/assets/og-home.png',
                    width: 1200,
                    height: 630,
                    alt: 'Maju Mapan Digital - AI-Driven Performance Marketing',
                },
            ],
            locale: 'id_ID',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: "Maju Mapan Digital | Powering Your Growth with AI-Driven Performance Marketing",
            description: "Excellence in Digital Solutions. Your partner in profitable growth—turning traffic into tangible revenue.",
            images: ['/assets/og-home.png'],
        },
    };
}

import { Providers } from "@/components/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getGlobalSettings } from "@/app/actions/settings";
import Script from "next/script";

export default async function PublicRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    const settings = await getGlobalSettings();

    return (
        <html lang="en">
            <body className="antialiased">
                {/* Google Analytics */}
                {settings?.googleAnalyticsScript && (
                    <div dangerouslySetInnerHTML={{ __html: settings.googleAnalyticsScript }} />
                )}

                {/* Meta Pixel */}
                {settings?.metaPixelScript && (
                    <div dangerouslySetInnerHTML={{ __html: settings.metaPixelScript }} />
                )}

                {/* TikTok Pixel */}
                {settings?.tiktokPixelScript && (
                    <div dangerouslySetInnerHTML={{ __html: settings.tiktokPixelScript }} />
                )}

                <CustomCursor />
                <Providers session={session}>
                    <PublicClientLayout>
                        {children}
                    </PublicClientLayout>
                    <ChatWidget />
                    <Suspense fallback={null}>
                        <AudienceTracker />
                    </Suspense>
                    <CookieConsentBanner />
                </Providers>
            </body>
        </html>
    );
}
