import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PublicLayout } from '@/layouts/public-layout';
import { Article } from '@/types/article';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

type ArticleDetailProps = {
    article: Article;
    recommendations: Article[];
};

// Function to process HTML content and enhance iframe security
const processHtmlContent = (html: string): string => {
    if (!html) return '';

    // Create a temporary DOM element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Find all iframes and enhance their security attributes
    const iframes = tempDiv.querySelectorAll('iframe');
    iframes.forEach((iframe) => {
        const isPdfIframe = iframe.classList.contains('pdf-iframe') || iframe.src?.includes('.pdf');

        // For PDF iframes, use minimal restrictions
        if (isPdfIframe) {
            iframe.classList.add('pdf-iframe');
            // Remove sandbox entirely for PDFs to allow proper rendering
            iframe.removeAttribute('sandbox');
            // Add PDF-specific attributes
            iframe.setAttribute('type', 'application/pdf');
            iframe.setAttribute('loading', 'lazy');
        } else {
            // For other iframes, apply security restrictions
            iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox');
            iframe.setAttribute('loading', 'lazy');
            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        }

        // Add fallback content if not present
        if (!iframe.innerHTML.trim()) {
            const fallbackLink = iframe.getAttribute('src');
            if (fallbackLink) {
                iframe.innerHTML = `
                    <p style="padding: 20px; text-align: center; color: #9ca3af;">
                        Your browser does not support iframes. 
                        <a href="${fallbackLink}" class="fallback-link" target="_blank" rel="noopener noreferrer">
                            Click here to view the PDF directly
                        </a>
                    </p>
                `;
            }
        }
    });

    return tempDiv.innerHTML;
};

export default function ArticleDetail({ article, recommendations }: ArticleDetailProps) {
    // Process the article content to enhance iframe security
    const processedContent = processHtmlContent(article.content ?? '');

    return (
        <>
            <SeoHead
                seoConfig={article.seo_config}
                fallbackTitle={article.title}
                fallbackDescription={article.excerpt || article.seo_config?.description || ''}
                fallbackImage={article.thumbnail?.original_url}
                type="article"
            />
            <main className="container mx-auto max-w-7xl px-4 py-32">
                <header className="mb-8 flex flex-col gap-4">
                    <nav className="flex items-center gap-4" aria-label="Article navigation">
                        <Button
                            variant="outline"
                            className="border border-brand-500 bg-transparent hover:bg-transparent"
                            onClick={() => router.get(route('article'))}
                        >
                            <ArrowLeft className="size-4 text-brand-500" />
                        </Button>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span className="rounded bg-gray-800 px-3 py-1">{article.category?.name}</span>
                            <span>{new Date(article.created_at ?? '').toLocaleDateString('en-US', { dateStyle: 'medium' })}</span>
                        </div>
                    </nav>

                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <h1 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">{article.title}</h1>
                        <span className="text-sm whitespace-nowrap text-gray-400">5 Minutes Read</span>
                    </div>
                </header>

                {/* Hero Image */}
                <figure className="mb-8">
                    <img src={article.thumbnail?.original_url} alt={article.title} className="w-full rounded-lg object-cover" />
                </figure>

                {/* Article Content */}
                <article className="article-content max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                </article>

                {/* Similar Articles */}
                <section className="mt-16" aria-label="Similar articles section">
                    <h2 className="mb-8 text-3xl font-bold">Similar Articles</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {recommendations.map((recommendation, index) => (
                            <article key={index}>
                                <Link href={`/article/${recommendation.slug}`}>
                                    <Card className="overflow-hidden border-gray-800 bg-gray-900 pt-0">
                                        <div className="relative aspect-video bg-gray-800">
                                            <img
                                                src={recommendation.thumbnail?.original_url}
                                                alt="Article thumbnail"
                                                className="size-full object-cover"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="mb-2 flex items-center space-x-2 text-xs text-gray-400">
                                                <span>{recommendation.category?.name}</span>
                                                <span>
                                                    {new Date(recommendation.created_at ?? '').toLocaleDateString('en-US', { dateStyle: 'medium' })}
                                                </span>
                                            </div>
                                            <p className="mb-2 text-sm text-gray-400">5 min read</p>
                                            <h3 className="mb-2 text-lg font-bold text-white">{recommendation.title}</h3>
                                            <p className="text-base text-gray-400">{recommendation.excerpt}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

ArticleDetail.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
