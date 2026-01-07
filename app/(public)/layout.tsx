import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

import "../globals.css";
import PublicClientLayout from "./public-layout";
import { CustomCursor } from "@/components/custom-cursor";
import { ChatWidget } from "@/components/chat/chat-widget";

export const metadata: Metadata = {
    title: "Maju Mapan Digital",
    description: "Excellence in Digital Solutions",
};

import { Providers } from "@/components/providers";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function PublicRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body className="antialiased">
                <CustomCursor />
                <Providers session={session}>
                    <PublicClientLayout>
                        {children}
                    </PublicClientLayout>
                    <ChatWidget />
                </Providers>
            </body>
        </html>
    );
}
