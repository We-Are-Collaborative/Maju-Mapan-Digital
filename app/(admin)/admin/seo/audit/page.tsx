"use client";
import React from "react";
import { Activity, ShieldCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SeoAuditPage() {
    return (
        <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-700">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900">Audit & Health Scan</h1>
                    <p className="text-slate-500 font-medium">Deep dive into your site's technical SEO performance.</p>
                </div>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
                    <Activity className="mr-2 h-4 w-4" /> Run New Scan
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <div className="text-2xl font-black text-slate-900">98%</div>
                            <div className="text-xs font-bold text-slate-500 uppercase">Health Score</div>
                        </div>
                    </div>
                </div>
                {/* More placeholders can go here */}
            </div>

            <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50">
                <p className="text-slate-400 font-medium">Audit report data visualization will appear here.</p>
            </div>
        </div>
    );
}
