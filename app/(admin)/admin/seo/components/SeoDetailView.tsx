"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Save, RefreshCw, CheckCircle, AlertTriangle, XCircle, Image as ImageIcon, Globe, Plus, Trash2 } from "lucide-react";
import { getPageSeoAnalysis, saveSeoSettings } from "@/app/actions/seo";
import { calculateSeoScore, extractMetaMetrics } from "@/lib/seo-validator";

interface SeoDetailViewProps {
    slug: string;
    initialScore: number;
    onUpdate: () => void;
}

export default function SeoDetailView({ slug, initialScore, onUpdate }: SeoDetailViewProps) {
    const [activeTab, setActiveTab] = useState<"meta" | "preview" | "analysis" | "og">("meta");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Server Data
    const [serverAnalysis, setServerAnalysis] = useState<any>(null);
    const [hasRecord, setHasRecord] = useState(false);

    // Form State
    const [formData, setFormData] = useState<any>({
        title: "",
        description: "",
        keywords: "",
        canonicalUrl: "",
        indexable: true,
        ogVariants: []
    });

    // Real-time Score
    const liveAnalysis = useMemo(() => {
        if (!serverAnalysis) return null;
        const currentMetaMetrics = extractMetaMetrics(formData);
        const metrics = {
            meta: currentMetaMetrics,
            content: serverAnalysis.checks.content,
            indexable: formData.indexable
        };
        return calculateSeoScore(metrics);
    }, [formData, serverAnalysis]);

    useEffect(() => {
        fetchAnalysis();
    }, [slug]);

    const fetchAnalysis = async () => {
        setLoading(true);
        const res = await getPageSeoAnalysis(slug);
        if (res) {
            setFormData({
                title: res.seo.title || "",
                description: res.seo.description || "",
                keywords: res.seo.keywords || "",
                canonicalUrl: res.seo.canonicalUrl || "",
                structuredData: res.seo.structuredData || "",
                indexable: res.seo.indexable ?? true,
                ogVariants: (res.seo as any).ogVariants || []
            });
            setServerAnalysis(res.analysis);
            setHasRecord(res.hasRecord);
        }
        setLoading(false);
    };

    const handleSave = async () => {
        setSaving(true);
        await saveSeoSettings(slug, formData);
        await fetchAnalysis();
        onUpdate();
        setSaving(false);
    };

    const addOgVariant = () => {
        setFormData({
            ...formData,
            ogVariants: [...formData.ogVariants, { type: "summary_large_image", title: formData.title, description: formData.description, isActive: formData.ogVariants.length === 0 }]
        });
    };

    const removeOgVariant = (index: number) => {
        const newVariants = [...formData.ogVariants];
        newVariants.splice(index, 1);
        setFormData({ ...formData, ogVariants: newVariants });
    };

    const updateOgVariant = (index: number, field: string, value: any) => {
        const newVariants = [...formData.ogVariants];
        if (field === 'isActive' && value === true) {
            newVariants.forEach(v => v.isActive = false);
        }
        newVariants[index] = { ...newVariants[index], [field]: value };
        setFormData({ ...formData, ogVariants: newVariants });
    };

    if (loading) return <div className="p-12 text-center text-slate-500 font-bold">Loading analysis...</div>;

    const renderStatus = (condition: boolean) => (
        condition
            ? <CheckCircle size={16} className="text-emerald-600" />
            : <XCircle size={16} className="text-rose-600" />
    );

    const activeOg = formData.ogVariants.find((v: any) => v.isActive) || { ogTitle: formData.title, ogDesc: formData.description };

    return (
        <div className="bg-slate-50/50 p-8 min-h-[400px]">
            {/* Tabs */}
            <div className="flex gap-6 border-b-2 border-slate-200 mb-8">
                {["meta", "og", "analysis", "preview"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`pb-3 px-2 text-xs font-black uppercase tracking-wider border-b-2 transition-colors ${activeTab === tab ? "text-lime-600 border-lime-600" : "text-slate-400 border-transparent hover:text-slate-600"
                            }`}
                    >
                        {tab === "og" ? "Social" : tab === "preview" ? "Validations" : tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="md:col-span-2">
                    {activeTab === "meta" && (
                        <div className="space-y-6 animate-in fade-in">
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Meta Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 font-bold transition-all"
                                    placeholder="Page Title"
                                />
                                <div className="text-right text-[10px] text-slate-400 font-bold mt-1.5">{formData.title.length} / 60</div>
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Meta Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium h-28 resize-none transition-all"
                                    placeholder="Page description..."
                                />
                                <div className="text-right text-[10px] text-slate-400 font-bold mt-1.5">{formData.description.length} / 160</div>
                            </div>

                            {/* Structured Data */}
                            <div className="space-y-2 pt-6 border-t-2 border-slate-100">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center justify-between">
                                    Structured Data (JSON-LD)
                                    <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded font-bold">ADVANCED</span>
                                </label>
                                <textarea
                                    value={formData.structuredData}
                                    onChange={(e) => setFormData({ ...formData, structuredData: e.target.value })}
                                    className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl p-4 text-xs font-mono text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 h-40 transition-all placeholder:text-slate-400"
                                    placeholder='<script type="application/ld+json">{ ... }</script>'
                                />
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    checked={formData.indexable}
                                    onChange={(e) => setFormData({ ...formData, indexable: e.target.checked })}
                                    className="w-5 h-5 rounded border-2 border-slate-300 text-lime-600 focus:ring-lime-500"
                                />
                                <label className="text-sm font-bold text-slate-700">Allow Search Engines to Index</label>
                            </div>
                        </div>
                    )}

                    {activeTab === "og" && (
                        <div className="space-y-6 animate-in fade-in">
                            <div className="flex justify-between items-center bg-slate-100 p-4 rounded-xl border-2 border-slate-200">
                                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Active Variants</h3>
                                <button onClick={addOgVariant} className="text-[10px] bg-slate-900 hover:bg-black text-white font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors uppercase tracking-wider">
                                    <Plus size={12} /> Add
                                </button>
                            </div>

                            {formData.ogVariants.length === 0 && <div className="text-slate-400 text-sm font-bold text-center py-8">No variants active. Default meta will be used.</div>}

                            {formData.ogVariants.map((variant: any, idx: number) => (
                                <div key={idx} className={`bg-white p-6 rounded-2xl border-2 ${variant.isActive ? 'border-lime-400 ring-2 ring-lime-400/20' : 'border-slate-200'} shadow-sm`}>
                                    <div className="flex justify-between mb-4">
                                        <div className="text-[10px] font-black text-slate-400 tracking-wider">VARIANT #{idx + 1}</div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => updateOgVariant(idx, 'isActive', true)}
                                                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${variant.isActive ? 'bg-lime-100 text-lime-700' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'} `}
                                            >
                                                {variant.isActive ? 'Active' : 'Set Active'}
                                            </button>
                                            <button onClick={() => removeOgVariant(idx)} className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors"><Trash2 size={16} /></button>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">OG Title</label>
                                            <input
                                                type="text"
                                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none font-bold"
                                                value={variant.title || ""}
                                                onChange={(e) => updateOgVariant(idx, 'title', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">OG Image URL</label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none font-medium"
                                                    value={variant.imageUrl || ""}
                                                    onChange={(e) => updateOgVariant(idx, 'imageUrl', e.target.value)}
                                                />
                                                <button className="bg-slate-100 p-2 rounded-xl text-slate-400 border-2 border-slate-200">
                                                    <ImageIcon size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">OG Description</label>
                                            <textarea
                                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none font-medium h-20 resize-none"
                                                value={variant.description || ""}
                                                onChange={(e) => updateOgVariant(idx, 'description', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "analysis" && liveAnalysis && (
                        <div className="space-y-4 animate-in fade-in">
                            <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl">
                                <h4 className="font-black text-slate-900 mb-4 flex items-center gap-3 text-lg">
                                    <div className={`w-3 h-3 rounded-full ${liveAnalysis.score >= 90 ? 'bg-emerald-500' : 'bg-rose-500'} `} />
                                    Real-time Analysis
                                </h4>
                                <ul className="space-y-3 text-sm font-bold">
                                    {liveAnalysis.errors.map((err, i) => (
                                        <li key={i} className="flex items-center gap-3 text-rose-600 bg-rose-50 px-3 py-2 rounded-lg border border-rose-100">
                                            <XCircle size={16} className="flex-shrink-0" /> {err}
                                        </li>
                                    ))}
                                    {liveAnalysis.warnings.map((err, i) => (
                                        <li key={i} className="flex items-center gap-3 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg border border-amber-100">
                                            <AlertTriangle size={16} className="flex-shrink-0" /> {err}
                                        </li>
                                    ))}
                                    {liveAnalysis.errors.length === 0 && liveAnalysis.warnings.length === 0 && (
                                        <li className="text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100 flex items-center gap-3"><CheckCircle size={16} /> Perfect! No technical issues found.</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-8 border-t-2 border-slate-200 mt-8">
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-8 py-3 bg-gradient-to-r from-lime-400 to-black text-white rounded-xl font-bold shadow-lg shadow-lime-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                            {saving ? <RefreshCw className="animate-spin" size={20} /> : <Save size={20} />}
                            Save Configuration
                        </button>
                    </div>
                </div>

                {/* Right Column: Score Summary */}
                <div className="md:pl-8 md:border-l-2 border-slate-200">
                    <div className="sticky top-8 text-center">
                        <div className={`text-6xl font-black mb-2 transition-colors duration-500 tracking-tighter ${liveAnalysis?.score! >= 90 ? 'text-emerald-500' : (liveAnalysis?.score! >= 50 ? 'text-amber-500' : 'text-rose-500')} `}>
                            {liveAnalysis?.score || 0}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Live Score</div>

                        <div className="mt-10 space-y-6 text-left">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-4 border-b-2 border-slate-100 pb-2">Content Health</div>
                            <div className="space-y-3">
                                {[
                                    { label: 'H1 Status', valid: serverAnalysis?.checks.content.h1Count === 1 },
                                    { label: 'Alt Text', valid: serverAnalysis?.checks.content.imgAltMissing === 0 },
                                    { label: 'Word Count', valid: serverAnalysis?.checks.content.wordCount > 300 }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm font-bold text-slate-600 bg-white p-3 rounded-lg border-2 border-slate-100">
                                        <span>{item.label}</span>
                                        {serverAnalysis && renderStatus(item.valid)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
