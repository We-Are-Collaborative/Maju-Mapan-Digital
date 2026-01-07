import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/inertia-adapter';
import { getCaseStudyBySlug, getRelatedCaseStudies, getPageSeo, getCaseStudies } from '@/app/actions/public-data';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { CaseStudyDetailContent } from '@/components/case-studies/case-study-detail-content';

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudyBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    const recommendations = await getRelatedCaseStudies(caseStudy.id, caseStudy.clientId || undefined);
    const pageSeo = await getPageSeo('case-studies');
    const content = pageSeo?.content || {};

    return (
        <>
            <SeoHead
                seoConfig={(caseStudy as any).seoConfig}
                fallbackTitle={`${caseStudy.title} | Case Study`}
                fallbackDescription={caseStudy.excerpt || undefined}
                fallbackImage={(caseStudy as any).thumbnail?.originalUrl}
                type="article"
            />

            <main className="min-h-screen bg-[#0A0A0A]">
                {/* 40vh Hero Banner */}
                <section className="relative h-[40vh] w-full items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={(caseStudy as any).thumbnail?.originalUrl || '/assets/bg-speciality.webp'}
                            alt={caseStudy.title}
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
                                <Link href="/case-studies">
                                    <ArrowLeft className="size-4" />
                                </Link>
                            </Button>
                            <div className="h-px w-12 bg-white/20" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/50">
                                {caseStudy.client?.name} Case Study
                            </span>
                        </nav>

                        <h1 className="max-w-4xl text-4xl font-black text-white sm:text-6xl lg:text-7xl uppercase">
                            {caseStudy.title}
                        </h1>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-24 lg:py-32">
                    {/* Primary Content (Client Component for interactivity) */}
                    <CaseStudyDetailContent slug={slug} />

                    {/* Fallback for legacy content */}
                    {!['grab-influencer', 'traveloka-brand', 'shopee-social'].includes(slug) && (
                        <article className="prose prose-invert prose-lg mx-auto mt-16 max-w-4xl">
                            <div dangerouslySetInnerHTML={{ __html: caseStudy.content || '' }} />
                        </article>
                    )}

                    {/* Similar Case Studies */}
                    {recommendations.length > 0 && (
                        <section className="mt-32 pt-24 border-t border-white/5" aria-label="Similar case studies section">
                            <div className="mb-16 flex items-center justify-between">
                                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                                    Similar <span className="text-brand-500">Case Studies</span>
                                </h2>
                                <Link href="/case-studies" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-brand-500 transition-colors">
                                    VIEW ALL CASE STUDIES
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {recommendations.map((recommendation: any, index: number) => (
                                    <Link key={index} href={`/case-studies/${recommendation.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20">
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={recommendation.thumbnail?.originalUrl || '/assets/bg-speciality.webp'}
                                                alt={recommendation.title}
                                                className="size-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                        </div>

                                        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                                            <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">
                                                {recommendation.client?.name}
                                            </div>
                                            <h3 className="text-xl font-black text-white uppercase">
                                                {recommendation.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </>
    );
}

export async function generateStaticParams() {
    const caseStudies = await getCaseStudies();
    // Also include our new mock slugs if they aren't in the DB yet
    const mockSlugs = ['grab-influencer', 'traveloka-brand', 'shopee-social'];
    const dbSlugs = caseStudies.map((cs: { slug: string }) => cs.slug);

    // De-duplicate slugs
    const allSlugs = Array.from(new Set([...dbSlugs, ...mockSlugs]));

    return allSlugs.map((slug) => ({
        slug,
    }));
}
