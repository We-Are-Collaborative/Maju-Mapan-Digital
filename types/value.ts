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
    bodyTitle?: string;
    bodySubtitle?: string;
    iconUrl?: string;
    iconAlt?: string;
    slug?: string;
    description?: string;
    excerpt?: string;
    whyChoose?: WhyChoose[];
    process?: ProcessStep[];
    thumbnail: Media;
    background: Media;
    seoConfig?: SeoConfig;
};
