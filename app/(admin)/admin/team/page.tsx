import { getEmployees } from '@/app/actions/team';
import { Plus, Pencil, Trash2, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';
import DeleteTeamMemberButton from './DeleteTeamMemberButton';
import AdminHeader from '../../components/AdminHeader';
import { TeamMemberImage } from '@/components/team/team-member-image';

type Employee = Awaited<ReturnType<typeof getEmployees>>[number];

export default async function AdminTeamPage() {
    const employees = await getEmployees();

    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div>
                    <AdminHeader
                        defaultTitle="Leadership & Team"
                        defaultSubtitle="Manage your team profiles and hierarchy."
                    />
                </div>
                <Link href="/admin/team/new">
                    <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                        <Plus className="size-5" />
                        <span>Add Member</span>
                    </button>
                </Link>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {employees.length === 0 ? (
                    <div className="col-span-full py-32 text-center bg-white rounded-[2.5rem] border-4 border-dashed border-slate-200">
                        <Users className="size-16 text-slate-300 mx-auto mb-6" />
                        <p className="text-xl font-black text-slate-900 mb-2">No team members found.</p>
                        <p className="text-slate-500 font-medium mb-6">Start building your team roster.</p>
                        <Link href="/admin/team/new" className="px-6 py-3 bg-lime-400 text-slate-900 font-bold rounded-xl hover:bg-lime-500 transition-colors inline-flex items-center gap-2">
                            <Plus size={18} />
                            Add Member
                        </Link>
                    </div>
                ) : (
                    employees.map((employee: Employee) => (
                        <div key={employee.id} className="group bg-white rounded-[2.5rem] p-4 pb-6 border-4 border-slate-100 shadow-xl flex flex-col items-center hover:border-lime-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                            <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                                <TeamMemberImage
                                    src={employee.thumbnailUrl}
                                    alt={employee.name}
                                    fallbackId={employee.id}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>

                            <div className="text-center w-full px-4">
                                <h3 className="text-xl font-black text-slate-900 mb-1 line-clamp-1">{employee.name}</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-lime-600 mb-6">{employee.position}</p>

                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <Link href={`/admin/team/${employee.id}`} className="w-full">
                                        <button className="w-full py-2 bg-slate-50 border-2 border-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors flex items-center justify-center gap-2">
                                            <Pencil size={14} /> Edit
                                        </button>
                                    </Link>
                                    <div className="w-full">
                                        <DeleteTeamMemberButton id={employee.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
