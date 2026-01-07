import { Entity } from './entity';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type WhyChoose = {
    title: string;
    description: string;
};

export type ProcessStep = {
    number: string;
    title: string;
    description: string;
};

export type Value = Entity & {
    title?: string;
    subtitle?: string;
    body_title?: string;
    body_subtitle?: string;
    icon_url?: string;
    slug?: string;
    description?: string;
    excerpt?: string;
    why_choose?: WhyChoose[];
    process?: ProcessStep[];
    thumbnail: Media;
    background: Media;
    seo_config?: SeoConfig;
};
