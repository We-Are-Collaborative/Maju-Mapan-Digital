"use client";

import { useState, Suspense } from 'react';
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
import { Loader2, ArrowRight, CheckCircle2, Building2, UserCircle, Briefcase, DollarSign, Target } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { submitApplication } from '@/app/actions/leads';
import { toast } from 'sonner';

function RegisterContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    // Mock Form Data State
    const [formData, setFormData] = useState({
        name: '', email: '', company: '', role: '', spend: '', goal: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await submitApplication(formData);
            if (result.success) {
                setStep(4); // Success Step
            } else {
                toast.error(result.error || "Failed to submit application");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full max-w-xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-10 space-y-2">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-500 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <Target size={28} />
                </div>
                <h1 className="text-4xl font-black text-white tracking-tight">Apply for <span className="text-brand-500">Early Access</span></h1>
                <p className="text-gray-400 font-medium max-w-sm mx-auto">
                    Mapan Dashboard is currently invite-only. Tell us about your brand to qualify for a trial.
                </p>
            </div>

            {/* Progress Bar */}
            <div className="flex gap-2 mb-8 px-4">
                {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${step >= s ? 'bg-brand-500' : 'bg-white/10'}`} />
                ))}
            </div>

            <div className="bg-[#0F1115] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-white/5 min-h-[400px]">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />

                <form onSubmit={handleSubmit} className="relative z-10 h-full flex flex-col">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: Personal Info */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6 flex-1"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <UserCircle size={20} className="text-brand-500" /> Who are you?
                                    </h3>
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-gray-400">Full Name</Label>
                                        <Input
                                            id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleInputChange}
                                            className="h-12 bg-[#1A1D24] border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-brand-500/50 rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-400">Work Email</Label>
                                        <Input
                                            id="email" name="email" type="email" required placeholder="name@company.com" value={formData.email} onChange={handleInputChange}
                                            className="h-12 bg-[#1A1D24] border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-brand-500/50 rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Button type="button" onClick={handleNext} className="w-full h-12 bg-white text-black font-bold hover:bg-gray-200 rounded-xl">
                                        Next Step <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                    <div className="text-center mt-4">
                                        <Link href="/login" className="text-sm text-gray-500 hover:text-white transition-colors">Already have an account? Sign in</Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Company Details */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6 flex-1"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Building2 size={20} className="text-blue-500" /> Brand Details
                                    </h3>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-gray-400">Company / Brand Name</Label>
                                        <Input
                                            id="company" name="company" required placeholder="Acme Inc." value={formData.company} onChange={handleInputChange}
                                            className="h-12 bg-[#1A1D24] border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-blue-500/50 rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="role" className="text-gray-400">Your Role</Label>
                                        <Select name="role" onValueChange={(val) => handleSelectChange('role', val)}>
                                            <SelectTrigger className="h-12 bg-[#1A1D24] border-white/5 text-white rounded-xl">
                                                <SelectValue placeholder="Select your role" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1A1D24] border-white/10 text-white">
                                                <SelectItem value="marketing_manager">Marketing Manager</SelectItem>
                                                <SelectItem value="founder">Founder / CEO</SelectItem>
                                                <SelectItem value="agency">Agency Partner</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-3">
                                    <Button type="button" variant="outline" onClick={handleBack} className="h-12 flex-1 border-white/10 text-white hover:bg-white/5 rounded-xl">Back</Button>
                                    <Button type="button" onClick={handleNext} className="h-12 flex-[2] bg-white text-black font-bold hover:bg-gray-200 rounded-xl">
                                        Next Step <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Qualification */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6 flex-1"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <span className="text-brand-500 font-bold">Rp</span> Qualification
                                    </h3>
                                    <div className="space-y-2">
                                        <Label htmlFor="spend" className="text-gray-400">Monthly Ad Spend (IDR)</Label>
                                        <Select name="spend" onValueChange={(val) => handleSelectChange('spend', val)}>
                                            <SelectTrigger className="h-12 bg-[#1A1D24] border-white/5 text-white rounded-xl">
                                                <SelectValue placeholder="Select budget range" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1A1D24] border-white/10 text-white">
                                                <SelectItem value="less_50jt">&lt; Rp 50 Juta / mo</SelectItem>
                                                <SelectItem value="50jt_200jt">Rp 50 Juta - Rp 200 Juta / mo</SelectItem>
                                                <SelectItem value="200jt_500jt">Rp 200 Juta - Rp 500 Juta / mo</SelectItem>
                                                <SelectItem value="500jt_plus">Rp 500 Juta+ / mo</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="goal" className="text-gray-400">Primary Goal</Label>
                                        <Select name="goal" onValueChange={(val) => handleSelectChange('goal', val)}>
                                            <SelectTrigger className="h-12 bg-[#1A1D24] border-white/5 text-white rounded-xl">
                                                <SelectValue placeholder="What do you want to achieve?" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1A1D24] border-white/10 text-white">
                                                <SelectItem value="roas">Improve ROAS</SelectItem>
                                                <SelectItem value="scale">Scale Spend</SelectItem>
                                                <SelectItem value="attribution">Fix Attribution</SelectItem>
                                                <SelectItem value="save_time">Save Time / Automation</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-3">
                                    <Button type="button" variant="outline" onClick={handleBack} className="h-12 flex-1 border-white/10 text-white hover:bg-white/5 rounded-xl">Back</Button>
                                    <Button type="submit" disabled={isLoading} className="h-12 flex-[2] bg-brand-500 text-black font-bold hover:bg-brand-400 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                        {isLoading ? <Loader2 className="animate-spin" /> : 'Submit Application'}
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: Success State */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-8"
                            >
                                <div className="size-20 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center mb-2 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-2">Application Received!</h3>
                                    <p className="text-gray-400">
                                        Thanks, {formData.name}. Our team will review your application for <strong>{formData.company}</strong> within 24 hours.
                                    </p>
                                </div>
                                <div className="w-full pt-4">
                                    <Button asChild className="w-full h-12 bg-white text-black font-bold rounded-xl hover:bg-gray-200">
                                        <Link href="/">Back to Home</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </form>
            </div>
        </div>
    );
}

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden leading-relaxed">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url(/assets/noise.png)] opacity-10 mix-blend-overlay" />
            </div>

            <Suspense fallback={<div className="flex justify-center items-center p-8"><Loader2 className="h-8 w-8 animate-spin text-brand-500" /></div>}>
                <RegisterContent />
            </Suspense>
        </main>
    );
}
