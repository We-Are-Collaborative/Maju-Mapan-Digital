import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const AuthLayout = (props: PropsWithChildren) => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="https://www.journey.sekolahauliya.sch.id/wp-content/uploads/2023/12/Pembelajaran-Coding-di-SD-Pentingnya-Mengembangkan-Keterampilan-Digital-Sejak-Dini-.jpeg"
                    alt="Coding Ilustration"
                    className="relative inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end gap-1 p-4">
                    <h1 className="text-xl font-bold text-white">Laratail Blogging Platform</h1>
                    <p className="text-white">Customized Blogging Platform For 5758</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                    <Toaster />
                    <div className="w-full max-w-md">{props.children}</div>
                </div>
            </div>
        </div>
    );
};
