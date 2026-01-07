"use client";
import { signOut } from "next-auth/react";
import { LogOut, ExternalLink, Bell } from "lucide-react";
import Link from "next/link";

export default function Header({ user }: { user: any }) {
    return (
        <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-xl border-b border-indigo-50/50 sticky top-0 z-30 shadow-sm">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-black tracking-tight text-slate-900">Dashboard</h2>
            </div>

            <div className="flex items-center gap-6">
                <Link
                    href="/"
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg"
                >
                    <ExternalLink size={14} />
                    <span>View Site</span>
                </Link>

                <div className="h-6 w-[1px] bg-slate-200" />

                <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-slate-900">{user?.name || "Admin"}</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{user?.role || "Administrator"}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
                        {user?.name?.[0] || "A"}
                    </div>
                </div>

                <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                    title="Sign Out"
                >
                    <LogOut size={20} />
                </button>
            </div>
        </header>
    );
}
