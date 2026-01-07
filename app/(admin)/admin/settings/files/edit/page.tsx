"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Save, ArrowLeft, Loader2, FileCode } from "lucide-react";
import Link from "next/link";
import { Editor } from "@monaco-editor/react";

function FileEditorContent() {
    const searchParams = useSearchParams();
    const filePath = searchParams.get("path") || "";
    const router = useRouter();

    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (filePath) {
            setLoading(true);
            fetch(`/api/cms/files?path=${encodeURIComponent(filePath)}&type=read`)
                .then(res => res.json())
                .then(data => {
                    if (data.content !== undefined) {
                        setContent(data.content);
                    } else {
                        alert("Failed to load file or unauthorized type");
                        router.push("/admin/settings/files");
                    }
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [filePath, router]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch("/api/cms/files", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    path: filePath,
                    content
                })
            });

            if (res.ok) {
                alert("File saved successfully!");
            } else {
                alert("Failed to save.");
            }
        } catch (e) {
            alert("Error saving file");
        }
        setSaving(false);
    };

    if (loading) return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400 gap-4">
            <Loader2 size={48} className="animate-spin text-lime-600" />
            <div className="font-black text-slate-900">Loading editor...</div>
        </div>
    );

    // Determine language based on extension
    const ext = filePath.split('.').pop() || 'txt';
    const langMap: any = {
        'ts': 'typescript', 'tsx': 'typescript', 'js': 'javascript', 'jsx': 'javascript',
        'css': 'css', 'html': 'html', 'json': 'json', 'md': 'markdown'
    };
    const language = langMap[ext] || 'plaintext';

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] space-y-6 p-8 max-w-[1600px] mx-auto animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/settings/files" className="p-3 bg-white border-2 border-slate-200 rounded-xl text-slate-500 hover:text-black hover:border-black hover:shadow-md transition-all active:scale-95 cursor-pointer">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            <FileCode size={14} /> Editing File
                        </div>
                        <h1 className="text-2xl font-black text-slate-900 truncate max-w-xl" title={filePath}>{filePath}</h1>
                    </div>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-3 bg-gradient-to-r from-lime-400 to-black hover:shadow-lg hover:shadow-lime-500/20 disabled:opacity-50 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                    {saving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>

            <div className="flex-1 bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 ring-4 ring-slate-50">
                <Editor
                    height="100%"
                    defaultLanguage={language}
                    theme="light"
                    value={content}
                    onChange={(value) => setContent(value || "")}
                    options={{
                        minimap: { enabled: true },
                        fontSize: 14,
                        padding: { top: 24, bottom: 24 },
                        fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                        fontLigatures: true,
                        scrollBeyondLastLine: false,
                        smoothScrolling: true,
                        lineHeight: 1.6
                    }}
                />
            </div>
        </div>
    );
}

export default function FileEditor() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400 gap-3">
                <Loader2 size={48} className="animate-spin text-lime-500" />
                <div className="font-bold text-lg">Initializing editor...</div>
            </div>
        }>
            <FileEditorContent />
        </Suspense>
    );
}
