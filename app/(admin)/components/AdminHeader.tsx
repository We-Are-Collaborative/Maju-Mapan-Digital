'use client';

import React, { useState, useEffect } from 'react';
import { Pencil, Save, X, Loader2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getAdminPageMetadata, upsertAdminPageMetadata } from '@/app/actions/admin-metadata';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface AdminHeaderProps {
    defaultTitle: string;
    defaultSubtitle: string;
}

export default function AdminHeader({ defaultTitle, defaultSubtitle }: AdminHeaderProps) {
    const pathname = usePathname();
    const [title, setTitle] = useState(defaultTitle);
    const [subtitle, setSubtitle] = useState(defaultSubtitle);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Edit state
    const [editTitle, setEditTitle] = useState('');
    const [editSubtitle, setEditSubtitle] = useState('');

    useEffect(() => {
        const fetchMetadata = async () => {
            const data = await getAdminPageMetadata(pathname);
            if (data) {
                if (data.title) setTitle(data.title);
                if (data.subtitle) setSubtitle(data.subtitle);
            }
            setIsLoading(false);
        };
        fetchMetadata();
    }, [pathname]);

    const handleEditStart = () => {
        setEditTitle(title);
        setEditSubtitle(subtitle);
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsSaving(true);
        const res = await upsertAdminPageMetadata({
            routePath: pathname,
            title: editTitle,
            subtitle: editSubtitle,
        });
        setIsSaving(false);

        if (res.success) {
            setTitle(editTitle);
            setSubtitle(editSubtitle);
            setIsEditing(false);
            toast.success('Header updated successfully');
        } else {
            toast.error('Failed to update header');
        }
    };

    if (isLoading) {
        return (
            <div className="animate-pulse">
                <div className="h-10 w-64 bg-slate-200 rounded mb-2"></div>
                <div className="h-6 w-96 bg-slate-100 rounded"></div>
            </div>
        );
    }

    return (
        <div className="group relative">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-4xl font-black tracking-tight mb-2" style={{ color: 'var(--colors-global-text-heading)' }}>{title}</h1>
                    <p className="text-lg font-medium max-w-3xl" style={{ color: 'var(--colors-global-text-muted)' }}>{subtitle}</p>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-indigo-600"
                    onClick={handleEditStart}
                    title="Edit Header"
                >
                    <Pencil size={18} />
                </Button>
            </div>

            <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Page Header</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Page Title</Label>
                            <Input
                                id="title"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                placeholder="e.g. Dashboard"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subtitle">Subtitle / Description</Label>
                            <Textarea
                                id="subtitle"
                                value={editSubtitle}
                                onChange={(e) => setEditSubtitle(e.target.value)}
                                placeholder="Describe this page..."
                                className="resize-none h-24"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsEditing(false)} disabled={isSaving}>Cancel</Button>
                        <Button onClick={handleSave} disabled={isSaving}>
                            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Save Changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
