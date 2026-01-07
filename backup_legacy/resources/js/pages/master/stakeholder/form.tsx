import FileUpload from '@/components/file-upload';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { Media } from '@/types/media';
import { StakeHolder } from '@/types/stakeholder';
import { useForm } from '@inertiajs/react';
import { FileQuestion, Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type StakeHolderFormData = {
    _method?: string;
    name: string;
    position: string;
    excerpt: string;
    content: string;
    email: string;
    linkedin_url: string;
    linkedin_text: string;
    thumbnail?: File & Media;
};

type StakeHolderFormProps = {
    stakeholder?: StakeHolder;
};

export default function StakeHolderForm({ stakeholder }: StakeHolderFormProps) {
    const { data, setData, post, processing } = useForm<StakeHolderFormData>({
        name: stakeholder?.name ?? '',
        position: stakeholder?.position ?? '',
        excerpt: stakeholder?.excerpt ?? '',
        content: stakeholder?.content ?? '',
        email: stakeholder?.email ?? '',
        linkedin_url: stakeholder?.linkedin_url ?? '',
        linkedin_text: stakeholder?.linkedin_text ?? 'Connect on LinkedIn',
    });

    const handleThumbnailChange = (file: File | null) => {
        setData('thumbnail', file);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (stakeholder?.id) {
            data._method = 'PUT';
            post(route('master.stakeholder.update', stakeholder.id), FormResponse);
        } else {
            post(route('master.stakeholder.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Stakeholder Form</h1>
                    <p className="text-sm">{stakeholder?.id ? 'Edit Stakeholder' : 'Add New Stakeholder'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={submit} className="grid grid-cols-12 gap-4">
                <Card className="col-span-12">
                    <CardHeader>
                        <CardTitle>Stakeholder Information</CardTitle>
                        <CardDescription>Configure the stakeholder information.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-col gap-y-1.5 md:col-span-6">
                            <Label className="text-base">
                                Name <span className="text-destructive">*</span>
                            </Label>
                            <Input value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="Enter full name" required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5 md:col-span-6">
                            <Label className="text-base">
                                Position <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={data.position}
                                onChange={(e) => setData('position', e.target.value)}
                                placeholder="e.g., Creative Director"
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Photo {!stakeholder?.id && <span className="text-destructive">*</span>}</Label>
                            <FileUpload
                                media={(stakeholder as any)?.thumbnail ?? null}
                                onChange={handleThumbnailChange}
                                accept="image/jpeg,image/png,image/gif,image/webp"
                                maxSize={2 * 1024 * 1024}
                                id="thumbnail"
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Excerpt <span className="text-destructive">*</span>
                            </Label>
                            <Textarea
                                value={data.excerpt}
                                onChange={(e) => setData('excerpt', e.target.value)}
                                placeholder="Short bio or tagline"
                                rows={3}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Content</Label>
                            <Textarea
                                value={data.content}
                                onChange={(e) => setData('content', e.target.value)}
                                placeholder="Full biography (optional)"
                                rows={5}
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5 md:col-span-6">
                            <Label className="text-base">Email</Label>
                            <Input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="email@example.com"
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5 md:col-span-6">
                            <Label className="text-base">LinkedIn URL</Label>
                            <Input
                                value={data.linkedin_url}
                                onChange={(e) => setData('linkedin_url', e.target.value)}
                                placeholder="https://linkedin.com/in/username"
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">LinkedIn Link Text</Label>
                            <Input
                                value={data.linkedin_text}
                                onChange={(e) => setData('linkedin_text', e.target.value)}
                                placeholder="Connect on LinkedIn"
                            />
                        </div>
                    </CardContent>
                </Card>
                <div className="col-span-12">
                    <Button type="submit" disabled={processing}>
                        {processing && <Loader2 className="mr-2 size-4 animate-spin" />}
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

StakeHolderForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
