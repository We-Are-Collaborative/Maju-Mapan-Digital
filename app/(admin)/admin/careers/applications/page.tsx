import { getAdminCandidates } from "./actions";
import { ApplicationList } from "./application-list";

export default async function AdminApplicationsPage() {
    const applications = await getAdminCandidates();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Job Applications</h1>
                    <p className="text-muted-foreground">
                        Manage all submitted job applications ({applications.length} total).
                    </p>
                </div>
            </div>

            <ApplicationList applications={applications} />
        </div>
    );
}
