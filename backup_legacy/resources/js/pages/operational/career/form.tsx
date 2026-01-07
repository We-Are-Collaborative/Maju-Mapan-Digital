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
import { fetchCategory } from '@/lib/select';
import { slugify } from '@/lib/utils';
import { Career } from '@/types/career';
import { Media } from '@/types/media';
import { SeoConfig } from '@/types/seo_config';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useForm } from '@inertiajs/react';
import { ClassicEditor } from 'ckeditor5';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import 'ckeditor5/ckeditor5.css';
import { FileQuestion, Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type CareerFormData = {
    _method?: string;
    category_id?: number;
    title: string;
    slug: string;
    type: string;
    location: string;
    description: string;
    content: string;
    apply_url: string;
    min_salary: number;
    max_salary: number;
    thumbnail?: Media;
    seo_config: SeoConfig;
};

type CareerFormProps = {
    career?: Career;
};

export default function CareerForm({ career }: CareerFormProps) {
    const { data, setData, post, processing } = useForm<CareerFormData>({
        title: career?.title ?? '',
        category_id: career?.category_id ?? undefined,
        slug: career?.slug ?? '',
        type: career?.type ?? '',
        location: career?.location ?? '',
        description: career?.description ?? '',
        content: career?.content ?? '',
        apply_url: career?.apply_url ?? '',
        min_salary: career?.min_salary ?? 0,
        max_salary: career?.max_salary ?? 0,
        thumbnail: (career as any)?.thumbnail ?? undefined,
        seo_config: {
            title: (career as any)?.seo_config?.title ?? career?.title ?? '',
            description: (career as any)?.seo_config?.description ?? career?.description ?? '',
            keywords: (career as any)?.seo_config?.keywords ?? '',
            author: (career as any)?.seo_config?.author ?? '5758 Creative Lab',
            robots: (career as any)?.seo_config?.robots ?? 'index, follow',
            canonical: (career as any)?.seo_config?.canonical ?? '',
            locale: (career as any)?.seo_config?.locale ?? 'id_ID',
            language: (career as any)?.seo_config?.language ?? 'en',
            type: (career as any)?.seo_config?.type ?? 'career',
            url: (career as any)?.seo_config?.url ?? '',
            image: (career as any)?.seo_config?.image ?? '',
            image_width: (career as any)?.seo_config?.image_width ?? 1200,
            image_height: (career as any)?.seo_config?.image_height ?? 630,
            image_alt: (career as any)?.seo_config?.image_alt ?? '',
            site_name: (career as any)?.seo_config?.site_name ?? '5758 Creative Lab',
            twitter_card: (career as any)?.seo_config?.twitter_card ?? 'summary_large_image',
            twitter_image: (career as any)?.seo_config?.twitter_image ?? '',
            twitter_site: (career as any)?.seo_config?.twitter_site ?? '@5758creativelab',
            twitter_creator: (career as any)?.seo_config?.twitter_creator ?? '@5758creativelab',
            structured_data: (career as any)?.seo_config?.structured_data ?? null,
            breadcrumbs: (career as any)?.seo_config?.breadcrumbs ?? null,
        },
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (career?.id) {
            data._method = 'PUT';
            post(route('operational.career.update', career.id), FormResponse);
        } else {
            post(route('operational.career.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Career Form</h1>
                    <p className="text-sm">{career?.id ? 'Edit Career' : 'Add New Career'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={submit} className="grid grid-cols-12 gap-4">
                <Card className="col-span-12">
                    <CardHeader>
                        <CardTitle>Career Information</CardTitle>
                        <CardDescription>Configure the career information.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Title <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={data.title}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    setData('title', v);
                                    setData('slug', slugify(v));
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Slug <span className="text-destructive">*</span>
                            </Label>
                            <Input value={data.slug} disabled required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Category <span className="text-destructive">*</span>
                            </Label>
                            <MultiSelect
                                placeholder="Category"
                                name="category_id"
                                defaultValue={{ value: data.category_id, label: career?.category?.name ?? '' }}
                                onChange={(v: any) => setData('category_id', v?.value)}
                                loadOptions={fetchCategory}
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Description</Label>
                            <Textarea value={data.description} onChange={(e) => setData('description', e.target.value)} />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Type <span className="text-destructive">*</span>
                            </Label>
                            <Select value={data.type} onValueChange={(value) => setData('type', value)} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="full-time">Full Time</SelectItem>
                                    <SelectItem value="part-time">Part Time</SelectItem>
                                    <SelectItem value="internship">Internship</SelectItem>
                                    <SelectItem value="freelance">Freelance</SelectItem>
                                    <SelectItem value="contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Location <span className="text-destructive">*</span>
                            </Label>
                            <Select value={data.location} onValueChange={(value) => setData('location', value)} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="on-site">On Site</SelectItem>
                                    <SelectItem value="remote">Remote</SelectItem>
                                    <SelectItem value="hybrid">Hybrid</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="col-span-6 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Minimum Salary <span className="text-destructive">*</span>
                            </Label>
                            <Input value={data.min_salary} onChange={(e) => setData('min_salary', parseInt(e.target.value) || 0)} required />
                        </div>
                        <div className="col-span-6 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Maximum Salary <span className="text-destructive">*</span>
                            </Label>
                            <Input value={data.max_salary} onChange={(e) => setData('max_salary', parseInt(e.target.value) || 0)} required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Apply URL <span className="text-destructive">*</span>
                            </Label>
                            <Input value={data.apply_url} onChange={(e) => setData('apply_url', e.target.value)} required />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
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
                                onChange={(_, editor) => {
                                    setData('content', editor.getData());
                                }}
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Thumbnail <span className="text-destructive">*</span>
                            </Label>
                            <FileUpload
                                media={data.thumbnail || career?.thumbnail}
                                onChange={(file) => setData('thumbnail', file)}
                                accept="image/jpeg,image/png,image/gif,image/webp"
                                maxSize={2 * 1024 * 1024}
                                id="thumbnail"
                            />
                        </div>
                    </CardContent>
                </Card>
                <div className="col-span-12">
                    <SeoConfiguration
                        data={data.seo_config}
                        setData={setData}
                        contentTypeOptions={[
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

CareerForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
