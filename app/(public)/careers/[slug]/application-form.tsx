'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Briefcase, Link as LinkIcon, Send, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { submitApplication } from '@/app/actions/career-application';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface ApplicationFormProps {
    careerId: string;
    jobTitle: string;
}

export function ApplicationForm({ careerId, jobTitle }: ApplicationFormProps) {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Questionnaire state
    const [answers, setAnswers] = useState({
        q1: '', // Why us
        q2: '', // Expected Salary
        q3: '', // Start Date
        q4: '', // Achievement
    });

    const isAuth = status === 'authenticated';

    const handleApplyClick = () => {
        if (!isAuth) {
            // Redirect to login with callback
            const loginUrl = `/login?callbackUrl=${encodeURIComponent(pathname)}`;
            router.push(loginUrl);
            return;
        }
        setOpen(true);
    };

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);

        // Append questionnaire answers
        formData.append('answers', JSON.stringify(answers));

        const result = await submitApplication(null, formData);

        setIsSubmitting(false);

        if (result.success) {
            toast.success(result.message);
            setOpen(false);
        } else {
            toast.error(result.message);
            if (result.errors) {
                console.error(result.errors);
            }
        }
    };

    // If not authenticated, show specific button state
    if (!isAuth) {
        return (
            <Button
                onClick={handleApplyClick}
                size="lg"
                className="w-full h-14 text-lg font-bold rounded-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 transition-all hover:scale-105"
            >
                Login to Apply
                <Lock className="ml-2 h-5 w-5" />
            </Button>
        )
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button size="lg" className="w-full h-14 text-lg font-bold rounded-full bg-brand-500 hover:bg-brand-400 text-black shadow-lg shadow-brand-500/20 transition-all hover:scale-105">
                    Apply for this Role
                    <Briefcase className="ml-2 h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto sm:max-w-xl w-full">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-2xl font-bold">Apply for {jobTitle}</SheetTitle>
                    <SheetDescription>
                        {session?.user?.name ? `Welcome back, ${session.user.name}. ` : ''}
                        Share your story with us.
                    </SheetDescription>
                </SheetHeader>

                <form action={handleSubmit} className="space-y-8">
                    <input type="hidden" name="careerId" value={careerId} />

                    {/* Personal Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground/80 border-b pb-2">Personal Info</h3>
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName" className="text-foreground/80">Full Name</Label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    required
                                    defaultValue={session?.user?.name || ''}
                                    placeholder="John Doe"
                                    className="bg-background/50"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        defaultValue={session?.user?.email || ''}
                                        readOnly
                                        className="bg-background/50 text-gray-500 cursor-not-allowed"
                                    />
                                    <p className="text-xs text-muted-foreground">Signed in as {session?.user?.email}</p>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" name="phone" type="tel" placeholder="+62..." className="bg-background/50" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground/80 border-b pb-2">Your Work</h3>
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="resumeUrl">Resume URL *</Label>
                                <div className="relative">
                                    <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="resumeUrl" name="resumeUrl" required className="pl-9 bg-background/50" placeholder="Link to Google Drive / Dropbox / Website" />
                                </div>
                                <p className="text-xs text-muted-foreground">Please provide a publicly accessible link to your resume.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="linkedinUrl">LinkedIn</Label>
                                    <Input id="linkedinUrl" name="linkedinUrl" placeholder="linkedin.com/in/..." className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="portfolioUrl">Portfolio</Label>
                                    <Input id="portfolioUrl" name="portfolioUrl" placeholder="behance.net/..." className="bg-background/50" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Questionnaire */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground/80 border-b pb-2">Questions</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Why do you want to join Maju Mapan?</Label>
                                <Textarea
                                    className="bg-background/50 min-h-[80px]"
                                    value={answers.q1}
                                    onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Expected Salary (Monthly)</Label>
                                    <Input
                                        className="bg-background/50"
                                        value={answers.q2}
                                        onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
                                        placeholder="IDR ..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Earliest Start Date</Label>
                                    <Input
                                        className="bg-background/50"
                                        type="text"
                                        value={answers.q3}
                                        onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                                        placeholder="e.g. ASAP or 1 Month Notice"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>What is your proudest professional achievement?</Label>
                                <Textarea
                                    className="bg-background/50 min-h-[80px]"
                                    value={answers.q4}
                                    onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg font-semibold bg-brand-500 text-black hover:bg-brand-400">
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                        </Button>
                        <p className="text-center text-xs text-muted-foreground mt-4">
                            By submitting, you agree to our privacy policy regarding candidate data.
                        </p>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    );
}
