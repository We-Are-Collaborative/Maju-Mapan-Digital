'use client';

import { SeoHead } from '@/components/seo-head';
import { SimplePagination } from '@/components/simple-pagination';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/inertia-adapter';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Search, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BrandedHero } from '@/components/ui/branded-hero';
import { BrandedCTA } from '@/components/ui/branded-cta';

// Interfaces
interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    thumbnail: { originalUrl: string | null; alt?: string | null } | null;
    category_id: string | null;
    category: { name: string; slug: string } | null;
    status: string;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
}

interface Category {
    id: string;
    name: string;
    slug: string;
}

interface Page {
    content: any;
    seoConfig: any;
}

interface InsightsContentProps {
    articles: Article[];
    categories: Category[];
    pageSeo: Page;
}

export function InsightsContent({ articles: allArticles, categories, pageSeo }: InsightsContentProps) {
    const [tab, setTab] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 6;

    // Filter articles based on tab AND search query
    const effectiveFilteredArticles = useMemo(() => {
        return allArticles.filter(a => {
            const matchesTab = tab ? a.category_id === tab : true;
            const matchesSearch = searchQuery === '' ||
                a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesTab && matchesSearch;
        });
    }, [allArticles, tab, searchQuery]);

    const featuredArticle = effectiveFilteredArticles[0];
    const gridArticles = effectiveFilteredArticles.slice(1);

    const totalPages = Math.ceil(gridArticles.length / itemsPerPage);
    const paginatedArticles = gridArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const section = document.getElementById('articles-grid');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-black min-h-screen">
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="Insights - Maju Mapan Digital"
                fallbackDescription="Explore our latest articles about digital marketing, web development, and creative insights."
                type="page"
            />

            {/* Hero Section */}
            <BrandedHero
                badgeIcon={Sparkles}
                badgeText="Knowledge Hub"
                title={
                    <>
                        Insights & <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Ideas</span>
                    </>
                }
                subtitle={pageSeo?.content?.page_description || "Deep dives into design, technology, and the future of digital experiences."}
                backgroundImage="/assets/bg_hello_dekstop.webp"
            >
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8 p-1.5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 w-full group transition-all focus-within:border-brand-500/50 focus-within:ring-4 focus-within:ring-brand-500/10">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-brand-500 transition-colors" />
                        <input
                            className="flex w-full bg-transparent border-none text-white placeholder:text-gray-500 h-12 pl-12 focus:outline-none focus:ring-0 text-base"
                            placeholder="Search the archive..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="h-12 px-8 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-black uppercase tracking-tight text-sm">
                        Explore
                    </Button>
                </div>
            </BrandedHero>

            <section className="container mx-auto px-4 pb-32">
                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                    <button
                        onClick={() => { setTab(''); setCurrentPage(1); }}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden",
                            tab === '' ? "text-black" : "text-gray-400 hover:text-white bg-white/5 border border-white/5"
                        )}
                    >
                        {tab === '' && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-brand-500"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">All Stories</span>
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => { setTab(category.id); setCurrentPage(1); }}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden",
                                tab === category.id ? "text-black" : "text-gray-400 hover:text-white bg-white/5 border border-white/5"
                            )}
                        >
                            {tab === category.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-brand-500"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Featured Story */}
                <AnimatePresence mode="wait">
                    {featuredArticle && searchQuery === '' && currentPage === 1 && (
                        <motion.div
                            key={`featured-${featuredArticle.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="mb-20"
                        >
                            <Link href={`/insights/${featuredArticle.slug}`} className="group relative block aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 shadow-2xl shadow-brand-500/5">
                                <img
                                    src={featuredArticle.thumbnail?.originalUrl ?? '/assets/bg-speciality.webp'}
                                    alt={featuredArticle.thumbnail?.alt || featuredArticle.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                                    loading="eager" // Featured is above the fold usually
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full lg:w-2/3 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-brand-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            {featuredArticle.category?.name}
                                        </span>
                                        <span className="text-white/60 text-xs font-bold flex items-center gap-1.5">
                                            <Calendar size={14} className="text-brand-500" />
                                            {new Date(featuredArticle.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight group-hover:text-brand-500 transition-colors">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-lg text-gray-300 line-clamp-2 font-medium max-w-xl">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 pt-4">
                                        <div className="flex items-center gap-2 text-white/40 text-sm font-bold">
                                            <Clock size={16} className="text-brand-500" />
                                            {pageSeo?.content?.default_read_time || '5'} {pageSeo?.content?.read_time_text || 'min read'}
                                        </div>
                                        <div className="h-px bg-white/10 flex-1" />
                                        <div className="flex items-center font-black text-brand-500 uppercase text-xs tracking-widest gap-2">
                                            Read Story <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grid Header */}
                <div id="articles-grid" className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                        Latest <span className="text-brand-500">Updates</span>
                    </h3>
                </div>

                {/* Desktop Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {paginatedArticles.map((article, index) => (
                            <motion.article
                                layout
                                key={article.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={`/insights/${article.slug}`} className="group flex flex-col h-full rounded-[2rem] bg-white/5 border border-white/5 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={article.thumbnail?.originalUrl ?? '/assets/bg-speciality.webp'}
                                            alt={article.thumbnail?.alt || article.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                                                {article.category?.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col p-8 md:p-10">
                                        <div className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                                            <Calendar size={12} className="text-brand-500" />
                                            {new Date(article.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <h4 className="text-xl font-black text-white leading-snug mb-4 group-hover:text-brand-500 transition-colors line-clamp-2">
                                            {article.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm font-medium line-clamp-3 mb-8 flex-1">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                            <div className="flex items-center gap-4 text-white/40">
                                                <div className="flex items-center gap-1.5 hover:text-rose-500 transition-colors cursor-pointer group/stat">
                                                    <Heart size={14} className="group-hover/stat:fill-rose-500" />
                                                    <span className="text-[10px] font-black">{Math.floor(Math.random() * 500) + 100}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 hover:text-brand-500 transition-colors cursor-pointer group/stat">
                                                    <MessageCircle size={14} className="group-hover/stat:fill-brand-500" />
                                                    <span className="text-[10px] font-black">{Math.floor(Math.random() * 50) + 10}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:text-brand-500 transition-colors">
                                                View <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {effectiveFilteredArticles.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center"
                    >
                        <div className="bg-white/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-600">
                            <Search size={40} />
                        </div>
                        <h4 className="text-2xl font-black text-white mb-2 uppercase">No articles found</h4>
                        <p className="text-gray-500 font-medium">Try adjusting your filters or search keywords.</p>
                        <Button
                            onClick={() => { setSearchQuery(''); setTab(''); }}
                            variant="link"
                            className="mt-6 text-brand-500 font-black uppercase tracking-widest"
                        >
                            Reset Search
                        </Button>
                    </motion.div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex justify-center mt-24"
                    >
                        <SimplePagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            hasNextPage={currentPage < totalPages}
                            hasPreviousPage={currentPage > 1}
                            onPageChange={handlePageChange}
                            className="bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl"
                        />
                    </motion.div>
                )}
            </section>

            <BrandedCTA
                title="Stay Ahead of the Curve"
                description="Subscribe to our newsletter for the latest insights, trends, and strategies delivered straight to your inbox."
                buttonText="Join the Community"
                source="Insights"
                backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Background decorative blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[0%] right-[-10%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
