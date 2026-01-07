import NextTable from '@/components/next-table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { Base, FilterProps } from '@/types/base';
import { Category } from '@/types/category';
import { Link, useForm } from '@inertiajs/react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Eye, Filter, Plus, Trash } from 'lucide-react';
import { FormEvent, ReactNode, useState } from 'react';

export default function CategoryIndex() {
    const [customParams, setCustomParams] = useState<Record<string, unknown>>({});
    const { delete: destroy, processing } = useForm();

    const load = async (params: Record<string, unknown>) => {
        const response = await axios.get<Base<Category[]>>(route('master.category.fetch', {...params, ...customParams}));
        return response.data;
    };

    const onDelete = (e: FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        destroy(route('master.category.destroy', id), FormResponse);
    };

    const helper = createColumnHelper<Category>();
    
    const columns: ColumnDef<Category, any>[] = [
        helper.accessor('id', {
            id: 'id',
            header: 'ID',
            enableColumnFilter: false,
            enableHiding: false,
        }),
        helper.accessor('name', {
            id: 'name',
            header: 'Name',
            enableColumnFilter: true,
            cell: ({ row }) => row.original.name,
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Action
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <Link href={route('master.category.show', row.original.id)}>
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
                    <h1 className="text-lg font-medium">Category</h1>
                    <p className="text-sm">Manage All Category</p>
                </div>
                <div className="flex flex-row gap-2">
                    <Link href={route('master.category.create')}>
                        <Button>
                            <Plus />
                            Add Data
                        </Button>
                    </Link>
                </div>
            </div>
            <NextTable<Category>
                enableSelect={false}
                load={load}
                id={'id'}
                columns={columns}
                mode="table"
            />
        </div>
    );
}

CategoryIndex.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
