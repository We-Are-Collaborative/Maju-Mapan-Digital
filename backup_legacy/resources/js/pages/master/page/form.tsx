import { SeoConfiguration } from '@/components/seo-configuration';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { Page } from '@/types/page';
import { Head, useForm } from '@inertiajs/react';

interface PageFormProps {
    page?: Page;
}

export default function PageForm({ page }: PageFormProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: page?.name || '',
        slug: page?.slug || '',
        content: page?.content || {},
        seo_config: page?.seo_config || {
            title: '',
            description: '',
            keywords: '',
            author: '',
            canonical: '',
            locale: 'id_ID',
            language: 'id',
            type: 'website',
            site_name: '5758 Creative Lab',
            twitter_card: 'summary_large_image',
            twitter_site: '',
            twitter_creator: '',
            image: '',
            image_width: 1200,
            image_height: 630,
            image_alt: '',
        },
        is_active: page?.is_active ?? true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('master.page.update', page.id));
    };

    const updateSeoConfig = (field: string, value: any) => {
        if (field === 'seo_config') {
            // Handle full seo_config object update from SeoConfiguration component
            setData('seo_config', value);
        } else {
            // Handle individual field updates
            const newSeoConfig = { ...data.seo_config, [field]: value };
            setData('seo_config', newSeoConfig);
        }
    };

    const updateContent = (field: string, value: string) => {
        const newContent = { ...data.content, [field]: value };
        setData('content', newContent);
    };

    // Helper function to format field names for display
    const formatFieldName = (fieldName: string) => {
        return fieldName
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <Head title="Edit Page Content & SEO" />
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-lg font-medium">Edit Page Content & SEO Configuration</h1>
                    <p className="text-sm text-muted-foreground">Configure page content and SEO settings for {data.name || 'this page'}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Page Information</CardTitle>
                            <CardDescription>Basic information about the page</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">
                                        Page Name <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Home"
                                        disabled
                                        required
                                    />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="slug">
                                        Slug <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="slug"
                                        value={data.slug}
                                        onChange={(e) => setData('slug', e.target.value)}
                                        placeholder="home"
                                        disabled
                                        required
                                    />
                                    {errors.slug && <p className="text-sm text-red-500">{errors.slug}</p>}
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        checked={data.is_active}
                                        onChange={(e) => setData('is_active', e.target.checked)}
                                        className="rounded border-gray-300"
                                    />
                                    <Label htmlFor="is_active">Active</Label>
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Saving...' : 'Save Changes'}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Content Editor Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Page Content</CardTitle>
                            <CardDescription>
                                Configure dynamic content for this page. These fields control the text displayed on the frontend.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {data.content && Object.keys(data.content).length > 0 ? (
                                    Object.entries(data.content).map(([key, value]) => (
                                        <div key={key} className="space-y-2">
                                            <Label htmlFor={`content_${key}`} className="text-sm font-medium">
                                                {formatFieldName(key)}
                                            </Label>
                                            {key.includes('description') || key.includes('content') || value?.toString().length > 100 ? (
                                                <Textarea
                                                    id={`content_${key}`}
                                                    value={value?.toString() || ''}
                                                    onChange={(e) => updateContent(key, e.target.value)}
                                                    placeholder={`Enter ${formatFieldName(key).toLowerCase()}...`}
                                                    className="min-h-[80px] resize-y"
                                                />
                                            ) : (
                                                <Input
                                                    id={`content_${key}`}
                                                    value={value?.toString() || ''}
                                                    onChange={(e) => updateContent(key, e.target.value)}
                                                    placeholder={`Enter ${formatFieldName(key).toLowerCase()}...`}
                                                />
                                            )}
                                            {errors[`content.${key}`] && <p className="text-sm text-red-500">{errors[`content.${key}`]}</p>}
                                        </div>
                                    ))
                                ) : (
                                    <div className="py-8 text-center text-gray-500">
                                        <p>No content fields available for this page.</p>
                                        <p className="mt-2 text-sm">Content fields are automatically generated based on the page template.</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <SeoConfiguration
                        data={data.seo_config}
                        setData={updateSeoConfig}
                        contentTypeOptions={[
                            { value: 'article', label: 'Article' },
                            { value: 'website', label: 'Website' },
                            { value: 'blog', label: 'Blog' },
                        ]}
                    />
                </div>
            </div>
        </>
    );
}

PageForm.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
