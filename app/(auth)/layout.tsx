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
            <body className="antialiased">
                <Providers session={session}>
                    <div className="min-h-screen grid lg:grid-cols-2">
                        <div className="flex items-center justify-center p-8 bg-slate-950">
                            <div className="w-full max-w-md space-y-8 bg-slate-900 p-10 rounded-2xl shadow-xl shadow-emerald-900/20 border border-slate-800">
                                {children}
                            </div>
                        </div>
                        <div className="hidden lg:block relative bg-slate-950">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069')] bg-cover bg-center opacity-30" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-slate-900/80 to-black/80" />
                            <div className="relative h-full flex items-end p-16">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-400 font-bold text-xl border border-white/10">
                                            M
                                        </div>
                                        <span className="text-2xl font-bold text-white tracking-tight">Maju Mapan</span>
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-white leading-tight">
                                        Manage your digital empire with precision.
                                    </h2>
                                    <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                                        Access the dashboard to control content, view analytics, and manage applications effortlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
