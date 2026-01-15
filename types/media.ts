import { Entity } from './entity';

export type Media = {
    id?: number;
    modelType?: string;
    modelId?: number;
    uuid?: string;
    collectionName?: string;
    name?: string;
    fileName?: string;
    mimeType?: string;
    disk?: string;
    conversionsDisk?: string;
    size?: number;
    manipulations?: any[];
    customProperties?: any[];
    generatedConversions?: any[];
    responsiveImages?: any[];
    orderColumn?: number;
    createdAt?: string;
    updatedAt?: string;
    originalUrl?: string;
    previewUrl?: string;
    alt?: string | null;
};