'use client';

import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from '@/lib/inertia-adapter';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { SolutionCard } from '@/components/solutions/solution-card';
import { getUniqueCardStyles } from '@/lib/solution-styles';
import { Speciality } from '@/types/speciality';

// Interfaces
interface Page {
    content: any;
    seoConfig: any;
}

interface SolutionsContentProps {
    specialities: Speciality[];
    pageSeo: Page;
}

import { Search, Zap } from 'lucide-react';
import { BrandedHero } from '@/components/ui/branded-hero';
import { BrandedCTA } from '@/components/ui/branded-cta';

export function SolutionsContent({ specialities, pageSeo }: SolutionsContentProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Filter specialities
    const filteredSpecialities = specialities.filter(s =>
        (s.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => {
                            const newSet = new Set(prev);
                            newSet.add(entry.target.id);
                            return newSet;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observerRef.current?.observe(section);
        });

        return () => observerRef.current?.disconnect();
    }, [filteredSpecialities]); // Re-observe when list changes

    // Get content from page configuration with fallbacks
    const content = pageSeo?.content || {};

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle={content.page_title || 'Solutions - Maju Mapan Digital'}
                fallbackDescription={content.page_description || 'Discover our comprehensive range of digital solutions.'}
                type="page"
            />

            {/* New Hero Section */}
            <BrandedHero
                badgeIcon={Zap}
                badgeText="Our Expertise"
                title={
                    <>
                        Our <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Solutions</span>
                    </>
                }
                subtitle="Comprehensive digital services designed to elevate your business. From development to strategy, we have you covered."
                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            >
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl w-full mt-8 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                            className="flex w-full bg-transparent border-none text-white placeholder:text-gray-500 h-11 pl-10 focus:outline-none focus:ring-0 text-base"
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="h-11 px-8 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-semibold">
                        Search
                    </Button>
                </div>
            </BrandedHero>

            {/* Services Grid */}
            <div className="container mx-auto max-w-7xl px-4 py-24">
                {filteredSpecialities.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No services match your search.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredSpecialities.map((speciality, index) => {
                            const styles = getUniqueCardStyles(speciality.slug || "");
                            return (
                                <SolutionCard
                                    key={speciality.id}
                                    title={speciality.title || ""}
                                    description={speciality.excerpt || ""}
                                    slug={speciality.slug || ""}
                                    icon={styles.icon}
                                    index={index}
                                    styles={styles}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <BrandedCTA
                title={content.cta_title || 'Ready to Transform Your Digital Presence?'}
                description={content.cta_subtitle || "Let's discuss how we can help you achieve your business goals with our custom digital solutions."}
                buttonText="Get in Touch"
                source="Solutions"
                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            />
        </>
    );
}
