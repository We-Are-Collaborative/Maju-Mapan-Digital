'use client';

import { useState, Suspense } from 'react';
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
import { Loader2, ArrowRight, ShieldCheck, LayoutDashboard, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

function LoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
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
                if (callbackUrl === '/' || callbackUrl === '/login') {
                    if (userType === 'employee') router.push('/admin/mapan/dashboard');
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
        <div className="w-full h-full lg:grid lg:grid-cols-2 min-h-screen">

            {/* LEFT PANEL: FORM */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-24 bg-[#050505] relative z-10">
                <Button
                    asChild
                    variant="ghost"
                    className="absolute top-8 left-8 text-gray-400 hover:text-white hover:bg-white/5 md:flex hidden"
                >
                    <Link href="/">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
                <div className="max-w-md w-full mx-auto space-y-10">
                    {/* Header */}
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 text-brand-500 font-bold mb-4">
                            <div className="p-2 rounded-lg bg-brand-500/10 border border-brand-500/20">
                                <LayoutDashboard size={20} />
                            </div>
                            Mapan Dashboard
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                            Command Center <br /> Access.
                        </h1>
                        <p className="text-gray-400 text-lg">Secure entry for authorized personnel.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="userType" className="text-xs font-bold text-gray-500 uppercase tracking-wider">I am a...</Label>
                                <Select name="userType" defaultValue="employee">
                                    <SelectTrigger className="h-14 bg-[#1A1D24] border-white/5 text-white focus:ring-brand-500/50 focus:border-brand-500/50 rounded-xl px-4 text-base">
                                        <SelectValue placeholder="Select account type" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1A1D24] border-white/10 text-white">
                                        <SelectItem value="employee" className="py-3 cursor-pointer focus:bg-white/5 focus:text-white">Internal Employee</SelectItem>
                                        <SelectItem value="client" className="py-3 cursor-pointer focus:bg-white/5 focus:text-white">Client Partner</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Work Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="name@company.com"
                                    className="h-14 bg-[#1A1D24] border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-brand-500/50 focus-visible:border-brand-500/50 rounded-xl px-4 text-base"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Password</Label>
                                    <Link href="#" className="text-xs text-brand-500 hover:text-brand-400 font-bold hover:underline">Reset Password</Link>
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="h-14 bg-[#1A1D24] border-white/5 text-white focus-visible:ring-brand-500/50 focus-visible:border-brand-500/50 rounded-xl px-4 text-base"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-sm font-medium text-red-400 bg-red-900/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3">
                                <ShieldCheck size={18} /> {error}
                            </div>
                        )}

                        <Button type="submit" className="w-full h-14 bg-brand-500 hover:bg-brand-400 text-black text-lg font-bold shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] rounded-xl transition-all hover:scale-[1.01]" disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Log In'}
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="pt-6 border-t border-white/5">
                        <p className="text-gray-500 mb-4">New client partner?</p>
                        <Link href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="inline-flex items-center text-white font-bold hover:text-brand-500 transition-colors group">
                            Apply for Access <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: BRAND VISUAL */}
            <div className="hidden lg:block relative bg-[#020202] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-[#020202]/50" />

                {/* Abstract Visuals */}
                <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />

                {/* Dashboard Mockup (Floating) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-auto rotate-[-12deg] opacity-80 pointer-events-none grayscale-[50%] hover:grayscale-0 transition-all duration-1000">
                    {/* We can use an overlaid image or just div blocks to simulate depth */}
                    <div className="w-full h-[800px] rounded-3xl bg-[#0F1115] border border-white/10 shadow-2xl p-4 ml-24 ring-1 ring-white/5">
                        <div className="w-full h-full bg-[#15181E] rounded-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-blue-500/5" />
                        </div>
                    </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-16 left-16 right-16 z-10">
                    <div className="inline-block px-3 py-1 rounded bg-white/10 border border-white/10 text-white text-xs font-bold mb-4 backdrop-blur-md">
                        Maju Mapan Digital
                    </div>
                    <h2 className="text-4xl font-black text-white leading-tight mb-4">
                        Manage your digital empire <br /> with precision.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md">
                        Access the dashboard to control content, view analytics, and manage applications effortlessly.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#050505] flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin text-brand-500" /></div>}>
            <LoginContent />
        </Suspense>
    );
}
