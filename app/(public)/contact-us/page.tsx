"use client";

import { DynamicIcon } from '@/components/dynamic-icon';
import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, usePage } from '@/lib/inertia-adapter';
import { Page } from '@/types/page';
import { Loader2, MessageCircle, Send } from 'lucide-react';
import { FormEventHandler, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'sonner';
import { mockPageSeo } from '@/lib/mock-data';
import { ContactForm } from '@/components/contact-form';
import { getPageSeo } from '@/app/actions/public-data';
import { BrandedHero } from '@/components/ui/branded-hero';

export default function ContactUs() {
    const { contactSettings } = usePage<any>().props;
    const pageSeo: Page = mockPageSeo as Page;

    const { executeRecaptcha } = useGoogleReCaptcha();

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        captcha_token: '',
    });

    const submit: FormEventHandler = useCallback(
        async (e) => {
            e.preventDefault();

            if (!executeRecaptcha) {
                console.log('Execute recaptcha not yet available');
                return;
            }

            const token = await executeRecaptcha('contact_form_submit');
            setData('captcha_token', token);

            post(('/contact-us'), {
                onSuccess: () => {
                    toast.success('Message sent successfully!');
                    reset();
                },
                onError: () => {
                    toast.error('Failed to send message. Please try again.');
                },
            });
        },
        [executeRecaptcha, post, setData, reset]
    );

    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Maju Mapan',
        description: pageSeo?.seoConfig?.description || 'Get in touch with Maju Mapan',
        mainEntity: {
            '@type': 'Organization',
            name: 'Maju Mapan Digital',
            telephone: contactSettings?.contact_phone,
            email: contactSettings?.email_text,
            address: {
                '@type': 'PostalAddress',
                streetAddress: contactSettings?.contact_address,
                addressCountry: 'ID',
            },
        },
    };

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seoConfig}
                fallbackTitle="Contact Us | Maju Mapan Digital"
                fallbackDescription="Get in touch with Maju Mapan. Let's discuss your next project."
            />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

            {/* Hero Section */}
            <BrandedHero
                badgeIcon={MessageCircle}
                badgeText="Get in Touch"
                title={
                    <>
                        Let's Create Something <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Amazing</span>
                    </>
                }
                subtitle="Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible."
                backgroundImage="/assets/bg_hello_dekstop.webp"
            />

            <div className="relative pb-16 lg:pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 pt-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-brand-500/10 p-3 text-brand-500">
                                        <DynamicIcon iconName="MapPin" className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                                        <p className="mt-1 text-gray-400">{contactSettings?.contact_address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-brand-500/10 p-3 text-brand-500">
                                        <DynamicIcon iconName="Mail" className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Email Us</h3>
                                        <a
                                            href={contactSettings?.email_link}
                                            className="mt-1 block text-gray-400 transition-colors hover:text-brand-500"
                                        >
                                            {contactSettings?.email_text}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-brand-500/10 p-3 text-brand-500">
                                        <DynamicIcon iconName="Phone" className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Call Us</h3>
                                        <a
                                            href={`tel:${contactSettings?.contact_phone}`}
                                            className="mt-1 block text-gray-400 transition-colors hover:text-brand-500"
                                        >
                                            {contactSettings?.contact_phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                                <div className="flex gap-4">
                                    {contactSettings?.social_media?.map((social: any, index: number) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex size-12 items-center justify-center rounded-full bg-gray-900 transition-colors hover:bg-brand-500"
                                            aria-label={`Follow us on ${social.platform}`}
                                        >
                                            <DynamicIcon
                                                iconName={social.icon}
                                                className="size-5 text-gray-400 transition-colors group-hover:text-black"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm sm:p-8 lg:p-12">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Your name"
                                            className="border-gray-800 bg-black/50 focus:border-brand-500"
                                        />
                                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="john@example.com"
                                            className="border-gray-800 bg-black/50 focus:border-brand-500"
                                        />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone (Optional)</Label>
                                        <Input
                                            id="phone"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            placeholder="+62..."
                                            className="border-gray-800 bg-black/50 focus:border-brand-500"
                                        />
                                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            placeholder="Project inquiry"
                                            className="border-gray-800 bg-black/50 focus:border-brand-500"
                                        />
                                        {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder="Tell us about your project..."
                                        className="min-h-[150px] border-gray-800 bg-black/50 focus:border-brand-500"
                                    />
                                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-brand-500 text-black hover:bg-brand-400"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <Loader2 className="mr-2 size-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 size-4" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-center text-xs text-gray-500">
                                    This site is protected by reCAPTCHA and the Google{' '}
                                    <a href="https://policies.google.com/privacy" className="underline hover:text-brand-500">
                                        Privacy Policy
                                    </a>{' '}
                                    and{' '}
                                    <a href="https://policies.google.com/terms" className="underline hover:text-brand-500">
                                        Terms of Service
                                    </a>{' '}
                                    apply.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
