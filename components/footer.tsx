"use client";

import { ArrowRight, Linkedin, Mail, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { SiFacebook, SiInstagram, SiTiktok } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { LoginModal } from './auth/LoginModal';

// Mock settings if props are missing in App Router context (since usePage is Inertia)
// In a real app we'd pass these as props or use a context. 
// For now, defaulting to empty objects to prevent crash if usePage fails or providing defaults.
const defaultContactSettings = {
    contact_address: '18 Parc Place SCBD, Jl. Jend. Sudirman kav 52-53 Tower C Lantai 3, Senayan, Kebayoran Baru, Jakarta 12190',
    email_link: 'mailto:hello@majumapan.id',
    email_text: 'hello@majumapan.id',
    contact_phone: '+62 878-8080-8980',
    instagram_link: 'https://www.instagram.com/majumapan/',
    instagram_text: '@majumapan',
    linkedin_link: 'https://www.linkedin.com/company/majumapan/',
    linkedin_text: 'Maju Mapan Digital',
    tiktok_link: 'https://www.tiktok.com/@majumapan',
};
const defaultSiteSettings = { siteName: 'Maju Mapan Digital' };

export const Footer = () => {
    // Attempt to safely access props or fallback. 
    // In App Router, we shouldn't use usePage() from Inertia.
    // Assuming this component is now used in Next.js App Router context.
    const contactSettings = defaultContactSettings;
    const siteSettings = defaultSiteSettings;

    return (
        <footer className="bg-slate-950 pt-16 pb-8 text-white border-t border-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:col-span-4">
                        <div className="flex items-center gap-2">
                            {/* <img src="/assets/logo.svg" className="h-10 w-auto" alt="Logo" /> */}
                            <Image
                                src="/assets/logo-5758.svg"
                                alt="Maju Mapan Digital"
                                width={40}
                                height={50}
                                className="h-10 w-auto brightness-0 invert"
                            />
                            <span className="text-xl font-bold tracking-tight">Maju Mapan</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Empowering your digital presence with cutting-edge solutions and strategic innovation.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            <Link href={contactSettings.instagram_link} target="_blank" className="hover:text-emerald-400 transition-colors"><SiInstagram className="w-5 h-5" /></Link>
                            <Link href={contactSettings.linkedin_link} target="_blank" className="hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href={contactSettings.tiktok_link} target="_blank" className="hover:text-emerald-400 transition-colors"><SiTiktok className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Sitemap 1 */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/about-us" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
                            <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/contact-us" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Sitemap 2 */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/solutions" className="hover:text-emerald-400 transition-colors">Digital Solutions</Link></li>
                            <li><Link href="/case-studies" className="hover:text-emerald-400 transition-colors">Case Studies</Link></li>
                            <li><Link href="/insights" className="hover:text-emerald-400 transition-colors">Insights</Link></li>
                            <li><Link href="/contact-us" className="hover:text-emerald-400 transition-colors">Get in Touch</Link></li>
                        </ul>
                    </div>

                    {/* Login / CTA */}
                    <div className="lg:col-span-4 flex flex-col items-start gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                        <h3 className="font-semibold text-lg text-white">Client & Partner Access</h3>
                        <p className="text-sm text-slate-400">
                            Access your dashboard, manage campaigns, or update your candidate profile.
                        </p>
                        <LoginModal />
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} {siteSettings.siteName}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <Link href="/faq" className="hover:text-emerald-400 transition-colors">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
