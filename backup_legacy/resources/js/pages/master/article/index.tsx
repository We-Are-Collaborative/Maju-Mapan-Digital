import NextTable from '@/components/next-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AppLayout } from '@/layouts/app-layout';
import { Article } from '@/types/article';
import { Base } from '@/types/base';
import { Link, useForm } from '@inertiajs/react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Eye, Plus, Trash } from 'lucide-react';
import { FormEvent, ReactNode, useState } from 'react';
export default function ArticleIndex() {
    const [params, setParams] = useState<Record<string, unknown>>({});

    const { processing, delete: destroy } = useForm();

    const onDelete = (e: FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        destroy(route('master.article.destroy', id));
    };

    const load = async (params: Record<string, unknown>) => {
        const response = await axios.get<Base<Article[]>>(route('master.article.fetch', params));
        return response.data;
    };

    const helper = createColumnHelper<Article>();

    const columns: ColumnDef<Article, any>[] = [
        helper.accessor('id', {
            id: 'id',
            header: 'ID',
            enableColumnFilter: false,
            enableHiding: false,
        }),
        helper.accessor('category_id', {
            id: 'category_id',
            header: 'Category',
            cell: ({ row }) => row.original.category?.name,
        }),
        helper.accessor('title', {
            id: 'title',
            header: 'Title',
            cell: ({ row }) => row.original.title,
        }),
        helper.accessor('status', {
            id: 'status',
            header: 'Status',
            cell: ({ row }) => {
                const status = (row.original.status ?? 'published') as string;
                const label = status.charAt(0).toUpperCase() + status.slice(1);
                return <Badge variant={status === 'published' ? 'default' : 'secondary'}>{label}</Badge>;
            },
        }),
        helper.display({
            id: 'created_at',
            header: 'Created At',
            enableColumnFilter: false,
            cell: ({ row }) => format(parseISO(row.original.created_at ?? ''), 'dd, MMM yyyy'),
        }),
        helper.accessor('updated_at', {
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Action
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <Link href={route('master.article.show', row.original.id)}>
                                <DropdownMenuItem>
                                    <Eye /> Detail
                                </DropdownMenuItem>
                            </Link>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                        <Trash /> Delete
                                    </DropdownMenuItem>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Delete Data</DialogTitle>
                                        <DialogDescription>Are you sure you want to delete this data?</DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter className="flex flex-row gap-2">
                                        <form onSubmit={(e) => onDelete(e, row.original.id ?? 0)}>
                                            <Button variant="destructive" disabled={processing} type="submit">
                                                Delete
                                            </Button>
                                        </form>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
                    <h1 className="text-lg font-medium">Article</h1>
                    <p className="text-sm">Manage All Article</p>
                </div>
                <div className="flex flex-row gap-2">
                    <Link href={route('master.article.create')}>
                        <Button>
                            <Plus />
                            Add Data
                        </Button>
                    </Link>
                </div>
            </div>
            <NextTable<Article> enableSelect={true} load={load} id={'id'} columns={columns} mode="table" />
        </div>
    );
}

ArticleIndex.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
