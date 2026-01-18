import { getAdminNavigation } from "@/app/actions/navigation";
import NavManager from "./components/NavManager";
import AdminHeader from "../../../components/AdminHeader";

export default async function NavigationSettingsPage() {
    const navData = await getAdminNavigation();

    return (
        <div className="space-y-10 p-8 w-full animate-in fade-in duration-700">
            <AdminHeader
                defaultTitle="Navigation Architecture"
                defaultSubtitle="Manage the sidebar structure and menu items."
            />

            <NavManager initialData={navData} />
        </div>
    );
}
