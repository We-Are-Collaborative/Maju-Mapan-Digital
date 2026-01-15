"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Settings, Users, LogOut, Globe, Zap, Briefcase, Code, MessageSquare, Building, Tag, Activity, Map, BarChart, Folder } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
    const pathname = usePathname();

    const { data: session } = useSession();
    const role = session?.user?.role as string | undefined;

    let navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    ];

    // Employee / Admin Menu
    if (!role || role === 'admin') { // Treat undefined/admin as Employee for now
        navItems = [
            { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
            { name: "Careers", href: "/admin/careers", icon: Briefcase },
            { name: "Applications", href: "/admin/careers/applications", icon: FileText },
            { name: "Candidate Users", href: "/admin/candidate-users", icon: Users },
            { name: "Values", href: "/admin/values", icon: FileText },
            { name: "Solutions", href: "/admin/solutions", icon: Zap },
            { name: "Clients", href: "/admin/clients", icon: Building },
            { name: "Insights", href: "/admin/insights", icon: FileText },
            { name: "Categories", href: "/admin/categories", icon: Tag },
            { name: "Content", href: "/admin/content", icon: LayoutDashboard },
            { name: "Leads", href: "/admin/leads", icon: MessageSquare },
            { name: "Scripts", href: "/admin/scripts", icon: Code },
            // SEO moved to dedicated group
            { name: "Users", href: "/admin/users", icon: Users },
            { name: "Settings", href: "/admin/settings", icon: Settings },
        ];
    }
    // Client Menu
    else if (role === 'client') {
        navItems = [
            { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
            { name: "Active Brands", href: "/admin/brands", icon: Building }, // Assuming "Active Campaigns" roughly means Brands/Projects
            // Note: User said "show the brands side menu which will display the active campaigns running with them."
            // We might need a dedicated page /admin/brands or re-use existing if accessible?
        ];
    }

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
            <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
                {/* Dashboard & Hero */}
                <div className="space-y-1">
                    <Button variant={pathname === '/admin' ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                        <Link href="/admin">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Link>
                    </Button>
                    <Button variant={pathname.startsWith('/admin/settings/hero') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                        <Link href="/admin/settings/hero">
                            <Zap className="mr-2 h-4 w-4 text-lime-400" />
                            Hero Home
                        </Link>
                    </Button>
                </div>

                {/* Content Management */}
                <div>
                    <h3 className="mb-2 px-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Content & Portfolio</h3>
                    <div className="space-y-1">
                        <Button variant={pathname.startsWith('/admin/solutions') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/solutions">
                                <Zap className="mr-2 h-4 w-4" />
                                Solutions
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/clients') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/clients">
                                <Building className="mr-2 h-4 w-4" />
                                Clients
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/insights') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/insights">
                                <FileText className="mr-2 h-4 w-4" />
                                Insights
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/content') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/content">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                Content Blocks
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/media') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/media">
                                <Activity className="mr-2 h-4 w-4" />
                                Media Library
                            </Link>
                        </Button>

                        <Button variant={pathname.startsWith('/admin/categories') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/categories">
                                <Tag className="mr-2 h-4 w-4" />
                                Categories
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/team') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/team">
                                <Users className="mr-2 h-4 w-4" />
                                Team
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Recruitment */}
                <div>
                    <h3 className="mb-2 px-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Recruitment</h3>
                    <div className="space-y-1">
                        <Button variant={pathname.startsWith('/admin/careers') && !pathname.includes('applications') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/careers">
                                <Briefcase className="mr-2 h-4 w-4" />
                                Jobs / Careers
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/careers/applications') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/careers/applications">
                                <FileText className="mr-2 h-4 w-4" />
                                Applications
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/candidate-users') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/candidate-users">
                                <Users className="mr-2 h-4 w-4" />
                                Candidates
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Business */}
                <div>
                    <h3 className="mb-2 px-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Business</h3>
                    <div className="space-y-1">
                        <Button variant={pathname.startsWith('/admin/leads') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/leads">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Leads
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Components we inserted previously for SEO go here, assume next chunk handles it or we preserve it? 
                    Wait, if I replace lines 62-105 with this block, I am removing the loop logic. 
                    I need to make sure I don't lose the SEO block if it was outside your generic range.
                    The previous SEO block was inserted at line ~88 (inside previous range).
                    I need to RE-INCLUDE the SEO part in this replacement or ensure it falls into the sequence.
                */}

                {/* SEO & GEO Manager */}
                <div>
                    <h3 className="mb-2 px-2 text-xs font-bold text-slate-500 uppercase tracking-wider">SEO & GEO Manager</h3>
                    <div className="space-y-1">
                        <Button variant={pathname === '/admin/seo' ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/seo">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                Dashboard
                            </Link>
                        </Button>
                        <Button variant={pathname?.startsWith('/admin/seo/audit') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/seo/audit">
                                <Activity className="mr-2 h-4 w-4" />
                                Audit & Scan
                            </Link>
                        </Button>
                        <Button variant={pathname?.startsWith('/admin/seo/geo') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/seo/geo">
                                <Map className="mr-2 h-4 w-4" />
                                Geo Targeting
                            </Link>
                        </Button>
                        <Button variant={pathname?.startsWith('/admin/seo/analysis') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/seo/analysis">
                                <BarChart className="mr-2 h-4 w-4" />
                                Content Analysis
                            </Link>
                        </Button>
                        <Button variant={pathname?.startsWith('/admin/seo/settings') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/seo/settings">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* System */}
                <div>
                    <h3 className="mb-2 px-2 text-xs font-bold text-slate-500 uppercase tracking-wider">System</h3>
                    <div className="space-y-1">
                        <Button variant={pathname.startsWith('/admin/users') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/users">
                                <Users className="mr-2 h-4 w-4" />
                                Users
                            </Link>
                        </Button>

                        <Button variant={pathname.startsWith('/admin/system/files') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/system/files">
                                <Folder className="mr-2 h-4 w-4" />
                                File Directory
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/settings') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/settings">
                                <Settings className="mr-2 h-4 w-4" />
                                General Settings
                            </Link>
                        </Button>
                        <Button variant={pathname.startsWith('/admin/settings/global') ? 'secondary' : 'ghost'} size="sm" className="w-full justify-start" asChild>
                            <Link href="/admin/settings/global">
                                <Globe className="mr-2 h-4 w-4" />
                                Website Config
                            </Link>
                        </Button>
                    </div>
                </div>
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
