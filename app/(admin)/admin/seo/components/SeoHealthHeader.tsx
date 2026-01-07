"use client";
import React from "react";
import { Activity, AlertTriangle, CheckCircle, Smartphone } from "lucide-react";

interface HealthProps {
    avgScore: number;
    totalPages: number;
    indexed: number;
    critical: number;
    perfect: number;
}

export default function SeoHealthHeader({ stats }: { stats: HealthProps }) {
    if (!stats) return null;

    return (
        <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-200/50">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-tr from-lime-400 to-lime-600 text-white rounded-lg shadow-lg shadow-lime-500/30">
                            <Activity size={24} />
                        </div>
                        Global Health
                    </h2>
                    <p className="text-slate-500 font-medium mt-1 ml-11">Live analysis of all publishable pages.</p>
                </div>
                <div className="text-right">
                    <div className="text-6xl font-black text-slate-900 tracking-tighter">{stats.avgScore}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Avg Score</div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border-2 border-slate-100 hover:border-lime-400 hover:shadow-lg transition-all cursor-default">
                    <div className="text-slate-500 text-[10px] font-bold uppercase mb-2 flex items-center gap-2 tracking-wider">
                        <CheckCircle size={14} className="text-slate-400" /> Total Pages
                    </div>
                    <div className="text-3xl font-black text-slate-900">{stats.totalPages}</div>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border-2 border-slate-100 hover:border-lime-400 hover:shadow-lg transition-all cursor-default">
                    <div className="text-slate-500 text-[10px] font-bold uppercase mb-2 flex items-center gap-2 tracking-wider">
                        <Smartphone size={14} className="text-slate-400" /> Indexable
                    </div>
                    <div className="text-3xl font-black text-slate-900">{stats.indexed}</div>
                </div>
                <div className="bg-emerald-50 p-5 rounded-xl border-2 border-emerald-100 hover:shadow-lg transition-all cursor-default">
                    <div className="text-emerald-700 text-[10px] font-bold uppercase mb-2 flex items-center gap-2 tracking-wider">
                        <CheckCircle size={14} /> Optimized
                    </div>
                    <div className="text-3xl font-black text-emerald-700">{stats.perfect}</div>
                </div>
                <div className="bg-rose-50 p-5 rounded-xl border-2 border-rose-100 hover:shadow-lg transition-all cursor-default">
                    <div className="text-rose-600 text-[10px] font-bold uppercase mb-2 flex items-center gap-2 tracking-wider">
                        <AlertTriangle size={14} /> Critical
                    </div>
                    <div className="text-3xl font-black text-rose-600">{stats.critical}</div>
                </div>
            </div>
        </div>
    );
}
