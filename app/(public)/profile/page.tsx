import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { ProfileContent } from "./profile-content";
import { getCandidateApplications } from "@/app/(admin)/admin/careers/applications/actions";

export default async function CandidateProfilePage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'candidate') {
        redirect('/login');
    }

    // Fetch candidate details
    let candidate = null;
    try {
        candidate = await prisma.candidate.findUnique({
            where: { email: session.user.email || '' },
        }).catch(() => null);
    } catch (e) {
        console.error("Failed to fetch candidate", e);
    }

    if (!candidate) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Candidate profile not found</div>;

    const applications = await getCandidateApplications(candidate.id);

    return <ProfileContent candidate={candidate} applications={applications} />;
}
