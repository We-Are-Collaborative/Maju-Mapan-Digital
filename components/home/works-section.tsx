'use client'

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Share2, Users, Heart, MessageCircle, Navigation, Plane } from 'lucide-react';
import { SiShopee } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';
import { BrandedSectionHeader } from '@/components/ui/branded-section-header';

interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    thumbnailUrl: string | null;
    client: {
        name: string;
        legalName?: string | null;
        logoUrl?: string | null;
        brandColor?: string | null;
    } | null;
}

interface CaseStudyItem {
    id: string;
    brand: string;
    campaign: string;
    slug: string;
    color: string;
    brandColor: string;
    logoUrl: string;
    description: string;
    metrics: { label: string; value: string }[];
}

const CaseStudyCard = ({ item }: { item: CaseStudyItem }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    // Brand-specific decorative elements
    const renderDecorativeIcon = () => {
        const iconClass = "absolute size-32 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700";
        if (item.brand.toLowerCase().includes('grab')) {
            return <Users className={`${iconClass} -right-8 -top-8 rotate-12`} />;
        }
        if (item.brand.toLowerCase().includes('traveloka')) {
            return <Plane className={`${iconClass} -right-8 -top-8 -rotate-12`} />;
        }
        if (item.brand.toLowerCase().includes('shopee')) {
            return <Heart className={`${iconClass} -right-8 -top-8 rotate-45`} />;
        }
        return null;
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
            className="group relative h-[520px] w-full"
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20"
            >
                {/* Decorative Background Icon */}
                <div style={{ transform: "translateZ(20px)" }} className="absolute inset-0 overflow-hidden pointer-events-none">
                    {renderDecorativeIcon()}
                </div>

                <div
                    style={{ transform: "translateZ(100px)" }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 flex size-32 items-center justify-center rounded-3xl bg-black/40 p-4 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110"
                >
                    <div
                        className="relative flex size-full items-center justify-center rounded-2xl overflow-hidden"
                        style={{ backgroundColor: item.brandColor || '#333' }}
                    >
                        <div className="relative size-full p-2 flex items-center justify-center">
                            {item.logoUrl ? (
                                <img src={item.logoUrl} alt={item.brand} className="max-h-full max-w-full object-contain" />
                            ) : (
                                <Users className="size-12 text-white/20" />
                            )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                    </div>
                </div>

                <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex h-full flex-col justify-end pt-6">
                    <div className="mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                            {item.brand} Campaign
                        </span>
                    </div>
                    <h3 className="mb-2 text-3xl font-black text-white leading-tight tracking-tighter capitalize">
                        {item.campaign}
                    </h3>
                    <p className="mb-4 text-white/50 text-sm font-medium leading-relaxed line-clamp-2">
                        {item.description}
                    </p>

                    {/* Metrics Section */}
                    {item.metrics && item.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-6">
                            {item.metrics.map((metric, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="text-3xl font-black text-white">{metric.value}</span>
                                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest">{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <Link
                        href={`/case-studies/${item.slug}`}
                        className="group/btn inline-flex w-full items-center justify-between rounded-2xl bg-white/[0.05] px-6 py-4 text-[10px] font-black text-white transition-all hover:bg-white/[0.08]"
                    >
                        <span className="tracking-[0.2em] uppercase">VIEW CASE STUDY</span>
                        <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const WorksSection = ({ title, subtitle, caseStudies }: { title?: string; subtitle?: string; caseStudies?: any[] }) => {
    // Map dynamic case studies to CaseStudyItem structure
    const displayItems: CaseStudyItem[] = (caseStudies || []).map(cs => ({
        id: cs.id,
        brand: cs.client?.name || 'Client',
        campaign: cs.title,
        slug: cs.slug,
        color: '#333', // Default
        brandColor: cs.client?.brandColor || '#333',
        logoUrl: cs.client?.logoUrl || '',
        description: cs.excerpt || '',
        metrics: cs.metrics || []
    }));

    return (
        <section className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32" id="case-studies">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto mb-24 max-w-4xl text-center">
                    <BrandedSectionHeader
                        badgeText="Selected Campaigns"
                        title={
                            <>
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Masterpieces</span>
                            </>
                        }
                        className="mb-8"
                    />
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-16">
                    {displayItems.map((item) => (
                        <CaseStudyCard key={item.id} item={item} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-24 flex flex-col items-center justify-center gap-6"
                >
                    <div className="h-px w-24 bg-white/10" />
                    <Link href="/case-studies">
                        <button className="group relative flex items-center gap-4 text-sm font-black tracking-[0.3em] text-white uppercase">
                            Explore All Case Studies
                            <div className="flex size-10 items-center justify-center rounded-full border border-white/10 transition-all group-hover:scale-110 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-black">
                                <ArrowRight className="size-4" />
                            </div>
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Background Glow Elements */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-full translate-y-1/2 rounded-full bg-brand-500/5 blur-[120px]" />
        </section >
    );
};
