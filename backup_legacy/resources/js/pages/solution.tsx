import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { PublicLayout } from '@/layouts/public-layout';
import { Page } from '@/types/page';
import { Speciality } from '@/types/speciality';
import { Link } from '@inertiajs/react';
import { ArrowRight, Award, Briefcase, CheckCircle2, Lightbulb, MessageCircle, Rocket, Target, Zap } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

type Stat = {
    value: string;
    label: string;
    icon: ReactNode;
};

export default function Solution({ specialities, pageSeo }: { specialities: Speciality[]; pageSeo?: Page }) {
    const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 },
        );

        return () => observerRef.current?.disconnect();
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observerRef.current?.observe(el));
    }, []);

    const stats: Stat[] = [
        { value: '10+', label: 'Solutions Delivered', icon: <Briefcase className="size-6" /> },
        { value: '360°', label: 'Digital Coverage', icon: <Target className="size-6" /> },
        { value: '100%', label: 'Custom Strategies', icon: <Lightbulb className="size-6" /> },
        { value: '24/7', label: 'Support Available', icon: <Rocket className="size-6" /> },
    ];

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '5758 Creative Lab Solutions',
        url: typeof window !== 'undefined' ? window.location.href : '',
        description: pageSeo?.seo_config?.description || 'Comprehensive digital marketing and creative solutions',
        provider: {
            '@type': 'Organization',
            name: '5758 Creative Lab',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: typeof window !== 'undefined' ? window.location.origin : '' },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: typeof window !== 'undefined' ? window.location.href : '' },
        ],
    };

    return (
        <>
            <Toaster />
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="Our Solutions - Comprehensive Digital Marketing Services | 5758 Creative Lab"
                fallbackDescription="Explore our comprehensive suite of digital marketing solutions including SEO, content marketing, social media, and more. Tailored strategies for measurable results."
                type="page"
            />

            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="relative overflow-hidden">
                {/* Hero Section */}
                <section
                    className="relative min-h-[80vh] w-full bg-[url('/assets/bg_hello_mobile.webp')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_hello_dekstop.webp')] lg:min-h-[90vh]"
                    id="solutions-hero"
                    aria-labelledby="hero-heading"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/40 sm:to-transparent" />

                    {/* Animated Background Elements */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-20 right-10 size-2 animate-ping rounded-full bg-brand-500/60" />
                        <div className="absolute top-40 left-20 size-1 animate-pulse rounded-full bg-brand-400/40" style={{ animationDelay: '1s' }} />
                        <div
                            className="absolute right-1/4 bottom-32 size-1.5 animate-ping rounded-full bg-brand-500/50"
                            style={{ animationDelay: '2s' }}
                        />
                    </div>

                    <div className="relative z-10 container mx-auto h-full min-h-[80vh] px-4 lg:min-h-[90vh]">
                        <div className="grid h-full grid-cols-12 gap-8">
                            <div className="col-span-12 flex items-center lg:col-span-6 lg:col-start-7">
                                <div className="flex min-h-[80vh] w-full flex-col justify-end gap-8 py-24 sm:items-center sm:justify-center sm:py-32 lg:min-h-[90vh] lg:items-start lg:justify-center lg:py-0">
                                    {/* Badge */}
                                    <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 backdrop-blur-sm sm:px-5 sm:py-2.5">
                                        <Award className="size-4 text-brand-500" />
                                        <span className="text-sm font-semibold text-brand-500 sm:text-base">360° Digital Solutions</span>
                                    </div>

                                    <h1
                                        id="hero-heading"
                                        className="animate-slide-up text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                                    >
                                        {pageSeo?.content?.hero_title || (
                                            <>
                                                Solutions That{' '}
                                                <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                                    Drive Growth
                                                </span>
                                            </>
                                        )}
                                    </h1>
                                    <p
                                        className="animate-slide-up max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl"
                                        style={{ animationDelay: '0.2s' }}
                                    >
                                        {pageSeo?.content?.hero_subtitle ||
                                            'From strategy to execution, we provide comprehensive digital marketing solutions tailored to your business goals.'}
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="animate-slide-up flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.4s' }}>
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-14 rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/25"
                                        >
                                            <Link href="#our-solutions">
                                                Explore Solutions
                                                <ArrowRight className="ml-2 size-5" />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="h-14 rounded-full border-2 border-brand-500/50 bg-transparent px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-500 hover:bg-brand-500/10"
                                        >
                                            <Link href={route('contact')}>
                                                <MessageCircle className="mr-2 size-5" />
                                                Get in Touch
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Scroll Indicator */}
                                    <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Scroll Down</span>
                                            <div className="h-8 w-5 rounded-full border-2 border-gray-400">
                                                <div className="mx-auto mt-1 h-2 w-1 animate-pulse rounded-full bg-brand-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section
                    className="relative border-y border-gray-800/50 bg-gradient-to-b from-black via-gray-900/50 to-black py-12 sm:py-16"
                    id="stats"
                    aria-labelledby="stats-heading"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4">
                        <h2 id="stats-heading" className="sr-only">
                            Our achievements and statistics
                        </h2>
                        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    data-animate
                                    id={`stat-${index}`}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10 sm:p-8"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="relative space-y-3 sm:space-y-4">
                                        <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500/20 sm:size-14">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{stat.value}</div>
                                        <div className="text-sm font-medium text-gray-400 sm:text-base">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Overview Section */}
                <section
                    className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
                    id="solutions-overview"
                    aria-labelledby="overview-heading"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 opacity-70 blur-3xl sm:size-[40rem] lg:size-[48rem]" />
                        <div className="absolute top-1/4 right-10 size-2 animate-pulse rounded-full bg-brand-400/60" />
                        <div
                            className="absolute bottom-1/4 left-10 size-1.5 animate-ping rounded-full bg-brand-500/40"
                            style={{ animationDelay: '1.5s' }}
                        />
                    </div>

                    <div className="relative container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 xl:py-40">
                        <div className="mx-auto max-w-6xl">
                            <header className="mb-16 text-center sm:mb-20 lg:mb-24" data-animate id="overview-header">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-5 py-2 backdrop-blur-sm">
                                    <Target className="size-4 text-brand-500" />
                                    <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">Our Approach</span>
                                </div>
                                <h2
                                    id="overview-heading"
                                    className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                                >
                                    {pageSeo?.content?.overview_title || (
                                        <>
                                            Built for{' '}
                                            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                                Your Success
                                            </span>
                                        </>
                                    )}
                                </h2>
                                <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 sm:w-24 lg:w-32" />
                                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                                    {pageSeo?.content?.overview_description ||
                                        'We craft tailored digital strategies that resonate with your audience and drive measurable results across every platform.'}
                                </p>
                            </header>

                            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                                <div className="space-y-6" data-animate id="overview-features">
                                    <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10">
                                        <div className="absolute top-0 right-0 -mt-8 -mr-8 size-32 rounded-full bg-brand-500/10 blur-2xl" />
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                                                <Zap className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-bold text-white">Data-Driven Strategy</h3>
                                                <p className="text-gray-400">
                                                    Every decision is backed by insights and analytics to maximize your ROI and achieve your business
                                                    objectives.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10">
                                        <div className="absolute top-0 right-0 -mt-8 -mr-8 size-32 rounded-full bg-brand-500/10 blur-2xl" />
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                                                <Rocket className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-bold text-white">End-to-End Execution</h3>
                                                <p className="text-gray-400">
                                                    From initial strategy to final delivery, we handle every aspect of your digital marketing
                                                    campaigns.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10">
                                        <div className="absolute top-0 right-0 -mt-8 -mr-8 size-32 rounded-full bg-brand-500/10 blur-2xl" />
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                                                <CheckCircle2 className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-bold text-white">Continuous Optimization</h3>
                                                <p className="text-gray-400">
                                                    We constantly monitor and refine campaigns to ensure peak performance and sustained growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8" data-animate id="overview-content">
                                    <div className="space-y-6 text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                        <p>
                                            {pageSeo?.content?.overview_paragraph_1 ||
                                                "In today's fast-paced digital landscape, your brand needs more than just presence—it needs impact. Our comprehensive suite of solutions ensures you connect with your audience at every touchpoint."}
                                        </p>
                                        <p>
                                            {pageSeo?.content?.overview_paragraph_2 ||
                                                'Whether you need to boost brand awareness, drive conversions, or build lasting customer relationships, our expert team delivers results that matter to your bottom line.'}
                                        </p>
                                        <p>
                                            {pageSeo?.content?.overview_paragraph_3 ||
                                                "We don't believe in one-size-fits-all solutions. Every strategy is crafted specifically for your industry, audience, and goals."}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 rounded-full bg-brand-500 px-8 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25"
                                        >
                                            <Link href="#our-solutions">
                                                View All Solutions
                                                <ArrowRight className="ml-2 size-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Grid Section */}
                <section className="relative overflow-hidden bg-black" id="our-solutions" aria-labelledby="solutions-heading">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-1/2 -right-32 size-[32rem] -translate-y-1/2 rounded-full bg-brand-500/20 opacity-70 blur-3xl sm:-right-40 sm:size-[40rem] lg:-right-52 lg:size-[48rem]" />
                        <div
                            className="absolute top-20 left-20 size-1 animate-pulse rounded-full bg-brand-400/60"
                            style={{ animationDelay: '0.5s' }}
                        />
                        <div
                            className="absolute right-40 bottom-40 size-1.5 animate-ping rounded-full bg-brand-500/50"
                            style={{ animationDelay: '1s' }}
                        />
                    </div>

                    <div className="relative container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 xl:py-40">
                        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24" data-animate id="solutions-header">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-5 py-2 backdrop-blur-sm">
                                <Briefcase className="size-4 text-brand-500" />
                                <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">Our Specialties</span>
                            </div>
                            <h2
                                id="solutions-heading"
                                className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                            >
                                {pageSeo?.content?.solutions_title || (
                                    <>
                                        Comprehensive{' '}
                                        <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                            Digital Solutions
                                        </span>
                                    </>
                                )}
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                                {pageSeo?.content?.solutions_subtitle ||
                                    'Explore our full range of services designed to elevate your brand across every digital channel.'}
                            </p>
                        </header>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                            {specialities.map((speciality, index) => (
                                <article
                                    key={index}
                                    data-animate
                                    id={`solution-${index}`}
                                    className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10"
                                    itemScope
                                    itemType="https://schema.org/Service"
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30">
                                        <div
                                            className="h-full w-full bg-[url('/assets/net.svg')] bg-cover bg-center bg-no-repeat"
                                            style={{ backgroundBlendMode: 'overlay' }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-1 flex-col p-8">
                                        {/* Icon */}
                                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/30">
                                            <img
                                                src={speciality.icon_url || '/placeholder.svg'}
                                                alt={`${speciality.title} icon`}
                                                className="size-7 object-contain"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            itemProp="name"
                                            className="mb-3 text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-brand-400"
                                        >
                                            {speciality.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="mb-4 text-lg font-semibold text-brand-500">{speciality.subtitle}</p>

                                        {/* Excerpt */}
                                        <p itemProp="description" className="mb-6 flex-1 text-base leading-relaxed text-gray-300">
                                            {speciality.excerpt}
                                        </p>

                                        {/* Learn More Link */}
                                        <Link
                                            href={route('speciality-detail', { slug: speciality.slug })}
                                            className="inline-flex items-center gap-2 text-base font-semibold text-brand-500 transition-all duration-300 hover:gap-3 hover:text-brand-400 focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
                                            aria-label={`Learn more about ${speciality.title}`}
                                        >
                                            {pageSeo?.content?.solutions_cta_text || 'Learn More'}
                                            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>

                                    {/* Hover Border Effect */}
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section
                    className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black py-20 sm:py-24 lg:py-32"
                    id="cta"
                    aria-labelledby="cta-heading"
                >
                    {/* Animated Background */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-brand-500/20 blur-[100px] sm:size-[36rem] sm:blur-[120px] lg:size-[44rem] lg:blur-[140px]" />
                        <div className="absolute top-20 left-20 size-2 animate-pulse rounded-full bg-brand-400/60" />
                        <div
                            className="absolute top-1/3 right-20 size-1 animate-ping rounded-full bg-brand-500/50"
                            style={{ animationDelay: '1s' }}
                        />
                        <div
                            className="absolute bottom-20 left-1/3 size-1.5 animate-pulse rounded-full bg-brand-400/40"
                            style={{ animationDelay: '2s' }}
                        />
                    </div>

                    <div className="relative z-10 container mx-auto px-4">
                        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-black p-10 backdrop-blur-sm sm:p-16 lg:p-20">
                            {/* Decorative Elements */}
                            <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 size-64 rounded-full bg-brand-500/10 blur-3xl" />
                            <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 size-64 rounded-full bg-brand-600/10 blur-3xl" />

                            <div className="relative text-center">
                                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-6 py-3 backdrop-blur-sm">
                                    <Rocket className="size-5 text-brand-500" />
                                    <span className="text-base font-semibold tracking-wider text-brand-500 uppercase">Start Your Journey</span>
                                </div>

                                <h2
                                    id="cta-heading"
                                    className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                                >
                                    {pageSeo?.content?.cta_title || (
                                        <>
                                            Ready to{' '}
                                            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                                Transform
                                            </span>{' '}
                                            Your Brand?
                                        </>
                                    )}
                                </h2>

                                <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                                    {pageSeo?.content?.cta_description ||
                                        "Let's discuss how our solutions can help you achieve your business goals. Get in touch with us today."}
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="group h-14 w-full rounded-full bg-brand-500 px-10 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-400 hover:shadow-2xl hover:shadow-brand-500/30 sm:w-auto"
                                    >
                                        <Link href={route('contact')}>
                                            {pageSeo?.content?.cta_button_text || "Let's Talk"}
                                            <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-gray-800/50 pt-10 sm:grid-cols-3 lg:gap-12 lg:pt-12">
                                    <div className="text-center">
                                        <div className="mb-2 flex items-center justify-center gap-2">
                                            <CheckCircle2 className="size-5 text-brand-500" />
                                            <p className="text-2xl font-bold text-white sm:text-3xl">150+</p>
                                        </div>
                                        <p className="text-sm text-gray-400 sm:text-base">Projects Completed</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="mb-2 flex items-center justify-center gap-2">
                                            <CheckCircle2 className="size-5 text-brand-500" />
                                            <p className="text-2xl font-bold text-white sm:text-3xl">98%</p>
                                        </div>
                                        <p className="text-sm text-gray-400 sm:text-base">Client Satisfaction</p>
                                    </div>
                                    <div className="col-span-2 text-center sm:col-span-1">
                                        <div className="mb-2 flex items-center justify-center gap-2">
                                            <CheckCircle2 className="size-5 text-brand-500" />
                                            <p className="text-2xl font-bold text-white sm:text-3xl">24/7</p>
                                        </div>
                                        <p className="text-sm text-gray-400 sm:text-base">Support Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

Solution.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
