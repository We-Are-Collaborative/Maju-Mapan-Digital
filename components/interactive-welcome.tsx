'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, BarChart3, History, Sparkles } from 'lucide-react';

interface TabButtonProps {
    isActive: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}

function TabButton({ isActive, onClick, icon, label }: TabButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                isActive
                    ? "bg-brand-500 text-black shadow-[0_0_20px_rgba(47,221,173,0.3)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            )}
        >
            <span className={cn("transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")}>
                {icon}
            </span>
            {label}
        </button>
    );
}

interface InteractiveWelcomeProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

export function InteractiveWelcome({ title, subtitle, description }: InteractiveWelcomeProps) {
    const [activeTab, setActiveTab] = useState<'intro' | 'journey' | 'results'>('intro');

    return (
        <div className="flex flex-col gap-8">
            {/* Top Controls - Always Horizontal */}
            <div className="flex flex-col items-start gap-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-3xl inline-flex flex-row gap-2 overflow-x-auto max-w-full scrollbar-hide">
                    <TabButton
                        isActive={activeTab === 'intro'}
                        onClick={() => setActiveTab('intro')}
                        icon={<Sparkles className="w-4 h-4" />}
                        label="Who We Are"
                    />
                    <TabButton
                        isActive={activeTab === 'journey'}
                        onClick={() => setActiveTab('journey')}
                        icon={<History className="w-4 h-4" />}
                        label="Our Journey"
                    />
                    <TabButton
                        isActive={activeTab === 'results'}
                        onClick={() => setActiveTab('results')}
                        icon={<BarChart3 className="w-4 h-4" />}
                        label="Our Impact"
                    />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1">
                <div className="relative min-h-[300px]">
                    {/* Intro Tab */}
                    <div className={cn(
                        "absolute inset-0 transition-all duration-500 ease-in-out",
                        activeTab === 'intro' ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-8 z-0 pointer-events-none absolute"
                    )}>
                        <h1 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
                            {title || 'Say Hello to Your Next Growth Partner'}
                        </h1>
                        <p className="text-xl leading-relaxed text-brand-500 sm:text-2xl lg:text-3xl mb-6">
                            {subtitle || '(a.k.a Maju Mapan - yes, we love wordplay)'}
                        </p>
                        <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                            {description || "We're a 360 digital agency that understands, every brand and campaign craves impact! That's why we craft tailor-made strategies to deliver results that truly hit the mark."}
                        </p>
                    </div>

                    {/* Journey Tab */}
                    <div className={cn(
                        "absolute inset-0 transition-all duration-500 ease-in-out",
                        activeTab === 'journey' ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-8 z-0 pointer-events-none absolute"
                    )}>
                        <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
                        <div className="space-y-8 border-l-2 border-white/10 pl-8 relative">
                            {[
                                { year: '2020', title: 'Inception', desc: 'Founded with a vision to redefine digital impact.' },
                                { year: '2022', title: 'Expansion', desc: 'Grew to a team of 20+ creative specialists.' },
                                { year: '2024', title: 'Evolution', desc: 'Launching our comprehensive 360° service ecosystem.' },
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-brand-500 border-4 border-black box-content" />
                                    <span className="text-brand-500 font-mono text-sm mb-1 block">{item.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Results Tab */}
                    <div className={cn(
                        "absolute inset-0 transition-all duration-500 ease-in-out",
                        activeTab === 'results' ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-8 z-0 pointer-events-none absolute"
                    )}>
                        <h2 className="text-3xl font-bold mb-8">Impact Delivered</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Client Growth', value: '300%', suffix: '+' },
                                { label: 'Campaigns Launched', value: '150', suffix: '+' },
                                { label: 'Ad Spend Managed', value: '$2M', suffix: '+' },
                                { label: 'Retention Rate', value: '95', suffix: '%' },
                            ].map((stat, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                    <div className="text-3xl sm:text-4xl font-bold text-brand-500 mb-2">
                                        {stat.value}<span className="text-xl text-brand-500/70">{stat.suffix}</span>
                                    </div>
                                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
