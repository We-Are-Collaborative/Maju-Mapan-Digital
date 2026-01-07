import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { PublicLayout } from '@/layouts/public-layout';
import { Client } from '@/types/client';
import { Page } from '@/types/page';
import { StakeHolder } from '@/types/stakeholder';
import { Value } from '@/types/value';
import { Link } from '@inertiajs/react';
import { ArrowRight, Award, CheckCircle2, Heart, Linkedin, Mail, MessageCircle, Rocket, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

type Stat = {
    value: string;
    label: string;
    icon: ReactNode;
};

export default function AboutUs({ values, team, clients, pageSeo }: { values: Value[]; team: StakeHolder[]; clients: Client[]; pageSeo?: Page }) {
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
        { value: '150+', label: 'Projects Delivered', icon: <Rocket className="size-6" /> },
        { value: '50+', label: 'Happy Clients', icon: <Users className="size-6" /> },
        { value: '98%', label: 'Client Satisfaction', icon: <Heart className="size-6" /> },
        { value: '5+', label: 'Years Experience', icon: <Award className="size-6" /> },
    ];

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '5758 Creative Lab',
        url: typeof window !== 'undefined' ? window.location.origin : '',
        logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.svg` : '',
        description: pageSeo?.seo_config?.description || 'Digital marketing and creative solutions agency',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'ID',
        },
        sameAs: team.filter((m) => m.linkedin_url).map((m) => m.linkedin_url),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: typeof window !== 'undefined' ? window.location.origin : '' },
            { '@type': 'ListItem', position: 2, name: 'About Us', item: typeof window !== 'undefined' ? window.location.href : '' },
        ],
    };

    return (
        <>
            <Toaster />
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="About Us - Award-Winning Digital Marketing Agency | 5758 Creative Lab"
                fallbackDescription="Discover 5758 Creative Lab: an award-winning digital marketing and creative agency. Meet our expert team, explore our values, and see how we drive measurable results for 50+ clients."
                type="page"
            />

            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="relative overflow-hidden">
                {/* Hero Section - Enhanced */}
                <section
                    className="relative min-h-[80vh] w-full bg-[url('/assets/bg_hello_mobile.webp')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_hello_dekstop.webp')] lg:min-h-[90vh]"
                    id="about-hero"
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
                                        <span className="text-sm font-semibold text-brand-500 sm:text-base">Award-Winning Digital Agency</span>
                                    </div>

                                    <h1
                                        id="hero-heading"
                                        className="animate-slide-up text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                                    >
                                        {pageSeo?.content?.hero_title || (
                                            <>
                                                We Create{' '}
                                                <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                                    Digital Excellence
                                                </span>
                                            </>
                                        )}
                                    </h1>
                                    <p
                                        className="animate-slide-up max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl"
                                        style={{ animationDelay: '0.2s' }}
                                    >
                                        {pageSeo?.content?.hero_subtitle ||
                                            'A team of passionate strategists, designers, and marketers dedicated to transforming brands through data-driven creativity.'}
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="animate-slide-up flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.4s' }}>
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-14 rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/25"
                                        >
                                            <Link href="#our-story">
                                                Discover Our Story
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

                {/* Stats Section - New */}
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

                {/* Company Description Section - Enhanced */}
                <section
                    className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
                    id="our-story"
                    aria-labelledby="story-heading"
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
                            <header className="mb-16 text-center sm:mb-20 lg:mb-24" data-animate id="story-header">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-5 py-2 backdrop-blur-sm">
                                    <Target className="size-4 text-brand-500" />
                                    <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">Our Journey</span>
                                </div>
                                <h2
                                    id="story-heading"
                                    className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                                >
                                    {pageSeo?.content?.story_title || (
                                        <>
                                            The Story Behind{' '}
                                            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">5758</span>
                                        </>
                                    )}
                                </h2>
                                <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 sm:w-24 lg:w-32" />
                            </header>

                            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                                {/* Left Column - Story Content */}
                                <div className="space-y-8" data-animate id="story-content">
                                    <div className="space-y-6 text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                        <p>
                                            {pageSeo?.content?.story_paragraph_1 ||
                                                "We're not your typical agency. At 5758 Creative Lab, we believe in the power of strategic creativity combined with data-driven insights. Founded with a vision to transform how brands connect with their audiences, we've grown into a team of passionate digital strategists, designers, and marketers."}
                                        </p>
                                        <p>
                                            {pageSeo?.content?.story_paragraph_2 ||
                                                'Every project we take on is an opportunity to push boundaries and deliver results that matter. From startups to established enterprises, we craft tailored solutions that resonate with your target audience and drive measurable growth.'}
                                        </p>
                                        <p>
                                            {pageSeo?.content?.story_paragraph_3 ||
                                                "Our approach is simple: understand your goals, analyze the landscape, create compelling strategies, and execute with precision. We're here to be your growth partner, not just another vendor."}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 rounded-full bg-brand-500 px-8 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25"
                                        >
                                            <Link href="#our-values">
                                                Explore Our Values
                                                <ArrowRight className="ml-2 size-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Column - Visual Features */}
                                <div className="space-y-6" data-animate id="story-features">
                                    <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10">
                                        <div className="absolute top-0 right-0 -mt-8 -mr-8 size-32 rounded-full bg-brand-500/10 blur-2xl" />
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                                                <Zap className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-bold text-white">Innovation First</h3>
                                                <p className="text-gray-400">
                                                    We constantly explore cutting-edge technologies and methodologies to keep our clients ahead of the
                                                    curve.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10">
                                        <div className="absolute top-0 right-0 -mt-8 -mr-8 size-32 rounded-full bg-brand-500/10 blur-2xl" />
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                                                <TrendingUp className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-bold text-white">Results Driven</h3>
                                                <p className="text-gray-400">
                                                    Every strategy is backed by data and designed to deliver measurable ROI for your business.
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
                                                <h3 className="mb-2 text-xl font-bold text-white">Client Partnership</h3>
                                                <p className="text-gray-400">
                                                    Your success is our success. We build long-term relationships based on trust and transparency.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section - Enhanced */}
                <section className="relative overflow-hidden bg-black" id="our-values" aria-labelledby="values-heading">
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
                        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24" data-animate id="values-header">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-5 py-2 backdrop-blur-sm">
                                <Heart className="size-4 text-brand-500" />
                                <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">Core Values</span>
                            </div>
                            <h2
                                id="values-heading"
                                className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                            >
                                {pageSeo?.content?.values_title || (
                                    <>
                                        What We{' '}
                                        <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Stand For</span>
                                    </>
                                )}
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                                {pageSeo?.content?.values_subtitle ||
                                    'Our values are the foundation of everything we do and guide every decision we make.'}
                            </p>
                        </header>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                            {values.map((value, index) => (
                                <article
                                    key={index}
                                    data-animate
                                    id={`value-${index}`}
                                    className="group relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10"
                                    itemScope
                                    itemType="https://schema.org/Thing"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden sm:aspect-square lg:aspect-[4/5]">
                                        <img
                                            src={value.background?.original_url || '/assets/net.svg'}
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            loading="lazy"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 transition-all duration-500 group-hover:from-brand-500/30 group-hover:via-black/60" />

                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-10">
                                            <div className="mb-6 flex justify-center sm:mb-8">
                                                <div className="relative flex size-16 items-center justify-center rounded-2xl bg-brand-500 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-500/50 sm:size-20">
                                                    <div className="absolute inset-0 animate-pulse rounded-2xl bg-brand-400/50 blur-xl" />
                                                    <img
                                                        src={value.icon_url || '/placeholder.svg'}
                                                        alt={`${value.title} icon`}
                                                        className="relative size-8 object-contain sm:size-10"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4 text-center sm:space-y-5">
                                                <h3 itemProp="name" className="text-2xl leading-tight font-bold text-white sm:text-3xl">
                                                    {value.title}
                                                </h3>
                                                <p className="text-lg leading-snug font-medium text-brand-400 sm:text-xl">{value.subtitle}</p>
                                                <p itemProp="description" className="line-clamp-3 text-base leading-relaxed text-gray-200 sm:text-lg">
                                                    {value.excerpt}
                                                </p>

                                                <Link
                                                    href={route('value', { slug: value.slug })}
                                                    className="inline-flex items-center gap-2 rounded-xl bg-brand-500/10 px-4 py-2 text-base font-semibold text-brand-500 backdrop-blur-sm transition-all duration-300 hover:gap-3 hover:bg-brand-500/20 hover:text-brand-400 focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-2 focus:ring-offset-black focus:outline-none sm:text-lg"
                                                    aria-label={`Learn more about ${value.title}`}
                                                >
                                                    {pageSeo?.content?.values_cta_text || 'Learn More'}
                                                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section - Enhanced */}
                <section
                    className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
                    id="our-team"
                    aria-labelledby="team-heading"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-1/2 left-1/4 size-[32rem] -translate-x-1/4 -translate-y-1/2 rounded-full bg-brand-500/20 opacity-70 blur-3xl sm:size-[40rem] lg:size-[48rem]" />
                        <div
                            className="absolute top-32 right-20 size-1 animate-pulse rounded-full bg-brand-400/60"
                            style={{ animationDelay: '0.7s' }}
                        />
                        <div
                            className="absolute bottom-20 left-40 size-1.5 animate-ping rounded-full bg-brand-500/50"
                            style={{ animationDelay: '1.3s' }}
                        />
                    </div>

                    <div className="relative container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 xl:py-40">
                        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24" data-animate id="team-header">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-5 py-2 backdrop-blur-sm">
                                <Users className="size-4 text-brand-500" />
                                <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">Our Experts</span>
                            </div>
                            <h2
                                id="team-heading"
                                className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                            >
                                {pageSeo?.content?.team_title || (
                                    <>
                                        Meet The{' '}
                                        <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Dream Team</span>
                                    </>
                                )}
                            </h2>
                            <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 sm:w-24 lg:w-32" />
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                                {pageSeo?.content?.team_subtitle ||
                                    'Meet the passionate experts who bring creativity and innovation to every project.'}
                            </p>
                        </header>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
                            {team.map((member, index) => {
                                const personSchema = {
                                    '@context': 'https://schema.org',
                                    '@type': 'Person',
                                    name: member.name,
                                    jobTitle: member.position,
                                    description: member.excerpt,
                                    image: member.thumbnail?.original_url,
                                    sameAs: member.linkedin_url ? [member.linkedin_url] : [],
                                    email: member.email,
                                    worksFor: {
                                        '@type': 'Organization',
                                        name: '5758 Creative Lab',
                                    },
                                };

                                return (
                                    <article
                                        key={member.id}
                                        data-animate
                                        id={`team-${index}`}
                                        className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10"
                                        itemScope
                                        itemType="https://schema.org/Person"
                                    >
                                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

                                        <div className="relative aspect-square overflow-hidden">
                                            <img
                                                itemProp="image"
                                                src={member.thumbnail?.original_url || '/placeholder.svg'}
                                                alt={`${member.name}, ${member.position} at 5758 Creative Lab`}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                            {/* Social Links Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-t from-brand-500/30 via-black/80 to-black/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                                {member.linkedin_url && (
                                                    <a
                                                        itemProp="sameAs"
                                                        href={member.linkedin_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex size-12 items-center justify-center rounded-full border-2 border-brand-500 bg-brand-500/20 text-brand-500 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-brand-500 hover:text-black hover:shadow-xl hover:shadow-brand-500/50"
                                                        aria-label={`View ${member.name}'s LinkedIn profile`}
                                                    >
                                                        <Linkedin className="size-6" />
                                                    </a>
                                                )}
                                                {member.email && (
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className="flex size-12 items-center justify-center rounded-full border-2 border-brand-500 bg-brand-500/20 text-brand-500 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-brand-500 hover:text-black hover:shadow-xl hover:shadow-brand-500/50"
                                                        aria-label={`Email ${member.name}`}
                                                    >
                                                        <Mail className="size-6" />
                                                    </a>
                                                )}
                                            </div>

                                            {/* Hover Border Effect */}
                                            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                                                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                                            </div>
                                        </div>

                                        <div className="relative p-6 sm:p-8">
                                            <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <h3
                                                itemProp="name"
                                                className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-400 sm:text-2xl"
                                            >
                                                {member.name}
                                            </h3>
                                            <p itemProp="jobTitle" className="mb-4 text-base font-semibold text-brand-500 sm:text-lg">
                                                {member.position}
                                            </p>
                                            <p itemProp="description" className="text-sm leading-relaxed text-gray-400 sm:text-base">
                                                {member.excerpt}
                                            </p>

                                            {/* Decorative Element */}
                                            <div className="absolute right-0 bottom-0 size-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                <div className="absolute right-0 bottom-0 size-full bg-gradient-to-tl from-brand-500/10 to-transparent blur-2xl" />
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Trusted Clients Section - Enhanced */}
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
                        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20" data-animate id="clients-header">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-5 py-2 backdrop-blur-sm">
                                <Award className="size-4 text-brand-500" />
                                <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">Trusted By</span>
                            </div>
                            <h2 id="clients-heading" className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                {pageSeo?.content?.clients_title || (
                                    <>
                                        Our{' '}
                                        <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                            Valued Clients
                                        </span>
                                    </>
                                )}
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
                                {pageSeo?.content?.clients_subtitle ||
                                    'Proud to partner with leading brands and innovative companies across industries.'}
                            </p>
                        </header>

                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {clients.map((client, index) => (
                                <Link
                                    key={client.id}
                                    href={route('client-detail', { slug: client.slug })}
                                    data-animate
                                    id={`client-${index}`}
                                    className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10"
                                    aria-label={`View ${client.name} portfolio`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative flex h-full items-center justify-center p-6">
                                        {client.logo?.original_url ? (
                                            <img
                                                src={client.logo.original_url}
                                                alt={`${client.name} logo`}
                                                className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="text-center">
                                                <p className="text-lg font-semibold text-gray-400 transition-colors duration-300 group-hover:text-brand-500">
                                                    {client.name}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                                        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="mt-12 flex justify-center sm:mt-16" data-animate id="clients-cta">
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-full border-2 border-brand-500/50 bg-transparent px-8 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-500 hover:bg-brand-500/10"
                            >
                                <Link href={route('client')}>
                                    View All Clients
                                    <ArrowRight className="ml-2 size-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section - Enhanced */}
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
                                                Elevate
                                            </span>{' '}
                                            Your Brand?
                                        </>
                                    )}
                                </h2>

                                <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                                    {pageSeo?.content?.cta_description ||
                                        "Let's transform your vision into reality. Join forces with a team that's passionate about your success."}
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

AboutUs.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
