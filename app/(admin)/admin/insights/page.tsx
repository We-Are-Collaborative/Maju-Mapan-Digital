"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit, Plus, Search, Trash2, ArrowLeft, FileText } from "lucide-react";
import { getArticlesAdmin, deleteArticle } from "@/app/actions/articles";
import { toast } from "sonner";

export default function InsightsManager() {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const data = await getArticlesAdmin();
            setArticles(data);
        } catch (error) {
            console.error("Failed to fetch articles:", error);
            toast.error("Failed to fetch articles");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this article? This cannot be undone.")) return;
        try {
            await deleteArticle(id);
            toast.success("Article deleted successfully");
            fetchArticles();
        } catch (error) {
            toast.error("Failed to delete article");
        }
    };

    const filteredArticles = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-8 p-8  animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <Link href="/admin" className="text-slate-500 hover:text-slate-900 flex items-center gap-2 mb-2 font-bold text-sm uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Dashboard
                    </Link>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Insights Manager</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage your articles and blog posts.</p>
                </div>
                <Link
                    href="/admin/insights/new"
                    className="px-6 py-3 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-lg shadow-lg shadow-lime-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add New Article
                </Link>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium transition-all"
                />
            </div>

            {/* Articles List */}
            <div className="grid grid-cols-1 gap-4">
                {loading ? (
                    <div className="py-20 text-center">
                        <div className="w-12 h-12 border-4 border-slate-200 border-t-lime-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-500 font-bold">Loading articles...</p>
                    </div>
                ) : filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <div key={article.id} className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-lime-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-lime-50 text-lime-700 rounded-xl border-2 border-lime-100 group-hover:scale-110 transition-transform relative overflow-hidden">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900">{article.title}</h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                            /{article.slug}
                                        </span>
                                        {article.category && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900 px-2 py-0.5 rounded">
                                                {article.category.name}
                                            </span>
                                        )}
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${article.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            {article.status}
                                        </span>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2 line-clamp-1">{article.excerpt}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href={`/admin/insights/${article.id}`}
                                    className="px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-lg hover:border-black hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2"
                                >
                                    <Edit size={16} /> Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(article.id)}
                                    className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                    title="Delete Article"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white/50 border-2 border-dashed border-slate-300 rounded-3xl">
                        <p className="text-slate-500 font-bold text-lg">No articles found.</p>
                        <Link href="/admin/insights/new" className="text-lime-600 font-bold hover:underline mt-2 inline-block">
                            Create your first article
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
