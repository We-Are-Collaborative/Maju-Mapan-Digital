import { Button } from '@/components/ui/button';
import { SeoHead } from '@/components/seo-head';
import { Link } from '@/lib/inertia-adapter';
import { getPageSeo } from '@/app/actions/public-data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default async function ThankYouPage() {
    const pageSeo = await getPageSeo('thank-you');

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="Thank You | Maju Mapan Digital"
                fallbackDescription="Thank you for contacting us."
            />

            <div className="relative flex min-h-screen items-center justify-center pt-20 pb-16">
                {/* Background Elements */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
                </div>

                <div className="container relative mx-auto px-4 text-center">
                    <div className="mx-auto max-w-2xl">
                        <div className="mb-8 flex justify-center">
                            <div className="relative flex size-24 items-center justify-center rounded-full bg-green-500/10 text-green-500 sm:size-32">
                                <div className="absolute inset-0 animate-ping rounded-full bg-green-500/20" />
                                <CheckCircle2 className="size-12 sm:size-16" />
                            </div>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Thank You!</h1>
                        <p className="mb-10 text-lg text-gray-400 sm:text-xl">
                            We have received your message and will get back to you shortly. Usually within 24 hours.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild size="lg" className="h-12 rounded-full bg-brand-500 px-8 font-semibold text-black hover:bg-brand-400">
                                <Link href="/">Return Home</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-full border-gray-700 bg-transparent px-8 text-white hover:bg-gray-800"
                            >
                                <Link href="/insights">Read Our Insights</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
