import InputError from '@/components/input-error';
import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Toaster } from '@/components/ui/sonner';
import { PublicLayout } from '@/layouts/public-layout';
import { FormResponse } from '@/lib/constant';
import { Page } from '@/types/page';
import { router, useForm, usePage } from '@inertiajs/react';
import { format } from 'date-fns';
import { ArrowRight, CalendarIcon, Loader2 } from 'lucide-react';
import { ReactNode } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    date: Date;
    marketing_objective: string[];
    'g-recaptcha-response': string;
};

export default function Contact({ pageSeo }: { pageSeo?: Page }) {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const {
        props: { errors, contactSettings },
    } = usePage<{ errors: Record<string, string>; contactSettings?: Record<string, string> }>();
    const { data, setData, processing, post, transform } = useForm<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        date: new Date(),
        marketing_objective: [],
        'g-recaptcha-response': '',
    });

    const marketingOptions = (
        contactSettings?.contact_marketing_objectives || 'E-Commerce, Communication, Conversion Rate, SEO/SEM, Performance Marketing'
    )
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Client-side validation for marketing objectives
        if (!Array.isArray(data.marketing_objective) || data.marketing_objective.length === 0) {
            alert('Please select at least one marketing objective.');
            return;
        }

        if (!executeRecaptcha) {
            console.error('reCAPTCHA not available');
            return;
        }

        const token = await executeRecaptcha('submit');
        if (!token) {
            console.error('Failed to get reCAPTCHA token');
            return;
        }

        // Prepare the data for submission
        const submissionData = {
            ...data,
            'g-recaptcha-response': token,
            marketing_objective: data.marketing_objective.join(', '),
            date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date, // Format date as YYYY-MM-DD
        };

        // Debug: Log the submission data
        console.log('Submitting data:', submissionData);
        console.log('Token length:', token.length);
        console.log('Marketing objectives joined:', submissionData.marketing_objective);

        // Use Inertia's router to send the data directly
        router.post(route('inquiry'), submissionData, {
            ...FormResponse,
            onSuccess: () => {
                window.location.href = route('thank-you');
            },
        });
    };

    return (
        <>
            <Toaster />
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle="Contact Us - 5758 Creative Lab"
                fallbackDescription="Get in touch with 5758 Creative Lab. Let's discuss your digital marketing and creative needs."
                type="page"
            />
            <main className="relative min-h-screen overflow-hidden pt-16 sm:pt-20 lg:pt-0">
                {/* Hero Section */}
                <section
                    className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
                    aria-label="Contact us section"
                >
                    {/* Background Effects */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#2FDDAD]/20 blur-[80px] sm:size-[28rem] sm:blur-[100px] lg:size-[36rem] lg:blur-[120px] xl:size-[42rem]" />
                        <div className="absolute top-1/3 right-1/4 size-[16rem] translate-x-1/4 -translate-y-1/2 rounded-full bg-[#2FDDAD]/10 blur-[60px] sm:size-[24rem] sm:blur-[80px] lg:size-[32rem] lg:blur-[100px]" />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-2xl">
                            {/* Header */}
                            <div className="mb-8 text-center sm:mb-12">
                                <h1 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
                                    {pageSeo?.content?.contact_title || "Slide Into Our Inbox — We Don't Bite!"}
                                </h1>
                                <p className="text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                    {pageSeo?.content?.contact_subtitle || "Ready to transform your brand? Let's start the conversation."}
                                </p>
                            </div>

                            {/* Contact Form */}
                            <form
                                onSubmit={onSubmit}
                                className="space-y-6 rounded-2xl border border-gray-600/50 bg-gray-900/30 p-6 backdrop-blur-sm sm:p-8 lg:p-10"
                            >
                                {errors['g-recaptcha-response'] && <InputError message={errors['g-recaptcha-response']} />}
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="flex flex-col gap-2">
                                        <Label className="text-sm font-medium text-white sm:text-base">
                                            {pageSeo?.content?.contact_name_label || 'Full Name'} <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            name="name"
                                            required
                                            className="h-10 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-brand-500 sm:h-12"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label className="text-sm font-medium text-white sm:text-base">
                                            {pageSeo?.content?.contact_email_label || 'Work Email'} <span className="text-red-500">*</span>
                                            <span className="ml-1 text-xs text-gray-400">(company email preferred)</span>
                                        </Label>
                                        <Input
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            name="email"
                                            type="email"
                                            required
                                            className="h-10 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-brand-500 sm:h-12"
                                            placeholder="your.email@company.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-2">
                                    <Label className="text-sm font-medium text-white sm:text-base">
                                        {pageSeo?.content?.contact_phone_label || 'Phone Number'}{' '}
                                        <span className="text-xs text-gray-400">(recommended)</span>
                                    </Label>
                                    <Input
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        name="phone"
                                        type="tel"
                                        className="h-10 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-brand-500 sm:h-12"
                                        placeholder="+62 812 3456 7890"
                                    />
                                </div>

                                {/* Company and Position Row */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="flex flex-col gap-2">
                                        <Label className="text-sm font-medium text-white sm:text-base">
                                            Company Name <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            value={data.company}
                                            onChange={(e) => setData('company', e.target.value)}
                                            name="company"
                                            required
                                            className="h-10 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-brand-500 sm:h-12"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label className="text-sm font-medium text-white sm:text-base">
                                            Position <span className="text-xs text-gray-400">(Optional)</span>
                                        </Label>
                                        <Input
                                            value={data.position}
                                            onChange={(e) => setData('position', e.target.value)}
                                            name="position"
                                            className="h-10 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-brand-500 sm:h-12"
                                            placeholder="Your job title"
                                        />
                                    </div>
                                </div>

                                {/* Marketing Objectives */}
                                <div className="flex flex-col gap-3">
                                    <Label className="text-sm font-medium text-white sm:text-base">
                                        What are your top 3 marketing objectives? <span className="text-red-500">*</span>
                                        <span className="ml-2 text-xs text-gray-400">
                                            ({Array.isArray(data.marketing_objective) ? data.marketing_objective.length : 0}/3 selected)
                                        </span>
                                    </Label>
                                    {errors.marketing_objective && <InputError message={errors.marketing_objective} />}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {marketingOptions.map((objective) => (
                                            <div key={objective} className="flex items-center space-x-3">
                                                <Checkbox
                                                    id={objective}
                                                    checked={Array.isArray(data.marketing_objective) && data.marketing_objective.includes(objective)}
                                                    disabled={
                                                        Array.isArray(data.marketing_objective) &&
                                                        !data.marketing_objective.includes(objective) &&
                                                        data.marketing_objective.length >= 3
                                                    }
                                                    onCheckedChange={(checked) => {
                                                        const currentObjectives = Array.isArray(data.marketing_objective)
                                                            ? data.marketing_objective
                                                            : [];
                                                        if (checked && currentObjectives.length < 3) {
                                                            setData('marketing_objective', [...currentObjectives, objective]);
                                                        } else if (!checked) {
                                                            setData(
                                                                'marketing_objective',
                                                                currentObjectives.filter((item) => item !== objective),
                                                            );
                                                        }
                                                    }}
                                                    className="border-gray-500 text-brand-400 focus:ring-brand-400"
                                                />
                                                <Label htmlFor={objective} className="cursor-pointer text-sm font-normal text-gray-300">
                                                    {objective}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Calendar Date */}
                                <div className="flex flex-col gap-2">
                                    <Label className="text-sm font-medium text-white sm:text-base">
                                        Preferred Meeting Date <span className="text-red-500">*</span>
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                data-empty={!data.date}
                                                className="h-10 w-full justify-start border-gray-600 bg-gray-800/50 text-left font-normal text-white hover:bg-gray-700/50 focus-visible:ring-1 focus-visible:ring-brand-500 data-[empty=true]:text-gray-400 sm:h-12"
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {data.date instanceof Date ? format(data.date, 'PPP') : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto border-gray-600 bg-gray-800 p-0">
                                            <Calendar
                                                className="w-full bg-gray-800 text-white [&_.rdp-button]:text-white [&_.rdp-button:hover]:bg-gray-700 [&_.rdp-day_selected]:bg-brand-500 [&_.rdp-day_selected]:text-black [&_.rdp-day_today]:bg-gray-700 [&_.rdp-head_cell]:text-gray-400"
                                                mode="single"
                                                selected={data.date}
                                                onSelect={(date) => setData('date', date)}
                                                disabled={(date) => date < new Date()}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <Button
                                        disabled={processing}
                                        className="h-12 w-full rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:text-lg"
                                    >
                                        {processing && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                                        {pageSeo?.content?.contact_submit_text || "Let's Talk"}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

Contact.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
