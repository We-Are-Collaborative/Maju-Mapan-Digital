import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { PublicLayout } from '@/layouts/public-layout';
import { Page } from '@/types/page';
import { Link } from '@inertiajs/react';
import { ArrowLeft, CheckCircle2, Eye, FileText, Lock, Mail, Shield, UserCheck } from 'lucide-react';
import { ReactNode } from 'react';

export default function PrivacyPolicy({ pageSeo }: { pageSeo?: Page }) {
    const lastUpdated = pageSeo?.content?.last_updated || 'October 7, 2025';

    const sections = [
        {
            icon: <FileText className="size-6" />,
            title: pageSeo?.content?.section_1_title || 'Information We Collect',
            content:
                pageSeo?.content?.section_1_content ||
                'We collect information that you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when you contact us or use our services.',
        },
        {
            icon: <Eye className="size-6" />,
            title: pageSeo?.content?.section_2_title || 'Legal Basis and How We Use Your Information',
            content:
                pageSeo?.content?.section_2_content ||
                'We process your personal data under legal bases including consent, legitimate interests, and contractual necessity. We use your information to respond to inquiries and improve our services.',
        },
        {
            icon: <Shield className="size-6" />,
            title: pageSeo?.content?.section_3_title || 'Information Sharing and Third Parties',
            content:
                pageSeo?.content?.section_3_content ||
                'We do not sell, rent, or trade your personal information. We may share your data only with trusted service providers and when required by law.',
        },
        {
            icon: <Lock className="size-6" />,
            title: pageSeo?.content?.section_4_title || 'Data Security and Retention',
            content:
                pageSeo?.content?.section_4_content ||
                'We implement robust security measures including SSL/TLS encryption, secure infrastructure, and access controls. We retain your data only as long as necessary.',
        },
        {
            icon: <UserCheck className="size-6" />,
            title: pageSeo?.content?.section_5_title || 'Your Rights Under GDPR and Privacy Laws',
            content:
                pageSeo?.content?.section_5_content ||
                'You have rights including access, rectification, erasure, data portability, and the right to object. Contact us to exercise your rights.',
        },
        {
            icon: <Mail className="size-6" />,
            title: pageSeo?.content?.section_6_title || 'Cookies and Tracking Technologies',
            content:
                pageSeo?.content?.section_6_content ||
                'We use essential, analytics, and preference cookies to enhance your browsing experience. You can control cookies through your browser settings.',
        },
    ];

    // Additional sections for comprehensive coverage
    const additionalSections = [
        ...(pageSeo?.content?.section_7_title
            ? [
                  {
                      icon: <Shield className="size-6" />,
                      title: pageSeo.content.section_7_title,
                      content: pageSeo.content.section_7_content || '',
                  },
              ]
            : []),
        ...(pageSeo?.content?.section_8_title
            ? [
                  {
                      icon: <UserCheck className="size-6" />,
                      title: pageSeo.content.section_8_title,
                      content: pageSeo.content.section_8_content || '',
                  },
              ]
            : []),
        ...(pageSeo?.content?.section_9_title
            ? [
                  {
                      icon: <FileText className="size-6" />,
                      title: pageSeo.content.section_9_title,
                      content: pageSeo.content.section_9_content || '',
                  },
              ]
            : []),
    ];

    const allSections = [...sections, ...additionalSections];

    const principles = [
        { icon: <Shield className="size-5" />, text: pageSeo?.content?.principle_1 || 'GDPR compliant data protection practices' },
        { icon: <Lock className="size-5" />, text: pageSeo?.content?.principle_2 || 'Industry-standard encryption and security' },
        { icon: <UserCheck className="size-5" />, text: pageSeo?.content?.principle_3 || 'Full transparency in data processing' },
        { icon: <CheckCircle2 className="size-5" />, text: pageSeo?.content?.principle_4 || 'Your rights are our priority' },
    ];

    return (
        <>
            <Toaster />
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="Privacy Policy - 5758 Creative Lab"
                fallbackDescription="Learn how 5758 Creative Lab collects, uses, and protects your personal information. Our commitment to your privacy and data security."
                type="page"
            />

            <main className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
                {/* Hero Section */}
                <section
                    className="relative min-h-[60vh] w-full bg-[url('/assets/bg_hello_mobile.webp')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_hello_dekstop.webp')] lg:min-h-[70vh]"
                    id="privacy-hero"
                    aria-labelledby="hero-heading"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-transparent" />

                    {/* Animated Background Elements */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-20 right-10 size-2 animate-ping rounded-full bg-brand-500/60" />
                        <div className="absolute top-40 left-20 size-1 animate-pulse rounded-full bg-brand-400/40" style={{ animationDelay: '1s' }} />
                        <div
                            className="absolute right-1/4 bottom-32 size-1.5 animate-ping rounded-full bg-brand-500/50"
                            style={{ animationDelay: '2s' }}
                        />
                    </div>

                    <div className="relative z-10 container mx-auto h-full min-h-[60vh] px-4 lg:min-h-[70vh]">
                        <div className="grid h-full grid-cols-12 gap-8">
                            <div className="col-span-12 flex items-center lg:col-span-6 lg:col-start-7">
                                <div className="flex min-h-[60vh] w-full flex-col justify-end gap-6 py-20 sm:items-center sm:justify-center sm:py-28 lg:min-h-[70vh] lg:items-start lg:justify-center lg:py-0">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 backdrop-blur-sm">
                                        <Shield className="size-4 text-brand-500" />
                                        <span className="text-sm font-semibold text-brand-500 sm:text-base">
                                            {pageSeo?.content?.badge_text || 'Your Privacy Matters'}
                                        </span>
                                    </div>

                                    <h1
                                        id="hero-heading"
                                        className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                                    >
                                        {pageSeo?.content?.hero_title || (
                                            <>
                                                <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                                    Privacy
                                                </span>{' '}
                                                Policy
                                            </>
                                        )}
                                    </h1>
                                    <p className="max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">
                                        {pageSeo?.content?.hero_subtitle ||
                                            'We are committed to protecting your privacy and ensuring the security of your personal information in compliance with GDPR and applicable data protection laws.'}
                                    </p>

                                    {/* Last Updated */}
                                    <div className="flex items-center gap-2 text-sm text-gray-400 sm:text-base">
                                        <FileText className="size-4" />
                                        <span>
                                            {pageSeo?.content?.last_updated_text || 'Last Updated'}:{' '}
                                            <span className="font-medium text-brand-500">{lastUpdated}</span>
                                        </span>
                                    </div>

                                    {/* Back to Home Link */}
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full border border-brand-500/50 bg-transparent px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-500 hover:bg-brand-500/10"
                                    >
                                        <Link href={route('home')}>
                                            <ArrowLeft className="mr-2 size-4" />
                                            {pageSeo?.content?.back_button_text || 'Back to Home'}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Principles Section */}
                <section
                    className="relative border-b border-gray-800/50 bg-gradient-to-b from-black via-gray-900/50 to-black py-12 sm:py-16"
                    id="principles"
                    aria-labelledby="principles-heading"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
                    </div>

                    <div className="relative container mx-auto px-4">
                        <h2 id="principles-heading" className="sr-only">
                            Our Privacy Principles
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {principles.map((principle, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-3 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10"
                                >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500/20">
                                        {principle.icon}
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{principle.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section
                    className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
                    id="policy-content"
                    aria-labelledby="content-heading"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 opacity-70 blur-3xl sm:size-[40rem] lg:size-[48rem]" />
                        <div className="absolute top-1/4 right-10 size-2 animate-pulse rounded-full bg-brand-400/60" />
                        <div
                            className="absolute bottom-1/4 left-10 size-1.5 animate-ping rounded-full bg-brand-500/40"
                            style={{ animationDelay: '1.5s' }}
                        />
                    </div>

                    <div className="relative container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                        <div className="mx-auto max-w-5xl">
                            {/* Introduction */}
                            <div className="mb-16 text-center sm:mb-20">
                                <h2 id="content-heading" className="mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                                    {pageSeo?.content?.intro_title || (
                                        <>
                                            How We{' '}
                                            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                                Protect
                                            </span>{' '}
                                            Your Data
                                        </>
                                    )}
                                </h2>
                                <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                    {pageSeo?.content?.intro_description ||
                                        'At 5758 Creative Lab, we are committed to protecting your personal data and respecting your privacy rights. This Privacy Policy explains how we collect, use, store, and protect your information in accordance with the General Data Protection Regulation (GDPR), Indonesian Law No. 27 of 2022 on Personal Data Protection, and other applicable privacy laws.'}
                                </p>
                            </div>

                            {/* Policy Sections */}
                            <div className="space-y-10 sm:space-y-12 lg:space-y-16">
                                {allSections.map((section, index) => (
                                    <article
                                        key={index}
                                        className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black p-8 backdrop-blur-sm transition-all duration-500 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/10 sm:p-10 lg:p-12"
                                    >
                                        <div className="absolute top-0 right-0 -mt-10 -mr-10 size-40 rounded-full bg-brand-500/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                                        <div className="relative">
                                            {/* Icon & Title */}
                                            <div className="mb-6 flex items-start gap-4">
                                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500/20 sm:size-14">
                                                    {section.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-500/5 px-3 py-1">
                                                        <span className="text-xs font-semibold tracking-wider text-brand-500 uppercase">
                                                            Section {index + 1}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl leading-tight font-bold text-white sm:text-3xl">{section.title}</h3>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="ml-0 sm:ml-16">
                                                <p className="text-base leading-relaxed text-gray-300 sm:text-lg">{section.content}</p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Contact Section */}
                            <div className="mt-16 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-brand-600/5 p-8 text-center backdrop-blur-sm sm:mt-20 sm:p-10 lg:p-12">
                                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-brand-500 shadow-xl shadow-brand-500/30">
                                    <Mail className="size-8 text-black" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                                    {pageSeo?.content?.contact_title || 'Data Protection Officer & Contact'}
                                </h3>
                                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                                    {pageSeo?.content?.contact_description ||
                                        'If you have questions about this Privacy Policy, wish to exercise your data protection rights, or have concerns about how we handle your information, please email us at hello@5758creativelab.com'}
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/25"
                                >
                                    <a href={pageSeo?.content?.contact_email_link || 'mailto:hello@5758creativelab.com'}>
                                        {pageSeo?.content?.contact_button_text || 'Email Us'}
                                        <Mail className="ml-2 size-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

PrivacyPolicy.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
