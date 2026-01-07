import { Entity } from './entity';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type KeyComponent = {
    title: string;
    description: string;
    icon_url: string;
};

export type StrategyWork = {
    title: string;
    description: string;
};

export type Speciality = Entity & {
    title?: string;
    subtitle?: string;
    icon_url?: string;
    slug?: string;
    description?: string;
    excerpt?: string;
    background?: Media;
    thumbnail?: Media;
    media?: Media[];
    key_component?: KeyComponent[];
    strategy_work?: StrategyWork[];
    seo_config?: SeoConfig;
};
