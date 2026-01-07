"use client";

import React, { useState } from "react";
import { Link } from "@/lib/inertia-adapter";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { SiInstagram, SiTiktok } from '@icons-pack/react-simple-icons';

interface OverlayMenuProps {
    open: boolean;
    onClose: () => void;
    navItems: { title: string; href: string }[];
}

const menuVariants: any = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    },
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: any = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function OverlayMenu({ open, onClose, navItems }: OverlayMenuProps) {
    const pathname = usePathname();
    const [hoveredLabel, setHoveredLabel] = useState<string>("Menu");

    // Contact Data (Mirrored from Footer default settings)
    const contactInfo = {
        address: '18 Parc Place SCBD, Jl. Jend. Sudirman kav 52-53 Tower C Lantai 3, Senayan, Kebayoran Baru, Jakarta 12190',
        email: 'hello@majumapan.id',
        phone: '+62 878-8080-8980',
        instagram: 'https://www.instagram.com/majumapan/',
        linkedin: 'https://www.linkedin.com/company/majumapan/',
        tiktok: 'https://www.tiktok.com/@majumapan',
    };

    const visibleItems = navItems.filter(item => {
        if (item.title === "Home" && pathname === "/") return false;
        return true;
    });

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed inset-0 z-[60] bg-zinc-950 text-white overflow-hidden"
                >
                    {/* Unified Close Button (Top Right) */}
                    <motion.button
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        onClick={onClose}
                        className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 text-white"
                        aria-label="Close Menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </motion.button>

                    <div className="flex flex-col lg:flex-row h-full w-full">
                        {/* Left Column: Menu Items */}
                        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-24 relative z-20">
                            <nav className="flex flex-col items-start gap-4 sm:gap-6">
                                {visibleItems.map((item) => (
                                    <MenuItem
                                        key={item.title}
                                        item={item}
                                        onClose={onClose}
                                        onHover={setHoveredLabel}
                                        isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                                    />
                                ))}
                            </nav>
                        </div>

                        {/* Right Column: Contact & Socials */}
                        <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative overflow-hidden bg-zinc-900/50 border-l border-white/5 p-12 lg:p-24">
                            {/* Background Echo Text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
                                <motion.span
                                    key={hoveredLabel}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-[20vw] font-black uppercase whitespace-nowrap text-white"
                                >
                                    {hoveredLabel}
                                </motion.span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="relative z-10 w-full max-w-lg space-y-12"
                            >
                                {/* Contact Details */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

                                    <div className="flex items-start gap-4 text-zinc-400 hover:text-white transition-colors">
                                        <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-brand-500" />
                                        <p className="text-lg leading-relaxed">{contactInfo.address}</p>
                                    </div>

                                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-zinc-400 hover:text-brand-400 transition-colors group">
                                        <Mail className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" />
                                        <span className="text-lg">{contactInfo.email}</span>
                                    </a>

                                    <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors">
                                        <Phone className="w-6 h-6 text-brand-500" />
                                        <span className="text-lg">{contactInfo.phone}</span>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Connect</h4>
                                    <div className="flex gap-4">
                                        <SocialLink href={contactInfo.instagram} icon={<SiInstagram className="w-6 h-6" />} />
                                        <SocialLink href={contactInfo.linkedin} icon={<Linkedin className="w-6 h-6" />} />
                                        <SocialLink href={contactInfo.tiktok} icon={<SiTiktok className="w-6 h-6" />} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-brand-500/20 hover:border-brand-500 hover:text-brand-400 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function MenuItem({
    item,
    onClose,
    onHover,
    isActive
}: {
    item: { title: string; href: string };
    onClose: () => void;
    onHover: (label: string) => void;
    isActive: boolean;
}) {
    return (
        <motion.div variants={itemVariants} className="overflow-visible py-2">
            <Link
                href={item.href}
                onClick={onClose}
                onMouseEnter={() => onHover(item.title)}
                onMouseLeave={() => onHover("Menu")}
                className={`
                    relative block px-6 py-2 rounded-xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter transition-all duration-300
                    ${isActive
                        ? "bg-brand-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 hover:to-brand-600 hover:translate-x-4"
                    }
                `}
            >
                {item.title}
            </Link>
        </motion.div>
    );
}
