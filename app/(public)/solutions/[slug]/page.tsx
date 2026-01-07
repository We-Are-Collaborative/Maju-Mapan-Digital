import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/inertia-adapter';
import { getSpecialityBySlug } from '@/app/actions/public-data';
import { ArrowLeft, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

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
            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-black" />

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[url('/assets/net.svg')] bg-cover bg-center bg-no-repeat" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="container relative z-10 px-4 text-center">
                    <Link
                        href="/solutions"
                        className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-brand-500"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Solutions
                    </Link>

                    <h1 className="mb-6 bg-gradient-to-r from-white via-brand-200 to-brand-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
                        {speciality.title}
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 sm:text-2xl">
                        {speciality.subtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        {/* Main Description */}
                        <div className="mb-16 rounded-2xl border border-gray-800 bg-gray-900/50 p-8 md:p-12">
                            <h2 className="mb-6 text-2xl font-bold text-white">Overview</h2>
                            <div className="prose prose-invert max-w-none text-gray-300">
                                <p className="leading-relaxed text-lg whitespace-pre-line">{speciality.description}</p>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="mb-16">
                            <h2 className="mb-8 text-2xl font-bold text-white">Key Features</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {features.map((feature: string, index: number) => (
                                    <div
                                        key={index}
                                        className="group flex gap-4 rounded-xl border border-gray-800 bg-gray-900/30 p-6 transition-all hover:bg-gray-800 hover:border-brand-500/30"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 group-hover:bg-brand-500/20">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <p className="text-gray-300">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center">
                            <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-12">
                                <h2 className="mb-6 text-3xl font-bold text-white">Ready to get started?</h2>
                                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
                                    Let's discuss how our {speciality.title} services can help you achieve your business goals.
                                </p>
                                <Button size="lg" className="bg-brand-500 hover:bg-brand-600">
                                    <Link href="/contact-us">
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        Consult with an Expert
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
