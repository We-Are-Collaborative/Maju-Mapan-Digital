"use client";

import React, { useState } from "react";
import {
    ArrowRight, BarChart2, PieChart, Layers, Zap, Shield, Globe, Users,
    TrendingUp, DollarSign, BrainCircuit, Sparkles, Activity,
    Search, Filter, MoreHorizontal, Settings, ToggleRight, ToggleLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MapanDashboardPage() {
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <main className="bg-[#050505] min-h-screen text-white selection:bg-brand-500/30">
            {/* HERO SECTION */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse duration-[5000ms]" />
                    <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[url(/assets/noise.png)] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg shadow-brand-500/5 text-gray-300 text-sm font-bold mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        Live Campaign Intelligence
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8">
                        The <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Mapan Dashboard</span>.
                        <br />
                        Marketing, Demystified.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
                        A centralized command center designed for modern brands.
                        Track every impression, click, and conversion across all your channels in one unified view.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="h-16 px-10 rounded-full bg-white text-black text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-brand-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-1">
                            <Link href="/register">
                                Request Access
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-full bg-transparent border border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-all">
                            <Link href="#features">
                                View Features
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* INTEGRATION SECTION */}
            <section className="py-10 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
                        Connected to your favorite platforms
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-3 text-xl font-bold text-white"><Globe className="text-blue-500" /> Google Ads</div>
                        <div className="flex items-center gap-3 text-xl font-bold text-white"><Layers className="text-blue-400" /> Meta Ads</div>
                        <div className="flex items-center gap-3 text-xl font-bold text-white"><Users className="text-pink-500" /> TikTok Ads</div>
                        <div className="flex items-center gap-3 text-xl font-bold text-white"><Zap className="text-orange-500" /> Shopee</div>
                        <div className="flex items-center gap-3 text-xl font-bold text-white"><BarChart2 className="text-green-500" /> Tokopedia</div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE DASHBOARD SECTION */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-[3rem] bg-[#0F1115] border border-white/10 shadow-2xl overflow-hidden min-h-[700px] flex flex-col group ring-1 ring-white/5">
                        {/* Background */}
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 bg-center pointer-events-none" />
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none" />

                        {/* DASHBOARD HEADER */}
                        <div className="p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 bg-[#0F1115]/50 backdrop-blur-xl sticky top-0">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 flex items-center justify-center text-brand-500 border border-brand-500/20 shadow-lg shadow-brand-500/10">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg tracking-tight">Maju Mapan Analytics</div>
                                    <div className="text-xs text-gray-500 flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> Live Data Stream
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Tabs */}
                            <div className="flex p-1 bg-white/5 rounded-xl border border-white/5">
                                {["Overview", "Campaigns", "Audiences", "Settings"].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setActiveTab(item)}
                                        className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === item
                                            ? 'text-white'
                                            : 'text-gray-500 hover:text-gray-300'
                                            }`}
                                    >
                                        {activeTab === item && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-white/10 rounded-lg border border-white/10 shadow-sm"
                                            />
                                        )}
                                        <span className="relative z-10">{item}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* DASHBOARD CONTENT BODY */}
                        <div className="p-6 md:p-8 flex-1 relative z-10 overflow-hidden">
                            <AnimatePresence mode="wait">
                                {activeTab === "Overview" && (
                                    <motion.div
                                        key="overview"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid grid-cols-12 gap-6 h-full"
                                    >
                                        {/* LEFT COLUMN: METRICS */}
                                        <div className="col-span-12 lg:col-span-3 space-y-4">
                                            {/* Metric 1 */}
                                            <div className="p-5 rounded-2xl bg-[#15181E] border border-white/5 hover:border-brand-500/30 transition-colors group/card">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500 font-bold text-xs flex items-center justify-center w-8 h-8">Rp</div>
                                                    <div className="text-xs font-bold text-brand-400 bg-brand-500/10 px-2 py-1 rounded">+12.4%</div>
                                                </div>
                                                <div className="text-gray-400 text-sm font-medium mb-1">Advertising Value (ROAS)</div>
                                                <div className="text-3xl font-black text-white group-hover/card:text-brand-400 transition-colors">4.82x</div>
                                            </div>

                                            {/* Metric 2 */}
                                            <div className="p-5 rounded-2xl bg-[#15181E] border border-white/5 hover:border-blue-500/30 transition-colors group/card">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><PieChart size={18} /></div>
                                                </div>
                                                <div className="text-gray-400 text-sm font-medium mb-1">Total Ad Spend</div>
                                                <div className="text-3xl font-black text-white group-hover/card:text-blue-400 transition-colors">Rp 705.450.000</div>
                                            </div>

                                            {/* AI Suggestion */}
                                            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 relative overflow-hidden group/ai cursor-pointer shadow-[0_0_30px_rgba(79,70,229,0.1)]">
                                                <div className="absolute top-0 right-0 p-3"><Sparkles size={16} className="text-indigo-400 animate-pulse" /></div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <BrainCircuit size={18} className="text-indigo-400" />
                                                    <span className="text-sm font-bold text-indigo-300">AI Suggestion</span>
                                                </div>
                                                <p className="text-sm text-indigo-100 leading-snug mb-4">
                                                    "Campaign <span className="text-white font-bold">Q1_Awareness</span> is underperforming on Meta. Shift 15% budget to <span className="text-white font-bold">TikTok</span> to improve ROAS by est. 0.4x."
                                                </p>
                                                <div className="w-full py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-center text-xs font-bold text-indigo-300 group-hover/ai:bg-indigo-500 group-hover/ai:text-white transition-all">
                                                    Apply Optimization
                                                </div>
                                            </div>
                                        </div>

                                        {/* RIGHT COLUMN: CHART */}
                                        <div className="col-span-12 lg:col-span-9 bg-[#15181E] rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col shadow-xl">
                                            <div className="flex justify-between items-center mb-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1">Performance Overview</h3>
                                                    <p className="text-sm text-gray-500">Cross-channel attribution data</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-brand-500" /><span className="text-sm text-gray-400">Google</span></div>
                                                    <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-blue-500" /><span className="text-sm text-gray-400">Meta</span></div>
                                                    <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-purple-500" /><span className="text-sm text-gray-400">TikTok</span></div>
                                                </div>
                                            </div>

                                            <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 px-2">
                                                {[40, 65, 55, 80, 70, 90, 85, 60, 75, 50, 95, 85].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "100%", opacity: 1 }}
                                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                                        className="flex-1 flex flex-col justify-end gap-1 h-full group/bar transition-all duration-500 hover:scale-105 origin-bottom cursor-pointer"
                                                    >
                                                        <div className="w-full rounded-sm bg-purple-500/60 opacity-80 group-hover/bar:bg-purple-500 group-hover/bar:opacity-100 transition-all shadow-[0_0_10px_rgba(168,85,247,0.2)]" style={{ height: `${h * 0.25}%` }} />
                                                        <div className="w-full rounded-sm bg-blue-500/60 opacity-80 group-hover/bar:bg-blue-500 group-hover/bar:opacity-100 transition-all shadow-[0_0_10px_rgba(59,130,246,0.2)]" style={{ height: `${h * 0.35}%` }} />
                                                        <div className="w-full rounded-t-lg bg-brand-500/60 opacity-80 group-hover/bar:bg-brand-500 group-hover/bar:opacity-100 transition-all relative shadow-[0_0_10px_rgba(34,197,94,0.2)]" style={{ height: `${h * 0.4}%` }}>
                                                            {i === 10 && (
                                                                <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-20">
                                                                    Highest ROI
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between mt-4 text-xs text-gray-600 font-mono pt-4 border-t border-white/5">
                                                <span>01 Jan 2024</span>
                                                <span>15 Jan 2024</span>
                                                <span>30 Jan 2024</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "Campaigns" && (
                                    <motion.div
                                        key="campaigns"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-[#15181E] rounded-3xl border border-white/5 p-6 h-full flex flex-col"
                                    >
                                        <div className="flex justify-between items-end mb-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">Active Campaigns</h3>
                                                <p className="text-sm text-gray-500">Real-time performance by campaign ID</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-gray-400 hover:text-white cursor-pointer"><Search size={18} /></div>
                                                <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-gray-400 hover:text-white cursor-pointer"><Filter size={18} /></div>
                                            </div>
                                        </div>

                                        <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                                            {[
                                                { name: "Q1_Seasons_Greeting_Generic", platform: "Google", spend: "Rp 195jt", roas: "5.2x", status: "Active" },
                                                { name: "Retargeting_Catalog_Sales", platform: "Meta", spend: "Rp 128jt", roas: "4.1x", status: "Active" },
                                                { name: "TikTok_UGC_Viral_Boost", platform: "TikTok", spend: "Rp 85jt", roas: "7.8x", status: "Learning" },
                                                { name: "Brand_Awareness_Video_Reach", platform: "YouTube", spend: "Rp 65jt", roas: "2.3x", status: "Active" },
                                                { name: "Shopee_Affiliate_Network_Push", platform: "Shopee", spend: "Rp 48jt", roas: "6.5x", status: "Active" },
                                                { name: "Search_Competitor_Conquesting", platform: "Google", spend: "Rp 42jt", roas: "3.1x", status: "Optimizing" },
                                            ].map((camp, idx) => (
                                                <div key={idx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-center justify-between hover:bg-white/[0.05] transition-colors group cursor-pointer">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`size-2 rounded-full ${camp.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                                        <div>
                                                            <div className="font-bold text-sm text-white">{camp.name}</div>
                                                            <div className="text-xs text-gray-500 flex items-center gap-2">
                                                                {camp.platform} • ID: {84920 + idx}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-8">
                                                        <div className="text-right">
                                                            <div className="text-xs text-gray-500">Spend</div>
                                                            <div className="font-mono text-sm text-white">{camp.spend}</div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-xs text-gray-500">ROAS</div>
                                                            <div className="font-bold text-sm text-brand-400 group-hover:text-brand-300">{camp.roas}</div>
                                                        </div>
                                                        <div className="text-gray-500 hover:text-white"><MoreHorizontal size={18} /></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "Audiences" && (
                                    <motion.div
                                        key="audiences"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full grid grid-cols-2 gap-6"
                                    >
                                        <div className="bg-[#15181E] rounded-3xl border border-white/5 p-6 flex flex-col justify-center items-center relative overflow-hidden">
                                            <h3 className="text-lg font-bold text-white absolute top-6 left-6">Gender Breakdown</h3>
                                            <div className="relative size-60">
                                                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1f2937" strokeWidth="20" />
                                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="150 251" /> {/* Male */}
                                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ec4899" strokeWidth="20" strokeDasharray="100 251" strokeDashoffset="-150" /> {/* Female */}
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="text-3xl font-black text-white">65%</span>
                                                    <span className="text-xs text-gray-500 uppercase">Female</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 mt-8">
                                                <div className="flex items-center gap-2 text-sm text-gray-400"><span className="size-3 rounded-full bg-blue-500" /> Male (35%)</div>
                                                <div className="flex items-center gap-2 text-sm text-gray-400"><span className="size-3 rounded-full bg-pink-500" /> Female (65%)</div>
                                            </div>
                                        </div>

                                        <div className="bg-[#15181E] rounded-3xl border border-white/5 p-6 flex flex-col">
                                            <h3 className="text-lg font-bold text-white mb-6">Top Interest Segments</h3>
                                            <div className="space-y-4">
                                                {[
                                                    { label: "Luxury Shoppers", val: 88, color: "bg-amber-500" },
                                                    { label: "Tech Enthusiasts", val: 72, color: "bg-blue-500" },
                                                    { label: "Beauty & Wellness", val: 65, color: "bg-pink-500" },
                                                    { label: "Travel Buffs", val: 54, color: "bg-green-500" },
                                                ].map((seg, idx) => (
                                                    <div key={idx} className="space-y-2">
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-white font-medium">{seg.label}</span>
                                                            <span className="text-gray-400">{seg.val}% Match</span>
                                                        </div>
                                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${seg.val}%` }}
                                                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.8 }}
                                                                className={`h-full rounded-full ${seg.color}`}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-auto p-4 rounded-xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-2 text-brand-400 text-sm font-bold mb-1">
                                                    <Users size={16} /> Lookalike Ready
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    A high-value segment (Top 5% Spenders) is ready for export to Meta Ads Manager.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "Settings" && (
                                    <motion.div
                                        key="settings"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-[#15181E] rounded-3xl border border-white/5 p-8 h-full flex flex-col items-center justify-center space-y-8"
                                    >
                                        <div className="max-w-md w-full space-y-6">
                                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-brand-500/10 rounded-xl text-brand-500"><BrainCircuit size={24} /></div>
                                                    <div>
                                                        <div className="text-white font-bold">Auto-Optimize Budget</div>
                                                        <div className="text-xs text-gray-500">Allow AI to shift up to 20% of daily spend</div>
                                                    </div>
                                                </div>
                                                <ToggleRight size={32} className="text-brand-500 cursor-pointer" />
                                            </div>

                                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Shield size={24} /></div>
                                                    <div>
                                                        <div className="text-white font-bold">Brand Safety Guard</div>
                                                        <div className="text-xs text-gray-500">Block placement on risky inventory</div>
                                                    </div>
                                                </div>
                                                <ToggleRight size={32} className="text-brand-500 cursor-pointer" />
                                            </div>

                                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 opacity-50">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-gray-500/10 rounded-xl text-gray-500"><Settings size={24} /></div>
                                                    <div>
                                                        <div className="text-gray-300 font-bold">Legacy API Access</div>
                                                        <div className="text-xs text-gray-600">Deprecated connection method</div>
                                                    </div>
                                                </div>
                                                <ToggleLeft size={32} className="text-gray-600 cursor-pointer" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID & EXPLANATIONS */}
            <section id="features" className="py-24 bg-black relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container mx-auto px-4">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Complete Visibility</h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Stop guessing where your budget goes. Our dashboard provides granular insights into every aspect of your marketing machine.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Feature 1: Integrations */}
                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all group">
                            <div className="size-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform"><Layers size={28} /></div>
                            <h3 className="text-2xl font-bold text-white mb-3">Unified Ecosystem</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Don't treat channels in silos. We pull data from <strong>Google Ads, Meta, TikTok, and KOL platforms</strong> into one normalized view, allowing for true cross-channel attribution.
                            </p>
                        </div>

                        {/* Feature 2: AI Suggestions */}
                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all group">
                            <div className="size-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform"><BrainCircuit size={28} /></div>
                            <h3 className="text-2xl font-bold text-white mb-3">AI Recommendations</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Our engine analyzes performance patterns 24/7. It flags underperforming ads and <strong>suggests budget shifts</strong> to high-ROI channels automatically before you waste spend.
                            </p>
                        </div>

                        {/* Feature 3: Ad Value */}
                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.05] transition-all group">
                            <div className="size-14 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform"><TrendingUp size={28} /></div>
                            <h3 className="text-2xl font-bold text-white mb-3">Real Advertising Value</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Go beyond "Likes". We calculate the true <strong>Advertising Value (ROAS)</strong> of every campaign, helping you justify marketing spend to stakeholders with hard data.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Users, label: "Audience Insights", desc: "Deep dive into demographics, behaviors, and interests. Know exactly who is engaging with your brand.", color: "text-purple-400" },
                            { icon: Globe, label: "SEO Health Check", desc: "Integrated organic performance tracking. Monitor rankings, site health, and backlink profiles.", color: "text-amber-400" },
                            { icon: Shield, label: "Enterprise Security", desc: "Role-based access control (RBAC), audit logs, and secure data handling ensure your proprietary strategies stay safe.", color: "text-emerald-400" }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all group duration-300">
                                <div className={`size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.label}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="py-32 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-brand-900/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to take control?</h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">Join the top brands using Mapan Dashboard to drive predictable growth.</p>

                    <Button asChild size="lg" className="h-20 px-12 rounded-full bg-brand-500 text-white text-xl font-black hover:bg-brand-400 shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-all hover:scale-105">
                        <Link href="/contact-us">
                            Get Onboarded Now
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
