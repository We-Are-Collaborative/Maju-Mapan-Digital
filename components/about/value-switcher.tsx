'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Value {
    id?: string;
    title?: string;
    subtitle?: string | null;
    excerpt?: string | null;
    iconUrl?: string | null;
    bgUrl?: string | null;
    slug?: string;
}

interface ValueSwitcherProps {
    values: Value[];
}

export const ValueSwitcher: React.FC<ValueSwitcherProps> = ({ values }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeValue = values[activeIndex];

    if (!values.length) return null;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[600px]">
            {/* Navigation - Left Side */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                {values.map((value, index) => (
                    <button
                        key={value.id || index}
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`w-full group text-left px-6 py-5 sm:px-8 sm:py-6 rounded-2xl transition-all duration-500 border ${activeIndex === index
                            ? 'bg-brand-500/10 border-brand-500/50 shadow-lg shadow-brand-500/10'
                            : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                            }`}
                    >
                        <div className="flex items-center gap-6">
                            <span className={`text-sm font-black transition-colors duration-500 ${activeIndex === index ? 'text-brand-500' : 'text-gray-500'
                                }`}>
                                0{index + 1}
                            </span>
                            <h3 className={`text-xl sm:text-2xl font-bold transition-all duration-500 ${activeIndex === index ? 'text-white translate-x-2' : 'text-gray-400'
                                }`}>
                                {value.title}
                            </h3>
                        </div>
                    </button>
                ))}
            </div>

            {/* Showcase - Right Side */}
            <div className="lg:col-span-8 relative min-h-[400px] lg:min-h-0 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeValue.id || activeIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0 flex flex-col"
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            <img
                                src={activeValue.bgUrl || '/assets/net.svg'}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16 max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="size-16 sm:size-20 flex items-center justify-center rounded-2xl bg-brand-500/20 border border-brand-500/30 backdrop-blur-md mb-8"
                            >
                                <img
                                    src={activeValue.iconUrl || '/placeholder.svg'}
                                    alt=""
                                    className="size-10 sm:size-12 object-contain filter invert brightness-200"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/placeholder.svg';
                                    }}
                                />
                            </motion.div>

                            <motion.h4
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="text-brand-500 text-sm font-black uppercase tracking-[0.2em] mb-4"
                            >
                                {activeValue.subtitle}
                            </motion.h4>

                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
                            >
                                {activeValue.title}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium"
                            >
                                {activeValue.excerpt}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
