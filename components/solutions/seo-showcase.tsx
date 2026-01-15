'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    BarChart3,
    CircleDollarSign,
    Server,
    BookOpen,
    Link2,
    ArrowRight,
    ArrowUpRight,
    Search,
    Globe,
    Zap
} from 'lucide-react';

export const SEOShowcase: React.FC = () => {
    const tickerItems = [
        "Semantic search",
        "Core web vitals",
        "AI snippets",
        "Topical authority",
        "Zero-click searches",
        "E-E-A-T principles",
        "Voice search optimization"
    ];

    return (
        <div className="space-y-32">
            {/* 1. Hero / Heading Section */}
            <section className="py-12 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8"
                    >
                        Decoded: <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-500/80">The science</span> of organic visibility
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl"
                    >
                        We reverse engineer search algorithms to build sustainable, compounding organic growth engines for forward-thinking brands. No black magic, just data.
                    </motion.p>
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="relative">
                <div className="absolute inset-0 bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {[
                        { label: "Organic traffic (YoY)", val: "+300%", sub: "Exceeding projections", icon: <TrendingUp size={16} /> },
                        { label: "Page 1 keywords", val: "50k+", sub: "High intent volume", icon: <BarChart3 size={16} /> },
                        { label: "Avg. ROI", val: "12x", sub: "Organic Search", icon: <CircleDollarSign size={16} /> }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-2 rounded-[2rem] p-8 bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-all duration-300 group"
                        >
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                            <p className="text-white text-5xl font-black tracking-tighter mt-2">{stat.val}</p>
                            <div className="flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-widest mt-auto pt-4 border-t border-white/5">
                                {stat.icon}
                                <span>{stat.sub}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Ticker Section */}
            <div className="w-full bg-white/[0.01] border-y border-white/5 py-8 -mx-4 px-4 overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="flex whitespace-nowrap gap-16"
                >
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={i} className="text-2xl md:text-3xl font-black text-white/20 uppercase tracking-tighter">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* 4. Performance Chart Section */}
            <section className="py-12">
                <div className="flex flex-col lg:flex-row gap-8 p-10 bg-white/[0.02] rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="flex flex-1 flex-col gap-8">
                        <div>
                            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-2">Performance velocity</p>
                            <h3 className="text-white text-4xl font-black tracking-tighter">152k monthly visits</h3>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="px-3 py-1 rounded-lg bg-brand-500/10 text-brand-500 text-[10px] font-black uppercase tracking-widest border border-brand-500/20">L12M</span>
                            <p className="text-slate-400 text-sm font-medium">Consistent upward trajectory despite algorithm updates.</p>
                        </div>
                        <div className="mt-auto">
                            <button className="flex items-center gap-3 text-brand-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em] group/btn">
                                View live report
                                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="flex-[2] h-[250px] relative mt-8 lg:mt-0">
                        <svg className="w-full h-full" viewBox="0 0 478 150" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#2fddad" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#2fddad" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                d="M0 109C18.15 109 18.15 50 36.3 50C54.46 50 54.46 80 72.61 80C90.77 80 90.77 120 108.9 120C127.1 120 127.1 40 145.2 40C163.4 40 163.4 90 181.5 90C199.7 90 199.7 55 217.8 55C236 55 236 30 254.1 30C272.3 30 272.3 100 290.4 100C308.6 100 308.6 130 326.8 130C344.9 130 344.9 10 363.1 10C381.2 10 381.2 70 399.4 70C417.5 70 417.5 110 435.7 110C453.8 110 453.8 20 472 20"
                                stroke="#2fddad"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <motion.path
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                                viewport={{ once: true }}
                                d="M0 109C18.15 109 18.15 50 36.3 50C54.46 50 54.46 80 72.61 80C90.77 80 90.77 120 108.9 120C127.1 120 127.1 40 145.2 40C163.4 40 163.4 90 181.5 90C199.7 90 199.7 55 217.8 55C236 55 236 30 254.1 30C272.3 30 272.3 100 290.4 100C308.6 100 308.6 130 326.8 130C344.9 130 344.9 10 363.1 10C381.2 10 381.2 70 399.4 70C417.5 70 417.5 110 435.7 110C453.8 110 453.8 20 472 20V150H0V109Z"
                                fill="url(#chartGradient)"
                            />
                        </svg>
                        <div className="flex justify-between mt-4 px-2 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                            {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(m => <span key={m}>{m}</span>)}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Methodology Cards Grid */}
            <section className="py-24 space-y-12">
                <div className="flex items-end justify-between border-b border-white/10 pb-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Our methodology</h2>
                    <span className="text-brand-500 hidden md:block text-[10px] font-black tracking-[0.3em] uppercase opacity-50">// Engineered for growth</span>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {[
                        {
                            title: "Technical architecture",
                            tag: "Foundation",
                            desc: "Code-level optimization for crawlability and speed. We fix the foundation before building the skyscraper, ensuring search engines can read and rank every page seamlessly.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_F6T9OayV8hnXs6Ix_l7q37UjD2BxfswyeUFBh81J9ioGrunSj2SOmHoXGsnxB9i683NhgFAdwuMmPSVqje-xYAq09qVKWRoCMP7R5AZOSioPU3BgFkpfjNM8RVuHCTK_jdo_xmg7wL6AHozfEkoSKR9O2KoAFJbwO00uyIO1EBKY74h3qTOg_tDkBzH7Q6J5OFBpxfBviy71DZdwNboVMFRfzDhQvyKwAebMrZ_Iv07XiML9B_csG2nXJ6mNmXNhhIkMJGS-s_8"
                        },
                        {
                            title: "Content strategy & clustering",
                            tag: "Relevance",
                            desc: "We build topical authority maps using semantic clusters. Instead of chasing single keywords, we dominate entire topics to signal expertise to Google's core algorithms.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK3Huk3L5mXQfGSS_P52i7KNX0ZyzLf3JjyMby51f4ACtdRpTrTSZFV3E0TJa8qBxm0AHp0Es7HRHeHq0w72tJhdKoomcthYYWbtc8rhYZs_NVjdrR6zchQvh0WqOS23_2hSCn2W8cwnSJkqRruWrnBNBXv5cCFdH6S7NPuOHjjNfqvJAarbe9BA4kAljQ94h4F6vzTzVzIDLoTIJoa2YtZ3z0c6ivAESHr4cHsaQqIlsHRSS79t8yluWlKGre2DDLQ5UW2yK4D6M",
                            reverse: true
                        },
                        {
                            title: "High-impact link acquisition",
                            tag: "Authority",
                            desc: "Digital PR and strategic outreach that earns high-DR backlinks. We focus on quality over quantity to build a fortress of domain authority around your brand.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7h9KGYYDqDjm-iQ8zFwwU3r0k7Vr-p2DIe9fN-fa4EbPySZch6jCRHmm4nqzvI8z8RJcrI1qFsg_neMfmgIdnAZhyU3G485xmVOOf_SQJFtlPijcfKQgG1q1H6SrzaQvRLg6G1SvGtNddpjOlk1kQl2c8da15wShamfEbaLMOg4sTdgNC_OqOoiqXywGziHvMPD_TFLCFsTBfu5LK-4lnLyyygkg4z6Dzu9tV5T8SkKBJhA56cn3KKVZ4XvSFbtQvHF3v5kujAd0"
                        }
                    ].map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${svc.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch justify-between gap-12 rounded-[3rem] bg-white/[0.02] p-10 lg:p-14 border border-white/5 hover:border-brand-500/30 transition-all duration-500 group`}
                        >
                            <div className="flex flex-[1.5] flex-col gap-8 justify-center">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                            {i === 0 ? <Server size={20} /> : i === 1 ? <BookOpen size={20} /> : <Link2 size={20} />}
                                        </div>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{svc.tag}</p>
                                    </div>
                                    <h3 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tighter group-hover:text-brand-500 transition-colors">{svc.title}</h3>
                                    <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
                                        {svc.desc}
                                    </p>
                                </div>
                                <button className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-brand-500 hover:text-black rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all w-fit">
                                    <span>Explore {svc.tag}</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="flex-1 w-full bg-center bg-no-repeat bg-cover rounded-[2.5rem] min-h-[300px] relative overflow-hidden border border-white/10">
                                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-brand-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 blur-[200px] rounded-full pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 overflow-hidden rounded-[5rem] bg-white/[0.02] border border-white/10 p-16 md:p-24 text-center group"
                >
                    <div className="absolute -inset-4 bg-brand-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-white text-4xl md:text-7xl font-black leading-none tracking-tighter">Ready to dominate the SERPs?</h2>
                        <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
                            Stop guessing. Start growing. Get a comprehensive audit and a roadmap to #1.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl mt-8">
                            <input
                                className="flex-1 bg-black/40 border-2 border-white/5 rounded-2xl px-8 py-5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all font-bold text-lg"
                                placeholder="Enter your website URL"
                                type="url"
                            />
                            <button className="bg-brand-500 hover:bg-brand-400 text-black font-black py-5 px-10 rounded-2xl whitespace-nowrap transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(47,221,173,0.3)] text-xl">
                                Request free audit
                            </button>
                        </div>
                        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mt-2">No commitment required. We value your privacy.</p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};
