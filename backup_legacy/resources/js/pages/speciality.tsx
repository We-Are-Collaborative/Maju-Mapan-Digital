import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PublicLayout } from '@/layouts/public-layout';
import { SharedData } from '@/types';
import { Speciality } from '@/types/speciality';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface SpecialityPageProps extends SharedData {
    speciality: Speciality;
}

export default function SpecialityPage({ speciality }: SpecialityPageProps) {
    return (
        <>
            <SeoHead
                seoConfig={speciality.seo_config}
                fallbackTitle={speciality.title}
                fallbackDescription={speciality.description}
                fallbackImage={speciality.thumbnail?.original_url}
                type="speciality"
            />
            <main>
                <section className="bg-brand-900/20 pt-24 lg:pt-32" aria-label="Speciality hero section">
                    <header className="mx-auto max-w-7xl px-8 text-center">
                        <p className="mb-4 text-sm font-medium text-teal-400">Our Specialties</p>
                        <h1 className="mb-4 text-4xl font-bold lg:text-6xl">{speciality.title}</h1>
                        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300">{speciality.description}</p>
                    </header>
                    {/* Hero Image */}
                    <div className="relative h-64 w-full overflow-hidden md:h-96 lg:h-[500px]">
                        <img
                            src={speciality.thumbnail?.original_url ?? '/assets/bg-speciality.webp'}
                            alt={speciality.title}
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                        />
                    </div>
                </section>
                <section className="px-4 py-16 lg:px-8" aria-label="Speciality overview section">
                    <div className="mx-auto max-w-7xl space-y-16">
                        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">{speciality.subtitle}</h2>
                        <p className="text-lg leading-relaxed text-gray-300">{speciality.description}</p>
                        <article>
                            <h3 className="mb-8 text-xl font-medium sm:text-2xl lg:text-3xl">Key Components of {speciality.title}</h3>
                            <div className="grid gap-8 md:grid-cols-3">
                                {(speciality.key_component ?? [])?.map((component: any, index: number) => (
                                    <Card key={index} className="border-gray-700 bg-transparent">
                                        <CardContent className="p-6">
                                            <div className="mb-10 text-3xl text-brand-500">
                                                <img src={component.icon_url ?? ''} className="size-8 object-contain" alt={component.title} />
                                            </div>
                                            <h4 className="mb-3 text-xl font-semibold text-white">{component.title}</h4>
                                            <p className="text-gray-300">{component.description ?? ''}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </article>
                    </div>
                </section>
                <section className="px-4 py-16 lg:px-8" aria-label="Why this speciality works section">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl">Why {speciality.title} Works</h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {(speciality.strategy_work ?? [])?.map((reason: any, index: number) => (
                                <div key={index} className="text-center">
                                    <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 shadow-lg shadow-brand-500/50 drop-shadow-lg lg:mx-auto">
                                        <div className="absolute inset-0 animate-pulse rounded-full bg-brand-500 opacity-75 blur-md"></div>
                                        <span className="relative z-10 text-lg font-bold text-white">{index + 1}</span>
                                    </div>
                                    <h4 className="mb-3 text-xl font-semibold">{reason.title}</h4>
                                    <p className="text-gray-300">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative min-h-96 bg-[url('/assets/bg-call.webp')] bg-cover bg-center" aria-label="Call to action section">
                    <div className="z-10 mx-auto flex h-full max-w-xl flex-col items-center justify-center gap-8 px-10 py-56 md:py-20">
                        <h2 className="text-center text-3xl font-medium sm:text-4xl lg:text-5xl">Ready to Transform Your Business?</h2>
                        <Link href={route('contact')}>
                            <Button size="lg" className="w-fit rounded-full bg-brand-500 px-10 text-black transition-colors hover:bg-brand-500/80">
                                Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

SpecialityPage.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
