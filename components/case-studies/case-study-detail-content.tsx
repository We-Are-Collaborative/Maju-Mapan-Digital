'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    Target,
    AlertCircle,
    Lightbulb,
    BarChart3,
    Trophy,
    ArrowUpRight,
    Users,
    Zap,
    Globe,
    TrendingUp,
    Heart,
    MousePointerClick,
    Share2
} from 'lucide-react';

interface Metric {
    label: string;
    value: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

interface CaseStudyData {
    slug: string;
    objective: string;
    challenges: string;
    strategy: string;
    results: string;
    metrics: Metric[];
}

const campaignData: Record<string, CaseStudyData> = {
    'grab-influencer': {
        slug: 'grab-influencer',
        objective: 'Drive hyper-growth in user acquisition across Southeast Asia by leveraging local influencer networks.',
        challenges: 'Fragmented influencer landscape across multiple countries and the difficulty of tracking real-time conversion from social content.',
        strategy: 'Deployed a data-driven "Hyper-Local" strategy, partnering with 500+ micro-influencers who resonated deeply with specific neighborhood demographics.',
        results: 'Achieved record-breaking acquisition costs and established Grab as the daily-use app for millions of new households.',
        metrics: [
            { label: 'Total Reach', value: '5M+', description: 'Total unique impressions across SEA.', icon: <Users />, color: '#00B14F' },
            { label: 'Engagement', value: '12%', description: 'Industry-leading interaction rate.', icon: <Zap />, color: '#00B14F' },
            { label: 'Acquisition', value: '30% ↑', description: 'Month-over-month growth in new users.', icon: <TrendingUp />, color: '#00B14F' },
            { label: 'ROI', value: '4.5x', description: 'Return on ad spend across campaigns.', icon: <BarChart3 />, color: '#00B14F' }
        ]
    },
    'traveloka-brand': {
        slug: 'traveloka-brand',
        objective: 'Re-position Traveloka from a flight search engine to an aspirational lifestyle and discovery companion.',
        challenges: 'Breaking through the "price-sensitive" mindset of users and building long-term emotional loyalty in a transactional market.',
        strategy: 'Launched the "Your World, Your Way" immersive storytelling series, focusing on the emotive experience of travel rather than just the logistics.',
        results: 'Significant boost in brand sentiment and a 2x increase in repeat bookings within the lifestyle category.',
        metrics: [
            { label: 'Brand Lift', value: '45%', description: 'Increase in brand favorability.', icon: <Heart />, color: '#0194F3' },
            { label: 'Awareness', value: '80%', description: 'Top-of-mind recall in key markets.', icon: <Globe />, color: '#0194F3' },
            { label: 'Sentiment', value: 'Positive', description: '92% positive sentiment in social listening.', icon: <Zap />, color: '#0194F3' },
            { label: 'Repeat Use', value: '2x ↑', description: 'Increase in life-time value per user.', icon: <TrendingUp />, color: '#0194F3' }
        ]
    },
    'shopee-social': {
        slug: 'shopee-social',
        objective: 'Revolutionize direct sales through social channels and dominate the seasonal "double-digit" shopping festivals.',
        challenges: 'Navigating rapid algorithm changes on social platforms and maintaining high conversion rates during peak traffic hours.',
        strategy: 'Engineered a "Social-First" commerce funnel with interactive live-streaming marathons and viral gamified social challenges.',
        results: 'Solidified Shopee\'s position as the #1 social commerce destination with unprecedented conversion efficiency.',
        metrics: [
            { label: 'Followers', value: '1M+', description: 'Cumulative growth in social followers.', icon: <Users />, color: '#EE4D2D' },
            { label: 'CTR', value: '8.5%', description: 'Click-through rate from social to shop.', icon: <MousePointerClick />, color: '#EE4D2D' },
            { label: 'Conversions', value: '5.2%', description: 'Direct conversion rate from social leads.', icon: <TrendingUp />, color: '#EE4D2D' },
            { label: 'Social Shares', value: '250K', description: 'Organic virality of campaign content.', icon: <Share2 />, color: '#EE4D2D' }
        ]
    }
};

const Section = ({ title, icon, children, delay = 0 }: { title: string, icon: React.ReactNode, children: React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="mb-16 last:mb-0"
    >
        <div className="mb-6 flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-brand-500 shadow-xl backdrop-blur-sm border border-white/10 group-hover:border-brand-500/50">
                {icon}
            </div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-white">{title}</h2>
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl">
            {children}
        </div>
    </motion.div>
);

export const CaseStudyDetailContent = ({ slug }: { slug: string }) => {
    const data = campaignData[slug];

    if (!data) return null;

    return (
        <div className="mx-auto max-w-6xl">
            {/* Split layout: Info on left, Metrics on right (Desktop) */}
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Section title="The Objective" icon={<Target className="size-6" />}>
                        <p className="text-xl leading-loose font-medium text-white/70">
                            {data.objective}
                        </p>
                    </Section>
                    115:
                    <Section title="The Challenges" icon={<AlertCircle className="size-6" />} delay={0.1}>
                        <p className="text-xl leading-loose font-medium text-white/70">
                            {data.challenges}
                        </p>
                    </Section>
                    121:
                    <Section title="The Strategy" icon={<Lightbulb className="size-6" />} delay={0.2}>
                        <p className="text-xl leading-loose font-medium text-white/70">
                            {data.strategy}
                        </p>
                    </Section>
                    127:
                    <Section title="Key Results" icon={<Trophy className="size-6" />} delay={0.3}>
                        <p className="text-xl leading-loose font-medium text-white/70">
                            {data.results}
                        </p>
                    </Section>
                </div>

                {/* Sticky Metrics Sidebar */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-8 inline-flex items-center gap-3">
                            <BarChart3 className="size-4" /> Performance Metrics
                        </h3>

                        <div className="grid grid-cols-1 gap-4">
                            {data.metrics.map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all hover:bg-white/[0.05] hover:border-white/20"
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <div
                                            className="flex size-14 items-center justify-center rounded-2xl p-3 shadow-lg"
                                            style={{ backgroundColor: `${metric.color}20`, color: metric.color }}
                                        >
                                            {metric.icon}
                                        </div>
                                        <ArrowUpRight className="size-5 text-white/20" />
                                    </div>
                                    <div className="text-4xl font-black text-white mb-1 tracking-tighter">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest mb-3 opacity-50">
                                        {metric.label}
                                    </div>
                                    <p className="text-xs text-white/30 leading-relaxed font-medium">
                                        {metric.description}
                                    </p>

                                    {/* Accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 w-full opacity-30"
                                        style={{ backgroundColor: metric.color }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
