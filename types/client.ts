import { Media } from "./media";

export type Client = {
    id: string;
    name: string;
    legalName?: string | null;
    slug: string;
    description?: string | null;
    excerpt?: string | null;
    email?: string | null;
    website?: string | null;
    phone?: string | null;
    address?: string | null;
    logo?: Media | null;
    logoUrl?: string | null;
    brandColor?: string | null;
    isFeatured: boolean;
    status: string;
    order: number;
    caseStudies?: any[];
    createdAt: string;
    updatedAt: string;
};