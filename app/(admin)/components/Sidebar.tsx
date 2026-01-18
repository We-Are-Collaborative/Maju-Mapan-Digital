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

    const isActivePath = (path: string) => {
        if (path === '/admin' || path === '/dashboard') {
            return pathname === path;
        }

        // Exact match
        if (pathname === path) return true;

        // Fix for double highlighting: 
        // If we are on the 'Applications' page (/admin/careers/applications), 
        // do NOT highlight the parent 'Careers' link (/admin/careers).
        if (path === '/admin/careers' && pathname.startsWith('/admin/careers/applications')) {
            return false;
        }

        // Subpath match (must be followed by / to ensure it's a directory match)
        return pathname.startsWith(path + '/');
    };

    return (
        <aside
            className="w-64 flex flex-col h-full border-r transition-colors duration-300"
            style={{
                backgroundColor: 'var(--colors-sidebar-background)',
                color: 'var(--colors-sidebar-foreground)',
                borderColor: 'var(--colors-sidebar-border)'
            }}
        >
            {/* Brand */}
            <div className="p-6 border-b transition-colors duration-300" style={{ borderColor: 'var(--colors-sidebar-divider)' }}>
                <div className="text-2xl font-black bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                    MAJU MAPAN
                </div>
                <div className="text-xs font-bold tracking-widest uppercase mt-1 opacity-70">
                    CMS Admin
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
                {navData.map((category) => (
                    <div key={category.id}>
                        <h3 className="mb-2 px-2 text-xs font-bold opacity-50 uppercase tracking-wider">{category.title}</h3>

                        <div className="space-y-1">
                            {category.items.map((item: any) => {
                                const active = isActivePath(item.href);

                                // Dynamic inline styles for active/inactive states
                                const itemStyle = active ? {
                                    backgroundColor: 'var(--colors-sidebar-active-item-bg)',
                                    color: 'var(--colors-sidebar-active-item-text)'
                                } : {
                                    color: 'var(--colors-sidebar-foreground)',
                                    // Hover usually handled by CSS, but strictly variables here requires careful CSS construction or className utility for hover.
                                    // For simplicity with inline vars, we might rely on a class that uses the vars on hover, 
                                    // OR simple opacity for inactive.
                                    // But the requirement says "Hover nav background" is a token.
                                };

                                // We can use a className for hover that references the variable
                                const hoverClass = !active ? "hover:bg-[var(--colors-sidebar-hover-item-bg)] hover:text-[var(--colors-sidebar-hover-item-text)]" : "";

                                return (
                                    <Button
                                        key={item.id}
                                        variant="ghost"
                                        size="sm"
                                        style={itemStyle}
                                        className={`w-full justify-start relative transition-all duration-200 ${hoverClass} ${item.uiRowClass || ''} ${active ? 'font-bold shadow-lg' : 'opacity-80 hover:opacity-100'}`}
                                        asChild
                                    >
                                        <Link href={item.href}>
                                            <DynamicIcon name={item.icon} />
                                            {item.name}
                                        </Link>
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer / User */}
            <div className="p-4 border-t transition-colors duration-300" style={{ borderColor: 'var(--colors-sidebar-divider)' }}>
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors w-full font-bold hover:bg-rose-500/10 hover:text-rose-400"
                    style={{ color: 'var(--colors-sidebar-foreground)' }}
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
