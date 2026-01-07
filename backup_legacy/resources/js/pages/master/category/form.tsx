import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { slugify } from '@/lib/utils';
import { Category } from '@/types/category';
import { useForm } from '@inertiajs/react';
import { FileQuestion } from 'lucide-react';
import { ReactNode } from 'react';

type CategoryFormProps = {
    category: Category;
};

export default function CategoryForm({ category }: CategoryFormProps) {
    const { data, setData, processing, post, put } = useForm<Category>({
        name: category?.name,
        slug: category?.slug,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (category?.id) {
            put(route('master.category.update', category.id), FormResponse);
        } else {
            post(route('master.category.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Category Form</h1>
                    <p className="text-sm">Add New Category</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={onSubmit} className="my-4 grid grid-cols-12 gap-4">
                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label>
                        Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        value={data.name}
                        onChange={(e) => {
                            setData({
                                ...data,
                                name: e.target.value,
                                slug: slugify(e.target.value),
                            });
                        }}
                        required
                    />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label>
                        Slug <span className="text-destructive">*</span>
                    </Label>
                    <Input value={data.slug} readOnly required />
                </div>
                <div className="col-span-12">
                    <Button disabled={processing} type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

CategoryForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
