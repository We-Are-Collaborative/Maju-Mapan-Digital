import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Client } from '@/types/client';
import { Page } from '@/types/page';
import { StakeHolder } from '@/types/stakeholder';
import { Value } from '@/types/value';
import { Link } from '@/lib/inertia-adapter'; // Use adapter
import { ArrowRight, Award, CheckCircle2, Heart, Linkedin, Mail, MessageCircle, Rocket, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { ReactNode } from 'react';
import { getValues, getTeam, getClients, getPageSeo } from '@/app/actions/public-data';
import { BrandedHero } from '@/components/ui/branded-hero';
import { BrandedSectionHeader } from '@/components/ui/branded-section-header';
import { BrandedCTA } from '@/components/ui/branded-cta';

type Stat = {
    value: string;
    label: string;
    icon: ReactNode;
};

export default async function AboutUs() {
    const valuesData = await getValues();
    const teamData = await getTeam();
    const clientsData = await getClients();
    const pageSeoData = await getPageSeo('about-us');

    // Mock data injection (replaced)
    const values: Value[] = valuesData;
    const team: StakeHolder[] = teamData;
    const clients: Client[] = clientsData;
    const pageSeo: Page = pageSeoData;

    const stats: Stat[] = [
        { value: '150+', label: 'Projects Delivered', icon: <Rocket className="size-6" /> },
        { value: '50+', label: 'Happy Clients', icon: <Users className="size-6" /> },
        { value: '98%', label: 'Client Satisfaction', icon: <Heart className="size-6" /> },
        { value: '5+', label: 'Years Experience', icon: <Award className="size-6" /> },
    ];

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Maju Mapan Digital',
        url: typeof window !== 'undefined' ? window.location.origin : '',
        logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.svg` : '',
        description: pageSeo?.seoConfig?.description || 'Digital marketing and creative solutions agency',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'ID',
        },
        sameAs: team.filter((m) => m.linkedinUrl).map((m) => m.linkedinUrl),
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
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="About Us - Award-Winning Digital Marketing Agency | Maju Mapan Digital"
                fallbackDescription="Discover Maju Mapan: an award-winning digital marketing and creative agency. Meet our expert team, explore our values, and see how we drive measurable results for 50+ clients."
                type="page"
            />

            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="relative overflow-hidden">
                {/* Hero Section - Redesigned */}
                <BrandedHero
                    id="about-hero"
                    badgeIcon={Award}
                    badgeText="Award-Winning Digital Agency"
                    title={
                        <>
                            We Create
                            <span className="block bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                Digital Excellence
                            </span>
                        </>
                    }
                    subtitle={pageSeo?.content?.hero_subtitle || 'A team of passionate strategists, designers, and marketers dedicated to transforming brands through data-driven creativity.'}
                />

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
                            <BrandedSectionHeader
                                id="story-header"
                                badgeIcon={Target}
                                badgeText="Our Journey"
                                title={
                                    <>
                                        The Story Behind{' '}
                                        <span className="bg-gradient-to-r from-brand-50 to-brand-600 bg-clip-text text-transparent">Maju Mapan</span>
                                    </>
                                }
                            />

                            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                                {/* Left Column - Story Content */}
                                <div className="space-y-8" data-animate id="story-content">
                                    <div className="space-y-6 text-[1.25rem] leading-relaxed text-gray-300">
                                        <p>
                                            {pageSeo?.content?.story_paragraph_1 ||
                                                "We're not your typical agency. At Maju Mapan, we believe in the power of strategic creativity combined with data-driven insights. Founded with a vision to transform how brands connect with their audiences, we've grown into a team of passionate digital strategists, designers, and marketers."}
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
                        <BrandedSectionHeader
                            id="values-header"
                            badgeIcon={Heart}
                            badgeText="Core Values"
                            title={
                                <>
                                    What We{' '}
                                    <span className="bg-gradient-to-r from-brand-50 to-brand-600 bg-clip-text text-transparent">Stand For</span>
                                </>
                            }
                            subtitle={pageSeo?.content?.values_subtitle || 'Our values are the foundation of everything we do and guide every decision we make.'}
                        />

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
                                            src={value.background?.originalUrl || '/assets/net.svg'}
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
                                                        src={value.iconUrl || '/placeholder.svg'}
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
                                                    href={`/value/${value.slug}`}
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
                        <BrandedSectionHeader
                            id="team-header"
                            badgeIcon={Users}
                            badgeText="Our Experts"
                            title={
                                <>
                                    Meet The{' '}
                                    <span className="bg-gradient-to-r from-brand-50 to-brand-600 bg-clip-text text-transparent">Dream Team</span>
                                </>
                            }
                            subtitle={pageSeo?.content?.team_subtitle || 'Meet the passionate experts who bring creativity and innovation to every project.'}
                        />

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
                            {team.map((member, index) => {
                                const personSchema = {
                                    '@context': 'https://schema.org',
                                    '@type': 'Person',
                                    name: member.name,
                                    description: member.excerpt,
                                    image: member.thumbnail?.originalUrl,
                                    sameAs: member.linkedinUrl ? [member.linkedinUrl] : [],
                                    email: member.email,
                                    worksFor: {
                                        '@type': 'Organization',
                                        name: 'Maju Mapan Digital',
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
                                                src={member.thumbnail?.originalUrl || '/placeholder.svg'}
                                                alt={`${member.name}, ${member.position} at Maju Mapan`}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                            {/* Social Links Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-t from-brand-500/30 via-black/80 to-black/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                                {member.linkedinUrl && (
                                                    <a
                                                        itemProp="sameAs"
                                                        href={member.linkedinUrl}
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
                            subtitle={pageSeo?.content?.clients_subtitle || 'Proud to partner with leading brands and innovative companies across industries.'}
                        />

                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {clients.map((client, index) => (
                                <Link
                                    key={client.id}
                                    href={`/case-studies?client=${client.slug}`}
                                    data-animate
                                    id={`client-${index}`}
                                    className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10"
                                    aria-label={`View ${client.name} case studies`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative flex h-full items-center justify-center p-6">
                                        {client.logo?.originalUrl ? (
                                            <img
                                                src={client.logo.originalUrl}
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
                                <Link href="/case-studies">
                                    View All Case Studies
                                    <ArrowRight className="ml-2 size-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section - Enhanced */}
                <BrandedCTA
                    title={pageSeo?.content?.cta_title || "Ready to Elevate Your Brand?"}
                    description={pageSeo?.content?.cta_description || "Let's transform your vision into reality. Join forces with a team that's passionate about your success."}
                    buttonText={pageSeo?.content?.cta_button_text || "Let's Talk"}
                    source="About Us"
                    backgroundImage="/assets/bg_hello_dekstop.webp"
                />
            </div>
        </>
    );
}
