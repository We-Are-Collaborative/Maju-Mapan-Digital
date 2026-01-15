"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import SeoDetailView from "../components/SeoDetailView";

export default function EditSEOPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const router = useRouter();

    return (
        <div className=" space-y-8">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/seo" className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white capitalize">Edit SEO: {slug}</h1>
                    <p className="text-sm text-slate-400">Manage real-time search engine appearance</p>
                </div>
            </div>

            <SeoDetailView
                slug={slug}
                initialScore={0}
                onUpdate={() => {
                    // unexpected side effect? maybe refresh router
                    router.refresh();
                }}
            />
        </div>
    );
}
