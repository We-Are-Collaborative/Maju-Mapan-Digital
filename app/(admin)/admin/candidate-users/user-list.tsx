'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2, ExternalLink, Mail, Phone, Globe } from "lucide-react";
import { updateCandidateAccountStatus, deleteCandidateAccount } from "./actions";
import { toast } from "sonner";

interface User {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    status: string;
    createdAt: Date;
    portfolioUrl: string | null;
}

export function UserList({ users }: { users: User[] }) {

    const handleStatusChange = async (id: string, newStatus: string) => {
        const result = await updateCandidateAccountStatus(id, newStatus);
        if (result.success) {
            toast.success("Account status updated");
        } else {
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this candidate account? This will remove all their data.")) return;
        const result = await deleteCandidateAccount(id);
        if (result.success) {
            toast.success("Account deleted");
        } else {
            toast.error("Failed to delete account");
        }
    };

    return (
        <div className="rounded-md border bg-white shadow-sm">
            <Table>
                <TableHeader className="bg-slate-50">
                    <TableRow>
                        <TableHead className="font-bold">Candidate</TableHead>
                        <TableHead className="font-bold">Contact</TableHead>
                        <TableHead className="font-bold">Joined</TableHead>
                        <TableHead className="font-bold">Status</TableHead>
                        <TableHead className="text-right font-bold">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                                No candidate accounts found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        users.map((user) => (
                            <TableRow key={user.id} className="hover:bg-slate-50 transition-colors">
                                <TableCell>
                                    <div className="font-bold text-slate-900">{user.name}</div>
                                    <div className="text-xs text-slate-500 font-medium">{user.email}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        {user.phone && (
                                            <div className="flex items-center text-xs text-slate-600">
                                                <Phone className="w-3 h-3 mr-2" /> {user.phone}
                                            </div>
                                        )}
                                        {user.portfolioUrl && (
                                            <a
                                                href={user.portfolioUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-xs text-blue-500 hover:underline"
                                            >
                                                <Globe className="w-3 h-3 mr-2" /> Portfolio
                                            </a>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-sm text-slate-600">
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <Select
                                        defaultValue={user.status}
                                        onValueChange={(val) => handleStatusChange(user.id, val)}
                                    >
                                        <SelectTrigger className="w-[120px] h-9 border-slate-200">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="active">Active</SelectItem>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="inactive">Inactive</SelectItem>
                                            <SelectItem value="banned">Banned</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-slate-300 hover:text-red-500 hover:bg-red-50"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
