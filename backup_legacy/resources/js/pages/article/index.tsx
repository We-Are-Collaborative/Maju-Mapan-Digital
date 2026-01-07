import { SeoHead } from '@/components/seo-head';
import { SimplePagination } from '@/components/simple-pagination';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PublicLayout } from '@/layouts/public-layout';
import { Article } from '@/types/article';
import { Base } from '@/types/base';
import { Category } from '@/types/category';
import { Page } from '@/types/page';
import { Link, router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle } from 'lucide-react';
import { ReactNode, useRef, useState } from 'react';

type ArticleIndexProps = {
    articles: Base<Article[]>;
    categories: Category[];
    pageSeo?: Page;
};

export default function ArticleIndex({ articles, categories, pageSeo }: ArticleIndexProps) {
    const url = new URL(window.location.href);
    const categoryId = url.searchParams.get('filter[category_id]');
    const [tab, setTab] = useState(categoryId ?? '');
    const scrollRef = useRef<HTMLDivElement>(null);

    const onTabChange = (value: string) => {
        setTab(value);
        const params: Record<string, any> = { page: 1 };

        // Only add category filter if value is not empty (not "All" tab)
        if (value) {
            params['filter[category_id]'] = value;
        }

        router.get(route('article'), params, { replace: true });
    };

    const handlePageChange = (page: number) => {
        const url = new URL(window.location.href);
        url.searchParams.set('page', page.toString());
        router.get(url.href, {}, { preserveState: true, replace: true });
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            // Find the ScrollArea viewport using the data-slot attribute
            const viewport = scrollRef.current.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement;
            if (viewport) {
                viewport.scrollBy({ left: -200, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            // Find the ScrollArea viewport using the data-slot attribute
            const viewport = scrollRef.current.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement;
            if (viewport) {
                viewport.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="Articles - 5758 Creative Lab"
                fallbackDescription="Explore our latest articles about digital marketing, web development, and creative insights."
                type="page"
            />
            <main>
                <header className="mx-auto max-w-7xl px-6 pt-24 lg:pt-32">
                    <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                        {pageSeo?.content?.page_title || 'Explore Our Latest Insights'}
                    </h1>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-4 sm:text-base">
                        {pageSeo?.content?.page_description ||
                            "Stay informed with our expertly crafted articles covering business strategies, industry trends, and actionable advice. Whether you're looking to optimize operations, boost marketing efforts, or embrace new technologies, our articles provide the knowledge you need to stay ahead."}
                    </p>
                </header>
                <section className="mx-auto mt-6 max-w-7xl px-4 sm:mt-8 sm:px-6" aria-label="Articles section">
                    <Tabs onValueChange={onTabChange} value={tab} className="w-full">
                        <nav className="relative flex items-center" aria-label="Category navigation">
                            {/* Previous Button */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={scrollLeft}
                                className="absolute left-0 z-10 h-8 w-8 rounded-full bg-white/80 p-0 shadow-sm backdrop-blur-sm hover:bg-white/90 dark:bg-gray-800/80 dark:hover:bg-gray-800/90"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            {/* Scrollable Tabs Container */}
                            <ScrollArea ref={scrollRef} className="mx-10 w-96 flex-1">
                                <TabsList className="h-auto w-full justify-start border-b border-[#2FDDAD]/20 bg-transparent p-0">
                                    <div className="flex items-center gap-2 pb-4">
                                        {/* All Tab */}
                                        <TabsTrigger
                                            value=""
                                            className="relative inline-flex items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-200 after:absolute after:bottom-[-17px] after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-[#2FDDAD] after:opacity-0 after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:opacity-50 focus-visible:ring-2 focus-visible:ring-[#2FDDAD] focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-[#2FDDAD] data-[state=active]:bg-[#2FDDAD] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:after:scale-x-100 data-[state=active]:after:opacity-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-gray-200 dark:data-[state=active]:bg-[#2FDDAD] dark:data-[state=active]:text-white"
                                        >
                                            {pageSeo?.content?.all_tab_text || 'All'}
                                        </TabsTrigger>

                                        {/* Category Tabs */}
                                        {categories.map((category) => (
                                            <TabsTrigger
                                                key={category.id}
                                                value={category.id?.toString() ?? ''}
                                                className="relative inline-flex items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-200 after:absolute after:bottom-[-17px] after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-[#2FDDAD] after:opacity-0 after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:opacity-50 focus-visible:ring-2 focus-visible:ring-[#2FDDAD] focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#2FDDAD] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:after:scale-x-100 data-[state=active]:after:opacity-100 dark:hover:bg-gray-800/50 dark:hover:text-gray-200 dark:data-[state=active]:bg-[#2FDDAD] dark:data-[state=active]:text-white"
                                            >
                                                {category.name}
                                            </TabsTrigger>
                                        ))}
                                    </div>
                                </TabsList>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>

                            {/* Next Button */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={scrollRight}
                                className="absolute right-0 z-10 h-8 w-8 rounded-full bg-white/80 p-0 shadow-sm backdrop-blur-sm hover:bg-white/90 dark:bg-gray-800/80 dark:hover:bg-gray-800/90"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </nav>

                        {/* Tab Content */}
                        <TabsContent value={tab} className="mt-6 min-h-screen">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                                {articles.items?.map((article) => (
                                    <article key={article.id}>
                                        <Link href={route('article-detail', article.slug)} className="group block h-full">
                                            <Card className="flex h-full flex-col overflow-hidden bg-slate-800 pt-0 text-white transition-all duration-300 hover:shadow-lg hover:ring-1 hover:shadow-emerald-500/10 hover:ring-emerald-500/20">
                                                <div className="relative aspect-video overflow-hidden">
                                                    <img
                                                        src={article.thumbnail?.original_url ?? '/assets/value.webp'}
                                                        alt={article.title}
                                                        className="h-full w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="flex flex-1 flex-col p-4 sm:p-6">
                                                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-300 sm:text-sm">
                                                        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-400">
                                                            {article.category?.name}
                                                        </span>
                                                        <span>•</span>
                                                        <span>
                                                            {new Date(article.created_at ?? '').toLocaleDateString('en-US', { dateStyle: 'medium' })}
                                                        </span>
                                                    </div>

                                                    <h3 className="mb-3 line-clamp-2 text-lg leading-tight font-bold transition-colors group-hover:text-emerald-400 sm:text-xl">
                                                        {article.title}
                                                    </h3>

                                                    <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-300 sm:text-base">
                                                        {article.excerpt}
                                                    </p>

                                                    <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                                                        <span className="text-xs text-gray-400 sm:text-sm">
                                                            {pageSeo?.content?.default_read_time || '5'}{' '}
                                                            {pageSeo?.content?.read_time_text || 'min read'}
                                                        </span>
                                                        <div className="flex items-center gap-3 text-gray-400 sm:gap-4">
                                                            <div className="flex items-center gap-1">
                                                                <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                <span className="text-xs sm:text-sm">
                                                                    {pageSeo?.content?.like_count_placeholder || '215'}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                <span className="text-xs sm:text-sm">
                                                                    {pageSeo?.content?.comment_count_placeholder || '35'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Link>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <SimplePagination
                                currentPage={articles.current_page || 1}
                                totalPages={articles.total_page || 1}
                                hasNextPage={!!articles.next_page}
                                hasPreviousPage={!!articles.prev_page}
                                onPageChange={handlePageChange}
                                className="mt-8 mb-8"
                            />
                        </TabsContent>
                    </Tabs>
                </section>
            </main>
        </>
    );
}

ArticleIndex.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
