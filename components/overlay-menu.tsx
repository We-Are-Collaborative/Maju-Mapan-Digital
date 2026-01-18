"use client";

import React, { useState } from "react";
import { Link } from "@/lib/inertia-adapter";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Linkedin, Mail, MapPin, Phone, Rocket, UserCheck, MessageSquare, Bell } from 'lucide-react';
import { SiInstagram, SiTiktok, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { NewsletterModal } from "@/components/newsletter-modal";
import { LeadModal } from "@/components/lead-modal";

interface OverlayMenuProps {
    open: boolean;
    onClose: () => void;
    navItems: { title: string; href: string }[];
    onNewsletterClick?: () => void;
    onStrategyClick?: () => void;
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

export function OverlayMenu({ open, onClose, navItems, onNewsletterClick, onStrategyClick }: OverlayMenuProps) {
    const pathname = usePathname();
    const [hoveredLabel, setHoveredLabel] = useState<string>("Menu");
    const [newsletterOpen, setNewsletterOpen] = useState(false);
    const [strategyModalOpen, setStrategyModalOpen] = useState(false);

    // Contact Data (Mirrored from Footer default settings)
    const contactInfo = {
        address: '18 Parc Place SCBD, Jl. Jend. Sudirman kav 52-53 Tower C Lantai 3, Senayan, Kebayoran Baru, Jakarta 12190',
        email: 'hello@majumapan.id',
        phone: '+62 878-8080-8980',
        whatsapp: 'https://wa.me/6287880808980',
        instagram: 'https://www.instagram.com/majumapan/',
        linkedin: 'https://www.linkedin.com/company/majumapan/',
        tiktok: 'https://www.tiktok.com/@majumapan',
        facebook: 'https://www.facebook.com/majumapan/',
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
                    className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-3xl text-white overflow-hidden"
                >
                    {/* Glassmorphism Background Elements */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-500/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
                    </div>

                    {/* Unified Close Button (Top Right) */}
                    <motion.button
                        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        onClick={onClose}
                        className="absolute top-8 right-8 size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all z-50 text-white shadow-2xl backdrop-blur-md"
                        aria-label="Close Menu"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </motion.button>

                    <div className="flex flex-col lg:flex-row h-full w-full relative z-10">
                        {/* Left Column: Menu Items */}
                        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-24">
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

                            {/* Standout Access Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-12 flex flex-wrap gap-4"
                            >
                                <Link
                                    href="/register"
                                    onClick={onClose}
                                    className="px-6 py-3 rounded-2xl bg-brand-500 text-black font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-brand-400 transition-all shadow-[0_0_30px_rgba(47,221,173,0.3)] hover:scale-105 active:scale-95"
                                >
                                    <Rocket size={18} />
                                    Mapan Dashboard
                                </Link>

                                <Link
                                    href="/login"
                                    onClick={onClose}
                                    className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                                >
                                    <UserCheck size={18} />
                                    Candidate Access
                                </Link>

                                <button
                                    onClick={() => {
                                        onClose();
                                        onStrategyClick?.();
                                    }}
                                    className="px-6 py-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                                >
                                    <MessageSquare size={18} />
                                    Strategy Call
                                </button>

                                <button
                                    onClick={() => {
                                        onClose();
                                        onNewsletterClick?.();
                                    }}
                                    className="px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                                >
                                    <Bell size={18} />
                                    Newsletter
                                </button>
                            </motion.div>
                        </div>

                        {/* Right Column: Contact & Socials */}
                        <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative overflow-hidden bg-white/[0.02] border-l border-white/5 p-12 lg:p-24 backdrop-blur-md">
                            {/* Background Echo Text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
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
                                    <h3 className="text-2xl font-black text-white mb-8 tracking-tighter uppercase">Direct Reach</h3>

                                    <div className="flex items-start gap-4 text-zinc-400 hover:text-white transition-colors group p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10">
                                        <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-brand-500" />
                                        <p className="text-lg leading-relaxed font-bold tracking-tight">{contactInfo.address}</p>
                                    </div>

                                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-zinc-400 hover:text-brand-400 transition-colors group p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10">
                                        <Mail className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" />
                                        <span className="text-lg font-black">{contactInfo.email}</span>
                                    </a>

                                    <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10">
                                        <Phone className="w-6 h-6 text-brand-500" />
                                        <span className="text-lg font-bold">{contactInfo.phone}</span>
                                    </div>

                                    {/* Animated WhatsApp Standout */}
                                    <motion.a
                                        href={contactInfo.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="flex items-center gap-5 p-6 rounded-3xl bg-[#25D366]/10 border-2 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all shadow-[0_0_40px_rgba(37,211,102,0.2)] group"
                                    >
                                        <div className="p-3 bg-[#25D366] rounded-2xl text-white group-hover:animate-bounce shadow-xl">
                                            <SiWhatsapp className="w-8 h-8" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">WhatsApp Official</span>
                                            <span className="text-2xl font-black tracking-tighter">Talk to an Expert</span>
                                        </div>
                                    </motion.a>
                                </div>

                                {/* Social Links */}
                                <div className="space-y-4 pt-6">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Global Presence</h4>
                                    <div className="flex gap-4">
                                        <SocialLink href={contactInfo.instagram} icon={<SiInstagram className="w-6 h-6" />} />
                                        <SocialLink href={contactInfo.facebook} icon={<Facebook className="w-6 h-6" />} />
                                        <SocialLink href={contactInfo.linkedin} icon={<Linkedin className="w-6 h-6" />} />
                                        <SocialLink href={contactInfo.tiktok} icon={<SiTiktok className="w-6 h-6" />} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <NewsletterModal open={newsletterOpen} onOpenChange={setNewsletterOpen} />
                    <LeadModal
                        open={strategyModalOpen}
                        onOpenChange={setStrategyModalOpen}
                        title="Book Strategy Call"
                        description="Let's find the best path forward for your business."
                        source="Overlay Menu Strategy Call"
                    />
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
