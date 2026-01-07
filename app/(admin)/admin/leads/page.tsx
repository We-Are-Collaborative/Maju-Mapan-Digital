"use strict";
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Trash2, ArrowLeft, MessageSquare, CheckCircle, Clock } from "lucide-react";
import { getLeadsAdmin, deleteLead, updateLeadStatus } from "@/app/actions/leads";
import { toast } from "sonner";
import { format } from "date-fns";

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

    const handleStatusToggle = async (lead: any) => {
        const newStatus = lead.status === "new" ? "contacted" : "new";
        try {
            await updateLeadStatus(lead.id, newStatus);
            toast.success(`Status updated to ${newStatus}`);
            // Optimistic update
            setLeads(leads.map(l => l.id === lead.id ? { ...l, status: newStatus } : l));
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    const filteredLeads = leads.filter(l =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.email.toLowerCase().includes(search.toLowerCase()) ||
        l.service.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8 p-8 max-w-6xl mx-auto animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Leads & Inquiries</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage contact form submissions.</p>
                </div>
                {/* Search Bar */}
                <div className="relative max-w-sm w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search leads..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium transition-all"
                    />
                </div>
            </div>

            {/* Leads List */}
            <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b-2 border-slate-100">
                            <tr>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Name / Contact</th>
                                <th className="px-6 py-4">Service</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center text-slate-500 font-bold">
                                        Loading leads...
                                    </td>
                                </tr>
                            ) : filteredLeads.length > 0 ? (
                                filteredLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors group">
                                        <td className="px-6 py-4 align-top">
                                            <button
                                                onClick={() => handleStatusToggle(lead)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-2 transition-all active:scale-95 ${lead.status === 'new'
                                                    ? 'bg-lime-100 text-lime-700 border-lime-200 hover:bg-lime-200'
                                                    : 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200'
                                                    }`}
                                            >
                                                {lead.status === 'new' ? <Clock size={14} /> : <CheckCircle size={14} />}
                                                {lead.status}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            <div className="font-bold text-slate-900 text-lg">{lead.name}</div>
                                            <div className="text-sm text-slate-500 font-medium">{lead.email}</div>
                                            <div className="text-sm text-slate-400 font-mono mt-1">{lead.whatsapp}</div>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase tracking-wide">
                                                {lead.service}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 align-top text-sm font-medium text-slate-500">
                                            {format(new Date(lead.createdAt), 'MMM d, yyyy')}
                                            <div className="text-xs text-slate-400">{format(new Date(lead.createdAt), 'HH:mm')}</div>
                                        </td>
                                        <td className="px-6 py-4 align-top text-right flex justify-end gap-2 items-center">
                                            {lead._count?.chatSessions > 0 && (
                                                <Link
                                                    href={`/admin/settings/database?model=ChatSession&leadId=${lead.id}`}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 transition-colors"
                                                    title="View Conversation"
                                                >
                                                    <MessageSquare size={14} />
                                                    View Chat
                                                </Link>
                                            )}
                                            <button
                                                onClick={() => handleDelete(lead.id)}
                                                className="p-2.5 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                                title="Delete Lead"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
                                                <MessageSquare size={32} />
                                            </div>
                                            <p className="text-slate-500 font-bold text-lg">No leads found.</p>
                                            <p className="text-slate-400 text-sm">Waiting for new inquiries...</p>
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
