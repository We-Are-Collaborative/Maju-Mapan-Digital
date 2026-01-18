"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Toaster } from "sonner";
import { Menu, X } from "lucide-react";

import { AdminNavCategoryWithItems } from "@/app/actions/navigation";

export default function MainClientLayout({ children, navData = [] }: { children: React.ReactNode, navData?: AdminNavCategoryWithItems[] }) {
    const { data: session, status } = useSession();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar on navigation (mobile)
    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    // Auth Check
    if (status === "loading") return <div className="flex h-screen items-center justify-center bg-slate-900 text-indigo-400 font-black uppercase tracking-[0.3em] animate-pulse">Neural Syncing...</div>;
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex h-screen font-sans text-slate-900 bg-slate-50 overflow-hidden">
            <Toaster />

            {/* Sidebar Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`fixed inset-y-0 left-0 z-50 transition-all duration-500 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-72 h-full shadow-2xl lg:shadow-none`}>
                <Sidebar navData={navData} />
                {/* Mobile Close Button */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="absolute top-6 -right-12 lg:hidden bg-slate-900 text-white p-2.5 rounded-xl shadow-xl border-2 border-slate-800"
                >
                    <X size={20} />
                </button>
            </aside>

            <div className="flex-1 flex flex-col min-w-0 h-full relative">
                {/* Responsive Header Injection */}
                <header className="h-20 flex items-center justify-between px-6 lg:px-10 bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-3 bg-slate-50 text-slate-900 rounded-xl hover:bg-slate-100 transition-all active:scale-95 border border-slate-200"
                        >
                            <Menu size={22} />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-2xl font-black tracking-tight text-slate-900">
                                {pathname === '/admin' ? 'Intelligence Dashboard' :
                                    pathname.includes('settings') ? 'System Architecture' : 'Content Engine'}
                            </h2>
                        </div>
                    </div>

                    <Header user={session?.user} />
                </header>

                {/* Main Content Area - Full Width */}
                <main className="flex-1 overflow-auto p-6 lg:p-10 relative scroll-smooth">
                    <div className="w-full h-full max-w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
