import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { PublicLayout } from '@/layouts/public-layout';
import { Page } from '@/types/page';
import { Link } from '@inertiajs/react';
import { ArrowLeft, HelpCircle, MessageCircle, Plus } from 'lucide-react';
import { ReactNode, useState } from 'react';

export default function FAQ({ pageSeo }: { pageSeo?: Page }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            category: 'General',
            questions: [
                {
                    question: 'What services does 5758 Creative Lab offer?',
                    answer: 'We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, and consulting services. Our team specializes in creating innovative solutions tailored to your business needs.',
                },
                {
                    question: 'How long does a typical project take?',
                    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months or more. We provide detailed timelines during the initial consultation.',
                },
                {
                    question: 'Do you work with startups or only established companies?',
                    answer: 'We work with businesses of all sizes, from startups to enterprise-level organizations. We tailor our solutions to match your budget and growth stage.',
                },
            ],
        },
        {
            category: 'Process & Workflow',
            questions: [
                {
                    question: 'What is your development process?',
                    answer: 'Our process includes: 1) Discovery & Research, 2) Strategy & Planning, 3) Design & Prototyping, 4) Development & Testing, 5) Launch & Deployment, and 6) Ongoing Support & Maintenance.',
                },
                {
                    question: 'How do you handle project communication?',
                    answer: "We maintain transparent communication through regular updates, dedicated project managers, and collaborative tools. You'll receive progress reports and have direct access to our team throughout the project.",
                },
                {
                    question: 'Can I request changes during development?',
                    answer: 'Yes, we follow an agile methodology that allows for flexibility. Minor adjustments can be accommodated, while significant scope changes may require timeline and budget adjustments.',
                },
            ],
        },
        {
            category: 'Pricing & Payment',
            questions: [
                {
                    question: 'How do you structure your pricing?',
                    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Each project receives a custom quote based on requirements, complexity, and timeline.',
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept bank transfers, credit cards, and other electronic payment methods. Payment terms are typically structured as: 30% upfront, 40% at milestone, and 30% upon completion.',
                },
                {
                    question: 'Do you offer maintenance and support packages?',
                    answer: 'Yes, we provide ongoing maintenance and support packages to ensure your digital products remain secure, updated, and performing optimally after launch.',
                },
            ],
        },
        {
            category: 'Technical',
            questions: [
                {
                    question: 'What technologies do you use?',
                    answer: "We use modern, industry-standard technologies including React, Laravel, Node.js, React Native, and cloud platforms like AWS and Google Cloud. We select the best tech stack for each project's specific needs.",
                },
                {
                    question: 'Will I own the source code?',
                    answer: 'Yes, upon final payment, you receive full ownership of all source code, designs, and project assets. We provide comprehensive documentation and handover materials.',
                },
                {
                    question: 'Do you provide hosting and domain services?',
                    answer: "While we don't directly provide hosting, we can assist with setup and recommend reliable hosting providers. We can also manage hosting on your behalf if preferred.",
                },
            ],
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    let globalIndex = 0;

    return (
        <>
            <Toaster />
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="Frequently Asked Questions - 5758 Creative Lab"
                fallbackDescription="Find answers to common questions about our services, process, pricing, and more. Get the information you need about working with 5758 Creative Lab."
                type="page"
            />

            <main className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
                {/* Hero Section */}
                <section
                    className="relative min-h-[60vh] w-full bg-[url('/assets/bg_hello_mobile.webp')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_hello_dekstop.webp')] lg:min-h-[70vh]"
                    id="faq-hero"
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
                                        <HelpCircle className="size-4 text-brand-500" />
                                        <span className="text-sm font-semibold text-brand-500 sm:text-base">Got Questions?</span>
                                    </div>

                                    <h1
                                        id="hero-heading"
                                        className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                                    >
                                        <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                                            Frequently Asked
                                        </span>{' '}
                                        Questions
                                    </h1>
                                    <p className="max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">
                                        Find answers to common questions about our services, process, pricing, and more. Can't find what you're
                                        looking for? Feel free to reach out.
                                    </p>

                                    {/* Back to Home Link */}
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full border border-brand-500/50 bg-transparent px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-500 hover:bg-brand-500/10"
                                    >
                                        <Link href={route('home')}>
                                            <ArrowLeft className="mr-2 size-4" />
                                            Back to Home
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Content */}
                <section
                    className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
                    id="faq-content"
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
                        <div className="mx-auto max-w-4xl">
                            {/* Introduction */}
                            <div className="mb-16 text-center sm:mb-20">
                                <h2 id="content-heading" className="mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                                    Everything You{' '}
                                    <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Need to Know</span>
                                </h2>
                                <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                    Browse through our most frequently asked questions. We've organized them by category to help you find what you're
                                    looking for quickly.
                                </p>
                            </div>

                            {/* FAQ Categories */}
                            <div className="space-y-10 sm:space-y-12">
                                {faqs.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="space-y-4">
                                        <h3 className="mb-6 text-xl font-bold text-brand-500 sm:text-2xl">{category.category}</h3>
                                        <div className="space-y-3">
                                            {category.questions.map((faq) => {
                                                const currentIndex = globalIndex++;
                                                const isOpen = openIndex === currentIndex;

                                                return (
                                                    <div
                                                        key={currentIndex}
                                                        className="group overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-sm transition-all duration-300 hover:border-brand-500/30"
                                                    >
                                                        <button
                                                            onClick={() => toggleFaq(currentIndex)}
                                                            className="flex w-full items-start justify-between gap-4 p-6 text-left transition-all duration-300"
                                                            aria-expanded={isOpen}
                                                        >
                                                            <span className="text-base font-semibold text-white sm:text-lg">{faq.question}</span>
                                                            <Plus
                                                                className={`size-5 shrink-0 text-brand-500 transition-transform duration-300 ${
                                                                    isOpen ? 'rotate-45' : ''
                                                                }`}
                                                            />
                                                        </button>
                                                        <div
                                                            className={`overflow-hidden transition-all duration-300 ${
                                                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                            }`}
                                                        >
                                                            <div className="border-t border-gray-800/50 px-6 pt-4 pb-6">
                                                                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Section */}
                            <div className="mt-16 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-brand-600/5 p-8 text-center backdrop-blur-sm sm:mt-20 sm:p-10 lg:p-12">
                                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-brand-500 shadow-xl shadow-brand-500/30">
                                    <MessageCircle className="size-8 text-black" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Still Have Questions?</h3>
                                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                                    Can't find the answer you're looking for? Our team is here to help. Get in touch with us and we'll respond as soon
                                    as possible.
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/25"
                                >
                                    <Link href={route('contact')}>
                                        Contact Us
                                        <MessageCircle className="ml-2 size-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

FAQ.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
