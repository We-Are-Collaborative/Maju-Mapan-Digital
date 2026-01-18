'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { upsertAdminNavCategory, deleteAdminNavCategory } from '@/app/actions/navigation';
import { toast } from 'sonner';
import { Loader2, Trash } from 'lucide-react';

interface NavCategoryDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    category: any;
}

export default function NavCategoryDialog({ open, onOpenChange, category }: NavCategoryDialogProps) {
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (category) {
            setTitle(category.title || '');
        }
    }, [category]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await upsertAdminNavCategory({
            id: category?.id,
            title,
            position: category?.position ?? 0
        });

        setIsLoading(false);
        if (res.success) {
            toast.success(category.id ? 'Category updated' : 'Category created');
            onOpenChange(false);
        } else {
            toast.error('Failed to save category');
        }
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this category? All items inside will be deleted.')) return;

        setIsLoading(true);
        const res = await deleteAdminNavCategory(category.id);
        setIsLoading(false);

        if (res.success) {
            toast.success('Category deleted');
            onOpenChange(false);
        } else {
            toast.error('Failed to delete');
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{category?.id ? 'Edit Category' : 'New Category'}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" value={title} onChange={e => setTitle(e.target.value)} required placeholder="e.g. System Settings" />
                    </div>

                    <DialogFooter className="flex justify-between items-center w-full sm:justify-between">
                        {category?.id ? (
                            <Button type="button" variant="destructive" size="sm" onClick={handleDelete} disabled={isLoading}>
                                <Trash className="h-4 w-4 mr-2" /> Delete
                            </Button>
                        ) : <div />}

                        <div className="flex gap-2">
                            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Save
                            </Button>
                        </div>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
