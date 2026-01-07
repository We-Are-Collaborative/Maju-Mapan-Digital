import NextTable from '@/components/next-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/layouts/app-layout';
import { Page } from '@/types/page';
import { Base } from '@/types/base';
import { Link } from '@inertiajs/react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Eye } from 'lucide-react';
import { ReactNode } from 'react';

export default function PageIndex() {
    const load = async (params: Record<string, unknown>) => {
        const response = await axios.get<Base<Page[]>>(route('master.page.fetch', params));
        return response.data;
    };

    const helper = createColumnHelper<Page>();

    const columns: ColumnDef<Page, any>[] = [
        helper.accessor('id', {
            id: 'id',
            header: 'ID',
            enableColumnFilter: false,
            enableHiding: false,
        }),
        helper.accessor('name', {
            id: 'name',
            header: 'Name',
            cell: ({ row }) => row.original.name,
        }),
        helper.accessor('slug', {
            id: 'slug',
            header: 'Slug',
            cell: ({ row }) => row.original.slug,
        }),
        helper.accessor('is_active', {
            id: 'is_active',
            header: 'Status',
            cell: ({ row }) => {
                const isActive = row.original.is_active ?? true;
                return <Badge variant={isActive ? 'default' : 'secondary'}>{isActive ? 'Active' : 'Inactive'}</Badge>;
            },
        }),
        helper.display({
            id: 'created_at',
            header: 'Created At',
            enableColumnFilter: false,
            cell: ({ row }) => format(parseISO(row.original.created_at ?? ''), 'dd, MMM yyyy'),
        }),
        helper.display({
            id: 'updated_at',
            header: 'Updated At',
            cell: ({ row }) => format(parseISO(row.original.updated_at ?? ''), 'dd, MMM yyyy'),
        }),
        helper.display({
            id: 'actions',
            header: 'Actions',
            enableColumnFilter: false,
            enableHiding: false,
            enablePinning: true,
            cell: ({ row }) => {
                return (
                    <Link href={route('master.page.show', row.original.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Edit
                        </Button>
                    </Link>
                );
            },
            meta: {
                variant: 'disabled',
            },
        }),
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Page SEO Configuration</h1>
                    <p className="text-sm">Manage SEO settings for pages</p>
                </div>
            </div>
            <NextTable<Page> enableSelect={true} load={load} id={'id'} columns={columns} mode="table" />
        </div>
    );
}

PageIndex.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;