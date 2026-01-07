"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getModels, getModelData, saveModelData, deleteModelData, executeRawQuery } from "@/app/(admin)/_actions/database";
import { Loader2, Plus, Trash, Edit, RefreshCw, Play, Database as DbIcon, Table as TableIcon, Share2, Code as CodeIcon, X } from "lucide-react";
import { useGlobalError } from "@/components/providers/GlobalErrorProvider";

export default function DatabaseManager() {
    const searchParams = useSearchParams();
    const modelParam = searchParams.get("model");

    const [selectedModel, setSelectedModel] = useState<string>(modelParam || "User");
    const [models, setModels] = useState<string[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState<"table" | "sql" | "diagram">("table");
    const [sqlQuery, setSqlQuery] = useState("SELECT * FROM User LIMIT 10;");
    const [sqlResult, setSqlResult] = useState<any>(null);
    const { showError, showSuccess } = useGlobalError();

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        getModels().then(setModels);
    }, []);

    useEffect(() => {
        if (mode === 'table' && selectedModel) {
            fetchData();
        }
    }, [selectedModel, mode]);

    const fetchData = async () => {
        setLoading(true);
        const res = await getModelData(selectedModel);
        setLoading(false);
        if (res.error) {
            showError("Fetch Failed", res.error);
        } else {
            setData(res.data);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const id = editingItem?.id;
        const res = await saveModelData(selectedModel, formData, id);
        if (res.error) {
            showError("Save Failed", res.error);
        } else {
            setIsModalOpen(false);
            fetchData();
            showSuccess("Success", "Record saved successfully");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        const res = await deleteModelData(selectedModel, id);
        if (res.error) {
            showError("Delete Failed", res.error);
        } else {
            fetchData();
            showSuccess("Deleted", "Record deleted successfully");
        }
    };

    const handleRunQuery = async () => {
        setLoading(true);
        const res = await executeRawQuery(sqlQuery);
        setLoading(false);
        if (res.error) {
            setSqlResult({ error: res.error });
            showError("Query Failed", res.error);
        } else {
            setSqlResult({ data: res.data });
            showSuccess("Query Executed", "SQL query ran successfully");
        }
    };

    return (
        <div className="flex h-[calc(100vh-6rem)] gap-6 p-6">
            {/* Sidebar */}
            <div className="w-72 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl flex flex-col shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="p-6 border-b-2 border-slate-100 font-black flex items-center gap-3 text-slate-900 text-lg bg-slate-50">
                    <div className="p-2 bg-slate-900 text-white rounded-lg">
                        <DbIcon size={20} />
                    </div>
                    Schema
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    <div className="space-y-2">
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-2">Tools</div>
                        <button
                            onClick={() => setMode("sql")}
                            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-all cursor-pointer ${mode === 'sql' ? 'bg-gradient-to-r from-lime-400 to-black text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100 hover:scale-[1.02]'}`}
                        >
                            <CodeIcon size={18} /> SQL Runner
                        </button>
                        <button
                            onClick={() => setMode("diagram")}
                            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-all cursor-pointer ${mode === 'diagram' ? 'bg-gradient-to-r from-lime-400 to-black text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100 hover:scale-[1.02]'}`}
                        >
                            <Share2 size={18} /> ER Diagram
                        </button>
                    </div>

                    <div className="space-y-2">
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-2">Models</div>
                        {models.map((m: string) => (
                            <button
                                key={m}
                                onClick={() => { setSelectedModel(m); setMode("table"); }}
                                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-all cursor-pointer ${mode === 'table' && selectedModel === m ? 'bg-lime-50 text-lime-700 border-2 border-lime-200' : 'text-slate-600 hover:bg-slate-100 hover:scale-[1.02] border-2 border-transparent'}`}
                            >
                                <TableIcon size={18} className={mode === 'table' && selectedModel === m ? 'text-lime-600' : 'text-slate-400'} /> {m}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden flex flex-col bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-slate-200 shadow-xl shadow-slate-200/50">
                {mode === 'table' && (
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="p-6 border-b-2 border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm">
                            <h2 className="font-black text-2xl text-slate-900 flex items-center gap-3">
                                <div className="p-2 bg-lime-50 text-lime-600 rounded-xl"><TableIcon size={24} /></div>
                                {selectedModel}
                            </h2>
                            <div className="flex gap-3">
                                <button onClick={fetchData} className="p-3 text-slate-500 hover:text-lime-600 hover:bg-lime-50 rounded-xl transition-colors cursor-pointer" title="Refresh">
                                    <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
                                </button>
                                <button
                                    onClick={() => { setEditingItem(null); setFormData({}); setIsModalOpen(true); }}
                                    className="bg-black hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                                >
                                    <Plus size={18} /> New Record
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-auto p-0">
                            <table className="w-full text-sm text-left">
                                <thead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 sticky top-0 z-10 border-b-2 border-slate-100">
                                    <tr>
                                        {data.length > 0 ? Object.keys(data[0]).map(k => (
                                            <th key={k} className="px-6 py-4">{k}</th>
                                        )) : <th className="px-6 py-4">No Data</th>}
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white">
                                    {data.map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            {Object.keys(row).map(k => (
                                                <td key={k} className="px-6 py-4 text-slate-700 font-medium max-w-xs truncate" title={String(row[k])}>
                                                    {typeof row[k] === 'object' ? JSON.stringify(row[k]) : String(row[k])}
                                                </td>
                                            ))}
                                            <td className="px-6 py-4 text-right flex justify-end gap-2">
                                                <button
                                                    onClick={() => { setEditingItem(row); setFormData(row); setIsModalOpen(true); }}
                                                    className="p-2 text-lime-600 hover:bg-lime-50 rounded-lg transition-colors cursor-pointer"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(row.id)}
                                                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                                                >
                                                    <Trash size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {!loading && data.length === 0 && (
                                        <tr><td colSpan={100} className="p-12 text-center text-slate-400 font-medium">No records found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                            {loading && <div className="p-12 text-center text-lime-600 font-bold flex items-center justify-center gap-2"><Loader2 className="animate-spin" /> Loading data...</div>}
                        </div>
                    </div>
                )}

                {/* SQL and Diagram modes omitted for brevity, logic remains same but container styles applied above covers them */}
                {mode === 'sql' && (
                    <div className="flex-1 flex flex-col h-full overflow-hidden">
                        <div className="p-6 border-b-2 border-slate-100 flex justify-between items-center bg-white/50">
                            <h2 className="font-black text-2xl text-slate-900 flex items-center gap-3">
                                <div className="p-2 bg-black text-white rounded-xl"><CodeIcon size={24} /></div>
                                SQL Runner
                            </h2>
                            <button
                                onClick={handleRunQuery}
                                disabled={loading}
                                className="bg-gradient-to-r from-lime-400 to-black text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                            >
                                {loading ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />} Run Query
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col min-h-0">
                            <textarea
                                value={sqlQuery}
                                onChange={e => setSqlQuery(e.target.value)}
                                className="w-full h-48 p-6 font-mono text-sm bg-slate-900 text-lime-400 focus:outline-none resize-none"
                                placeholder="SELECT * FROM ..."
                            />
                            <div className="flex-1 overflow-auto p-0 bg-white">
                                {sqlResult?.error && (
                                    <div className="text-rose-600 bg-rose-50 p-6 font-mono text-sm border-b-2 border-rose-100 font-bold">
                                        Error: {sqlResult.error}
                                    </div>
                                )}
                                {sqlResult?.data && Array.isArray(sqlResult.data) && (
                                    <table className="w-full text-sm text-left border-collapse">
                                        <thead className="bg-slate-100 text-slate-600 sticky top-0 font-bold">
                                            <tr>
                                                {sqlResult.data.length > 0 ? Object.keys(sqlResult.data[0]).map(k => (
                                                    <th key={k} className="px-4 py-3 border-b-2 border-slate-200">{k}</th>
                                                )) : <th className="px-4 py-3">Result</th>}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {sqlResult.data.map((row: any, i: number) => (
                                                <tr key={i} className="hover:bg-slate-50">
                                                    {Object.keys(row).map(k => (
                                                        <td key={k} className="px-4 py-2 border-b border-slate-100 font-mono text-xs text-slate-600">
                                                            {typeof row[k] === 'object' ? JSON.stringify(row[k]) : String(row[k])}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {mode === 'diagram' && (
                    <div className="flex-1 flex flex-col h-full overflow-hidden">
                        <div className="p-6 border-b-2 border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm">
                            <h2 className="font-black text-2xl text-slate-900 flex items-center gap-3">
                                <div className="p-2 bg-blue-50 text-blue-500 rounded-xl"><Share2 size={24} /></div>
                                Schema Diagram
                            </h2>
                        </div>
                        <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-slate-50/50">
                            <div className="bg-white p-4 rounded-xl shadow-lg shadow-slate-200/50 overflow-hidden border-2 border-slate-200">
                                <MermaidDiagram chart={`
erDiagram
    User {
        String id
        String email
        String name
        String password
        String role
    }
    GlobalSettings {
        String id
        String siteName
        String siteDescription
        Boolean publicAccess
    }
    Theme {
        String id
        String name
        String colors
    }
    PageContent {
        String id
        String title
        String slug
        String pageSlug
    }
    SEO {
        String id
        String title
        String description
        String keywords
    }
    NavMenu {
        String id
        String label
        String path
        Boolean isActive
    }
    PageContent ||--|{ PageSection : "contains"
    PageSection {
        String id
        String name
        String type
        String pageId
    }
    Script {
        String id
        String name
        String code
        String location
    }
    Lead {
        String id
        String name
        String email
        String service
    }
    Lead ||--|{ ChatSession : "initiates"
    ChatSession {
        String id
        String leadId
    }
    ChatSession ||--|{ ChatMessage : "contains"
    ChatMessage {
        String id
        String sessionId
        String role
        String content
    }
    Value {
        String id
        String title
        String slug
    }
    TeamMember {
        String id
        String name
        String position
    }
    Speciality {
        String id
        String title
        String slug
    }
    Client {
        String id
        String name
        String slug
        String email
    }
    Client ||--|{ CaseStudy : "has"
    Candidate {
        String id
        String name
        String email
        String role
    }
    Category {
        String id
        String name
        String slug
    }
    Category ||--|{ Article : "categorizes"
    Category ||--|{ Career : "categorizes"
    Article {
        String id
        String title
        String slug
        String status
    }
    CaseStudy {
        String id
        String title
        String slug
        String clientId
    }
    Career {
        String id
        String title
        String slug
        String location
    }
    Career ||--|{ JobApplication : "receives"
    JobApplication {
        String id
        String fullName
        String email
        String careerId
    }
`} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Edit/Create Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                    <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-6 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-black text-xl text-slate-900">
                                {editingItem ? `Edit ${selectedModel}` : `New ${selectedModel}`}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-colors"><X size={20} /></button>
                        </div>
                        <form onSubmit={handleSave} className="overflow-y-auto p-8 flex-1 space-y-5">
                            {Object.keys(formData).map(key => (
                                key !== 'id' && key !== 'createdAt' && key !== 'updatedAt' && (
                                    <div key={key}>
                                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 capitalize">{key}</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 focus:outline-none transition-all font-medium text-slate-800"
                                            value={formData[key] || ""}
                                            onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                                            placeholder={key}
                                        />
                                    </div>
                                )
                            ))}
                        </form>
                        <div className="p-6 border-t-2 border-slate-100 flex justify-end gap-3 bg-slate-50/50">
                            <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 text-slate-500 font-bold hover:bg-slate-100 rounded-xl transition-colors cursor-pointer">Cancel</button>
                            <button onClick={handleSave} className="px-8 py-3 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-xl shadow-lg shadow-lime-500/20 active:scale-95 transition-all cursor-pointer">Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function MermaidDiagram({ chart }: { chart: string }) {
    useEffect(() => {
        const initMermaid = async () => {
            const mermaid = (await import('mermaid')).default;
            mermaid.initialize({ startOnLoad: true });
            try {
                await mermaid.run();
            } catch (e) {
                console.error("Mermaid error:", e);
            }
        };
        initMermaid();
    }, [chart]);

    return <div className="mermaid">{chart}</div>;
}
