"use client";
import React, { useState, useEffect } from "react";
import { getSeoHealth, getAllSeoPages } from "@/app/actions/seo";
import SeoHealthHeader from "./components/SeoHealthHeader";
import SeoPageCard from "./components/SeoPageCard";
import { Loader2, Search, Zap } from "lucide-react";
import AdminHeader from "../../components/AdminHeader";

export default function SEOManager() {
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<any>(null);
    const [pages, setPages] = useState<any[]>([]);

    const fetchData = async () => {
        const [healthRes, pagesRes] = await Promise.all([
            getSeoHealth(),
            getAllSeoPages()
        ]);
        setStats(healthRes);
        setPages(pagesRes);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-6 animate-in fade-in duration-700">
                <div className="p-6 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                    <Loader2 className="animate-spin text-lime-500" size={48} />
                </div>
                <div className="text-center space-y-2">
                    <p className="font-black text-2xl text-slate-900 tracking-tight">Analyzing SEO Metrics</p>
                    <p className="text-slate-500 font-medium">Scanning page health and performance...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-8">
            <AdminHeader
                defaultTitle="SEO Dashboard"
                defaultSubtitle="Overview of your search visibility and page metrics."
            />

            <SeoHealthHeader stats={stats} />

            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-lime-400 flex items-center justify-center text-slate-900 shadow-lg shadow-lime-500/20">
                        <Zap size={20} className="fill-current" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-900">Page Performance</h3>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest leading-none mt-1">Live Analysis</p>
                    </div>
                </div>

                <div className="grid gap-6">
                    {pages.map((page) => (
                        <div key={page.id} className="transform transition-all duration-300 hover:-translate-y-1">
                            <SeoPageCard
                                page={page}
                                refreshData={fetchData}
                            />
                        </div>
                    ))}
                </div>

                {pages.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2.5rem] border-4 border-dashed border-slate-200">
                        <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                            <Search size={32} className="text-slate-300" />
                        </div>
                        <p className="text-xl font-black text-slate-900 mb-2">No SEO data found.</p>
                        <p className="text-slate-500 font-medium">Start by generating a scan for your pages.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
