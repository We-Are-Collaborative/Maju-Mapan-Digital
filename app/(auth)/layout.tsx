import { Providers } from "@/components/providers";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body className="antialiased bg-[#050505]">
                <Providers session={session}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
