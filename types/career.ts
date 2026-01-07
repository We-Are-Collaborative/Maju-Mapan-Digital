import { Category } from './category';
import { Entity } from './entity';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type Career = Entity & {
    categoryId?: string;
    category?: Category;
    minSalary?: number;
    maxSalary?: number;
    title?: string;
    slug?: string;
    type?: string;
    location?: string;
    description?: string;
    content?: string;
    applyUrl?: string;

    status?: string;
    thumbnail?: Media;
    seoConfig?: SeoConfig;
};
