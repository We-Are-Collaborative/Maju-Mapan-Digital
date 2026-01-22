"use client";

import React, { useState, useEffect } from "react";
import { Save, Loader2, Globe, Shield, Activity, Code } from "lucide-react";
import { toast } from "sonner";
import { getGlobalSettings, updateGlobalSettings } from "@/app/actions/settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function GlobalSettingsForm() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        robotsTxt: "",
        htaccess: "",
        googleAnalyticsScript: "",
        metaPixelScript: "",
        tiktokPixelScript: "",
        customHeadScripts: "",
        customBodyScripts: ""
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const data = await getGlobalSettings();
                if (data) {
                    setFormData({
                        robotsTxt: data.robotsTxt || "",
                        htaccess: data.htaccess || "",
                        googleAnalyticsScript: data.googleAnalyticsScript || "",
                        metaPixelScript: data.metaPixelScript || "",
                        tiktokPixelScript: data.tiktokPixelScript || "",
                        customHeadScripts: data.customHeadScripts || "",
                        customBodyScripts: data.customBodyScripts || ""
                    });
                }
            } catch (error) {
                toast.error("Failed to load settings");
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await updateGlobalSettings(formData);
            if (res.success) {
                toast.success("Settings updated successfully");
            } else {
                toast.error(res.error || "Failed to update settings");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader2 className="animate-spin text-lime-500" size={48} />
            </div>
        );
    }

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white/40 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/20 gap-6">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Global Configuration</h2>
                    <p className="text-slate-500 font-medium mt-1">Manage crawler access, analytics, and server rules.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-black transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-slate-900/10"
                >
                    {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                    Save System Changes
                </button>
            </div>

            <Tabs defaultValue="crawlers" className="w-full">
                <TabsList className="bg-slate-100/50 backdrop-blur-xl border border-slate-200/50 p-1.5 rounded-2xl mb-10 flex w-fit gap-1">
                    <TabsTrigger value="crawlers" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-md font-bold transition-all text-slate-500">
                        <Globe size={18} className="mr-2" /> Crawlers
                    </TabsTrigger>
                    <TabsTrigger value="server" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-md font-bold transition-all text-slate-500">
                        <Shield size={18} className="mr-2" /> Server
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-md font-bold transition-all text-slate-500">
                        <Activity size={18} className="mr-2" /> Analytics
                    </TabsTrigger>
                    <TabsTrigger value="custom" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-md font-bold transition-all text-slate-500">
                        <Code size={18} className="mr-2" /> Scripts
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="crawlers" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="rounded-[2rem] border-4 border-slate-50 bg-white/60 backdrop-blur-md shadow-2xl shadow-slate-200/40 p-2">
                        <CardHeader className="p-8 pb-4">
                            <CardTitle className="text-2xl font-black text-slate-900">Robots.txt Configuration</CardTitle>
                            <CardDescription className="font-medium text-slate-500">Define how search engines crawl your site. This content is served dynamically at /robots.txt</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0 space-y-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Configuration Content</Label>
                                <Textarea
                                    value={formData.robotsTxt}
                                    onChange={(e) => setFormData({ ...formData, robotsTxt: e.target.value })}
                                    className="font-mono text-sm min-h-[400px] bg-slate-50/50 border-2 border-slate-100 focus:ring-4 focus:ring-lime-400/10 focus:border-lime-400 rounded-2xl transition-all p-6"
                                    placeholder="User-agent: *&#10;Allow: /"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="server" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="rounded-[2rem] border-4 border-slate-50 bg-white/60 backdrop-blur-md shadow-2xl shadow-slate-200/40 p-2">
                        <CardHeader className="p-8 pb-4">
                            <CardTitle className="text-2xl font-black text-slate-900">Server Rules (.htaccess)</CardTitle>
                            <CardDescription className="text-amber-600 font-bold bg-amber-50/50 p-4 rounded-xl border border-amber-100 flex items-center gap-3">
                                <Shield size={18} className="shrink-0" />
                                Note: This application uses Next.js. These rules are for reference or migration planning and do NOT affect the live environment.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-2 space-y-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Rule Definitions</Label>
                                <Textarea
                                    value={formData.htaccess}
                                    onChange={(e) => setFormData({ ...formData, htaccess: e.target.value })}
                                    className="font-mono text-sm min-h-[400px] bg-slate-50/50 border-2 border-slate-100 focus:ring-4 focus:ring-lime-400/10 focus:border-lime-400 rounded-2xl transition-all p-6"
                                    placeholder="# Rewrite rules here"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="analytics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="rounded-[2rem] border-4 border-slate-50 bg-white/60 backdrop-blur-md shadow-2xl shadow-slate-200/40 p-2">
                        <CardHeader className="p-8 pb-4">
                            <CardTitle className="text-2xl font-black text-slate-900">Analytics & Tracking</CardTitle>
                            <CardDescription className="font-medium text-slate-500">Enter your measurement IDs. Scripts are automatically injected into the appropriate sections.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0 space-y-8">
                            {[
                                { id: 'googleAnalyticsScript', label: 'Google Analytics G4', icon: Globe },
                                { id: 'metaPixelScript', label: 'Meta (Facebook) Pixel', icon: Activity },
                                { id: 'tiktokPixelScript', label: 'TikTok Pixel', icon: Activity }
                            ].map((pixel) => (
                                <div key={pixel.id} className="space-y-3">
                                    <Label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                                        <pixel.icon size={14} /> {pixel.label}
                                    </Label>
                                    <Textarea
                                        value={formData[pixel.id as keyof typeof formData]}
                                        onChange={(e) => setFormData({ ...formData, [pixel.id]: e.target.value })}
                                        className="font-mono text-sm min-h-[120px] bg-slate-50/50 border-2 border-slate-100 focus:ring-4 focus:ring-lime-400/10 focus:border-lime-400 rounded-2xl transition-all p-5"
                                        placeholder="<script async src='...'>"
                                    />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="custom" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="rounded-[2rem] border-4 border-slate-50 bg-white/60 backdrop-blur-md shadow-2xl shadow-slate-200/40 p-2">
                        <CardHeader className="p-8 pb-4">
                            <CardTitle className="text-2xl font-black text-slate-900">Custom Script Injection</CardTitle>
                            <CardDescription className="text-rose-500 font-bold bg-rose-50/50 p-4 rounded-xl border border-rose-100 flex items-center gap-3">
                                <Activity size={18} className="shrink-0" />
                                Warning: Malformed scripts can break your site frontend. Use with extreme caution.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-2 space-y-8">
                            <div className="space-y-3">
                                <Label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{`Header Scripts (<head>)`}</Label>
                                <Textarea
                                    value={formData.customHeadScripts}
                                    onChange={(e) => setFormData({ ...formData, customHeadScripts: e.target.value })}
                                    className="font-mono text-sm min-h-[250px] bg-slate-50/50 border-2 border-slate-100 focus:ring-4 focus:ring-lime-400/10 focus:border-lime-400 rounded-2xl transition-all p-6"
                                    placeholder="<script>...</script>"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{`Body Scripts (<body>)`}</Label>
                                <Textarea
                                    value={formData.customBodyScripts}
                                    onChange={(e) => setFormData({ ...formData, customBodyScripts: e.target.value })}
                                    className="font-mono text-sm min-h-[250px] bg-slate-50/50 border-2 border-slate-100 focus:ring-4 focus:ring-lime-400/10 focus:border-lime-400 rounded-2xl transition-all p-6"
                                    placeholder="<script>...</script>"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
