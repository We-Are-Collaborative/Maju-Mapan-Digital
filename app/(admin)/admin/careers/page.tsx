import { Button } from '@/components/ui/button';
import { Plus, Pencil, Trash, Briefcase, Users, MapPin, Monitor } from 'lucide-react';
import Link from 'next/link';
import { deleteCareer, getAdminCareers } from './actions';
import AdminHeader from '../../components/AdminHeader';

type Career = Awaited<ReturnType<typeof getAdminCareers>>[number];

export default async function AdminCareersPage() {
    const careers = await getAdminCareers();

    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <AdminHeader
                    defaultTitle="Talent & Careers"
                    defaultSubtitle="Manage job openings and applicant pipelines."
                />
                <Link href="/admin/careers/new">
                    <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                        <Plus className="size-5" />
                        <span>Add Position</span>
                    </button>
                </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 p-8 shadow-xl flex items-center justify-between group hover:border-lime-200 transition-colors">
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Roles</p>
                        <div className="text-5xl font-black text-slate-900">{careers.length}</div>
                    </div>
                    <div className="p-4 bg-slate-50 text-slate-400 rounded-2xl group-hover:bg-lime-50 group-hover:text-lime-600 transition-colors">
                        <Briefcase className="size-8" />
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 p-8 shadow-xl flex items-center justify-between group hover:border-lime-200 transition-colors">
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Applications</p>
                        <div className="text-5xl font-black text-slate-900">
                            {careers.reduce((acc: number, curr: Career) => acc + curr._count.applications, 0)}
                        </div>
                    </div>
                    <div className="p-4 bg-slate-50 text-slate-400 rounded-2xl group-hover:bg-lime-50 group-hover:text-lime-600 transition-colors">
                        <Users className="size-8" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border-4 border-slate-100 shadow-xl overflow-hidden p-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border-2 border-indigo-100">
                        <Briefcase size={24} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900">Active Openings</h3>
                </div>

                <div className="grid gap-4">
                    {careers.length === 0 ? (
                        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                            <Briefcase className="size-16 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-lg font-black text-slate-900">No positions found</h3>
                            <p className="text-slate-500 font-bold">Create a new job opening to get started.</p>
                        </div>
                    ) : (
                        careers.map((career: Career) => (
                            <div key={career.id} className="group flex flex-col md:flex-row items-start md:items-center p-6 bg-white border-2 border-slate-100 rounded-3xl hover:border-slate-300 hover:shadow-lg transition-all gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${career.status === 'published'
                                            ? 'bg-lime-100 text-lime-700'
                                            : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            {career.status}
                                        </span>
                                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                            {career.category?.name || 'Uncategorized'}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{career.title}</h4>
                                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                        <span className="flex items-center gap-1"><Briefcase size={12} /> {career.type}</span>
                                        <span className="flex items-center gap-1"><MapPin size={12} /> {career.location}</span>
                                        {career.isRemote && <span className="flex items-center gap-1 text-indigo-500"><Monitor size={12} /> Remote</span>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-12 px-6 border-l-2 border-slate-50">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-slate-900">{career._count.applications}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Applications</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <Link href={`/admin/careers/${career.id}`}>
                                        <button className="p-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl transition-colors">
                                            <Pencil size={18} />
                                        </button>
                                    </Link>
                                    <form action={async () => {
                                        'use server';
                                        await deleteCareer(career.id);
                                    }}>
                                        <button className="p-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition-colors">
                                            <Trash size={18} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
