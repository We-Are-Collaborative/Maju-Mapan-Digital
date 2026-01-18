"use client";
import React, { useEffect, useState } from "react";
import { Activity, Users, FileText, ArrowUpRight, BarChart3, Database, Globe, Briefcase, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { getKpiStats } from "@/app/(admin)/_actions/dashboard";
import PublicAccessWidget from "./components/PublicAccessWidget";
import { useSession } from "next-auth/react";
import AdminHeader from "../components/AdminHeader";

// Reusable Premium Components for this page
function PremiumKpiCard({ title, value, change, icon: Icon, theme = "default" }: any) {
    const themes: any = {
        default: "bg-white border-slate-100 hover:border-slate-200",
        dark: "bg-slate-900 border-slate-900 text-white",
        lime: "bg-gradient-to-br from-lime-400 to-lime-500 border-lime-400 text-slate-900"
    };

    const isDark = theme === 'dark';
    const isLime = theme === 'lime';

    return (
        <div className={`relative overflow-hidden rounded-[2.5rem] p-8 border-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group ${themes[theme]}`}>
            {/* Background Decor */}
            <div className="absolute -right-6 -top-6 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Icon size={140} />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
                <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-2xl ${isDark ? 'bg-white/10 text-white' : isLime ? 'bg-black/10 text-slate-900' : 'bg-slate-50 text-slate-900'}`}>
                        <Icon size={24} />
                    </div>
                    {change && (
                        <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isDark ? 'bg-white/20 text-white' : 'bg-white/40 backdrop-blur-md text-slate-900'}`}>
                            {change}
                        </div>
                    )}
                </div>
                <div>
                    <h3 className={`text-5xl font-black tracking-tighter mb-2 ${isDark || isLime ? 'text-white' : 'text-slate-900'} ${isLime ? '!text-slate-900' : ''}`}>{value}</h3>
                    <p className={`text-xs font-bold uppercase tracking-widest ${isDark || isLime ? 'text-white/60' : 'text-slate-400'} ${isLime ? '!text-slate-900/60' : ''}`}>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default function AdminDashboard() {
    const { data: session } = useSession();
    const [stats, setStats] = useState<any>(null);
    const role = session?.user?.role;

    useEffect(() => {
        if (role === 'admin' || !role) {
            getKpiStats().then(setStats);
        }
    }, [role]);

    // Client View (Simplified)
    if (role === 'client') {
        return (
            <div className="min-h-screen p-12 max-w-[1600px] mx-auto animate-in fade-in duration-700 space-y-12">
                <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[.3em] mb-2 block">Client Portal</span>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Welcome back.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PremiumKpiCard title="Active Brands" value="1" icon={Globe} theme="dark" />
                    <PremiumKpiCard title="Active Projects" value="3" icon={Zap} theme="lime" />
                    <div className="lg:col-span-1 bg-slate-50 rounded-[2.5rem] p-8 border-4 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white hover:border-slate-300 transition-colors cursor-pointer group">
                        <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                            <ArrowUpRight size={32} />
                        </div>
                        <p className="font-bold text-slate-400">View All Analytics</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-12 max-w-[1600px] mx-auto animate-in fade-in duration-700 space-y-12">
            {/* Header Section */}
            <AdminHeader
                defaultTitle="System Overview"
                defaultSubtitle="Real-time performance metrics and operational status."
            />

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <PremiumKpiCard
                    title="Total Traffic"
                    value={stats?.visits || "124.5K"}
                    change="+12.5%"
                    icon={Activity}
                    theme="lime"
                />
                <PremiumKpiCard
                    title="Active Users"
                    value={stats?.activeUsers || "8.2K"}
                    change="Steady"
                    icon={Users}
                    theme="dark"
                />
                <PremiumKpiCard
                    title="Content Pages"
                    value={stats?.totalPages || "24"}
                    change="+2 New"
                    icon={FileText}
                    theme="default"
                />
                <PremiumKpiCard
                    title="System Health"
                    value="98.2%"
                    change="Optimal"
                    icon={ShieldCheck}
                    theme="default"
                />
            </div>

            {/* Content & Actions Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                {/* Main Chart / Content Area */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] border-4 border-slate-100 p-10 shadow-xl flex flex-col justify-between group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-1/3 -translate-y-1/3 opacity-50 pointer-events-none"></div>

                    <div className="flex justify-between items-center mb-8 relative z-10">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900">Traffic Velocity</h3>
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">Last 30 Days</p>
                        </div>
                        <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
                            <BarChart3 size={24} />
                        </button>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-3 pb-2 border-b-2 border-slate-50 relative z-10">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <div key={i} className="w-full bg-slate-100 rounded-t-xl relative group/bar overflow-hidden" style={{ height: `${h}%` }}>
                                <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Recommendations */}
                <div className="space-y-8">
                    {/* Public Access Widget */}
                    <PublicAccessWidget />

                    <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-lg font-black text-slate-900">Recommended</h3>
                        </div>
                        <div className="space-y-4">
                            <Link href="/admin/content" className="flex items-center gap-4 p-5 rounded-3xl border-2 border-slate-50 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all hover:shadow-lg group cursor-pointer">
                                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-2xl text-slate-400 group-hover:text-lime-600 transition-colors">
                                    <FileText size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-lime-700 transition-colors">Update Homepage</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Content Stale</p>
                                </div>
                                <ArrowUpRight className="text-slate-300 group-hover:text-lime-500 transition-colors" size={20} />
                            </Link>

                            <Link href="/admin/seo" className="flex items-center gap-4 p-5 rounded-3xl border-2 border-slate-50 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all hover:shadow-lg group cursor-pointer">
                                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-2xl text-slate-400 group-hover:text-slate-900 transition-colors">
                                    <Globe size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 text-sm">SEO Audit</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">2 Warnings</p>
                                </div>
                                <ArrowUpRight className="text-slate-300 group-hover:text-slate-900 transition-colors" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
