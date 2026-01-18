'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Search, Briefcase, Calendar, Mail } from "lucide-react";
import { updateCandidateStatus } from "./actions";
import { toast } from "sonner";
import { useState } from "react";

interface Application {
    id: string;
    fullName: string;
    email: string;
    status: string;
    resumeUrl: string | null;
    linkedinUrl: string | null;
    createdAt: Date;
    career: {
        title: string;
        slug: string;
    };
    answers: string | null;
}

export function ApplicationList({ applications }: { applications: Application[] }) {
    const [search, setSearch] = useState("");

    const handleStatusChange = async (id: string, newStatus: string) => {
        const result = await updateCandidateStatus(id, newStatus);
        if (result.success) {
            toast.success("Status updated");
        } else {
            toast.error("Failed to update status");
        }
    };

    const filteredApps = applications.filter(app =>
        app.fullName.toLowerCase().includes(search.toLowerCase()) ||
        app.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md w-full">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search applications..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all shadow-sm"
                />
            </div>

            <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 shadow-xl overflow-hidden px-8 pb-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-slate-100">
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Applicant</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Role Applied With</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Date Applied</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Resume/CV</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400 text-right">Hiring Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredApps.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-20 text-center">
                                        <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <FileText size={32} className="text-slate-300" />
                                        </div>
                                        <p className="text-xl font-bold text-slate-900 mb-2">No applications found.</p>
                                        <p className="text-slate-500 font-medium">Waiting for new talent.</p>
                                    </td>
                                </tr>
                            ) : (
                                filteredApps.map((application) => (
                                    <tr key={application.id} className="group hover:bg-slate-50/80 transition-colors">
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="size-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-white shadow-sm flex items-center justify-center text-indigo-500 font-black text-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                                    {application.fullName.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 text-lg">{application.fullName}</div>
                                                    <div className="flex items-center gap-1 text-xs font-medium text-slate-500 mt-0.5">
                                                        <Mail size={10} /> {application.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-2 font-bold text-slate-700">
                                                <Briefcase size={14} className="text-slate-400" />
                                                {application.career.title}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-2 font-medium text-slate-500 text-sm">
                                                <Calendar size={14} className="text-slate-300" />
                                                {new Date(application.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            {application.resumeUrl ? (
                                                <a
                                                    href={application.resumeUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                                                >
                                                    <FileText size={12} /> View Document
                                                </a>
                                            ) : (
                                                <span className="text-slate-300 font-bold text-xs">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <Select
                                                defaultValue={application.status}
                                                onValueChange={(val) => handleStatusChange(application.id, val)}
                                            >
                                                <SelectTrigger className="h-10 w-[140px] border-2 border-slate-100 rounded-xl font-bold text-xs bg-slate-50 focus:ring-2 focus:ring-lime-100 focus:border-lime-500 ml-auto">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent align="end">
                                                    <SelectItem value="new" className="font-bold">New</SelectItem>
                                                    <SelectItem value="reviewing" className="font-bold text-amber-600">Reviewing</SelectItem>
                                                    <SelectItem value="interviewed" className="font-bold text-indigo-600">Interviewed</SelectItem>
                                                    <SelectItem value="hired" className="font-bold text-emerald-600">Hired</SelectItem>
                                                    <SelectItem value="rejected" className="font-bold text-rose-500">Rejected</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
