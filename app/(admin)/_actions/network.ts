"use server";

import os from "os";
import { prisma } from "@/lib/db";
import { getGlobalSettings } from "@/app/actions/settings";
import { revalidatePath } from "next/cache";

export async function getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const addresses: string[] = [];

    Object.keys(interfaces).forEach((ifname) => {
        interfaces[ifname]?.forEach((iface) => {
            // Skip internal (non-127.0.0.1) and non-ipv4 addresses
            if ("IPv4" !== iface.family || iface.internal !== false) {
                return;
            }
            addresses.push(iface.address);
        });
    });

    const settings = await getGlobalSettings();

    return {
        // @ts-ignore
        publicAccess: settings.publicAccess ?? true,
        ips: addresses
    };
}

export async function togglePublicAccess(enabled: boolean) {
    const settings = await getGlobalSettings();
    // @ts-ignore
    await prisma.globalSettings.update({
        where: { id: settings.id },
        data: { publicAccess: enabled }
    });
    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/(site)");
    return { success: true };
}
