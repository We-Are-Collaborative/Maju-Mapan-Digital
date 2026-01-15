"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Edit, Save, Trash2, ArrowUp, ArrowDown, GripVertical } from "lucide-react";
import { getNavMenu, toggleNavActive } from "@/app/actions/navigation"; // Need to ensure these exist and are exported
// We might need new actions for reordering/renaming NavMenu specifically

export default function MenuManager() {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        setLoading(true);
        const { getNavMenu } = await import("@/app/actions/navigation");
        // @ts-ignore
        const items = await getNavMenu("public");
        setMenuItems(items);
        setLoading(false);
    };

    const handleToggle = async (id: string, current: boolean) => {
        const { toggleNavActive } = await import("@/app/actions/navigation");
        await toggleNavActive(id, !current);
        fetchMenu();
    };

    const handleMove = async (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === menuItems.length - 1) return;

        const newItems = [...menuItems];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        // Swap
        [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];

        // Update local state optimizing for speed
        const reordered = newItems.map((item, idx) => ({ ...item, order: idx }));
        setMenuItems(reordered);

        // Server action
        const { reorderNavMenu } = await import("@/app/actions/navigation");
        await reorderNavMenu(reordered.map(i => ({ id: i.id, order: i.order })));
        fetchMenu();
    };

    return (
        <div className="space-y-8 p-8  animate-in fade-in duration-700">
            <div className="flex items-center gap-4">
                <Link href="/admin/content" className="p-3 bg-white border-2 border-slate-200 rounded-xl text-slate-500 hover:text-black hover:border-black hover:shadow-md transition-all active:scale-95 cursor-pointer">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Menu Manager</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage your public website navigation.</p>
                </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="space-y-2">
                    {loading ? (
                        <div className="py-20 text-center">
                            <div className="w-12 h-12 border-4 border-slate-200 border-t-lime-500 rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-slate-500 font-bold">Loading menu...</p>
                        </div>
                    ) : menuItems.length > 0 ? (
                        menuItems.map((item, index) => (
                            <div key={item.id} className="flex items-center justify-between p-4 border-2 border-slate-100 rounded-xl hover:border-lime-200 transition-colors bg-white">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col gap-1">
                                        <button
                                            onClick={() => handleMove(index, 'up')}
                                            disabled={index === 0}
                                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-900 disabled:opacity-20"
                                        >
                                            <ArrowUp size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleMove(index, 'down')}
                                            disabled={index === menuItems.length - 1}
                                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-900 disabled:opacity-20"
                                        >
                                            <ArrowDown size={16} />
                                        </button>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">{item.label}</div>
                                        <div className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded inline-block">
                                            {item.path}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => handleToggle(item.id, item.isActive)}
                                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border-2 transition-all ${item.isActive
                                                ? "bg-lime-100 text-lime-700 border-lime-200 hover:bg-lime-200"
                                                : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
                                            }`}
                                    >
                                        {item.isActive ? "Active" : "Inactive"}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-xl border-dashed border-2 border-slate-200">
                            No menu items found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
