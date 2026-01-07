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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { updateCandidateStatus } from "./actions";
import { toast } from "sonner";
import { useState } from "react";

interface Application {
    id: string;
    fullName: string;
    email: string;
    status: string;
    resumeUrl: string | null;
    linkedinUrl: string | null;
    createdAt: Date;
    career: {
        title: string;
        slug: string;
    };
    answers: string | null;
}

export function ApplicationList({ applications }: { applications: Application[] }) {

    const handleStatusChange = async (id: string, newStatus: string) => {
        const result = await updateCandidateStatus(id, newStatus);
        if (result.success) {
            toast.success("Status updated");
        } else {
            toast.error("Failed to update status");
        }
    };

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Applied For</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applications.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                No applications found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        applications.map((application) => (
                            <TableRow key={application.id}>
                                <TableCell>
                                    <div className="font-medium">{application.fullName}</div>
                                    <div className="text-xs text-muted-foreground">{application.email}</div>
                                </TableCell>
                                <TableCell>{application.career.title}</TableCell>
                                <TableCell>{new Date(application.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    {application.resumeUrl ? (
                                        <a
                                            href={application.resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-500 hover:underline"
                                        >
                                            <FileText className="w-4 h-4 mr-1" /> View
                                        </a>
                                    ) : (
                                        <span className="text-muted-foreground">-</span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Select
                                        defaultValue={application.status}
                                        onValueChange={(val) => handleStatusChange(application.id, val)}
                                    >
                                        <SelectTrigger className="w-[140px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="new">New</SelectItem>
                                            <SelectItem value="reviewing">Reviewing</SelectItem>
                                            <SelectItem value="interviewed">Interviewed</SelectItem>
                                            <SelectItem value="hired">Hired</SelectItem>
                                            <SelectItem value="rejected">Rejected</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
