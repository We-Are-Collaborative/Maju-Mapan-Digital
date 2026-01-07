import FileUpload from '@/components/file-upload';
import { SeoConfiguration } from '@/components/seo-configuration';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { slugify } from '@/lib/utils';
import { Media } from '@/types/media';
import { SeoConfig } from '@/types/seo_config';
import { Value } from '@/types/value';
import { useForm } from '@inertiajs/react';
import { FileQuestion, Loader2, Plus, Trash } from 'lucide-react';
import { ReactNode } from 'react';

type ValueFormData = {
    _method?: string;
    title: string;
    body_title: string;
    body_subtitle: string;
    slug: string;
    description: string;
    excerpt: string;
    subtitle: string;
    why_choose: WhyChoose[];
    process: Process[];
    thumbnail?: Media & File;
    background?: Media & File;
    icon_url?: string;
    seo_config: SeoConfig;
};

type ValueFormProps = {
    value?: Value;
};

type WhyChoose = {
    title: string;
    description: string;
};

type Process = {
    title: string;
    description: string;
};

export default function ValueForm({ value }: ValueFormProps) {
    const { data, setData, post, processing } = useForm<ValueFormData>({
        title: value?.title ?? '',
        body_title: value?.body_title ?? '',
        body_subtitle: value?.body_subtitle ?? '',
        slug: value?.slug ?? '',
        description: value?.description ?? '',
        excerpt: value?.excerpt ?? '',
        subtitle: value?.subtitle ?? '',
        why_choose: Array.isArray(value?.why_choose) ? (value.why_choose as WhyChoose[]) : [],
        process: Array.isArray(value?.process) ? (value.process as Process[]) : [],
        icon_url: value?.icon_url ?? '',
        seo_config: {
            title: (value as any)?.seo_config?.title ?? value?.title ?? '',
            description: (value as any)?.seo_config?.description ?? value?.excerpt ?? '',
            keywords: (value as any)?.seo_config?.keywords ?? '',
            author: (value as any)?.seo_config?.author ?? '5758 Creative Lab',
            robots: (value as any)?.seo_config?.robots ?? 'index, follow',
            canonical: (value as any)?.seo_config?.canonical ?? '',
            locale: (value as any)?.seo_config?.locale ?? 'id_ID',
            language: (value as any)?.seo_config?.language ?? 'en',
            type: (value as any)?.seo_config?.type ?? 'article',
            url: (value as any)?.seo_config?.url ?? '',
            image: (value as any)?.seo_config?.image ?? '',
            image_width: (value as any)?.seo_config?.image_width ?? 1200,
            image_height: (value as any)?.seo_config?.image_height ?? 630,
            image_alt: (value as any)?.seo_config?.image_alt ?? '',
            site_name: (value as any)?.seo_config?.site_name ?? '5758 Creative Lab',
            twitter_card: (value as any)?.seo_config?.twitter_card ?? 'summary_large_image',
            twitter_image: (value as any)?.seo_config?.twitter_image ?? '',
            twitter_site: (value as any)?.seo_config?.twitter_site ?? '@5758creativelab',
            twitter_creator: (value as any)?.seo_config?.twitter_creator ?? '@5758creativelab',
            structured_data: (value as any)?.seo_config?.structured_data ?? null,
            breadcrumbs: (value as any)?.seo_config?.breadcrumbs ?? null,
        },
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value?.id) {
            data._method = 'PUT';
            post(route('master.value.update', value.id), FormResponse);
        } else {
            post(route('master.value.store'), FormResponse);
        }
    };

    const updateWhyChoose = (index: number, patch: Partial<WhyChoose>) => {
        const updated = (data.why_choose ?? []).map((item, i) => (i === index ? { ...item, ...patch } : item));
        setData('why_choose', updated);
    };

    const addWhyChoose = () => setData('why_choose', [...(data.why_choose ?? []), { title: '', description: '' }]);

    const removeWhyChoose = (index: number) =>
        setData(
            'why_choose',
            (data.why_choose ?? []).filter((_, i) => i !== index),
        );

    const updateProcess = (index: number, patch: Partial<Process>) => {
        const updated = (data.process ?? []).map((item, i) => (i === index ? { ...item, ...patch } : item));
        setData('process', updated);
    };

    const addProcess = () => setData('process', [...(data.process ?? []), { title: '', description: '' }]);

    const removeProcess = (index: number) =>
        setData(
            'process',
            (data.process ?? []).filter((_, i) => i !== index),
        );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Value Form</h1>
                    <p className="text-sm">{value?.id ? 'Edit Value' : 'Add New Value'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={submit} className="grid grid-cols-12 gap-4">
                <Card className="col-span-12">
                    <CardHeader>
                        <CardTitle>Value Information</CardTitle>
                        <CardDescription>Configure the value information.</CardDescription>
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
                                Subtitle <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={data.subtitle}
                                onChange={(e) => {
                                    setData('subtitle', e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Excerpt <span className="text-destructive">*</span>
                            </Label>
                            <Textarea
                                value={data.excerpt}
                                onChange={(e) => {
                                    setData('excerpt', e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Body Title <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={data.body_title}
                                onChange={(e) => {
                                    setData('body_title', e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Body Subtitle <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={data.body_subtitle}
                                onChange={(e) => {
                                    setData('body_subtitle', e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Description <span className="text-destructive">*</span>
                            </Label>
                            <Textarea
                                value={data.description}
                                onChange={(e) => {
                                    setData('description', e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Why Choose <span className="text-destructive">*</span>
                            </Label>
                            {(data.why_choose ?? []).map((item, index) => (
                                <div key={index} className="mb-2 flex flex-row gap-x-2">
                                    <Input
                                        value={item.title}
                                        placeholder="Title"
                                        onChange={(e) => updateWhyChoose(index, { title: e.target.value })}
                                        required
                                    />
                                    <Input
                                        value={item.description}
                                        placeholder="Description"
                                        onChange={(e) => updateWhyChoose(index, { description: e.target.value })}
                                        required
                                    />
                                    <Button
                                        onClick={() => removeWhyChoose(index)}
                                        type="button"
                                        variant="destructive"
                                        className="size-8"
                                        aria-label={`Remove Why Choose #${index + 1}`}
                                    >
                                        <Trash className="text-white" />
                                    </Button>
                                </div>
                            ))}
                            <Button onClick={addWhyChoose} type="button" variant="outline" className="w-full">
                                <Plus />
                                Add Why Choose
                            </Button>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Process <span className="text-destructive">*</span>
                            </Label>
                            {(data.process ?? []).map((item, index) => (
                                <div key={index} className="mb-2 flex flex-row gap-x-2">
                                    <Input
                                        value={item.title}
                                        placeholder="Title"
                                        onChange={(e) => updateProcess(index, { title: e.target.value })}
                                        required
                                    />
                                    <Input
                                        value={item.description}
                                        placeholder="Description"
                                        onChange={(e) => updateProcess(index, { description: e.target.value })}
                                        required
                                    />
                                    <Button
                                        onClick={() => removeProcess(index)}
                                        type="button"
                                        variant="destructive"
                                        className="size-8"
                                        aria-label={`Remove Process #${index + 1}`}
                                    >
                                        <Trash className="text-white" />
                                    </Button>
                                </div>
                            ))}
                            <Button onClick={addProcess} type="button" variant="outline" className="w-full">
                                <Plus />
                                Add Process
                            </Button>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Icon URL <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                placeholder="Paste your icon URL here"
                                value={data.icon_url}
                                onChange={(e) => {
                                    setData('icon_url', e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Thumbnail</Label>
                            <FileUpload
                                media={data.thumbnail || value?.thumbnail}
                                onChange={(file) => setData('thumbnail', file)}
                                accept="image/*"
                                maxSize={2 * 1024 * 1024}
                                id="thumbnail"
                            />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Background</Label>
                            <FileUpload
                                media={data.background || value?.background}
                                onChange={(file) => setData('background', file)}
                                accept="image/*"
                                maxSize={2 * 1024 * 1024}
                                id="background"
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

ValueForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
