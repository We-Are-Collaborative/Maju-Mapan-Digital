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
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-black text-slate-900">Global Configuration</h2>
                    <p className="text-slate-500 font-medium">Manage crawler access, analytics, and server rules.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all disabled:opacity-50"
                >
                    {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                    Save Changes
                </button>
            </div>

            <Tabs defaultValue="crawlers" className="w-full">
                <TabsList className="grid w-full grid-cols-4 lg:w-[600px] mb-8 p-1 bg-slate-100/50 backdrop-blur rounded-xl">
                    <TabsTrigger value="crawlers" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-sm font-bold">
                        <Globe size={16} className="mr-2" /> Crawlers
                    </TabsTrigger>
                    <TabsTrigger value="server" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-sm font-bold">
                        <Shield size={16} className="mr-2" /> Server
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-sm font-bold">
                        <Activity size={16} className="mr-2" /> Analytics
                    </TabsTrigger>
                    <TabsTrigger value="custom" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-lime-600 data-[state=active]:shadow-sm font-bold">
                        <Code size={16} className="mr-2" /> Scripts
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="crawlers" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-2 border-slate-100 shadow-xl shadow-slate-100/50">
                        <CardHeader>
                            <CardTitle>Robots.txt Configuration</CardTitle>
                            <CardDescription>Define how search engines crawl your site. This content is served dynamically at /robots.txt</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Content</Label>
                                <Textarea
                                    value={formData.robotsTxt}
                                    onChange={(e) => setFormData({ ...formData, robotsTxt: e.target.value })}
                                    className="font-mono text-sm min-h-[300px] bg-slate-50 border-2 border-slate-200 focus:ring-lime-400"
                                    placeholder="User-agent: *&#10;Allow: /"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="server" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-2 border-slate-100 shadow-xl shadow-slate-100/50">
                        <CardHeader>
                            <CardTitle>.htaccess Simulation</CardTitle>
                            <CardDescription className="text-amber-600 font-bold">
                                Note: This app is hosted on a Node.js environment (Next.js). This .htaccess file is for reference or migration planning only and does NOT affect the live server directly.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Content</Label>
                                <Textarea
                                    value={formData.htaccess}
                                    onChange={(e) => setFormData({ ...formData, htaccess: e.target.value })}
                                    className="font-mono text-sm min-h-[300px] bg-slate-50 border-2 border-slate-200 focus:ring-lime-400"
                                    placeholder="# Rewrite rules here"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="analytics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-2 border-slate-100 shadow-xl shadow-slate-100/50">
                        <CardHeader>
                            <CardTitle>Tracking Pixels & Analytics</CardTitle>
                            <CardDescription>Enter your measurement IDs. Scripts are automatically injected into the head/body.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Google Analytics Script</Label>
                                <Textarea
                                    value={formData.googleAnalyticsScript}
                                    onChange={(e) => setFormData({ ...formData, googleAnalyticsScript: e.target.value })}
                                    className="font-mono text-sm min-h-[100px] bg-slate-50 border-2 border-slate-200 focus:ring-lime-400"
                                    placeholder="<script async src='...'>"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Meta Pixel Script</Label>
                                <Textarea
                                    value={formData.metaPixelScript}
                                    onChange={(e) => setFormData({ ...formData, metaPixelScript: e.target.value })}
                                    className="font-mono text-sm min-h-[100px] bg-slate-50 border-2 border-slate-200 focus:ring-lime-400"
                                    placeholder="<script>...</script>"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>TikTok Pixel Script</Label>
                                <Textarea
                                    value={formData.tiktokPixelScript}
                                    onChange={(e) => setFormData({ ...formData, tiktokPixelScript: e.target.value })}
                                    className="font-mono text-sm min-h-[100px] bg-slate-50 border-2 border-slate-200 focus:ring-lime-400"
                                    placeholder="<script>...</script>"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="custom" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-2 border-slate-100 shadow-xl shadow-slate-100/50">
                        <CardHeader>
                            <CardTitle>Custom Script Injection</CardTitle>
                            <CardDescription className="text-rose-500 font-bold">Warning: Malformed scripts can break your site. Use with caution.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>{`Header Scripts (<head>)`}</Label>
                                <Textarea
                                    value={formData.customHeadScripts}
                                    onChange={(e) => setFormData({ ...formData, customHeadScripts: e.target.value })}
                                    className="font-mono text-sm min-h-[200px] bg-slate-50 border-2 border-slate-200 focus:ring-lime-400"
                                    placeholder="<script>...</script>"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>{`Body Scripts (<body>)`}</Label>
                                <Textarea
                                    value={formData.customBodyScripts}
                                    onChange={(e) => setFormData({ ...formData, customBodyScripts: e.target.value })}
                                    className="font-mono text-sm min-h-[200px] bg-slate-50 border-2 border-slate-200 focus:ring-lime-400"
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
