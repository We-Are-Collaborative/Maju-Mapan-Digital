"use client";
import React, { useState, useEffect } from "react";
import { Trash2, Plus, Image as ImageIcon } from "lucide-react";
import SplitFeatureSection from "@/components/sections/SplitFeatureSection";

interface SplitFeatureFormProps {
    data: any;
    onChange: (newData: any) => void;
}

export default function SplitFeatureForm({ data, onChange }: SplitFeatureFormProps) {
    const [formData, setFormData] = useState(data || {
        title: "",
        leftBullets: [],
        rightBullets: [],
        image: { src: "", alt: "" },
        ctaLabel: "",
        ctaSubtitle: "",
        ctaLink: "",
        themeColor: "c1-color"
    });

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const updateField = (field: string, value: any) => {
        const newData = { ...formData, [field]: value };
        setFormData(newData);
        onChange(newData);
    };

    const updateImage = (field: string, value: string) => {
        const newImage = { ...formData.image, [field]: value };
        updateField("image", newImage);
    };

    const handleBulletChange = (side: "leftBullets" | "rightBullets", index: number, value: string) => {
        const newBullets = [...formData[side]];
        newBullets[index] = value;
        updateField(side, newBullets);
    };

    const addBullet = (side: "leftBullets" | "rightBullets") => {
        const newBullets = [...formData[side], ""];
        updateField(side, newBullets);
    };

    const removeBullet = (side: "leftBullets" | "rightBullets", index: number) => {
        const newBullets = [...formData[side]];
        newBullets.splice(index, 1);
        updateField(side, newBullets);
    };

    return (
        <div className="space-y-6 p-4 text-white">
            <div className="space-y-2">
                <div className="flex justify-between">
                    <label className="text-xs font-bold uppercase text-slate-400">Section Title (H2)</label>
                    <span className={`text-xs ${formData.title?.length > 70 ? 'text-red-400' : 'text-slate-500'}`}>
                        {formData.title?.length || 0}/70 characters
                    </span>
                </div>
                <input
                    value={formData.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    className="w-full bg-slate-800 border-slate-700 rounded p-2 text-sm focus:border-teal-500 outline-none transition-colors"
                />
                {formData.title?.length > 70 && <p className="text-xs text-red-400">Title is too long for optimal SEO.</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400 flex justify-between">
                        Left Bullets <button onClick={() => addBullet("leftBullets")}><Plus size={14} /></button>
                    </label>
                    {formData.leftBullets?.map((bullet: string, i: number) => (
                        <div key={i} className="flex gap-2">
                            <input
                                value={bullet}
                                onChange={(e) => handleBulletChange("leftBullets", i, e.target.value)}
                                className="w-full bg-slate-800 border-slate-700 rounded p-2 text-sm"
                            />
                            <button onClick={() => removeBullet("leftBullets", i)} className="text-red-400"><Trash2 size={14} /></button>
                        </div>
                    ))}
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400 flex justify-between">
                        Right Bullets <button onClick={() => addBullet("rightBullets")}><Plus size={14} /></button>
                    </label>
                    {formData.rightBullets?.map((bullet: string, i: number) => (
                        <div key={i} className="flex gap-2">
                            <input
                                value={bullet}
                                onChange={(e) => handleBulletChange("rightBullets", i, e.target.value)}
                                className="w-full bg-slate-800 border-slate-700 rounded p-2 text-sm"
                            />
                            <button onClick={() => removeBullet("rightBullets", i)} className="text-red-400"><Trash2 size={14} /></button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4 border-t border-slate-700 pt-4">
                <label className="text-xs font-bold uppercase text-slate-400">Image Configuration</label>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs text-slate-500">Source URL</label>
                        <input
                            placeholder="Image URL"
                            value={formData.image?.src || ""}
                            onChange={(e) => updateImage("src", e.target.value)}
                            className="w-full bg-slate-800 border-slate-700 rounded p-2 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between">
                            <label className="text-xs text-slate-500">Alt Text <span className="text-red-400">*</span></label>
                            <span className={`text-xs ${formData.image?.alt?.length > 100 ? 'text-orange-400' : 'text-slate-500'}`}>
                                {formData.image?.alt?.length || 0} chars
                            </span>
                        </div>
                        <input
                            placeholder="Describe image for accessiblity"
                            value={formData.image?.alt || ""}
                            onChange={(e) => updateImage("alt", e.target.value)}
                            className={`w-full bg-slate-800 border rounded p-2 text-sm ${!formData.image?.alt ? 'border-red-500/50 bg-red-500/10' : 'border-slate-700'}`}
                        />
                        {!formData.image?.alt && <p className="text-xs text-red-500">Required for SEO and A11y.</p>}
                    </div>
                </div>
            </div>

// ... imports
            import SplitFeatureSection from "@/components/sections/SplitFeatureSection";

            // ... inside component
            <div className="space-y-4 border-t border-slate-700 pt-4">
                <label className="text-xs font-bold uppercase text-slate-400">Call to Action</label>
                <div className="grid grid-cols-3 gap-4">
                    <input
                        placeholder="Label"
                        value={formData.ctaLabel || ""}
                        onChange={(e) => updateField("ctaLabel", e.target.value)}
                        className="bg-slate-800 border-slate-700 rounded p-2 text-sm"
                    />
                    <input
                        placeholder="Subtitle"
                        value={formData.ctaSubtitle || ""}
                        onChange={(e) => updateField("ctaSubtitle", e.target.value)}
                        className="bg-slate-800 border-slate-700 rounded p-2 text-sm"
                    />
                    <input
                        placeholder="Link URL"
                        value={formData.ctaLink || ""}
                        onChange={(e) => updateField("ctaLink", e.target.value)}
                        className="bg-slate-800 border-slate-700 rounded p-2 text-sm"
                    />
                </div>
            </div>

            <div className="space-y-2 border-t border-slate-700 pt-4">
                <label className="text-xs font-bold uppercase text-teal-400">Live Preview</label>
                <div className="border border-slate-700 rounded-lg overflow-hidden bg-black/50 p-4">
                    <SplitFeatureSection
                        title={formData.title}
                        leftBullets={formData.leftBullets}
                        rightBullets={formData.rightBullets}
                        image={formData.image}
                        ctaLabel={formData.ctaLabel}
                        ctaSubtitle={formData.ctaSubtitle}
                        ctaLink={formData.ctaLink}
                        themeColor={formData.themeColor}
                    />
                </div>
            </div>
        </div>
    );
}
