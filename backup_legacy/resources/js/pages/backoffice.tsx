import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AppLayout } from '@/layouts/app-layout';
import { ReactNode } from 'react';

export default function Backoffice() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <Card className="col-span-12">
                <CardHeader>
                    <CardTitle>Welcome to Backoffice</CardTitle>
                    <CardDescription>Welcome to Backoffice</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}

Backoffice.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
