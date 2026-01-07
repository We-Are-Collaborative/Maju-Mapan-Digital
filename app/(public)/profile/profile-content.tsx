"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/lib/inertia-adapter";
import { Briefcase, Settings, User, FileText, Globe, Pencil, Trash2, Save, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { updateCandidateProfile, deleteCandidateProfile } from "@/app/actions/candidate-profile";
import { signOut } from "next-auth/react";

interface ProfileContentProps {
    candidate: any;
    applications?: any[];
}

export function ProfileContent({ candidate: initialCandidate, applications = [] }: ProfileContentProps) {
    const [candidate, setCandidate] = useState(initialCandidate);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleUpdate = async () => {
        setLoading(true);
        const result = await updateCandidateProfile({
            name: candidate.name,
            phone: candidate.phone,
            resumeUrl: candidate.resumeUrl,
            portfolioUrl: candidate.portfolioUrl,
        });

        if (result.success) {
            toast.success("Profile updated successfully!");
            setIsEditing(false);
            router.refresh();
        } else {
            toast.error(result.error || "Failed to update profile");
        }
        setLoading(false);
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete your profile? This action is irreversible.")) return;
        setLoading(true);
        const result = await deleteCandidateProfile();
        if (result.success) {
            toast.success("Profile deleted.");
            await signOut({ callbackUrl: "/" });
        } else {
            toast.error(result.error || "Failed to delete profile");
            setLoading(false);
        }
    };

    return (
        <div className="bg-black min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <div>
                            <p className="text-brand-500 font-medium mb-2 tracking-wide uppercase text-sm">Talent Hub</p>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                                My <span className="text-brand-500">Workspace</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mt-4">
                                Manage your career journey, track applications, and showcase your professional portfolio.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Sidebar / User Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="bg-white/5 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-20 bg-brand-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className="text-center relative z-10">
                                <div className="mx-auto w-24 h-24 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 text-3xl font-bold mb-6 shadow-xl shadow-brand-500/10">
                                    {(candidate.name || 'C')[0]}
                                </div>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={candidate.name}
                                        onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
                                        className="bg-transparent text-2xl font-bold text-white text-center border-b border-brand-500 focus:outline-none w-full mb-2"
                                    />
                                ) : (
                                    <h2 className="text-2xl font-bold text-white">{candidate.name}</h2>
                                )}
                                <p className="text-gray-400 text-sm">{candidate.email}</p>
                            </div>

                            <div className="mt-8 space-y-4 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center text-sm p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                                        <User className="w-4 h-4 mr-3 text-brand-500" />
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={candidate.phone || ""}
                                                onChange={(e) => setCandidate({ ...candidate, phone: e.target.value })}
                                                placeholder="Phone number"
                                                className="bg-transparent border-none focus:outline-none text-white w-full"
                                            />
                                        ) : (
                                            candidate.phone || 'No phone'
                                        )}
                                    </div>
                                    <div className="flex items-center text-sm p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                                        <Briefcase className="w-4 h-4 mr-3 text-brand-500" />
                                        Candidate
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    {isEditing ? (
                                        <>
                                            <Button
                                                onClick={handleUpdate}
                                                disabled={loading}
                                                className="w-full bg-brand-500 hover:bg-brand-400 text-black font-bold h-11 rounded-xl"
                                            >
                                                <Save className="w-4 h-4 mr-2" /> Save Changes
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                onClick={() => { setIsEditing(false); setCandidate(initialCandidate); }}
                                                className="w-full text-gray-400 hover:text-white rounded-xl"
                                            >
                                                <X className="w-4 h-4 mr-2" /> Cancel
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            onClick={() => setIsEditing(true)}
                                            className="w-full h-11 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-md"
                                        >
                                            <Pencil className="w-4 h-4 mr-2" /> Edit Profile
                                        </Button>
                                    )}

                                    <Button
                                        variant="ghost"
                                        onClick={handleDelete}
                                        className="w-full text-gray-500 hover:text-rose-500 hover:bg-rose-500/5 rounded-xl h-11"
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" /> Delete Account
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Application Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
                        >
                            <div className="mb-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Active Applications</h3>
                                    <p className="text-gray-400 text-sm mt-1">Status of your job submissions.</p>
                                </div>
                                <div className="text-brand-500 font-bold bg-brand-500/10 px-4 py-2 rounded-xl text-sm border border-brand-500/20">
                                    {applications.length} Total
                                </div>
                            </div>

                            {applications.length > 0 ? (
                                <div className="space-y-4">
                                    {applications.map((app) => (
                                        <div key={app.id} className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-white text-lg">{app.career.title}</h4>
                                                    <div className="flex items-center text-xs text-gray-400 gap-3 mt-1">
                                                        <span className="flex items-center gap-1"><Globe size={12} /> {app.career.location}</span>
                                                        <span className="flex items-center gap-1"><Briefcase size={12} /> {app.career.type}</span>
                                                    </div>
                                                </div>
                                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${app.status === 'hired' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                                                    app.status === 'rejected' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' :
                                                        'bg-brand-500/20 text-brand-400 border border-brand-500/30'
                                                    }`}>
                                                    {app.status}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 bg-black/40 border border-white/5 rounded-2xl text-center">
                                    <div className="bg-white/5 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                                        <Briefcase className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <p className="text-gray-400 mb-6">Explore our latest career opportunities and apply today.</p>
                                    <Button className="bg-brand-500 hover:bg-brand-400 text-black font-bold px-8" asChild>
                                        <Link href="/careers">View Open Roles</Link>
                                    </Button>
                                </div>
                            )}
                        </motion.div>

                        {/* Documents & Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white">Documents & Portfolio</h3>
                                <p className="text-gray-400 text-sm mt-1">Your external links and career materials.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl group transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-white">Resume URL</div>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={candidate.resumeUrl || ""}
                                                    onChange={(e) => setCandidate({ ...candidate, resumeUrl: e.target.value })}
                                                    placeholder="https://..."
                                                    className="bg-transparent border-none focus:outline-none text-brand-500 text-sm w-full mt-1"
                                                />
                                            ) : (
                                                <div className="text-xs text-gray-500 truncate max-w-[200px]">
                                                    {candidate.resumeUrl || 'Not provided'}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl group transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-white">Portfolio URL</div>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={candidate.portfolioUrl || ""}
                                                    onChange={(e) => setCandidate({ ...candidate, portfolioUrl: e.target.value })}
                                                    placeholder="https://..."
                                                    className="bg-transparent border-none focus:outline-none text-brand-500 text-sm w-full mt-1"
                                                />
                                            ) : (
                                                <div className="text-xs text-gray-500 truncate max-w-[200px]">
                                                    {candidate.portfolioUrl || 'Not provided'}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[0%] right-[-10%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}

