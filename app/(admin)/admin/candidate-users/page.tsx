import { getCandidateUsers } from "./actions";
import { UserList } from "./user-list";

export default async function AdminCandidateUsersPage() {
    const users = await getCandidateUsers();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Candidate Accounts</h1>
                    <p className="text-muted-foreground">
                        Manage registered candidate profiles and access ({users.length} total).
                    </p>
                </div>
            </div>

            <UserList users={users} />
        </div>
    );
}
