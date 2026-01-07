'use client';

import { useState } from 'react';
import { LeadForm } from '@/components/lead-form';
import { LeadModal } from '@/components/lead-modal';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MessageCircle, Rocket, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function InteractiveCTASection() {
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <section
            className="relative overflow-hidden py-24 lg:py-32 bg-black min-h-[90vh] flex items-center justify-center"
            onMouseEnter={() => setHasFocus(true)}
            onMouseLeave={() => setHasFocus(false)}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Initial Ambient Background */}
                <motion.div
                    animate={{ opacity: hasFocus ? 0 : 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] opacity-20 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-20" />
                </motion.div>

                {/* Focused "Glowing Green" Background */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hasFocus ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-black to-black" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[100px]" />
                </motion.div>

                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="grid lg:grid-cols-[6fr_4fr] gap-8 items-center">
                    {/* Left Column: Text & Value Prop (60% width) */}
                    <motion.div
                        className="text-left space-y-4 order-2 lg:order-1"
                        animate={{
                            filter: hasFocus ? "blur(0px)" : "blur(0.5px)",
                            opacity: hasFocus ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-bold text-sm uppercase tracking-widest shadow-lg shadow-brand-500/10"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Transform Your Future</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter"
                        >
                            Ready to <br />
                            <span className="text-brand-500 inline-block transform hover:scale-105 transition-transform duration-300 cursor-default drop-shadow-[0_0_15px_rgba(47,221,173,0.5)]">Dominate Your Market?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-lg leading-relaxed"
                        >
                            Stop competing and start leading. Our data-driven strategies build brands that don't just survive—they thrive.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 pt-2"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 text-white font-semibold">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-500">
                                        <Rocket className="w-5 h-5" />
                                    </div>
                                    <span>Scalable Growth Frameworks</span>
                                </div>
                                <div className="flex items-center gap-3 text-white font-semibold">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-500">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <span>High-Impact Creative Assets</span>
                                </div>
                                <div className="flex items-center gap-3 text-white font-semibold">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-500">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span>24/7 Dedicated Support</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="pt-2 flex flex-wrap items-center gap-6"
                        >
                            <LeadModal
                                source="Homepage Modal"
                                trigger={
                                    <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-100 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                                        Book Strategy Call
                                    </Button>
                                }
                                title="Book Your Strategy Call"
                                description="Let's find the best path forward for your business."
                            />

                            <div className="hidden sm:block">
                                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider block mb-1">Or email us directly</span>
                                <a href="mailto:hello@majumapan.com" className="text-white hover:text-brand-500 font-bold transition-colors">hello@majumapan.com</a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: 3D Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        animate={{
                            scale: hasFocus ? 1.02 : 1,
                            rotateY: hasFocus ? 0 : 5
                        }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="order-1 lg:order-2 perspective-1000"
                    >
                        <div className="relative group">
                            {/* Card Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                            {/* Card Content */}
                            <div className="relative p-6 sm:p-8 rounded-[2rem] bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl">
                                <div className="absolute top-0 right-0 p-8 opacity-20">
                                    <MessageCircle className="w-24 h-24 text-brand-500" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Send a Message</h3>
                                <p className="text-gray-400 mb-8 relative z-10 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>

                                <LeadForm source="Homepage Inline" className="bg-transparent border-none p-0 shadow-none backdrop-blur-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
