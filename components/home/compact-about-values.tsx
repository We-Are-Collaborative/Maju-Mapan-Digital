'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Rocket, BarChart3, ArrowRight, ChevronRight } from 'lucide-react';
import { Value } from '@/types/value';
import { Link } from '@/lib/inertia-adapter';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CompactAboutValuesProps {
    values: Value[];
    aboutTitle?: string;
    valuesTitle?: string;
}

const stories = [
    {
        id: 'who-we-are',
        title: 'Who We Are',
        icon: Target,
        content: "We are a data-obsessed performance marketing powerhouse. We don't just \"run ads\"; we engineer growth engines. Our team is a blend of creative visionaries and analytical minds dedicated to one thing: ROI.",
        highlight: "ROI-Driven Engineering",
        color: "from-emerald-500/20 to-teal-500/20",
        activeColor: "text-emerald-500"
    },
    {
        id: 'our-journey',
        title: 'Our Journey',
        icon: Rocket,
        content: "From a small boutique agency to a regional leader, our journey has been defined by the pursuit of measurable impact. We've scaled brands from start-ups to market leaders by staying ahead of the algorithm.",
        highlight: "Regional Leadership",
        color: "from-blue-500/20 to-indigo-500/20",
        activeColor: "text-blue-500"
    },
    {
        id: 'our-impact',
        title: 'Our Impact',
        icon: BarChart3,
        content: "Over $500M in managed ad spend and a 10x average growth for our partners. We measure success in breakthroughs, not just clicks. We turn standard results into industry-leading cases.",
        highlight: "Measurable Breakthroughs",
        color: "from-purple-500/20 to-pink-500/20",
        activeColor: "text-purple-500"
    }
];

export function CompactAboutValues({ values, aboutTitle = "The Agency", valuesTitle = "Our Core Values" }: CompactAboutValuesProps) {
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);

    return (
        <section className="relative overflow-hidden bg-black py-20 lg:py-24" id="about-values">
            {/* Background Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-[100px]" />
                <div className="absolute bottom-0 right-0 size-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

                    {/* LEFT COLUMN: Interactive Story (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col h-full">
                        <div className="relative flex-1 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                            {/* Header */}
                            <div className="relative z-10 mb-8 flex items-center justify-between">
                                <h2 className="text-sm font-black tracking-[0.2em] text-white/40">
                                    {aboutTitle}
                                </h2>
                                <div className="flex gap-2">
                                    {stories.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "h-1.5 rounded-full transition-all duration-300",
                                                idx === activeStoryIndex ? "w-8 bg-brand-500" : "w-1.5 bg-white/10"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Dynamic Content */}
                            <div className="relative z-10 min-h-[300px] flex flex-col justify-between">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStoryIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className={cn("inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md", stories[activeStoryIndex].activeColor)}>
                                            {React.createElement(stories[activeStoryIndex].icon, { size: 14 })}
                                            {stories[activeStoryIndex].highlight}
                                        </div>

                                        <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                                            {stories[activeStoryIndex].title}
                                        </h3>

                                        <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
                                            {stories[activeStoryIndex].content}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Tabs/Controls */}
                                <div className="mt-8 flex flex-wrap gap-4 pt-8 border-t border-white/10">
                                    {stories.map((story, index) => (
                                        <button
                                            key={story.id}
                                            onClick={() => setActiveStoryIndex(index)}
                                            className={cn(
                                                "group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300",
                                                activeStoryIndex === index
                                                    ? "bg-white text-black scale-105 shadow-lg shadow-white/10"
                                                    : "bg-black/40 text-gray-500 hover:bg-black/60 hover:text-white"
                                            )}
                                        >
                                            {story.title}
                                        </button>
                                    ))}

                                    <div className="flex-1" />

                                    <Link href="/about-us" className="group flex items-center gap-2 text-sm font-black tracking-widest text-brand-500 transition-all hover:text-brand-400">
                                        Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Values List (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-sm font-black tracking-[0.2em] text-white/40">
                                {valuesTitle}
                            </h2>
                            <Link href="/about-us" className="text-xs font-bold text-white/40 hover:text-white transition-colors">
                                View All
                            </Link>
                        </div>

                        <div className="flex flex-col gap-4 flex-1">
                            {values.slice(0, 3).map((value, index) => (
                                <motion.div
                                    key={value.id || index}
                                    className="group relative flex-1 overflow-hidden"
                                    onHoverStart={() => setHoveredValue(value.id || null)}
                                    onHoverEnd={() => setHoveredValue(null)}
                                >
                                    <Link href={`/value/${value.slug}`} className="block h-full">
                                        <div className={cn(
                                            "relative h-full flex flex-col justify-center rounded-[2rem] border p-6 transition-all duration-500",
                                            "bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-brand-500/30"
                                        )}>
                                            <div className="flex items-start gap-5">
                                                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-brand-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/20">
                                                    <img
                                                        src={value.iconUrl || '/placeholder.svg'}
                                                        alt={value.title || ''}
                                                        className="size-6 object-contain"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">
                                                        {value.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
                                                        {value.excerpt || value.description}
                                                    </p>
                                                </div>

                                                <div className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-300 group-hover:border-brand-500/50 group-hover:bg-brand-500 group-hover:text-black">
                                                    <ChevronRight className="size-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
