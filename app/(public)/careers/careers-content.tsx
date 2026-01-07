'use client';

import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/lib/inertia-adapter';
import { ArrowRight, Briefcase, Clock, Coins, MapPin, Rocket, Search } from 'lucide-react';
import { BrandedHero } from '@/components/ui/branded-hero';
import { BrandedCTA } from '@/components/ui/branded-cta';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Interfaces
interface Career {
    id: string;
    title: string;
    slug: string;
    type: string;
    location: string;
    description: string;
    requirements: string[];
    min_salary?: number;
    max_salary?: number;
    category_id?: string;
    is_remote?: boolean;
}

interface Category {
    id: string;
    name: string;
}

interface Page {
    content: any;
    seoConfig: any;
}

interface CareersContentProps {
    careers: Career[];
    categories: Category[];
    pageSeo: Page;
}

export function CareersContent({ careers, categories, pageSeo }: CareersContentProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredCareers = useMemo(() => {
        return careers.filter((career) => {
            const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                career.description?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || career.category_id === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [careers, searchQuery, selectedCategory]);

    const activeCategories = useMemo(() => {
        // Only show categories that have careers + All
        return [
            { id: 'all', name: 'All Positions' },
            ...categories.filter(c => careers.some(job => job.category_id === c.id))
        ];
    }, [categories, careers]);

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="Careers - Join Maju Mapan"
                fallbackDescription="Build the future with us. Explore exciting career opportunities."
                type="page"
            />

            {/* Hero Section */}
            <BrandedHero
                badgeIcon={Rocket}
                badgeText="Join the Team"
                title={
                    <>
                        Build the <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Extraordinary</span>
                    </>
                }
                subtitle="Join a team of visionaries, creators, and innovators. We're looking for passionate individuals to help us redefine what's possible."
                backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            >
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl w-full mt-8 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="Search for roles..."
                            className="pl-10 bg-transparent border-none text-white placeholder:text-gray-500 h-11 focus-visible:ring-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="h-11 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-semibold px-8">
                        Search
                    </Button>
                </div>
            </BrandedHero>

            {/* Main Content */}
            <div className="bg-black min-h-screen pb-32">
                <div className="container mx-auto max-w-7xl px-4">

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        {activeCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.id
                                    ? 'bg-brand-500 text-black shadow-lg shadow-brand-500/20 scale-105'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Job Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filteredCareers.map((career) => (
                                <motion.div
                                    key={career.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link href={`/careers/${career.slug}`} className="group block h-full">
                                        <div className="h-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-500/30 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col relative overflow-hidden">

                                            {/* Hover Glow */}
                                            <div className="absolute top-0 right-0 p-20 bg-brand-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                                            <div className="relative z-10 flex-1">
                                                <div className="flex items-start justify-between mb-4">
                                                    <span className="inline-flex items-center rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500 ring-1 ring-inset ring-brand-500/20">
                                                        {categories.find(c => c.id === career.category_id)?.name || 'General'}
                                                    </span>
                                                    {career.is_remote && (
                                                        <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md">
                                                            Remote
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">
                                                    {career.title}
                                                </h3>

                                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="h-4 w-4" />
                                                        {career.location}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Briefcase className="h-4 w-4" />
                                                        {career.type}
                                                    </div>
                                                </div>

                                                <p className="text-gray-400 line-clamp-3 mb-6 leading-relaxed">
                                                    {career.description}
                                                </p>
                                            </div>

                                            <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-2 text-white font-medium">
                                                    <Coins className="h-4 w-4 text-brand-500" />
                                                    <span>
                                                        {career.min_salary ? `$${career.min_salary.toLocaleString()}` : 'Competitive'}
                                                        {career.max_salary ? ` - $${career.max_salary.toLocaleString()}` : ''}
                                                    </span>
                                                </div>
                                                <span className="flex items-center text-sm font-semibold text-brand-500 group-hover:translate-x-1 transition-transform">
                                                    Details <ArrowRight className="ml-1 h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredCareers.length === 0 && (
                        <div className="text-center py-20">
                            <div className="bg-white/5 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-gray-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">No positions found</h3>
                            <p className="text-gray-400 mt-2">Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>
            </div>

            <BrandedCTA
                title="Can't Find Your Role?"
                description="We're always looking for exceptional talent. Send us your portfolio and let's see if there's a fit."
                buttonText="Pitch Yourself"
                source="Careers"
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />
        </>
    );
}
