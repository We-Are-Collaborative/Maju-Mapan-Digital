import { Base } from '@/types/base';
import { Category } from '@/types/category';
import { Client } from '@/types/client';
import axios from 'axios';

export type SelectOption = {
    value: any;
    label: any;
};

export const fetchCategory = async (search: any): Promise<SelectOption[]> => {
    const response = await axios.get<Base<Category[]>>(route('master.category.fetch'), {
        params: { 'filter[name]': search },
    });

    return (response.data.items ?? []).map((e: Category) => ({
        value: e.id,
        label: e.name,
    }));
};

export const fetchClient = async (search: any): Promise<SelectOption[]> => {
    const response = await axios.get<Base<Client[]>>(route('master.client.fetch'), {
        params: { 'filter[name]': search },
    });

    return (response.data.items ?? []).map((e: Client) => ({
        value: e.id,
        label: e.name,
    }));
};
