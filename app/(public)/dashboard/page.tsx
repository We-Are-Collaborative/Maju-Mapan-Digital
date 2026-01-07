import { getUserApplications } from "@/app/actions/dashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login?callbackUrl=/dashboard");
    }

    const applications = await getUserApplications();

    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto max-w-5xl px-4">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">My Applications</h1>
                    <p className="text-gray-400 text-lg">
                        Track the status of your job applications.
                    </p>
                </header>

                <div className="space-y-6">
                    {applications.length === 0 ? (
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-12 text-center">
                            <Briefcase className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">No applications yet</h3>
                            <p className="text-gray-400 mb-6">You haven't applied for any positions yet.</p>
                            <Link
                                href="/careers"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-500 text-black font-semibold hover:bg-brand-400 transition-colors"
                            >
                                Browse Careers
                            </Link>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {applications.map((app) => (
                                <div
                                    key={app.id}
                                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-colors hover:border-gray-700"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-xl font-bold text-white">
                                                    <Link href={`/careers/${app.slug}`} className="hover:text-brand-500 transition-colors">
                                                        {app.position}
                                                    </Link>
                                                </h3>
                                                <StatusBadge status={app.status} />
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4" />
                                                    {app.location}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Briefcase className="w-4 h-4" />
                                                    {app.type}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4" />
                                                    Applied on {new Date(app.appliedAt).toLocaleDateString()}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            {/* Could add 'Withdraw' button here later */}
                                        </div>
                                    </div>

                                    {app.status === 'new' && (
                                        <div className="mt-4 pt-4 border-t border-gray-800 text-sm text-gray-400">
                                            We have received your application and will review it shortly.
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles = {
        new: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        reviewing: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        interviewed: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        hired: "bg-green-500/10 text-green-500 border-green-500/20",
        rejected: "bg-red-500/10 text-red-500 border-red-500/20",
    };

    const label = status.charAt(0).toUpperCase() + status.slice(1);
    const className = styles[status as keyof typeof styles] || "bg-gray-500/10 text-gray-500 border-gray-500/20";

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${className}`}>
            {label}
        </span>
    );
}
