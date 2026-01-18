"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit, Plus, Search, Trash2, ArrowLeft, Zap, Sparkles } from "lucide-react";
import { getSolutionsAdmin, deleteSolution } from "@/app/actions/solutions";
import AdminHeader from "../../components/AdminHeader";

export default function SolutionsManager() {
    const [solutions, setSolutions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchSolutions();
    }, []);

    const fetchSolutions = async () => {
        setLoading(true);
        try {
            const data = await getSolutionsAdmin();
            setSolutions(data);
        } catch (error) {
            console.error("Failed to fetch solutions:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this solution? This cannot be undone.")) return;
        await deleteSolution(id);
        fetchSolutions();
    };

    const filteredSolutions = solutions.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex-1">
                    <AdminHeader
                        defaultTitle="Solutions & Services"
                        defaultSubtitle="Manage your service portfolio and offerings."
                    />
                </div>
                <Link href="/admin/solutions/new">
                    <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                        <Plus className="size-5" />
                        <span>Add Solution</span>
                    </button>
                </Link>
            </div>

            {/* Content Area */}
            <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative w-full md:max-w-xl">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search solutions..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all shadow-sm"
                    />
                </div>

                {/* Solutions List */}
                <div className="grid grid-cols-1 gap-6">
                    {loading ? (
                        <div className="py-32 text-center bg-white rounded-[2.5rem] border-4 border-slate-100 border-dashed">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-lime-500 mx-auto mb-4"></div>
                            <p className="text-slate-400 font-bold uppercase tracking-wider text-sm">Loading services...</p>
                        </div>
                    ) : filteredSolutions.length > 0 ? (
                        filteredSolutions.map((solution) => (
                            <div key={solution.id} className="group bg-white rounded-[2.5rem] p-8 border-4 border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-lime-200 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center gap-8">
                                    <div className="size-20 bg-lime-50 text-lime-600 rounded-3xl border-2 border-lime-100 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-sm flex items-center justify-center shrink-0">
                                        {solution.iconUrl ? (
                                            <img src={solution.iconUrl} alt="icon" className="w-10 h-10 object-contain" />
                                        ) : (
                                            <Zap size={32} />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-lime-700 transition-colors">{solution.title}</h3>
                                        <p className="text-slate-500 font-medium text-sm line-clamp-1 max-w-2xl mt-1">{solution.subtitle || solution.excerpt || "No description provided."}</p>
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 pt-2">
                                            <span>/{solution.slug}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pl-6 border-l-2 border-slate-50">
                                    <Link
                                        href={`/admin/solutions/${solution.id}`}
                                        className="size-12 bg-slate-50 border-2 border-slate-100 text-slate-600 rounded-xl flex items-center justify-center hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all"
                                        title="Edit Solution"
                                    >
                                        <Edit size={20} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(solution.id)}
                                        className="size-12 bg-rose-50 border-2 border-rose-100 text-rose-600 rounded-xl flex items-center justify-center hover:border-rose-300 hover:bg-white hover:shadow-lg transition-all"
                                        title="Delete Solution"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-32 bg-white rounded-[2.5rem] border-4 border-dashed border-slate-200">
                            <Sparkles className="size-16 text-slate-300 mx-auto mb-6" />
                            <p className="text-xl font-black text-slate-900 mb-2">No solutions found.</p>
                            <p className="text-slate-500 font-medium mb-6">Create your first service offering.</p>
                            <Link href="/admin/solutions/new" className="px-6 py-3 bg-lime-400 text-slate-900 font-bold rounded-xl hover:bg-lime-500 transition-colors inline-flex items-center gap-2">
                                <Plus size={18} />
                                Add Solution
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
