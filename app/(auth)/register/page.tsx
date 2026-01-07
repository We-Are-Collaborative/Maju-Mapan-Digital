'use client';

import { useActionState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { registerUser } from '@/app/actions/auth';
// import { toast } from 'sonner'; 

import { Suspense } from 'react';

function RegisterContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    // Using useActionState (new hook in React 19/Next 15+, for older use useFormState)
    // Assuming Next 16 uses React 19, useActionState is likely available or we fallback to custom.
    // Actually, let's use a standard wrapper to be safe as useActionState might have different import in canary.
    // Or just simple form submission for now to avoid React version confusion.
    // Moving to standard onSubmit handler calling the action.

    // const [state, formAction] = useActionState(registerUser, { success: false, message: '' }); 

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        // Call server action
        const res = await registerUser(null, formData);

        if (res.success) {
            // toast.success(res.message);
            router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        } else {
            // toast.error(res.message);
            alert(res.message); // Simple fallback
        }
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Account</h1>
                <p className="text-slate-500">Join us to access the dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="userType" className="text-slate-700">I am a...</Label>
                    <Select name="userType" defaultValue="candidate">
                        <SelectTrigger className="w-full bg-slate-50 border-slate-200">
                            <SelectValue placeholder="Select registration type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="candidate">Candidate (Job Seeker)</SelectItem>
                            <SelectItem value="client">Client (Hiring/Project)</SelectItem>
                            <SelectItem value="employee">Employee</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-indigo-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-indigo-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        minLength={6}
                        className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-indigo-500"
                    />
                </div>

                <Button type="submit" className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-500/20">
                    Create Account
                </Button>
            </form>

            <div className="text-center text-sm text-slate-500 mt-6">
                Already have an account?{' '}
                <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline">
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default function RegisterPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center p-8"><Loader2 className="h-8 w-8 animate-spin text-indigo-600" /></div>}>
            <RegisterContent />
        </Suspense>
    );
}
