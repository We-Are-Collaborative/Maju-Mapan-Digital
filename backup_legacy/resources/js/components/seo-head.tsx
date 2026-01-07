import { Article } from '@/types/article';
import { SeoConfig } from '@/types/seo_config';
import { Head } from '@inertiajs/react';

interface SeoHeadProps {
    seoConfig?: SeoConfig;
    fallbackTitle?: string;
    fallbackDescription?: string;
    fallbackImage?: string;
    type?: 'article' | 'page' | 'career' | 'value' | 'speciality';
}

interface DefaultSeoConfig {
    author: string;
    robots: string;
    locale: string;
    language: string;
    site_name: string;
    twitter_card: string;
    twitter_site: string;
    twitter_creator: string;
    image_width: number;
    image_height: number;
}

const DEFAULT_SEO_CONFIG: DefaultSeoConfig = {
    author: '5758 Creative Lab',
    robots: 'index, follow',
    locale: 'id_ID',
    language: 'en',
    site_name: '5758 Creative Lab',
    twitter_card: 'summary_large_image',
    twitter_site: '@5758creativelab',
    twitter_creator: '@5758creativelab',
    image_width: 1200,
    image_height: 630,
};

export function SeoHead({
    seoConfig,
    fallbackTitle = '5758 Creative Lab - Digital Marketing & Creative Solutions',
    fallbackDescription = 'Professional digital solutions provider',
    fallbackImage = '/logo.svg',
    type = 'page',
}: SeoHeadProps) {
    const finalConfig = {
        ...DEFAULT_SEO_CONFIG,
        ...seoConfig,
        title: seoConfig?.title || fallbackTitle,
        description: seoConfig?.description || fallbackDescription,
        image: seoConfig?.image || fallbackImage,
        type: seoConfig?.type || type,
        keywords: seoConfig?.keywords || 'digital solutions, web development, mobile apps',
        url: seoConfig?.url || (typeof window !== 'undefined' ? window.location.href : ''),
        canonical: seoConfig?.canonical || (typeof window !== 'undefined' ? window.location.href : ''),
    };

    return (
        <Head>
            <title>{finalConfig.title}</title>

            {/* Basic meta tags */}
            <meta name="description" content={finalConfig.description} />
            <meta name="keywords" content={finalConfig.keywords} />
            <meta name="author" content={finalConfig.author} />
            <meta name="robots" content={finalConfig.robots} />
            <meta name="language" content={finalConfig.language} />

            {/* Open Graph tags */}
            <meta property="og:title" content={finalConfig.title} />
            <meta property="og:description" content={finalConfig.description} />
            <meta property="og:type" content={finalConfig.type} />
            <meta property="og:url" content={finalConfig.url} />
            <meta property="og:image" content={finalConfig.image} />
            <meta property="og:image:width" content={finalConfig.image_width.toString()} />
            <meta property="og:image:height" content={finalConfig.image_height.toString()} />
            <meta property="og:image:alt" content={finalConfig.image_alt || finalConfig.title} />
            <meta property="og:site_name" content={finalConfig.site_name} />
            <meta property="og:locale" content={finalConfig.locale} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content={finalConfig.twitter_card} />
            <meta name="twitter:title" content={finalConfig.title} />
            <meta name="twitter:description" content={finalConfig.description} />
            <meta name="twitter:image" content={finalConfig.twitter_image || finalConfig.image} />
            <meta name="twitter:site" content={finalConfig.twitter_site} />
            <meta name="twitter:creator" content={finalConfig.twitter_creator} />

            {/* Canonical URL */}
            <link rel="canonical" href={finalConfig.canonical} />

            {/* Structured data */}
            {finalConfig.structured_data && <script type="application/ld+json">{JSON.stringify(finalConfig.structured_data)}</script>}

            {/* Breadcrumbs structured data */}
            {finalConfig.breadcrumbs && (
                <script type="application/ld+json" data-type="breadcrumbs">
                    {JSON.stringify(finalConfig.breadcrumbs)}
                </script>
            )}
        </Head>
    );
}

// Helper function to create structured data for articles
export function createArticleStructuredData(article: Article) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title || '',
        description: article.excerpt || '',
        author: {
            '@type': 'Organization',
            name: '5758 Creative Lab',
        },
        publisher: {
            '@type': 'Organization',
            name: '5758 Creative Lab',
            logo: {
                '@type': 'ImageObject',
                url: '/assets/logo.png',
            },
        },
        datePublished: article.created_at || '',
        dateModified: article.updated_at || article.created_at || '',
        image: article.thumbnail?.original_url || '',
        url: typeof window !== 'undefined' ? window.location.href : '',
    };
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

// Helper function to create breadcrumb structured data
export function createBreadcrumbStructuredData(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
