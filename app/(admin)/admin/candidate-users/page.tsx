import { getCandidateUsers } from "./actions";
import { UserList } from "./user-list";
import AdminHeader from "../../components/AdminHeader";

export default async function AdminCandidateUsersPage() {
    const users = await getCandidateUsers();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <AdminHeader
                        defaultTitle="Candidate Accounts"
                        defaultSubtitle={`Manage registered candidate profiles and access (${users.length} total).`}
                    />
                </div>
            </div>

            <UserList users={users} />
        </div>
    );
}
