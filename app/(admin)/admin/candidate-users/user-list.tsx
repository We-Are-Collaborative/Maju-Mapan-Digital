'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Trash2, Link as LinkIcon, Mail, Phone, Calendar, User, Search, Briefcase } from "lucide-react";
import { updateCandidateAccountStatus, deleteCandidateAccount } from "./actions";
import { toast } from "sonner";
import { useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    status: string;
    createdAt: Date;
    portfolioUrl: string | null;
}

export function UserList({ users }: { users: User[] }) {
    const [search, setSearch] = useState("");

    const handleStatusChange = async (id: string, newStatus: string) => {
        const result = await updateCandidateAccountStatus(id, newStatus);
        if (result.success) {
            toast.success("Account status updated");
        } else {
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this candidate account? This will remove all their data.")) return;
        const result = await deleteCandidateAccount(id);
        if (result.success) {
            toast.success("Account deleted");
            // In a real app we might want to refresh the page or update local state
            // But since this is a client component receiving props from server, 
            // a full refresh or router.refresh() would be ideal. 
            // For now, assuming parent page refreshes or we rely on Next.js mutation behavior.
            window.location.reload();
        } else {
            toast.error("Failed to delete account");
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md w-full">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search candidates..."
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
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Candidate Profile</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Contact Info</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Account Status</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Joined Date</th>
                                <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-20 text-center">
                                        <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Briefcase size={32} className="text-slate-300" />
                                        </div>
                                        <p className="text-xl font-bold text-slate-900 mb-2">No candidates found.</p>
                                        <p className="text-slate-500 font-medium">Wait for new registrations.</p>
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="group hover:bg-slate-50/80 transition-colors">
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="size-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-slate-500 font-black text-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                                    {user.name?.[0]?.toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 text-lg">{user.name}</div>
                                                    {user.portfolioUrl && (
                                                        <a href={user.portfolioUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-bold text-blue-500 hover:underline mt-0.5">
                                                            <LinkIcon size={10} /> Portfolio
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                                    <Mail size={14} className="text-slate-400" />
                                                    {user.email}
                                                </div>
                                                {user.phone && (
                                                    <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                                        <Phone size={14} className="text-slate-400" />
                                                        {user.phone}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <Select
                                                defaultValue={user.status}
                                                onValueChange={(val) => handleStatusChange(user.id, val)}
                                            >
                                                <SelectTrigger className="h-10 w-[140px] border-2 border-slate-100 rounded-xl font-bold text-xs bg-slate-50 focus:ring-2 focus:ring-lime-100 focus:border-lime-500">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="active" className="font-bold">Active</SelectItem>
                                                    <SelectItem value="pending" className="font-bold">Pending</SelectItem>
                                                    <SelectItem value="inactive" className="font-bold">Inactive</SelectItem>
                                                    <SelectItem value="banned" className="font-bold text-rose-500">Banned</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                                                <Calendar size={16} />
                                                {new Date(user.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="size-10 inline-flex items-center justify-center rounded-xl text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-all opacity-60 group-hover:opacity-100"
                                                title="Delete Account"
                                            >
                                                <Trash2 size={20} />
                                            </button>
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
