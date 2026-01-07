import React from 'react';
import {
    TrendingUp,
    Code2,
    Compass,
    Palette,
    Users,
    Zap,
    Search,
    MousePointerClick,
    Star,
    ShieldCheck,
    BarChart3,
    Globe,
    Target,
    Video,
    Share2,
    Activity,
    Link2,
    Percent,
    UserPlus,
    Mail,
    LucideIcon
} from 'lucide-react';

export interface SolutionStyles {
    gradient: string;
    border: string;
    iconBg: string;
    accent: string;
    pattern: string;
    icon: LucideIcon;
    secondaryIcon: React.ReactNode;
}

export const getUniqueCardStyles = (slug: string): SolutionStyles => {
    switch (slug) {
        case 'digital-marketing':
            return {
                gradient: "from-blue-500/20 to-emerald-500/20",
                border: "group-hover:border-emerald-500/50",
                iconBg: "bg-emerald-500",
                accent: "text-emerald-500",
                pattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent",
                icon: TrendingUp,
                secondaryIcon: <BarChart3 className="absolute -top-2 -right-2 size-12 opacity-5" />
            };
        case 'web-development':
            return {
                gradient: "from-purple-500/20 to-blue-500/20",
                border: "group-hover:border-blue-500/50",
                iconBg: "bg-blue-500",
                accent: "text-blue-500",
                pattern: "bg-[linear-gradient(45deg,_transparent_25%,_rgba(59,130,246,0.1)_50%,_transparent_75%)] bg-[length:20px_20px]",
                icon: Code2,
                secondaryIcon: <Globe className="absolute -top-4 -left-4 size-16 opacity-5 rotate-12" />
            };
        case 'brand-strategy-positioning':
            return {
                gradient: "from-orange-500/20 to-red-500/20",
                border: "group-hover:border-orange-500/50",
                iconBg: "bg-orange-500",
                accent: "text-orange-500",
                pattern: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent",
                icon: Compass,
                secondaryIcon: <Target className="absolute bottom-4 right-4 size-14 opacity-5" />
            };
        case 'creative-content-production':
            return {
                gradient: "from-pink-500/20 to-rose-500/20",
                border: "group-hover:border-pink-500/50",
                iconBg: "bg-pink-500",
                accent: "text-pink-500",
                pattern: "bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent",
                icon: Palette,
                secondaryIcon: <Video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 opacity-[0.03]" />
            };
        case 'social-media-community-management':
            return {
                gradient: "from-sky-400/20 to-indigo-500/20",
                border: "group-hover:border-sky-400/50",
                iconBg: "bg-sky-400",
                accent: "text-sky-400",
                pattern: "bg-[dotted-pattern] opacity-20",
                icon: Users,
                secondaryIcon: <Share2 className="absolute top-2 right-6 size-12 opacity-5" />
            };
        case 'digital-performance-marketing':
            return {
                gradient: "from-yellow-500/20 to-amber-600/20",
                border: "group-hover:border-yellow-500/50",
                iconBg: "bg-yellow-500",
                accent: "text-yellow-500",
                pattern: "bg-[linear-gradient(to_right,_rgba(234,179,8,0.05)_1px,_transparent_1px)] bg-[length:40px_1px]",
                icon: Zap,
                secondaryIcon: <Activity className="absolute bottom-2 left-6 size-12 opacity-5" />
            };
        case 'seo-organic-growth':
            return {
                gradient: "from-emerald-400/20 to-teal-500/20",
                border: "group-hover:border-emerald-400/50",
                iconBg: "bg-emerald-400",
                accent: "text-emerald-400",
                pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent",
                icon: Search,
                secondaryIcon: <Link2 className="absolute -bottom-2 -right-2 size-16 opacity-5 -rotate-45" />
            };
        case 'web-conversion-cro':
            return {
                gradient: "from-indigo-500/20 to-violet-600/20",
                border: "group-hover:border-indigo-500/50",
                iconBg: "bg-indigo-500",
                accent: "text-indigo-500",
                pattern: "bg-[linear-gradient(to_bottom,_rgba(99,102,241,0.05)_1px,_transparent_1px)] bg-[length:1px_40px]",
                icon: MousePointerClick,
                secondaryIcon: <Percent className="absolute top-4 left-4 size-12 opacity-5" />
            };
        case 'influencer-kol-marketing':
            return {
                gradient: "from-fuchsia-500/20 to-pink-600/20",
                border: "group-hover:border-fuchsia-500/50",
                iconBg: "bg-fuchsia-500",
                accent: "text-fuchsia-500",
                pattern: "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent",
                icon: Star,
                secondaryIcon: <UserPlus className="absolute bottom-6 right-2 size-12 opacity-5" />
            };
        case 'crm-lifecycle-marketing':
            return {
                gradient: "from-cyan-500/20 to-blue-600/20",
                border: "group-hover:border-cyan-500/50",
                iconBg: "bg-cyan-500",
                accent: "text-cyan-500",
                pattern: "bg-[grid-pattern] opacity-10",
                icon: ShieldCheck,
                secondaryIcon: <Mail className="absolute top-8 right-4 size-14 opacity-5 rotate-12" />
            };
        default:
            return {
                gradient: "from-gray-500/20 to-gray-700/20",
                border: "group-hover:border-brand-500/50",
                iconBg: "bg-brand-500",
                accent: "text-brand-500",
                pattern: "",
                icon: Zap,
                secondaryIcon: null
            };
    }
};
