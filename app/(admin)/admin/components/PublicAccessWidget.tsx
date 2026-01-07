"use client";

import React, { useEffect, useState } from "react";
import { Globe, Lock, Shield, Wifi } from "lucide-react";
import { getNetworkInfo, togglePublicAccess } from "@/app/(admin)/_actions/network";

export default function PublicAccessWidget() {
    const [loading, setLoading] = useState(true);
    const [toggling, setToggling] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [ips, setIps] = useState<string[]>([]);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const info = await getNetworkInfo();
        setEnabled(info.publicAccess);
        setIps(info.ips);
        setLoading(false);
    };

    const handleToggle = async () => {
        setToggling(true);
        const newState = !enabled;
        await togglePublicAccess(newState);
        setEnabled(newState);
        setToggling(false);
    };

    if (loading) return (
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-200 shadow-lg h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
        </div>
    );

    return (
        <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${enabled ? 'border-lime-400 shadow-lime-500/10' : 'border-slate-200'}`}>

            {/* Background Status Indicator */}
            <div className={`absolute top-0 right-0 p-4 transition-colors duration-500 ${enabled ? 'text-lime-100' : 'text-slate-100'}`}>
                <Wifi size={120} className="opacity-20 -mr-8 -mt-8" />
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl border transition-colors ${enabled ? 'bg-lime-50 border-lime-200 text-lime-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        {enabled ? <Globe size={20} /> : <Lock size={20} />}
                    </div>
                    <div className="flex flex-col items-end">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={enabled} onChange={handleToggle} disabled={toggling} />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-500"></div>
                        </label>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-2">{toggling ? 'Updating...' : (enabled ? 'Public' : 'Private')}</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-1">Access Control</h3>
                    <p className="text-sm text-slate-500 font-medium mb-6">
                        {enabled
                            ? "Project is visible to devices on your network."
                            : "Project is restricted to this device only."}
                    </p>

                    {enabled && (
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-2">
                                <Wifi size={12} /> Available Addresses
                            </div>
                            <div className="space-y-1">
                                {ips.map(ip => (
                                    <div key={ip} className="font-mono text-xs font-bold text-slate-700 bg-white px-2 py-1.5 rounded border border-slate-100">
                                        http://{ip}:3000
                                    </div>
                                ))}
                                {ips.length === 0 && <div className="text-xs text-slate-400 italic">No network IP found</div>}
                            </div>
                        </div>
                    )}

                    {!enabled && (
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center gap-3 text-slate-500">
                            <Shield size={16} />
                            <span className="text-xs font-bold">Localhost Only</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
