"use client";
import React, { useState, useEffect } from "react";
import { Palette, Save, Type, RefreshCw, Image as ImageIcon, Upload } from "lucide-react";
import { setLogoSettings as saveLogoSettingsAction } from "@/app/actions/settings";
import Image from "next/image";

interface ThemeSettings {
    id?: number;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    headingFont: string;
    bodyFont: string;
}

interface LogoSettings {
    type: "svg" | "gif";
    gifUrl: string;
}

export default function ThemeManager() {
    const [theme, setTheme] = useState<ThemeSettings>({
        primaryColor: "#a3e635", // Lime 400 default
        secondaryColor: "#000000",
        backgroundColor: "#ffffff",
        textColor: "#0f172a",
        headingFont: "Inter",
        bodyFont: "Inter"
    });
    const [logoSettings, setLogoSettings] = useState<LogoSettings>({
        type: "svg",
        gifUrl: ""
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetch("/api/cms/theme")
            .then((res) => res.json())
            .then((data) => {
                if (data.id) setTheme(data);
                setLoading(false);
            });

        // Fetch global settings for Logo
        import("@/app/actions/settings").then(({ getGlobalSettings }) => {
            getGlobalSettings().then(settings => {
                setLogoSettings({
                    type: (settings as any).logoType || "svg",
                    gifUrl: (settings as any).logoGifUrl || ""
                });
            });
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTheme({ ...theme, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setSaving(true);
        // Save Theme
        await fetch("/api/cms/theme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(theme)
        });

        // Save Logo Settings
        await saveLogoSettingsAction(logoSettings.type, logoSettings.gifUrl);

        setSaving(false);
        alert("Theme updated! Refresh the main site to see changes.");
    };

    if (loading) return <div className="text-slate-500 font-bold text-center p-12">Loading theme...</div>;

    return (
        <div className="space-y-8 p-8 max-w-5xl mx-auto animate-in fade-in duration-700">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-black tracking-tight text-slate-900">Theme Manager</h1>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-3 bg-gradient-to-r from-lime-400 to-black hover:shadow-lg hover:shadow-lime-500/20 disabled:opacity-50 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                    {saving ? <RefreshCw className="animate-spin" size={20} /> : <Save size={20} />}
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Colors */}
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/5 space-y-8">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-lime-50 text-lime-700 rounded-xl border-2 border-lime-100">
                            <Palette size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Colors</h3>
                    </div>

                    <div className="space-y-6">
                        {['primaryColor', 'secondaryColor', 'backgroundColor', 'textColor'].map((colorField) => (
                            <div key={colorField} className="group">
                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 capitalize">{colorField.replace(/([A-Z])/g, ' $1').trim()}</label>
                                <div className="flex gap-4 items-center p-2 bg-white rounded-xl border-2 border-slate-200 group-hover:border-lime-400 transition-colors shadow-sm">
                                    <div className="relative w-12 h-10 rounded-lg overflow-hidden border border-slate-200">
                                        <input
                                            type="color"
                                            name={colorField}
                                            // @ts-ignore
                                            value={theme[colorField]}
                                            onChange={handleChange}
                                            className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name={colorField}
                                        // @ts-ignore
                                        value={theme[colorField]}
                                        onChange={handleChange}
                                        className="flex-1 bg-transparent border-none text-slate-900 font-mono font-bold uppercase focus:ring-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fonts */}
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/5 space-y-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-slate-900 text-white rounded-xl border-2 border-slate-900">
                            <Type size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Typography</h3>
                    </div>

                    <div className="space-y-6 flex-1">
                        <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Heading Font</label>
                            <input
                                name="headingFont"
                                value={theme.headingFont}
                                onChange={handleChange}
                                className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all font-bold mb-1"
                                placeholder="e.g. Inter, Roboto"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Body Font</label>
                            <input
                                name="bodyFont"
                                value={theme.bodyFont}
                                onChange={handleChange}
                                className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all font-medium"
                                placeholder="e.g. Inter, Open Sans"
                            />
                        </div>
                    </div>
                </div>

                {/* Branding / Logo */}
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/5 space-y-8 md:col-span-2">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-purple-50 text-purple-700 rounded-xl border-2 border-purple-100">
                            <ImageIcon size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Branding</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4">Logo Type</label>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setLogoSettings({ ...logoSettings, type: "svg" })}
                                    className={`flex-1 py-4 px-6 rounded-xl border-2 font-bold transition-all ${logoSettings.type === 'svg' ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-slate-200 text-slate-500 hover:border-purple-200'}`}
                                >
                                    Static SVG
                                </button>
                                <button
                                    onClick={() => setLogoSettings({ ...logoSettings, type: "gif" })}
                                    className={`flex-1 py-4 px-6 rounded-xl border-2 font-bold transition-all ${logoSettings.type === 'gif' ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-slate-200 text-slate-500 hover:border-purple-200'}`}
                                >
                                    Animated GIF
                                </button>
                            </div>
                        </div>

                        {logoSettings.type === 'gif' && (
                            <div>
                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">GIF URL</label>
                                <div className="flex gap-2">
                                    <input
                                        value={logoSettings.gifUrl}
                                        onChange={(e) => setLogoSettings({ ...logoSettings, gifUrl: e.target.value })}
                                        className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 font-medium"
                                        placeholder="/assets/logo.gif"
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-medium">Enter the path to your GIF file (e.g. /assets/logo.gif). Place the file in public/assets manually.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
