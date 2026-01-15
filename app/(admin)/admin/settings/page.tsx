"use client";
import React, { useState, useEffect } from "react";
import { Save, RefreshCw, Upload, Database, Layout, HardDrive, Shield, Palette, Type, MousePointer } from "lucide-react";
import { restoreBackup } from "@/app/(admin)/_actions/database";
import { getDesignSystems } from "@/app/actions/theme";
import Link from "next/link";

interface SettingsCardProps {
    title: string;
    description: string;
    icon: any;
    href: string;
    color: string;
}

export default function SettingsPage() {
    const [restoring, setRestoring] = useState(false);
    const [themes, setThemes] = useState<any[]>([]);

    useEffect(() => {
        getDesignSystems().then(setThemes);
    }, []);

    const handleRestore = async () => {
        if (!confirm("WARNING: This will overwrite the current database with the seed data. Are you sure?")) return;
        setRestoring(true);
        const res = await restoreBackup();
        setRestoring(false);
        if (res.success) alert("System restored successfully.");
        else alert("Restore failed: " + res.error);
    };

    return (
        <div className="space-y-10 p-8 w-full animate-in fade-in duration-700">
            <div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900">System Settings</h1>
                <p className="text-slate-500 font-medium mt-1">Configure global preferences and tools.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <SettingsCard
                    title="Database Manager"
                    description="View tables, run SQL, and check schema."
                    icon={Database}
                    href="/admin/settings/database"
                    color="black"
                />
            </div>

            {/* Design System Recap */}
            <div className="space-y-6">
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Design System Recap</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {themes.map((theme) => (
                        <DesignSystemCard key={theme.name} theme={theme} />
                    ))}
                </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-rose-50 text-rose-600 rounded-xl border-2 border-rose-100">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900">Danger Zone</h3>
                        <p className="text-slate-500 text-sm font-medium">Critical system actions.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 bg-rose-50 border-2 border-rose-100 rounded-2xl">
                    <div>
                        <h4 className="font-bold text-rose-800">System Reset</h4>
                        <p className="text-xs text-rose-600 font-medium">Restore database to initial seed state.</p>
                    </div>
                    <button
                        onClick={handleRestore}
                        disabled={restoring}
                        className="px-6 py-3 bg-white border-2 border-rose-200 text-rose-600 font-bold rounded-xl hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all active:scale-95 flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                    >
                        {restoring ? <RefreshCw className="animate-spin" size={20} /> : <Upload size={20} />}
                        {restoring ? "Restoring..." : "Restore Default Data"}
                    </button>
                </div>
            </div>

            {restoring && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex items-center justify-center flex-col gap-4">
                    <RefreshCw className="animate-spin text-lime-600" size={64} />
                    <h2 className="text-2xl font-black text-slate-900">Restoring System...</h2>
                    <p className="text-slate-500 font-bold">Please wait, this may take a moment.</p>
                </div>
            )}
        </div>
    );
}

function SettingsCard({ title, description, icon: Icon, href, color }: SettingsCardProps) {
    const isLime = color === 'lime';
    const isBlack = color === 'black';

    let iconBg = "bg-slate-50 text-slate-500 border-slate-200";
    if (isLime) iconBg = "bg-lime-50 text-lime-700 border-lime-200";
    if (isBlack) iconBg = "bg-slate-900 text-white border-slate-900";

    return (
        <Link href={href} className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200 p-6 rounded-3xl hover:border-lime-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block">
            <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${iconBg}`}>
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">{description}</p>
        </Link>
    );
}

function DesignSystemCard({ theme }: { theme: any }) {
    const isPublic = theme.name === 'public';
    const { colors, config } = theme;

    return (
        <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className={`p-6 border-b-2 border-slate-100 ${isPublic ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isPublic ? 'bg-slate-800 text-white' : 'bg-white text-slate-900 border border-slate-200'}`}>
                        <Layout size={20} />
                    </div>
                    <div>
                        <h3 className={`text-lg font-black capitalize ${isPublic ? 'text-white' : 'text-slate-900'}`}>{theme.name} Site</h3>
                        <p className={`text-xs font-medium ${isPublic ? 'text-slate-400' : 'text-slate-500'}`}>Design Specification</p>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Colors */}
                <div>
                    <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                        <Palette size={16} className="text-slate-400" />
                        <h4>Colors</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {Object.entries(colors || {}).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100">
                                <div className="w-10 h-10 rounded-lg shadow-sm border border-black/5" style={{ backgroundColor: value as string }} />
                                <div className="overflow-hidden">
                                    <p className="text-xs font-bold text-slate-700 capitalize truncate">{key}</p>
                                    <p className="text-[10px] font-mono text-slate-400 uppercase">{value as string}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Typography */}
                {config?.typography && (
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                            <Type size={16} className="text-slate-400" />
                            <h4>Typography</h4>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Primary Font</p>
                                <p className="text-sm font-bold text-slate-900">{config.typography.primaryFont}</p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Headings</p>
                                <p className="text-sm font-medium text-slate-700">{config.typography.headings}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Buttons */}
                {config?.buttons && (
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                            <MousePointer size={16} className="text-slate-400" />
                            <h4>Components</h4>
                        </div>
                        <div className="space-y-3">
                            {Object.entries(config.buttons).map(([key, value]: [string, any]) => (
                                <div key={key} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-xs text-slate-400 uppercase font-bold">{key} Button</p>
                                        <div className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[10px] font-mono">Example</div>
                                    </div>
                                    <p className="text-xs font-mono text-slate-600 break-all">{value.style}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Components & Layout */}
                {config?.components && (
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                            <Layout size={16} className="text-slate-400" />
                            <h4>Components & Layout</h4>
                        </div>
                        <div className="space-y-3">
                            {Object.entries(config.components).map(([key, value]) => (
                                <div key={key} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-xs text-slate-400 uppercase font-bold mb-1 capitalize">{key}</p>
                                    <p className="text-sm font-medium text-slate-700">{value as string}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
