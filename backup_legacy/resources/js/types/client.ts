import { Media } from "./media";

export type Client = {
    id: number;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    is_featured: any;
    status: string;
    created_at: string;
    updated_at: string;
    logo: Media & File;
};