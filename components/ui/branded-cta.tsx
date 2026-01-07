'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LeadModal } from '@/components/lead-modal';

interface BrandedCTAProps {
    title: string;
    description: string;
    buttonText: string;
    source: string;
    modalTitle?: string;
    modalDescription?: string;
    backgroundImage?: string;
    className?: string;
}

export function BrandedCTA({
    title,
    description,
    buttonText,
    source,
    modalTitle,
    modalDescription,
    backgroundImage = "/assets/bg_hello_dekstop.webp",
    className
}: BrandedCTAProps) {
    return (
        <section className={`relative overflow-hidden bg-black py-24 sm:py-32 ${className || ''}`} id="cta">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 text-center">
                <div className="mx-auto max-w-3xl space-y-8">
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                        {title}
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
                        {description}
                    </p>

                    <div className="pt-4">
                        <LeadModal
                            source={source}
                            title={modalTitle || title}
                            description={modalDescription || "Let's turn your vision into reality."}
                            trigger={
                                <Button
                                    size="lg"
                                    className="h-14 rounded-full bg-brand-500 px-8 text-lg font-bold text-black shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:bg-brand-400 hover:shadow-brand-500/40"
                                >
                                    {buttonText} <ArrowRight className="ml-2 size-5" />
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
