"use client";

import React, { useState } from "react";
import { runAudit, AuditResult } from "@/app/actions/seo-audit";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, CheckCircle, AlertTriangle, XCircle, MapPin, Globe, Activity, ShieldCheck, FileText, Sparkles, Download } from "lucide-react";
import { toast } from "sonner";

export default function SeoAuditPage() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<AuditResult | null>(null);

    const handleAudit = async () => {
        if (!url) return;
        setLoading(true);
        try {
            const result = await runAudit(url);
            setReport(result);
            toast.success("Audit completed successfully");
        } catch (error: any) {
            toast.error(error.message || "Failed to run audit");
        } finally {
            setLoading(false);
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-emerald-500";
        if (score >= 70) return "text-amber-500";
        return "text-rose-500";
    };

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "CRITICAL": return "destructive";
            case "WARNING": return "secondary"; // Should verify if yellow/amber exists or use default variant
            case "INFO": return "outline";
            default: return "default";
        }
    };

    return (
        <div className="p-8 space-y-8 animate-in fade-in duration-700 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900">SEO & GEO Auditor</h1>
                    <p className="text-slate-500 font-medium">Comprehensive deep-scan for Local SEO and Technical compliance.</p>
                </div>
                {report && (
                    <Button
                        variant="outline"
                        onClick={() => {
                            const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = `seo-audit-${new Date().toISOString()}.json`;
                            a.click();
                        }}
                        className="flex items-center gap-2"
                    >
                        <Download size={16} /> Export JSON
                    </Button>
                )}
            </div>

            {/* Input Section */}
            <Card className="bg-slate-900 text-white border-none shadow-2xl">
                <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-1 w-full space-y-2">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Target URL</label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <Input
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://majumapandigital.com/services/marketing"
                                    className="pl-10 h-12 bg-white/10 border-slate-700 text-white placeholder:text-slate-500 text-lg font-medium focus-visible:ring-lime-400"
                                />
                            </div>
                        </div>
                        <Button
                            onClick={handleAudit}
                            disabled={loading}
                            className="h-12 px-8 bg-lime-400 hover:bg-lime-500 text-slate-900 font-black text-lg shadow-lg hover:shadow-lime-500/20 disabled:opacity-50 min-w-[160px]"
                        >
                            {loading ? <Loader2 className="animate-spin mr-2" /> : <Search className="mr-2" size={20} />}
                            {loading ? "Scanning..." : "Run Audit"}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {report && (
                <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
                    {/* Scores Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-lg font-medium text-slate-500 uppercase tracking-widest">SEO Score</CardTitle>
                                <Search className="h-5 w-5 text-slate-400" />
                            </CardHeader>
                            <CardContent>
                                <div className={`text-6xl font-black ${getScoreColor(report.seo_score)}`}>
                                    {report.seo_score}
                                </div>
                                <p className="text-sm text-slate-500 mt-2 font-medium">
                                    Based on meta tags, content structure, and technical factors.
                                </p>
                                <div className="w-full bg-slate-100 h-2 rounded-full mt-4">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ${report.seo_score >= 90 ? "bg-emerald-500" : report.seo_score >= 70 ? "bg-amber-500" : "bg-rose-500"
                                            }`}
                                        style={{ width: `${report.seo_score}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-lg font-medium text-slate-500 uppercase tracking-widest">GEO / Local Score</CardTitle>
                                <MapPin className="h-5 w-5 text-slate-400" />
                            </CardHeader>
                            <CardContent>
                                <div className={`text-6xl font-black ${getScoreColor(report.geo_score)}`}>
                                    {report.geo_score}
                                </div>
                                <p className="text-sm text-slate-500 mt-2 font-medium">
                                    Based on NAP consistency, Local Schema, and Map integration.
                                </p>
                                <div className="w-full bg-slate-100 h-2 rounded-full mt-4">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ${report.geo_score >= 90 ? "bg-emerald-500" : report.geo_score >= 70 ? "bg-amber-500" : "bg-rose-500"
                                            }`}
                                        style={{ width: `${report.geo_score}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Detailed Analysis Tabs */}
                    <Tabs defaultValue="issues" className="w-full">
                        <TabsList className="bg-white p-1 border-2 border-slate-100 rounded-xl mb-6 shadow-sm">
                            <TabsTrigger value="issues" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-lg px-6 py-2 font-bold">Issues & Fixes</TabsTrigger>
                            <TabsTrigger value="recommendations" className="data-[state=active]:bg-lime-400 data-[state=active]:text-slate-900 rounded-lg px-6 py-2 font-bold flex items-center gap-2">
                                <Sparkles size={16} /> AI Suggestions
                            </TabsTrigger>
                            <TabsTrigger value="details" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-lg px-6 py-2 font-bold">Tech Data</TabsTrigger>
                        </TabsList>

                        <TabsContent value="issues" className="space-y-4">
                            {report.issues.length === 0 ? (
                                <div className="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-2xl flex items-center gap-4 text-emerald-800">
                                    <CheckCircle size={32} />
                                    <div className="font-bold text-lg">No critical issues found! Great job.</div>
                                </div>
                            ) : (
                                report.issues.map((issue, idx) => (
                                    <div key={idx} className="bg-white border text-card-foreground shadow-sm rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4"
                                        style={{ borderLeftColor: issue.severity === 'CRITICAL' ? '#f43f5e' : issue.severity === 'WARNING' ? '#f59e0b' : '#3b82f6' }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`mt-1 ${issue.severity === 'CRITICAL' ? 'text-rose-500' : issue.severity === 'WARNING' ? 'text-amber-500' : 'text-blue-500'
                                                }`}>
                                                {issue.severity === 'CRITICAL' ? <XCircle /> : <AlertTriangle />}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-black text-slate-900">{issue.message}</span>
                                                    <Badge variant={issue.severity === 'CRITICAL' ? 'destructive' : 'secondary'}>
                                                        {issue.severity}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs">{issue.type}</Badge>
                                                </div>
                                                <p className="text-slate-500 text-sm font-medium">Impact: -{issue.scoreImpact} points</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </TabsContent>

                        <TabsContent value="recommendations">
                            <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-lime-500/20 blur-[100px] rounded-full pointer-events-none" />

                                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <Sparkles className="text-lime-400" />
                                    AI Smart Improvements
                                </h3>

                                <div className="grid gap-4 relative z-10">
                                    {report.recommendations.map((rec, idx) => (
                                        <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
                                            <div className="flex gap-4">
                                                <div className="bg-lime-400/20 text-lime-400 p-2 rounded-lg h-fit font-bold">#{idx + 1}</div>
                                                <p className="font-medium text-lg leading-relaxed">{rec}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="details">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader><CardTitle>Meta Data</CardTitle></CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase">Title Tag</div>
                                            <div className="font-medium mt-1 p-3 bg-slate-50 rounded-lg text-slate-900">{report.details.title || "Missing"}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase">Meta Description</div>
                                            <div className="font-medium mt-1 p-3 bg-slate-50 rounded-lg text-slate-900">{report.details.description || "Missing"}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase">Canonical URL</div>
                                            <code className="block mt-1 p-2 bg-slate-100 rounded text-slate-600 text-sm break-all">{report.details.canonical || "Not set"}</code>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader><CardTitle>Geo & Schema Data</CardTitle></CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-50 rounded-xl flex items-center justify-between">
                                                <span className="font-bold text-slate-700">NAP Detected</span>
                                                {report.details.geo_data.nap_detected ? <CheckCircle className="text-emerald-500" /> : <XCircle className="text-rose-500" />}
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-xl flex items-center justify-between">
                                                <span className="font-bold text-slate-700">Map Embed</span>
                                                {report.details.geo_data.map_embed ? <CheckCircle className="text-emerald-500" /> : <XCircle className="text-rose-500" />}
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-xl flex items-center justify-between">
                                                <span className="font-bold text-slate-700">Local Schema</span>
                                                {report.details.schema_types.some(t => t.includes("LocalBusiness") || t.includes("Organization")) ? <CheckCircle className="text-emerald-500" /> : <XCircle className="text-rose-500" />}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase mb-2">Detailed Schema Types Found</div>
                                            <div className="flex flex-wrap gap-2">
                                                {report.details.schema_types.length > 0 ? (
                                                    report.details.schema_types.map(t => <Badge key={t} variant="outline">{t}</Badge>)
                                                ) : <span className="text-sm text-slate-400 italic">No schema markup detected</span>}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="md:col-span-2">
                                    <CardHeader><CardTitle>Heading Structure</CardTitle></CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {report.details.h1.map((h, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border-l-4 border-lime-400">
                                                    <span className="font-black text-slate-400">H1</span>
                                                    <span className="font-bold text-slate-900">{h}</span>
                                                </div>
                                            ))}
                                            {report.details.h1.length === 0 && <p className="text-rose-500 font-bold">No H1 tags found.</p>}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            )}
        </div>
    );
}
