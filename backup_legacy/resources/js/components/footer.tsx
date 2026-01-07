import { ArrowRight, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

import { SharedData } from '@/types';
import { SiFacebook, SiInstagram, SiTiktok } from '@icons-pack/react-simple-icons';
import { Link, usePage } from '@inertiajs/react';
import { Button } from './ui/button';

export const Footer = () => {
    const { contactSettings, siteSettings } = usePage<SharedData>().props;
    return (
        <footer className="bg-black pt-8 pb-6 text-white sm:pt-12 sm:pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col items-start justify-start gap-4 md:gap-6 lg:col-span-5 xl:col-span-4">
                        <img src="/assets/logo.svg" className="h-12 w-auto object-contain sm:h-14 lg:h-16" alt="Company Logo" />
                        <h2 className="text-base font-semibold sm:text-lg">{siteSettings.site_name || 'PT Sadulur Sinareng Raharja'}</h2>
                        <p className="text-sm leading-relaxed text-gray-300 sm:text-base lg:text-sm xl:text-base">
                            {contactSettings.contact_address ||
                                '18 Parc Place SCBD, Jl. Jend. Sudirman kav 52-53 Tower C Lantai 3, Senayan, Kebayoran Baru, Jakarta 12190'}
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-4 md:gap-6 lg:col-span-4 xl:col-span-4">
                        <h2 className="text-base font-semibold sm:text-lg">Social Media</h2>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
                            {contactSettings.instagram_link && contactSettings.instagram_text && (
                                <Link
                                    href={contactSettings.instagram_link}
                                    className="flex items-center gap-2 text-sm transition-colors hover:text-gray-300 sm:text-base lg:text-sm"
                                    target="_blank"
                                >
                                    <SiInstagram className="h-4 w-4 flex-shrink-0" />
                                    <span>{contactSettings.instagram_text}</span>
                                </Link>
                            )}
                            {contactSettings.tiktok_link && contactSettings.tiktok_text && (
                                <Link
                                    href={contactSettings.tiktok_link}
                                    className="flex items-center gap-2 text-sm transition-colors hover:text-gray-300 sm:text-base lg:text-sm"
                                    target="_blank"
                                >
                                    <SiTiktok className="h-4 w-4 flex-shrink-0" />
                                    <span>{contactSettings.tiktok_text}</span>
                                </Link>
                            )}
                            {contactSettings.linkedin_link && contactSettings.linkedin_text && (
                                <Link
                                    href={contactSettings.linkedin_link}
                                    className="flex items-center gap-2 text-sm transition-colors hover:text-gray-300 sm:text-base lg:text-sm"
                                    target="_blank"
                                >
                                    <Linkedin className="h-4 w-4 flex-shrink-0" />
                                    <span>{contactSettings.linkedin_text}</span>
                                </Link>
                            )}
                            {contactSettings.facebook_link && contactSettings.facebook_text && (
                                <Link
                                    href={contactSettings.facebook_link}
                                    className="flex items-center gap-2 text-sm transition-colors hover:text-gray-300 sm:text-base lg:text-sm"
                                    target="_blank"
                                >
                                    <SiFacebook className="h-4 w-4 flex-shrink-0" />
                                    <span>{contactSettings.facebook_text}</span>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-6 lg:col-span-3 xl:col-span-4">
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h2 className="text-base font-semibold sm:text-lg lg:sr-only xl:not-sr-only">Contact</h2>
                            <div className="flex flex-col gap-2">
                                {contactSettings.email_link && contactSettings.email_text && (
                                    <Link
                                        href={contactSettings.email_link}
                                        className="flex items-center gap-2 text-sm transition-colors hover:text-gray-300 sm:text-base lg:text-sm"
                                    >
                                        <Mail className="h-4 w-4 flex-shrink-0" />
                                        <span>{contactSettings.email_text}</span>
                                    </Link>
                                )}
                                {contactSettings.contact_phone && (
                                    <div className="flex items-center gap-2 text-sm sm:text-base lg:text-sm">
                                        <Phone className="h-4 w-4 flex-shrink-0" />
                                        <span>{contactSettings.contact_phone}</span>
                                    </div>
                                )}
                                {contactSettings.whatsapp_link && contactSettings.whatsapp_text && (
                                    <Link
                                        href={contactSettings.whatsapp_link}
                                        className="flex items-center gap-2 text-sm transition-colors hover:text-gray-300 sm:text-base lg:text-sm"
                                        target="_blank"
                                    >
                                        <MessageCircle className="h-4 w-4 flex-shrink-0" />
                                        <span>{contactSettings.whatsapp_text}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <Button className="w-full rounded-full bg-brand-500 text-black transition-colors hover:bg-brand-500/80 sm:w-auto lg:w-full xl:w-auto">
                            Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="mt-8 space-y-4 sm:mt-12">
                    <hr className="border-gray-600" />
                    <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-2">
                        <span className="text-xs text-gray-400 sm:text-sm">
                            Copyright © {siteSettings.site_name || 'PT Sadulur Sinareng Raharja'} {new Date().getFullYear()} All rights reserved -
                            Indonesia
                        </span>
                        <span className="hidden text-xs text-gray-600 sm:inline sm:text-sm">·</span>
                        <Link
                            href={route('privacy-policy')}
                            className="text-xs text-gray-400 transition-colors hover:text-brand-500 hover:underline sm:text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <span className="hidden text-xs text-gray-600 sm:inline sm:text-sm">·</span>
                        <Link href={route('faq')} className="text-xs text-gray-400 transition-colors hover:text-brand-500 hover:underline sm:text-sm">
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
