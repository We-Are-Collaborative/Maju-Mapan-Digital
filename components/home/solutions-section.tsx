'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    TrendingUp,
    Code2,
    Compass,
    Palette,
    Users,
    Zap,
    Search,
    MousePointerClick,
    Star,
    ShieldCheck,
    Globe,
    BarChart3,
    Target,
    Activity,
    Video,
    Share2,
    Link2,
    Percent,
    UserPlus,
    Mail,
    RefreshCw
} from 'lucide-react';
import { BrandedSectionHeader } from '@/components/ui/branded-section-header';
import Link from 'next/link';
import { Speciality } from '@/types/speciality';
import { SolutionCard } from '@/components/solutions/solution-card';
import { getUniqueCardStyles } from '@/lib/solution-styles';

interface SolutionsSectionProps {
    specialities: Speciality[];
    title?: string;
    subtitle?: string;
}


export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
    specialities,
    title = "Our Specialties",
    subtitle = "We build your brand across every platform — creating bold, cohesive campaigns that hit home with your audience."
}) => {
    return (
        <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32" id="our-specialties">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/assets/bg_hello_dekstop.webp')] bg-cover bg-center opacity-10 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            </div>

            {/* Background Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-1/4 size-[500px] rounded-full bg-brand-500/10 blur-[120px]" />
                <div className="absolute bottom-0 -right-1/4 size-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Header Section */}
                <BrandedSectionHeader
                    badgeText="Expertise"
                    title={
                        <>
                            Global <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Solutions</span>
                        </>
                    }
                    subtitle={subtitle}
                    className="mb-20"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-fr">
                    {specialities.map((item, index) => {
                        const styles = getUniqueCardStyles(item.slug || "");
                        const isDigitalPerformance = item.slug === 'digital-performance-marketing';
                        const isInfluencer = item.slug === 'influencer-kol-marketing';
                        const isSEO = item.slug === 'seo-organic-growth';

                        // Map specific images, English content, and client logos to slugs
                        let bgImage;
                        let englishDescription = item.excerpt || "";
                        let clientLogos: string[] = [];

                        if (isDigitalPerformance) {
                            bgImage = '/assets/bg_banner_dekstop.webp';
                            englishDescription = "Data-driven campaigns designed to scale. We optimize your ad spend across Google, Meta, and TikTok to deliver maximum ROI and predictable revenue growth.";
                            clientLogos = ['/assets/client/grab.svg', '/assets/client/jenius.svg', '/assets/client/traveloka.svg'];
                        }
                        if (isInfluencer) {
                            bgImage = '/assets/bg-speciality.webp';
                            englishDescription = "Connect your brand with authentic voices that resonate. We manage end-to-end influencer campaigns that drive engagement, trust, and measurable conversions.";
                            clientLogos = ['/assets/client/finally_find_you.svg', '/assets/client/ascott.svg', '/assets/client/pegadaian.svg'];
                        }
                        if (isSEO) {
                            bgImage = '/assets/bg-tools.webp';
                            englishDescription = "Dominate search results and build long-term authority. Our technical SEO and content strategies ensure your brand is found by the right audience at the right time.";
                            clientLogos = ['/assets/client/prime_video.svg', '/assets/client/jet.svg', '/assets/client/citroen.svg'];
                        }

                        // Grid positioning for Bento effect
                        let gridClasses = "col-span-1 lg:col-span-12";
                        if (isDigitalPerformance) {
                            gridClasses = "lg:col-span-7 lg:row-span-2";
                        } else if (isInfluencer || isSEO) {
                            gridClasses = "lg:col-span-5";
                        }

                        // Skip if not one of the featured 3 (though they should already be filtered)
                        if (!isDigitalPerformance && !isInfluencer && !isSEO) return null;

                        return (
                            <div key={item.id} className={`${gridClasses} h-full`}>
                                <SolutionCard
                                    title={item.title || ""}
                                    description={englishDescription}
                                    slug={item.slug || ""}
                                    icon={styles.icon}
                                    index={index}
                                    styles={styles}
                                    featured={isDigitalPerformance}
                                    backgroundImage={bgImage}
                                    clientLogos={clientLogos}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 flex justify-center"
                >
                    <Link href="/solutions">
                        <button className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-5 text-lg font-black text-black transition-all hover:bg-brand-500 hover:scale-105 active:scale-95 shadow-2xl">
                            <span className="relative z-10 transition-colors group-hover:text-black">VIEW ALL SOLUTIONS</span>
                            <ArrowRight className="relative z-10 size-5 transition-transform group-hover:translate-x-2" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
