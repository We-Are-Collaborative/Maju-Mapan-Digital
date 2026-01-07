import { cn } from "@/lib/utils";
import { Award, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface BrandedHeroProps {
    id?: string;
    badgeIcon?: LucideIcon;
    badgeText?: string;
    title: ReactNode;
    subtitle?: string;
    backgroundImage?: string;
    className?: string;
    children?: ReactNode;
}

export function BrandedHero({
    id = "hero",
    badgeIcon: Icon = Award,
    badgeText = "Award-Winning Digital Agency",
    title,
    subtitle,
    backgroundImage = "/assets/bg_hello_dekstop.webp",
    className,
    children,
}: BrandedHeroProps) {
    return (
        <div className={cn("relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-20", className)} id={id}>
            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('${backgroundImage}')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="container relative z-10 px-4 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
                    {/* Badge */}
                    {badgeText && (
                        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 backdrop-blur-sm sm:px-5 sm:py-2.5">
                            <Icon className="size-4 text-brand-500" />
                            <span className="text-sm font-semibold text-brand-500 sm:text-base">{badgeText}</span>
                        </div>
                    )}

                    {/* Title */}
                    <h1
                        id={`${id}-heading`}
                        className="animate-slide-up text-[6.5rem] leading-tight font-bold tracking-tight"
                    >
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p
                            className="animate-slide-up max-w-2xl text-[1.25rem] leading-relaxed text-gray-300"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {subtitle}
                        </p>
                    )}

                    {/* Custom Content (e.g., Search Bar, Buttons) */}
                    {children && (
                        <div className="animate-slide-up w-full flex justify-center" style={{ animationDelay: '0.3s' }}>
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
