"use client";
import React from "react";
import { Map, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GeoTargetingPage() {
    return (
        <div className=" p-8 space-y-8 animate-in fade-in duration-700">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900">Geo Targeting</h1>
                    <p className="text-slate-500 font-medium">Manage regional SEO and localized content strategies.</p>
                </div>
                <Button variant="outline">
                    <MapPin className="mr-2 h-4 w-4" /> Add Region
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-900 rounded-3xl text-white h-96 flex flex-col items-center justify-center relative overflow-hidden">
                    <Globe className="w-64 h-64 text-slate-800 absolute -right-16 -bottom-16 opacity-50" />
                    <div className="z-10 text-center space-y-4">
                        <Map size={48} className="mx-auto text-emerald-400" />
                        <h3 className="text-xl font-bold">Interactive Map View</h3>
                        <p className="text-slate-400 max-w-xs mx-auto">Visual representation of your traffic sources and target regions.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-slate-900">Active Regions</h3>
                    {['Indonesia (Primary)', 'Singapore', 'Malaysia', 'Vietnam'].map((region, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="font-medium text-slate-700">{region}</span>
                            </div>
                            <span className="text-xs text-slate-400 font-mono">en-US, id-ID</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
