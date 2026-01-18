'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { subscribeNewsletter } from '@/app/actions/newsletter';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';

interface NewsletterModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function NewsletterModal({ open, onOpenChange }: NewsletterModalProps) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await subscribeNewsletter(email);
            if (res.success) {
                toast.success('Successfully subscribed to our newsletter!');
                setEmail('');
                onOpenChange(false);
            } else {
                toast.error(res.error || 'Something went wrong');
            }
        } catch (err) {
            toast.error('Connection error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] bg-black/80 backdrop-blur-2xl border-white/10 text-white shadow-2xl">
                <DialogHeader>
                    <div className="mx-auto w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mb-4">
                        <Send className="w-6 h-6 text-brand-400" />
                    </div>
                    <DialogTitle className="text-2xl font-black text-center tracking-tighter">Join the Insider List</DialogTitle>
                    <DialogDescription className="text-center text-zinc-400 font-medium">
                        Get high-impact marketing strategies and trends delivered directly to your inbox.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="your@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/5 border-white/10 h-12 text-lg focus:ring-brand-500"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-brand-500 hover:bg-brand-400 text-black font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Subscribe Now'}
                    </Button>

                    <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest font-bold">
                        Zero Spam. Pure Value. Unsubscribe anytime.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}
