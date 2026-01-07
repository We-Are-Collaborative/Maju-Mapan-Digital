'use client';

import { ReactNode } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { LeadForm } from '@/components/lead-form';

interface LeadModalProps {
    trigger?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    source?: string;
    title?: string;
    description?: string;
}

export function LeadModal({
    trigger,
    open,
    onOpenChange,
    source = "Unknown",
    title = "Let's Start Your Project",
    description = "Fill out the form below and we'll get back to you within 24 hours."
}: LeadModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange} modal={false}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className="sm:max-w-[500px] border-white/10 bg-zinc-950/90 backdrop-blur-xl text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                    <DialogDescription className="text-gray-400">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    <LeadForm source={source} onSuccess={() => onOpenChange?.(false)} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
