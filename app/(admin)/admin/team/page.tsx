import { getEmployees } from '@/app/actions/team';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Pencil, Trash2, GripVertical } from 'lucide-react';
import Link from 'next/link';
import DeleteTeamMemberButton from './DeleteTeamMemberButton';
import { redirect } from 'next/navigation';
import { TeamMemberImage } from '@/components/team/team-member-image';


export default async function AdminTeamPage() {
    const employees = await getEmployees();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
                    <p className="text-muted-foreground">
                        Manage your team members for the About Us page.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/admin/team/new">
                        <Plus className="mr-2 h-4 w-4" /> Add Member
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {employees.map((employee) => (
                    <Card key={employee.id} className="overflow-hidden group transition-all hover:border-brand-500/50">
                        <div className="aspect-[4/5] relative bg-muted overflow-hidden">
                            <TeamMemberImage
                                src={employee.thumbnailUrl}
                                alt={employee.name}
                                fallbackId={employee.id}
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                                <CardTitle className="text-white text-base line-clamp-1">{employee.name}</CardTitle>
                                <p className="text-brand-400 text-xs font-semibold uppercase tracking-wider line-clamp-1">{employee.position}</p>
                            </div>
                        </div>
                        <CardContent className="p-4 bg-background">
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="flex-1" asChild>
                                    <Link href={`/admin/team/${employee.id}`}>
                                        <Pencil className="mr-2 h-3 w-3" /> Edit
                                    </Link>
                                </Button>
                                <DeleteTeamMemberButton id={employee.id} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
                {employees.length === 0 && (
                    <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-lg">
                        No team members found. Click "Add Member" to create one.
                    </div>
                )}
            </div>
        </div>
    );
}
