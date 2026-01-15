"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Save, ArrowLeft, Plus, Trash2, GripVertical, Loader2, FileCode, Edit } from "lucide-react";
import Link from "next/link";
import { Editor } from "@monaco-editor/react";

import { getPageContentById, updateSectionContent, createSection, deleteSection, reorderSections, updatePageSeo } from "@/app/actions/pages";
import SplitFeatureForm from "./components/SplitFeatureForm";
import SeoSettingsForm from "./components/SeoSettingsForm";
import { Button } from "@/components/ui/button";

export default function EditContentPage() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();

    const [pageDetail, setPageDetail] = useState<any>(null);
    const [sections, setSections] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [editorValue, setEditorValue] = useState("");
    const [componentData, setComponentData] = useState<any>(null);

    const [saving, setSaving] = useState(false);
    const [mode, setMode] = useState<"content" | "seo">("content");
    const [seoData, setSeoData] = useState<any>({});

    useEffect(() => {
        if (id) {
            fetchPageDetail();
        }
    }, [id]);

    const fetchPageDetail = async () => {
        setLoading(true);
        const data = await getPageContentById(id);
        if (data) {
            setPageDetail(data);
            setSeoData(data.seo || {});
            setSections(data.sections || []);
            if (data.sections && data.sections.length > 0 && !activeSectionId) {
                setActiveSection(data.sections[0]);
            } else if (activeSectionId) {
                const current = data.sections.find((s: any) => s.id === activeSectionId);
                if (current) setActiveSection(current);
            }
        }
        setLoading(false);
    };

    const setActiveSection = (section: any) => {
        setActiveSectionId(section.id);
        if (section.type === 'html') {
            setEditorValue(section.htmlContent || "");
            setComponentData(null);
        } else if (section.type === 'split-feature') {
            setEditorValue("");
            if (section.splitFeatureSection) {
                const sf = section.splitFeatureSection;
                const left = sf.bullets?.filter((b: any) => b.position === 'left').map((b: any) => b.text) || [];
                const right = sf.bullets?.filter((b: any) => b.position === 'right').map((b: any) => b.text) || [];

                setComponentData({
                    title: sf.title,
                    image: { src: sf.imageSrc, alt: sf.imageAlt },
                    ctaLabel: sf.ctaLabel,
                    ctaLink: sf.ctaLink,
                    ctaSubtitle: sf.ctaSubtitle,
                    themeColor: sf.themeColor,
                    leftBullets: left,
                    rightBullets: right
                });
            } else {
                setComponentData({
                    title: "New Feature",
                    image: { src: "", alt: "" },
                    leftBullets: [],
                    rightBullets: []
                });
            }
        }
    };

    const handleSectionChange = (sectionId: string) => {
        const section = sections.find(s => s.id === sectionId);
        if (section) {
            setActiveSection(section);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            if (mode === 'seo') {
                const res = await updatePageSeo(id, seoData);
                if (res.success) {
                    await fetchPageDetail();
                    alert("SEO Settings Saved!");
                } else {
                    alert("Failed to save SEO.");
                }
            } else {
                if (!activeSectionId) {
                    setSaving(false);
                    return;
                }
                const currentSection = sections.find(s => s.id === activeSectionId);
                if (!currentSection) {
                    setSaving(false);
                    return;
                }

                const res = await updateSectionContent(
                    activeSectionId,
                    editorValue,
                    currentSection.type,
                    componentData
                );

                if (res.success) {
                    await fetchPageDetail();
                    alert("Content Saved!");
                } else {
                    alert("Failed to save content.");
                }
            }
        } catch (e) {
            alert("Error saving");
        }
        setSaving(false);
    };

    // Keep strict handle save reference for existing code if needed, but we replaced the main logic above
    const _legacyHandleSave = async () => {
        if (!activeSectionId) return;
        const currentSection = sections.find(s => s.id === activeSectionId);
        if (!currentSection) return;

        setSaving(true);
        try {
            const res = await updateSectionContent(
                activeSectionId,
                editorValue,
                currentSection.type,
                componentData
            );

            if (res.success) {
                await fetchPageDetail();
                alert("Saved successfully!");
            } else {
                alert("Failed to save.");
            }
        } catch (e) {
            alert("Error saving");
        }
        setSaving(false);
    };

    const handleCreateSection = async (type: string) => {
        // @ts-ignore
        const res = await createSection(pageDetail.id, type);
        if (res.success) {
            await fetchPageDetail();
            const freshData = await getPageContentById(id);
            if (freshData && freshData.sections) {
                const last = freshData.sections[freshData.sections.length - 1];
                if (last) setActiveSectionId(last.id);
            }
        }
    };

    const handleDeleteSection = async (sectionId: string) => {
        if (!confirm("Are you sure?")) return;
        await deleteSection(sectionId);
        if (activeSectionId === sectionId) setActiveSectionId(null);
        await fetchPageDetail();
    };

    const handleMoveSection = async (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === sections.length - 1) return;

        const newSections = [...sections];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        // Swap
        [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];

        setSections(newSections); // Optimistic

        const ids = newSections.map(s => s.id);
        await reorderSections(ids);
        await fetchPageDetail();
    };

    const handleRenameSection = async (sectionId: string, currentName: string) => {
        const newName = prompt("Enter new section name:", currentName);
        if (!newName || newName === currentName) return;

        // Optimistic update
        setSections(sections.map(s => s.id === sectionId ? { ...s, name: newName } : s));

        // Call update with just the name
        await updateSectionContent(sectionId, "", "html", { name: newName });
        await fetchPageDetail();
    };

    if (loading && !pageDetail) return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400 gap-4">
            <Loader2 className="animate-spin text-lime-600" size={48} />
            <p className="font-black text-slate-900">Loading content editor...</p>
        </div>
    );
    if (!pageDetail) return <div className="text-slate-500 font-bold text-center py-20">Page not found</div>;

    const activeSection = sections.find(s => s.id === activeSectionId);

    return (
        <div className="space-y-6 h-[calc(100vh-6rem)] flex flex-col p-6  animate-in fade-in duration-700">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href="/admin/content" className="p-3 bg-white border-2 border-slate-200 rounded-xl text-slate-500 hover:text-black hover:border-black hover:shadow-md transition-all active:scale-95 cursor-pointer">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 capitalize">Edit {pageDetail.title}</h1>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{mode === 'seo' ? 'SEO & Metadata' : 'Content Sections'}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex bg-slate-100 p-1 rounded-xl mr-4">
                        <button
                            onClick={() => setMode("content")}
                            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${mode === 'content' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Content
                        </button>
                        <button
                            onClick={() => setMode("seo")}
                            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${mode === 'seo' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            SEO & Metadata
                        </button>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="px-6 py-2.5 bg-gradient-to-r from-lime-400 to-black hover:shadow-lg hover:shadow-lime-500/20 disabled:opacity-50 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                        {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>

            {mode === 'seo' ? (
                <div className="flex-1 bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="p-4 border-b border-slate-100 bg-slate-50">
                        <h3 className="font-bold text-lg">Page SEO Configuration</h3>
                        <p className="text-slate-400 text-sm">Configure search engine visibility, social sharing, and local geo settings.</p>
                    </div>
                    <div className="h-full overflow-y-auto pb-20">
                        <SeoSettingsForm data={seoData} onChange={setSeoData} />
                    </div>
                </div>
            ) : (
                <div className="flex flex-1 gap-6 min-h-0">
                    {/* Sidebar: Sections List */}
                    <div className="w-80 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl flex flex-col overflow-hidden shadow-lg shadow-slate-200/50">
                        <div className="p-4 border-b-2 border-slate-100 bg-slate-50 flex justify-between items-center">
                            <h3 className="font-black text-slate-900">Sections</h3>
                            <div className="flex gap-2">
                                <button onClick={() => handleCreateSection('html')} className="text-[10px] bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-2 py-1 rounded border border-slate-300 uppercase tracking-wider cursor-pointer" title="Add HTML Block">+ HTML</button>
                                <button onClick={() => handleCreateSection('split-feature')} className="text-[10px] bg-lime-100 hover:bg-lime-200 text-lime-800 font-bold px-2 py-1 rounded border border-lime-200 uppercase tracking-wider cursor-pointer" title="Add Split Block">+ Split</button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-3 space-y-2 relative">
                            {sections.map((section, index) => (
                                <div key={section.id} className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-colors border-2 cursor-pointer ${activeSectionId === section.id ? "bg-lime-50 border-lime-400 text-slate-900" : "bg-white border-transparent hover:border-slate-200 hover:bg-slate-50"}`}>
                                    <button className="cursor-grab text-slate-400 hover:text-slate-600"><GripVertical size={14} /></button>
                                    <button
                                        onClick={() => handleSectionChange(section.id)}
                                        className={`flex-1 text-left text-sm truncate font-bold ${activeSectionId === section.id ? "text-lime-800" : "text-slate-500"}`}
                                    >
                                        {section.type === 'split-feature' ? `[SF] ${section.splitFeatureSection?.title || 'Untitled'}` : `HTML Block #${index + 1}`}
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); handleDeleteSection(section.id); }} className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-rose-500 p-1 transition-colors"><Trash2 size={14} /></button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1 bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col ring-4 ring-slate-50">
                        {activeSection ? (
                            <>
                                <div className="p-3 bg-slate-50 border-b-2 border-slate-100 flex justify-between items-center px-6">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <FileCode size={14} />
                                        {activeSection.type === 'split-feature' ? 'Split Feature Config' : 'HTML Code Editor'}
                                    </span>
                                </div>
                                <div className="flex-1 relative overflow-auto">
                                    {activeSection.type === 'split-feature' ? (
                                        <SplitFeatureForm data={componentData} onChange={setComponentData} />
                                    ) : (
                                        <Editor
                                            height="100%"
                                            defaultLanguage="html"
                                            theme="light"
                                            value={editorValue}
                                            onChange={(value) => setEditorValue(value || "")}
                                            options={{
                                                minimap: { enabled: false },
                                                scrollBeyondLastLine: false,
                                                fontSize: 14,
                                                padding: { top: 24, bottom: 24 },
                                                fontFamily: "'JetBrains Mono', monospace",
                                                lineHeight: 1.6
                                            }}
                                        />
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-slate-300 gap-4">
                                <Edit size={64} className="opacity-20" />
                                <div className="font-black text-lg text-slate-400">Select a section to edit</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
