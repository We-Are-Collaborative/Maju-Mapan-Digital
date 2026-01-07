import { SeoHead } from '@/components/seo-head';
import { getArticleBySlug } from '@/app/actions/public-data';
import { notFound } from 'next/navigation';
import { InsightDetailContent } from './insight-content';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: article.title,
        description: article.excerpt,
    };
}

export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <>
            <SeoHead
                seoConfig={undefined}
                fallbackTitle={article.title}
                fallbackDescription={article.excerpt || undefined}
                fallbackImage={article.thumbnail?.originalUrl}
                type="article"
            />

            <InsightDetailContent article={article} />
        </>
    );
}
