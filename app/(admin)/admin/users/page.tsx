"use client";
import React, { useState, useEffect } from "react";
import { Users, Trash2, Plus, UserPlus, Mail, Shield, Calendar, Search } from "lucide-react";
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
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "admin" });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await getUsers();
        setUsers(data as any); // Casting for simplicity
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this user?")) return;
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

    if (loading) return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400 gap-4">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-lime-500 rounded-full animate-spin"></div>
            <p className="font-black text-slate-900">Loading users...</p>
        </div>
    );

    return (
        <div className="space-y-8 p-8  animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                    <AdminHeader
                        defaultTitle="User Management"
                        defaultSubtitle="Manage system access and roles."
                    />
                </div>
                <button
                    onClick={() => setShowAdd(!showAdd)}
                    className="px-6 py-3 bg-gradient-to-r from-lime-400 to-black text-white font-bold rounded-xl shadow-lg shadow-lime-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                    <UserPlus size={20} />
                    <span>Add User</span>
                </button>
            </div>

            {showAdd && (
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 mb-8 animate-in slide-in-from-top-4 duration-500">
                    <h3 className="text-2xl font-black text-slate-900 mb-6">New User Account</h3>
                    <form onSubmit={handleCreate} className="space-y-6 max-w-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                                <input required placeholder="Jane Doe" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 font-bold transition-all" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                                <input required placeholder="john@example.com" type="email" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium transition-all" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                                <input required placeholder="••••••••" type="password" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium transition-all" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Role</label>
                                <select value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })} className="w-full bg-white/50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium appearance-none cursor-pointer">
                                    <option value="admin">Administrator</option>
                                    <option value="editor">Editor</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-3 pt-4 border-t-2 border-slate-100">
                            <button type="button" onClick={() => setShowAdd(false)} className="px-6 py-3 text-slate-500 font-bold hover:bg-slate-100 rounded-xl transition-colors cursor-pointer">Cancel</button>
                            <button type="submit" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all active:scale-95 cursor-pointer">
                                <Plus size={20} /> Create Account
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl shadow-lg shadow-slate-200/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/80 border-b-2 border-slate-100">
                            <tr>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-wider font-bold text-slate-500">User</th>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-wider font-bold text-slate-500">Email</th>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-wider font-bold text-slate-500">Role</th>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-wider font-bold text-slate-500">Joined</th>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-wider font-bold text-slate-500 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-slate-50 transition-colors group cursor-default">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-700 border-2 border-lime-100 flex items-center justify-center font-black text-sm shadow-sm group-hover:scale-110 transition-transform">
                                                {user.name?.[0]?.toUpperCase()}
                                            </div>
                                            <span className="font-bold text-slate-900">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                            <Mail size={14} className="text-slate-400" />
                                            {user.email}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit border-2 ${user.role === 'admin' ? 'bg-purple-50 text-purple-700 border-purple-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                                            <Shield size={12} />
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                            <Calendar size={14} className="text-slate-400" />
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button onClick={() => handleDelete(user.id)} className="p-2.5 hover:bg-rose-50 rounded-xl text-slate-400 hover:text-rose-600 hover:border-rose-100 border-2 border-transparent transition-all opacity-60 group-hover:opacity-100 cursor-pointer">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr><td colSpan={5} className="px-8 py-12 text-center text-slate-500 font-bold border-2 border-dashed border-slate-200 m-8 rounded-xl">No users found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
