'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { saveCareer } from '../actions';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface Category {
    id: string;
    name: string;
}

interface CareerFormProps {
    career?: any;
    categories: Category[];
}

export function CareerForm({ career, categories }: CareerFormProps) {
    const router = useRouter();
    const [requirements, setRequirements] = useState<string[]>(
        career?.requirements ? JSON.parse(career.requirements) : []
    );
    const [isSaving, setIsSaving] = useState(false);

    const addRequirement = () => setRequirements([...requirements, '']);
    const removeRequirement = (index: number) => {
        const newReqs = [...requirements];
        newReqs.splice(index, 1);
        setRequirements(newReqs);
    };
    const updateRequirement = (index: number, value: string) => {
        const newReqs = [...requirements];
        newReqs[index] = value;
        setRequirements(newReqs);
    };

    const handleSubmit = async (formData: FormData) => {
        setIsSaving(true);
        try {
            // Append requirements as JSON string
            formData.set('requirements', JSON.stringify(requirements));
            await saveCareer(formData);
            toast.success('Career saved successfully');
            // Redirect is handled in server action, but we can do client side too if needed 
        } catch (error) {
            toast.error('Failed to save career');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form action={handleSubmit} className="space-y-6">
            <input type="hidden" name="id" value={career?.id || ''} />

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/careers">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            {career ? 'Edit Career' : 'New Career'}
                        </h1>
                        <p className="text-muted-foreground">
                            {career ? 'Update job details.' : 'Create a new job opening.'}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button type="submit" disabled={isSaving}>
                        <Save className="mr-2 h-4 w-4" />
                        {isSaving ? 'Saving...' : 'Save Position'}
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="title">Job Title</Label>
                            <Input id="title" name="title" defaultValue={career?.title} required placeholder="e.g. Senior Frontend Engineer" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug</Label>
                            <Input id="slug" name="slug" defaultValue={career?.slug} required placeholder="e.g. senior-frontend-engineer" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="categoryId">Category</Label>
                            <Select name="categoryId" defaultValue={career?.categoryId || undefined}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((c) => (
                                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="type">Employment Type</Label>
                            <Select name="type" defaultValue={career?.type || 'Full-time'}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Full-time">Full-time</SelectItem>
                                    <SelectItem value="Part-time">Part-time</SelectItem>
                                    <SelectItem value="Contract">Contract</SelectItem>
                                    <SelectItem value="Freelance">Freelance</SelectItem>
                                    <SelectItem value="Internship">Internship</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" name="location" defaultValue={career?.location} placeholder="e.g. Jakarta, Indonesia" />
                        </div>
                        <div className="flex items-center space-x-2 pt-8">
                            <Switch id="isRemote" name="isRemote" defaultChecked={career?.isRemote} />
                            <Label htmlFor="isRemote">Remote Position</Label>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Details & Compensation</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="minSalary">Min Salary (Annual/Monthly)</Label>
                            <Input type="number" id="minSalary" name="minSalary" defaultValue={career?.minSalary} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="maxSalary">Max Salary</Label>
                            <Input type="number" id="maxSalary" name="maxSalary" defaultValue={career?.maxSalary} />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="description">Short Excerpt</Label>
                            <Textarea id="description" name="description" defaultValue={career?.description} placeholder="Brief summary for listings..." />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="content">Full Description (HTML)</Label>
                            <Textarea
                                id="content"
                                name="content"
                                defaultValue={career?.content}
                                className="min-h-[200px] font-mono"
                                placeholder="<p>Full job description...</p>"
                            />
                            <p className="text-xs text-muted-foreground">Supports HTML tags for formatting.</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Requirements</CardTitle>
                        <CardDescription>List key qualifications and responsibilities.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {requirements.map((req, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    value={req}
                                    onChange={(e) => updateRequirement(index, e.target.value)}
                                    placeholder="e.g. 5+ years of React experience"
                                />
                                <Button type="button" variant="ghost" size="icon" onClick={() => removeRequirement(index)}>
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>
                            </div>
                        ))}
                        <Button type="button" variant="outline" onClick={addRequirement} className="w-full">
                            <Plus className="mr-2 h-4 w-4" /> Add Requirement
                        </Button>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label htmlFor="status">Publish Status</Label>
                            <Select name="status" defaultValue={career?.status || 'draft'}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </form>
    );
}
