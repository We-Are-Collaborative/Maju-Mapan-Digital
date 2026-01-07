import { Media } from './media';

export type StakeHolder = {
    id: number;
    name: string;
    position: string;
    excerpt: string;
    content: string | null;
    email: string | null;
    linkedin_url: string | null;
    linkedin_text: string | null;
    created_at: string;
    updated_at: string;
    thumbnail: Media & File;
};
