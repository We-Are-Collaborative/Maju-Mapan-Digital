'use client'

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, Trash2, Settings2, Hash, Zap, Target } from "lucide-react";
import {
    getMarketingServices, createMarketingService, deleteMarketingService,
    getCampaignChannels, createCampaignChannel, deleteCampaignChannel,
    getBuyingMetrics, createBuyingMetric, deleteBuyingMetric,
    getCampaignObjectives, createCampaignObjective, deleteCampaignObjective
} from '@/app/actions/mapan';

// Generic CRUD Table Component
function SettingsTable({
    title,
    data,
    onDelete,
    onCreate,
    columns,
    icon: Icon
}: {
    title: string,
    data: any[],
    onDelete: (id: string) => void,
    onCreate: (data: any) => Promise<void>,
    columns: { key: string, label: string, placeholder?: string }[],
    icon: any
}) {
    const [newItem, setNewItem] = useState<any>({});
    const [creating, setCreating] = useState(false);

    const handleCreate = async () => {
        setCreating(true);
        await onCreate(newItem);
        setNewItem({});
        setCreating(false);
    };

    return (
        <div className="space-y-6">
            {/* Creation Area */}
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/10 rounded-xl"><Icon size={20} /></div>
                    <h3 className="text-xl font-black tracking-tight">Add New {title.replace(/s$/, '')}</h3>
                </div>
                <div className="flex gap-4 items-end">
                    {columns.map(col => (
                        <div key={col.key} className="flex-1 space-y-2">
                            <Label className="text-xs uppercase font-bold text-slate-400 pl-1">{col.label}</Label>
                            <Input
                                value={newItem[col.key] || ''}
                                onChange={e => setNewItem({ ...newItem, [col.key]: e.target.value })}
                                placeholder={col.placeholder}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:bg-white/10 focus:border-lime-500 transition-all"
                            />
                        </div>
                    ))}
                    <Button onClick={handleCreate} disabled={creating} className="h-12 w-12 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-900 p-0 shrink-0">
                        {creating ? <Loader2 className="animate-spin" size={20} /> : <Plus size={24} />}
                    </Button>
                </div>
            </div>

            {/* List Area */}
            <div className="grid gap-3">
                {data.length === 0 ? (
                    <div className="p-12 text-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold italic">
                        No configurations found. Add one above.
                    </div>
                ) : (
                    data.map((item) => (
                        <div key={item.id} className="group flex items-center justify-between p-6 bg-white border-2 border-slate-100 rounded-[1.5rem] hover:border-lime-200 hover:shadow-lg transition-all">
                            <div className="flex gap-8 items-center">
                                {columns.map((col, idx) => (
                                    <div key={col.key} className={idx === 0 ? "min-w-[200px]" : ""}>
                                        <p className={`text-sm ${idx === 0 ? "font-black text-slate-900 text-lg" : "font-medium text-slate-500"}`}>
                                            {item[col.key]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => onDelete(item.id)} className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default function MapanSettingsPage() {
    const [services, setServices] = useState([]);
    const [channels, setChannels] = useState([]);
    const [metrics, setMetrics] = useState([]);
    const [objectives, setObjectives] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshData = async () => {
        const [s, c, m, o] = await Promise.all([
            getMarketingServices(),
            getCampaignChannels(),
            getBuyingMetrics(),
            getCampaignObjectives()
        ]);
        setServices(s as any);
        setChannels(c as any);
        setMetrics(m as any);
        setObjectives(o as any);
        setLoading(false);
    };

    useEffect(() => {
        refreshData();
    }, []);

    const wrapAction = async (fn: Function, ...args: any[]) => {
        await fn(...args);
        await refreshData();
    };

    if (loading) {
        return (
            <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-lime-500" size={48} />
                <span className="text-sm font-black text-slate-400 uppercase tracking-[.3em]">Loading Config</span>
            </div>
        );
    }

    return (
        <div className="space-y-8 p-8 w-full mx-auto animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-slate-100 rounded-[1.5rem]">
                    <Settings2 size={32} className="text-slate-900" />
                </div>
                <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[.3em] mb-1 block">Context Control</span>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter">System Configuration</h1>
                </div>
            </div>

            <Tabs defaultValue="services" className="w-full">
                <TabsList className="bg-transparent gap-2 mb-8 p-0 h-auto flex-wrap justify-start">
                    <TabsTrigger value="services" className="px-6 py-3 rounded-xl bg-white border-2 border-slate-100 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:border-slate-900 font-bold transition-all shadow-sm">Services</TabsTrigger>
                    <TabsTrigger value="channels" className="px-6 py-3 rounded-xl bg-white border-2 border-slate-100 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:border-slate-900 font-bold transition-all shadow-sm">Channels</TabsTrigger>
                    <TabsTrigger value="metrics" className="px-6 py-3 rounded-xl bg-white border-2 border-slate-100 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:border-slate-900 font-bold transition-all shadow-sm">Buying Metrics</TabsTrigger>
                    <TabsTrigger value="objectives" className="px-6 py-3 rounded-xl bg-white border-2 border-slate-100 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:border-slate-900 font-bold transition-all shadow-sm">Objectives</TabsTrigger>
                </TabsList>

                <TabsContent value="services" className="animate-in slide-in-from-bottom-4 duration-500">
                    <SettingsTable
                        title="Marketing Services"
                        data={services}
                        icon={Zap}
                        columns={[{ key: 'name', label: 'Service Name', placeholder: 'e.g. SEO' }, { key: 'description', label: 'Description', placeholder: 'Optional details' }]}
                        onCreate={(d) => wrapAction(createMarketingService, d)}
                        onDelete={(id) => wrapAction(deleteMarketingService, id)}
                    />
                </TabsContent>

                <TabsContent value="channels" className="animate-in slide-in-from-bottom-4 duration-500">
                    <SettingsTable
                        title="Campaign Channels"
                        data={channels}
                        icon={Hash}
                        columns={[{ key: 'name', label: 'Channel Name', placeholder: 'e.g. Google Ads' }, { key: 'type', label: 'Type', placeholder: 'e.g. Search' }]}
                        onCreate={(d) => wrapAction(createCampaignChannel, d)}
                        onDelete={(id) => wrapAction(deleteCampaignChannel, id)}
                    />
                </TabsContent>

                <TabsContent value="metrics" className="animate-in slide-in-from-bottom-4 duration-500">
                    <SettingsTable
                        title="Buying Metrics"
                        data={metrics}
                        icon={Target}
                        columns={[{ key: 'name', label: 'Metric', placeholder: 'e.g. CPM' }, { key: 'context', label: 'Context', placeholder: 'e.g. Awareness' }]}
                        onCreate={(d) => wrapAction(createBuyingMetric, d)}
                        onDelete={(id) => wrapAction(deleteBuyingMetric, id)}
                    />
                </TabsContent>

                <TabsContent value="objectives" className="animate-in slide-in-from-bottom-4 duration-500">
                    <SettingsTable
                        title="Campaign Objectives"
                        data={objectives}
                        icon={Target}
                        columns={[{ key: 'name', label: 'Objective', placeholder: 'e.g. Lead Gen' }, { key: 'funnelStage', label: 'Funnel Stage', placeholder: 'Bottom' }]}
                        onCreate={(d) => wrapAction(createCampaignObjective, d)}
                        onDelete={(id) => wrapAction(deleteCampaignObjective, id)}
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
}
