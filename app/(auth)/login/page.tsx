'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
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

import { Suspense } from 'react';

function LoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    // Parse callbackUrl to ensure it's relative
    let initialCallbackUrl = searchParams.get('callbackUrl') || '/';
    if (initialCallbackUrl.startsWith('http')) {
        try {
            const url = new URL(initialCallbackUrl);
            initialCallbackUrl = url.pathname + url.search;
        } catch (e) {
            initialCallbackUrl = '/';
        }
    }
    const callbackUrl = initialCallbackUrl;

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const userType = formData.get('userType') as string;

        try {
            const res = await signIn('credentials', {
                email,
                password,
                userType,
                redirect: false,
            });

            if (res?.error) {
                setError('Invalid credentials');
            } else {
                // Redirect logic based on role is handled in auth.ts callbacks theoretically, 
                // but signIn redirect:false means we must handle routing here or use the response.
                // However, auth.ts pages config just says signIn: '/login'.
                // Verification step: Check where to redirect.
                // Employee -> /admin, Client -> /client, Candidate -> /candidate
                // But better to just blindly go to callbackUrl or a default if not set.
                // Actually, let's just refresh/push callbackUrl for now, assuming middleware handles the rest or landing page directs.
                // Wait, user requested: "route the users accordingly to their respective directories."
                // So I should force redirect here based on userType if callbackUrl is just root.

                if (callbackUrl === '/' || callbackUrl === '/login') {
                    if (userType === 'employee') router.push('/admin');
                    else if (userType === 'candidate') router.push('/candidate/dashboard');
                    else if (userType === 'client') router.push('/client/dashboard');
                    else router.push('/admin');
                } else {
                    router.push(callbackUrl);
                }
                router.refresh();
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">Sign In</h1>
                <p className="text-slate-400">Enter your credentials to access the admin panel</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="userType" className="text-slate-300">Account Type</Label>
                    <Select name="userType" defaultValue="employee">
                        <SelectTrigger className="w-full bg-slate-950 border-slate-800 text-white">
                            <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="employee">Employee</SelectItem>
                            <SelectItem value="candidate">Candidate</SelectItem>
                            <SelectItem value="client">Client</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="admin@example.com"
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-emerald-500"
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-slate-300">Password</Label>
                        <Link href="#" className="text-xs text-emerald-400 hover:text-emerald-300 font-medium">Forgot password?</Link>
                    </div>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="bg-slate-950 border-slate-800 text-white focus-visible:ring-emerald-500"
                    />
                </div>

                {error && <div className="text-sm text-rose-400 bg-rose-950/50 border border-rose-900/50 p-3 rounded-lg text-center">{error}</div>}

                <Button type="submit" className="w-full h-11 bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-lg shadow-emerald-500/20" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Log In'}
                </Button>
            </form>

            <div className="text-center text-sm text-slate-400 mt-6">
                Don&apos;t have an account?{' '}
                <Link href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-medium text-emerald-400 hover:text-emerald-300 hover:underline">
                    Apply for Access
                </Link>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center p-8"><Loader2 className="h-8 w-8 animate-spin text-indigo-600" /></div>}>
            <LoginContent />
        </Suspense>
    );
}
