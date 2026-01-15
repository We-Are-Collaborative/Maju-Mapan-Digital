"use client";
import React, { useState, useEffect } from "react";
import { Download, Trash, Plus, Archive, RefreshCw, HardDrive, Loader2 } from "lucide-react";

interface Backup {
    id: string;
    name: string;
    path: string;
    type: string;
    size: string;
    createdAt: string;
}

export default function BackupManager() {
    const [backups, setBackups] = useState<Backup[]>([]);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);

    useEffect(() => {
        fetchBackups();
    }, []);

    const fetchBackups = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/cms/backups");
            if (res.ok) {
                const data = await res.json();
                setBackups(data);
            }
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };

    const handleCreateBackup = async () => {
        setCreating(true);
        try {
            const res = await fetch("/api/cms/backups", { method: "POST" });
            if (res.ok) {
                alert("Backup created successfully!");
                fetchBackups();
            } else {
                const err = await res.json();
                alert("Failed to create backup: " + (err.error || "Unknown error"));
            }
        } catch (e) {
            alert("Error creating backup");
        }
        setCreating(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this backup?")) return;
        try {
            const res = await fetch(`/api/cms/backups?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                fetchBackups();
            } else {
                alert("Failed to delete backup");
            }
        } catch (e) {
            alert("Error deleting backup");
        }
    };

    const formatBytes = (bytes: string) => {
        const size = parseInt(bytes);
        if (size === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="space-y-6 h-full flex flex-col p-8  animate-in fade-in duration-700">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-lime-400 to-black rounded-xl text-white shadow-lg shadow-lime-500/20">
                            <Archive size={28} />
                        </div>
                        Backups
                    </h1>
                </div>
                <button
                    onClick={handleCreateBackup}
                    disabled={creating}
                    className="px-6 py-3 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-xl shadow-lg shadow-lime-500/20 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer hover:scale-[1.02]"
                >
                    {creating ? <Loader2 size={20} className="animate-spin" /> : <Plus size={20} />}
                    {creating ? "Creating Backup..." : "Create New Backup"}
                </button>
            </div>

            <div className="flex-1 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col">
                <div className="p-6 border-b-2 border-slate-100 flex justify-between items-center bg-white/50">
                    <div className="font-bold text-slate-500 flex items-center gap-2">
                        <HardDrive size={18} />
                        Available Backups
                    </div>
                    <button
                        onClick={fetchBackups}
                        className="p-2 text-slate-400 hover:text-lime-600 hover:bg-lime-50 rounded-lg transition-all cursor-pointer"
                        title="Refresh List"
                    >
                        <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 sticky top-0 z-10 border-b-2 border-slate-100">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Size</th>
                                <th className="px-6 py-4">Created At</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {backups.map((backup) => (
                                <tr key={backup.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-slate-700">{backup.name}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-lime-100 text-lime-700 rounded-md text-xs font-bold border border-lime-200">
                                            {backup.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-slate-500">{formatBytes(backup.size)}</td>
                                    <td className="px-6 py-4 text-slate-500">
                                        {new Date(backup.createdAt).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                                        <a
                                            href={`/api/cms/backups/download?id=${backup.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                                            title="Download"
                                        >
                                            <Download size={18} />
                                        </a>
                                        <button
                                            onClick={() => handleDelete(backup.id)}
                                            className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                                            title="Delete"
                                        >
                                            <Trash size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {!loading && backups.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-slate-400 italic">
                                        <Archive size={48} className="mx-auto mb-4 opacity-20" />
                                        No backups found. Create one to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {loading && (
                        <div className="p-12 text-center text-lime-600 font-bold flex items-center justify-center gap-2">
                            <Loader2 className="animate-spin" /> Loading backups...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
