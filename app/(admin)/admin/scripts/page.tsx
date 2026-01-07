"use client";
import React, { useState, useEffect } from "react";
import { getScripts, createScript, deleteScript, updateScript } from "@/app/actions/scripts";
import { Editor } from "@monaco-editor/react";
import { Plus, Trash2, Code, LayoutTemplate, Save, Check } from "lucide-react";

export default function ScriptsManager() {
    const [scripts, setScripts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedScript, setSelectedScript] = useState<any | null>(null);
    const [editorValue, setEditorValue] = useState("");
    const [newName, setNewName] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchScripts();
    }, []);

    const fetchScripts = async () => {
        setLoading(true);
        const data = await getScripts();
        setScripts(data);
        setLoading(false);
    };

    const handleCreate = async () => {
        if (!newName.trim()) return;
        await createScript(newName, "<!-- New script -->", "body");
        setNewName("");
        fetchScripts();
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        await deleteScript(id);
        if (selectedScript?.id === id) {
            setSelectedScript(null);
            setEditorValue("");
        }
        fetchScripts();
    };

    const handleSave = async () => {
        if (!selectedScript) return;
        setSaving(true);
        await updateScript(selectedScript.id, editorValue, selectedScript.location);
        setSaving(false);
        fetchScripts();
        // Update local selection to reflect changes (though content is synced via editorValue)
        setSelectedScript({ ...selectedScript, code: editorValue });
    };

    const selectScript = (script: any) => {
        setSelectedScript(script);
        setEditorValue(script.code);
    };

    return (
        <div className="space-y-8 p-8 max-w-[1600px] mx-auto animate-in fade-in duration-700 h-[calc(100vh-6rem)] flex flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900">Scripts Manager</h1>
                    <p className="text-slate-500 font-medium">Inject Custom Code (Analytics, Chat Widgets)</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
                {/* List Column */}
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden">
                    <div className="flex gap-2 mb-6">
                        <input
                            placeholder="New script name..."
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                            className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 font-bold placeholder:font-medium"
                        />
                        <button
                            onClick={handleCreate}
                            disabled={!newName.trim()}
                            className="p-3 bg-slate-900 disabled:opacity-50 text-white rounded-xl hover:bg-black transition-colors cursor-pointer"
                        >
                            <Plus size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                        {loading ? <div className="text-center p-8 font-bold text-slate-400">Loading...</div> : scripts.map(script => (
                            <div
                                key={script.id}
                                onClick={() => selectScript(script)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all group ${selectedScript?.id === script.id
                                    ? "bg-slate-50 border-lime-400 shadow-lg translate-x-1"
                                    : "bg-white border-slate-100 hover:border-slate-300 hover:translate-x-1"
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="font-black text-slate-800 flex items-center gap-2">
                                        <Code size={16} className={selectedScript?.id === script.id ? "text-lime-600" : "text-slate-400"} />
                                        {script.name}
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleDelete(script.id); }}
                                        className="text-slate-300 hover:text-rose-500 transition-colors p-1"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-200 text-slate-600 px-2 py-0.5 rounded flex items-center gap-1">
                                        <LayoutTemplate size={12} /> {script.location}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Editor Column */}
                <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden">
                    {selectedScript ? (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-lime-50 text-lime-700 rounded-lg border-2 border-lime-100">
                                        <Code size={20} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900">{selectedScript.name}</h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <select
                                        value={selectedScript.location}
                                        onChange={async (e) => {
                                            const newLoc = e.target.value;
                                            setSelectedScript({ ...selectedScript, location: newLoc });
                                            // Auto-save location change for convenience or require explicit save?
                                            // Let's require explicit save to avoid complexity, but updating state is needed.
                                        }}
                                        className="bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-lime-400 cursor-pointer"
                                    >
                                        <option value="head">Head</option>
                                        <option value="body">Body End</option>
                                    </select>
                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="px-6 py-2.5 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-xl shadow-lg shadow-lime-500/20 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                                    >
                                        {saving ? <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" /> : <Save size={18} />}
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 rounded-2xl overflow-hidden border-2 border-slate-200 ring-4 ring-slate-50">
                                <Editor
                                    height="100%"
                                    defaultLanguage="html"
                                    value={editorValue}
                                    onChange={(val) => setEditorValue(val || "")}
                                    theme="light"
                                    options={{
                                        minimap: { enabled: false },
                                        fontSize: 14,
                                        fontFamily: "'JetBrains Mono', monospace",
                                        padding: { top: 16, bottom: 16 }
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-300">
                            <Code size={64} className="mb-4 opacity-50" />
                            <p className="text-lg font-black text-slate-400">Select a script to edit</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
