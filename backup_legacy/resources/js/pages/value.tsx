import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { PublicLayout } from '@/layouts/public-layout';
import { SharedData } from '@/types';
import { Value as ValueType } from '@/types/value';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { ReactNode, useMemo } from 'react';

interface ValuePageProps extends SharedData {
    value: ValueType;
}

export default function Value({ value }: ValuePageProps) {
    const gridStyle = useMemo(() => {
        const colCount = value.process?.length || 1;
        return {
            '--grid-cols': colCount.toString(),
            gridTemplateColumns: `repeat(${colCount}, minmax(0, 0.5fr))`,
        } as React.CSSProperties;
    }, [value.process?.length]);

    return (
        <>
            <SeoHead
                seoConfig={value.seo_config}
                fallbackTitle={value.title}
                fallbackDescription={value.subtitle || value.description}
                fallbackImage={value.thumbnail?.original_url}
                type="value"
            />
            <main>
                <section className="relative min-h-64 w-full pt-4 sm:min-h-80 lg:min-h-96" id="banner" aria-label="Value hero section">
                    <img
                        src={value.background?.original_url}
                        alt="Background"
                        className="absolute inset-0 h-full w-full object-cover object-[20%_75%]"
                    />
                    <header className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
                        <p className="text-lg font-semibold text-brand-500 sm:text-xl lg:text-2xl">Our Service</p>
                        <h1 className="mt-2 mb-2 text-2xl font-semibold sm:mt-4 sm:text-3xl lg:text-4xl">{value.title}</h1>
                        <p className="text-sm text-gray-300 sm:text-base">{value.subtitle}</p>
                    </header>
                </section>
                <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-16" aria-label="Value overview section">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-32">
                        <div className="order-2 flex max-w-2xl flex-col gap-16 lg:order-1 lg:col-span-2 lg:max-w-none">
                            <article className="flex flex-col gap-4">
                                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{value.body_title}</h2>
                                <p className="text-justify text-sm text-gray-300 sm:text-base">{value.description}</p>
                            </article>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">{value.body_subtitle}</h3>
                                <div className="flex flex-col gap-4">
                                    {(value.why_choose ?? [])?.map((item, index) => (
                                        <ValueCard key={index} title={item.title} description={item.description} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 lg:col-span-1">
                            <img
                                src={value.thumbnail?.original_url}
                                alt="value"
                                className="mx-auto size-[100%] rounded-t-lg object-cover sm:size-[80%] md:size-full"
                            />
                        </div>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-16" aria-label="Value overview section">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-center text-3xl font-medium sm:text-4xl lg:text-5xl">Our Process</h2>
                        <div className="hidden md:block">
                            <div className="relative">
                                {/* Desktop dotted line */}
                                <div className="absolute top-8 right-0 left-0 h-px">
                                    <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-20">
                                        {(value.process ?? [])?.slice(1).map((_, index) => (
                                            <div key={index} className="mx-4 flex-1 border-t-2 border-dotted border-teal-400"></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid gap-4" style={gridStyle}>
                                    {(value.process ?? [])?.map((step, index) => (
                                        <div key={index} className="relative text-center">
                                            <div className="relative z-10 mb-6">
                                                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 shadow-lg shadow-brand-500/50 drop-shadow-lg lg:mx-auto">
                                                    <div className="absolute inset-0 animate-pulse rounded-full bg-brand-500 opacity-75 blur-md"></div>
                                                    <span className="relative z-10 text-lg font-bold text-white">{index + 1}</span>
                                                </div>
                                                <h4 className="mb-3 text-xl font-semibold">{step.title}</h4>
                                                <p className="text-sm leading-relaxed text-gray-300">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Layout - Timeline Style */}
                        <div className="relative mx-auto max-w-md md:hidden">
                            <div className="absolute top-0 bottom-0 left-8 w-px border-l-2 border-dotted border-teal-400"></div>

                            <div className="space-y-12">
                                {(value.process ?? [])?.map((step, index) => (
                                    <div key={index} className="relative flex items-start">
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 shadow-lg shadow-brand-500/50 drop-shadow-lg lg:mx-auto">
                                                <div className="absolute inset-0 animate-pulse rounded-full bg-brand-500 opacity-75 blur-md"></div>
                                                <span className="relative z-10 text-lg font-bold text-white">{index + 1}</span>
                                            </div>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <h4 className="mb-3 text-xl font-semibold">{step.title}</h4>
                                            <p className="text-sm leading-relaxed text-gray-300">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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

Value.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;

const ValueCard = ({ title, description }: { title: string; description: string }) => {
    return (
        <div className="flex flex-col gap-4 rounded-lg border border-gray-700 p-7">
            <h4 className="text-xl font-medium text-brand-500 sm:text-2xl lg:text-3xl">{title}</h4>
            <p className="text-sm text-gray-300 sm:text-base">{description}</p>
        </div>
    );
};
