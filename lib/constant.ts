// import { VisitOptions } from '@inertiajs/core';
import { toast } from 'sonner';

export const FormResponse: any = {
    onSuccess: () => {
        toast.success('Success...');
    },
    onError: (err: any) => {
        toast.error(JSON.stringify(err));
    },
};