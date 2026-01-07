import FileUpload from '@/components/file-upload';
import { MultiSelect } from '@/components/multi-select';
import { SeoConfiguration } from '@/components/seo-configuration';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { editor_header, editor_html_support, editor_plugins, editor_table, editor_toolbar } from '@/lib/editor';
import { fetchCategory } from '@/lib/select';
import { slugify } from '@/lib/utils';
import { Article } from '@/types/article';
import { Media } from '@/types/media';
import { SeoConfig } from '@/types/seo_config';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useForm } from '@inertiajs/react';
import { ClassicEditor } from 'ckeditor5';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import 'ckeditor5/ckeditor5.css';
import { FileQuestion, Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type ArticleFormData = {
    _method?: string;
    title: string;
    category_id?: number;
    excerpt: string;
    content: string;
    thumbnail?: Media;
    slug: string;
    status: 'draft' | 'published';
    custom_css: string;
    seo_config: SeoConfig;
};

type ArticleFormProps = {
    article?: Article;
};

export default function ArticleForm({ article }: ArticleFormProps) {
    const { data, setData, processing, post } = useForm<ArticleFormData>({
        title: article?.title ?? '',
        category_id: article?.category_id ?? undefined,
        excerpt: article?.excerpt ?? '',
        content: article?.content ?? '',
        slug: article?.slug ?? '',
        status: article?.status ?? 'published',
        custom_css: article?.custom_css ?? '',
        seo_config: {
            title: (article as any)?.seo_config?.title ?? article?.title ?? '',
            description: (article as any)?.seo_config?.description ?? article?.excerpt ?? '',
            keywords: (article as any)?.seo_config?.keywords ?? '',
            author: (article as any)?.seo_config?.author ?? '5758 Creative Lab',
            robots: (article as any)?.seo_config?.robots ?? 'index, follow',
            canonical: (article as any)?.seo_config?.canonical ?? '',
            locale: (article as any)?.seo_config?.locale ?? 'id_ID',
            language: (article as any)?.seo_config?.language ?? 'en',
            type: (article as any)?.seo_config?.type ?? 'article',
            url: (article as any)?.seo_config?.url ?? '',
            image: (article as any)?.seo_config?.image ?? '',
            image_width: (article as any)?.seo_config?.image_width ?? 1200,
            image_height: (article as any)?.seo_config?.image_height ?? 630,
            image_alt: (article as any)?.seo_config?.image_alt ?? '',
            site_name: (article as any)?.seo_config?.site_name ?? '5758 Creative Lab',
            twitter_card: (article as any)?.seo_config?.twitter_card ?? 'summary_large_image',
            twitter_image: (article as any)?.seo_config?.twitter_image ?? '',
            twitter_site: (article as any)?.seo_config?.twitter_site ?? '@5758creativelab',
            twitter_creator: (article as any)?.seo_config?.twitter_creator ?? '@5758creativelab',
            structured_data: (article as any)?.seo_config?.structured_data ?? null,
            breadcrumbs: (article as any)?.seo_config?.breadcrumbs ?? null,
        },
    });

    const submit = (e: React.FormEvent<HTMLFormElement>, status: 'draft' | 'published') => {
        e.preventDefault();

        if (article?.id) {
            data._method = 'PUT';
            data.status = status;
            post(route('master.article.update', article.id), FormResponse);
        } else {
            data.status = status;
            post(route('master.article.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Article Form</h1>
                    <p className="text-sm">{article?.id ? 'Edit Article' : 'Add New Article'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>

            <div className="grid grid-cols-12 gap-4">
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
                        defaultValue={{ value: data.category_id, label: article?.category?.name ?? '' }}
                        onChange={(v: any) => setData('category_id', v?.value)}
                        loadOptions={fetchCategory}
                    />
                </div>

                {/* Excerpt */}
                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label className="text-base">Excerpt</Label>
                    <Textarea
                        value={data.excerpt}
                        onChange={(e) => {
                            const v = e.target.value;
                            setData('excerpt', v);
                        }}
                    />
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
                            placeholder: 'Write your article here...',
                        }}
                        onChange={(event, editor) => {
                            setData('content', editor.getData());
                        }}
                    />
                </div>

                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label className="text-base">Custom CSS</Label>
                    <Textarea
                        value={data.custom_css}
                        onChange={(e) => {
                            const v = e.target.value;
                            setData('custom_css', v);
                        }}
                    />
                </div>

                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label className="text-base">Thumbnail</Label>
                    <FileUpload
                        media={data.thumbnail || article?.thumbnail}
                        onChange={(file) => setData('thumbnail', file)}
                        accept="image/jpeg,image/png,image/gif,image/webp"
                        maxSize={2 * 1024 * 1024}
                        id="thumbnail"
                    />
                </div>

                <div className="col-span-12">
                    <SeoConfiguration
                        data={data.seo_config}
                        setData={setData}
                        contentTypeOptions={[
                            { value: 'article', label: 'Article' },
                            { value: 'website', label: 'Website' },
                            { value: 'blog', label: 'Blog' },
                        ]}
                        requiredFields={['title', 'description', 'keywords', 'author', 'locale', 'language', 'type', 'site_name', 'twitter_card']}
                    />
                </div>

                <div className="col-span-12 flex flex-row gap-2">
                    <form onSubmit={(e) => submit(e, 'draft')}>
                        <Button type="submit" variant="outline" disabled={processing}>
                            {processing ? <Loader2 className="mr-2 size-4 animate-spin" /> : 'Save as Draft'}
                        </Button>
                    </form>

                    <form onSubmit={(e) => submit(e, 'published')}>
                        <Button type="submit" disabled={processing}>
                            {processing && <Loader2 className="mr-2 size-4 animate-spin" />}
                            Publish
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

ArticleForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
