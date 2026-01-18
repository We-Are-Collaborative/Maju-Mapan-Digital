import { getAdminCandidates } from "./actions";
import { ApplicationList } from "./application-list";
import AdminHeader from "../../../components/AdminHeader";

export default async function AdminApplicationsPage() {
    const applications = await getAdminCandidates();

    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700 space-y-8">
            <div className="flex items-center justify-between">
                <AdminHeader
                    defaultTitle="Job Applications"
                    defaultSubtitle={`Manage all submitted job applications (${applications.length} total).`}
                />
            </div>

            <ApplicationList applications={applications} />
        </div>
    );
}
