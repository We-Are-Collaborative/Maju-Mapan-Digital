"use client";
import React from "react";
import { BarChart, Search, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ContentAnalysisPage() {
    return (
        <div className=" p-8 space-y-8 animate-in fade-in duration-700">
            <div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900">Content Analysis</h1>
                <p className="text-slate-500 font-medium">Keyword density, metadata quality, and content optimization.</p>
            </div>

            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input placeholder="Search pages or keywords..." className="pl-10 bg-white border-slate-200" />
                </div>
            </div>

            <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 text-slate-400">
                <BarChart className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                <p>Select a page or enter a keyword to start analysis.</p>
            </div>
        </div>
    );
}
