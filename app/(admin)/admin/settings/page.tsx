
"use client";
import React, { useState, useEffect } from "react";
import { Save, RefreshCw, Upload, Database, Layout, HardDrive, Shield, Palette, Type, MousePointer, Cpu } from "lucide-react";
import { restoreBackup } from "@/app/(admin)/_actions/database";
import { getDesignSystems, updateTheme } from "@/app/actions/theme";
import Link from "next/link";
import AdminHeader from "../../components/AdminHeader";

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

    const fetchThemes = async () => {
        const data = await getDesignSystems();
        setThemes(data);
    };

    useEffect(() => {
        fetchThemes();
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
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-12">
            <AdminHeader
                defaultTitle="System Configuration"
                defaultSubtitle="Global preferences, database tools, and design tokens."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PremiumSettingsCard
                    title="Database Manager"
                    description="Execute SQL queries, inspect tables, and manage migrations."
                    icon={Database}
                    href="/admin/settings/database"
                    theme="dark"
                />
                <PremiumSettingsCard
                    title="Home Hero Settings"
                    description="Configure the main landing page slider and messaging."
                    icon={Layout}
                    href="/admin/settings/hero"
                    theme="default"
                />
            </div>

            {/* Design System Section */}
            <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 p-10 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
                    <Palette size={200} />
                </div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                                    <Cpu size={20} />
                                </div>
                                <span className="text-xs font-black text-purple-600 uppercase tracking-widest">Interface Engine</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Design System Control</h2>
                            <p className="text-slate-500 font-medium mt-1">Manage global tokens for Admin and Public interfaces.</p>
                        </div>
                        <DesignSystemTrigger themes={themes} onUpdate={fetchThemes} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-slate-50 rounded-3xl p-6 border-2 border-slate-100 flex items-center gap-4">
                            <div className="p-4 bg-white rounded-2xl shadow-sm"><Palette className="text-slate-400" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Color Palette</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Active</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-6 border-2 border-slate-100 flex items-center gap-4">
                            <div className="p-4 bg-white rounded-2xl shadow-sm"><Type className="text-slate-400" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Typography</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Inter / Manrope</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-6 border-2 border-slate-100 flex items-center gap-4">
                            <div className="p-4 bg-white rounded-2xl shadow-sm"><MousePointer className="text-slate-400" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Interactions</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Enabled</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-rose-50/50 rounded-[2.5rem] border-4 border-rose-100 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                    <div className="size-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 border-2 border-rose-200">
                        <Shield size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-rose-900">Danger Zone</h3>
                        <p className="text-rose-700/80 font-medium">Critical system actions that affect data integrity.</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 p-2 bg-white rounded-2xl border-2 border-rose-100 shadow-sm">
                    <div className="px-4">
                        <h4 className="font-bold text-rose-900 text-sm">System Reset</h4>
                        <p className="text-[10px] text-rose-400 font-black uppercase tracking-wider">Factory Restore</p>
                    </div>
                    <button
                        onClick={handleRestore}
                        disabled={restoring}
                        className="px-6 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-all active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-rose-200 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        {restoring ? <RefreshCw className="animate-spin" size={18} /> : <Upload size={18} />}
                        {restoring ? "Restoring..." : "Restore Data"}
                    </button>
                </div>
            </div>

            {restoring && (
                <div className="fixed inset-0 bg-white/90 backdrop-blur-xl z-50 flex items-center justify-center flex-col gap-6 animate-in fade-in duration-300">
                    <div className="relative">
                        <div className="absolute inset-0 bg-lime-500 rounded-full animate-ping opacity-20"></div>
                        <RefreshCw className="animate-spin text-lime-600 relative z-10" size={64} />
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Restoring System Database</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Please do not close this window</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function PremiumSettingsCard({ title, description, icon: Icon, href, theme = "default" }: any) {
    const isDark = theme === 'dark';

    return (
        <Link href={href} className={`group relative overflow-hidden rounded-[2.5rem] p-8 border-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between min-h-[220px] ${isDark
            ? 'bg-slate-900 border-slate-900 hover:border-slate-800'
            : 'bg-white border-slate-100 hover:border-lime-200'
            }`}>
            <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Icon size={120} />
            </div>

            <div className={`size-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm relative z-10 ${isDark
                ? 'bg-white/10 text-white border border-white/10'
                : 'bg-slate-50 text-slate-900 border-2 border-slate-100 group-hover:bg-lime-50 group-hover:border-lime-100 group-hover:text-lime-600'
                }`}>
                <Icon size={28} />
            </div>

            <div className="relative z-10">
                <h3 className={`text-2xl font-black mb-2 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                <p className={`text-sm font-medium leading-relaxed max-w-[90%] ${isDark ? 'text-white/60' : 'text-slate-500'}`}>{description}</p>
            </div>
        </Link>
    );
}




import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger as DialogTriggerShadcn } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DesignSystemEditor from "./components/DesignSystemEditor";

function DesignSystemTrigger({ themes, onUpdate }: { themes: any[], onUpdate: () => void }) {
    const adminTheme = themes.find(t => t.name === 'admin');
    const publicTheme = themes.find(t => t.name === 'public');

    return (
        <Dialog>
            <DialogTriggerShadcn asChild>
                <button className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
                    <Layout size={18} />
                    Open Visual Editor
                </button>
            </DialogTriggerShadcn>
            <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 overflow-hidden bg-slate-50">
                <DialogHeader className="p-6 bg-white border-b">
                    <DialogTitle className="text-xl font-black">Visual Design System Editor</DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-hidden p-6">
                    <Tabs defaultValue="admin" className="h-full flex flex-col">
                        <TabsList className="bg-slate-200 p-1 rounded-xl mb-4 self-start">
                            <TabsTrigger value="admin" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold">Admin Dashboard</TabsTrigger>
                            <TabsTrigger value="public" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold">Public Site</TabsTrigger>
                        </TabsList>

                        <div className="flex-1 overflow-y-auto pr-2">
                            <TabsContent value="admin" className="m-0">
                                {adminTheme ? (
                                    <DesignSystemEditor theme={adminTheme} onUpdate={onUpdate} />
                                ) : (
                                    <p>Admin theme not found.</p>
                                )}
                            </TabsContent>
                            <TabsContent value="public" className="m-0">
                                {publicTheme ? (
                                    <DesignSystemEditor theme={publicTheme} onUpdate={onUpdate} />
                                ) : (
                                    <p>Public theme not found.</p>
                                )}
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    );
}
