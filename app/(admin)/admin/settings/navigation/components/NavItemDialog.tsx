'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { upsertAdminNavItem, deleteAdminNavItem } from '@/app/actions/navigation';
import { toast } from 'sonner';
import { Loader2, Trash } from 'lucide-react';
import * as Icons from 'lucide-react';

interface NavItemDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    item: any;
    categories: any[];
}

export default function NavItemDialog({ open, onOpenChange, item, categories }: NavItemDialogProps) {
    const [formData, setFormData] = useState({
        name: '',
        href: '',
        icon: 'Circle',
        uiRowClass: '',
        categoryId: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name || '',
                href: item.href || '',
                icon: item.icon || 'Circle',
                uiRowClass: item.uiRowClass || '',
                categoryId: item.categoryId || categories[0]?.id || '',
            });
        }
    }, [item, categories]);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await upsertAdminNavItem({
            id: item?.id,
            ...formData,
            position: item?.position ?? 0
        });

        setIsLoading(false);
        if (res.success) {
            toast.success(item.id ? 'Item updated' : 'Item created');
            onOpenChange(false);
        } else {
            toast.error('Failed to save item');
        }
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        setIsLoading(true);
        const res = await deleteAdminNavItem(item.id);
        setIsLoading(false);

        if (res.success) {
            toast.success('Item deleted');
            onOpenChange(false);
        } else {
            toast.error('Failed to delete');
        }
    };

    // Filter icons for performance - showing ~50 common ones or just text input? 
    // For now, text input for Icon Name with a helper link or simple list is safer than rendering 1000 icons.
    // Or we can let user type "Users" and show preview.

    const PreviewIcon = (Icons as any)[formData.icon];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>{item?.id ? 'Edit Menu Item' : 'New Menu Item'}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" value={formData.name} onChange={e => handleChange('name', e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select value={formData.categoryId} onValueChange={val => handleChange('categoryId', val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map(c => (
                                        <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="href">Path (HREF)</Label>
                        <Input id="href" value={formData.href} onChange={e => handleChange('href', e.target.value)} required placeholder="/admin/..." />
                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-4 items-end">
                        <div className="space-y-2">
                            <Label htmlFor="icon">Icon Name (Lucide)</Label>
                            <Input id="icon" value={formData.icon} onChange={e => handleChange('icon', e.target.value)} placeholder="e.g. Users" />
                            <p className="text-[10px] text-slate-400">Case sensitive (e.g. 'LayoutDashboard', 'Users')</p>
                        </div>
                        <div className="h-10 w-10 flex items-center justify-center bg-slate-100 rounded border mb-0.5">
                            {PreviewIcon ? <PreviewIcon className="h-5 w-5 text-indigo-600" /> : <span className="text-xs">?</span>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="uiRowClass">UI Row Class (Tailwind)</Label>
                        <Input id="uiRowClass" value={formData.uiRowClass} onChange={e => handleChange('uiRowClass', e.target.value)} placeholder="e.g. bg-red-100 text-red-600" />
                    </div>

                    <DialogFooter className="flex justify-between items-center w-full sm:justify-between pt-4">
                        {item?.id ? (
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
