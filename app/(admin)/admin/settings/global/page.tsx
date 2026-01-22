"use client";

import React from "react";
import GlobalSettingsForm from "./components/GlobalSettingsForm";

import AdminHeader from "../../../components/AdminHeader";

export default function GlobalSettingsPage() {
    return (
        <div className="min-h-screen p-[30px] w-full mx-auto space-y-12 animate-in fade-in duration-700">
            <AdminHeader
                defaultTitle="Global Settings"
                defaultSubtitle="Configure application-wide preferences."
            />
            <GlobalSettingsForm />
        </div>
    );
}
