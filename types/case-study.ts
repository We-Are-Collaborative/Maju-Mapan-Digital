import { Client } from './client';
import { Media } from './media';
import { SeoConfig } from './seo_config';

export type CaseStudy = {
    id: string;
    clientId: string | null;
    client?: Client | null;
    title: string;
    slug: string;
    content?: string | null;
    excerpt?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    status: string;
    thumbnailUrl?: string | null;
    thumbnail?: Media | null;
    isFeatured: boolean;
    seoConfig?: SeoConfig | null;
    createdAt: string;
    updatedAt: string;
};
