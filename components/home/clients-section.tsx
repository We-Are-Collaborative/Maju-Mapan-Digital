'use client'

import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Client } from '@/types/client';
import { BrandedSectionHeader } from '@/components/ui/branded-section-header';
import { Button } from '@/components/ui/button';

interface ClientsSectionProps {
    clients: Client[];
    subtitle?: string;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({
    clients,
    subtitle = 'Proud to partner with leading brands and innovative companies across industries.'
}) => {
    return (
        <section
            className="relative overflow-hidden border-y border-gray-800/50 bg-gradient-to-b from-black via-gray-900/50 to-black"
            id="trusted-clients"
            aria-labelledby="clients-heading"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 opacity-70 blur-3xl sm:size-[40rem] lg:size-[48rem]" />
                <div
                    className="absolute top-20 right-20 size-1 animate-pulse rounded-full bg-brand-400/60"
                    style={{ animationDelay: '0.3s' }}
                />
                <div
                    className="absolute bottom-32 left-20 size-1.5 animate-ping rounded-full bg-brand-500/50"
                    style={{ animationDelay: '0.9s' }}
                />
            </div>

            <div className="relative container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <BrandedSectionHeader
                    id="clients-header"
                    badgeIcon={Award}
                    badgeText="Trusted By"
                    title={
                        <>
                            Our{' '}
                            <span className="bg-gradient-to-r from-brand-50 to-brand-600 bg-clip-text text-transparent">
                                Valued Clients
                            </span>
                        </>
                    }
                    subtitle={subtitle}
                />

                <div className="relative mt-16 overflow-hidden py-12">
                    {/* Infinite Marquee Animation */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes marquee-infinite {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-33.33%); }
                        }
                        .animate-marquee-infinite {
                            display: flex;
                            width: max-content;
                            animation: marquee-infinite 60s linear infinite;
                        }
                        .animate-marquee-infinite:hover {
                            animation-play-state: paused;
                        }
                    `}} />

                    <div className="animate-marquee-infinite flex gap-10 px-6">
                        {/* Triple the list for a perfectly seamless infinite loop on any screen size */}
                        {[...clients, ...clients, ...clients].map((client, index) => (
                            <Link
                                key={`${client.id}-${index}`}
                                href={`/case-studies?client=${client.slug}`}
                                className="group relative w-72 aspect-[16/10] shrink-0 overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900 to-black transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.15)]"
                                aria-label={`View ${client.name} case studies`}
                            >
                                {/* Active Brand Background - Transitions to white to make colorful logos pop */}
                                <div
                                    className="absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 bg-white"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                                <div className="relative flex h-full items-center justify-center p-6">
                                    {client.logo?.originalUrl ? (
                                        <div className="relative flex h-full w-full items-center justify-center">
                                            <img
                                                src={client.logo.originalUrl}
                                                alt={client.logo.alt || `${client.name} logo`}
                                                className="w-[80%] h-[80%] object-contain transition-all duration-500 brightness-0 invert opacity-100 group-hover:filter-none group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <p className="text-xl font-black text-gray-400 transition-colors duration-300 group-hover:text-gray-900 uppercase tracking-tighter">
                                                {client.name}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Premium Border Accent */}
                                <div
                                    className="absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    style={{ backgroundColor: client.brandColor || '#ffffff' }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Shadow Fades for Depth */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />
                </div>

                {/* View All Button */}
                <div className="mt-12 flex justify-center sm:mt-16" data-animate id="clients-cta">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="h-12 rounded-full border-2 border-brand-500/50 bg-transparent px-8 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-500 hover:bg-brand-500/10"
                    >
                        <Link href="/case-studies">
                            View All Case Studies
                            <ArrowRight className="ml-2 size-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
