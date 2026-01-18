'use client'

import React, { useEffect, useState } from 'react';
import { getDashboardMetrics } from '@/app/actions/mapan';
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, DollarSign, Activity, Users, BarChart3, TrendingUp, ArrowUpRight } from "lucide-react";

export default function MapanDashboardPage() {
    const [metrics, setMetrics] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const data = await getDashboardMetrics();
            setMetrics(data);
            setLoading(false);
        };
        fetch();
    }, []);

    if (loading) {
        return (
            <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-lime-500" size={48} />
                <span className="text-sm font-black text-slate-400 uppercase tracking-[.3em]">Synching Neural Data</span>
            </div>
        );
    }

    return (
        <div className="space-y-12 p-8 w-full mx-auto animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Activity className="text-lime-500" size={20} />
                        <span className="text-[10px] font-black text-lime-600 uppercase tracking-[.3em]">System Overview</span>
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Command Center</h1>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border-2 border-slate-100 shadow-sm">
                    <div className="relative size-3">
                        <div className="absolute inset-0 bg-lime-500 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute inset-0 bg-lime-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Live Stream Active</span>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Total Spend */}
                <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <DollarSign size={120} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Total Spend</p>
                        <h3 className="text-5xl font-black text-white tracking-tighter mb-2">
                            ${(metrics?.totalSpend || 0).toLocaleString()}
                        </h3>
                        <div className="flex items-center gap-2 text-lime-400 text-sm font-bold">
                            <TrendingUp size={16} />
                            <span>+12.5% this month</span>
                        </div>
                    </div>
                </div>

                {/* Active Campaigns */}
                <div className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-lime-200 transition-all group">
                    <div className="flex items-center justify-between mb-8">
                        <div className="p-4 bg-lime-100 text-lime-600 rounded-2xl group-hover:scale-110 transition-transform">
                            <Activity size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Active</span>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-1">
                        {metrics?.activeCampaigns}
                    </h3>
                    <p className="text-slate-400 font-bold text-sm">Running Campaigns</p>
                </div>

                {/* Brand Portfolio */}
                <div className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-lime-200 transition-all group">
                    <div className="flex items-center justify-between mb-8">
                        <div className="p-4 bg-sky-100 text-sky-600 rounded-2xl group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Portfolio</span>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-1">
                        {metrics?.brandCount}
                    </h3>
                    <p className="text-slate-400 font-bold text-sm">Managed Brands</p>
                </div>

                {/* Engagement (Placeholder) */}
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-[2.5rem] p-8 shadow-xl text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                                <BarChart3 size={20} />
                            </div>
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">Beta</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black tracking-tight mb-2">Intelligence Engine</h3>
                            <p className="text-white/60 text-sm font-medium leading-relaxed">
                                AI-driven insights processing...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-slate-900">Performance Velocity</h3>
                        <select className="bg-slate-50 border-none text-xs font-bold uppercase tracking-widest text-slate-500 rounded-lg px-4 py-2 outline-none">
                            <option>Last 30 Days</option>
                            <option>Quarter to Date</option>
                            <option>Year to Date</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full bg-slate-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-200">
                        <div className="text-center">
                            <BarChart3 className="mx-auto text-slate-300 mb-4" size={48} />
                            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Visualization Module Loading</p>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-sm flex flex-col">
                    <h3 className="text-xl font-black text-slate-900 mb-8">Live Feed</h3>
                    <div className="space-y-6 flex-1 overflow-y-auto pr-2">
                        {metrics?.recentActivity.length === 0 ? (
                            <p className="text-slate-400 text-sm font-bold italic">No recent signals detected.</p>
                        ) : (
                            metrics?.recentActivity.map((campaign: any) => (
                                <div key={campaign.id} className="flex items-start gap-4 group cursor-pointer">
                                    <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-lime-50 transition-colors">
                                        <ArrowUpRight size={18} className="text-slate-400 group-hover:text-lime-500 transition-colors" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-slate-900 truncate group-hover:text-lime-600 transition-colors">{campaign.name}</h4>
                                        <p className="text-xs text-slate-400 font-medium truncate">{campaign.client.name}</p>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${campaign.status === 'active' ? 'bg-lime-100 text-lime-700' :
                                        campaign.status === 'draft' ? 'bg-slate-100 text-slate-500' :
                                            'bg-amber-100 text-amber-700'
                                        }`}>
                                        {campaign.status}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
