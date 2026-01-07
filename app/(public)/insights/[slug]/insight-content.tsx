'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart, MessageCircle, Share2, ArrowLeft,
    Calendar, Clock, Linkedin, Twitter,
    Facebook, Link as LinkIcon, Sparkles,
    CheckCircle2, Quote, Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/inertia-adapter';
import { cn } from '@/lib/utils';

interface InsightDetailContentProps {
    article: any;
}

export function InsightDetailContent({ article }: InsightDetailContentProps) {
    const [likes, setLikes] = useState(215);
    const [isLiked, setIsLiked] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [comment, setComment] = useState('');

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        // Toast notification would be good here
    };

    return (
        <div className="bg-[#050505] text-white min-h-screen">
            {/* Cinematic Hero - 40vh */}
            <header className="relative h-[40vh] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/bg_hello_dekstop.webp')] bg-cover bg-center opacity-40 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl flex flex-col items-center"
                    >
                        <Link
                            href="/insights"
                            className="inline-flex items-center gap-2 text-brand-500 font-bold text-[10px] tracking-[0.1em] mb-6 hover:gap-3 transition-all"
                        >
                            <ArrowLeft size={14} /> Back to Insights
                        </Link>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                            <span className="bg-brand-500 text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                                {article.category?.name || 'Insight'}
                            </span>
                            <div className="h-px w-8 bg-white/20" />
                            <span className="text-white/40 text-[10px] font-bold tracking-wide flex items-center gap-1.5">
                                <Calendar size={12} className="text-brand-500" />
                                {new Date(article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                            {article.title}
                        </h1>
                    </motion.div>
                </div>
            </header>

            {/* Main Content Layout */}
            <main className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Sticky Sidebar / Engagement */}
                    <aside className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-32 flex flex-col items-center gap-8">
                            <button
                                onClick={handleLike}
                                className={cn(
                                    "p-4 rounded-2xl border transition-all duration-300 group",
                                    isLiked ? "bg-rose-500/10 border-rose-500 text-rose-500 shadow-[0_0_20px_-5px_rgba(244,63,94,0.3)]" : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                                )}
                            >
                                <Heart size={24} className={isLiked ? "fill-current" : "group-hover:scale-110 transition-transform"} />
                                <span className="block text-[10px] font-bold mt-2">{likes}</span>
                            </button>

                            <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:border-white/20 transition-all group">
                                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                                <span className="block text-[10px] font-bold mt-2">12</span>
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setShowShare(!showShare)}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:border-white/20 transition-all group"
                                >
                                    <Share2 size={24} className="group-hover:rotate-12 transition-transform" />
                                </button>

                                <AnimatePresence>
                                    {showShare && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="absolute left-full ml-4 top-0 flex flex-col gap-2 p-2 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl"
                                        >
                                            <button onClick={copyLink} title="Copy Link" className="p-2 hover:bg-white/5 rounded-lg text-white/60 hover:text-white transition-colors"><LinkIcon size={18} /></button>
                                            <button title="Share on LinkedIn" className="p-2 hover:bg-[#0A66C2]/10 rounded-lg text-white/60 hover:text-[#0A66C2] transition-colors"><Linkedin size={18} /></button>
                                            <button title="Share on X" className="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </aside>

                    {/* Content Core */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Interactive Intro Module: High Intent SEO Content */}
                        <section className="p-8 md:p-12 rounded-[2.5rem] bg-brand-500/5 border border-brand-500/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-5 scale-150 group-hover:rotate-45 transition-transform duration-1000">
                                <Sparkles size={120} className="text-brand-500" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-brand-500 mb-6 leading-none">
                                Performance. Design. <span className="text-white">Strategy.</span>
                            </h2>
                            <p className="text-xl text-gray-300 font-bold leading-relaxed mb-8">
                                Why do some digital products dominate the market while others fade into obscurity? The secret lies in **high-performance UX architecture** coupled with **data-driven conversion strategies**. Our latest analysis deconstructs the essential blueprints for scaling creative digital solutions in 2024.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <CheckCircle2 className="text-brand-500" size={20} />
                                    <span className="text-sm font-bold text-white/80 tracking-tight">Conversion Optimization</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <CheckCircle2 className="text-brand-500" size={20} />
                                    <span className="text-sm font-bold text-white/80 tracking-tight">Scalable Brand Growth</span>
                                </div>
                            </div>
                        </section>

                        {/* Interactive Body Text Block */}
                        <div className="prose prose-invert prose-xl max-w-none space-y-12">
                            <p className="font-bold text-gray-400 leading-loose">
                                As we enter a new era of <span className="text-brand-500 underline decoration-2 underline-offset-4 font-bold">AI-integrated workflows</span>, the definition of digital excellence is pivoting. It's no longer just about aesthetics; it's about the precision of user journey mapping and the technical robustness of the underlying stack.
                            </p>

                            {/* Large Quote Component */}
                            <blockquote className="not-prose relative py-12 px-8 border-l-4 border-brand-500 bg-zinc-950/50 rounded-r-3xl my-16">
                                <Quote className="absolute top-4 right-8 text-brand-500 opacity-20" size={64} />
                                <p className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                                    "The future of web design isn't in pixels, it's in the anticipation of human intent through intelligent automation."
                                </p>
                                <cite className="text-sm font-bold text-brand-500 tracking-wider not-italic">
                                    // 5758 Design Philosophy
                                </cite>
                            </blockquote>

                            <div dangerouslySetInnerHTML={{ __html: article.content || '' }} className="prose-h2:text-4xl prose-h2:font-bold prose-h2:mb-8 prose-p:text-gray-400 prose-p:font-bold prose-p:leading-relaxed" />
                        </div>

                        {/* Engagement Footer */}
                        <section className="pt-20 border-t border-white/10">
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-3xl font-bold text-white tracking-tighter">
                                    The <span className="text-brand-500">Dialogue</span>
                                </h3>
                                <div className="text-xs font-bold text-white/40 tracking-wider">
                                    12 Comments
                                </div>
                            </div>

                            {/* Comment Form */}
                            <div className="mb-16">
                                <div className="relative group">
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Add to the discussion..."
                                        className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500/50 transition-all h-32"
                                    />
                                    <button className="absolute bottom-4 right-4 bg-emerald-500 text-black p-3 rounded-2xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10">
                                        <Send size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Mock Comments */}
                            <div className="space-y-8">
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-500 border border-emerald-500/20">
                                            U{i}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-sm font-bold text-white">InsightExplorer_{i}</div>
                                                <div className="text-[10px] font-bold text-white/20">2 hours ago</div>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                This perspective on UX architecture is exactly what we need for our scaling operations. The emphasis on high-intent keywords in the strategy is brilliant.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Desktop Right Sidebar - Related / Meta */}
                    <div className="lg:col-span-3 space-y-12">
                        <section className="p-6 rounded-3xl bg-zinc-900 border border-white/5">
                            <h4 className="text-xs font-bold text-brand-500 tracking-wider mb-6 flex items-center gap-2">
                                <Clock size={14} /> Quick Stats
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-2xl font-bold text-white">5.4K</div>
                                    <div className="text-[10px] font-bold text-white/30 tracking-wider">Article Views</div>
                                </div>
                                <div className="h-px bg-white/5" />
                                <div>
                                    <div className="text-2xl font-bold text-white">82%</div>
                                    <div className="text-[10px] font-bold text-white/30 tracking-wider">Completion Rate</div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 className="text-xs font-bold text-white tracking-wider mb-6 flex items-center gap-2">
                                <Share2 size={14} className="text-brand-500" /> Share Project
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="border-white/10 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] rounded-xl font-bold text-[10px] tracking-tight py-6 transition-all duration-300">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </Button>
                                <Button variant="outline" className="border-white/10 hover:bg-white hover:text-black hover:border-white rounded-xl font-bold text-[10px] tracking-tight py-6 transition-all duration-300">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="mr-2 h-4 w-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> X (Twitter)
                                </Button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
