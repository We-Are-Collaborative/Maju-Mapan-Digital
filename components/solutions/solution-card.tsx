'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SolutionCardProps {
    title: string;
    description: string;
    slug: string;
    icon: LucideIcon;
    index: number;
    styles: {
        gradient: string;
        border: string;
        iconBg: string;
        accent: string;
        pattern: string;
        secondaryIcon?: React.ReactNode;
    };
    featured?: boolean;
    backgroundImage?: string;
    clientLogos?: string[];
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
    title,
    description,
    slug,
    icon: Icon,
    index,
    styles,
    featured = false,
    backgroundImage,
    clientLogos
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: featured ? -5 : -10, scale: featured ? 1.01 : 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
            className={`group relative flex flex-col ${featured ? 'min-h-[500px] lg:min-h-full' : 'min-h-[400px]'} rounded-[2.5rem] border border-white/5 bg-[#050505] p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/10`}
        >
            {/* Background Image Layer */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundImage}
                        alt=""
                        className={`size-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} mix-blend-overlay opacity-60`} />
                </div>
            )}

            {/* Content Overlay - Gradient */}
            {!backgroundImage && (
                <>
                    <div className={`absolute inset-0 rounded-[2.5rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay ${styles.pattern}`} />
                    <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                </>
            )}

            {/* Decorative Icon */}
            <div className={`absolute top-0 right-0 p-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 ${featured ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                {styles.secondaryIcon}
            </div>

            <div className="relative z-10 flex flex-1 flex-col justify-between h-full">
                <div>
                    {/* Icon */}
                    <div className={`mb-6 flex size-14 lg:size-16 items-center justify-center rounded-3xl ${styles.iconBg} text-black shadow-lg shadow-${styles.iconBg}/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-${styles.iconBg}/40`}>
                        <Icon className="size-6 lg:size-8" />
                    </div>

                    {/* Title */}
                    <h3 className={`mb-4 font-black tracking-tight text-white group-hover:text-white transition-colors ${featured ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'}`}>
                        {title}
                    </h3>

                    {/* Description - English Only Enforcement & Line Clamp */}
                    <p className={`mb-8 text-white/70 font-medium leading-relaxed group-hover:text-white/90 transition-colors ${featured ? 'text-lg lg:text-xl line-clamp-4 max-w-2xl' : 'text-base line-clamp-3'}`}>
                        {description}
                    </p>

                    {/* Animated CTA */}
                    <Link
                        href={`/solutions/${slug}`}
                        className="group/btn inline-flex items-center gap-3 w-fit mb-8"
                    >
                        <div className={`relative overflow-hidden rounded-full ${featured ? 'bg-brand-500 px-8 py-4' : 'bg-white/10 px-6 py-3'} transition-all duration-300 group-hover/btn:bg-white group-hover/btn:scale-105`}>
                            <span className={`relative z-10 text-sm font-bold tracking-wider uppercase ${featured ? 'text-black' : 'text-white'} group-hover/btn:text-black transition-colors`}>
                                Explore Solution
                            </span>
                        </div>
                        <div className={`flex size-10 items-center justify-center rounded-full border ${featured ? 'border-brand-500 text-brand-500' : 'border-white/20 text-white'} transition-all duration-300 group-hover/btn:bg-brand-500 group-hover/btn:border-brand-500 group-hover/btn:text-black group-hover/btn:rotate-[-45deg]`}>
                            <ArrowRight className="size-5" />
                        </div>
                    </Link>
                </div>

                {/* Client Logos - Success Stories */}
                {clientLogos && clientLogos.length > 0 && (
                    <div className="mt-auto pt-6 border-t border-white/10">
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Trusted By</p>
                        <div className="flex items-center gap-4">
                            {clientLogos.map((logo, i) => (
                                <div key={i} className="h-8 w-auto relative opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <img src={logo} alt="Client Logo" className="h-full w-auto object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
};
