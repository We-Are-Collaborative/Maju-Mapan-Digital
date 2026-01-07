import { Entity } from './entity';

export type Category = Entity & {
    name?: string;
    slug?: string;
};