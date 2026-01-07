import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LeadForm } from '@/components/lead-form';
import { InteractiveWelcome } from '@/components/interactive-welcome';
import { getHomePageData } from '@/app/actions/public-data';
import { SolutionsSection } from '@/components/home/solutions-section';
import { WorksSection } from '@/components/home/works-section';
import { CompactAboutValues } from '@/components/home/compact-about-values';
import { InteractiveCTASection } from '@/components/home/interactive-cta-section';

export default async function Home() {
    const { values, specialities, clients, caseStudies, pageSeo } = await getHomePageData();

    // Filter top 3 featured solutions for Bento Grid
    const featuredSlugs = [
        'digital-performance-marketing',
        'influencer-kol-marketing',
        'seo-organic-growth'
    ];
    const topSpecialities = specialities.filter(s => s.slug && featuredSlugs.includes(s.slug));

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="Maju Mapan - Digital Marketing & Creative Solutions"
                fallbackDescription="Maju Mapan provides comprehensive digital marketing, web development, and creative solutions for businesses in Indonesia."
                type="page"
            />
            <div className="relative overflow-hidden">
                <section
                    className="relative min-h-screen w-full bg-[url('/assets/bg_banner_mobile.webp')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_banner_dekstop.webp')]"
                    id="banner"
                    aria-label="Hero banner section"
                >
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-black/90 sm:via-black/50 sm:to-transparent" />

                    {/* Content container */}
                    <div className="relative z-10 container mx-auto h-full min-h-screen px-4">
                        <div className="grid h-full grid-cols-12">
                            {/* Content positioned for desktop right - avoiding left image */}
                            <div className="col-span-12 flex items-center lg:col-span-6 lg:col-start-7">
                                <div className="flex min-h-screen w-full flex-col justify-center items-end gap-8 py-20 lg:py-0">
                                    {/* Hero Text */}
                                    <div className="text-right animate-in fade-in slide-in-from-bottom-10 duration-1000 flex flex-col items-end">
                                        <h1 className="text-6xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] drop-shadow-2xl max-w-5xl">
                                            {/* Force 2 lines: "Award Winning" on top, "Agency" below */}
                                            <span className="block mb-2">
                                                {pageSeo?.content?.hero_title_line1 || "Award"} <span className="text-brand-400 drop-shadow-[0_0_35px_rgba(47,221,173,0.6)]">{pageSeo?.content?.hero_title_highlight || "Winning"}</span>
                                            </span>
                                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-white animate-gradient-x bg-[length:200%_auto] pb-2">
                                                {pageSeo?.content?.hero_title_suffix || "Agency"}
                                            </span>
                                        </h1>

                                        <div className="mt-8 relative group cursor-default">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                            <p className="relative max-w-2xl text-2xl md:text-3xl font-medium text-white/90 tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards leading-snug drop-shadow-lg selection:bg-brand-500/30">
                                                {pageSeo?.content?.hero_subtitle || "Your partner in profitable growth—turning traffic into tangible revenue."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Call to Action Button */}
                                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards pt-10">
                                        <a target="_blank" rel="noopener noreferrer" href={pageSeo?.content?.hero_cta_link || '#'}>
                                            <Button
                                                size="lg"
                                                className="group relative h-20 overflow-hidden rounded-full bg-brand-500 px-14 text-2xl font-black text-black transition-all duration-500 hover:scale-110 hover:bg-brand-400 hover:shadow-[0_0_60px_-10px_rgba(47,221,173,0.8)] active:scale-95 border-2 border-brand-400/50 backdrop-blur-md"
                                            >
                                                <span className="relative z-10 flex items-center gap-3">
                                                    {pageSeo?.content?.hero_cta_text || "Set a Meeting"}
                                                    <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black/10 transition-transform duration-500 group-hover:translate-x-2 group-hover:bg-black/20">
                                                        <ArrowRight className="h-5 w-5 -translate-x-5 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                                                        <ArrowRight className="absolute h-5 w-5 transition-all duration-500 group-hover:translate-x-5 group-hover:opacity-0" />
                                                    </div>
                                                </span>

                                                {/* Button ambient effects */}
                                                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/30 to-transparent blur-md transform scale-150" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 left-4 h-2 w-2 animate-pulse rounded-full bg-brand-400 opacity-60 sm:hidden"></div>
                    <div className="absolute top-1/3 right-8 h-1 w-1 animate-pulse rounded-full bg-brand-300 opacity-40 sm:hidden"></div>
                    <div className="absolute bottom-1/4 left-8 hidden h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500 opacity-50 sm:block"></div>
                </section>

                <CompactAboutValues
                    values={values}
                    aboutTitle="The Agency"
                    valuesTitle={pageSeo?.content?.values_title || 'What We Stand for'}
                />

                <SolutionsSection
                    specialities={topSpecialities}
                    title={pageSeo?.content?.specialties_title}
                    subtitle={pageSeo?.content?.specialties_subtitle}
                />

                <WorksSection
                    caseStudies={caseStudies}
                    title={pageSeo?.content?.works_title}
                    subtitle={pageSeo?.content?.works_subtitle}
                />

                {/* Call to Action Section */}
                <InteractiveCTASection />
            </div>
        </>
    );
}
