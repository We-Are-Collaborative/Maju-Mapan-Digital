'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSlide {
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    bgImageDesktop: string | null;
    bgImageDesktopAlt?: string | null;
    bgImageMobile: string | null;
    bgImageMobileAlt?: string | null;
    bgOpacity: number;
}

interface HeroSliderProps {
    slides: HeroSlide[];
    isDynamic: boolean;
}

export function HeroSlider({ slides, isDynamic }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(!isDynamic && slides.length > 1);

    useEffect(() => {
        if (isAutoPlaying) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            }, 6000);
            return () => clearInterval(timer);
        }
    }, [isAutoPlaying, slides.length]);

    if (!slides || slides.length === 0) return null;

    const currentSlide = slides[currentIndex];
    const desktopBg = currentSlide.bgImageDesktop || "/assets/bg_banner_dekstop.webp";
    const mobileBg = currentSlide.bgImageMobile || "/assets/bg_banner_mobile.webp";
    const bgOpacity = currentSlide.bgOpacity ?? 0.4;

    const slideVariants = {
        enter: { opacity: 0, x: 20 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <section
            className="relative min-h-screen w-full overflow-hidden"
            id="banner"
            aria-label="Hero banner section"
        >
            {/* SEO Optimized Background Layers */}
            <div className="absolute inset-0 z-0 select-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full w-full"
                    >
                        <picture>
                            <source media="(max-width: 640px)" srcSet={mobileBg} />
                            <img
                                src={desktopBg}
                                alt={currentSlide.bgImageDesktopAlt || currentSlide.titleLine1 || "Hero Banner"}
                                className="h-full w-full object-cover"
                                loading="eager" // Hero images should be eager for LCP
                            />
                        </picture>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div
                className="absolute inset-0 bg-black transition-opacity duration-700 z-[1]"
                style={{ opacity: bgOpacity }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-black/60 sm:via-transparent sm:to-transparent z-[2]" />

            <div className="relative z-10 container mx-auto h-full min-h-screen px-4">
                <div className="grid h-full grid-cols-12">
                    <div className="col-span-12 flex items-center lg:col-span-6 lg:col-start-7">
                        <div className="flex min-h-screen w-full flex-col justify-center items-end gap-8 py-20 lg:py-0">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="text-right flex flex-col items-end w-full"
                                >
                                    <h1 className="text-6xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] drop-shadow-2xl max-w-5xl">
                                        <span className="block">
                                            {currentSlide.titleLine1}
                                        </span>
                                        <span className="text-brand-400 drop-shadow-[0_0_35px_rgba(47,221,173,0.6)] block mt-2">
                                            {currentSlide.titleHighlight}
                                        </span>
                                    </h1>

                                    <div className="mt-8 relative group cursor-default">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <p className="relative max-w-2xl text-2xl md:text-3xl font-medium text-white/90 tracking-wide leading-snug drop-shadow-lg selection:bg-brand-500/30">
                                            {currentSlide.subtitle}
                                        </p>
                                    </div>

                                    <div className="pt-10">
                                        <a target="_blank" rel="noopener noreferrer" href={currentSlide.ctaLink}>
                                            <Button
                                                size="lg"
                                                className="group relative h-20 overflow-hidden rounded-full bg-brand-500 px-14 text-2xl font-black text-black transition-all duration-500 hover:scale-110 hover:bg-brand-400 hover:shadow-[0_0_60px_-10px_rgba(47,221,173,0.8)] active:scale-95 border-2 border-brand-400/50 backdrop-blur-md"
                                            >
                                                <span className="relative z-10 flex items-center gap-3">
                                                    {currentSlide.ctaText}
                                                    <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black/10 transition-transform duration-500 group-hover:translate-x-2 group-hover:bg-black/20">
                                                        <ArrowRight className="h-5 w-5 -translate-x-5 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                                                        <ArrowRight className="absolute h-5 w-5 transition-all duration-500 group-hover:translate-x-5 group-hover:opacity-0" />
                                                    </div>
                                                </span>
                                                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                                            </Button>
                                        </a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Controls for Manual Mode */}
            {!isDynamic && slides.length > 1 && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
                    <button
                        onClick={() => { setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length); setIsAutoPlaying(false); }}
                        className="p-2 text-white/50 hover:text-brand-400 transition-colors"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
                                className={`size-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-brand-400 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => { setCurrentIndex((prev) => (prev + 1) % slides.length); setIsAutoPlaying(false); }}
                        className="p-2 text-white/50 hover:text-brand-400 transition-colors"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            )}

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-4 h-2 w-2 animate-pulse rounded-full bg-brand-400 opacity-60 sm:hidden"></div>
            <div className="absolute top-1/3 right-8 h-1 w-1 animate-pulse rounded-full bg-brand-300 opacity-40 sm:hidden"></div>
            <div className="absolute bottom-1/4 left-8 hidden h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500 opacity-50 sm:block"></div>
        </section>
    );
}
