import { Entity } from './entity';

export type Inquiry = Entity & {
    name: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    date: string;
    marketing_objective: string;
};
