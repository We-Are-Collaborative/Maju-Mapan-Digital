import { Category } from './category';
import { Entity } from './entity';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type Career = Entity & {
    category_id?: number;
    category?: Category;
    min_salary?: number;
    max_salary?: number;
    title?: string;
    slug?: string;
    type?: string;
    location?: string;
    description?: string;
    content?: string;
    apply_url?: string;
    thumbnail?: Media;
    seo_config?: SeoConfig;
};
