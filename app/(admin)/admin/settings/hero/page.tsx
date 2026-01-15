'use client'

import React, { useState, useEffect } from 'react';
import {
    Save, Plus, Loader2, Image as ImageIcon, Trash2,
    ChevronDown, ChevronUp, ChevronLeft, GripVertical, Layout,
    Sparkles, Monitor, Smartphone, Sliders, AlertCircle, Upload, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { getHomeHeroData, updateHomeHeroData, createHomeHeroData } from "@/app/(admin)/_actions/home-hero";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "../../../../../components/ui/slider";
import { SeoImageUpload } from "@/components/admin/seo-image-upload";

function SlideEditor({
    slide,
    index,
    onUpdate,
    onRemove,
    isFirst
}: {
    slide: any,
    index: number,
    onUpdate: (updated: any) => void,
    onRemove: () => void,
    isFirst: boolean
}) {
    const [isCollapsed, setIsCollapsed] = useState(index !== 0);

    return (
        <div className="bg-white rounded-3xl border-2 border-slate-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-top-4">
            <div
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-2xl bg-slate-100 flex items-center justify-center text-xs font-black text-slate-500">
                        #{index + 1}
                    </div>
                    <div>
                        <h4 className="font-black text-slate-900 leading-none">
                            {slide.titleLine1 || "Untitled Slide"}
                        </h4>
                        <p className="text-[10px] font-bold text-lime-600 uppercase tracking-widest mt-1.5 opacity-60">
                            {slide.titleHighlight || "NO HIGHLIGHT"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {!isFirst && (
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); onRemove(); }}
                            className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                            <Trash2 size={18} />
                        </button>
                    )}
                    <div className={`p-2.5 rounded-xl transition-colors ${!isCollapsed ? 'bg-slate-100 text-slate-900' : 'text-slate-300'}`}>
                        {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                    </div>
                </div>
            </div>

            {!isCollapsed && (
                <div className="p-8 border-t-2 border-slate-50 space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Content Settings */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 block">Title Line 1</label>
                                    <input
                                        type="text"
                                        value={slide.titleLine1 || ""}
                                        onChange={e => onUpdate({ ...slide, titleLine1: e.target.value })}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-900 focus:ring-4 focus:ring-lime-400/20 focus:border-lime-400 outline-none transition-all"
                                        placeholder="e.g. Award"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 block">Highlight Word</label>
                                    <input
                                        type="text"
                                        value={slide.titleHighlight || ""}
                                        onChange={e => onUpdate({ ...slide, titleHighlight: e.target.value })}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-lime-600 focus:ring-4 focus:ring-lime-400/20 focus:border-lime-400 outline-none transition-all"
                                        placeholder="e.g. Winning"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 block">Subtitle</label>
                                <textarea
                                    rows={3}
                                    value={slide.subtitle || ""}
                                    onChange={e => onUpdate({ ...slide, subtitle: e.target.value })}
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-900 focus:ring-4 focus:ring-lime-400/20 focus:border-lime-400 outline-none transition-all resize-none leading-relaxed"
                                    placeholder="Describe your value proposition..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 block">CTA Text</label>
                                    <input
                                        type="text"
                                        value={slide.ctaText || ""}
                                        onChange={e => onUpdate({ ...slide, ctaText: e.target.value })}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-900 focus:ring-4 focus:ring-lime-400/20 focus:border-lime-400 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 block">CTA Link</label>
                                    <input
                                        type="text"
                                        value={slide.ctaLink || ""}
                                        onChange={e => onUpdate({ ...slide, ctaLink: e.target.value })}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-900 focus:ring-4 focus:ring-lime-400/20 focus:border-lime-400 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Visual Settings */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                {slide.bgImageDesktop && (
                                    <div className="relative h-32 rounded-3xl overflow-hidden border-2 border-slate-100 group shadow-sm bg-slate-50">
                                        <img src={slide.bgImageDesktop} className="w-full h-full object-cover" alt={slide.bgImageDesktopAlt || "Desktop preview"} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                            <p className="text-[10px] font-black text-lime-400 uppercase tracking-widest mb-1 leading-none">Desktop Active Layer</p>
                                            <p className="text-[10px] font-bold text-white truncate opacity-80">{slide.bgImageDesktopAlt || "Missing ALT tag - SEO Risk"}</p>
                                        </div>
                                    </div>
                                )}
                                <SeoImageUpload
                                    label="Desktop Intelligence"
                                    description="Full 1920px WebP Pipeline"
                                    suggestedName={`${slide.titleLine1 || 'hero'}-desktop`.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                                    onUploadSuccess={({ url, alt }) => onUpdate({ ...slide, bgImageDesktop: url, bgImageDesktopAlt: alt })}
                                />
                            </div>

                            <div className="space-y-4">
                                {slide.bgImageMobile && (
                                    <div className="relative h-32 rounded-3xl overflow-hidden border-2 border-slate-100 group shadow-sm bg-slate-50">
                                        <img src={slide.bgImageMobile} className="w-full h-full object-cover" alt={slide.bgImageMobileAlt || "Mobile preview"} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                            <p className="text-[10px] font-black text-lime-400 uppercase tracking-widest mb-1 leading-none">Mobile Active Layer</p>
                                            <p className="text-[10px] font-bold text-white truncate opacity-80">{slide.bgImageMobileAlt || "Missing ALT tag - SEO Risk"}</p>
                                        </div>
                                    </div>
                                )}
                                <SeoImageUpload
                                    label="Mobile Optimization"
                                    description="Vertical Portrait Engine"
                                    suggestedName={`${slide.titleLine1 || 'hero'}-mobile`.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                                    onUploadSuccess={({ url, alt }) => onUpdate({ ...slide, bgImageMobile: url, bgImageMobileAlt: alt })}
                                />
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <Sliders size={12} />
                                    Background Overlay Intensity
                                </label>
                                <span className="text-sm font-black text-slate-900">{Math.round((slide.bgOpacity || 0.4) * 100)}%</span>
                            </div>
                            <Slider
                                value={[slide.bgOpacity || 0.4]}
                                min={0}
                                max={1}
                                step={0.01}
                                onValueChange={(vals: number[]) => onUpdate({ ...slide, bgOpacity: vals[0] })}
                                className="py-4 cursor-pointer"
                            />
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight text-center">
                                Adjust to ensure text readability over your selected image
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function HomeHeroSettings() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [hero, setHero] = useState<any>(null);
    const [activePreviewIndex, setActivePreviewIndex] = useState(0);
    const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

    useEffect(() => {
        fetchHero();
    }, []);

    const fetchHero = async () => {
        setLoading(true);
        const data = await getHomeHeroData();
        if (data) setHero(data);
        setLoading(false);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const result = hero.id
                ? await updateHomeHeroData(hero.id, hero)
                : await createHomeHeroData(hero);

            if (result.success) {
                toast.success("Hero layout saved successfully!");
                if (result.data) setHero(result.data);
            } else {
                toast.error(result.error || "Failed to update hero");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        } finally {
            setSaving(false);
        }
    };

    const addSlide = () => {
        const newSlide = {
            titleLine1: "New",
            titleHighlight: "Perspective",
            subtitle: "Enter a compelling description for this slide...",
            ctaText: "Discover More",
            ctaLink: "#",
            bgOpacity: 0.4,
            order: hero.slides.length
        };
        setHero({
            ...hero,
            slides: [...hero.slides, newSlide]
        });
    };

    const updateSlide = (idx: number, updated: any) => {
        const newSlides = [...hero.slides];
        newSlides[idx] = updated;
        setHero({ ...hero, slides: newSlides });
    };

    const removeSlide = (idx: number) => {
        const newSlides = hero.slides.filter((_: any, i: number) => i !== idx);
        setHero({ ...hero, slides: newSlides });
    };

    if (loading) {
        return (
            <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-lime-500" size={48} />
                <span className="text-sm font-black text-slate-400 uppercase tracking-[.3em]">Synching Neural Data</span>
            </div>
        );
    }

    const currentSlide = hero?.slides[activePreviewIndex] || (hero?.slides.length > 0 ? hero.slides[0] : null);

    return (
        <div className="w-full p-12 space-y-12 animate-in fade-in duration-700">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                    <Link href="/admin" className="size-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm">
                        <ChevronLeft size={24} className="text-slate-900" />
                    </Link>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <Layout className="text-lime-500" size={18} />
                            <span className="text-[10px] font-black text-lime-600 uppercase tracking-[.3em]">Core Architecture</span>
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Hero Intelligence</h1>
                    </div>
                </div>

                <div className="flex items-center gap-6 bg-white p-4 px-8 rounded-[2rem] border-2 border-slate-100 shadow-xl">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Content Engine</span>
                        <span className="text-base font-black text-slate-900">
                            {hero?.isDynamic ? "AI-Personalized" : "Manual Sequence"}
                        </span>
                    </div>
                    <Switch
                        checked={hero?.isDynamic}
                        onCheckedChange={(checked) => setHero({ ...hero, isDynamic: checked })}
                        className="data-[state=checked]:bg-lime-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
                {/* Left: Preview Section */}
                <div className="xl:col-span-12 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                <Monitor size={16} />
                            </div>
                            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Live Simulator</h2>
                        </div>
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                            <button
                                onClick={() => setPreviewMode('desktop')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${previewMode === 'desktop' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <Monitor size={14} /> Desktop
                            </button>
                            <button
                                onClick={() => setPreviewMode('mobile')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${previewMode === 'mobile' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <Smartphone size={14} /> Mobile
                            </button>
                        </div>
                    </div>

                    {currentSlide ? (
                        <div className={`relative mx-auto bg-slate-900 border-[12px] border-slate-800 shadow-2xl transition-all duration-700 overflow-hidden ${previewMode === 'desktop' ? 'w-full aspect-video rounded-[3rem]' : 'max-w-[400px] aspect-[9/16] rounded-[4rem]'}`}>
                            <div className="absolute inset-0">
                                <img
                                    src={(previewMode === 'mobile' ? currentSlide.bgImageMobile : currentSlide.bgImageDesktop) || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"}
                                    alt="Hero background preview"
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-black transition-opacity duration-500"
                                    style={{ opacity: currentSlide.bgOpacity || 0.4 }}
                                />
                            </div>

                            <div className="relative h-full flex items-center justify-center p-12 text-center">
                                <div className="max-w-4xl space-y-6">
                                    <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4">
                                        <div className="flex items-center gap-2">
                                            <Sparkles size={14} className="text-lime-400" />
                                            <span className="text-[10px] font-black text-white uppercase tracking-[.3em]">Neural Interface active</span>
                                        </div>
                                    </div>
                                    <h2 className={`font-black text-white leading-[1.1] mb-6 tracking-tighter ${previewMode === 'desktop' ? 'text-7xl' : 'text-4xl'}`}>
                                        {currentSlide.titleLine1} <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">{currentSlide.titleHighlight}</span>
                                    </h2>
                                    <p className={`text-white/80 font-bold max-w-2xl mx-auto leading-relaxed ${previewMode === 'desktop' ? 'text-xl' : 'text-sm'}`}>
                                        {currentSlide.subtitle}
                                    </p>
                                    <div className="pt-8">
                                        <button className="bg-white text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-lime-400 transition-colors shadow-xl active:scale-95">
                                            {currentSlide.ctaText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full aspect-video bg-slate-50 border-4 border-dashed border-slate-200 rounded-[3.5rem] flex flex-col items-center justify-center text-slate-400 gap-4">
                            <AlertCircle size={48} />
                            <span className="font-black uppercase tracking-widest text-xs">No active content layer found</span>
                        </div>
                    )}
                </div>

                <div className="xl:col-span-12">
                    <form onSubmit={handleSave} className="space-y-12">
                        {hero?.slides.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-slate-100 shadow-sm">
                                <p className="text-slate-500 font-black uppercase tracking-widest mb-6 px-12">No slides found in architecture</p>
                                <Button
                                    type="button"
                                    onClick={addSlide}
                                    className="bg-slate-900 text-white px-10 py-6 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl"
                                >
                                    Initialize First Slide
                                </Button>
                            </div>
                        )}

                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                                        <Layout size={24} />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">Slide Architecture</h3>
                                </div>
                                <Button
                                    type="button"
                                    onClick={addSlide}
                                    className="bg-white text-slate-900 border-2 border-slate-100 hover:bg-slate-50 rounded-2xl font-black flex items-center gap-3 px-8 h-14 shadow-sm"
                                >
                                    <Plus size={22} className="text-lime-500" />
                                    Append Slide
                                </Button>
                            </div>

                            <div className="grid gap-6">
                                {hero?.slides.map((slide: any, index: number) => (
                                    <SlideEditor
                                        key={slide.id || `new-${index}`}
                                        slide={slide}
                                        index={index}
                                        isFirst={index === 0}
                                        onUpdate={(updated) => updateSlide(index, updated)}
                                        onRemove={() => removeSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Pagination Selector for Previews */}
                        {hero?.slides.length > 1 && (
                            <div className="flex items-center justify-center gap-4 py-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[.3em] mr-4">Preview Focus</span>
                                {hero.slides.map((_: any, i: number) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setActivePreviewIndex(i)}
                                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${i === activePreviewIndex ? 'bg-slate-900 text-white shadow-lg' : 'bg-white border-2 border-slate-100 text-slate-400'}`}
                                    >
                                        Slide {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="sticky bottom-8 z-30 pt-4">
                            <button
                                type="submit"
                                disabled={saving}
                                className="w-full lg:w-fit lg:ml-auto bg-slate-900 text-white px-20 py-7 rounded-[2rem] font-black text-2xl hover:bg-black transition-all flex items-center justify-center gap-6 disabled:opacity-50 shadow-2xl border-4 border-white active:scale-95 group"
                            >
                                {saving ? <Loader2 className="animate-spin" size={32} /> : <Save className="group-hover:translate-y-[-2px] transition-transform" size={32} />}
                                Synchronize Architecture
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
