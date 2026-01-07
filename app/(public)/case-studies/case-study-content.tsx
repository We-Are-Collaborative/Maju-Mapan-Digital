'use client';

import { useSearchParams } from 'next/navigation';
import { SimplePagination } from '@/components/simple-pagination';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/inertia-adapter';
import { Building2, ExternalLink, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { SeoHead } from '@/components/seo-head';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BrandedHero } from '@/components/ui/branded-hero';
import { BrandedCTA } from '@/components/ui/branded-cta';
import { Award } from 'lucide-react';

// ... interfaces ...
interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    thumbnailUrl: string | null;
    client: {
        name: string;
        slug?: string;
        logo: { originalUrl: string } | null;
    } | null;
}

interface Page {
    content: any;
    seoConfig: any;
}

interface CaseStudyContentProps {
    caseStudies: CaseStudy[];
    pageSeo: Page;
}

export function CaseStudyContent({ caseStudies: allStudies, pageSeo }: CaseStudyContentProps) {
    const searchParams = useSearchParams();
    const clientFilter = searchParams.get('client');

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 9;

    const filteredStudies = useMemo(() => {
        return (allStudies || []).filter(study => {
            const matchesSearch =
                study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (study.excerpt && study.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (study.client?.name.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesClient = clientFilter
                ? study.client?.slug === clientFilter
                : true;

            return matchesSearch && matchesClient;
        });
    }, [allStudies, searchQuery, clientFilter]);

    const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
    const paginatedStudies = filteredStudies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="Case Studies - Maju Mapan"
                fallbackDescription="Explore our case studies of successful projects and partnerships."
                type="page"
            />

            {/* New Hero Section */}
            <BrandedHero
                badgeIcon={Award}
                badgeText="Our Work"
                title={
                    <>
                        Our <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Case Studies</span>
                    </>
                }
                subtitle="Explore our case studies of successful projects. We help businesses redefine what's possible through digital excellence."
                backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            >
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl w-full mt-8 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                            className="flex w-full bg-transparent border-none text-white placeholder:text-gray-500 h-11 pl-10 focus:outline-none focus:ring-0 text-base"
                            placeholder="Search case studies..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1); // Reset to page 1 on search
                            }}
                        />
                    </div>
                    <Button className="h-11 px-8 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-semibold">
                        Search
                    </Button>
                </div>
            </BrandedHero>

            <div className="container mx-auto max-w-7xl px-4 py-20">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {paginatedStudies.map((study) => (
                        <Card key={study.id} className="group overflow-hidden border-gray-800 bg-gray-900/50 transition-all hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10">
                            <CardContent className="p-6">
                                <Link href={`/case-studies/${study.slug}`}>
                                    <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-black/50 overflow-hidden relative">
                                        {study.thumbnailUrl ? (
                                            <img
                                                src={study.thumbnailUrl}
                                                alt={study.title}
                                                className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                                            />
                                        ) : (
                                            <Building2 className="h-12 w-12 text-gray-600" />
                                        )}
                                        {study.client?.logo?.originalUrl && (
                                            <div className="absolute top-4 right-4 h-12 w-12 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/10">
                                                <img src={study.client.logo.originalUrl} alt={study.client.name} className="h-full w-full object-contain" />
                                            </div>
                                        )}
                                    </div>
                                </Link>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{study.client?.name}</span>
                                    </div>
                                    <Link href={`/case-studies/${study.slug}`}>
                                        <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors uppercase">{study.title}</h3>
                                    </Link>
                                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{study.excerpt}</p>

                                    <Link
                                        href={`/case-studies/${study.slug}`}
                                        className="inline-flex items-center text-xs font-black tracking-widest text-white mt-4 border-b border-brand-500/0 hover:border-brand-500 transition-all"
                                    >
                                        READ CASE STUDY <ExternalLink className="ml-1.5 h-3 w-3" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredStudies.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No case studies match your search.</p>
                    </div>
                )}

                {totalPages > 1 && (
                    <SimplePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        hasNextPage={currentPage < totalPages}
                        hasPreviousPage={currentPage > 1}
                        onPageChange={handlePageChange}
                        className="mt-12"
                    />
                )}
            </div>

            <BrandedCTA
                title="Ready to Create Your Success Story?"
                description="Let's collaborate to build something extraordinary that drives real results for your business."
                buttonText="Start Your Project"
                source="Case Studies"
                backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            />
        </>
    );
}
