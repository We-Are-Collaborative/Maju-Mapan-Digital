import NextTable from '@/components/next-table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AppLayout } from '@/layouts/app-layout';
import { FormResponse } from '@/lib/constant';
import { Base } from '@/types/base';
import { Library } from '@/types/library';
import { Link, useForm } from '@inertiajs/react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Copy, Download, Eye, FileText, Image, Plus, Trash } from 'lucide-react';
import { FormEvent, ReactNode, useState } from 'react';
import { toast } from 'sonner';

export default function LibraryIndex() {
    const [params, setParams] = useState<Record<string, unknown>>({});
    const { delete: destroy, processing } = useForm();

    const load = async (params: Record<string, unknown>) => {
        const response = await axios.get<Base<Library[]>>(route('master.library.fetch', params));
        return response.data;
    };

    const onDelete = (e: FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        destroy(route('master.library.destroy', id), FormResponse);
    };

    const helper = createColumnHelper<Library>();

    const copyToClipboard = (relativePath: string) => {
        const baseUrl = window.location.origin;
        const fullUrl = `${baseUrl}${relativePath}`;

        navigator.clipboard
            .writeText(fullUrl)
            .then(() => {
                toast.success('Full URL copied to clipboard!');
            })
            .catch(() => {
                toast.error('Failed to copy URL');
            });
    };

    const columns: ColumnDef<Library, any>[] = [
        helper.accessor('name', {
            id: 'name',
            header: 'Name',
            enableColumnFilter: true,
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    {row.original.mime_type.startsWith('image/') ? (
                        <Image className="h-4 w-4 text-blue-500" />
                    ) : row.original.mime_type === 'application/pdf' ? (
                        <FileText className="h-4 w-4 text-red-500" />
                    ) : (
                        <FileText className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="max-w-[200px] truncate font-medium" title={row.original.name}>
                        {row.original.name}
                    </span>
                </div>
            ),
        }),
        helper.accessor('public_url', {
            id: 'public_url',
            header: 'Public URL',
            enableColumnFilter: false,
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <span className="max-w-[300px] truncate font-mono text-sm text-blue-600">{row.original.public_url}</span>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(row.original.public_url)} className="h-6 w-6 p-0">
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            ),
        }),
        helper.accessor('size', {
            id: 'size',
            header: 'Size',
            enableColumnFilter: false,
            cell: ({ row }) => {
                const bytes = row.original.size;
                const units = ['B', 'KB', 'MB', 'GB'];
                let size = bytes;
                let unitIndex = 0;

                for (let i = 0; size > 1024 && i < units.length - 1; i++) {
                    size /= 1024;
                    unitIndex = i + 1;
                }

                return (
                    <span className="text-sm text-gray-600">
                        {Math.round(size * 100) / 100} {units[unitIndex]}
                    </span>
                );
            },
        }),
        helper.accessor('status', {
            id: 'status',
            header: 'Status',
            enableColumnFilter: true,
            cell: ({ row }) => (
                <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                        row.original.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                >
                    {row.original.status}
                </span>
            ),
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
            enableColumnFilter: false,
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
                            <Link href={route('master.library.show', row.original.id)}>
                                <DropdownMenuItem>
                                    <Eye /> Edit
                                </DropdownMenuItem>
                            </Link>
                            <a href={route('master.library.download', row.original.id)} target="_blank" rel="noopener noreferrer">
                                <DropdownMenuItem>
                                    <Download /> Download
                                </DropdownMenuItem>
                            </a>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                        <Trash /> Delete
                                    </DropdownMenuItem>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Delete File</DialogTitle>
                                        <DialogDescription>
                                            Are you sure you want to delete "{row.original.name}"? This action cannot be undone.
                                        </DialogDescription>
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
                    <h1 className="text-lg font-medium">Library</h1>
                    <p className="text-sm">Manage File Library</p>
                </div>
                <div className="flex flex-row gap-2">
                    <Link href={route('master.library.create')}>
                        <Button>
                            <Plus />
                            Upload File
                        </Button>
                    </Link>
                </div>
            </div>
            <NextTable<Library> enableSelect={true} load={load} id={'id'} columns={columns} mode="table" />
        </div>
    );
}

LibraryIndex.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
