import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { Setting } from '@/types/setting';
import { useForm } from '@inertiajs/react';
import { FileQuestion } from 'lucide-react';
import { ReactNode } from 'react';

type SettingFormProps = {
    setting: Setting;
};

export default function SettingForm({ setting }: SettingFormProps) {
    const { data, setData, processing, post, put } = useForm<Setting>({
        key: setting?.key,
        value: setting?.value,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (setting?.id) {
            put(route('setting.update', setting.id), FormResponse);
        } else {
            post(route('setting.store'), FormResponse);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">System Setting Form</h1>
                    <p className="text-sm">Add New System Setting</p>
                </div>
                <Button variant="outline">
                    <FileQuestion />
                </Button>
            </div>
            <form onSubmit={onSubmit} className="my-4 grid grid-cols-12 gap-4">
                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label>Key</Label>
                    <Input autoComplete="one-time-code" value={data.key} onChange={(e) => setData('key', e.target.value)} />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1.5">
                    <Label>Value</Label>
                    <Textarea autoComplete="one-time-code" value={data.value} onChange={(e) => setData('value', e.target.value)} />
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

SettingForm.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
