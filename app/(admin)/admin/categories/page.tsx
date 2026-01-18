"use strict";
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Trash2, Tag, Layers } from "lucide-react";
import { getCategoriesAdmin, createCategory, deleteCategory } from "@/app/actions/categories";
import { toast } from "sonner";
import AdminHeader from "../../components/AdminHeader";

export default function CategoriesManager() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const data = await getCategoriesAdmin();
            setCategories(data);
        } catch (error) {
            toast.error("Failed to fetch categories");
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async () => {
        const name = prompt("Enter Category Name:");
        if (!name) return;
        try {
            await createCategory(name);
            toast.success("Category created");
            fetchCategories();
        } catch (error) {
            toast.error("Failed to create category");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this category?")) return;
        try {
            await deleteCategory(id);
            toast.success("Category deleted");
            fetchCategories();
        } catch (error) {
            toast.error("Failed to delete category");
        }
    };

    const filteredCategories = categories.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-8 p-8  animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                    <AdminHeader
                        defaultTitle="Categories"
                        defaultSubtitle="Organize articles and careers."
                    />
                </div>
                <button
                    onClick={handleCreate}
                    className="px-6 py-3 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-lg shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                    <Plus size={20} />
                    Add Category
                </button>
            </div>

            {/* Search */}
            <div className="relative max-w-sm w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search categories..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/50 border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 font-medium focus:outline-none focus:border-lime-400"
                />
            </div>

            {/* List */}
            <div className="bg-white/90 border-2 border-slate-200 rounded-3xl overflow-hidden shadow-xl">
                <div className="divide-y divide-slate-100">
                    {loading ? (
                        <div className="p-12 text-center font-bold text-slate-400">Loading...</div>
                    ) : filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <div key={category.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                        <Tag size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-slate-900">{category.name}</h3>
                                        <div className="flex gap-2 mt-1">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">/{category.slug}</span>
                                            {(category._count?.articles > 0 || category._count?.careers > 0) && (
                                                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-[2px] rounded-full flex items-center gap-1">
                                                    <Layers size={10} /> {category._count.articles + category._count.careers} Items
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                    className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center">
                            <p className="text-slate-500 font-bold">No categories found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
