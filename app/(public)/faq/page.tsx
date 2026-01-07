import { SeoHead } from '@/components/seo-head';
import { getPageSeo } from '@/app/actions/public-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, ChevronRight, MessageCircle, Zap, Globe, Shield, CreditCard, Mail } from 'lucide-react';
import Link from 'next/link';

export default async function FAQPage() {
    const pageSeo = await getPageSeo('faq');

    const faqCategories = [
        {
            title: 'General',
            icon: <Globe className="size-5 text-brand-500" />,
            items: [
                {
                    question: "What services does Maju Mapan offer?",
                    answer: "We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, and consulting services. Our team specializes in creating innovative solutions tailored to your business needs."
                },
                {
                    question: "How long does a typical project take?",
                    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months or more. We provide detailed timelines during the initial consultation."
                },
                {
                    question: "Do you work with startups or only established companies?",
                    answer: "We work with businesses of all sizes, from startups to enterprise-level organizations. We tailor our solutions to match your budget and growth stage."
                }
            ]
        },
        {
            title: 'Process & Workflow',
            icon: <Zap className="size-5 text-brand-500" />,
            items: [
                {
                    question: "What is your development process?",
                    answer: "Our process includes: 1) Discovery & Research, 2) Strategy & Planning, 3) Design & Prototyping, 4) Development & Testing, 5) Launch & Deployment, and 6) Ongoing Support & Maintenance."
                },
                {
                    question: "How do you handle project communication?",
                    answer: "We maintain transparent communication through regular updates, dedicated project managers, and collaborative tools. You'll receive progress reports and have direct access to our team throughout the project."
                },
                {
                    question: "Can I request changes during development?",
                    answer: "Yes, we follow an agile methodology that allows for flexibility. Minor adjustments can be accommodated, while significant scope changes may require timeline and budget adjustments."
                }
            ]
        },
        {
            title: 'Pricing & Payment',
            icon: <CreditCard className="size-5 text-brand-500" />,
            items: [
                {
                    question: "How do you structure your pricing?",
                    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Each project receives a custom quote based on requirements, complexity, and timeline."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept bank transfers, credit cards, and other electronic payment methods. Payment terms are typically structured as: 30% upfront, 40% at milestone, and 30% upon completion."
                }
            ]
        },
        {
            title: 'Technical & Legal',
            icon: <Shield className="size-5 text-brand-500" />,
            items: [
                {
                    question: "What technologies do you use?",
                    answer: "We use modern, industry-standard technologies including React, Laravel, Node.js, React Native, and cloud platforms like AWS and Google Cloud. We select the best tech stack for each project's specific needs."
                },
                {
                    question: "Will I own the source code?",
                    answer: "Yes, upon final payment, you receive full ownership of all source code, designs, and project assets. We provide comprehensive documentation and handover materials."
                },
                {
                    question: "Do you offer maintenance and support packages?",
                    answer: "Yes, we provide ongoing maintenance and support packages to ensure your digital products remain secure, updated, and performing optimally after launch."
                },
                {
                    question: "Do you provide hosting and domain services?",
                    answer: "While we don't directly provide hosting, we can assist with setup and recommend reliable hosting providers. We can also manage hosting on your behalf if preferred."
                }
            ]
        }
    ];

    return (
        <main className="bg-[#050505] min-h-screen text-white">
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="FAQ - Frequently Asked Questions | Maju Mapan Digital"
                fallbackDescription="Find answers to common questions about Maju Mapan's services, process, pricing, and technical capabilities."
            />

            {/* Cinematic Hero */}
            <header className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/bg_hello_dekstop.webp')] bg-cover bg-center opacity-40 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <div className="max-w-4xl flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-4 py-2 text-xs font-bold text-brand-500 backdrop-blur-sm mb-6 uppercase tracking-widest">
                            <HelpCircle size={14} />
                            <span>Knowledge Base</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white mb-8">
                            Got <span className="text-brand-500">Questions?</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 max-w-2xl font-medium leading-relaxed">
                            {pageSeo?.content?.hero_subtitle || "Find answers to common questions about our services, process, pricing, and more. Can't find what you're looking for? Reach out."}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Sidebar Navigation */}
                        <aside className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-32 space-y-2">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Categories</h3>
                                {faqCategories.map((cat, idx) => (
                                    <a
                                        key={idx}
                                        href={`#category-${idx}`}
                                        className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-all text-sm font-bold text-white/60 hover:text-brand-500"
                                    >
                                        <div className="flex items-center gap-3">
                                            {cat.icon}
                                            <span>{cat.title}</span>
                                        </div>
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* FAQ items */}
                        <div className="lg:w-3/4 max-w-4xl space-y-24">
                            {faqCategories.map((category, catIdx) => (
                                <div key={catIdx} id={`category-${catIdx}`} className="scroll-mt-32">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="size-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500">
                                            {category.icon}
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tight text-white">{category.title}</h2>
                                    </div>

                                    <Accordion type="multiple" className="space-y-4">
                                        {category.items.map((item, itemIdx) => (
                                            <AccordionItem
                                                key={itemIdx}
                                                value={`item-${catIdx}-${itemIdx}`}
                                                className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl px-6 py-2 hover:bg-white/[0.04] transition-all overflow-hidden"
                                            >
                                                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline text-white/90 hover:text-brand-500 py-4">
                                                    {item.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-gray-400 text-lg leading-relaxed pt-2 pb-6 font-medium">
                                                    {item.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            ))}

                            {/* Still have questions */}
                            <div className="pt-20">
                                <div className="p-10 md:p-16 rounded-[2.5rem] border border-brand-500/20 bg-brand-500/5 relative overflow-hidden group">
                                    <div className="absolute -top-24 -right-24 size-64 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-700" />

                                    <div className="relative z-10 text-center flex flex-col items-center">
                                        <div className="size-16 rounded-full bg-brand-500 flex items-center justify-center text-black mb-8 shadow-[0_0_30px_-5px_theme(colors.brand.500)]">
                                            <MessageCircle size={32} />
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                                            Still Have Questions?
                                        </h3>
                                        <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mb-12">
                                            Can&apos;t find the answer you&apos;re looking for? Our team is here to help you navigate through any queries.
                                        </p>
                                        <Link
                                            href="/contact-us"
                                            className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-brand-500 transition-all shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-3"
                                        >
                                            <Mail size={20} />
                                            Get In Touch
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
