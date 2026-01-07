import { Button } from '@/components/ui/button';
import { PublicLayout } from '@/layouts/public-layout';
import { SharedData } from '@/types';
import { Career } from '@/types/career';
import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Clock, CopySlash, Dot, Mail } from 'lucide-react';
import { ReactNode } from 'react';
import { SeoHead } from '@/components/seo-head';

interface CareerDetailProps extends SharedData {
    career: Career;
}

export default function CareerDetail({ career }: CareerDetailProps) {
    return (
        <>
            <SeoHead
                seoConfig={career.seo_config}
                fallbackTitle={career.title}
                fallbackDescription={career.description}
                type="career"
            />
            <main className="mx-auto max-w-7xl px-4 pt-24 lg:pt-32">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                <nav className="hidden lg:col-span-1 lg:block" aria-label="Career navigation">
                    <Link href="/career">
                        <Button variant="outline" className="border border-brand-500 bg-transparent hover:bg-transparent">
                            <ArrowLeft className="size-4 text-brand-500" />
                        </Button>
                    </Link>
                </nav>

                <article className="lg:col-span-8">
                    <nav className="mb-6 lg:hidden" aria-label="Career navigation">
                        <Link href="/career">
                            <Button variant="outline" className="border border-brand-500 bg-transparent hover:bg-transparent">
                                <ArrowLeft className="size-4 text-brand-500" />
                            </Button>
                        </Link>
                    </nav>

                    <div className="flex flex-row justify-between sm:items-center">
                        <p className="text-sm text-gray-300 sm:text-base">{career.location}</p>
                        <p className="text-sm text-gray-300 sm:text-base">
                            Posted on{' '}
                            {new Date(career.created_at || '').toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                            })}
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 sm:mt-8">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                            <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{career.title}</h1>
                            {career.category && (
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-fit rounded-full border border-brand-500 bg-transparent hover:bg-transparent"
                                >
                                    <Dot className="size-4 text-brand-500" />
                                    <span className="text-brand-500">{career.category.name}</span>
                                </Button>
                            )}
                        </div>
                        <p className="text-sm text-gray-300 sm:text-base">{career.description}</p>

                        <div className="flex flex-row gap-4">
                            <div className="flex w-full items-center gap-2 rounded-md border border-[#1F2937] pr-4 sm:w-fit">
                                <Button className="bg-brand-500 hover:bg-brand-500">
                                    <Clock className="size-4 text-white" />
                                </Button>
                                <p className="text-sm text-gray-300 capitalize">{career.type}</p>
                            </div>
                            <div className="flex w-full items-center gap-2 rounded-md border border-[#1F2937] pr-4 sm:w-fit">
                                <Button className="bg-brand-500 hover:bg-brand-500">
                                    <CopySlash className="size-4 text-white" />
                                </Button>
                                <p className="text-sm text-gray-300">
                                    Rp. {career.min_salary} - Rp. {career.max_salary}
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 bg-gray-300 sm:my-8" />

                    <section className="flex flex-col gap-6 sm:gap-8" aria-label="Job details">
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h2 className="text-lg font-semibold sm:text-xl">Job Description</h2>
                            <div
                                className="prose prose-invert max-w-none text-sm leading-relaxed text-gray-300 sm:text-base"
                                dangerouslySetInnerHTML={{ __html: career.content || career.description || '' }}
                            />
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h2 className="text-lg font-semibold sm:text-xl">Requirements</h2>
                            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                Please check the full job description above for detailed requirements and qualifications.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h2 className="text-lg font-semibold sm:text-xl">Benefits</h2>
                            <p className="pb-8 text-sm leading-relaxed text-gray-300 sm:pb-16 sm:text-base lg:pb-32">
                                Competitive salary package, flexible working arrangements, and growth opportunities in a dynamic team environment.
                            </p>
                        </div>
                    </section>
                </article>

                <aside className="lg:col-span-3" aria-label="Application sidebar">
                    <div className="sticky top-4 flex flex-col gap-4 rounded-xl bg-gray-900 p-6 sm:p-8">
                        <div className="flex size-12 items-center justify-center rounded-md bg-brand-500 sm:size-14">
                            <Mail className="size-5 text-white sm:size-6" />
                        </div>
                        <h2 className="mt-2 text-lg font-semibold sm:text-xl">Apply for this Job</h2>
                        <p className="text-sm text-gray-300 sm:text-base">
                            Ready to join our team? Get in touch with us to discuss this opportunity.
                        </p>
                        {career.apply_url ? (
                            <a href={career.apply_url} target="_blank" rel="noopener noreferrer">
                                <Button className="mt-2 w-full rounded-full bg-brand-500 text-black hover:bg-brand-500/80 sm:mt-4">
                                    Apply Now <ArrowRight className="ml-1 size-4" />
                                </Button>
                            </a>
                        ) : (
                            <Button className="mt-2 rounded-full bg-brand-500 text-black hover:bg-brand-500/80 sm:mt-4">
                                Let's Talk <ArrowRight className="ml-1 size-4" />
                            </Button>
                        )}
                    </div>
                </aside>
            </div>
        </main>
        </>
    );
}

CareerDetail.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
