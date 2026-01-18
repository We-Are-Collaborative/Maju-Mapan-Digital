import { getCandidateUsers } from "./actions";
import { UserList } from "./user-list";
import AdminHeader from "../../components/AdminHeader";

export default async function AdminCandidateUsersPage() {
    const users = await getCandidateUsers();

    return (
        <div className="min-h-screen p-8 w-full mx-auto space-y-8 animate-in fade-in duration-700">
            <div className="flex-1">
                <AdminHeader
                    defaultTitle="Candidate Accounts"
                    defaultSubtitle={`Manage registered candidate profiles and access (${users.length} total).`}
                />
            </div>
            <UserList users={users} />
        </div>
    );
}
