import { Entity } from './entity';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type KeyComponent = {
    title: string;
    description: string;
    iconUrl: string;
};

export type StrategyWork = {
    title: string;
    description: string;
};

export type Speciality = Entity & {
    title?: string;
    subtitle?: string;
    iconUrl?: string;
    slug?: string;
    description?: string;
    excerpt?: string;
    background?: Media;
    thumbnail?: Media;
    media?: Media[];
    keyComponent?: KeyComponent[];
    strategyWork?: StrategyWork[];
    seoConfig?: SeoConfig;
};
