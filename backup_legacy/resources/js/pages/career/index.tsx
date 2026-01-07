import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { PublicLayout } from '@/layouts/public-layout';
import { SharedData } from '@/types';
import { Career as CareerType } from '@/types/career';
import { Category as CategoryType } from '@/types/category';
import { Page } from '@/types/page';
import { Link } from '@inertiajs/react';
import { Clock, Coins, Dot } from 'lucide-react';
import { ReactNode, useMemo } from 'react';

interface CareerIndexProps extends SharedData {
    careers: CareerType[];
    categories: CategoryType[];
    pageSeo?: Page;
}

export default function CareerIndex({ careers, categories, pageSeo }: CareerIndexProps) {
    console.log(careers);
    const categoriesData = useMemo(() => {
        return categories
            .map((category) => ({
                ...category,
                careers: careers.filter((career) => career.category_id === category.id),
            }))
            .filter((category) => category.careers.length > 0);
    }, [categories, careers]);

    console.log(categoriesData);

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="Careers - Join 5758 Creative Lab"
                fallbackDescription="Discover exciting career opportunities at 5758 Creative Lab. Join our team of creative professionals."
                type="page"
            />
            <main>
                <section className="relative min-h-64 w-full pt-4 sm:min-h-80 lg:min-h-96" id="banner" aria-label="Career hero section">
                    <img
                        src={pageSeo?.content?.hero_background_image || '/assets/bg-tools.webp'}
                        alt={pageSeo?.content?.hero_background_alt || 'Background'}
                        className="absolute inset-0 h-full w-full object-cover object-[20%_75%]"
                    />
                    <header className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
                        <p className="text-lg font-semibold text-brand-500 sm:text-xl lg:text-2xl">{pageSeo?.content?.page_subtitle || 'Career'}</p>
                        <h1 className="mt-2 mb-2 text-2xl font-semibold sm:mt-4 sm:text-3xl lg:text-4xl">
                            {pageSeo?.content?.page_title || 'Join Our Team'}
                        </h1>
                        <p className="text-sm text-gray-300 sm:text-base">
                            {pageSeo?.content?.page_description || 'Bring your creative ideas to life'}
                        </p>
                    </header>
                </section>
                <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16" aria-label="Career opportunities section">
                    {categoriesData.map((category, index) => (
                        <article className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-12 lg:gap-8" key={index}>
                            <div className="lg:col-span-6">
                                <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{category.name}</h2>
                                <p className="mt-2 text-sm text-gray-300 sm:mt-4 sm:text-base">
                                    {pageSeo?.content?.category_default_description ||
                                        'Explore exciting opportunities in this field and join our growing team.'}
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="flex flex-col gap-4">
                                    {category.careers.map((career, index) => (
                                        <article key={index}>
                                            <Link href={`/career/${career.slug}`}>
                                                <div className="rounded-2xl bg-gray-900 p-4 transition-colors hover:bg-gray-800 sm:p-6">
                                                    <div className="space-y-3 sm:space-y-4">
                                                        {/* Header: Badge (mobile), Title + Badge (desktop), Location */}
                                                        <div className="flex flex-col gap-2">
                                                            {/* Category Badge - Shows on top for mobile only */}
                                                            <div className="flex items-center gap-2 lg:hidden">
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    className="w-fit rounded-full border border-brand-500 bg-transparent px-3 py-1 text-xs hover:bg-transparent sm:px-4 sm:py-2 sm:text-sm"
                                                                >
                                                                    <Dot className="size-3 text-brand-500 sm:size-4" />
                                                                    <span className="text-brand-500">{category.name}</span>
                                                                </Button>
                                                            </div>

                                                            {/* Title + Badge (desktop) and Location */}
                                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                                <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                                                                    <h3 className="text-lg font-medium text-white sm:text-xl">{career.title}</h3>
                                                                    {/* Category Badge - Shows next to title on desktop only */}
                                                                    <div className="hidden items-center gap-2 lg:flex">
                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline"
                                                                            className="w-fit rounded-full border border-brand-500 bg-transparent px-3 py-1 text-xs hover:bg-transparent sm:px-4 sm:py-2 sm:text-sm"
                                                                        >
                                                                            <Dot className="size-3 text-brand-500 sm:size-4" />
                                                                            <span className="text-brand-500">{category.name}</span>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                                <p className="text-sm text-gray-400 capitalize sm:text-base">{career.location}</p>
                                                            </div>
                                                        </div>

                                                        {/* Description */}
                                                        <div>
                                                            <p className="text-sm text-gray-300 sm:text-base">{career.description}</p>
                                                        </div>

                                                        {/* Bottom Info: Type and Salary */}
                                                        <div className="flex flex-row gap-3 sm:gap-4">
                                                            <div className="flex w-fit items-center gap-2 rounded-lg bg-gray-800 px-3 py-2">
                                                                <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-500 sm:h-8 sm:w-8">
                                                                    <Clock className="size-3 text-white sm:size-4" />
                                                                </div>
                                                                <p className="text-xs text-gray-300 capitalize sm:text-sm">{career.type}</p>
                                                            </div>
                                                            <div className="flex w-fit items-center gap-2 rounded-lg bg-gray-800 px-3 py-2">
                                                                <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-500 sm:h-8 sm:w-8">
                                                                    <Coins className="size-3 text-white sm:size-4" />
                                                                </div>
                                                                <p className="text-xs text-gray-300 sm:text-sm">
                                                                    {pageSeo?.content?.salary_currency_symbol || '$'}
                                                                    {career.min_salary}
                                                                    {pageSeo?.content?.salary_separator || ' - '}
                                                                    {pageSeo?.content?.salary_currency_symbol || '$'}
                                                                    {career.max_salary}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}

CareerIndex.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
