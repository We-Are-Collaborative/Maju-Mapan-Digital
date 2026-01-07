import { Media } from "./media";

export interface Library {
    id: number;
    name: string;
    original_name: string;
    path: string;
    mime_type: string;
    size: number;
    public_url: string;
    description?: string;
    status: 'active' | 'inactive';
    created_at: string;
    updated_at: string;
    file_url?: string;
    extension?: string;
    formatted_size?: string;
    media?: Media;
}
