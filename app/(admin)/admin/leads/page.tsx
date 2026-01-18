"use strict";
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Trash2, ArrowLeft, MessageSquare, CheckCircle, Clock, Building2, Eye, Globe, History, User, Mail, Phone, MapPin, Activity, Flag, TrendingUp, XCircle, MoreVertical } from "lucide-react";
import { getLeadsAdmin, deleteLead, updateLeadStatus } from "@/app/actions/leads";
import { toast } from "sonner";
import { format } from "date-fns";
import AdminHeader from "../../components/AdminHeader";

export default function LeadsManager() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const data = await getLeadsAdmin();
            setLeads(data);
        } catch (error) {
            console.error("Failed to fetch leads:", error);
            toast.error("Failed to fetch leads");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this lead? This cannot be undone.")) return;
        try {
            await deleteLead(id);
            toast.success("Lead deleted successfully");
            fetchLeads();
        } catch (error) {
            toast.error("Failed to delete lead");
        }
    };

    const cycleStatus = async (lead: any) => {
        const statuses = ["new", "contacted", "converted", "lost"];
        const currentIndex = statuses.indexOf(lead.status);
        const nextIndex = (currentIndex + 1) % statuses.length;
        const newStatus = statuses[nextIndex];

        try {
            await updateLeadStatus(lead.id, newStatus);
            toast.success(`Status updated to ${newStatus}`);
            setLeads(leads.map(l => l.id === lead.id ? { ...l, status: newStatus } : l));
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'new': return 'bg-lime-100 text-lime-700 border-lime-200 hover:bg-lime-200';
            case 'contacted': return 'bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-200';
            case 'converted': return 'bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200';
            case 'lost': return 'bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200';
            default: return 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'new': return <Clock size={14} />;
            case 'contacted': return <MessageSquare size={14} />;
            case 'converted': return <TrendingUp size={14} />;
            case 'lost': return <XCircle size={14} />;
            default: return <Clock size={14} />;
        }
    };

    const formatHistory = (historyStr: string) => {
        if (!historyStr) return "N/A";
        try {
            const paths = JSON.parse(historyStr);
            if (!Array.isArray(paths)) return "N/A";
            const uniquePaths = Array.from(new Set(paths.map((p: string) => p.replace(/^\//, '').split('/')[0] || 'Home')));
            return uniquePaths.join(" → ");
        } catch (e) {
            return "N/A";
        }
    };

    const filteredLeads = leads.filter(l =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.email.toLowerCase().includes(search.toLowerCase()) ||
        l.service.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex-1">
                    <AdminHeader
                        defaultTitle="Leads & Inquiries"
                        defaultSubtitle="Manage contact form submissions."
                    />
                </div>
                {/* Search Bar */}
                <div className="relative w-full md:w-[400px]">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search leads..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all shadow-sm"
                    />
                </div>
            </div>

            {/* Leads List */}
            <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b-2 border-slate-100">
                            <tr>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Status</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Lead Info</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Service</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Inquiry Notes</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Intelligence / History</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Location</th>
                                <th className="px-8 py-8 text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-8 py-32 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lime-500"></div>
                                            <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">Syncing Leads...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredLeads.length > 0 ? (
                                filteredLeads.map((lead) => (
                                    <tr key={lead.id} className="group hover:bg-slate-50/80 transition-colors">
                                        {/* Status Column */}
                                        <td className="px-8 py-10 align-top">
                                            <button
                                                onClick={() => cycleStatus(lead)}
                                                className={`min-w-[130px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 border-2 transition-all active:scale-95 shadow-sm ${getStatusStyle(lead.status)}`}
                                            >
                                                {getStatusIcon(lead.status)}
                                                {lead.status}
                                            </button>
                                        </td>

                                        {/* Lead Info Column */}
                                        <td className="px-8 py-10 align-top">
                                            <div className="flex flex-col gap-2 min-w-[250px]">
                                                <div className="font-black text-slate-900 text-xl leading-tight flex items-center gap-3">
                                                    <User size={18} className="text-slate-400" />
                                                    {lead.name}
                                                </div>
                                                <div className="text-sm text-slate-500 font-bold flex items-center gap-3">
                                                    <Mail size={14} className="text-slate-400" />
                                                    {lead.email}
                                                </div>
                                                {lead.whatsapp && (
                                                    <div className="text-sm text-slate-400 font-mono bg-slate-100/50 px-3 py-1 rounded-lg w-fit flex items-center gap-2 mt-1">
                                                        <Phone size={12} className="text-slate-400" />
                                                        {lead.whatsapp}
                                                    </div>
                                                )}
                                            </div>
                                        </td>

                                        {/* Service Column */}
                                        <td className="px-8 py-10 align-top">
                                            <div className="flex flex-col gap-3">
                                                <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-black bg-white border-2 border-slate-100 text-slate-600 uppercase tracking-tighter shadow-sm w-fit">
                                                    {lead.service || "General Inquiry"}
                                                </span>
                                                {lead.company && (
                                                    <div className="text-xs font-bold text-slate-400 flex items-center gap-2">
                                                        <Building2 size={14} /> {lead.company}
                                                    </div>
                                                )}
                                            </div>
                                        </td>

                                        {/* Inquiry Notes Column */}
                                        <td className="px-8 py-10 align-top max-w-[400px]">
                                            <div className="space-y-3">
                                                {lead.notes ? (
                                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white transition-colors">
                                                        <p className="text-sm text-slate-700 font-bold leading-relaxed">
                                                            {lead.notes}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <span className="text-sm text-slate-300 italic">No notes provided</span>
                                                )}
                                            </div>
                                        </td>

                                        {/* Intelligence / History Column */}
                                        <td className="px-8 py-10 align-top">
                                            <div className="flex flex-col gap-3 min-w-[220px]">
                                                <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                                                    <Activity size={18} className="text-brand-500" />
                                                    Session DNA
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {lead.browsingHistory ? (
                                                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/50">
                                                            <History size={14} className="text-slate-400" />
                                                            {formatHistory(lead.browsingHistory)}
                                                        </div>
                                                    ) : (
                                                        <span className="text-xs text-slate-300 italic">No history captured</span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Location Column */}
                                        <td className="px-8 py-10 align-top">
                                            <div className="flex flex-col gap-2 items-end min-w-[150px]">
                                                <span className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-xl text-[10px] font-black uppercase tracking-widest border border-amber-100 shadow-sm">
                                                    <Flag size={12} /> {lead.source || "Organic"}
                                                </span>
                                                <div className="text-sm font-black text-slate-900 mt-2">{format(new Date(lead.createdAt), 'MMM d, yyyy')}</div>
                                                <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter">{format(new Date(lead.createdAt), 'HH:mm')}</div>
                                            </div>
                                        </td>

                                        {/* Actions Column */}
                                        <td className="px-8 py-10 align-top text-right">
                                            <div className="flex justify-end gap-3 items-center">
                                                {lead._count?.chatSessions > 0 && (
                                                    <Link
                                                        href={`/admin/settings/database?model=ChatSession&leadId=${lead.id}`}
                                                        className="size-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all border border-sky-100 shadow-md"
                                                        title="View History"
                                                    >
                                                        <Eye size={20} />
                                                    </Link>
                                                )}
                                                <button
                                                    onClick={() => handleDelete(lead.id)}
                                                    className="size-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all border border-rose-100 shadow-md"
                                                    title="Delete Lead"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-8 py-32 text-center">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-200">
                                                <MessageSquare size={40} />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2">No leads found</h3>
                                            <p className="text-slate-400 font-medium">Waiting for new inquiries to arrive.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
