'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Bolt,
    TrendingUp,
    Wallet,
    MousePointer2,
    Handshake,
    Search,
    BarChart4,
    Zap,
    ArrowUpRight,
    SearchCode,
    LineChart,
    PieChart,
    ArrowRight
} from 'lucide-react';

export const PerformanceShowcase: React.FC = () => {
    return (
        <div className="space-y-32">
            {/* 1. Intro Section */}
            <section className="py-12 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-brand-500 text-sm font-bold tracking-wider"
                        >
                            <Bolt size={16} />
                            Digital Performance
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tighter"
                        >
                            Precision targeting.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-emerald-400">Measurable growth.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
                        >
                            We don't guess; we engineer results. Our digital performance lab combines creative strategy with rigorous data analysis to scale your revenue and maximize ROI.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="h-12 px-8 bg-brand-500 text-black font-black rounded-xl hover:shadow-[0_0_30px_rgba(47,221,173,0.4)] transition-all hover:scale-105">
                                Explore strategies
                            </button>
                            <button className="h-12 px-8 border-2 border-white/10 text-white font-bold rounded-xl hover:border-brand-500 transition-colors flex items-center gap-2">
                                View case studies <ArrowUpRight size={18} />
                            </button>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-brand-500/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] group">
                            <div className="w-full h-full bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1FMH-_f9uajE6EA2PhKOIdd0h5U9Nyrip_pBSBmOskjhBvXuGp7W-eb3idN2yDVR3H_n_z3SjPjqcUSbsEP2-koUWg8ZMcDJeVrpwgUY7khGcsw-j7Heti6e4Z0_r3NYha__4s_azTUMxRNqNXTKlUIu6RjfxQxo_M4AV1TVrC3bmkDyoddsrjGqkLRge4QISNdSQWwB4O6Cz9-Jjbs_r7V2o1NyDZEzdJr7IdW9xxVK0eRlTmwQHrr4qdJn4rlQxpZRZ1BDqgmQ")' }} />
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Real-time optimization</p>
                                    <p className="text-white font-black text-xl mt-1">Active bidding AI</p>
                                </div>
                                <div className="flex items-center gap-2 text-brand-500">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                                    </span>
                                    <span className="font-mono text-sm font-black tracking-tighter">LIVE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="py-12 border-y border-white/5 bg-white/[0.01]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Average ROI", val: "250%", sub: "+15% vs Industry", icon: <TrendingUp /> },
                        { label: "Ad spend managed", val: "$10M+", sub: "Annually", icon: <Wallet /> },
                        { label: "Average CTR", val: "4.8%", sub: "+1.2% Lift", icon: <MousePointer2 /> },
                        { label: "Client retention", val: "95%", sub: "Long-term Partners", icon: <Handshake /> }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-2 rounded-2xl p-8 bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-all group"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 text-xs font-black uppercase tracking-wider">{stat.label}</p>
                                <div className="text-brand-500 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                            </div>
                            <p className="text-white text-5xl font-black tracking-tighter mt-2">{stat.val}</p>
                            <p className="text-brand-500 text-xs font-mono font-bold tracking-tight">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Capabilities Section */}
            <section className="py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-white text-4xl md:text-5xl font-black leading-none tracking-tighter mb-4">Our core capabilities</h2>
                        <p className="text-gray-400 text-lg font-medium leading-relaxed">Comprehensive strategies designed to capture attention and convert intent across every digital touchpoint.</p>
                    </div>
                    <button className="text-brand-500 font-black flex items-center gap-2 hover:text-white transition-colors group">
                        See all services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="grid gap-12">
                    {[
                        {
                            title: "Search Engine Optimization (SEO)",
                            desc: "Dominate organic rankings with technical audits, keyword clustering, and high-authority backlink strategies.",
                            tags: ["Technical SEO", "Content strategy", "Local search"],
                            icon: <SearchCode />,
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo_xYshzPq8-Uu5tZ_MgxfjsygLhmRzh9tmr_AGogLwJaA-9Ecv-NaO01AAdQOXvQF_8U48IiWBSjtt-NjDhOdMlhNoCNQHQNgQzlHW4f3LgclRO7EUZWZXG_8Ch7Ktze-wNjuwJiMqFk4cCZxZqGVl63RSuKHzlWRToAbJUsIoOruACKTTNTSvYUnrS8PwY0f-u9FHoxwt-_QCIsbZZ9tuspf7pMeBgotmnToW5ngDGVxq4afq6McY96JKsicifNJjVHP0bm2Boc"
                        },
                        {
                            title: "Paid Media & PPC",
                            desc: "Data-driven campaigns across Google, Meta, and LinkedIn. We utilize algorithmic bidding and dynamic creative optimization.",
                            tags: ["Google Ads", "Social display", "Retargeting"],
                            icon: <LineChart />,
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Uki7DE3qpmHuHuX-mgoIEYIJ8QFQ-m3YXWm9F6XETr-0p2ULamvQkrTMdVrJFT5p3DC2W4zudP8Tl_KSAgDSnWRPOuNZEvUilBFct1GgBRpEHrfBDh75fe8trGZpb5dqXgclU6c5CcFX7ZASylIWMMhgCRd1Jz3W4mpy-tVqRV8WNu8VPFL57MmBdgs8Ff5-66V-SfVnJ0wJnzJ4mziJ4JSURYxlVdXrI7TVFM3OSWFNk1PISTD5hTTPRj8F3ayxQmlExiZXxIc"
                        },
                        {
                            title: "Analytics & Intelligence",
                            desc: "Beyond basic reporting. We implement full-funnel tracking, attribution modeling, and predictive analytics.",
                            tags: ["GA4 Setup", "Conversion optimization", "Dashboards"],
                            icon: <PieChart />,
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB95E21B0TauDB0hraTGtOcL0U_-Mbuv4EV4ei88dnZJ1v5eH5_IXCOgYrMSTeWw8OHFrk9clKQYEuMmMkWY9lOjL3x-PKtOG41219s2I6UxuxXVawI04bLU0N5V2G8g5VSv5lu7sforluBWiHaFalvGympi1TAKR0pBqv17jsjZ9jGNtYfDpXeZaHH7GEoitprlNKqrLHmj2mP7gmi5hhLPppOYbO_bs5k1UkCYOD_0cI4wGaA2UNcJ163N3CjJRlD_RV9lfXP6CE"
                        }
                    ].map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] p-1 border border-white/5 transition-all hover:border-brand-500/50"
                        >
                            <div className="flex flex-col md:flex-row gap-10 md:items-center bg-black/40 rounded-[2.4rem] p-10 lg:p-14 h-full">
                                <div className="flex-1 flex flex-col gap-6">
                                    <div className="size-14 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-black transition-all">
                                        {svc.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white text-3xl font-black mb-4 tracking-tight">{svc.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg font-medium">{svc.desc}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {svc.tags.map((tag, j) => (
                                            <span key={j} className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] text-brand-500 font-black tracking-widest uppercase border border-white/5">{tag}</span>
                                        ))}
                                    </div>
                                    <button className="mt-4 flex items-center gap-2 text-white font-black text-xs tracking-widest uppercase group-hover:text-brand-500 transition-colors w-fit">
                                        Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                                <div className="w-full md:w-[40%] aspect-video md:aspect-[4/3] rounded-[2rem] bg-cover bg-center relative overflow-hidden border border-white/10">
                                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. Methodology Section */}
            <section className="py-16">
                <div className="rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div>
                            <h3 className="text-4xl font-black text-white mb-10 tracking-tighter">The logic behind the growth</h3>
                            <div className="space-y-8">
                                {[
                                    { title: "Cross-channel synergy", desc: "Search data informs social creative, and social engagement refines paid targeting.", icon: <Zap size={18} /> },
                                    { title: "Psychographic profiling", desc: "Mapping customer intent to create hyper-personalized funnels.", icon: <BarChart4 size={18} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex-shrink-0 size-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-500 border border-white/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black text-xl mb-2">{item.title}</h4>
                                            <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-black/60 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
                        >
                            <div className="flex justify-between items-end h-56 gap-4">
                                {[30, 45, 60, 85].map((h, i) => (
                                    <div key={i} className="w-full bg-white/5 rounded-2xl relative group overflow-hidden">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.2 }}
                                            className={`absolute bottom-0 left-0 right-0 ${i === 3 ? 'bg-brand-500 shadow-[0_0_30px_rgba(47,221,173,0.3)]' : 'bg-brand-500/20'}`}
                                        />
                                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest text-white/40 uppercase">
                                            {['Q1', 'Q2', 'Q3', 'Now'][i]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-between text-[10px] text-gray-500 font-black tracking-[0.2em] uppercase border-t border-white/10 pt-6">
                                <span>Performance velocity</span>
                                <span className="text-brand-500">+312% Growth</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-24 relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-12 rounded-[5rem] bg-brand-500 p-16 md:p-24 text-black">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black leading-none tracking-tighter"
                    >
                        Ready to scale?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-black/80 text-xl md:text-2xl font-black max-w-2xl"
                    >
                        Stop wasting budget on guesswork. Get a comprehensive performance audit and a roadmap to revenue.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 w-full max-w-lg mt-4"
                    >
                        <input
                            className="flex-1 h-16 rounded-2xl border-2 border-black/10 bg-white/90 px-6 text-black placeholder:text-black/40 focus:outline-none focus:border-black font-bold"
                            placeholder="Enter your work email"
                            type="email"
                        />
                        <button className="h-16 px-10 rounded-2xl bg-black text-white font-black text-xl hover:bg-gray-900 transition-all shadow-2xl shadow-black/20 hover:scale-105">
                            Start audit
                        </button>
                    </motion.div>
                    <p className="text-[10px] text-black/60 font-black tracking-widest uppercase mt-2">
                        * No credit card required. Analysis delivered in 24 hours.
                    </p>
                </div>
            </section>
        </div>
    );
};
