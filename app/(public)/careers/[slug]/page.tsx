import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/inertia-adapter';
import { getCareerBySlug } from '@/app/actions/public-data';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2 } from 'lucide-react';
import { ApplicationForm } from './application-form';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const career = await getCareerBySlug(slug);

    if (!career) {
        return {
            title: 'Career Not Found',
        };
    }

    return {
        title: `${career.title} - Careers | Maju Mapan Digital`,
        description: career.description || `Career opportunity for ${career.title} at Maju Mapan`,
    };
}

export default async function CareerDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Assuming backend added getCareerBySlug, if not added in last batch I must have missed it?
    // I recall adding it to public-data.ts in the cleanup step.
    const career = await getCareerBySlug(slug);

    if (!career) {
        notFound();
    }

    return (
        <>
            <SeoHead
                seoConfig={undefined}
                fallbackTitle={`${career.title} - Careers | Maju Mapan Digital`}
                fallbackDescription={career.description || `Join us as a ${career.title}`}
            />

            <div className="min-h-screen pt-24 pb-16 bg-black">
                {/* Hero */}
                <div className="container px-4 mx-auto mb-12">
                    <Link
                        href="/careers"
                        className="inline-flex items-center mb-8 text-sm text-gray-400 transition-colors hover:text-brand-500"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Careers
                    </Link>

                    <div className="max-w-4xl">
                        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            {career.title}
                        </h1>
                        <div className="flex flex-wrap gap-6 mb-8 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-brand-500" />
                                <span>{career.category?.name || 'General'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-brand-500" />
                                <span>{career.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-brand-500" />
                                <span>{career.type}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container px-4 mx-auto">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Main Info */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">About the Role</h2>
                                <div className="prose prose-invert max-w-none text-gray-300">
                                    <div dangerouslySetInnerHTML={{ __html: career.description || '' }} />
                                </div>
                            </section>

                            {/* Requirements */}
                            {career.requirements && career.requirements.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
                                    <ul className="space-y-4">
                                        {career.requirements.map((req: string, index: number) => (
                                            <li key={index} className="flex gap-4">
                                                <div className="flex-shrink-0 mt-1">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                                                </div>
                                                <span className="text-gray-300">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>

                        {/* Apply Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 p-6 border border-gray-800 rounded-2xl bg-gray-900/50">
                                <h3 className="text-xl font-bold text-white mb-4">Interested?</h3>
                                <p className="text-gray-400 mb-6">
                                    If you think you'd be a great fit for our team, we'd love to hear from you.
                                </p>
                                <ApplicationForm careerId={career.id} jobTitle={career.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
