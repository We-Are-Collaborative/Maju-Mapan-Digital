import { Category } from './category';
import { Entity } from './entity';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type Article = Entity & {
    category_id?: number;
    category?: Category;
    title?: string;
    slug?: string;
    content?: string;
    excerpt?: string;
    status?: 'draft' | 'published';
    custom_css?: string;
    thumbnail?: Media;
    seo_config?: SeoConfig;
};
