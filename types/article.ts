import { Category } from './category';
import { Entity } from './entity';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type Article = Entity & {
    categoryId?: string;
    category?: Category;
    title?: string;
    slug?: string;
    content?: string;
    excerpt?: string;
    status?: 'draft' | 'published';
    customCss?: string;
    thumbnail?: Media;
    thumbnailUrl?: string; // Adding for convenience if needed
    isFeatured?: boolean;
    seoConfig?: SeoConfig;
};
