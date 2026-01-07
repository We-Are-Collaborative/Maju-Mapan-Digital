import InputError from '@/components/input-error';
import { PasswordInput } from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { FormResponse } from '@/lib/constant';
import { useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type LoginForm = {
    email: string;
    password: string;
};

export default function Login() {
    const { data, setData, post, errors, processing } = useForm<LoginForm>({
        email: '',
        password: '',
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('attempt'), FormResponse);
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome To Laratail Console</h1>
                <p className="text-sm text-balance text-muted-foreground">Please enter your email and password below to login to your account</p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        value={data.email}
                        autoComplete="email"
                        onChange={(v) => setData('email', v.currentTarget.value)}
                        type="email"
                        required
                    />
                    <InputError message={errors?.email} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput
                        id="password"
                        value={data.password}
                        onChange={(v) => setData('password', v.currentTarget.value)}
                        autoComplete="current-password"
                        required
                    />
                    <InputError message={errors?.password} />
                </div>
                <Button disabled={processing} type="submit" className="w-full">
                    {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Login
                </Button>
            </div>
        </form>
    );
}

Login.layout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;
