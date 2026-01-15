import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LeadForm } from '@/components/lead-form';
import { InteractiveWelcome } from '@/components/interactive-welcome';
import { getHomePageData } from '@/app/actions/public-data';
import { SolutionsSection } from '@/components/home/solutions-section';
import { ClientsSection } from '@/components/home/clients-section';
import { WorksSection } from '@/components/home/works-section';
import { CompactAboutValues } from '@/components/home/compact-about-values';
import { InteractiveCTASection } from '@/components/home/interactive-cta-section';
import { HeroSlider } from '@/components/home/hero-slider';
import { Metadata } from 'next';
import { getHomeHeroData } from '@/app/(admin)/_actions/home-hero';
import { getPersonalizedHero } from '@/app/actions/personalization';

export async function generateMetadata(): Promise<Metadata> {
    const { pageSeo } = await getHomePageData();
    const title = pageSeo?.seoConfig?.title || "Maju Mapan Digital | Powering Your Growth with AI-Driven Performance Marketing";
    const description = pageSeo?.seoConfig?.description || "Excellence in Digital Solutions. Your partner in profitable growth—turning traffic into tangible revenue.";
    const imageUrl = "/assets/og-home.png";

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: imageUrl }],
        },
        twitter: {
            title,
            description,
            images: [imageUrl],
        },
    };
}

export default async function Home() {
    const { values, specialities, clients, caseStudies, pageSeo } = await getHomePageData();

    // Filter top 3 featured solutions for Bento Grid
    const featuredSlugs = [
        'digital-performance-marketing',
        'influencer-kol-marketing',
        'creative-content-production',
        'seo-organic-growth'
    ];
    const topSpecialities = specialities.filter(s => s.slug && featuredSlugs.includes(s.slug));

    // Fetch and Personalize Hero
    const fetchedHero = await getHomeHeroData();
    let slides = fetchedHero?.slides || [];

    if (fetchedHero?.isDynamic && slides.length > 0) {
        const personalized = await getPersonalizedHero(slides[0]);
        slides = [{
            ...slides[0],
            titleLine1: personalized.titleLine1,
            titleHighlight: personalized.titleHighlight,
            subtitle: personalized.subtitle
        }];
    }

    return (
        <>
            <SeoHead />

            <div className="relative overflow-hidden">
                <HeroSlider slides={slides} isDynamic={fetchedHero?.isDynamic ?? true} />

                <CompactAboutValues
                    values={values}
                    aboutTitle="The Agency"
                    valuesTitle={pageSeo?.content?.values_title || 'What We Stand for'}
                />

                <ClientsSection
                    clients={clients}
                    subtitle={pageSeo?.content?.clients_subtitle}
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
