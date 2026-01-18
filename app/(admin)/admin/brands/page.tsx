"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getClientByEmail } from "@/app/actions/mapan";
import { Building, Image as ImageIcon, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AdminHeader from "../../components/AdminHeader";

export default function ClientBrandsPage() {
    const { data: session } = useSession();
    const [client, setClient] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session?.user?.email) {
            fetchClient();
        }
    }, [session]);

    const fetchClient = async () => {
        setLoading(true);
        const data = await getClientByEmail(session!.user!.email!);
        setClient(data);
        setLoading(false);
    };

    if (loading) return <div className="p-8 text-center text-slate-500 font-bold">Loading your brands...</div>;

    if (!client) return (
        <div className="p-12 text-center bg-white rounded-3xl border-2 border-slate-200">
            <Building className="mx-auto h-12 w-12 text-slate-300 mb-4" />
            <h2 className="text-xl font-bold text-slate-900">No Brand Found</h2>
            <p className="text-slate-500">We couldn't find a client record associated with your account.</p>
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex justify-between items-end">
                <div className="flex-1">
                    <AdminHeader
                        defaultTitle="Active Brands"
                        defaultSubtitle={`Managing projects for ${client.name}`}
                    />
                </div>
                {client.logoUrl && (
                    <img src={client.logoUrl} alt={client.name} className="h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 transition-all cursor-crosshair pb-2" />
                )}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-2 border-slate-100 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Total Case Studies
                        </CardTitle>
                        <Building className="h-4 w-4 text-lime-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-900">{client.caseStudies?.length || 0}</div>
                        <p className="text-xs text-slate-500 font-medium mt-1">Live in research</p>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                    Our Projects <ArrowRight size={20} className="text-lime-500" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {client.caseStudies && client.caseStudies.length > 0 ? (
                        client.caseStudies.map((study: any) => (
                            <div key={study.id} className="group bg-white border-2 border-slate-200 rounded-3xl overflow-hidden hover:border-black hover:shadow-2xl transition-all h-full flex flex-col">
                                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                                    {study.thumbnailUrl ? (
                                        <img src={study.thumbnailUrl} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-300">
                                            <ImageIcon size={48} strokeWidth={1} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-black text-xl text-slate-900 line-clamp-1">{study.title}</h3>
                                        <p className="text-sm text-slate-500 font-medium mt-2 line-clamp-3 italic">
                                            "{study.excerpt || "No description provided."}"
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{study.slug}</span>
                                        <button className="text-slate-900 hover:text-black font-bold text-sm flex items-center gap-1">
                                            Explore <ExternalLink size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center border-4 border-dashed border-slate-100 rounded-3xl bg-slate-50/50">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-100">
                                <ImageIcon className="text-slate-300" size={32} />
                            </div>
                            <p className="text-slate-500 font-bold text-lg">Your case studies will appear here.</p>
                            <p className="text-slate-400 text-sm">Contact your account manager to launch new case studies.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
