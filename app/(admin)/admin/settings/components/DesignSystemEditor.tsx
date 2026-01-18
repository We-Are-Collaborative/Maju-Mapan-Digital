"use client";

import React, { useState, useRef } from 'react';
import { updateTheme } from '@/app/actions/theme';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, RefreshCw, ChevronDown, Upload, Type, Palette, Ruler } from 'lucide-react';
import { toast } from 'sonner';

interface EditorProps {
    theme: any;
    onUpdate?: () => void;
}

const COMMON_FONTS = [
    "Inter, sans-serif",
    "Roboto, sans-serif",
    "Open Sans, sans-serif",
    "Lato, sans-serif",
    "Montserrat, sans-serif",
    "System UI, sans-serif",
    "Georgia, serif",
    "Courier New, monospace"
];

export default function DesignSystemEditor({ theme, onUpdate }: EditorProps) {
    const [config, setConfig] = useState(() => {
        // Deep clone to avoid mutations
        let initial = JSON.parse(JSON.stringify(theme));

        // 1. Unwrap DB container (remove id, name, etc, we just want the tokens)
        // If 'config' exists as a property, that's likely our target.
        if (initial.config && Object.keys(initial.config).length > 0) {
            initial = initial.config;
        }

        // 2. Fix Double Nesting Bug (if config has a config property inside)
        while (initial.config && typeof initial.config === 'object') {
            initial = initial.config;
        }

        // 3. Fallback: If we stripped everything away or it's empty, use default placeholders 
        // (This shouldn't happen if migration worked, but safe to allow "some" editing)
        // Also remove metadata keys if they stuck around
        const clean: any = {};
        for (const key in initial) {
            if (['id', 'name', 'createdAt', 'updatedAt', 'userId'].includes(key)) continue;
            clean[key] = initial[key];
        }

        return clean;
    });

    const [saving, setSaving] = useState(false);

    // Filter out core fields to valid root config
    // (Assuming we are passing the FULL AdminTheme object)

    const handleSave = async () => {
        setSaving(true);
        // We save the entire object into "config" or split it if we want to migrate slowly.
        // For this task, let's assume we save the full structure into the 'config' column of the Theme model
        // matching the logic we implemented in lib/theme.ts 'getTheme'.

        const res = await updateTheme(theme.id, {
            colors: {}, // Legacy cleared
            config: config
        });

        setSaving(false);
        if (res.success) {
            toast.success("Design system updated");
            if (onUpdate) onUpdate();
        } else {
            toast.error("Failed to save");
        }
    };

    const updateValue = (path: string[], value: string) => {
        const newConfig = JSON.parse(JSON.stringify(config));
        let current = newConfig;
        for (let i = 0; i < path.length - 1; i++) {
            current = current[path[i]];
        }
        current[path[path.length - 1]] = value;
        setConfig(newConfig);
    };

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 px-1">
                <h3 className="text-xl font-bold text-slate-900">Design Tokens</h3>
                <Button onClick={handleSave} disabled={saving} className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold">
                    {saving && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                </Button>
            </div>

            <div className="bg-white border rounded-lg p-6 space-y-4 flex-1 overflow-y-auto">
                <RecursiveGroup data={config} path={[]} onChange={updateValue} />
            </div>
        </div>
    );
}

function RecursiveGroup({ data, path, onChange }: { data: any, path: string[], onChange: (p: string[], v: string) => void }) {
    if (typeof data !== 'object' || data === null) {
        // Primitive value -> Render Smart Input
        const label = path[path.length - 1];

        return (
            <div className="flex items-center gap-4 py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors px-2 rounded-lg">
                <Label className="w-1/3 text-xs uppercase font-bold text-slate-500 tracking-wider">{label.replace(/([A-Z])/g, ' $1').trim()}</Label>
                <div className="flex-1">
                    <SmartInput
                        label={label}
                        value={data as string}
                        onChange={(val) => onChange(path, val)}
                    />
                </div>
            </div>
        );
    }

    // Object -> Render Group
    if (Object.keys(data).length === 0) return null;

    return (
        <div className="space-y-2 ml-2 pl-4 border-l-2 border-slate-100">
            {Object.entries(data).map(([key, value]) => {
                if (key === 'id' || key === 'name' || key === 'createdAt' || key === 'updatedAt') return null;

                const newPath = [...path, key];

                return (
                    <div key={key}>
                        {typeof value === 'object' && value !== null ? (
                            <details className="group mb-2" open>
                                <summary className="flex items-center gap-2 cursor-pointer py-2 text-sm font-black text-slate-900 hover:text-lime-600 select-none bg-slate-50/50 rounded-lg px-2 transition-colors">
                                    <ChevronDown size={14} className="transition-transform group-open:rotate-0 -rotate-90 text-slate-400" />
                                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                </summary>
                                <div className="mt-2 text-slate-900">
                                    <RecursiveGroup data={value} path={newPath} onChange={onChange} />
                                </div>
                            </details>
                        ) : (
                            <RecursiveGroup data={value} path={newPath} onChange={onChange} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function SmartInput({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
    const lowerLabel = label.toLowerCase();

    // 1. Font Picker
    if (lowerLabel.includes('font')) {
        return (
            <div className="flex gap-2">
                <Select value={COMMON_FONTS.includes(value) ? value : 'custom'} onValueChange={(val) => val !== 'custom' && onChange(val)}>
                    <SelectTrigger className="w-full font-mono text-xs h-9 bg-white">
                        <SelectValue placeholder="Select Font" />
                    </SelectTrigger>
                    <SelectContent>
                        {COMMON_FONTS.map(font => (
                            <SelectItem key={font} value={font} style={{ fontFamily: font }}>{font.split(',')[0]}</SelectItem>
                        ))}
                        <SelectItem value="custom">Custom...</SelectItem>

                    </SelectContent>
                </Select>
                <div className="relative">
                    <Input
                        id="font-upload"
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files?.[0]) {
                                toast.info("Custom font upload simulated.");
                                onChange(`"${e.target.files[0].name}", sans-serif`);
                            }
                        }}
                    />
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 shrink-0"
                        onClick={() => document.getElementById('font-upload')?.click()}
                        title="Upload Font"
                    >
                        <Upload size={14} />
                    </Button>
                </div>
            </div>
        );
    }

    // 2. Color Picker (Including Gradient Support)
    const isColorKey = ['color', 'bg', 'background', 'border', 'text', 'surface', 'foreground', 'accent', 'primary', 'secondary', 'success', 'warning', 'error', 'divider', 'h1', 'h2', 'h3', 'h4', 'h5', 'body', 'title', 'subtitle', 'active', 'hover'].some(k => lowerLabel.includes(k));
    const isGradient = value.includes('gradient');
    const isActuallyColor = (typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgb') || value === 'transparent' || isGradient));

    if ((isColorKey || isActuallyColor) && !lowerLabel.includes('width') && !lowerLabel.includes('radius')) {
        return (
            <div className="flex gap-2 items-center">
                <div className="w-10 h-9 rounded-md border border-slate-200 overflow-hidden shrink-0 shadow-sm relative group">
                    {/* Checkerboard for transparency */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/checkerboard-crosshatch.png')] opacity-20"></div>
                    {/* Value Preview (works for Color OR Gradient) */}
                    <div className="absolute inset-0" style={{ background: value }}></div>

                    {!isGradient && (
                        <input
                            type="color"
                            value={value.startsWith('#') ? value : '#000000'} // Fallback for rgba/transparent
                            onChange={(e) => onChange(e.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    )}
                </div>
                <div className="relative flex-1">
                    <Palette size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="pl-9 font-mono text-xs h-9"
                        placeholder={isGradient ? "linear-gradient(...)" : "#HEX"}
                    />
                </div>
            </div>
        );
    }

    // 3. Dimension Input (Pixels, Rem, etc)
    if (['width', 'radius', 'size', 'spacing', 'gap', 'padding', 'margin', 'scale'].some(k => lowerLabel.includes(k))) {
        return (
            <div className="relative">
                <Ruler size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="pl-9 font-mono text-xs h-9"
                    placeholder="e.g. 1px, 2rem"
                />
            </div>
        );
    }

    // Default Text Input
    return (
        <div className="relative">
            <Type size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-9 text-sm h-9"
            />
        </div>
    );
}
