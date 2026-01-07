'use client';
import NextLink from 'next/link';
import { usePathname, useRouter as useNextRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Link = NextLink;

export const usePage = <T = any>() => {
    const pathname = usePathname();
    return {
        props: {
            auth: {
                user: {
                    id: 1,
                    name: 'Guest',
                    email: 'guest@example.com',
                    email_verified_at: null,
                    created_at: '',
                    updated_at: '',
                    avatar: '/assets/logo.svg' // Mock avatar
                }
            },
            jetstream: { managesProfilePhotos: false },
            errorBags: {},
            errors: {},
            sidebarOpen: true, // Mock sidebar state
            siteSettings: {
                siteName: 'Maju Mapan Digital',
            },
            contactSettings: {
                contact_address: '18 Parc Place SCBD, Jl. Jend. Sudirman kav 52-53 Tower C Lantai 3, Senayan, Kebayoran Baru, Jakarta 12190',
                instagram_link: 'https://instagram.com/majumapan',
                instagram_text: '@majumapan',
                email_link: 'mailto:hello@majumapan.id',
                email_text: 'hello@majumapan.id',
                contact_phone: '+62 812 3456 7890',
                tiktok_link: 'https://tiktok.com',
                tiktok_text: '@majumapan',
                linkedin_link: 'https://linkedin.com',
                linkedin_text: 'Maju Mapan Digital',
                facebook_link: 'https://facebook.com',
                facebook_text: 'Maju Mapan Digital',
                whatsapp_link: 'https://wa.me/6281234567890',
                whatsapp_text: '+62 812 3456 7890',
                social_media: [
                    { platform: 'Instagram', url: 'https://instagram.com/majumapan', icon: 'Instagram' },
                    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
                    { platform: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
                    { platform: 'TikTok', url: 'https://tiktok.com', icon: 'Twitter' } // Using Twitter icon as placeholder for TikTok if generic
                ]
            }
        },
        url: pathname,
        component: 'Home',
        version: '1.0'
    };
};

export const useForm = <T = any>(initialValues: T = {} as T) => {
    const [data, setData] = useState<T>(initialValues);
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const submit = (method: string, url: string, options: any = {}) => {
        setProcessing(true);
        console.log(`Mock form submission: ${method} ${url}`, data);
        setTimeout(() => {
            setProcessing(false);
            if (options.onSuccess) options.onSuccess();
        }, 1000);
    };

    return {
        data,
        setData: (keyOrData: any, value?: any) => {
            if (typeof keyOrData === 'string') {
                setData((prev: any) => ({ ...prev, [keyOrData]: value }));
            } else if (typeof keyOrData === 'function') {
                setData((prev: any) => keyOrData(prev));
            } else {
                setData(keyOrData);
            }
        },
        post: (url: string, options: any = {}) => submit('post', url, options),
        put: (url: string, options: any = {}) => submit('put', url, options),
        patch: (url: string, options: any = {}) => submit('patch', url, options),
        delete: (url: string, options: any = {}) => submit('delete', url, options),
        processing,
        errors,
        reset: () => setData(initialValues),
        clearErrors: () => setErrors({}),
        setError: (field: string, message: string) => setErrors((prev: any) => ({ ...prev, [field]: message })),
    };
};

export const Head = ({ title }: { title?: string, children?: any }) => {
    useEffect(() => {
        if (title) document.title = title;
    }, [title]);
    return null;
};

export const router = {
    visit: (url: string, options: any = {}) => window.location.href = url,
    get: (url: string, data: any = {}, options: any = {}) => {
        console.log('router.get', url, data);
        window.location.href = url; // Simple redirect for now
    },
    post: (url: string, data: any = {}, options: any = {}) => console.log('router.post', url, data),
    put: (url: string, data: any = {}, options: any = {}) => console.log('router.put', url, data),
    delete: (url: string, options: any = {}) => console.log('router.delete', url),
    reload: (options: any = {}) => window.location.reload(),
};
