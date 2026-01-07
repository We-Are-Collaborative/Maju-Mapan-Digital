import { SeoHead } from '@/components/seo-head';
import { Shield, ChevronRight, Lock, Eye, FileText, Globe, Mail, Info, Calendar } from 'lucide-react';
import { getPageSeo } from '@/app/actions/public-data';
import Link from 'next/link';

export default async function PrivacyPolicyPage() {
    const pageSeo = await getPageSeo('privacy-policy');

    const sections = [
        {
            id: 'collection',
            title: 'Information We Collect',
            icon: <Eye className="size-6 text-brand-500" />,
            content: "When you contact us through our website, we collect the following personal information: (a) Contact Information: Full name, work email address, phone number; (b) Professional Information: Company name, job position, and preferred meeting dates; (c) Business Information: Your top marketing objectives and project requirements; (d) Technical Information: IP address, browser type, device information, and cookies for website functionality and analytics; (e) Security Data: Google reCAPTCHA tokens to prevent spam and abuse. We only collect information that is necessary for providing our services and communicating with you effectively."
        },
        {
            id: 'legal-basis',
            title: 'Legal Basis and How We Use Your Information',
            icon: <FileText className="size-6 text-brand-500" />,
            content: "We process your personal data under the following legal bases: (a) Consent: When you submit our contact form, you provide explicit consent for us to process your information; (b) Legitimate Interests: To respond to your inquiries, provide requested information, and improve our services; (c) Contractual Necessity: To discuss and potentially establish a business relationship. We use your information to: respond to your inquiries and schedule consultations; send you relevant information about our services; analyze website usage to improve user experience; protect against spam, fraud, and security threats; and comply with legal obligations."
        },
        {
            id: 'sharing',
            title: 'Information Sharing and Third Parties',
            icon: <Globe className="size-6 text-brand-500" />,
            content: "We respect your privacy and do not sell, rent, or trade your personal information. We may share your data only in the following limited circumstances: (a) Service Providers: We use Google reCAPTCHA for form security. Google processes reCAPTCHA data under their Privacy Policy and GDPR-compliant terms; (b) Legal Requirements: We may disclose information if required by law, court order, or governmental authority, or to protect our legal rights; (c) Business Transfers: In the event of a merger or acquisition, your data may be transferred to the new entity, subject to the same privacy protections."
        },
        {
            id: 'security',
            title: 'Data Security and Retention',
            icon: <Lock className="size-6 text-brand-500" />,
            content: "We implement robust security measures including: SSL/TLS encryption for data transmission; secure server infrastructure with regular security updates; access controls limiting data access to authorized personnel only; and backup procedures to prevent data loss. We retain your personal data only as long as necessary: Active inquiries are retained for 2 years from last contact; completed project data is retained for 7 years for legal and tax purposes; marketing consent data is retained until you withdraw consent."
        },
        {
            id: 'rights',
            title: 'Your Rights Under GDPR',
            icon: <Shield className="size-6 text-brand-500" />,
            content: "You have the following rights regarding your personal data: (a) Right to Access: Request copies of your personal data we hold; (b) Right to Rectification: Correct inaccurate or incomplete information; (c) Right to Erasure: Request deletion of your data; (d) Right to Restrict Processing: Limit how we use your data; (e) Right to Withdraw Consent: Withdraw consent at any time without affecting prior processing; (f) Right to Lodge a Complaint: File a complaint with your local data protection authority."
        },
        {
            id: 'cookies',
            title: 'Cookies and Tracking',
            icon: <Info className="size-6 text-brand-500" />,
            content: "We use cookies and similar technologies to enhance your browsing experience: (a) Essential Cookies: Required for website functionality and security; (b) Analytics Cookies: Help us understand how visitors use our website; (c) Preference Cookies: Remember your settings and preferences. You can control cookies through your browser settings. Note that disabling essential cookies may affect website functionality."
        }
    ];

    return (
        <main className="bg-[#050505] min-h-screen text-white">
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="Privacy Policy | Maju Mapan Digital"
                fallbackDescription="Learn how Maju Mapan collects, uses, and protects your personal information. Our commitment to your privacy and data security."
            />

            {/* Cinematic Hero */}
            <header className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/bg_hello_dekstop.webp')] bg-cover bg-center opacity-40 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <div className="max-w-4xl flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-4 py-2 text-xs font-bold text-brand-500 backdrop-blur-sm mb-6 uppercase tracking-widest">
                            <Shield size={14} />
                            <span>Legal & Privacy</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white mb-8">
                            Privacy <span className="text-brand-500">Policy</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 max-w-2xl font-medium leading-relaxed">
                            {pageSeo?.content?.hero_subtitle || "We are committed to protecting your privacy and ensuring the security of your personal information in compliance with GDPR and applicable laws."}
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
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Sections</h3>
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-all text-sm font-bold text-white/60 hover:text-brand-500"
                                    >
                                        <span>{section.title}</span>
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* Detailed Content */}
                        <div className="lg:w-3/4 max-w-4xl space-y-20">

                            {/* Introduction */}
                            <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Shield size={120} className="text-brand-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Calendar className="text-brand-500" size={20} />
                                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                                            Last Updated: October 7, 2025
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How We Protect Your Data</h2>
                                    <p className="text-lg text-gray-400 font-medium leading-relaxed">
                                        At Maju Mapan, we are committed to protecting your personal data and respecting your privacy rights.
                                        This Privacy Policy explains how we collect, use, store, and protect your information in accordance with
                                        the General Data Protection Regulation (GDPR), Indonesian Law No. 27 of 2022, and other applicable privacy laws.
                                    </p>
                                </div>
                            </div>

                            {/* Dynamic Sections */}
                            <div className="space-y-16">
                                {sections.map((section) => (
                                    <div key={section.id} id={section.id} className="scroll-mt-32 group">
                                        <div className="flex items-start gap-6">
                                            <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 group-hover:border-brand-500/50 transition-all">
                                                {section.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-500 transition-colors">
                                                    {section.title}
                                                </h3>
                                                <p className="text-gray-400 font-medium leading-[1.8] text-lg">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Footer */}
                            <div className="pt-20 border-t border-white/10">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-3xl bg-brand-500">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter leading-none">
                                            Questions about Privacy?
                                        </h3>
                                        <p className="text-black/80 font-bold text-sm">
                                            Our Data Protection Officer is here to help you.
                                        </p>
                                    </div>
                                    <Link
                                        href="mailto:hello@5758creativelab.com"
                                        className="px-8 py-4 bg-black text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl inline-flex items-center gap-2"
                                    >
                                        <Mail size={18} />
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
