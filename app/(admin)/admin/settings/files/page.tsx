"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Folder, FileText, ArrowUp, Edit, HardDrive, Search } from "lucide-react";

interface FileItem {
    name: string;
    isDirectory: boolean;
    path: string;
    size: number;
}

export default function FileExplorer() {
    const [currentPath, setCurrentPath] = useState("");
    const [items, setItems] = useState<FileItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItems(currentPath);
    }, [currentPath]);

    const fetchItems = (path: string) => {
        setLoading(true);
        fetch(`/api/cms/files?path=${encodeURIComponent(path)}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.type === 'directory') {
                    setItems(data.items);
                }
                setLoading(false);
            });
    };

    const handleNavigate = (path: string) => {
        setCurrentPath(path);
    };

    const handleUp = () => {
        if (!currentPath) return;
        const parent = currentPath.split('/').slice(0, -1).join('/');
        setCurrentPath(parent || "");
    };

    return (
        <div className="space-y-6 h-full flex flex-col p-8 max-w-6xl mx-auto animate-in fade-in duration-700">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-lime-400 to-black rounded-xl text-white shadow-lg shadow-lime-500/20">
                            <HardDrive size={28} />
                        </div>
                        File Manager
                    </h1>
                </div>
            </div>

            <div className="flex-1 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col">
                {/* Toolbar / Breadcrumb */}
                <div className="p-6 bg-white/50 border-b-2 border-slate-100 flex items-center gap-4">
                    <button
                        onClick={handleUp}
                        disabled={!currentPath}
                        className="p-3 bg-white border-2 border-slate-200 hover:bg-slate-50 disabled:opacity-30 rounded-xl text-slate-600 transition-all shadow-sm active:scale-95 cursor-pointer"
                        title="Go Up"
                    >
                        <ArrowUp size={20} />
                    </button>
                    <div className="flex-1 font-mono text-sm font-bold text-slate-600 bg-slate-50 px-4 py-3 rounded-xl border-2 border-slate-200 flex items-center">
                        <span className="text-slate-400 mr-1">root/</span>
                        {currentPath}
                    </div>
                </div>

                {/* File List */}
                <div className="flex-1 overflow-y-auto p-8">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-40 text-slate-400 font-bold gap-3">
                            <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-lime-500 animate-spin"></div>
                            Loading files...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {items.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => item.isDirectory ? handleNavigate(item.path) : null}
                                    className={`p-6 rounded-2xl border-2 transition-all group relative overflow-hidden ${item.isDirectory
                                        ? "bg-white border-lime-100 hover:border-lime-400 hover:shadow-xl hover:shadow-lime-500/10 cursor-pointer hover:-translate-y-1"
                                        : "bg-slate-50 border-slate-200 hover:border-slate-400 hover:shadow-md"
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 border-2 ${item.isDirectory ? "bg-lime-50 text-lime-600 border-lime-100" : "bg-slate-100 text-slate-500 border-slate-200"
                                            }`}>
                                            {item.isDirectory ? <Folder size={28} /> : <FileText size={28} />}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 truncate text-sm mb-1">{item.name}</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.isDirectory ? "Directory" : `${(item.size / 1024).toFixed(1)} KB`}</p>
                                    </div>

                                    {!item.isDirectory && (
                                        <Link
                                            href={`/admin/settings/files/edit?path=${encodeURIComponent(item.path)}`}
                                            className="absolute top-4 right-4 p-2 bg-white border-2 border-slate-100 rounded-lg text-slate-400 hover:text-black hover:border-black shadow-sm opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                                            title="Edit File"
                                        >
                                            <Edit size={16} />
                                        </Link>
                                    )}
                                </div>
                            ))}
                            {items.length === 0 && (
                                <div className="col-span-full text-center py-20 text-slate-400 italic">
                                    <Folder size={48} className="mx-auto mb-4 opacity-20" />
                                    Empty directory
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
