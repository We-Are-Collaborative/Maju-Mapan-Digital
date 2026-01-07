import { getEmployee, upsertEmployee } from '@/app/actions/team';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function TeamMemberForm({ params }: Props) {
    const { id } = await params;

    // Safely check if 'new' is the ID
    const isNew = id === 'new';

    let employee = null;
    if (!isNew) {
        employee = await getEmployee(id);
        if (!employee) {
            return <div>Employee not found</div>;
        }
    }

    async function handleSubmit(formData: FormData) {
        'use server';

        const data = {
            id: isNew ? undefined : id,
            name: formData.get('name') as string,
            position: formData.get('position') as string,
            excerpt: formData.get('excerpt') as string,
            thumbnailUrl: formData.get('thumbnailUrl') as string,
            linkedinUrl: formData.get('linkedinUrl') as string,
            email: formData.get('email') as string,
            order: parseInt(formData.get('order') as string || '0'),
        };

        const result = await upsertEmployee(data);
        if (result.success) {
            redirect('/admin/team');
        } else {
            console.error(result.error);
            // Handle error display in a more robust way if needed
        }
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/admin/team"><ArrowLeft className="h-4 w-4" /></Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{isNew ? 'New Team Member' : 'Edit Team Member'}</h1>
                    <p className="text-muted-foreground">{isNew ? 'Add a new member to the team.' : `Editing details for ${employee?.name}`}</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Member Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" defaultValue={employee?.name} required placeholder="e.g. John Doe" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="position">Position</Label>
                            <Input id="position" name="position" defaultValue={employee?.position} required placeholder="e.g. Chief Executive Officer" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="excerpt">Description (Excerpt)</Label>
                            <Textarea id="excerpt" name="excerpt" defaultValue={employee?.excerpt || ''} placeholder="Short bio..." rows={3} />
                        </div>

                        {/* Image URL Input - Ideally a File Upload, but text for now as per project style */}
                        <div className="grid gap-2">
                            <Label htmlFor="thumbnailUrl">Photo URL</Label>
                            <Input id="thumbnailUrl" name="thumbnailUrl" defaultValue={employee?.thumbnailUrl || ''} placeholder="https://..." />
                            <p className="text-xs text-muted-foreground">URL to the profile photo.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                                <Input id="linkedinUrl" name="linkedinUrl" defaultValue={employee?.linkedinUrl || ''} placeholder="https://linkedin.com/in/..." />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" defaultValue={employee?.email || ''} placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="order">Order Priority</Label>
                            <Input id="order" name="order" type="number" defaultValue={employee?.order || 0} />
                            <p className="text-xs text-muted-foreground">Lower numbers appear first.</p>
                        </div>

                        <div className="flex justify-end gap-2 pt-4">
                            <Button variant="outline" asChild><Link href="/admin/team">Cancel</Link></Button>
                            <Button type="submit"><Save className="mr-2 h-4 w-4" /> Save Member</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
