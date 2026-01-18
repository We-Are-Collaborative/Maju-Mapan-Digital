'use client';

import React, { useEffect, useState } from 'react';
import { getNewsletterSubscriptions, deleteNewsletterSubscription } from '@/app/actions/newsletter';
import { format } from 'date-fns';
import { Mail, Trash2, Search, Download, Clock, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function NewsletterAdmin() {
    const [subscriptions, setSubscriptions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        setIsLoading(true);
        const data = await getNewsletterSubscriptions();
        setSubscriptions(data);
        setIsLoading(false);
    }

    async function handleDelete(id: string) {
        if (!confirm('Are you sure you want to remove this subscription?')) return;

        const res = await deleteNewsletterSubscription(id);
        if (res.success) {
            toast.success('Subscription deleted');
            loadData();
        } else {
            toast.error('Failed to delete');
        }
    }

    const filtered = subscriptions.filter(s =>
        s.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex-1">
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter sm:text-6xl mb-4">
                        Newsletter <span className="text-brand-500">Audience</span>
                    </h1>
                    <p className="text-slate-500 text-lg font-bold max-w-2xl leading-relaxed">
                        Manage your insider list and export audience data for marketing campaigns.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center gap-6 shadow-sm px-8">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Audience</span>
                            <span className="text-3xl font-black text-slate-900 leading-none">{subscriptions.length}</span>
                        </div>
                    </div>
                    <button className="h-16 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                        <Download size={18} />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search by email..."
                        className="w-full pl-14 pr-6 h-16 bg-white border-2 border-slate-100 rounded-2xl text-lg font-bold focus:outline-none focus:border-brand-500 transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b-2 border-slate-100">
                            <tr>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Email Address</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Status</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Subscribed At</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan={4} className="px-8 py-10"><div className="h-4 bg-slate-100 rounded w-full"></div></td>
                                    </tr>
                                ))
                            ) : filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center text-slate-400 font-bold text-lg">No subscriptions found</td>
                                </tr>
                            ) : (
                                filtered.map((sub) => (
                                    <tr key={sub.id} className="group hover:bg-slate-50/80 transition-colors">
                                        <td className="px-8 py-10 align-middle">
                                            <div className="flex items-center gap-4">
                                                <div className="size-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                                                    <Mail size={24} />
                                                </div>
                                                <span className="text-xl font-black text-slate-900 tracking-tight">{sub.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-10 align-middle">
                                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-widest border border-emerald-100">
                                                <CheckCircle2 size={14} /> Active
                                            </span>
                                        </td>
                                        <td className="px-8 py-10 align-middle">
                                            <div className="flex flex-col gap-1">
                                                <div className="text-sm font-black text-slate-900 flex items-center gap-2">
                                                    <Clock size={16} className="text-slate-400" />
                                                    {format(new Date(sub.createdAt), 'MMM d, yyyy')}
                                                </div>
                                                <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter pl-6">{format(new Date(sub.createdAt), 'HH:mm')}</div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-10 align-middle text-right">
                                            <button
                                                onClick={() => handleDelete(sub.id)}
                                                className="size-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all border border-rose-100 shadow-md ml-auto"
                                            >
                                                <Trash2 size={24} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
