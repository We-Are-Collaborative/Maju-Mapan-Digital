import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { Library } from '@/types/library';
import { useForm } from '@inertiajs/react';
import { FileQuestion, Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type LibraryFormProps = {
    library?: Library;
};

type FormData = {
    name: string;
    description: string;
    status: string;
    file: File | null;
};

export default function LibraryForm({ library }: LibraryFormProps) {
    const { data, setData, post, put, processing, errors } = useForm<FormData>({
        name: library?.name || '',
        description: library?.description || '',
        status: library?.status || 'active',
        file: null,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (library?.id) {
            put(route('master.library.update', library.id), FormResponse);
        } else {
            post(route('master.library.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Library Form</h1>
                    <p className="text-sm">{library?.id ? 'Edit File' : 'Upload New File'}</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>

            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4">
                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label className="text-base">
                        File Name <span className="text-destructive">*</span>
                    </Label>
                    <Input value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="Enter file name" required />
                    <InputError message={errors.name} />
                </div>

                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label className="text-base">Description</Label>
                    <Textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Enter file description (optional)"
                        rows={3}
                    />
                    <InputError message={errors.description} />
                </div>

                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label className="text-base">
                        Status <span className="text-destructive">*</span>
                    </Label>
                    <Select value={data.status} onValueChange={(value) => setData('status', value)} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.status} />
                </div>

                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label className="text-base">File Upload {!library?.id && <span className="text-destructive">*</span>}</Label>
                    <FileUpload
                        media={
                            data.file || {
                                ...library?.media,
                                original_url: library?.file_url,
                                name: library?.original_name,
                                mime_type: library?.mime_type,
                                size: library?.size,
                            }
                        }
                        onChange={(file) => setData('file', file || null)}
                        maxSize={5 * 1024 * 1024}
                        accept="application/pdf,image/*"
                    />
                    <InputError message={errors.file} />

                    {library?.id && (
                        <div className="mt-2 rounded-md bg-gray-50 p-3">
                            <p className="mb-2 text-sm text-gray-600">Current file:</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{library.original_name}</span>
                                <span className="text-xs text-gray-500">({library.formatted_size})</span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">Upload a new file to replace the current one</p>
                        </div>
                    )}
                </div>

                <div className="col-span-12">
                    <Button type="submit" disabled={processing}>
                        {processing && <Loader2 className="mr-2 size-4 animate-spin" />}
                        {library?.id ? 'Update File' : 'Upload File'}
                    </Button>
                </div>
            </form>
        </div>
    );
}

LibraryForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
