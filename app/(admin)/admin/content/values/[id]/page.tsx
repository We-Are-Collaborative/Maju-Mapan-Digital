"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getValueById, createValue, updateValue } from "@/app/actions/values";
import { toast } from "sonner";

export default function EditValue({ params }: { params: Promise<{ id: string }> }) {
    const { id: routeId } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [isNew, setIsNew] = useState(false);

    // Unwrap params using React.use() or await in async component
    // Since this is a client component, we should handle the promise or rely on Next.js 15+ param unwrapping if available. 
    // But for safety in current context (Next 16 mentioned in package.json, params are async), let's use useEffect to unwrap or assume async compatibility.
    // Actually, in client components in Next.js 15/16, params is a Promise. We need to unwrap it.
    const [id, setId] = useState<string>("");

    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        slug: "",
        description: "",
        iconUrl: "",
        bgUrl: "",
    });

    useEffect(() => {
        setId(routeId);
        if (routeId === "new") {
            setIsNew(true);
            setFetching(false);
        } else {
            fetchValue(routeId);
        }
    }, [routeId]);

    const fetchValue = async (valueId: string) => {
        setFetching(true);
        try {
            const data = await getValueById(valueId);
            if (data) {
                setFormData({
                    title: data.title || "",
                    subtitle: data.subtitle || "",
                    slug: data.slug || "",
                    description: data.excerpt || "", // Mapping excerpt/description
                    iconUrl: data.iconUrl || "",
                    bgUrl: data.bgUrl || "",
                });
            } else {
                toast.error("Value not found");
                router.push("/admin/values");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch value");
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isNew) {
                await createValue(formData);
                toast.success("Value created successfully!");
                router.push("/admin/values");
            } else {
                await updateValue(id, formData);
                toast.success("Value updated successfully!");
                router.refresh();
                router.push("/admin/values");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Loader2 className="animate-spin text-lime-500" size={48} />
            </div>
        );
    }

    return (
        <div className=" p-8 animate-in fade-in duration-500">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/values"
                    className="p-2 bg-white border-2 border-slate-200 text-slate-500 rounded-lg hover:border-black hover:text-black transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-3xl font-black text-slate-900">
                        {isNew ? "Create New Value" : "Edit Value"}
                    </h1>
                    <p className="text-slate-500 font-medium">
                        {isNew ? "Add a new value proposition" : `Editing ${formData.title}`}
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Title</label>
                            <input
                                required
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all"
                                placeholder="e.g. Innovation"
                            />
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Used as the main heading in the interactive switcher.</p>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Subtitle</label>
                            <input
                                type="text"
                                value={formData.subtitle}
                                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all"
                                placeholder="e.g. Forward Thinking"
                            />
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Displayed as a colored prefix label.</p>
                        </div>
                    </div>

                    {!isNew && (
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Slug</label>
                            <input
                                type="text"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all"
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Description / Excerpt</label>
                        <textarea
                            rows={4}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all resize-none"
                            placeholder="Brief description of the value..."
                        />
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Main body text for the value showcase.</p>
                    </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
                    <h3 className="text-lg font-black text-slate-900">Media</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Icon URL</label>
                            <input
                                type="text"
                                value={formData.iconUrl}
                                onChange={(e) => setFormData({ ...formData, iconUrl: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all"
                                placeholder="/assets/icons/..."
                            />
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ideally an SVG for crisp rendering on the brand-colored plate.</p>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Background Image URL</label>
                            <input
                                type="text"
                                value={formData.bgUrl}
                                onChange={(e) => setFormData({ ...formData, bgUrl: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all"
                                placeholder="/assets/images/..."
                            />
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">High-resolution imagery for the right-side showcase background.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-xl shadow-xl shadow-lime-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                        {isNew ? "Create Value" : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
}
