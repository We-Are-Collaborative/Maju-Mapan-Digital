import { Client } from './client';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type Showcase = {
    id: number;
    client_id: number;
    client: Client;
    name: string;
    slug: string;
    content: string;
    excerpt: string;
    start_date: string;
    end_date: string;
    status: string;
    thumbnail?: Media;
    seo_config?: SeoConfig;
    created_at: string;
    updated_at: string;
};
