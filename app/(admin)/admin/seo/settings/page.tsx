"use client";
import React from "react";
import { Settings, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SeoSettingsPage() {
    return (
        <div className="max-w-3xl mx-auto p-8 space-y-8 animate-in fade-in duration-700">
            <div className="flex justify-between items-center border-b border-slate-200 pb-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900">Global Settings</h1>
                    <p className="text-slate-500 font-medium">Configure default meta tags and sitemap settings.</p>
                </div>
                <Button className="bg-slate-900 text-white">
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <Label>Default Title Template</Label>
                    <Input defaultValue="%s | Maju Mapan Digital" />
                    <p className="text-xs text-slate-400">Use %s as valid placeholder.</p>
                </div>

                <div className="space-y-2">
                    <Label>Robots.txt Content</Label>
                    <textarea className="w-full min-h-[150px] p-4 rounded-md border border-input bg-background" defaultValue={`User-agent: *\nAllow: /`} />
                </div>
            </div>
        </div>
    );
}
