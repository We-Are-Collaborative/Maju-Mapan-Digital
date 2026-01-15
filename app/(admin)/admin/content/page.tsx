"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit, FileText, Plus, Search, Trash2, Menu, LayoutDashboard } from "lucide-react";
import { getAllPages, getSystemPages, createPage, deletePage } from "@/app/actions/pages";

export default function ContentManager() {
    const [pages, setPages] = useState<any[]>([]);
    const [systemPages, setSystemPages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("DEBUG: ContentManager Mounted");
        fetchPages();
    }, []);

    const fetchPages = async () => {
        setLoading(true);
        try {
            const [data, sysData] = await Promise.all([getAllPages(), getSystemPages()]);
            setPages(data);
            setSystemPages(sysData);
        } catch (error) {
            console.error("Failed to fetch pages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this page? This cannot be undone.")) return;
        await deletePage(id);
        fetchPages();
    };

    const handleCreate = async () => {
        const title = prompt("Enter page title:");
        if (!title) return;
        const slug = title.toLowerCase().replace(/ /g, "-");
        // Simplified create logic for demo
        await createPage(title, slug);
        fetchPages();
    };

    const filteredPages = pages.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-8 p-8  animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Content Manager</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage your website's pages and sections.</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="px-6 py-3 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-lg shadow-lg shadow-lime-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                    <Plus size={20} />
                    Create Page
                </button>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search pages..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium transition-all"
                />
            </div>

            {/* Global Elements */}
            <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Global Elements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Main Menu Card */}
                    <div className="group bg-slate-900 border-2 border-slate-900 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/10 text-lime-400 rounded-xl">
                                <Menu size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white">Main Navigation</h3>
                                <p className="text-slate-400 text-sm">Manage public menu items</p>
                            </div>
                        </div>
                        <Link
                            href="/admin/content/menu"
                            className="w-full py-3 bg-lime-400 text-slate-900 font-bold rounded-lg text-center hover:bg-lime-300 transition-colors flex items-center justify-center gap-2"
                        >
                            <Edit size={16} /> Edit Menu
                        </Link>
                    </div>

                    {/* Footer Card */}
                    {systemPages.map(page => (
                        <div key={page.id} className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-lime-400 hover:shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-lime-50 text-lime-600 rounded-xl">
                                    <LayoutDashboard size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900">{page.title}</h3>
                                    <p className="text-slate-500 text-sm">Universal site footer</p>
                                </div>
                            </div>
                            <Link
                                href={`/admin/content/edit/${page.id}`}
                                className="w-full py-3 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-lg text-center hover:border-black hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <Edit size={16} /> Edit Content
                            </Link>
                        </div>
                    ))}

                    {/* Values Card */}
                    <div className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-lime-400 hover:shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-900">Company Values</h3>
                                <p className="text-slate-500 text-sm">Core values and principles</p>
                            </div>
                        </div>
                        <Link
                            href="/admin/content/values"
                            className="w-full py-3 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-lg text-center hover:border-black hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <Edit size={16} /> Manage Values
                        </Link>
                    </div>
                </div>
            </div>

            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mt-8">Pages</h2>
            {/* Pages Grid */}
            <div className="grid grid-cols-1 gap-4">
                {loading ? (
                    <div className="py-20 text-center">
                        <div className="w-12 h-12 border-4 border-slate-200 border-t-lime-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-500 font-bold">Loading content...</p>
                    </div>
                ) : filteredPages.length > 0 ? (
                    filteredPages.map((page) => (
                        <div key={page.id} className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-lime-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-lime-50 text-lime-700 rounded-xl border-2 border-lime-100 group-hover:scale-110 transition-transform">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900">{page.title}</h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                            /{page.pageSlug}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            {page.sections?.length || 0} SECTIONS
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        const { toggleNavActive } = await import("@/app/actions/navigation");
                                        await toggleNavActive(page.navMenu?.id, !page.navMenu?.isActive);
                                        fetchPages();
                                    }}
                                    className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border-2 transition-all ${page.navMenu?.isActive
                                        ? "bg-lime-100 text-lime-700 border-lime-200 hover:bg-lime-200"
                                        : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
                                        }`}
                                >
                                    {page.navMenu?.isActive ? "Active" : "Inactive"}
                                </button>
                                <Link
                                    href={`/admin/content/edit/${page.id}`}
                                    className="px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-lg hover:border-black hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2"
                                >
                                    <Edit size={16} /> Edit Content
                                </Link>
                                <button
                                    onClick={() => handleDelete(page.id)}
                                    className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                    title="Delete Page"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white/50 border-2 border-dashed border-slate-300 rounded-3xl">
                        <p className="text-slate-500 font-bold text-lg">No pages found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
