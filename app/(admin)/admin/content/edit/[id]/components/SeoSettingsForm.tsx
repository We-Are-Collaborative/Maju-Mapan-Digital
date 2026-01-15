"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Search, MapPin, Share2, Code } from "lucide-react";

export default function SeoSettingsForm({ data, onChange }: { data: any, onChange: (data: any) => void }) {
    const [seo, setSeo] = useState<any>({
        metaTitle: "",
        metaDescription: "",
        keywords: "",
        canonicalUrl: "",
        robots: "index, follow",
        ogTitle: "",
        ogDescription: "",
        ogImage: "",
        structuredData: "",
        geoRegion: "",
        geoPlacename: "",
        geoPosition: "",
        googleBusiness: "",
        ...data
    });

    useEffect(() => {
        setSeo({ ...seo, ...data });
    }, [data]);

    const handleChange = (key: string, value: any) => {
        const newData = { ...seo, [key]: value };
        setSeo(newData);
        onChange(newData);
    }

    return (
        <div className="p-6 space-y-6">
            <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-4 mb-4">
                    <TabsTrigger value="general" className="gap-2"><Search size={14} /> General</TabsTrigger>
                    <TabsTrigger value="social" className="gap-2"><Share2 size={14} /> Social (OG)</TabsTrigger>
                    <TabsTrigger value="geo" className="gap-2"><MapPin size={14} /> Local / GEO</TabsTrigger>
                    <TabsTrigger value="tech" className="gap-2"><Code size={14} /> Technical</TabsTrigger>
                </TabsList>

                {/* GENERAL SEO */}
                <TabsContent value="general" className="space-y-4">
                    <Card><CardContent className="pt-6 space-y-4">
                        <div className="space-y-2">
                            <Label className="flex justify-between items-center">
                                Meta Title
                                <span className={seo.metaTitle?.length > 60 ? "text-red-500 text-xs" : "text-slate-400 text-xs"}>{seo.metaTitle?.length || 0}/60</span>
                            </Label>
                            <Input value={seo.metaTitle || ""} onChange={e => handleChange("metaTitle", e.target.value)} placeholder="Title displayed in search results" />
                        </div>
                        <div className="space-y-2">
                            <Label className="flex justify-between items-center">
                                Meta Description
                                <span className={seo.metaDescription?.length > 160 ? "text-red-500 text-xs" : "text-slate-400 text-xs"}>{seo.metaDescription?.length || 0}/160</span>
                            </Label>
                            <Textarea value={seo.metaDescription || ""} onChange={e => handleChange("metaDescription", e.target.value)} placeholder="Brief summary for search snippets" className="h-24" />
                        </div>
                        <div className="space-y-2">
                            <Label>Keywords (Comma separated)</Label>
                            <Input value={seo.keywords || ""} onChange={e => handleChange("keywords", e.target.value)} placeholder="marketing, digital, seo" />
                        </div>
                    </CardContent></Card>
                </TabsContent>

                {/* SOCIAL OG */}
                <TabsContent value="social" className="space-y-4">
                    <Card><CardContent className="pt-6 space-y-4">
                        <div className="space-y-2">
                            <Label>OG Title</Label>
                            <Input value={seo.ogTitle || ""} onChange={e => handleChange("ogTitle", e.target.value)} placeholder="Title for Facebook/Twitter/LinkedIn" />
                        </div>
                        <div className="space-y-2">
                            <Label>OG Description</Label>
                            <Textarea value={seo.ogDescription || ""} onChange={e => handleChange("ogDescription", e.target.value)} placeholder="Description for social cards" />
                        </div>
                        <div className="space-y-2">
                            <Label>OG Image URL</Label>
                            <div className="flex gap-2">
                                <Input value={seo.ogImage || ""} onChange={e => handleChange("ogImage", e.target.value)} placeholder="https://..." />
                                {/* Could add image picker here later */}
                            </div>
                        </div>
                    </CardContent></Card>
                </TabsContent>

                {/* GEO / LOCAL */}
                <TabsContent value="geo" className="space-y-4">
                    <Card><CardContent className="pt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Region (e.g. ID-JK)</Label>
                                <Input value={seo.geoRegion || ""} onChange={e => handleChange("geoRegion", e.target.value)} placeholder="ID" />
                            </div>
                            <div className="space-y-2">
                                <Label>Placename (City)</Label>
                                <Input value={seo.geoPlacename || ""} onChange={e => handleChange("geoPlacename", e.target.value)} placeholder="Jakarta" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Geo Position (Lat,Long)</Label>
                            <Input value={seo.geoPosition || ""} onChange={e => handleChange("geoPosition", e.target.value)} placeholder="-6.2088;106.8456" />
                        </div>
                        <div className="space-y-2">
                            <Label>Google Business Profile URL</Label>
                            <Input value={seo.googleBusiness || ""} onChange={e => handleChange("googleBusiness", e.target.value)} placeholder="https://g.page/..." />
                        </div>
                    </CardContent></Card>
                </TabsContent>

                {/* TECHNICAL */}
                <TabsContent value="tech" className="space-y-4">
                    <Card><CardContent className="pt-6 space-y-4">
                        <div className="space-y-2">
                            <Label>Canonical URL</Label>
                            <Input value={seo.canonicalUrl || ""} onChange={e => handleChange("canonicalUrl", e.target.value)} placeholder="https://..." />
                        </div>
                        <div className="space-y-2">
                            <Label>Robots Tag</Label>
                            <Input value={seo.robots || "index, follow"} onChange={e => handleChange("robots", e.target.value)} placeholder="index, follow" />
                        </div>
                        <div className="space-y-2">
                            <Label className="flex items-center gap-2">Custom Schema (JSON-LD) <Badge variant="outline" className="text-[10px]">Advanced</Badge></Label>
                            <Textarea
                                value={seo.structuredData || ""}
                                onChange={e => handleChange("structuredData", e.target.value)}
                                placeholder='{ "@context": "https://schema.org", "@type": "WebPage", ... }'
                                className="font-mono text-xs h-40 bg-slate-50"
                            />
                        </div>
                    </CardContent></Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
