"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Globe, AlertCircle, Check } from "lucide-react";
import SeoDetailView from "./SeoDetailView";

interface SeoPageCardProps {
    page: any;
    refreshData: () => void;
}

export default function SeoPageCard({ page, refreshData }: SeoPageCardProps) {
    const [expanded, setExpanded] = useState(false);

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-emerald-600 border-emerald-200 bg-emerald-50";
        if (score >= 50) return "text-amber-600 border-amber-200 bg-amber-50";
        return "text-rose-600 border-rose-200 bg-rose-50";
    };

    const scoreClass = getScoreColor(page.score);

    return (
        <div className={`rounded-[2.5rem] border-4 transition-all duration-300 overflow-hidden ${expanded ? "bg-white border-slate-200 shadow-2xl scale-[1.01] ring-4 ring-slate-50" : "bg-white border-slate-100 hover:border-lime-300 hover:shadow-xl hover:-translate-y-1"}`}>

            {/* Header / Summary Row */}
            <div
                onClick={() => setExpanded(!expanded)}
                className="p-8 flex items-center justify-between cursor-pointer w-full group"
            >
                <div className="flex items-center gap-8">
                    {/* Score Circle */}
                    <div className={`size-20 rounded-full border-4 flex items-center justify-center text-2xl font-black ${scoreClass}`}>
                        {page.score}
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                            {page.pageSlug.charAt(0).toUpperCase() + page.pageSlug.slice(1)} Page
                            {page.indexable && <span className="text-[10px] uppercase font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200 tracking-widest">Indexable</span>}
                        </h3>
                        <div className="flex gap-4 mt-3 text-xs font-bold uppercase tracking-wider">
                            <span className={page.title ? "text-emerald-600 flex items-center gap-1.5" : "text-slate-400 flex items-center gap-1.5"}>
                                {page.title ? <Check size={16} strokeWidth={3} /> : <AlertCircle size={16} />} Title
                            </span>
                            <span className={page.description ? "text-emerald-600 flex items-center gap-1.5" : "text-slate-400 flex items-center gap-1.5"}>
                                {page.description ? <Check size={16} strokeWidth={3} /> : <AlertCircle size={16} />} Desc
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href={`/${page.pageSlug === 'home' ? '' : page.pageSlug}`}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="p-4 text-slate-400 hover:text-white hover:bg-slate-900 rounded-2xl transition-all font-bold group/link"
                        title="View Live Page"
                    >
                        <Globe size={24} className="group-hover/link:animate-spin-slow" />
                    </a>
                    <button className={`p-4 rounded-2xl transition-all ${expanded ? "bg-slate-100 text-slate-900" : "text-slate-300 group-hover:text-slate-600 bg-slate-50"}`}>
                        {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                </div>
            </div>

            {/* Expanded Content */}
            {expanded && (
                <div className="border-t-4 border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <SeoDetailView slug={page.pageSlug} initialScore={page.score} onUpdate={refreshData} />
                </div>
            )}
        </div>
    );
}
