"use client";
import React, { createContext, useContext, useState } from "react";

import { toast } from "sonner";

const GlobalErrorContext = createContext<any>(null);

export function GlobalErrorProvider({ children }: { children: React.ReactNode }) {
    const [error, setError] = useState<Error | null>(null);

    const showError = (title: string, message: string) => {
        toast.error(title, { description: message });
    };

    const showSuccess = (title: string, message: string) => {
        toast.success(title, { description: message });
    };

    return (
        <GlobalErrorContext.Provider value={{ error, setError, showError, showSuccess }}>
            {children}
        </GlobalErrorContext.Provider>
    );
}

export const useGlobalError = () => useContext(GlobalErrorContext);
