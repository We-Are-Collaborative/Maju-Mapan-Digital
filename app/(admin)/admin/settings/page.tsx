"use client";
import React, { useState } from "react";
import { Save, RefreshCw, Upload, Database, Layout, HardDrive, Shield } from "lucide-react";
import { restoreBackup } from "@/app/(admin)/_actions/database";
import Link from "next/link";

interface SettingsCardProps {
    title: string;
    description: string;
    icon: any;
    href: string;
    color: string;
}

export default function SettingsPage() {
    const [restoring, setRestoring] = useState(false);

    const handleRestore = async () => {
        if (!confirm("WARNING: This will overwrite the current database with the seed data. Are you sure?")) return;
        setRestoring(true);
        const res = await restoreBackup();
        setRestoring(false);
        if (res.success) alert("System restored successfully.");
        else alert("Restore failed: " + res.error);
    };

    return (
        <div className="space-y-10 p-8 max-w-[1600px] mx-auto animate-in fade-in duration-700">
            <div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900">System Settings</h1>
                <p className="text-slate-500 font-medium mt-1">Configure global preferences and tools.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SettingsCard
                    title="Theme Manager"
                    description="Customize colors, fonts, and branding."
                    icon={Layout}
                    href="/admin/settings/theme"
                    color="lime"
                />
                <SettingsCard
                    title="Database Manager"
                    description="View tables, run SQL, and check schema."
                    icon={Database}
                    href="/admin/settings/database"
                    color="black"
                />
                <SettingsCard
                    title="File Explorer"
                    description="Browse uploads and system files."
                    icon={HardDrive}
                    href="/admin/settings/files"
                    color="slate"
                />
            </div>

            <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-rose-50 text-rose-600 rounded-xl border-2 border-rose-100">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900">Danger Zone</h3>
                        <p className="text-slate-500 text-sm font-medium">Critical system actions.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 bg-rose-50 border-2 border-rose-100 rounded-2xl">
                    <div>
                        <h4 className="font-bold text-rose-800">System Reset</h4>
                        <p className="text-xs text-rose-600 font-medium">Restore database to initial seed state.</p>
                    </div>
                    <button
                        onClick={handleRestore}
                        disabled={restoring}
                        className="px-6 py-3 bg-white border-2 border-rose-200 text-rose-600 font-bold rounded-xl hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all active:scale-95 flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                    >
                        {restoring ? <RefreshCw className="animate-spin" size={20} /> : <Upload size={20} />}
                        {restoring ? "Restoring..." : "Restore Default Data"}
                    </button>
                </div>
            </div>

            {restoring && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex items-center justify-center flex-col gap-4">
                    <RefreshCw className="animate-spin text-lime-600" size={64} />
                    <h2 className="text-2xl font-black text-slate-900">Restoring System...</h2>
                    <p className="text-slate-500 font-bold">Please wait, this may take a moment.</p>
                </div>
            )}
        </div>
    );
}

function SettingsCard({ title, description, icon: Icon, href, color }: SettingsCardProps) {
    const isLime = color === 'lime';
    const isBlack = color === 'black';

    let iconBg = "bg-slate-50 text-slate-500 border-slate-200";
    if (isLime) iconBg = "bg-lime-50 text-lime-700 border-lime-200";
    if (isBlack) iconBg = "bg-slate-900 text-white border-slate-900";

    return (
        <Link href={href} className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200 p-6 rounded-3xl hover:border-lime-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block">
            <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${iconBg}`}>
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">{description}</p>
        </Link>
    );
}
