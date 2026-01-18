'use client'

import React, { useEffect, useState } from 'react';
import { getBrandPortfolio } from '@/app/actions/mapan';
import { Loader2, Globe, DollarSign, Plus } from "lucide-react";
import Link from 'next/link';

export default function MapanBrandsPage() {
    const [brands, setBrands] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const data = await getBrandPortfolio();
            setBrands(data);
            setLoading(false);
        };
        fetch();
    }, []);

    if (loading) {
        return (
            <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-lime-500" size={48} />
                <span className="text-sm font-black text-slate-400 uppercase tracking-[.3em]">Loading Portfolio</span>
            </div>
        );
    }

    return (
        <div className="space-y-12 p-8 w-full mx-auto animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[.3em] mb-2 block">Client Network</span>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Brand Portfolio</h1>
                </div>
                <button className="bg-slate-900 text-white rounded-2xl px-8 py-4 font-bold flex items-center gap-3 hover:bg-black transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <Plus size={20} />
                    <span>Onboard Client</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {brands.map((brand) => (
                    <div key={brand.id} className="group relative bg-white rounded-[2rem] border-2 border-slate-100 p-2 hover:border-lime-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                        {/* Image Container */}
                        <div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative flex items-center justify-center p-12 overflow-hidden group-hover:bg-white transition-colors">
                            {brand.logoUrl ? (
                                <img src={brand.logoUrl} alt={brand.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                                <div className="text-5xl font-black text-slate-200 uppercase tracking-tighter group-hover:text-lime-200 transition-colors">{brand.name.substring(0, 2)}</div>
                            )}

                            {/* Hover Overlay Action */}
                            <div className="absolute inset-0 bg-lime-500/0 group-hover:bg-lime-500/10 transition-colors pointer-events-none"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-extrabold text-slate-900 text-lg truncate group-hover:text-lime-600 transition-colors">{brand.name}</h3>
                                <div className="bg-slate-100 text-slate-500 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                    Active
                                </div>
                            </div>

                            <div className="space-y-3 mt-4">
                                <div className="flex items-center gap-3 text-xs text-slate-500 font-bold group-hover:text-slate-800 transition-colors">
                                    <Globe size={14} className="text-slate-300 group-hover:text-lime-500" />
                                    <span className="truncate">{brand.website ? brand.website.replace(/^https?:\/\//, '') : 'No Site'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-emerald-600 font-bold bg-emerald-50 w-fit px-3 py-1.5 rounded-lg border border-emerald-100">
                                    <DollarSign size={14} />
                                    <span>{brand.totalSpend > 0 ? `${(brand.totalSpend / 1000).toFixed(1)}k Total Spend` : 'No Spend Recorded'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
