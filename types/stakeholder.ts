import { Media } from './media';

export type StakeHolder = {
    id: number;
    name: string;
    position: string;
    excerpt: string;
    content: string | null;
    email: string | null;
    linkedinUrl: string | null;
    linkedinText: string | null;
    createdAt: string;
    updatedAt: string;
    thumbnail: Media;
};
