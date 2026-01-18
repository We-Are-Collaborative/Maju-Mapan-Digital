"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";

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
                {/* Header Removed */}
                {/* Mobile Menu Trigger (Preserved for accessibility if needed, placed absolutely or handled differently? User asked to remove top bar. I will provide a minimal mobile trigger or just remove it. Let's remove it for now as per strict instruction "Remove the top bar". If mobile nav is needed, we can add a floating button later.) */}
                <div className="lg:hidden p-4 absolute top-0 left-0 z-50">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-3 bg-white/80 backdrop-blur text-slate-900 rounded-xl shadow-sm border border-slate-200"
                    >
                        <Menu size={22} />
                    </button>
                </div>

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
