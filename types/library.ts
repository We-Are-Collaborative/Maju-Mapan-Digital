import { Media } from "./media";

export interface Library {
    id: number;
    name: string;
    originalName: string;
    path: string;
    mimeType: string;
    size: number;
    publicUrl: string;
    description?: string;
    status: 'active' | 'inactive';
    createdAt: string;
    updatedAt: string;
    fileUrl?: string;
    extension?: string;
    formattedSize?: string;
    media?: Media;
}
