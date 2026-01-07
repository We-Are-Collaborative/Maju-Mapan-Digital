import { SeoConfig } from '@/types/seo_config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

type SeoConfigurationProps = {
    data: SeoConfig;
    setData: (field: string, value: any) => void;
    contentTypeOptions?: { value: string; label: string }[];
    requiredFields?: string[];
};

export const SeoConfiguration = ({ data, setData, contentTypeOptions, requiredFields = [] }: SeoConfigurationProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Seo Configuration</CardTitle>
                <CardDescription>Configure the SEO for the article.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">
                            SEO Title {requiredFields.includes('title') && <span className="text-destructive">*</span>}
                        </Label>
                        <Input
                            value={data.title}
                            onChange={(e) => setData('seoConfig', { ...data, title: e.target.value })}
                            placeholder="SEO optimized title"
                            required={requiredFields.includes('title')}
                        />
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">
                            Meta Description {requiredFields.includes('description') && <span className="text-destructive">*</span>}
                        </Label>
                        <ul />
                        <Textarea
                            value={data.description}
                            onChange={(e) => setData('seoConfig', { ...data, description: e.target.value })}
                            placeholder="SEO meta description"
                            rows={3}
                            required={requiredFields.includes('description')}
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">
                            Keywords {requiredFields.includes('keywords') && <span className="text-destructive">*</span>}
                        </Label>
                        <Input
                            value={data.keywords}
                            onChange={(e) => setData('seoConfig', { ...data, keywords: e.target.value })}
                            placeholder="keyword1, keyword2, keyword3"
                            required={requiredFields.includes('keywords')}
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Author {requiredFields.includes('author') && <span className="text-destructive">*</span>}</Label>
                        <ul />
                        <ul />
                        <Input
                            value={data.author}
                            onChange={(e) => setData('seoConfig', { ...data, author: e.target.value })}
                            placeholder="Author name"
                            required={requiredFields.includes('author')}
                        />
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Locale {requiredFields.includes('locale') && <span className="text-destructive">*</span>}</Label>
                        <Input
                            value={data.locale}
                            onChange={(e) => setData('seoConfig', { ...data, locale: e.target.value })}
                            placeholder="id_ID"
                            required={requiredFields.includes('locale')}
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <ul />
                        <Label className="text-base">
                            Language {requiredFields.includes('language') && <span className="text-destructive">*</span>}
                        </Label>
                        <Input
                            value={data.language}
                            onChange={(e) => setData('seoConfig', { ...data, language: e.target.value })}
                            placeholder="en"
                            required={requiredFields.includes('language')}
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">
                            Content Type {requiredFields.includes('type') && <span className="text-destructive">*</span>}
                        </Label>
                        <Select
                            value={data.type}
                            onValueChange={(value) => setData('seoConfig', { ...data, type: value })}
                            required={requiredFields.includes('type')}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select content type" />
                            </SelectTrigger>
                            <SelectContent>
                                {contentTypeOptions?.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                )) || (
                                        <>
                                            <SelectItem value="article">Article</SelectItem>
                                            <SelectItem value="website">Website</SelectItem>
                                            <SelectItem value="blog">Blog</SelectItem>
                                        </>
                                    )}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">
                            Site Name {requiredFields.includes('siteName') && <span className="text-destructive">*</span>}
                        </Label>
                        <Input
                            value={data.siteName}
                            onChange={(e) => setData('seoConfig', { ...data, siteName: e.target.value })}
                            placeholder="Maju Mapan Digital"
                            required={requiredFields.includes('siteName')}
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Canonical URL</Label>
                        <Input
                            value={data.canonical || ''}
                            onChange={(e) => setData('seoConfig', { ...data, canonical: e.target.value })}
                            placeholder="https://example.com/page"
                            type="url"
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Open Graph Image</Label>
                        <Input
                            value={data.image || ''}
                            onChange={(e) => setData('seoConfig', { ...data, image: e.target.value })}
                            placeholder="/path/to/image.jpg"
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Image Width</Label>
                        <Input
                            value={data.imageWidth || ''}
                            onChange={(e) => setData('seoConfig', { ...data, imageWidth: parseInt(e.target.value) || 1200 })}
                            placeholder="1200"
                            type="number"
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Image Height</Label>
                        <Input
                            value={data.imageHeight || ''}
                            onChange={(e) => setData('seoConfig', { ...data, imageHeight: parseInt(e.target.value) || 630 })}
                            placeholder="630"
                            type="number"
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Image Alt Text</Label>
                        <Input
                            value={data.imageAlt || ''}
                            onChange={(e) => setData('seoConfig', { ...data, imageAlt: e.target.value })}
                            placeholder="Image description"
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">
                            Twitter Card Type {requiredFields.includes('twitterCard') && <span className="text-destructive">*</span>}
                        </Label>
                        <Select
                            value={data.twitterCard}
                            onValueChange={(value) => setData('seoConfig', { ...data, twitterCard: value })}
                            required={requiredFields.includes('twitterCard')}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Twitter card type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="summary">Summary</SelectItem>
                                <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                                <SelectItem value="app">App</SelectItem>
                                <SelectItem value="player">Player</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Twitter Image</Label>
                        <Input
                            value={data.twitterImage || ''}
                            onChange={(e) => setData('seoConfig', { ...data, twitterImage: e.target.value })}
                            placeholder="/path/to/twitter-image.jpg"
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Twitter Site</Label>
                        <Input
                            value={data.twitterSite || ''}
                            onChange={(e) => setData('seoConfig', { ...data, twitterSite: e.target.value })}
                            placeholder="@5758creativelab"
                        />
                    </div>

                    <div className="col-span-12 flex flex-col gap-y-1.5">
                        <Label className="text-base">Twitter Creator</Label>
                        <Input
                            value={data.twitterCreator || ''}
                            onChange={(e) => setData('seoConfig', { ...data, twitterCreator: e.target.value })}
                            placeholder="@5758creativelab"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
