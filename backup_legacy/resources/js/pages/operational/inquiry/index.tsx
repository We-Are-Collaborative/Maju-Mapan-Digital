import NextTable from '@/components/next-table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AppLayout } from '@/layouts/app-layout';
import { Base } from '@/types/base';
import { Inquiry } from '@/types/inquiry';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Briefcase, Building, Calendar, Eye, Mail, MessageSquare, Phone, Target, User } from 'lucide-react';
import { ReactNode, useState } from 'react';

export default function InquiryIndex() {
    const [params, setParams] = useState<Record<string, unknown>>({});
    const [inquiry, setInquiry] = useState<Inquiry>(null);

    const load = async (params: Record<string, unknown>) => {
        const response = await axios.get<Base<Inquiry[]>>(route('operational.inquiry.fetch', params));
        return response.data;
    };

    const helper = createColumnHelper<Inquiry>();

    const columns: ColumnDef<Inquiry, any>[] = [
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
        helper.accessor('email', {
            id: 'email',
            header: 'Email',
            cell: ({ row }) => row.original.email,
        }),
        helper.accessor('phone', {
            id: 'phone',
            header: 'Phone',
            cell: ({ row }) => row.original.phone,
        }),
        helper.accessor('company', {
            id: 'company',
            header: 'Company',
            cell: ({ row }) => row.original.company,
        }),
        helper.accessor('position', {
            id: 'position',
            header: 'Position',
            cell: ({ row }) => row.original.position,
        }),
        helper.display({
            id: 'actions',
            header: 'Actions',
            enableColumnFilter: false,
            cell: ({ row }) => (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <MessageSquare className="h-5 w-5" />
                                Inquiry Details
                            </DialogTitle>
                            <DialogDescription>Inquiry from {row.original.name}</DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Contact Information</h3>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                        <User className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{row.original.name}</p>
                                            <p className="text-xs text-gray-500">Name</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                        <Mail className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{row.original.email}</p>
                                            <p className="text-xs text-gray-500">Email</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                        <Phone className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{row.original.phone}</p>
                                            <p className="text-xs text-gray-500">Phone</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                        <Building className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{row.original.company}</p>
                                            <p className="text-xs text-gray-500">Company</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                        <Briefcase className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{row.original.position}</p>
                                            <p className="text-xs text-gray-500">Position</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                        <Calendar className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                {format(parseISO(row.original.date), 'MMM dd, yyyy')}
                                            </p>
                                            <p className="text-xs text-gray-500">Inquiry Date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Objective */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Marketing Objective</h3>
                                <div className="rounded-lg border bg-gray-50 p-4 dark:bg-gray-800">
                                    <div className="flex items-start gap-3">
                                        <Target className="mt-0.5 h-5 w-5 text-gray-500" />
                                        <p className="text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                                            {row.original.marketing_objective}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Submission Info */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Submission Information</h3>
                                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                    <Calendar className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {format(parseISO(row.original.created_at ?? ''), 'MMM dd, yyyy HH:mm')}
                                        </p>
                                        <p className="text-xs text-gray-500">Submitted At</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ),
        }),
        helper.display({
            id: 'created_at',
            header: 'Created At',
            enableColumnFilter: false,
            cell: ({ row }) => format(parseISO(row.original.created_at ?? ''), 'dd, MMM yyyy'),
        }),
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-medium">Inquiry</h1>
                    <p className="text-sm">Manage All Inquiry</p>
                </div>
            </div>

            <NextTable<Inquiry> enableSelect={true} load={load} id={'id'} columns={columns} mode="table" />
        </div>
    );
}

InquiryIndex.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;
