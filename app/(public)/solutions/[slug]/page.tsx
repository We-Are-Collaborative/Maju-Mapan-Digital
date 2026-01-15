import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/inertia-adapter';
import { getSpecialityBySlug } from '@/app/actions/public-data';
import { ArrowLeft, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { CROPerformanceShowcase } from '@/components/solutions/cro-rework';
import { SocialMediaShowcase } from '@/components/solutions/social-media-showcase';
import { PerformanceShowcase } from '@/components/solutions/performance-showcase';
import { InfluencerShowcase } from '@/components/solutions/influencer-showcase';
import { SEOShowcase } from '@/components/solutions/seo-showcase';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const speciality = await getSpecialityBySlug(slug);

    if (!speciality) {
        return {
            title: 'Solution Not Found',
        };
    }

    return {
        title: `${speciality.title} - Solutions | Maju Mapan Digital`,
        description: speciality.description,
    };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const speciality = await getSpecialityBySlug(slug);

    if (!speciality) {
        notFound();
    }

    const features = Array.isArray(speciality.features) ? speciality.features : (speciality.features ? JSON.parse(speciality.features as unknown as string) : []);

    return (
        <>
            <SeoHead
                seoConfig={undefined}
                fallbackTitle={`${speciality.title} - Solutions | Maju Mapan Digital`}
                fallbackDescription={speciality.description || undefined}
            />

            {/* 40vh Hero Banner */}
            <section className="relative h-[40vh] w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={(speciality as any).thumbnail?.originalUrl || (speciality as any).background?.originalUrl || '/assets/bg-speciality.webp'}
                        alt={speciality.title}
                        className="size-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-12">
                    <nav className="mb-8 flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="group size-10 rounded-full border border-white/10 bg-white/5 p-0 hover:border-brand-500 hover:bg-brand-500 hover:text-black"
                            asChild
                        >
                            <Link href="/solutions">
                                <ArrowLeft className="size-4" />
                            </Link>
                        </Button>
                        <div className="h-px w-12 bg-white/20" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-white/50">
                            Our Solution
                        </span>
                    </nav>

                    <h1 className="max-w-4xl text-4xl font-black text-white sm:text-6xl lg:text-7xl uppercase">
                        {speciality.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        {/* Split layout similar to Case Study if needed, or focused column */}
                        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                            {slug === 'web-conversion-cro' ? (
                                <div className="lg:col-span-12">
                                    <CROPerformanceShowcase />
                                </div>
                            ) : slug === 'social-media-community-management' ? (
                                <div className="lg:col-span-12">
                                    <SocialMediaShowcase />
                                </div>
                            ) : slug === 'digital-performance-marketing' ? (
                                <div className="lg:col-span-12">
                                    <PerformanceShowcase />
                                </div>
                            ) : slug === 'influencer-kol-marketing' ? (
                                <div className="lg:col-span-12">
                                    <InfluencerShowcase />
                                </div>
                            ) : slug === 'seo-organic-growth' ? (
                                <div className="lg:col-span-12">
                                    <SEOShowcase />
                                </div>
                            ) : (
                                <>
                                    <div className="lg:col-span-8">
                                        {/* Overview */}
                                        <div className="mb-20">
                                            <div className="mb-8 flex items-center gap-4">
                                                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-brand-500 border border-white/10 shadow-xl">
                                                    <ExternalLink className="size-6" />
                                                </div>
                                                <h2 className="text-2xl font-black uppercase tracking-widest text-white">Overview</h2>
                                            </div>
                                            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl">
                                                <p className="leading-relaxed text-xl font-medium text-white/70 whitespace-pre-line">
                                                    {speciality.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        {features.length > 0 && (
                                            <div className="mb-20">
                                                <div className="mb-8 flex items-center gap-4">
                                                    <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-brand-500 border border-white/10 shadow-xl">
                                                        <CheckCircle2 className="size-6" />
                                                    </div>
                                                    <h2 className="text-2xl font-black uppercase tracking-widest text-white">Key Features</h2>
                                                </div>
                                                <div className="grid gap-6 sm:grid-cols-2">
                                                    {features.map((feature: string, index: number) => (
                                                        <div
                                                            key={index}
                                                            className="group flex gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05] hover:border-brand-500/30"
                                                        >
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform">
                                                                <CheckCircle2 className="h-5 w-5" />
                                                            </div>
                                                            <p className="text-lg font-medium text-white/60 group-hover:text-white transition-colors">{feature}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Sidebar Info - Simplified for Solution */}
                                    <div className="lg:col-span-4">
                                        <div className="lg:sticky lg:top-32 space-y-8">
                                            <div className="rounded-3xl border border-white/5 bg-brand-500/5 p-8 backdrop-blur-xl">
                                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-500 mb-4">Value Proposition</h3>
                                                <p className="text-lg font-bold text-white leading-relaxed">
                                                    {speciality.subtitle || `Transforming your business through ${speciality.title}.`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Premium CTA Section - Only if not specialized (which have their own CTAs) */}
                            {!['web-conversion-cro', 'social-media-community-management', 'digital-performance-marketing', 'influencer-kol-marketing', 'seo-organic-growth'].includes(slug) && (
                                <div className="mt-32">
                                    <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-gray-900 to-black p-12 lg:p-20 relative overflow-hidden group text-center">
                                        <div className="absolute top-0 right-0 -mt-20 -mr-20 size-64 bg-brand-500/10 blur-[100px] rounded-full group-hover:bg-brand-500/20 transition-all duration-700" />

                                        <h2 className="mb-6 text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                                            Ready to elevate your <br />
                                            <span className="text-brand-500">{speciality.title}</span> strategy? <br />
                                            Let's talk.
                                        </h2>
                                        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 font-medium">
                                            Discover how our data-driven approach and creative expertise can transform your brand's digital presence and drive measurable growth.
                                        </p>
                                        <Button size="lg" className="h-14 px-10 rounded-full bg-brand-500 hover:bg-brand-400 text-black font-bold text-lg shadow-xl shadow-brand-500/20 hover:scale-105 transition-all duration-300" asChild>
                                            <Link href="/contact-us">
                                                <MessageSquare className="mr-3 size-5" />
                                                Start Your Project
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
