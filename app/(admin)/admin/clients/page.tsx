"use strict";
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Trash2, Building, ExternalLink } from "lucide-react";
import { getClientsAdmin, deleteClient, createClient } from "@/app/actions/clients";
import { toast } from "sonner";
import { SeoImageUpload } from "@/components/admin/seo-image-upload";

export default function ClientsManager() {
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        legalName: "",
        website: "",
        phone: "",
        address: "",
        logoUrl: "",
        logoAlt: "",
        brandColor: ""
    });

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        setLoading(true);
        try {
            const data = await getClientsAdmin();
            setClients(data);
        } catch (error) {
            console.error("Failed to fetch clients:", error);
            toast.error("Failed to fetch clients");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this client? This cannot be undone.")) return;
        try {
            await deleteClient(id);
            toast.success("Client deleted successfully");
            fetchClients();
        } catch (error) {
            toast.error("Failed to delete client");
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await createClient(formData);
            if (result.success) {
                toast.success("Client created successfully");
                setIsModalOpen(false);
                setFormData({ name: "", legalName: "", website: "", phone: "", address: "", logoUrl: "", logoAlt: "", brandColor: "" });
                fetchClients();
            } else {
                toast.error(result.error || "Failed to create client");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    };

    const filteredClients = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-8 p-8  animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Clients & Partners</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage client portfolios and case studies.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 bg-black text-white font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                    <Plus size={20} />
                    Add Client
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 scale-in-center">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">New Client</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 font-bold p-2 transition-colors">✕</button>
                        </div>
                        <form onSubmit={handleCreate} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Brand Name *</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Grab"
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-black outline-none transition-all font-medium text-slate-900"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Legal Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. PT Grab Teknologi Indonesia"
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-black outline-none transition-all font-medium text-slate-900"
                                        value={formData.legalName}
                                        onChange={e => setFormData({ ...formData, legalName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Website URL</label>
                                    <input
                                        type="url"
                                        placeholder="https://grab.com"
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-black outline-none transition-all font-medium text-slate-900"
                                        value={formData.website}
                                        onChange={e => setFormData({ ...formData, website: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="+62..."
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-black outline-none transition-all font-medium text-slate-900"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Address</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Office address..."
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-black outline-none transition-all font-medium resize-none text-slate-900"
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>
                                <div className="col-span-full space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Brand Identity (Logo)</label>
                                    {formData.logoUrl && (
                                        <div className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl flex items-center gap-4">
                                            <div className="size-16 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center p-2">
                                                <img src={formData.logoUrl} alt={formData.logoAlt || "Client logo"} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Current Active Asset</p>
                                                <p className="text-xs font-bold text-slate-900 truncate">{formData.logoAlt || "Missing ALT tag"}</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, logoUrl: "", logoAlt: "" })}
                                                className="text-xs font-black text-rose-500 uppercase tracking-widest hover:bg-rose-50 px-3 py-1.5 rounded-lg"
                                            >
                                                Replace
                                            </button>
                                        </div>
                                    )}
                                    <SeoImageUpload
                                        label="Logo Optimization"
                                        description="WebP + Smart Naming"
                                        suggestedName={`${formData.name || 'client'}-logo`.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                                        onUploadSuccess={({ url, alt }) => setFormData({ ...formData, logoUrl: url, logoAlt: alt })}
                                    />
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Brand Color (Hex Code)</label>
                                    <input
                                        type="text"
                                        placeholder="#000000"
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-black outline-none transition-all font-medium text-slate-900"
                                        value={formData.brandColor}
                                        onChange={e => setFormData({ ...formData, brandColor: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="pt-6 border-t border-slate-100 flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-3 text-slate-500 font-bold hover:text-slate-900 transition-colors uppercase tracking-widest text-xs"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-black text-white font-bold rounded-xl shadow-lg hover:shadow-black/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs"
                                >
                                    Create Client
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Search Bar */}
            <div className="relative max-w-sm w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search clients..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black font-medium transition-all"
                />
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <div className="col-span-full py-20 text-center text-slate-500 font-bold">
                        Loading clients...
                    </div>
                ) : filteredClients.length > 0 ? (
                    filteredClients.map((client) => (
                        <div key={client.id} className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-50 text-slate-900 rounded-xl border-2 border-slate-100 group-hover:scale-110 transition-transform overflow-hidden relative w-16 h-16 flex items-center justify-center">
                                        {client.logoUrl ? (
                                            <img src={client.logoUrl} alt={client.logoAlt || client.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <Building size={24} className="text-slate-400" />
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleDelete(client.id)}
                                        className="text-slate-300 hover:text-rose-500 transition-colors p-2"
                                        title="Delete Client"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-1">{client.name}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                                        /{client.slug}
                                    </span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider bg-black text-white px-2 py-0.5 rounded">
                                        {client.caseStudies?.length || 0} Case Studies
                                    </span>
                                </div>
                            </div>

                            <Link
                                href={`/admin/clients/${client.id}`}
                                className="w-full py-3 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-xl text-center hover:border-black hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                            >
                                Manage Case Studies <ExternalLink size={16} />
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                            <Building size={32} />
                        </div>
                        <p className="text-slate-500 font-bold text-lg">No clients found.</p>
                        <button onClick={() => setIsModalOpen(true)} className="text-slate-900 font-bold hover:underline mt-2">
                            Add your first client
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
