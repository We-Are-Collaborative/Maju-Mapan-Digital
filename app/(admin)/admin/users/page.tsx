"use client";
import React, { useState, useEffect } from "react";
import { Users, Trash2, Plus, UserPlus, Mail, Shield, Calendar, Search, Crown, Edit3 } from "lucide-react";
import AdminHeader from "../../components/AdminHeader";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}

import { getUsers, deleteUser, createUser } from "@/app/actions/users";

export default function UsersManager() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAdd, setShowAdd] = useState(false);
    const [search, setSearch] = useState("");
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "admin" });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await getUsers();
        setUsers(data as any);
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;
        await deleteUser(id);
        loadUsers();
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await createUser(newUser);
        if (res.success) {
            setShowAdd(false);
            setNewUser({ name: "", email: "", password: "", role: "admin" });
            loadUsers();
        } else {
            alert("Failed to create user: " + res.error);
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return (
        <div className="min-h-screen p-12 max-w-[1600px] mx-auto flex flex-col items-center justify-center animate-in fade-in duration-700">
            <div className="size-16 rounded-3xl bg-slate-100 flex items-center justify-center mb-6 animate-pulse">
                <Users size={32} className="text-slate-300" />
            </div>
            <p className="text-xl font-black text-slate-900">Loading Team...</p>
        </div>
    );

    return (
        <div className="min-h-screen p-8 w-full mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex-1">
                    <AdminHeader
                        defaultTitle="Team Management"
                        defaultSubtitle="Manage internal users and access permissions."
                    />
                </div>
                <button
                    onClick={() => setShowAdd(!showAdd)}
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 flex items-center gap-3"
                >
                    <UserPlus size={20} />
                    <span>Add New Admin</span>
                </button>
            </div>

            {/* Add User Form */}
            {showAdd && (
                <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border-4 border-slate-100 animate-in slide-in-from-top-4 duration-500 ring-4 ring-slate-50/50">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900">New Admin Account</h3>
                            <p className="text-slate-500 font-medium">Create a new user with system access.</p>
                        </div>
                        <button onClick={() => setShowAdd(false)} className="size-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors">
                            <Plus size={24} className="rotate-45" />
                        </button>
                    </div>

                    <form onSubmit={handleCreate} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                                <input
                                    required
                                    placeholder="e.g. Jane Doe"
                                    value={newUser.name}
                                    onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                                    className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 text-slate-900 font-bold focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all placeholder:text-slate-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                                <input
                                    required
                                    placeholder="e.g. jane@company.com"
                                    type="email"
                                    value={newUser.email}
                                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                                    className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 text-slate-900 font-bold focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all placeholder:text-slate-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Password</label>
                                <input
                                    required
                                    placeholder="••••••••"
                                    type="password"
                                    value={newUser.password}
                                    onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                                    className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 text-slate-900 font-bold focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all placeholder:text-slate-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">System Role</label>
                                <div className="relative">
                                    <select
                                        value={newUser.role}
                                        onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                                        className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 text-slate-900 font-bold focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="admin">Administrator (Full Access)</option>
                                        <option value="editor">Editor (Content Only)</option>
                                    </select>
                                    <Crown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointers-events-none" size={18} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4 border-t-2 border-slate-50">
                            <button type="button" onClick={() => setShowAdd(false)} className="flex-1 h-14 bg-white border-2 border-slate-100 text-slate-500 font-bold hover:bg-slate-50 hover:text-slate-900 rounded-2xl transition-colors uppercase tracking-widest text-xs">
                                Cancel
                            </button>
                            <button type="submit" className="flex-1 h-14 bg-lime-400 text-slate-900 font-black hover:bg-lime-500 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                                <Plus size={18} /> Create Account
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Content Area */}
            <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-100 transition-all shadow-sm"
                    />
                </div>

                {/* Users List Card */}
                <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 shadow-xl overflow-hidden px-8 pb-4">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-slate-100">
                                    <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">User Profile</th>
                                    <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Contact</th>
                                    <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">System Role</th>
                                    <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400">Joined Date</th>
                                    <th className="px-6 py-8 text-[10px] uppercase tracking-widest font-black text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredUsers.map(user => (
                                    <tr key={user.id} className="group hover:bg-slate-50/80 transition-colors">
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="size-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-slate-500 font-black text-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                                    {user.name?.[0]?.toUpperCase()}
                                                </div>
                                                <span className="font-bold text-slate-900 text-lg">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-3 text-slate-500 font-medium bg-slate-50 w-fit px-3 py-1.5 rounded-lg border border-slate-100">
                                                <Mail size={14} className="text-slate-400" />
                                                {user.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 w-fit border-2 ${user.role === 'admin' ? 'bg-purple-50 text-purple-600 border-purple-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                                                <Shield size={14} className="fill-current" />
                                                {user.role}
                                            </span>
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
                                                className="size-10 inline-flex items-center justify-center rounded-xl text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-all"
                                                title="Delete User"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredUsers.length === 0 && (
                            <div className="py-20 text-center">
                                <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users size={32} className="text-slate-300" />
                                </div>
                                <p className="text-xl font-bold text-slate-900 mb-2">No users found.</p>
                                <p className="text-slate-500 mb-6">Try searching for a different name or email.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
