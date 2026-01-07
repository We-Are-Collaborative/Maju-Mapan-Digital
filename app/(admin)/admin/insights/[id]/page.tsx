"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { getArticleById, createArticle, updateArticle, getCategoriesForSelect } from "@/app/actions/articles";
import { toast } from "sonner";

export default function EditInsight({ params }: { params: Promise<{ id: string }> }) {
    const { id: routeId } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [isNew, setIsNew] = useState(false);
    const [id, setId] = useState<string>("");
    const [categories, setCategories] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        thumbnailUrl: "",
        status: "draft",
        isFeatured: false,
        categoryId: "",
    });

    useEffect(() => {
        const init = async () => {
            // Fetch categories first
            try {
                const cats = await getCategoriesForSelect();
                setCategories(cats);
            } catch (e) {
                console.error("Failed to fetch categories", e);
            }

            setId(routeId);
            if (routeId === "new") {
                setIsNew(true);
                setFetching(false);
            } else {
                fetchArticle(routeId);
            }
        };
        init();
    }, [routeId]);

    const fetchArticle = async (articleId: string) => {
        setFetching(true);
        try {
            const data = await getArticleById(articleId);
            if (data) {
                setFormData({
                    title: data.title || "",
                    slug: data.slug || "",
                    excerpt: data.excerpt || "",
                    content: data.content || "",
                    thumbnailUrl: data.thumbnailUrl || "",
                    status: data.status || "draft",
                    isFeatured: data.isFeatured || false,
                    categoryId: data.categoryId || "",
                });
            } else {
                toast.error("Article not found");
                router.push("/admin/insights");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch article");
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isNew) {
                await createArticle(formData);
                toast.success("Article created successfully!");
                router.push("/admin/insights");
            } else {
                await updateArticle(id, formData);
                toast.success("Article updated successfully!");
                router.refresh();
                router.push("/admin/insights");
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
        <div className="max-w-5xl mx-auto p-8 animate-in fade-in duration-500">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/insights"
                    className="p-2 bg-white border-2 border-slate-200 text-slate-500 rounded-lg hover:border-black hover:text-black transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-3xl font-black text-slate-900">
                        {isNew ? "Create New Article" : "Edit Article"}
                    </h1>
                    <p className="text-slate-500 font-medium">
                        {isNew ? "Write a new blog post" : `Editing ${formData.title}`}
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Title</label>
                            <input
                                required
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-900 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all text-lg"
                                placeholder="Article Title"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Slug</label>
                            <input
                                required
                                type="text"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-600 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                placeholder="article-slug-url"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Excerpt</label>
                            <textarea
                                rows={3}
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all resize-none"
                                placeholder="Short summary..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Content (HTML)</label>
                            <textarea
                                rows={15}
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-700 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                placeholder="<p>Write your article content here...</p>"
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Options */}
                <div className="space-y-6">
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
                        <h3 className="text-lg font-black text-slate-900">Publishing</h3>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Category</label>
                            <select
                                value={formData.categoryId}
                                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                            >
                                <option value="">Select Category...</option>
                                {categories.map((c) => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <input
                                type="checkbox"
                                id="featured"
                                checked={formData.isFeatured}
                                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                                className="w-5 h-5 rounded border-gray-300 text-lime-500 focus:ring-lime-500"
                            />
                            <label htmlFor="featured" className="text-sm font-bold text-slate-900 select-none cursor-pointer">Featured Article</label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-xl shadow-xl shadow-lime-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                            {isNew ? "Publish" : "Update"}
                        </button>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
                        <h3 className="text-lg font-black text-slate-900">Media</h3>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Thumbnail URL</label>
                            <div className="relative">
                                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    value={formData.thumbnailUrl}
                                    onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 font-mono text-sm text-slate-600 focus:outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 transition-all"
                                    placeholder="/assets/images/..."
                                />
                            </div>
                            {formData.thumbnailUrl && (
                                <div className="mt-4 rounded-xl overflow-hidden border-2 border-slate-200 aspect-video bg-slate-100">
                                    <img src={formData.thumbnailUrl} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
