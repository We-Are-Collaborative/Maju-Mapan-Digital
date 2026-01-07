import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface BrandedSectionHeaderProps {
    id?: string;
    badgeIcon?: LucideIcon;
    badgeText?: string;
    title: ReactNode;
    subtitle?: string;
    align?: "center" | "left";
    className?: string;
    animate?: boolean;
}

export function BrandedSectionHeader({
    id,
    badgeIcon: Icon,
    badgeText,
    title,
    subtitle,
    align = "center",
    className,
    animate = true,
}: BrandedSectionHeaderProps) {
    const isCenter = align === "center";

    return (
        <header
            className={cn(
                "mb-16 sm:mb-20 lg:mb-24",
                isCenter ? "mx-auto max-w-3xl text-center" : "",
                className
            )}
            {...(animate ? { "data-animate": true } : {})}
            id={id}
        >
            {/* Badge */}
            {badgeText && (
                <div className={cn(
                    "mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-5 py-2 backdrop-blur-sm",
                    !isCenter ? "" : ""
                )}>
                    {Icon && <Icon className="size-4 text-brand-500" />}
                    <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">{badgeText}</span>
                </div>
            )}

            {/* Title */}
            <h2
                id={id ? `${id}-heading` : undefined}
                className="mb-6 text-[3.75rem] leading-tight font-bold tracking-tight"
            >
                {title}
            </h2>

            {/* Underline Decoration */}
            <div className={cn(
                "mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 sm:w-24 lg:w-32",
                isCenter ? "mx-auto" : ""
            )} />

            {/* Subtitle */}
            {subtitle && (
                <p className={cn(
                    "max-w-2xl text-[1.25rem] leading-relaxed text-gray-300",
                    isCenter ? "mx-auto" : ""
                )}>
                    {subtitle}
                </p>
            )}
        </header>
    );
}
