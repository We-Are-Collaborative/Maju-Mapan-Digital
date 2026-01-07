import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { PublicLayout } from '@/layouts/public-layout';
import { Client } from '@/types/client';
import { Page } from '@/types/page';
import { Speciality } from '@/types/speciality';
import { Value } from '@/types/value';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function Home({
    values,
    specialities,
    clients,
    pageSeo,
}: {
    values: Value[];
    specialities: Speciality[];
    clients: Client[];
    pageSeo?: Page;
}) {
    return (
        <>
            <Toaster />
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="5758 Creative Lab - Digital Marketing & Creative Solutions"
                fallbackDescription="5758 Creative Lab provides comprehensive digital marketing, web development, and creative solutions for businesses in Indonesia."
                type="page"
            />
            <main className="relative overflow-hidden">
                <section
                    className="relative min-h-screen w-full bg-[url('/assets/bg_banner_mobile.webp')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_banner_dekstop.webp')]"
                    id="banner"
                    aria-label="Hero banner section"
                >
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-black/60 sm:via-transparent sm:to-transparent" />

                    {/* Content container */}
                    <div className="relative z-10 container mx-auto h-full min-h-screen px-4">
                        <div className="grid h-full grid-cols-12">
                            {/* Content positioned for mobile center, desktop right */}
                            <div className="col-span-12 flex items-center lg:col-span-6 lg:col-start-7">
                                <div className="flex min-h-screen w-full flex-col items-center justify-end gap-8 py-20 sm:justify-center sm:py-32 lg:items-center lg:justify-center lg:py-0">
                                    {/* Hero Logo */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={pageSeo?.content?.hero_logo_src || '/assets/turning.svg'}
                                            alt={pageSeo?.content?.hero_logo_alt || 'Turning - Digital Credentials Platform'}
                                            width={160}
                                            height={160}
                                            className="h-32 w-auto drop-shadow-lg sm:h-40 lg:h-48"
                                        />
                                    </div>

                                    {/* Call to Action Button */}
                                    <a target="_blank" rel="noopener noreferrer" href={pageSeo?.content?.hero_cta_link || '#'}>
                                        <Button
                                            size="lg"
                                            className="rounded-full border border-brand-300/20 bg-brand-400 px-8 py-3 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-300 hover:shadow-xl focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-black/20 active:bg-brand-500 sm:text-lg"
                                        >
                                            {pageSeo?.content?.hero_cta_text || 'Download Credential'}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 left-4 h-2 w-2 animate-pulse rounded-full bg-brand-400 opacity-60 sm:hidden"></div>
                    <div className="absolute top-1/3 right-8 h-1 w-1 animate-pulse rounded-full bg-brand-300 opacity-40 sm:hidden"></div>
                    <div className="absolute bottom-1/4 left-8 hidden h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500 opacity-50 sm:block"></div>
                </section>

                <section
                    className="relative min-h-screen w-full bg-[url('/assets/bg_hello_mobile.webp')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_hello_dekstop.webp')]"
                    id="say-hello"
                    aria-label="About us section"
                >
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-black/60 sm:via-transparent sm:to-transparent" />

                    {/* Content container */}
                    <div className="relative z-10 container mx-auto h-full min-h-screen px-4">
                        <div className="grid h-full grid-cols-12">
                            {/* Content positioned for mobile center, desktop right */}
                            <div className="col-span-12 flex items-center lg:col-span-6 lg:col-start-7">
                                <div className="flex min-h-screen w-full flex-col justify-end gap-8 py-20 sm:items-center sm:justify-center sm:py-32 lg:items-start lg:justify-center lg:py-0">
                                    <h1 className="text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl xl:text-5xl">
                                        {pageSeo?.content?.banner_title || 'Say Hello to Your Next Growth Partner'}
                                    </h1>
                                    <p className="text-xl leading-relaxed text-brand-500 sm:text-2xl lg:text-3xl">
                                        {pageSeo?.content?.banner_subtitle || '(a.k.a Maju Mapan - yes, we love wordplay)'}
                                    </p>
                                    <p className="max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
                                        {pageSeo?.content?.banner_description ||
                                            "We're a 360 digital agency that understands, every brand and campaign craves impact! That's why we craft tailor-made strategies to deliver results that truly hit the mark."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 left-4 h-2 w-2 animate-pulse rounded-full bg-brand-400 opacity-60 sm:hidden"></div>
                    <div className="absolute top-1/3 right-8 h-1 w-1 animate-pulse rounded-full bg-brand-300 opacity-40 sm:hidden"></div>
                    <div className="absolute bottom-1/4 left-8 hidden h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500 opacity-50 sm:block"></div>
                </section>

                <section className="relative overflow-hidden" id="what-we-stand-for" aria-label="Our values section">
                    {/* Background Glow Effects */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="shadow-glow -center-32 sm:-center-40 lg:-center-52 absolute top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-[#2FDDAD]/20 opacity-70 blur-3xl sm:size-[40rem] lg:size-[48rem]" />
                        <div className="shadow-glow-accent absolute -top-10 -right-16 size-[24rem] rounded-full bg-[#2FDDAD]/20 opacity-70 blur-3xl sm:-top-16 sm:-right-24 sm:size-[28rem] lg:-top-20 lg:-right-32 lg:size-[32rem]" />
                    </div>

                    <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:py-28">
                        {/* Header Section */}
                        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
                            <div className="space-y-4 sm:space-y-6">
                                <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                                    {pageSeo?.content?.values_title || 'What We Stand for'}
                                </h2>
                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                    {pageSeo?.content?.values_subtitle || 'Three beliefs guide everything we do — and yes, they make a difference.'}
                                </p>
                            </div>
                        </header>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
                            {values.map((value, index) => (
                                <article
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#2FDDAD]/30 hover:shadow-2xl hover:shadow-[#2FDDAD]/10"
                                >
                                    {/* Background Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={'/assets/net.svg'}
                                            alt={`${value.title} illustration`}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 group-hover:from-[#2FDDAD]/20 group-hover:via-gray-900/40" />

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 sm:px-8 sm:py-10">
                                            {/* Icon */}
                                            <div className="mb-4 flex justify-center sm:mb-5">
                                                <div className="flex size-12 items-center justify-center rounded-xl bg-[#2FDDAD] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#2FDDAD]/50 sm:size-14">
                                                    <img
                                                        src={value.icon_url || '/placeholder.svg'}
                                                        alt={`${value.title} icon`}
                                                        className="size-6 object-contain sm:size-7"
                                                    />
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="space-y-3 text-center sm:space-y-4">
                                                <h3 className="text-center text-xl leading-tight font-bold text-white sm:text-2xl">{value.title}</h3>

                                                {/* CTA Link */}
                                                <Link
                                                    href={route('value', { slug: value.slug })}
                                                    className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-[#2FDDAD] transition-all duration-300 hover:gap-3 hover:text-white focus:ring-2 focus:ring-[#2FDDAD]/50 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none sm:text-base"
                                                    aria-label={`Learn more about ${value.title}`}
                                                >
                                                    {pageSeo?.content?.values_cta_text || 'Learn More'}
                                                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="mt-16 flex items-center justify-center">
                            <Link target="_blank" href={pageSeo?.content?.hero_cta_link || '#'}>
                                <Button
                                    size="lg"
                                    className="rounded-full border border-brand-300/20 bg-brand-400 px-8 py-3 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-300 hover:shadow-xl focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-black/20 active:bg-brand-500 sm:text-lg"
                                >
                                    {'Get To Know Us Better'}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden" id="our-specialties" aria-label="Our specialties section">
                    {/* Background glow effect */}
                    <div className="absolute top-1/2 -right-32 size-[32rem] -translate-y-1/2 rounded-full bg-[#2FDDAD]/20 blur-3xl sm:-right-40 sm:size-[40rem] lg:-right-52 lg:size-[48rem]" />

                    <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:py-28">
                        {/* Header Section */}
                        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
                            <h2 className="mb-4 text-3xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl">
                                {pageSeo?.content?.specialties_title || 'Our Specialties'}
                            </h2>
                            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                {pageSeo?.content?.specialties_subtitle ||
                                    'We build your brand across every platform — creating bold, cohesive campaigns that hit home with your audience.'}
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                            {specialities.map((speciality) => (
                                <article
                                    key={speciality.id}
                                    className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#2FDDAD]/50 hover:bg-[#2FDDAD]/10 hover:shadow-lg hover:shadow-[#2FDDAD]/20 sm:min-h-[360px] sm:p-7 lg:p-8"
                                >
                                    {/* Hover background pattern */}
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30">
                                        <div
                                            className="h-full w-full bg-[url('/assets/net.svg')] bg-cover bg-center bg-no-repeat"
                                            style={{ backgroundBlendMode: 'overlay' }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-1 flex-col">
                                        {/* Icon */}
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2FDDAD] to-[#25B896] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#2FDDAD]/30 sm:mb-5 sm:h-14 sm:w-14">
                                            <img
                                                src={speciality.icon_url || '/placeholder.svg'}
                                                alt={`${speciality.title} icon`}
                                                className="size-6 object-contain sm:size-7"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 sm:mb-4 sm:text-2xl">
                                            {speciality.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="mb-3 text-lg font-medium text-gray-400 transition-colors duration-300 sm:mb-4 sm:text-xl">
                                            {speciality.subtitle}
                                        </p>

                                        {/* Excerpt */}
                                        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-300 transition-colors duration-300 sm:text-base">
                                            {speciality.excerpt}
                                        </p>

                                        {/* Learn More Link */}
                                        <Link
                                            href={route('speciality-detail', { slug: speciality.slug })}
                                            className="inline-flex items-center gap-2 text-sm font-medium text-[#2FDDAD] transition-all duration-300 hover:gap-3 hover:text-[#25B896] group-hover:hover:text-gray-700 sm:text-base"
                                            aria-label={`Learn more about ${speciality.title}`}
                                        >
                                            {pageSeo?.content?.specialties_cta_text || 'Learn More'}
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>

                                    {/* Subtle border glow on hover */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2FDDAD]/20 to-[#25B896]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </article>
                            ))}
                        </div>
                        <div className="mt-16 flex items-center justify-center">
                            <Link href={route('speciality')}>
                                <Button
                                    size="lg"
                                    className="rounded-full border border-brand-300/20 bg-brand-400 px-8 py-3 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-300 hover:shadow-xl focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-black/20 active:bg-brand-500 sm:text-lg"
                                >
                                    {'View All Solutions'}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden" id="our-works" aria-label="Our portfolio section">
                    {/* Enhanced background glow with better positioning */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/2 right-1/4 size-[20rem] translate-x-1/4 -translate-y-1/2 animate-pulse rounded-full bg-[#2FDDAD]/20 blur-[80px] sm:size-[28rem] sm:blur-[100px] lg:size-[36rem] lg:blur-[120px] xl:size-[42rem]" />
                        <div className="absolute top-1/3 left-1/4 size-[16rem] -translate-x-1/4 -translate-y-1/2 rounded-full bg-[#2FDDAD]/10 blur-[60px] sm:size-[24rem] sm:blur-[80px] lg:size-[32rem] lg:blur-[100px]" />
                    </div>

                    <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:py-28">
                        {/* Enhanced header section */}
                        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center justify-center gap-6 text-center sm:mb-20 lg:mb-24">
                            <div className="space-y-4">
                                <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                                    {pageSeo?.content?.works_title || 'Our Works'}
                                </h2>
                                <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#2FDDAD] to-[#1DB584] sm:w-20 lg:w-24" />
                            </div>
                            <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                {pageSeo?.content?.works_subtitle || 'Smart strategies. Bold executions. Measurable wins.'}{' '}
                                <span className="font-medium text-white">
                                    {pageSeo?.content?.works_subtitle_highlight || "That's how we deliver impact"}
                                </span>
                            </p>
                        </div>

                        {/* Enhanced grid layout */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:gap-6 xl:gap-8">
                            {clients.map((client, index) => (
                                <Link
                                    key={index}
                                    href={`/client/${client.slug}`}
                                    className="group relative overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/20 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#2FDDAD]/40 hover:bg-gray-800/30 hover:shadow-lg hover:shadow-[#2FDDAD]/10 sm:p-8 lg:p-10"
                                >
                                    {/* Subtle gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2FDDAD]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative flex h-12 items-center justify-center sm:h-14 lg:h-16">
                                        <img
                                            src={client.logo?.original_url || '/placeholder.svg'}
                                            className="h-full w-auto max-w-full object-contain opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                                            alt={`${client.name} logo`}
                                            loading="lazy"
                                        />
                                    </div>
                                </Link>
                            ))}

                            {/* Enhanced "Plus more" card */}
                            <div className="group relative overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-br from-[#2FDDAD]/10 to-[#1DB584]/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#2FDDAD]/60 hover:from-[#2FDDAD]/15 hover:to-[#1DB584]/10 hover:shadow-lg hover:shadow-[#2FDDAD]/20 sm:p-8 lg:p-10">
                                <div className="flex h-12 items-center justify-center sm:h-14 lg:h-16">
                                    <div className="text-center">
                                        <p className="text-sm leading-tight font-medium text-[#2FDDAD] transition-all duration-300 group-hover:text-white sm:text-base lg:text-lg">
                                            {pageSeo?.content?.works_plus_more_text || 'Plus more names'}
                                        </p>
                                        <p className="text-xs text-[#2FDDAD]/80 transition-all duration-300 group-hover:text-white/80 sm:text-sm">
                                            {pageSeo?.content?.works_plus_more_subtext || "we're proud of..."}
                                        </p>
                                    </div>
                                </div>

                                {/* Animated border effect */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2FDDAD] to-[#1DB584] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                            </div>
                        </div>

                        {/* Optional: Add a subtle call-to-action */}
                        <div className="mt-16 text-center sm:mt-20 lg:mt-24"></div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section
                    className="relative flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-16 sm:py-20 lg:py-24"
                    id="cta"
                    aria-label="Call to action section"
                >
                    {/* Background Effects */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#2FDDAD]/20 blur-[80px] sm:size-[28rem] sm:blur-[100px] lg:size-[36rem] lg:blur-[120px]" />
                        <div className="absolute top-1/3 right-1/4 size-[16rem] translate-x-1/4 -translate-y-1/2 rounded-full bg-[#2FDDAD]/10 blur-[60px] sm:size-[24rem] sm:blur-[80px] lg:size-[32rem] lg:blur-[100px]" />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
                            <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
                                {pageSeo?.content?.cta_title || 'Ready to Transform Your Brand?'}
                            </h2>
                            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                {pageSeo?.content?.cta_description || "Let's craft a strategy that delivers real impact. Get in touch with us today."}
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Button
                                    asChild
                                    className="h-12 rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25 sm:text-lg"
                                >
                                    <Link href={route('contact')}>
                                        {pageSeo?.content?.contact_submit_text || "Let's Talk"}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
Home.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
