'use client'

import React, { useEffect, useState, use } from 'react';
import { getBrandBySlug, createCampaign, getMarketingServices, getCampaignObjectives, seedCampaignMetadata } from '@/app/actions/mapan';
import {
    Loader2,
    Activity,
    Plus,
    ArrowLeft,
    Globe,
    Target,
    TrendingUp,
    Calendar,
    DollarSign,
    Zap,
    BarChart3,
    Layers
} from "lucide-react";
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

export default function BrandDashboardPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [brand, setBrand] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState<any[]>([]);
    const [objectives, setObjectives] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [creating, setCreating] = useState(false);

    const [newCampaign, setNewCampaign] = useState({
        name: '',
        objectiveId: '',
        services: '',
        status: 'active',
        spend: 0
    });

    const fetchData = async () => {
        let [brandData, servicesData, objectivesData] = await Promise.all([
            getBrandBySlug(slug),
            getMarketingServices(),
            getCampaignObjectives()
        ]);

        // Auto-seed if empty (Initial setup helper)
        if (objectivesData.length === 0 || servicesData.length === 0) {
            await seedCampaignMetadata();
            [servicesData, objectivesData] = await Promise.all([
                getMarketingServices(),
                getCampaignObjectives()
            ]);
        }

        setBrand(brandData);
        setServices(servicesData);
        setObjectives(objectivesData);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [slug]);

    const handleCreateCampaign = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!brand?.id) {
            toast.error("Brand identity not verified. Please refresh.");
            return;
        }
        setCreating(true);
        const res = await createCampaign({
            ...newCampaign,
            clientId: brand.id
        });
        setCreating(false);
        if (res.success) {
            toast.success("Campaign initialized successfully");
            setIsModalOpen(false);
            fetchData();
        } else {
            toast.error(res.error || "Failed to create campaign");
        }
    };

    if (loading) {
        return (
            <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-lime-500" size={48} />
                <span className="text-sm font-black text-slate-400 uppercase tracking-[.3em]">Loading Brand Neural Map</span>
            </div>
        );
    }

    if (!brand) {
        return (
            <div className="p-[30px] text-center">
                <h2 className="text-2xl font-black text-slate-900">Brand Not Found</h2>
                <Link href="/admin/mapan/brands" className="text-lime-600 font-bold hover:underline mt-4 inline-block">Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <div className="space-y-[30px] p-[30px] w-full mx-auto animate-in fade-in duration-1000">
            {/* Header / Brand Profile Card */}
            <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
                    <Globe size={300} />
                </div>

                <div className="relative z-10">
                    <Link href="/admin/mapan/brands" className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors mb-8 w-fit">
                        <ArrowLeft size={14} />
                        Back to Network
                    </Link>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                        <div className="flex items-center gap-8">
                            <div className="size-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center p-4 border border-slate-100">
                                {brand.logoUrl ? (
                                    <img src={brand.logoUrl} alt={brand.name || 'Brand Logo'} className="w-full h-full object-contain mix-blend-multiply" />
                                ) : (
                                    <span className="text-3xl font-black text-slate-200">{brand.name?.substring(0, 2) || 'BR'}</span>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-lime-100 text-lime-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-lime-200">Authorized Brand</span>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[.2em]">{brand.slug}</span>
                                </div>
                                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">{brand.name}</h1>
                            </div>
                        </div>

                        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                            <DialogTrigger asChild>
                                <button className="bg-slate-900 text-white rounded-[1.5rem] px-8 py-5 font-bold flex items-center gap-3 hover:bg-black transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                                    <Zap size={20} className="text-lime-400" />
                                    <span>Initialize New Campaign</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-xl rounded-[2.5rem] p-0 overflow-hidden bg-white border-4 border-slate-50 shadow-2xl">
                                <DialogHeader className="p-8 pb-4 bg-slate-50/50 border-b border-slate-100">
                                    <DialogTitle className="text-2xl font-black text-slate-900 tracking-tight">Campaign Strategizer</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleCreateCampaign} className="p-8 space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Campaign Moniker</label>
                                        <input
                                            required
                                            value={newCampaign.name}
                                            onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                                            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-lime-400/10 focus:border-lime-400 transition-all font-bold text-slate-900"
                                            placeholder="e.g. Q4 Growth Sprint 2026"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Strategic Objective</label>
                                            <select
                                                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-lime-400 outline-none font-bold text-slate-700"
                                                value={newCampaign.objectiveId}
                                                onChange={(e) => setNewCampaign({ ...newCampaign, objectiveId: e.target.value })}
                                            >
                                                <option value="">Select Goal</option>
                                                {objectives?.map(o => o && <option key={o.id} value={o.id}>{o.name}</option>)}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Solution Type</label>
                                            <select
                                                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-lime-400 outline-none font-bold text-slate-700"
                                                value={newCampaign.services}
                                                onChange={(e) => setNewCampaign({ ...newCampaign, services: e.target.value })}
                                            >
                                                <option value="">Select Service</option>
                                                {services?.map(s => s && <option key={s.id} value={s.name}>{s.name}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={creating}
                                        className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {creating ? <Loader2 className="animate-spin" size={20} /> : <Zap size={20} className="text-lime-400" />}
                                        Initialize Engine
                                    </button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>

            {/* Metrics Dashboard Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                <MetricCard icon={Target} label="Active Campaigns" value={brand.campaigns?.filter((c: any) => c.status === 'active').length || 0} color="lime" />
                <MetricCard icon={TrendingUp} label="Total Managed Spend" value={`$${(brand.campaigns?.reduce((a: number, c: any) => a + (c.spend || 0), 0) / 1000).toFixed(1)}k`} color="emerald" />
                <MetricCard icon={Layers} label="Active Channels" value={3} color="sky" />
                <MetricCard icon={BarChart3} label="Conversion Velocity" value="+24%" color="purple" />
            </div>

            {/* Campaign Grid Section */}
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className="size-1 w-12 bg-lime-500 rounded-full"></div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Active Command Threads</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {brand.campaigns?.length === 0 ? (
                        <div className="col-span-full py-20 bg-slate-50 rounded-[2.5rem] border-4 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                            <Activity className="text-slate-200 mb-6" size={64} />
                            <h3 className="text-xl font-bold text-slate-400 mb-2">No Active Signals</h3>
                            <p className="text-slate-400 font-medium">Initialize your first campaign to begin data sync.</p>
                        </div>
                    ) : (
                        brand.campaigns?.map((campaign: any) => (
                            <CampaignCard key={campaign.id} campaign={campaign} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

function MetricCard({ icon: Icon, label, value, color }: any) {
    const colors = {
        lime: 'bg-lime-50 text-lime-600 border-lime-100 shadow-lime-200/20',
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-200/20',
        sky: 'bg-sky-50 text-sky-600 border-sky-100 shadow-sky-200/20',
        purple: 'bg-purple-50 text-purple-600 border-purple-100 shadow-purple-200/20'
    };

    return (
        <div className="bg-white rounded-[2rem] border-4 border-slate-50 p-8 shadow-xl shadow-slate-200/10 group hover:-translate-y-1 transition-all">
            <div className={`size-12 rounded-2xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110 ${colors[color as keyof typeof colors]}`}>
                <Icon size={24} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{value}</h3>
        </div>
    );
}

function CampaignCard({ campaign }: { campaign: any }) {
    return (
        <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] border-4 border-slate-50 p-10 shadow-xl shadow-slate-200/10 group hover:border-lime-200 transition-all overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <TrendingUp size={120} />
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-black text-lime-600 uppercase tracking-widest bg-lime-50 px-2 py-1 rounded-lg border border-lime-100">Live</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{campaign.objective?.name || 'General Strategy'}</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-lime-600 transition-colors">{campaign.name}</h3>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100/50 mb-8">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Solution Stack</p>
                        <p className="font-black text-slate-700">{campaign.services || 'Multiple'}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Burn</p>
                        <p className="font-black text-slate-700">${campaign.spend?.toLocaleString()}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                        <Calendar size={14} className="text-slate-300" />
                        <span>Started {new Date(campaign.createdAt).toLocaleDateString()}</span>
                    </div>
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all group/btn">
                        <Activity size={18} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
