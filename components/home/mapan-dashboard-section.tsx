"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart2, PieChart, Activity, Layers, Sparkles, TrendingUp, DollarSign, BrainCircuit, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function MapanDashboardSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050505] selection:bg-brand-500/30">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content - Focused on Intelligence & Reality */}
                    <div className="flex-1 space-y-10 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                            >
                                <BrainCircuit size={14} className="animate-pulse" />
                                <span>AI-Powered Intelligence</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
                            >
                                Your Entire Marketing Ecosystem in <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">One View</span>.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
                            >
                                Stop checking five different ad managers. Sync Google, Meta, TikTok, and Programmatic data instantly. Get AI-driven suggestions to maximize your Advertising Value.
                            </motion.p>
                        </div>

                        {/* Integration Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                        >
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 text-center lg:text-left">Seamlessly Connected With</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                {["Google Ads", "Meta Ads", "TikTok", "Shopee", "Tokopedia"].map((platform, i) => (
                                    <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold text-white border border-white/5">
                                        {platform}
                                    </div>
                                ))}
                                <span className="px-3 py-1.5 text-[10px] text-gray-500">+ Programmatic</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
                        >
                            <Button asChild size="lg" className="bg-brand-500 text-black hover:bg-brand-400 rounded-full px-10 h-14 text-base font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all hover:-translate-y-1">
                                <Link href="/mapan-dashboard">
                                    Request Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Premium / Realistic Dashboard Mockup */}
                    <div className="flex-1 w-full max-w-2xl relative order-1 lg:order-2">
                        {/* Glow behind card */}
                        <div className="absolute inset-0 bg-brand-500/10 blur-[80px] rounded-full scale-90 animate-pulse duration-[8000ms]" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative perspective-1000"
                        >
                            {/* Main Dashboard Frame */}
                            <div className="relative bg-[#0F1115] rounded-xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">
                                {/* Dashboard Header */}
                                <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#14161B]">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-black/50 border border-white/5 rounded-md px-3 py-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-mono text-gray-400">Live Connection</span>
                                    </div>
                                </div>

                                {/* Dashboard Body */}
                                <div className="p-5 grid grid-cols-12 gap-5 min-h-[400px]">

                                    {/* Sidebar Navigation (Slim) */}
                                    <div className="col-span-1 hidden sm:flex flex-col gap-4 border-r border-white/5 pr-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 1 ? 'bg-brand-500 text-black' : 'bg-white/5 text-gray-500'}`}>
                                                {i === 1 && <Activity size={16} />}
                                                {i === 2 && <PieChart size={16} />}
                                                {i === 3 && <Layers size={16} />}
                                                {i === 4 && <Globe size={16} />}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Charts & Metrics Area */}
                                    <div className="col-span-12 sm:col-span-11 grid grid-cols-2 gap-5">

                                        {/* Top Row: Metrics Cards */}
                                        <div className="col-span-2 grid grid-cols-3 gap-4">
                                            {/* Ad Value Card */}
                                            <div className="col-span-1 bg-[#1A1D24] p-4 rounded-xl border border-white/5 relative group cursor-default">
                                                <div className="absolute top-0 right-0 p-2 opacity-50 text-brand-500 font-bold text-xs">Rp</div>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Ad Value (ROAS)</p>
                                                <div className="text-2xl font-bold text-white mb-1">4.8x</div>
                                                <div className="flex items-center gap-1 text-[10px] text-brand-500 font-bold bg-brand-500/10 w-fit px-1.5 py-0.5 rounded">
                                                    <TrendingUp size={10} /> +12%
                                                </div>
                                            </div>
                                            {/* Spend Card */}
                                            <div className="col-span-1 bg-[#1A1D24] p-4 rounded-xl border border-white/5">
                                                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Total Spend</p>
                                                <div className="text-2xl font-bold text-white mb-1">Rp 705jt</div>
                                                <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold">
                                                    vs last month
                                                </div>
                                            </div>
                                            {/* AI Insight Card (Callout) */}
                                            <div className="col-span-1 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-3 rounded-xl border border-indigo-500/30 relative overflow-hidden">
                                                <div className="absolute top-2 right-2"><Sparkles size={12} className="text-indigo-300 animate-pulse" /></div>
                                                <p className="text-[10px] text-indigo-200 font-bold mb-2 flex items-center gap-1"><BrainCircuit size={10} /> AI Insight</p>
                                                <p className="text-[11px] leading-tight text-indigo-100 italic">"Shift 15% budget to TikTok Reels for maximize reach."</p>
                                                <div className="mt-2 text-[9px] bg-indigo-500/20 text-indigo-200 px-2 py-0.5 rounded border border-indigo-500/20 inline-block cursor-pointer hover:bg-indigo-500/40 transition-colors">Apply Fix</div>
                                            </div>
                                        </div>

                                        {/* Middle Row: Main Analytical Chart */}
                                        <div className="col-span-2 bg-[#1A1D24] rounded-xl border border-white/5 p-5 relative">
                                            <div className="flex justify-between items-center mb-6">
                                                <h4 className="text-xs font-bold text-gray-300">Cross-Channel Performance</h4>
                                                <div className="flex gap-2">
                                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /><span className="text-[10px] text-gray-500">Meta</span></div>
                                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-500" /><span className="text-[10px] text-gray-500">Google</span></div>
                                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500" /><span className="text-[10px] text-gray-500">TikTok</span></div>
                                                </div>
                                            </div>

                                            {/* Advanced Bar/Line Chart Mockup */}
                                            <div className="h-40 flex items-end justify-between gap-1 sm:gap-3 px-2">
                                                {[65, 45, 75, 55, 80, 70, 90, 85, 60, 75, 50, 95].map((h, i) => (
                                                    <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full group/bar cursor-pointer">
                                                        {/* Stacked Bars */}
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h * 0.3}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: i * 0.05 }}
                                                            className="w-full bg-purple-500/80 rounded-sm opacity-80 group-hover/bar:opacity-100"
                                                        />
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h * 0.4}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: 0.2 + (i * 0.05) }}
                                                            className="w-full bg-blue-500/80 rounded-sm opacity-80 group-hover/bar:opacity-100"
                                                        />
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h * 0.3}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: 0.4 + (i * 0.05) }}
                                                            className="w-full bg-brand-500/80 rounded-t-sm opacity-80 group-hover/bar:opacity-100 relative"
                                                        >
                                                            {i === 9 && (
                                                                // Tooltip Mock
                                                                <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
                                                                    ROI: 5.2x
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* X-Axis */}
                                            <div className="flex justify-between mt-2 pt-2 border-t border-white/5 text-[9px] text-gray-500">
                                                <span>Jan 01</span>
                                                <span>Jan 15</span>
                                                <span>Jan 30</span>
                                            </div>
                                        </div>

                                        {/* Bottom Row: Active Campaigns List */}
                                        <div className="col-span-2 h-24 bg-[#1A1D24] rounded-xl border border-white/5 p-4 overflow-hidden relative">
                                            <h4 className="text-xs font-bold text-gray-300 mb-3">Active Campaigns</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                        <span className="text-[10px] font-bold text-gray-300">Q1 Growth_Generic_Search</span>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-brand-400">Rp 48.500 CPC</span>
                                                </div>
                                                <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 opacity-50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                        <span className="text-[10px] font-bold text-gray-300">Retargeting_Catalog_Feb</span>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-brand-400">Rp 28.200 CPC</span>
                                                </div>
                                            </div>
                                            {/* Gradient Fade for List */}
                                            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#1A1D24] to-transparent" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
