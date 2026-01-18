"use client";
import React, { useState, useEffect } from "react";
import { getSeoHealth, getAllSeoPages } from "@/app/actions/seo";
import SeoHealthHeader from "./components/SeoHealthHeader";
import SeoPageCard from "./components/SeoPageCard";
import { Loader2 } from "lucide-react";
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
            <div className="h-[60vh] flex flex-col items-center justify-center text-slate-400 gap-4">
                <Loader2 className="animate-spin text-lime-600" size={48} />
                <p className="font-black text-slate-900">Analyzing SEO Metrics...</p>
            </div>
        );
    }

    return (
        <div className=" p-8 animate-in fade-in duration-700 space-y-8">
            <AdminHeader
                defaultTitle="SEO Dashboard"
                defaultSubtitle="Overview of your search visibility and page metrics."
            />

            <SeoHealthHeader stats={stats} />

            <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-2">Pages Analysis</div>
                {pages.map((page) => (
                    <SeoPageCard
                        key={page.id}
                        page={page}
                        refreshData={fetchData}
                    />
                ))}

                {pages.length === 0 && (
                    <div className="text-center py-16 bg-white/50 rounded-3xl border-2 border-dashed border-slate-300 text-slate-500 font-bold">
                        No pages analysis found.
                    </div>
                )}
            </div>
        </div>
    );
}
