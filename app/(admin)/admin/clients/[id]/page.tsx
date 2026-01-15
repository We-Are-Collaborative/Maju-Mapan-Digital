"use strict";
"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, Image as ImageIcon, Briefcase, ExternalLink } from "lucide-react";
import { getClientById, updateClient, createCaseStudy, updateCaseStudy, deleteCaseStudy } from "@/app/actions/clients";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ClientDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [client, setClient] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Case Study Form State
    const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
    const [editingCaseStudy, setEditingCaseStudy] = useState<any>(null);
    const [caseStudyForm, setCaseStudyForm] = useState<any>({});

    const router = useRouter();

    useEffect(() => {
        fetchData(id);
    }, [id]);

    const fetchData = async (clientId: string) => {
        setLoading(true);
        const data = await getClientById(clientId);
        if (!data) {
            toast.error("Client not found");
            router.push("/admin/clients");
            return;
        }
        setClient(data);
        setLoading(false);
    };

    const handleClientUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            await updateClient(client.id, {
                name: client.name,
                legalName: client.legalName,
                slug: client.slug,
                website: client.website,
                phone: client.phone,
                address: client.address,
                description: client.description,
                logoUrl: client.logoUrl,
                brandColor: client.brandColor,
                isFeatured: client.isFeatured
            });
            toast.success("Client updated successfully");
        } catch (error) {
            toast.error("Failed to update client");
        } finally {
            setSaving(false);
        }
    };

    const handleCaseStudySave = async () => {
        try {
            if (editingCaseStudy) {
                await updateCaseStudy(editingCaseStudy.id, caseStudyForm);
                toast.success("Case study updated");
            } else {
                await createCaseStudy({ ...caseStudyForm, clientId: client.id });
                toast.success("Case study created");
            }
            setIsCaseStudyModalOpen(false);
            fetchData(id);
        } catch (error) {
            toast.error("Failed to save case study");
        }
    };

    const handleDeleteCaseStudy = async (caseStudyId: string) => {
        if (!confirm("Delete this case study?")) return;
        await deleteCaseStudy(caseStudyId);
        fetchData(id);
    };

    if (loading) return <div className="p-8 text-center font-bold text-slate-500 uppercase tracking-widest animate-pulse">Loading Client Data...</div>;

    return (
        <div className="space-y-8 p-8  animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/admin/clients" className="group p-2 hover:bg-black hover:text-white rounded-lg text-slate-500 transition-all">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                </Link>
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Manage Client: <span className="text-slate-500">{client.name}</span></h1>
                    <p className="text-slate-400 text-sm font-medium">Update client profiles and manage linked case studies.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Client Details */}
                <div className="space-y-6">
                    <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/20">
                        <h2 className="font-black text-lg text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tight">
                            <Briefcase size={20} className="text-black" /> Client Profile
                        </h2>
                        <form onSubmit={handleClientUpdate} className="space-y-5">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Brand Name</label>
                                <input
                                    value={client.name}
                                    onChange={e => setClient({ ...client, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-black transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Legal Name</label>
                                <input
                                    value={client.legalName || ""}
                                    onChange={e => setClient({ ...client, legalName: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-black transition-all"
                                    placeholder="e.g. PT Example Indonesia"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Slug</label>
                                    <input
                                        value={client.slug}
                                        onChange={e => setClient({ ...client, slug: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-black transition-all"
                                    />
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="flex items-center gap-2 mb-3">
                                        <input
                                            type="checkbox"
                                            checked={client.isFeatured}
                                            onChange={e => setClient({ ...client, isFeatured: e.target.checked })}
                                            id="isFeatured"
                                            className="w-5 h-5 rounded border-slate-300 text-black focus:ring-black"
                                        />
                                        <label htmlFor="isFeatured" className="text-xs font-black text-slate-900 uppercase">Featured</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Website</label>
                                <input
                                    value={client.website || ""}
                                    onChange={e => setClient({ ...client, website: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-medium text-slate-600 focus:outline-none focus:border-black transition-all text-sm"
                                    placeholder="https://..."
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Logo URL</label>
                                <input
                                    value={client.logoUrl || ""}
                                    onChange={e => setClient({ ...client, logoUrl: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-medium text-slate-600 focus:outline-none focus:border-black transition-all text-sm"
                                    placeholder="https://"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Brand Color (Hex)</label>
                                <input
                                    value={client.brandColor || ""}
                                    onChange={e => setClient({ ...client, brandColor: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-medium text-slate-600 focus:outline-none focus:border-black transition-all text-sm"
                                    placeholder="#000000"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">About Client</label>
                                <textarea
                                    value={client.description || ""}
                                    onChange={e => setClient({ ...client, description: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-medium text-slate-600 focus:outline-none focus:border-black transition-all text-sm min-h-[120px] resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={saving}
                                className="w-full py-4 bg-black text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 uppercase tracking-widest text-xs"
                            >
                                {saving ? "Updating..." : <><Save size={16} /> Update Profile</>}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column: Case Studies */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <div>
                            <h2 className="font-black text-2xl text-slate-900 tracking-tight">Case Studies</h2>
                            <p className="text-slate-400 text-sm">Detailed projects and success stories.</p>
                        </div>
                        <button
                            onClick={() => { setEditingCaseStudy(null); setCaseStudyForm({}); setIsCaseStudyModalOpen(true); }}
                            className="px-6 py-3 bg-black text-white font-bold rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                        >
                            <Plus size={18} /> New Case Study
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {client.caseStudies && client.caseStudies.length > 0 ? (
                            client.caseStudies.map((study: any) => (
                                <div key={study.id} className="group bg-white border-2 border-slate-100 rounded-[2rem] overflow-hidden hover:border-black hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden">
                                        {study.thumbnailUrl ? (
                                            <img src={study.thumbnailUrl} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-slate-200"><ImageIcon size={48} /></div>
                                        )}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                            <button
                                                onClick={() => { setEditingCaseStudy(study); setCaseStudyForm(study); setIsCaseStudyModalOpen(true); }}
                                                className="p-3 bg-white text-slate-900 rounded-xl shadow-xl hover:scale-110 transition-transform font-bold flex items-center gap-2"
                                            >
                                                Edit Study
                                            </button>
                                            <button
                                                onClick={() => handleDeleteCaseStudy(study.id)}
                                                className="p-3 bg-rose-500 text-white rounded-xl shadow-xl hover:scale-110 transition-transform"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                                {study.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-black text-xl text-slate-900 mb-2 line-clamp-1">{study.title}</h3>
                                        <p className="text-slate-400 text-sm font-medium line-clamp-2 mb-4">{study.excerpt}</p>
                                        <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">/{study.slug}</span>
                                            <Link href={`/case-studies/${study.slug}`} target="_blank" className="text-black hover:underline font-black text-[10px] uppercase tracking-widest flex items-center gap-1">
                                                Live View <ExternalLink size={12} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center border-4 border-dashed border-slate-50 rounded-[3rem] bg-slate-50/30">
                                <div className="mb-4 text-slate-200 flex justify-center"><Briefcase size={64} /></div>
                                <p className="text-slate-400 font-black text-lg uppercase tracking-widest">Initialising Case Studies...</p>
                                <button
                                    onClick={() => { setEditingCaseStudy(null); setCaseStudyForm({}); setIsCaseStudyModalOpen(true); }}
                                    className="mt-4 text-black font-black hover:underline uppercase tracking-widest text-xs"
                                >
                                    Create First Entry
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Case Study Modal */}
            {isCaseStudyModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h3 className="font-black text-2xl text-slate-900 uppercase tracking-tight">{editingCaseStudy ? "Refine Case Study" : "New Case Study"}</h3>
                                <p className="text-slate-400 text-sm font-medium">Capture the impact of this collaboration.</p>
                            </div>
                            <button onClick={() => setIsCaseStudyModalOpen(false)} className="bg-white border-2 border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-900 font-bold p-3 rounded-2xl transition-all">✕</button>
                        </div>
                        <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Study Title</label>
                                    <input
                                        value={caseStudyForm.title || ""}
                                        onChange={e => setCaseStudyForm({ ...caseStudyForm, title: e.target.value })}
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-black transition-all text-slate-900"
                                        placeholder="e.g. Scaling User Acquisition for Grab"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Slug</label>
                                    <input
                                        value={caseStudyForm.slug || ""}
                                        onChange={e => setCaseStudyForm({ ...caseStudyForm, slug: e.target.value })}
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-black transition-all text-slate-900"
                                        placeholder="grab-acquisition"
                                    />
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Thumbnail Image URL</label>
                                    <input
                                        value={caseStudyForm.thumbnailUrl || ""}
                                        onChange={e => setCaseStudyForm({ ...caseStudyForm, thumbnailUrl: e.target.value })}
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-black transition-all text-slate-600"
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Excerpt / Summary</label>
                                    <textarea
                                        value={caseStudyForm.excerpt || ""}
                                        onChange={e => setCaseStudyForm({ ...caseStudyForm, excerpt: e.target.value })}
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-black transition-all min-h-[100px] resize-none text-slate-600"
                                        placeholder="A brief overview of the campaign's success..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Status</label>
                                    <select
                                        value={caseStudyForm.status || "draft"}
                                        onChange={e => setCaseStudyForm({ ...caseStudyForm, status: e.target.value })}
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-black transition-all text-slate-900"
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 border-t border-slate-50 bg-slate-50/50 flex justify-end gap-4">
                            <button
                                onClick={() => setIsCaseStudyModalOpen(false)}
                                className="px-8 py-4 text-slate-400 hover:text-slate-900 font-black uppercase tracking-widest text-xs transition-colors"
                            >
                                Discard
                            </button>
                            <button
                                onClick={handleCaseStudySave}
                                className="px-10 py-4 bg-black text-white font-black rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs"
                            >
                                {editingCaseStudy ? "Update Entry" : "Launch Case Study"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
