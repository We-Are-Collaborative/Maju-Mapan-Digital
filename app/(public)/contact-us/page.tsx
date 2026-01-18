"use client";

import { DynamicIcon } from '@/components/dynamic-icon';
import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePage } from '@/lib/inertia-adapter'; // Still needed for settings/props if they come from there
import { Page } from '@/types/page';
import { Loader2, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { FormEventHandler, useCallback, useActionState, useEffect, useState, useRef, startTransition } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'sonner';
import { mockPageSeo } from '@/lib/mock-data';
import { ContactForm } from '@/components/contact-form';
import { getPageSeo } from '@/app/actions/public-data';
import { BrandedHero } from '@/components/ui/branded-hero';
import { submitLead, LeadState } from '@/app/actions/leads';

const initialState: LeadState = {
    success: false,
    message: '',
    errors: {}
};

export default function ContactUs() {
    const { contactSettings } = usePage<any>().props;
    const pageSeo: Page = mockPageSeo as Page;
    const [state, formAction] = useActionState(submitLead, initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const { executeRecaptcha } = useGoogleReCaptcha();

    useEffect(() => {
        if (state?.success) {
            toast.success(state.message || 'Message sent successfully!');
            formRef.current?.reset();
        } else if (state?.message && !state?.success) {
            toast.error(state.message);
        }
    }, [state]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            if (!executeRecaptcha) {
                toast.error('ReCaptcha not ready. Please try again.');
                setIsSubmitting(false);
                return;
            }

            const token = await executeRecaptcha('contact_form_submit');
            formData.append('captcha_token', token);
            formData.append('source', 'Contact Page');

            // Dispatch form action manually to include captcha token
            startTransition(() => {
                formAction(formData);
            });
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            {state?.success ? (
                                <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-500/20 text-brand-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                        <p className="mt-2 text-gray-400">
                                            Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
                                        </p>
                                    </div>
                                    <Button
                                        onClick={() => window.location.reload()}
                                        variant="outline"
                                        className="border-gray-800 text-white hover:bg-white/5"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="Your name"
                                                className="border-gray-800 bg-black/50 focus:border-brand-500"
                                            />
                                            {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="border-gray-800 bg-black/50 focus:border-brand-500"
                                            />
                                            {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
                                        </div>
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="whatsapp">Phone (Optional)</Label>
                                            <Input
                                                id="whatsapp"
                                                name="whatsapp"
                                                placeholder="+62..."
                                                className="border-gray-800 bg-black/50 focus:border-brand-500"
                                            />
                                            {state?.errors?.whatsapp && <p className="text-sm text-red-500">{state.errors.whatsapp[0]}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="Project inquiry"
                                                className="border-gray-800 bg-black/50 focus:border-brand-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            className="min-h-[150px] border-gray-800 bg-black/50 focus:border-brand-500"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-brand-500 text-black hover:bg-brand-400"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
