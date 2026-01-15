'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Bolt,
    Hash,
    CheckCircle2,
    Search,
    Video,
    Share2,
    MessagesSquare,
    ArrowRight,
    PenTool,
    BarChart3,
    Megaphone
} from 'lucide-react';

export const SocialMediaShowcase: React.FC = () => {
    return (
        <div className="space-y-32">
            {/* 1. Intro Section */}
            <section className="py-12 lg:py-20">
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs font-bold tracking-wider"
                    >
                        <Bolt size={16} />
                        Social & Community
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter"
                    >
                        We don't just post. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">We provoke.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-4"
                    >
                        Social media & community management for the modern era. We turn passive followers into active advocates through data-driven chaos and curated perfection.
                    </motion.p>
                </div>
            </section>

            {/* 2. Ticker / Chips */}
            <div className="w-full border-y border-white/5 bg-white/[0.02] overflow-hidden py-6">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-4 whitespace-nowrap px-6"
                >
                    {[
                        "#ViralGrowth", "#CommunityFirst", "#ROI", "#AlgorithmHacking",
                        "#TrendSetters", "#Engagement", "#DataDriven", "#SocialPulse",
                        "#ViralGrowth", "#CommunityFirst", "#ROI", "#AlgorithmHacking",
                        "#TrendSetters", "#Engagement", "#DataDriven", "#SocialPulse"
                    ].map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black">
                            <Hash className="text-brand-500 size-4" />
                            <span className="text-white text-sm font-medium">{tag}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 3. Methodology */}
            <section className="py-16 lg:py-24">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
                        <h2 className="text-4xl font-black text-white tracking-tight">The trending logic</h2>
                        <p className="text-white/60 text-lg font-medium leading-relaxed">
                            Our proprietary framework hacks algorithms to ensure your brand stays at the top of the feed, not just in it.
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            {[
                                "Real-time trend analysis",
                                "Cross-platform synchronization",
                                "Crisis management protocols"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-brand-500 font-medium">
                                    <CheckCircle2 size={24} />
                                    <span className="text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "Analyze", desc: "Deep dive into current metadata trends and audience sentiment mapping.", icon: <Search /> },
                            { title: "Create", desc: "High-fidelity visual production tailored for retention.", icon: <Video /> },
                            { title: "Distribute", desc: "Multi-channel strategic push at peak engagement windows.", icon: <Share2 /> },
                            { title: "Engage", desc: "24/7 community interaction to foster brand loyalty.", icon: <MessagesSquare /> }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/50 transition-colors duration-300"
                            >
                                <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-black transition-all">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-white text-xl font-bold mb-2">{card.title}</h3>
                                    <p className="text-white/60 text-sm font-medium leading-relaxed">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Key Stats */}
            <section className="bg-brand-500 py-16 px-6 lg:px-16 rounded-[3rem] text-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-black/10">
                    <div className="py-4 md:px-8">
                        <p className="text-6xl lg:text-8xl font-black tracking-tighter mb-2">300<span className="text-4xl align-top">%</span></p>
                        <p className="text-lg font-bold tracking-wide opacity-80">Avg. engagement growth</p>
                    </div>
                    <div className="py-4 md:px-8">
                        <p className="text-6xl lg:text-8xl font-black tracking-tighter mb-2">5<span className="text-4xl align-top">M+</span></p>
                        <p className="text-lg font-bold tracking-wide opacity-80">Monthly reach</p>
                    </div>
                    <div className="py-4 md:px-8">
                        <p className="text-6xl lg:text-8xl font-black tracking-tighter mb-2">24<span className="text-4xl align-top">/7</span></p>
                        <p className="text-lg font-bold tracking-wide opacity-80">Community monitoring</p>
                    </div>
                </div>
            </section>

            {/* 5. Detailed Services */}
            <section className="py-20">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <h2 className="text-3xl md:text-4xl font-black text-white max-w-lg leading-tight">
                            Services tailored for the vertical screen.
                        </h2>
                        <a className="text-brand-500 hover:text-white flex items-center gap-2 font-bold transition-colors" href="#">
                            View full capabilities <ArrowRight size={20} />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                        {[
                            {
                                title: "Content production",
                                desc: "From TikToks to long-form, we produce thumb-stopping creative assets.",
                                icon: <PenTool />,
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA75krNO1aDVy8XiAeVsMCyHnw3N6mKeWBfeJMvX2uxfokJwYKP7_5sVIwxI2XVFrSLb46Y2MXt5YQHZR9djsEDXGYax5f57_k13Lyu1X053sQSHm-n0cy9RRZ4MOylRKBm9AfEJZc-TSqpRae2gZSiTAunhbf-nE7QNGz_vjW42U-DsYGl12TIqt-IoKxsM7xmCXAVGhpvJ0RxzSfhE6-rsBuOEcJs_MhqK8GZ2JpCFagJzVXhgF9FLdh0QedOEf8HkUHe9Gb1XjQ"
                            },
                            {
                                title: "Growth hacking",
                                desc: "Aggressive strategies to boost follower count and organic reach.",
                                icon: <BarChart3 />,
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA4b2k0Ps-IXqRAwQJKLqFrlPcHkzS8VfJCQkLGD0HBy5CjRN0z0TS9pIwba-lRs66rhVv_f05i9tffsjbznOPxlVggtip6-AuWTtOzmtXFEpXpXGKfdm4oTFo1rpkba7VMX0wXdrSsVU9UfXV6BFOYf52GJec3igctfhmhrjj61uaiXb7c_ZjxdNTOR1SJvFBm3Tevww_zzMVLPGFzN2EAg2-jyWgnYGfXG8Qq7M1d2AUldEpcCkY5cfTnKoShcAanpC_uGISMZ8"
                            },
                            {
                                title: "Influencer activation",
                                desc: "Connecting your brand with voices that matter in your niche.",
                                icon: <Megaphone />,
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY26ki1wu53ihxcL188cZBxJQks1QSfEE77K7pD1wBX5hNXCg_JO3tJLmiIP11dpCBo3l4MytkdC1oZ_AiFGZd5FH8ggq-sVAopLE9EZidmYm3MAQWq8i2POorpD41AbF8Z0EjGPPtXhtm-DyP_rNIHBxcn9HxoR1YB32jtl6XY3uru-r1ogWNqQBjwNhgJZ8vV5_KrmNOd-eKlWayX5IAhcdSZCXLdqjA4PkeNKRokH_ZXPAiNi9r2t6_VJU3BmAb187EcOMT11I"
                            }
                        ].map((svc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden cursor-pointer h-[500px] md:h-full border border-white/5"
                            >
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${svc.img}')` }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                                        <div className="size-12 bg-brand-500 rounded-2xl flex items-center justify-center text-black mb-4 shadow-xl">
                                            {svc.icon}
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-2">{svc.title}</h3>
                                        <p className="text-white/70 text-base opacity-0 group-hover:opacity-100 transition-all duration-300 h-0 group-hover:h-auto overflow-hidden font-medium">
                                            {svc.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Client Spotlight */}
            <section className="py-20">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <span className="h-px flex-1 bg-white/10"></span>
                        <span className="text-white/50 tracking-widest text-sm font-black">Recent Activations</span>
                        <span className="h-px flex-1 bg-white/10"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                        {[
                            { span: "col-span-2 row-span-2", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRvj6sGIB2zuap087kN6nfRmSxOMRb077uB7VaQFEEAXkgIg9EdgNb-OHpZeuYb_u-FypeEdCM2Ne5bMa0aYbFJBDT92-nvvZaC_Lhi018P0zp9sJhH0J4I2LpEX7LaFo24mRQsr_65_NWoqcxVFbsPkZ0FNYGExc-Mj7OADd2m-B5_S-cCmjRY5zBVPyeeVo1xS1wCRfi4-GF7oN1IU1_voD5z-ui0zO8xsxSFFHduGO0slbXygmbcsAxwYuv8Z7MyKMi_TeqYxo", label: "@TechGiant Launch" },
                            { span: "col-span-1", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiIdELGvNf7IfMxwrTF1qbZFlq76A_l14HAApQW4tKOVEH04171Jo2z0sJlnTvhuvWAMTIpa5uxADKGEv4Yj2lHiykQ85zj3RXc8OQ2lIPkPKvcHNYJjKmewJXsEYT439FXpm75ay4r3qszIidpYoeeJIrtweZYVtE6iBKbuLdDk-QvYziQrCLfrZJPmvuuQRN8EmJI0B4vRs4jycVeYuuDPkcr0hp1ujC2TXQJiJ8ETUQpl8oS4TUy_O0cmAdlo_QVqIxgHE3iN8", label: "Influencer Sync" },
                            { span: "col-span-1", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQHAYzWy3BQfeQQ8Cu0KyIaJmUyJuk_KqIXdxDL0v3JF2ryIyY8DSm1kfsavaEMEwuQdt_HgIzwqus9R1NgpC9vxricZnwHKEoRw2_BC5l4pL7M6Rv7P0L26M-2KelI1716rydO42Gifnu-5WGroFm8uEzrG7wk-E3kLexAOjbwKJGkXkKtTHz9D4L8cvSZR_SQYMPWqLDyNRnJ84hkj90haCVvl8PrKHSzQDhLIflwq9K_lmb5z62Ypq6_9jrvKg5Hji3nEK9i1c", label: "Product Reveal" },
                            { span: "row-span-2", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCcs4SqueSUcsbWaWCcDZ7XTVEJWQpjqi04Xcr78h68OjXPXw8CwM8byYW7tG18LAlRUXnwsdqUgqftwmAvmUH2i-k88B3dKshVHqdPteNgE6Tg8GgOhcpOFrJNBadeaXBkEmCB9LjrQbrpjO5u1udeTUP0p28F-uQYGJyQF9EjGM2grkHxO7ACqFzynExN7MsHQEW_Fy_47vOzDuowYuRv_sv5nzmMaHtGE5Yh6-1MJj5wysr7F8uHcCdoT8gQo0gohIAqjIF1TM", label: "Story Ad" },
                            { span: "col-span-1", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9knH8odjyayrv2Mus6KLdm4iXv8rAXq9x-wAs3xyUMUgoUM4y3SNa_dFEbgFPsuy-pCVGS26jQ00zIKhmJkhXWXdr7efBT3RaiB5VvAFJmSBva8dowV9LRNFC6-wejXHHO4yWWD5EibkTxqMTNhfit1VE-wBh3JAVYlq8CQIaC_uUNxFdqcEU2t-9vccuKIs3EhrUG4NHejicodqHGJqbxcGWUWyyp9lf5nrA6eths3KRbKLm7KQ7gM8iRapwJKBJyBuSfV4oOI", label: "Trend Map" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className={`relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 group ${item.span}`}
                            >
                                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                {item.label && (
                                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-white text-[10px] font-black tracking-widest uppercase">
                                        {item.label}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="py-24 relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter"
                    >
                        Ready to break the internet?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 text-lg md:text-2xl font-medium max-w-2xl px-4"
                    >
                        Let's audit your current presence and build a roadmap to dominance.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6"
                    >
                        <button className="h-16 px-12 bg-brand-500 hover:bg-white text-black text-xl font-black rounded-2xl transition-all shadow-[0_20px_40px_rgba(47,221,173,0.3)] hover:scale-105">
                            <a href="/contact-us">Start the conversation</a>
                        </button>
                        <button className="h-16 px-12 bg-transparent border-2 border-white/20 hover:border-white text-white text-xl font-black rounded-2xl transition-all hover:bg-white/5">
                            <a href="/case-studies">View case studies</a>
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
