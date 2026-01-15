'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    TrendingUp,
    Rocket,
    CircleDollarSign,
    Radar,
    Search,
    Megaphone,
    Activity,
    Globe,
    Diamond,
    CheckCircle2,
    Plus,
    ArrowRight
} from 'lucide-react';

export const InfluencerShowcase: React.FC = () => {
    return (
        <div className="space-y-32">
            {/* Background elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
            </div>

            {/* 1. Header Section */}
            <header className="flex flex-col gap-6 mt-10 md:mt-20">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6"
                    >
                        We engineer <span className="text-brand-500">culture.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl"
                    >
                        We don't just find influencers. We create movements using data-driven insights and premium talent networks to amplify your brand voice in the noise.
                    </motion.p>
                </div>
            </header>

            {/* 2. Stats Section */}
            <section className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Total reach", val: "50M+", icon: <TrendingUp size={16} />, sub: "+15% MoM" },
                        { label: "Avg. engagement", val: "3.5%", icon: <TrendingUp size={16} />, sub: "+0.5% vs Ind. Avg" },
                        { label: "Campaigns", val: "450+", icon: <Rocket size={16} />, sub: "Launched 2023" },
                        { label: "ROI generated", val: "200%", icon: <CircleDollarSign size={16} />, sub: "+120% YoY" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-1 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-all duration-300 group"
                        >
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                            <p className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-2">{stat.val}</p>
                            <div className="flex items-center gap-1 text-brand-500 text-[10px] font-black mt-auto pt-4 uppercase tracking-tighter">
                                {stat.icon}
                                <span>{stat.sub}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Methodology */}
            <section className="flex flex-col gap-12">
                <div className="flex items-center gap-6">
                    <span className="h-px bg-white/10 flex-1"></span>
                    <h2 className="text-2xl font-black text-white/50 tracking-tighter uppercase">Our methodology</h2>
                    <span className="h-px bg-white/10 flex-1"></span>
                </div>
                <div className="w-full p-[1px] rounded-[3rem] bg-gradient-to-r from-white/5 via-brand-500/30 to-white/5">
                    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 rounded-[2.9rem] bg-black/40 backdrop-blur-xl p-8 lg:p-14 relative overflow-hidden">
                        <div className="flex flex-[1.4] flex-col justify-center gap-8 z-10">
                            <div className="flex flex-col gap-6">
                                <div className="w-16 h-16 rounded-3xl bg-brand-500 flex items-center justify-center text-black mb-2 shadow-[0_20px_40px_rgba(47,221,173,0.3)]">
                                    <Radar size={32} />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">Trending logic identification</h3>
                                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                    Viral moments aren't accidents. Our proprietary engine analyzes millions of data points—from audio spikes to hashtag velocity—to spot emerging cultural shifts before they peak.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {["Predictive analysis", "Audience mapping", "Sentiment tracking"].map((tag, i) => (
                                    <span key={i} className="px-5 py-2.5 rounded-full border border-white/5 bg-white/5 text-xs font-black text-brand-500 uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 min-h-[400px] lg:min-h-auto relative rounded-[2.5rem] overflow-hidden group border border-white/10"
                        >
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-LOat1QpF3unPSLGSsAhIcunpc-qm973wkdMNHiRfBmQKZtbzcoPu8aO8hDNXhWqrFuTy4pceJLj10GVQFocs0gO3e-mXlxSXpp24pCQW33MyyqLipnziQhrfGSekJl0J-YAnSDxMymsIcPUfJ5J_k6OW6nG53Dyka5xhXIJM4KILd2tJNDj5O3gtVeFRj7YlNL1ZhRe576Z-TBrS9sOFuwk0SHx8XVoWFDQrLjXjrtUXgO8k4FbakSTThj_p3sY_EKp3UqkwpV8" alt="Trend analysis data visualization" />
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="bg-black/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-3 w-fit">
                                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                                    <span className="text-[10px] font-black tracking-widest uppercase text-white">Live Trend: #CyberEsthetics</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Service Pillars */}
            <section className="flex flex-col gap-12">
                <div className="flex items-center justify-between gap-6">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Service pillars</h2>
                    <button className="hidden md:flex items-center gap-3 text-xs font-black text-brand-500 uppercase tracking-widest hover:text-white transition-colors">
                        View capability deck <ArrowRight size={16} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Talent identification",
                            desc: "Beyond follower counts. We find creators who align with your brand ethos and drive real conversion.",
                            icon: <Search />,
                            features: ["KOL vetting", "Audience quality check", "Niche discovery"]
                        },
                        {
                            title: "Campaign management",
                            desc: "End-to-end execution. From briefing and contracting to content approval and scheduling.",
                            icon: <Megaphone />,
                            features: ["Contract negotiation", "Creative briefing", "Rights management"]
                        },
                        {
                            title: "Performance tracking",
                            desc: "Real-time dashboards. We track clicks, conversions, and sentiment to prove ROI dynamically.",
                            icon: <Activity />,
                            features: ["Live reporting", "CPA & ROAS analysis", "Sentiment scoring"]
                        }
                    ].map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative flex flex-col justify-between p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand-500/50 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-black transition-all duration-500 text-brand-500">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white tracking-tight">{pillar.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                            <ul className="mt-10 flex flex-col gap-3">
                                {pillar.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-tighter group-hover:text-slate-300 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(47,221,173,0.5)]"></span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. Influencer Tiers */}
            <section className="flex flex-col gap-12">
                <div className="flex items-center gap-6">
                    <span className="h-px bg-white/10 flex-1"></span>
                    <h2 className="text-2xl font-black text-white/50 tracking-tighter uppercase">Influencer tiers</h2>
                    <span className="h-px bg-white/10 flex-1"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Micro influencers",
                            tier: "10K - 100K",
                            desc: "The engines of authenticity. Highly engaged, niche communities where trust drives direct action.",
                            icon: <Users />
                        },
                        {
                            title: "Macro influencers",
                            tier: "100K - 1M",
                            desc: "The professional storytellers. Polished production and broad reach to shape mass-market trends.",
                            icon: <Globe />
                        },
                        {
                            title: "Celebrity / Mega",
                            tier: "1M+ Followers",
                            desc: "The cultural titans. Unrivaled visibility and prestige, turning products into household names.",
                            icon: <Diamond />,
                            premium: true
                        }
                    ].map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`group relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 ${tier.premium ? 'bg-gradient-to-br from-brand-500 to-emerald-700 border-white/20' : 'bg-white/[0.02] border-white/5 hover:border-brand-500/50'}`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className={`size-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${tier.premium ? 'bg-black text-brand-500' : 'bg-white/5 text-brand-500'}`}>
                                    {tier.icon}
                                </div>
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${tier.premium ? 'bg-black text-white border border-white/10' : 'border border-brand-500/30 bg-brand-500/10 text-brand-500'}`}>
                                    {tier.tier}
                                </span>
                            </div>
                            <h3 className={`text-2xl font-black mb-4 ${tier.premium ? 'text-black' : 'text-white'}`}>{tier.title}</h3>
                            <p className={`font-medium leading-relaxed mb-8 ${tier.premium ? 'text-black/70' : 'text-slate-400'}`}>
                                {tier.desc}
                            </p>
                            <div className={`mt-auto pt-8 border-t ${tier.premium ? 'border-black/10' : 'border-white/5'}`}>
                                <ul className="flex flex-col gap-4">
                                    {[1, 2, 3].map((_, j) => (
                                        <li key={j} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className={tier.premium ? 'text-black' : 'text-brand-500'} />
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${tier.premium ? 'text-black/80' : 'text-slate-300'}`}>
                                                {j === 0 ? "High conversion rates" : j === 1 ? "Hyper-targeted reach" : "Authentic advocacy"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. Network Scroll */}
            <section className="flex flex-col gap-12 overflow-hidden py-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">The network</h2>
                    <p className="text-slate-400 text-lg font-medium">Access to 10,000+ premium creators across Lifestyle, Tech, and Fashion.</p>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar -mx-4 px-4">
                    {[
                        { name: "Elena R.", niche: "Fashion & Beauty", reach: "1.2M", eng: "4.8%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOGjbTH59pnOtdcryzj4FB091ALUd7KVbKopOtBKstPirwcnSLu6jyx3bSACBJ6AR2BpZiGZe9_Rb7T-h2YN_0yDat65to3pq8pfri0l9PA51HCdnyb9EW2yuANQmc1-axQ09ElgNUCMq8gSXvDtPqGQEkedUZKNGxmlTwEgBqHReajefE1RrXqpDVGRHS0rVlG7FPzupEzfqf80HhamJGZBAqW8cSo4Y48ntN8vSXj-t7I3QKPOL--yoTJr4bHdqB33DaEjijRw" },
                        { name: "Marcus J.", niche: "Tech & Gaming", reach: "850K", eng: "6.2%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAra7Cz6ifZnlDeLhH8Kv_aiOsGCbA-iWzSek_g_tEcUVlB-6rIMmrpCjklP2VAt1GuNvyQvkfMvtcy3GtiHs5OaO3WNVy00PoBpy6hYeu5RoVqlvZuw6lf5OPIPpQUzRuy5yNj39N9vr7wXdX0WvN_pgPS5Lwmvk5LmP2pU8I1FH9iQ3SC-pS9UfuIVKMTPw2ij-xE08xL2QGMU6LQJHpGEwIL24kuIzmjoC4VTjPa5o6KA4N7IP1y4okcLZEKg1-YuHtSZXIUKg0" },
                        { name: "Sarah K.", niche: "Travel & Lifestyle", reach: "2.4M", eng: "3.9%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUNArBksm7QwnWC1qnWqOWAqkbZ5X7_JgApChkHL-_BGlmmqDYCmbtkgMbO3kTbtgf9rmGxjUvpXt-pSsrynWyPL625Kht0L9FF3SCZl4Nc8iSWaW2gEeFlpNVdprTgqtvgNtw1Xa6FtYfb03SbGze2z1wJnE2ltXlzxoFCYgxleWqzbKQwesgyHIUPqhtLiVQzJrsRF6EVzBTYzdR-SQY-BQVCcbfHDjFcYuVl5WM1Y4924xUzRwkcud6S5vFPxWEwOpjdPXs38s" },
                        { name: "David L.", niche: "Fitness & Health", reach: "500K", eng: "8.1%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAstR_l4nRgjEDsaXcIOCFCn4wnMfd_h2_-6jB_w0SLfMxNgGRsrZth-9J2kqCz8t7CXTmk04lCNJXSBIrrk9Q923JTnhVDjfst39XdA_qZdA8HZG8QFL74rW67hBsSecGgMYMKbeNvx_8oBu5jku0BtaqX-Ng9Tvs3_dqX7Id4uB6YwmI_UcIumoTnSExXZscdf-Nq1qfPHGyqFLcwXzyXXfYsoQ9ezt_sg5hWVJiny4CMbCq6dGu-ujHDSZSmcgPiPaA91SZ3ZyE" }
                    ].map((creator, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="relative w-80 h-[480px] shrink-0 rounded-[2.5rem] overflow-hidden group border border-white/5"
                        >
                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" src={creator.img} alt={creator.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="text-white font-black text-2xl mb-1">{creator.name}</h4>
                                    <p className="text-brand-500 text-sm font-black uppercase tracking-widest mb-6">{creator.niche}</p>
                                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <div><span className="block text-white text-2xl font-black mb-1">{creator.reach}</span>Reach</div>
                                        <div><span className="block text-white text-2xl font-black mb-1">{creator.eng}</span>Eng. Rate</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="relative w-80 h-[480px] shrink-0 rounded-[2.5rem] border-2 border-dashed border-white/10 hover:border-brand-500/50 flex flex-col items-center justify-center p-10 text-center gap-6 group cursor-pointer transition-colors">
                        <div className="size-20 rounded-full bg-white/5 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-black transition-all">
                            <Plus size={40} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-2xl mb-2">Join the network</h4>
                            <p className="text-slate-500 font-medium">Are you a creator? Apply to join our exclusive roster.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="py-24 relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 blur-[200px] rounded-full pointer-events-none"></div>
                <div className="relative z-10 w-full rounded-[5rem] bg-brand-500 px-10 py-24 text-center flex flex-col items-center justify-center gap-10 text-black shadow-3xl">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black leading-none tracking-tighter mb-8"
                        >
                            Ready to amplify your brand?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-black/80 text-xl md:text-2xl font-black mb-4"
                        >
                            Stop guessing. Start dominating the feed with data-backed influencer strategies.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mt-4"
                    >
                        <button className="h-16 px-12 bg-black text-white hover:bg-slate-900 rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-3">
                            Start your campaign
                            <Rocket size={20} />
                        </button>
                        <button className="h-16 px-12 bg-transparent border-2 border-black/10 hover:bg-black/5 text-black rounded-2xl font-black text-xl transition-all flex items-center justify-center">
                            View case studies
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
