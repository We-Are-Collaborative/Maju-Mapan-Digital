"use client";
import React, { useEffect, useState } from "react";
import { Activity, Users, FileText, ArrowUpRight, BarChart3, Database, Globe, Briefcase, Zap } from "lucide-react";
import Link from "next/link";
import { getKpiStats } from "@/app/(admin)/_actions/dashboard";
import PublicAccessWidget from "./components/PublicAccessWidget";
import { useSession } from "next-auth/react";

export default function AdminDashboard() {
    const { data: session } = useSession();
    const [stats, setStats] = useState<any>(null);
    const role = session?.user?.role;

    useEffect(() => {
        if (role === 'admin' || !role) {
            getKpiStats().then(setStats);
        }
    }, [role]);

    // Role-specific views
    if (role === 'client') {
        return (
            <div className="space-y-10 p-8 w-full animate-in fade-in duration-700">
                <div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-2">Welcome Back</h1>
                    <p className="text-lg font-medium text-slate-500 max-w-2xl">
                        Manage your active brands and monitor project performance.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <KpiCard title="Active Brands" value="1" icon={Globe} color="black" />
                    <KpiCard title="Ongoing Projects" value="3" icon={Zap} color="lime" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-200">
                    <h3 className="text-xl font-black text-slate-900 mb-4 text-center">Ready to explore?</h3>
                    <Link href="/admin/brands">
                        <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all">
                            Go to My Brands
                        </button>
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="space-y-10 p-8 w-full animate-in fade-in duration-700">
            {/* Header Section */}
            <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-2">Dashboard</h1>
                <p className="text-lg font-medium text-slate-500 max-w-2xl">
                    Overview of your system's performance and content metrics.
                </p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard
                    title="Total Traffic"
                    value={stats?.visits || "124.5K"}
                    change="+12.5%"
                    icon={Activity}
                    color="lime"
                />
                <KpiCard
                    title="Active Users"
                    value={stats?.activeUsers || "8.2K"}
                    change="+5.2%"
                    icon={Users}
                    color="black"
                />
                <KpiCard
                    title="Content Pages"
                    value={stats?.totalPages || "24"}
                    change="2 new"
                    icon={FileText}
                    color="slate"
                />
                <KpiCard
                    title="System Health"
                    value="98.2%"
                    change="Stable"
                    icon={Database}
                    color="emerald"
                />
            </div>

            {/* Content & Actions Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart / Content Area */}
                <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-black text-slate-900">Traffic Overview</h3>
                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors">
                            <BarChart3 size={20} />
                        </button>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2 px-4 pb-4 border-b-2 border-slate-100">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-lime-400 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Recommendations */}
                <div className="space-y-8">
                    {/* Public Access Widget */}
                    <PublicAccessWidget />

                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-black text-slate-900 mb-6">Recommended Actions</h3>
                        <div className="space-y-4">
                            <Link href="/admin/content" className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 bg-slate-50 hover:bg-white hover:border-lime-400 transition-all hover:-translate-y-1 hover:shadow-lg group cursor-pointer">
                                <div className="p-3 bg-white border border-slate-200 rounded-lg text-slate-400 group-hover:text-lime-600 transition-colors">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Update Homepage</h4>
                                    <p className="text-xs text-slate-500 font-medium">Content is 3 days old</p>
                                </div>
                                <ArrowUpRight className="ml-auto text-slate-300 group-hover:text-lime-600" size={18} />
                            </Link>

                            <Link href="/admin/seo" className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 bg-slate-50 hover:bg-white hover:border-black transition-all hover:-translate-y-1 hover:shadow-lg group cursor-pointer">
                                <div className="p-3 bg-white border border-slate-200 rounded-lg text-slate-400 group-hover:text-slate-900 transition-colors">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">SEO Audit</h4>
                                    <p className="text-xs text-slate-500 font-medium">2 critical warnings</p>
                                </div>
                                <ArrowUpRight className="ml-auto text-slate-300 group-hover:text-slate-900" size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function KpiCard({ title, value, change, icon: Icon, color }: any) {
    const isLime = color === 'lime';
    const isBlack = color === 'black';

    let iconBg = "bg-slate-50 text-slate-500";
    if (isLime) iconBg = "bg-lime-50 text-lime-600";
    if (isBlack) iconBg = "bg-slate-900 text-white";

    return (
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-200 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl border border-slate-100 ${iconBg} transition-transform group-hover:scale-110`}>
                    <Icon size={22} />
                </div>
                {change && (
                    <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                        {change}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight mb-1">{value}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</p>
            </div>
        </div>
    );
}
