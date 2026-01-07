import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { PublicLayout } from '@/layouts/public-layout';
import { SharedData } from '@/types';
import { Page } from '@/types/page';
import { SiFacebook, SiInstagram, SiTiktok, SiX } from '@icons-pack/react-simple-icons';
import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, CheckCircle, Home, Linkedin, Mail } from 'lucide-react';
import { ReactNode } from 'react';

export default function ThankYou({ pageSeo, leadName }: { pageSeo?: Page; leadName?: string }) {
    const { contactSettings } = usePage<SharedData>().props;
    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="Thank You - 5758 Creative Lab"
                fallbackDescription="Thank you for contacting 5758 Creative Lab. We'll get back to you soon!"
                type="page"
            />
            <main className="relative min-h-screen overflow-hidden">
                {/* Hero Section */}
                <section
                    className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
                    aria-label="Thank you section"
                >
                    {/* Background Effects */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#2FDDAD]/20 blur-[80px] sm:size-[28rem] sm:blur-[100px] lg:size-[36rem] lg:blur-[120px] xl:size-[42rem]" />
                        <div className="absolute top-1/3 right-1/4 size-[16rem] translate-x-1/4 -translate-y-1/2 rounded-full bg-[#2FDDAD]/10 blur-[60px] sm:size-[24rem] sm:blur-[80px] lg:size-[32rem] lg:blur-[100px]" />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-2xl text-center">
                            {/* Success Icon */}
                            <div className="mb-6 flex justify-center">
                                <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2FDDAD] to-[#25B896] shadow-lg shadow-[#2FDDAD]/25 sm:size-20">
                                    <CheckCircle className="size-8 text-white sm:size-10" />
                                </div>
                            </div>

                            {/* Header */}
                            <div className="mb-8 space-y-4">
                                <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                                    {pageSeo?.content?.thank_you_title || 'Thank You!'}
                                </h1>
                                <p className="text-xl leading-relaxed text-[#2FDDAD] sm:text-2xl lg:text-3xl">
                                    {leadName ? (
                                        <>
                                            Thank you for reaching us <span className="font-semibold text-white">{leadName}</span>
                                        </>
                                    ) : (
                                        pageSeo?.content?.thank_you_subtitle || 'Your message has been received'
                                    )}
                                </p>
                                <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                                    {leadName
                                        ? 'Our representative will contact you shortly'
                                        : pageSeo?.content?.thank_you_description ||
                                          'We appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24 hours. In the meantime, feel free to explore our work or connect with us on social media.'}
                                </p>
                            </div>

                            {/* Next Steps Card */}
                            <div className="mb-8 rounded-2xl border border-gray-600/50 bg-gray-900/30 p-6 backdrop-blur-sm sm:p-8">
                                <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                                    {pageSeo?.content?.next_steps_title || 'What happens next?'}
                                </h2>
                                <div className="space-y-3 text-left sm:space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex size-6 items-center justify-center rounded-full bg-[#2FDDAD]/20">
                                            <div className="size-2 rounded-full bg-[#2FDDAD]" />
                                        </div>
                                        <p className="text-sm text-gray-300 sm:text-base">
                                            {pageSeo?.content?.step_1 || 'Our team will review your inquiry and project requirements'}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex size-6 items-center justify-center rounded-full bg-[#2FDDAD]/20">
                                            <div className="size-2 rounded-full bg-[#2FDDAD]" />
                                        </div>
                                        <p className="text-sm text-gray-300 sm:text-base">
                                            {pageSeo?.content?.step_2 || "We'll reach out within 24 hours to schedule a consultation"}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex size-6 items-center justify-center rounded-full bg-[#2FDDAD]/20">
                                            <div className="size-2 rounded-full bg-[#2FDDAD]" />
                                        </div>
                                        <p className="text-sm text-gray-300 sm:text-base">
                                            {pageSeo?.content?.step_3 || "Together, we'll craft a strategy that delivers real impact"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Button
                                    asChild
                                    className="h-12 rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25"
                                >
                                    <Link href={route('home')}>
                                        <Home className="mr-2 h-5 w-5" />
                                        {pageSeo?.content?.back_to_home_text || 'Back to Home'}
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-12 rounded-full border-gray-600 bg-transparent px-8 text-base font-medium text-white transition-all duration-300 hover:bg-gray-800"
                                >
                                    <Link href={route('article')}>
                                        <ArrowLeft className="mr-2 h-5 w-5" />
                                        {pageSeo?.content?.explore_articles_text || 'Explore Our Articles'}
                                    </Link>
                                </Button>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-12 rounded-xl border border-gray-700/50 bg-gray-800/20 p-6 backdrop-blur-sm">
                                <div className="mb-3 flex items-center justify-center gap-2">
                                    <Mail className="h-5 w-5 text-[#2FDDAD]" />
                                    <h3 className="text-lg font-medium text-white">
                                        {pageSeo?.content?.urgent_contact_title || 'Need urgent assistance?'}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-400 sm:text-base">
                                    {pageSeo?.content?.urgent_contact_text || 'For urgent inquiries, you can reach us directly at'}{' '}
                                    {contactSettings.email_link && contactSettings.email_text ? (
                                        <a
                                            href={contactSettings.email_link}
                                            className="text-[#2FDDAD] underline decoration-[#2FDDAD]/30 underline-offset-2 transition-colors hover:decoration-[#2FDDAD]"
                                        >
                                            {contactSettings.email_text}
                                        </a>
                                    ) : (
                                        <a
                                            href="mailto:hello@5758creative.com"
                                            className="text-[#2FDDAD] underline decoration-[#2FDDAD]/30 underline-offset-2 transition-colors hover:decoration-[#2FDDAD]"
                                        >
                                            hello@5758creative.com
                                        </a>
                                    )}
                                    {contactSettings.whatsapp_link && contactSettings.whatsapp_text && (
                                        <>
                                            {' or reach us on WhatsApp at '}
                                            <a
                                                href={contactSettings.whatsapp_link}
                                                className="text-[#2FDDAD] underline decoration-[#2FDDAD]/30 underline-offset-2 transition-colors hover:decoration-[#2FDDAD]"
                                                target="_blank"
                                            >
                                                {contactSettings.whatsapp_text}
                                            </a>
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-8 rounded-xl border border-gray-700/50 bg-gray-800/20 p-6 backdrop-blur-sm">
                                <h3 className="mb-4 text-center text-lg font-medium text-white">
                                    {pageSeo?.content?.social_media_title || 'Connect with us on social media'}
                                </h3>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    {contactSettings.instagram_link && contactSettings.instagram_text && (
                                        <Link
                                            href={contactSettings.instagram_link}
                                            className="flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800/50 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#2FDDAD] hover:bg-gray-700 hover:text-[#2FDDAD]"
                                            target="_blank"
                                        >
                                            <SiInstagram className="h-4 w-4 flex-shrink-0" />
                                            <span>{contactSettings.instagram_text}</span>
                                        </Link>
                                    )}
                                    {contactSettings.tiktok_link && contactSettings.tiktok_text && (
                                        <Link
                                            href={contactSettings.tiktok_link}
                                            className="flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800/50 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#2FDDAD] hover:bg-gray-700 hover:text-[#2FDDAD]"
                                            target="_blank"
                                        >
                                            <SiTiktok className="h-4 w-4 flex-shrink-0" />
                                            <span>{contactSettings.tiktok_text}</span>
                                        </Link>
                                    )}
                                    {contactSettings.linkedin_link && contactSettings.linkedin_text && (
                                        <Link
                                            href={contactSettings.linkedin_link}
                                            className="flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800/50 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#2FDDAD] hover:bg-gray-700 hover:text-[#2FDDAD]"
                                            target="_blank"
                                        >
                                            <Linkedin className="h-4 w-4 flex-shrink-0" />
                                            <span>{contactSettings.linkedin_text}</span>
                                        </Link>
                                    )}
                                    
                                    {contactSettings.facebook_link && contactSettings.facebook_text && (
                                        <Link
                                            href={contactSettings.facebook_link}
                                            className="flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800/50 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#2FDDAD] hover:bg-gray-700 hover:text-[#2FDDAD]"
                                            target="_blank"
                                        >
                                            <SiFacebook className="h-4 w-4 flex-shrink-0" />
                                            <span>{contactSettings.facebook_text}</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

ThankYou.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
