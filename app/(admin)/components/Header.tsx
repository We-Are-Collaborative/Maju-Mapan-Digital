"use client";
import { signOut } from "next-auth/react";
import { LogOut, ExternalLink, Bell, User } from "lucide-react";
import Link from "next/link";

export default function Header({ user }: { user: any }) {
    return (
        <div className="flex items-center gap-6">
            <Link
                href="/"
                target="_blank"
                className="hidden xl:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 hover:text-white hover:bg-indigo-600 transition-all bg-indigo-50 px-5 py-2.5 rounded-xl border border-indigo-100"
            >
                <ExternalLink size={14} />
                <span>Visit Ecosystem</span>
            </Link>

            <div className="h-8 w-[1px] bg-slate-100 hidden sm:block" />

            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-black text-slate-900 leading-none mb-1">{user?.name || "Admin"}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-lime-600">{user?.role || "Administrator"}</p>
                </div>
                <div className="size-11 rounded-[1.2rem] bg-slate-900 border-4 border-white shadow-xl flex items-center justify-center text-white ring-2 ring-slate-100">
                    <User size={18} className="text-lime-400" />
                </div>
            </div>

            <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="size-11 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-[1.2rem] transition-all border border-transparent hover:border-rose-100 shadow-sm sm:shadow-none"
                title="Sign Out"
            >
                <LogOut size={20} />
            </button>
        </div>
    );
}
