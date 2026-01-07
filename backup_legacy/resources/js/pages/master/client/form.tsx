import FileUpload from '@/components/file-upload';
import { SeoConfiguration } from '@/components/seo-configuration';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { slugify } from '@/lib/utils';
import { Client } from '@/types/client';
import { Media } from '@/types/media';
import { SeoConfig } from '@/types/seo_config';
import { useForm } from '@inertiajs/react';
import { FileQuestion, Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type ClientFormData = {
    _method?: string;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    is_featured: boolean;
    status: string;
    logo?: File & Media;
    seo_config: SeoConfig;
};

type ClientFormProps = {
    client?: Client;
};

export default function ClientForm({ client }: ClientFormProps) {
    const { data, setData, post, processing } = useForm<ClientFormData>({
        name: client?.name ?? '',
        slug: client?.slug ?? '',
        description: client?.description ?? '',
        excerpt: client?.excerpt ?? '',
        is_featured: client?.is_featured ?? false,
        status: client?.status ?? 'published',
        seo_config: {
            title: (client as any)?.seo_config?.title ?? client?.name ?? '',
            description: (client as any)?.seo_config?.description ?? client?.excerpt ?? '',
            keywords: (client as any)?.seo_config?.keywords ?? '',
            author: (client as any)?.seo_config?.author ?? '5758 Creative Lab',
            robots: (client as any)?.seo_config?.robots ?? 'index, follow',
            canonical: (client as any)?.seo_config?.canonical ?? '',
            locale: (client as any)?.seo_config?.locale ?? 'id_ID',
            language: (client as any)?.seo_config?.language ?? 'en',
            type: (client as any)?.seo_config?.type ?? 'client',
            url: (client as any)?.seo_config?.url ?? '',
            image: (client as any)?.seo_config?.image ?? '',
            image_width: (client as any)?.seo_config?.image_width ?? 1200,
            image_height: (client as any)?.seo_config?.image_height ?? 630,
            image_alt: (client as any)?.seo_config?.image_alt ?? '',
            site_name: (client as any)?.seo_config?.site_name ?? '5758 Creative Lab',
            twitter_card: (client as any)?.seo_config?.twitter_card ?? 'summary_large_image',
            twitter_image: (client as any)?.seo_config?.twitter_image ?? '',
            twitter_site: (client as any)?.seo_config?.twitter_site ?? '@5758creativelab',
            twitter_creator: (client as any)?.seo_config?.twitter_creator ?? '@5758creativelab',
            structured_data: (client as any)?.seo_config?.structured_data ?? null,
            breadcrumbs: (client as any)?.seo_config?.breadcrumbs ?? null,
        },
    });

    const handleLogoChange = (file: File | null) => {
        setData('logo', file);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (client?.id) {
            data._method = 'PUT';
            post(route('master.client.update', client.id), FormResponse);
        } else {
            post(route('master.client.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Client Form</h1>
                    <p className="text-sm">{client?.id ? 'Edit Client' : 'Add New Client'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={submit} className="grid grid-cols-12 gap-4">
                <Card className="col-span-12">
                    <CardHeader>
                        <CardTitle>Client Information</CardTitle>
                        <CardDescription>Configure the client information.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={data.name}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    setData('name', v);
                                    setData('slug', slugify(v));
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Slug <span className="text-destructive">*</span>
                            </Label>
                            <Input disabled value={data.slug} onChange={(e) => setData('slug', e.target.value)} required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Logo {!client?.id && <span className="text-destructive">*</span>}</Label>
                            <FileUpload
                                media={(client as any)?.logo ?? null}
                                onChange={handleLogoChange}
                                accept="image/jpeg,image/png,image/gif,image/webp"
                                maxSize={2 * 1024 * 1024}
                                id="logo"
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Excerpt <span className="text-destructive">*</span>
                            </Label>
                            <Textarea value={data.excerpt} onChange={(e) => setData('excerpt', e.target.value)} required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Description <span className="text-destructive">*</span>
                            </Label>
                            <Textarea value={data.description} onChange={(e) => setData('description', e.target.value)} required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Status <span className="text-destructive">*</span>
                            </Label>
                            <Select value={data.status} onValueChange={(value) => setData('status', value)} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="draft">Draft</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <div className="flex items-start gap-3">
                                <Checkbox
                                    checked={data.is_featured}
                                    onCheckedChange={(checked) => setData('is_featured', checked as boolean)}
                                    id="terms-2"
                                    defaultChecked
                                    required
                                />
                                <div className="grid gap-1">
                                    <Label htmlFor="terms-2">
                                        Is Featured <span className="text-destructive">*</span>
                                    </Label>
                                    <p className="text-sm text-muted-foreground">Featured means it will show on the home page.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="col-span-12">
                    <SeoConfiguration
                        data={data.seo_config}
                        setData={setData}
                        contentTypeOptions={[
                            { value: 'client', label: 'Client' },
                            { value: 'website', label: 'Website' },
                            { value: 'blog', label: 'Blog' },
                        ]}
                    />
                </div>
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

ClientForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
