'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { submitLead, LeadState } from '@/app/actions/leads';
import { cn } from '@/lib/utils';

const SERVICES = [
    "Digital Marketing",
    "Web Development",
    "Branding & Identity",
    "Social Media Management",
    "SEO Optimization",
    "Content Creation",
    "Other"
];

const initialState: LeadState = {
    message: '',
    errors: {}
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            className="h-12 w-full rounded-full bg-brand-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25 sm:text-lg"
            disabled={pending}
        >
            {pending ? (
                <>
                    Sending... <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                </>
            ) : (
                <>
                    Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
                </>
            )}
        </Button>
    );
}

interface LeadFormProps {
    source?: string;
    onSuccess?: () => void;
    className?: string;
}

export function LeadForm({ source = "Unknown", onSuccess, className }: LeadFormProps) {
    const [state, formAction] = useActionState(submitLead, initialState);

    useEffect(() => {
        if (state?.message) {
            if (state.success) {
                toast.success(state.message);
                if (onSuccess) {
                    setTimeout(onSuccess, 2000); // Close modal after delay
                }
            } else if (!state.errors) {
                toast.error(state.message);
            }
        }
    }, [state, onSuccess]);

    if (state?.success) {
        return (
            <div className={cn(
                "flex flex-col items-center justify-center space-y-4 rounded-3xl bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12",
                className
            )}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">
                    Thanks for reaching out. We'll get back to you shortly to discuss your project.
                </p>
                <Button
                    variant="outline"
                    className="mt-4 border-white/10 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => window.location.reload()}
                >
                    Send another message
                </Button>
            </div>
        );
    }

    return (
        <form action={formAction} className={cn("relative z-10 w-full rounded-2xl bg-black/40 p-6 backdrop-blur-md border border-white/10 sm:p-8", className)}>
            <input type="hidden" name="source" value={source} />
            <div className="space-y-4">
                <div className="space-y-2">
                    <Input
                        name="name"
                        placeholder="Your Name"
                        className={cn(
                            "h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500/20",
                            state?.errors?.name && "border-red-500 focus:border-red-500"
                        )}
                    />
                    {state?.errors?.name && (
                        <p className="text-sm text-red-500">{state.errors.name[0]}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Input
                        name="whatsapp"
                        placeholder="WhatsApp Number"
                        type="tel"
                        className={cn(
                            "h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500/20",
                            state?.errors?.whatsapp && "border-red-500 focus:border-red-500"
                        )}
                    />
                    {state?.errors?.whatsapp && (
                        <p className="text-sm text-red-500">{state.errors.whatsapp[0]}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Input
                        name="email"
                        placeholder="Email Address"
                        type="email"
                        className={cn(
                            "h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500/20",
                            state?.errors?.email && "border-red-500 focus:border-red-500"
                        )}
                    />
                    {state?.errors?.email && (
                        <p className="text-sm text-red-500">{state.errors.email[0]}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Select name="service">
                        <SelectTrigger className={cn(
                            "h-12 border-white/10 bg-white/5 text-gray-500 focus:border-brand-500 focus:ring-brand-500/20",
                            state?.errors?.service && "border-red-500 focus:border-red-500"
                        )}>
                            <SelectValue placeholder="What service are you looking for?" />
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-zinc-900 text-white">
                            {SERVICES.map((service) => (
                                <SelectItem key={service} value={service} className="focus:bg-white/10 focus:text-white">
                                    {service}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {state?.errors?.service && (
                        <p className="text-sm text-red-500">{state.errors.service[0]}</p>
                    )}
                </div>

                <div className="pt-4">
                    <SubmitButton />
                </div>

                {state?.message && !state?.success && !state?.errors && (
                    <p className="text-center text-sm text-red-500">{state.message}</p>
                )}
            </div>
        </form>
    );
}
