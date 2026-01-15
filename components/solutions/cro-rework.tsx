'use client';

import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';
import {
    DollarSign,
    ClipboardCheck,
    Rocket,
    Beaker,
    Palette,
    BarChart3,
    Quote,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

interface StatProps {
    value: string;
    label: string;
    sub: string;
    icon: React.ReactNode;
}

const StatItem: React.FC<StatProps> = ({ value, label, sub, icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/50 transition-colors duration-300"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity text-brand-500">
                {icon}
            </div>
            <p className="text-slate-400 text-sm font-semibold tracking-wide mb-2">{label}</p>
            <p className="text-4xl lg:text-5xl font-black text-white mb-2">{value}</p>
            <p className="text-slate-500 text-xs font-bold tracking-wider">{sub}</p>

            {/* Ambient glow on hover */}
            <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </motion.div>
    );
};

export const CROPerformanceShowcase: React.FC = () => {
    return (
        <div className="space-y-32">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatItem
                    label="Revenue Generated"
                    value="$50M+"
                    sub="Average client return"
                    icon={<DollarSign size={40} />}
                />
                <StatItem
                    label="Audits Performed"
                    value="300+"
                    sub="Year over year growth"
                    icon={<ClipboardCheck size={40} />}
                />
                <StatItem
                    label="Avg Lift Month 1"
                    value="15%"
                    sub="Immediate impact metrics"
                    icon={<Rocket size={40} />}
                />
            </div>

            {/* Vision Statement */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center py-12"
            >
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
                    The architecture of persuasion
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                    We combine data science with behavioral psychology to unlock your site's true potential.
                    Most agencies guess. We test. Our rigorous methodology ensures that every pixel on your page serves a purpose:
                    converting visitors into loyal customers.
                </p>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-brand-500 mx-auto rounded-full mt-10"
                />
            </motion.div>

            {/* Service Expertise */}
            <div className="space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-brand-500 font-bold tracking-[0.2em] text-sm mb-3">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-white">Comprehensive CRO services</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "A/B testing & experimentation", desc: "Rigorous testing of hypotheses to find wining variations that drive measurable growth.", icon: <Beaker className="size-8" />, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIhUSkAtnA-h048d7e4vJ_kfdN02MVysOYdMdbK4z5Mb37TqmUfKO0nXXzYLLCWKeBnV3PWucY2UuuWwNfQbYin7nS_LorFRYHwBGKPmzvPxEBMhOPIszwy7fqU9GXCPoht_a4zVKgZN72YTpCiDoaD4o1s_k60viQ4DnhSY9kK6Ew7_P4idyfDFY55T9eYcXIt50ArUxtAddC7vgwQsl44RO469j3RiQ4JAD6IPxmxrj6RuqPM0PH5ukBuEn1Un27WG3cNMW6FZk" },
                        { title: "UX/UI audits", desc: "Deep-dive analysis of your user journey to identify friction points and opportunities.", icon: <Palette className="size-8" />, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGsefDuV1hpDn88m6WMUNhZRF96lXcNsuOHPJGwp145j52f9LZ5hyw34yp-Ikb0f6EeabsrhiZtAWnJSTssPxwTLVF_i40bx4MkncczMHA0V696CE--oyRMjns9SvSMesFtz3EpPyTnfqVr9-WusIZrUn9c9hk0NM02ufTNCuKje3wnhkHoRkLnpYVKrAC3ItzdtQHG5rmakieb3yXTMIjMnFRKgGTwfKXmgxdhgGuBNTzJDKqPq-frF0QotCEqIIK8FDCmK9SHu4" },
                        { title: "Behavioral analytics", desc: "Understanding the 'why' behind the 'what' using heatmaps and session recordings.", icon: <BarChart3 className="size-8" />, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBozpMbKM3VYDH68_1_1clwg0Fds3NvgLvwyneZo41ADoc3dQIyWMhRzRVSPIQSsFdrFbslghJMInWhrkZNsa4nQ81LUqsouM8GDn2RPVaAoBTYRmOGMpFFUnK7ReBX7FtF8sKZ0yoLlWm8Z7VTbj1aS4PEbHU_PIu66Bw3O8oMWO58XqXVWK3TY6MyP7fIZ7xKxf9cvSSu0_l1l8U-rUbkMzHeTS43toBRFBF1k1E1sBfuFvqeWXLPi86pEzd4ivipBYvuvvvIyWg" }
                    ].map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col bg-white/[0.02] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-all duration-300 shadow-xl"
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-[#0A0A0A]/60 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="p-8 flex flex-col grow">
                                <div className="size-14 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-6 border border-brand-500/20">
                                    {svc.icon}
                                </div>
                                <h4 className="text-xl font-black text-white mb-4 tracking-tight">{svc.title}</h4>
                                <p className="text-slate-400 leading-relaxed mb-8 grow font-medium">{svc.desc}</p>
                                <span className="inline-flex items-center text-sm font-bold text-white group-hover:text-brand-500 transition-all">
                                    Learn more <ArrowRight className="ml-2 size-4" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Methodology Section */}
            <div className="relative py-24 rounded-[3.5rem] bg-white/[0.01] border border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2fddad 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="relative z-10 px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">The methodology</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-medium">Our proven 4-step framework designed to systematically improve your conversion rates.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { num: "01", title: "Discovery", desc: "We analyze your current data setup, business goals, and customer feedback loops." },
                            { num: "02", title: "Hypothesis", desc: "We identify leaks in your funnel and formulate data-backed hypotheses to fix them." },
                            { num: "03", title: "Testing", desc: "We launch A/B tests to validate our ideas against real user traffic in real-time." },
                            { num: "04", title: "Scaling", desc: "Winning variations are implemented, and the cycle begins again for continuous growth." }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-2xl mb-6 shadow-2xl z-10 group-hover:bg-brand-500 group-hover:text-black group-hover:border-brand-500 transition-all duration-300">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{step.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-16">
                <div className="text-center md:text-left">
                    <h2 className="text-brand-500 font-bold tracking-[0.2em] text-sm mb-3">Client Stories</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white">Results that speak volumes</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Sarah Jenkins", role: "CMO, TechFlow", quote: "They completely transformed our funnel. We saw a 200% increase in conversions within the first 90 days." },
                        { name: "Michael Ross", role: "Director of Product, FinServe", quote: "The ROI was immediate. They identified friction points we didn't even know existed. Relentlessly focused on results." },
                        { name: "David Chen", role: "Founder, UrbanWear", quote: "We were skeptical about CRO agencies, but they proved their worth in the first audit. Cart abandonment dropped by 35%." }
                    ].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-all duration-500 group"
                        >
                            <Quote size={40} className="text-brand-500/20 mb-8 group-hover:text-brand-500/50 transition-colors" />
                            <p className="text-slate-300 mb-10 leading-relaxed font-medium italic">"{t.quote}"</p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="size-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-500/20 flex items-center justify-center font-black text-sm text-black border-2 border-white/10">
                                    {t.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                                    <p className="text-[10px] text-slate-500 font-black tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Brand Quote */}
            <div className="py-24 text-center relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />
                <Quote size={60} className="text-brand-500/40 mb-10" />
                <blockquote className="text-3xl md:text-6xl font-black text-white leading-[1.1] mb-12 tracking-tight max-w-4xl">
                    "Marketing gets you noticed. <br /> <span className="text-brand-500">CRO gets you paid.</span>"
                </blockquote>
                <cite className="text-slate-500 font-bold tracking-[0.2em] text-xs not-italic">— Innovation Director, Global Retail Brand</cite>
            </div>

            {/* Custom CTA Block */}
            <div className="rounded-[4rem] bg-gradient-to-br from-brand-500 to-brand-500/5 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-brand-500/20 group">
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full -mr-20 -mt-20 blur-3xl opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full -ml-20 -mb-20 blur-3xl opacity-40" />

                <div className="relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95]">Stop leaving money <br /> on the table.</h2>
                    <p className="text-slate-200 text-lg md:text-2xl max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
                        Start your transformation today. Book a free 30-minute strategy call to see how much revenue you're missing out on.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-16 px-12 rounded-2xl bg-brand-500 text-black font-black text-xl shadow-[0_20px_40px_rgba(47,221,173,0.3)] transition-all"
                        >
                            <a href="/contact-us">Book strategy call</a>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-16 px-12 rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 font-black text-xl transition-all"
                        >
                            <a href="/case-studies">Download case study</a>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};
