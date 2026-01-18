
export const defaultAdminTheme = {
    name: "Default Admin",
    colors: {
        global: {
            primary: "#84cc16", // lime-500
            secondary: "#0f172a", // slate-900
            accent: "#10b981", // emerald-500
            success: "#22c55e",
            warning: "#f59e0b",
            error: "#ef4444",
            background: "#f8fafc", // Page background
            surface: "#ffffff", // Card/Modal background
            text: {
                heading: "#0f172a",
                body: "#334155",
                muted: "#94a3b8",
                label: "#64748b",
            },
            border: "#e2e8f0",
        },
        sidebar: {
            background: "#0f172a",
            foreground: "#f8fafc",
            border: "#1e293b",
            activeItemBg: "#84cc16",
            activeItemText: "#0f172a",
            hoverItemBg: "#1e293b",
            hoverItemText: "#ffffff",
            divider: "#1e293b",
        },
        header: {
            background: "transparent",
            title: "#0f172a",
            subtitle: "#64748b",
        },
    },
    typography: {
        fontFamily: {
            primary: "Inter, sans-serif",
            heading: "Inter, sans-serif",
        },
        scale: {
            base: "16px",
            h1: "2.25rem",
            h2: "1.875rem",
            h3: "1.5rem",
            small: "0.875rem",
            tiny: "0.75rem",
        }
    },
    borders: {
        radius: {
            small: "0.375rem", // 6px
            medium: "0.75rem", // 12px
            large: "1rem", // 16px
            full: "9999px",
        },
        width: {
            base: "1px",
            thick: "2px",
        }
    },
    components: {
        card: {
            background: "#ffffff",
            text: "#0f172a",
            border: "#e2e8f0",
            radius: "1rem",
            shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            padding: "1.5rem",
        },
        button: {
            radius: "0.75rem",
            borderWidth: "0px",
            primary: {
                bg: "#84cc16",
                text: "#0f172a",
                hover: "#65a30d",
                borderColor: "transparent",
            },
            secondary: {
                bg: "#0f172a",
                text: "#ffffff",
                hover: "#1e293b",
                borderColor: "transparent",
            }
        },
        input: {
            bg: "#ffffff",
            border: "#e2e8f0",
            radius: "0.5rem",
            padding: "0.75rem",
        }
    }
};

export const defaultPublicTheme = {
    name: "Public Site",
    colors: {
        typography: {
            h1: "#0f172a",
            h2: "#0f172a",
            h3: "#0f172a",
            h4: "#0f172a",
            h5: "#0f172a",
            body: "#334155",
        },
        hero: {
            title: "#0f172a",
            subtitle: "#475569",
            background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
            ctaBackground: "#10b981",
            ctaText: "#ffffff",
        },
        buttons: {
            cta: {
                background: "#10b981",
                text: "#ffffff",
                hover: "#059669",
                active: "#047857",
                gradient: "linear-gradient(to right, #10b981, #34d399)"
            },
            login: {
                background: "#0f172a",
                text: "#ffffff",
                hover: "#1e293b",
            },
            logout: {
                background: "#ef4444",
                text: "#ffffff",
                hover: "#dc2626",
            }
        },
        states: {
            hover: "#f1f5f9",
            active: "#e2e8f0",
        }
    },
    typography: {
        fontFamily: {
            heading: "Inter, sans-serif",
            body: "Inter, sans-serif",
        }
    }
};

export type AdminTheme = typeof defaultAdminTheme;
export type PublicTheme = typeof defaultPublicTheme;
