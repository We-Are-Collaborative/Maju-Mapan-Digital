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
        <div className="space-y-[30px] p-[30px] w-full mx-auto animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white/40 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/20 gap-6">
                <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[.3em] mb-2 block">Client Network</span>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Brand Portfolio</h1>
                </div>
                <button className="bg-slate-900 text-white rounded-[2rem] px-8 py-5 font-bold flex items-center gap-3 hover:bg-black transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                    <Plus size={20} />
                    <span>Onboard New Client</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                {brands.map((brand) => (
                    <Link
                        href={`/admin/mapan/brands/${brand.slug}`}
                        key={brand.id}
                        className="group relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] border-4 border-slate-50 p-3 hover:border-lime-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] bg-slate-50/50 rounded-[2rem] relative flex items-center justify-center p-12 overflow-hidden transition-colors border-2 border-slate-50 group-hover:border-lime-50">
                            {brand.logoUrl ? (
                                <img src={brand.logoUrl} alt={brand.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                            ) : (
                                <div className="text-6xl font-black text-slate-200 uppercase tracking-tighter group-hover:text-lime-200 transition-colors">{brand.name.substring(0, 2)}</div>
                            )}

                            {/* Hover Overlay Action */}
                            <div className="absolute inset-0 bg-lime-500/0 group-hover:bg-lime-500/5 transition-colors pointer-events-none"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-black text-slate-900 text-xl tracking-tight group-hover:text-lime-600 transition-colors">{brand.name}</h3>
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Managed Asset</p>
                                </div>
                                <div className="bg-lime-50 text-lime-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-lime-100">
                                    Active
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-100/50">
                                <div className="flex items-center gap-3 text-xs text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
                                    <div className="size-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-lime-50 transition-colors">
                                        <Globe size={14} className="group-hover:text-lime-500" />
                                    </div>
                                    <span className="truncate">{brand.website ? brand.website.replace(/^https?:\/\//, '') : 'No Site'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-900 font-black">
                                    <div className="size-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                        <DollarSign size={14} />
                                    </div>
                                    <span>{brand.totalSpend > 0 ? `${(brand.totalSpend / 1000).toFixed(1)}k` : '0'} <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-1">Spend</span></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
