"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Toaster } from "sonner";

// "AgencyClone" Header (Optional, or just Sidebar + Main)
const TopBar = () => {
    return (
        <div className="flex justify-end p-4 mb-4">
            {/* Profile? */}
        </div>
    )
}

export default function MainClientLayout({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    // We can assume if this layout is active, we are in (admin) group.

    // Auth Check
    if (status === "loading") return <div className="flex h-screen items-center justify-center bg-slate-900 text-indigo-400">Loading...</div>;
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex h-screen font-sans text-[var(--foreground)] bg-[var(--background)]">
            <Toaster />
            {/* Sidebar (Fixed width) */}
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">
                <Header user={session?.user} />

                {/* Main Content Area */}
                <main className="flex-1 overflow-auto p-8 relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
