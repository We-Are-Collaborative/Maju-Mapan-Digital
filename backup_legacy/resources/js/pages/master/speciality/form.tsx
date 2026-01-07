'use client';

import type React from 'react';

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
import type { Speciality } from '@/types/speciality';
import { useForm } from '@inertiajs/react';
import { FileQuestion, Loader2, Plus, Trash } from 'lucide-react';
import { type ReactNode } from 'react';

type SpecialityFormData = {
    _method?: string;
    title: string;
    slug: string;
    subtitle: string;
    excerpt: string;
    description: string;
    key_component: KeyComponent[];
    strategy_work: StrategyWork[];
    thumbnail?: Media;
    seo_config: SeoConfig;
    icon_url?: string;
};

type SpecialityFormProps = {
    speciality?: Speciality;
};

type KeyComponent = {
    title: string;
    description: string;
    icon_url: string;
};

type StrategyWork = {
    title: string;
    description: string;
};

export default function SpecialityForm({ speciality }: SpecialityFormProps) {
    const { data, setData, post, processing } = useForm<SpecialityFormData>({
        title: speciality?.title ?? '',
        slug: speciality?.slug ?? '',
        subtitle: speciality?.subtitle ?? '',
        excerpt: speciality?.excerpt ?? '',
        description: speciality?.description ?? '',
        icon_url: speciality?.icon_url ?? '',
        key_component: Array.isArray(speciality?.key_component) ? (speciality.key_component as KeyComponent[]) : [],
        strategy_work: Array.isArray(speciality?.strategy_work) ? (speciality.strategy_work as StrategyWork[]) : [],
        seo_config: {
            title: (speciality as any)?.seo_config?.title ?? speciality?.title ?? '',
            description: (speciality as any)?.seo_config?.description ?? speciality?.excerpt ?? '',
            keywords: (speciality as any)?.seo_config?.keywords ?? '',
            author: (speciality as any)?.seo_config?.author ?? '5758 Creative Lab',
            robots: (speciality as any)?.seo_config?.robots ?? 'index, follow',
            canonical: (speciality as any)?.seo_config?.canonical ?? '',
            locale: (speciality as any)?.seo_config?.locale ?? 'id_ID',
            language: (speciality as any)?.seo_config?.language ?? 'en',
            type: (speciality as any)?.seo_config?.type ?? 'speciality',
            url: (speciality as any)?.seo_config?.url ?? '',
            image: (speciality as any)?.seo_config?.image ?? '',
            image_width: (speciality as any)?.seo_config?.image_width ?? 1200,
            image_height: (speciality as any)?.seo_config?.image_height ?? 630,
            image_alt: (speciality as any)?.seo_config?.image_alt ?? '',
            site_name: (speciality as any)?.seo_config?.site_name ?? '5758 Creative Lab',
            twitter_card: (speciality as any)?.seo_config?.twitter_card ?? 'summary_large_image',
            twitter_image: (speciality as any)?.seo_config?.twitter_image ?? '',
            twitter_site: (speciality as any)?.seo_config?.twitter_site ?? '@5758creativelab',
            twitter_creator: (speciality as any)?.seo_config?.twitter_creator ?? '@5758creativelab',
            structured_data: (speciality as any)?.seo_config?.structured_data ?? null,
            breadcrumbs: (speciality as any)?.seo_config?.breadcrumbs ?? null,
        },
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (speciality?.id) {
            data._method = 'PUT';
            post(route('master.speciality.update', speciality.id), FormResponse);
        } else {
            post(route('master.speciality.store'), FormResponse);
        }
    };

    // helpers: Key Component
    const updateKeyComponent = (index: number, patch: Partial<KeyComponent>) => {
        const updated = (data.key_component ?? []).map((item, i) => (i === index ? { ...item, ...patch } : item));
        setData('key_component', updated);
    };
    const addKeyComponent = () => setData('key_component', [...(data.key_component ?? []), { title: '', description: '', icon_url: '' }]);
    const removeKeyComponent = (index: number) =>
        setData(
            'key_component',
            (data.key_component ?? []).filter((_, i) => i !== index),
        );

    // helpers: Strategy Work
    const updateStrategyWork = (index: number, patch: Partial<StrategyWork>) => {
        const updated = (data.strategy_work ?? []).map((item, i) => (i === index ? { ...item, ...patch } : item));
        setData('strategy_work', updated);
    };
    const addStrategyWork = () => setData('strategy_work', [...(data.strategy_work ?? []), { title: '', description: '' }]);
    const removeStrategyWork = (index: number) =>
        setData(
            'strategy_work',
            (data.strategy_work ?? []).filter((_, i) => i !== index),
        );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Speciality Form</h1>
                    <p className="text-sm">{speciality?.id ? 'Edit Speciality' : 'Add New Speciality'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={submit} className="grid grid-cols-12 gap-4">
                <Card className="col-span-12">
                    <CardHeader>
                        <CardTitle>Speciality Information</CardTitle>
                        <CardDescription>Configure the speciality information.</CardDescription>
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
                                Icon URL <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={data.icon_url}
                                onChange={(e) => {
                                    setData('icon_url', e.target.value);
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
                        {/* Key Component */}
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Key Component <span className="text-destructive">*</span>
                            </Label>
                            {(data.key_component ?? []).map((item, index) => (
                                <div key={index} className="mb-2 flex flex-row gap-x-2">
                                    <Input
                                        required
                                        value={item.title}
                                        placeholder="Title"
                                        onChange={(e) => updateKeyComponent(index, { title: e.target.value })}
                                    />
                                    <Input
                                        required
                                        value={item.icon_url}
                                        placeholder="Icon URL"
                                        onChange={(e) => updateKeyComponent(index, { icon_url: e.target.value })}
                                    />
                                    <Input
                                        required
                                        value={item.description}
                                        placeholder="Description"
                                        onChange={(e) => updateKeyComponent(index, { description: e.target.value })}
                                    />
                                    <Button
                                        onClick={() => removeKeyComponent(index)}
                                        type="button"
                                        variant="destructive"
                                        className="size-8"
                                        aria-label={`Remove Key Component #${index + 1}`}
                                    >
                                        <Trash />
                                    </Button>
                                </div>
                            ))}
                            <Button onClick={addKeyComponent} type="button" variant="outline" className="w-full">
                                <Plus />
                                Add Key Component
                            </Button>
                        </div>

                        {/* Strategy Work */}
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">
                                Strategy Work <span className="text-destructive">*</span>
                            </Label>
                            {(data.strategy_work ?? []).map((item, index) => (
                                <div key={index} className="mb-2 flex flex-row gap-x-2">
                                    <Input
                                        required
                                        value={item.title}
                                        placeholder="Title"
                                        onChange={(e) => updateStrategyWork(index, { title: e.target.value })}
                                    />
                                    <Input
                                        required
                                        value={item.description}
                                        placeholder="Description"
                                        onChange={(e) => updateStrategyWork(index, { description: e.target.value })}
                                    />
                                    <Button
                                        onClick={() => removeStrategyWork(index)}
                                        type="button"
                                        variant="destructive"
                                        className="size-8"
                                        aria-label={`Remove Strategy Work #${index + 1}`}
                                    >
                                        <Trash />
                                    </Button>
                                </div>
                            ))}
                            <Button onClick={addStrategyWork} type="button" variant="outline" className="w-full">
                                <Plus />
                                Add Strategy Work
                            </Button>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1.5">
                            <Label className="text-base">Thumbnail</Label>
                            <FileUpload
                                media={data.thumbnail || (speciality as any)?.thumbnail}
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

SpecialityForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
