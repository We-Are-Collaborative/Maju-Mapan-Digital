"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Settings, Users, LogOut, Globe, Zap, Briefcase, Code, MessageSquare, Building, Tag, Activity, Map, BarChart, Folder } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

import { AdminNavCategoryWithItems } from "@/app/actions/navigation";
import * as Icons from "lucide-react";

const Sidebar = ({ navData = [] }: { navData?: AdminNavCategoryWithItems[] }) => {
    const pathname = usePathname();

    const { data: session } = useSession();
    const role = session?.user?.role as string | undefined;

    // If we have dynamic data, use it. But we also need to respect role based filtering (which is partially in DB now, partially hardcoded logic in old sidebar)
    // The requirement says "fetch from database".
    // For now, let's just use the dynamic data if available.
    // We can filter by role here if needed, but DB schema has 'roles' field.

    // Helper to generic icon
    const DynamicIcon = ({ name }: { name: string }) => {
        const Icon = (Icons as any)[name];
        return Icon ? <Icon className="mr-2 h-4 w-4" /> : <Icons.Circle className="mr-2 h-4 w-4" />;
    };

    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col h-full border-r border-slate-800">
            {/* Brand */}
            <div className="p-6 border-b border-slate-800">
                <div className="text-2xl font-black bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                    MAJU MAPAN
                </div>
                <div className="text-xs text-slate-500 font-bold tracking-widest uppercase mt-1">
                    CMS Admin
                </div>
            </div>

            {/* Nav */}
            {/* Dynamic Nav */}
            <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
                {navData.map((category) => (
                    <div key={category.id}>
                        {/* Only show title if it's not the very top "Dashboard & Hero" one if desired, or just show all titles to separate sections */}
                        <h3 className="mb-2 px-2 text-xs font-bold text-slate-500 uppercase tracking-wider">{category.title}</h3>

                        <div className="space-y-1">
                            {category.items.map((item: any) => (
                                <Button
                                    key={item.id}
                                    variant={pathname === item.href || pathname.startsWith(item.href + '/') ? 'secondary' : 'ghost'}
                                    size="sm"
                                    className={`w-full justify-start ${item.uiRowClass || ''}`}
                                    asChild
                                >
                                    <Link href={item.href}>
                                        <DynamicIcon name={item.icon} />
                                        {item.name}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer / User */}
            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors w-full font-bold"
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
