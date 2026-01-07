"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSolutionById, createSolution, updateSolution } from "@/app/actions/solutions";
import { toast } from "sonner";

export default function EditSolution({ params }: { params: Promise<{ id: string }> }) {
    const { id: routeId } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [isNew, setIsNew] = useState(false);
    const [id, setId] = useState<string>("");

    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        slug: "",
        excerpt: "",
        description: "",
        iconUrl: "",
        bgUrl: "",
        thumbnailUrl: "",
    });

    useEffect(() => {
        setId(routeId);
        if (routeId === "new") {
            setIsNew(true);
            setFetching(false);
        } else {
            fetchSolution(routeId);
        }
    }, [routeId]);

    const fetchSolution = async (solutionId: string) => {
        setFetching(true);
        try {
            const data = await getSolutionById(solutionId);
            if (data) {
                setFormData({
                    title: data.title || "",
                    subtitle: data.subtitle || "",
                    slug: data.slug || "",
                    excerpt: data.excerpt || "",
                    description: data.description || "",
                    iconUrl: data.iconUrl || "",
                    bgUrl: data.bgUrl || "",
                    thumbnailUrl: data.thumbnailUrl || "",
                });
            } else {
                toast.error("Solution not found");
                router.push("/admin/solutions");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch solution");
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isNew) {
                await createSolution(formData);
                toast.success("Solution created successfully!");
                router.push("/admin/solutions");
            } else {
                await updateSolution(id, formData);
                toast.success("Solution updated successfully!");
                router.refresh();
                router.push("/admin/solutions");
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
        <div className="max-w-4xl mx-auto p-8 animate-in fade-in duration-500">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/solutions"
                    className="p-2 bg-white border-2 border-slate-200 text-slate-500 rounded-lg hover:border-black hover:text-black transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-3xl font-black text-slate-900">
                        {isNew ? "Create New Solution" : "Edit Solution"}
                    </h1>
                    <p className="text-slate-500 font-medium">
                        {isNew ? "Add a new area of expertise" : `Editing ${formData.title}`}
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
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-900 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                placeholder="e.g. Digital Transformation"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Subtitle</label>
                            <input
                                type="text"
                                value={formData.subtitle}
                                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                placeholder="e.g. Future-Ready Tech"
                            />
                        </div>
                    </div>

                    {!isNew && (
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Slug</label>
                            <input
                                type="text"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Excerpt</label>
                        <textarea
                            rows={3}
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all resize-none"
                            placeholder="Short summary for cards..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Full Description (HTML)</label>
                        <textarea
                            rows={6}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-700 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all resize-none"
                            placeholder="<p>Detailed content goes here...</p>"
                        />
                        <p className="text-xs text-slate-400 font-bold">Supports basic HTML tags.</p>
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
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                placeholder="/assets/icons/..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Thumbnail URL</label>
                            <input
                                type="text"
                                value={formData.thumbnailUrl}
                                onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                placeholder="/assets/thumbnails/..."
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Background Image URL</label>
                            <input
                                type="text"
                                value={formData.bgUrl}
                                onChange={(e) => setFormData({ ...formData, bgUrl: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                placeholder="/assets/images/..."
                            />
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
                        {isNew ? "Create Solution" : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
}
