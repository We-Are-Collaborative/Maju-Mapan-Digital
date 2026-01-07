import FileUpload from '@/components/file-upload';
import { MultiSelect } from '@/components/multi-select';
import { SeoConfiguration } from '@/components/seo-configuration';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { editor_header, editor_html_support, editor_plugins, editor_table, editor_toolbar } from '@/lib/editor';
import { fetchClient } from '@/lib/select';
import { slugify } from '@/lib/utils';
import { SeoConfig } from '@/types/seo_config';
import { Showcase } from '@/types/showcase';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useForm } from '@inertiajs/react';
import { ClassicEditor } from 'ckeditor5';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import 'ckeditor5/ckeditor5.css';
import { FileQuestion, Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type ShowcaseFormData = {
    _method?: string;
    client_id: any;
    name: string;
    slug: string;
    content: string;
    excerpt: string;
    start_date: string;
    end_date: string;
    status: string;
    thumbnail: any;
    seo_config: SeoConfig;
};

type ShowcaseFormProps = {
    showcase?: Showcase;
};

export default function ShowcaseForm({ showcase }: ShowcaseFormProps) {
    const { data, setData, post, processing } = useForm<ShowcaseFormData>({
        client_id: showcase?.client_id ?? null,
        name: showcase?.name ?? '',
        slug: showcase?.slug ?? '',
        content: showcase?.content ?? '',
        excerpt: showcase?.excerpt ?? '',
        start_date: showcase?.start_date ?? '',
        end_date: showcase?.end_date ?? '',
        status: showcase?.status ?? 'published',
        thumbnail: null,
        seo_config: {
            title: (showcase as any)?.seo_config?.title ?? showcase?.name ?? '',
            description: (showcase as any)?.seo_config?.description ?? showcase?.excerpt ?? '',
            keywords: (showcase as any)?.seo_config?.keywords ?? '',
            author: (showcase as any)?.seo_config?.author ?? '5758 Creative Lab',
            robots: (showcase as any)?.seo_config?.robots ?? 'index, follow',
            canonical: (showcase as any)?.seo_config?.canonical ?? '',
            locale: (showcase as any)?.seo_config?.locale ?? 'id_ID',
            language: (showcase as any)?.seo_config?.language ?? 'en',
            type: (showcase as any)?.seo_config?.type ?? 'showcase',
            url: (showcase as any)?.seo_config?.url ?? '',
            image: (showcase as any)?.seo_config?.image ?? '',
            image_width: (showcase as any)?.seo_config?.image_width ?? 1200,
            image_height: (showcase as any)?.seo_config?.image_height ?? 630,
            image_alt: (showcase as any)?.seo_config?.image_alt ?? '',
            site_name: (showcase as any)?.seo_config?.site_name ?? '5758 Creative Lab',
            twitter_card: (showcase as any)?.seo_config?.twitter_card ?? 'summary_large_image',
            twitter_image: (showcase as any)?.seo_config?.twitter_image ?? '',
            twitter_site: (showcase as any)?.seo_config?.twitter_site ?? '@5758creativelab',
            twitter_creator: (showcase as any)?.seo_config?.twitter_creator ?? '@5758creativelab',
            structured_data: (showcase as any)?.seo_config?.structured_data ?? null,
            breadcrumbs: (showcase as any)?.seo_config?.breadcrumbs ?? null,
        },
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (showcase?.id) {
            data._method = 'PUT';
            post(route('master.showcase.update', showcase.id), FormResponse);
        } else {
            post(route('master.showcase.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Showcase Form</h1>
                    <p className="text-sm">{showcase?.id ? 'Edit Showcase' : 'Add New Showcase'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={submit} className="grid grid-cols-12 gap-4">
                <Card className="col-span-12">
                    <CardHeader>
                        <CardTitle>Showcase Information</CardTitle>
                        <CardDescription>Configure the showcase information.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Client <span className="text-destructive">*</span>
                            </Label>
                            <MultiSelect
                                placeholder="Category"
                                name="client_id"
                                defaultValue={{ value: data.client_id, label: showcase?.client?.name ?? '' }}
                                onChange={(v: any) => setData('client_id', v?.value)}
                                loadOptions={fetchClient}
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label>
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
                            <Label>
                                Slug <span className="text-destructive">*</span>
                            </Label>
                            <Input disabled value={data.slug} required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label>
                                Excerpt <span className="text-destructive">*</span>
                            </Label>
                            <Textarea value={data.excerpt} onChange={(e) => setData('excerpt', e.target.value)} required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Thumbnail</Label>
                            <FileUpload
                                media={data.thumbnail || showcase?.thumbnail}
                                onChange={(file) => setData('thumbnail', file)}
                                accept="image/jpeg,image/png,image/gif,image/webp"
                                maxSize={2 * 1024 * 1024}
                                id="thumbnail"
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label>
                                Content <span className="text-destructive">*</span>
                            </Label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={data.content || ''}
                                config={{
                                    licenseKey: 'GPL',
                                    plugins: editor_plugins,
                                    toolbar: editor_toolbar,
                                    heading: editor_header,
                                    table: editor_table,
                                    htmlSupport: editor_html_support,
                                    placeholder: 'Write here...',
                                }}
                                onChange={(event, editor) => {
                                    setData('content', editor.getData());
                                }}
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label>Start Date</Label>
                            <Input type="date" value={data.start_date} onChange={(e) => setData('start_date', e.target.value)} />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label>End Date</Label>
                            <Input type="date" value={data.end_date} onChange={(e) => setData('end_date', e.target.value)} />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label>
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
                    </CardContent>
                </Card>
                <div className="col-span-12">
                    <SeoConfiguration
                        data={data.seo_config}
                        setData={setData}
                        contentTypeOptions={[
                            { value: 'showcase', label: 'Showcase' },
                            { value: 'article', label: 'Article' },
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

ShowcaseForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
