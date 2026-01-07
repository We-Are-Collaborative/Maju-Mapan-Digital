"use client";

import { deleteEmployee } from '@/app/actions/team';
import { Button } from '@/components/ui/button';
import { Trash2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function DeleteTeamMemberButton({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (confirm("Are you sure you want to remove this team member? This action cannot be undone.")) {
            setLoading(true);
            try {
                const res = await deleteEmployee(id);
                if (res.error) {
                    toast.error(res.error);
                } else {
                    toast.success("Team member deleted successfully");
                }
            } catch (error) {
                toast.error("Failed to delete");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Button
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            disabled={loading}
        >
            {loading ? <Loader2 className="h-3 w-3 animate-spin" /> : <><Trash2 className="h-3 w-3 mr-2" /> Delete</>}
        </Button>
    );
}
