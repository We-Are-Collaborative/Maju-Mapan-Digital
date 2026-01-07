import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { PublicLayout } from '@/layouts/public-layout';
import { Page } from '@/types/page';
import { Link } from '@inertiajs/react';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { ReactNode } from 'react';

export default function Error404({ pageSeo }: { pageSeo?: Page }) {
    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="404 - Page Not Found | 5758 Creative Lab"
                fallbackDescription="The page you're looking for doesn't exist. Return to our homepage or explore our services."
                type="page"
            />
            <main className="relative overflow-hidden">
                <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black" aria-label="404 Error page">
                    {/* Content container */}
                    <div className="relative z-10 container mx-auto h-full min-h-screen px-4">
                        <div className="grid h-full grid-cols-12">
                            {/* Content positioned for mobile center, desktop center */}
                            <div className="col-span-12 flex items-center justify-center">
                                <div className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-8 py-20 text-center">
                                    {/* Error Code Display */}
                                    <div className="relative">
                                        <h1 className="text-8xl font-bold text-brand-400 opacity-20 sm:text-9xl lg:text-[12rem]">404</h1>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="rounded-2xl border border-brand-300/20 bg-brand-400/10 p-6 backdrop-blur-sm">
                                                <Search className="h-12 w-12 text-brand-400 sm:h-16 sm:w-16" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Error Message */}
                                    <div className="space-y-4">
                                        <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                                            {pageSeo?.content?.error_title || 'Oops! Page Not Found'}
                                        </h2>
                                        <p className="text-lg text-brand-500 sm:text-xl lg:text-2xl">
                                            {pageSeo?.content?.error_subtitle || 'Looks like this page went on vacation'}
                                        </p>
                                        <p className="max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
                                            {pageSeo?.content?.error_description ||
                                                "The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-full border border-brand-300/20 bg-brand-400 px-8 py-3 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-300 hover:shadow-xl focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-black/20 active:bg-brand-500 sm:text-lg"
                                        >
                                            <Link href={route('home')}>
                                                <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                                {pageSeo?.content?.home_button_text || 'Back to Home'}
                                            </Link>
                                        </Button>

                                        <Button
                                            asChild
                                            variant="outline"
                                            size="lg"
                                            className="rounded-full border border-brand-400/30 bg-transparent px-8 py-3 text-base font-semibold text-brand-400 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-400/10 hover:shadow-xl focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-black/20 sm:text-lg"
                                        >
                                            <Link href={route('contact')}>
                                                {pageSeo?.content?.contact_button_text || 'Contact Us'}
                                                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 sm:h-5 sm:w-5" />
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Helpful Links */}
                                    <div className="mt-8 space-y-4">
                                        <p className="text-sm text-gray-400">
                                            {pageSeo?.content?.suggestions_text || 'Or try one of these popular pages:'}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                                            <Link
                                                href={route('article')}
                                                className="text-brand-400 transition-colors hover:text-brand-300 hover:underline"
                                            >
                                                Articles
                                            </Link>
                                            <Link
                                                href={route('career')}
                                                className="text-brand-400 transition-colors hover:text-brand-300 hover:underline"
                                            >
                                                Careers
                                            </Link>
                                            <Link
                                                href={route('client')}
                                                className="text-brand-400 transition-colors hover:text-brand-300 hover:underline"
                                            >
                                                Our Work
                                            </Link>
                                            <Link
                                                href={route('contact')}
                                                className="text-brand-400 transition-colors hover:text-brand-300 hover:underline"
                                            >
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements matching home page */}
                    <div className="absolute top-1/4 left-4 h-2 w-2 animate-pulse rounded-full bg-brand-400 opacity-60 sm:hidden"></div>
                    <div className="absolute top-1/3 right-8 h-1 w-1 animate-pulse rounded-full bg-brand-300 opacity-40 sm:hidden"></div>
                    <div className="absolute bottom-1/4 left-8 hidden h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500 opacity-50 sm:block"></div>

                    {/* Background glow effects */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#2FDDAD]/20 blur-[80px] sm:size-[28rem] sm:blur-[100px] lg:size-[36rem] lg:blur-[120px]" />
                        <div className="absolute top-1/3 right-1/4 size-[16rem] translate-x-1/4 -translate-y-1/2 rounded-full bg-[#2FDDAD]/10 blur-[60px] sm:size-[24rem] sm:blur-[80px] lg:size-[32rem] lg:blur-[100px]" />
                    </div>
                </section>
            </main>
        </>
    );
}

Error404.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
