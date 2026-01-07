import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PublicLayout } from '@/layouts/public-layout';
import { Page } from '@/types/page';
import { Showcase } from '@/types/showcase';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { ReactNode } from 'react';

type ShowcaseDetailProps = {
    showcase: Showcase;
    recommendations: Showcase[];
    pageSeo: Page;
};

// Function to process HTML content and enhance iframe security
const processHtmlContent = (html: string, content: any): string => {
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
                        ${content.your_browser_text || 'Your browser does not support iframes.'} 
                        <a href="${fallbackLink}" class="fallback-link" target="_blank" rel="noopener noreferrer">
                            ${content.click_here_text || 'Click here to view the content directly'}
                        </a>
                    </p>
                `;
            }
        }
    });

    return tempDiv.innerHTML;
};

export default function ShowcaseDetail({ showcase, recommendations, pageSeo }: ShowcaseDetailProps) {
    // Get content from page configuration with fallbacks
    const content = pageSeo?.content || {};

    // Process the showcase content to enhance iframe security
    const processedContent = processHtmlContent(showcase.content ?? '', content);

    // Format date range
    const formatDateRange = (startDate: string, endDate: string) => {
        const start = new Date(startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        const end = new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        return `${start} - ${end}`;
    };

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seo_config || showcase.seo_config}
                fallbackTitle={showcase.name}
                fallbackDescription={showcase.excerpt}
                fallbackImage={showcase.thumbnail?.original_url}
                type="showcase"
            />
            <main className="container mx-auto max-w-7xl px-4 py-32">
                <header className="mb-8 flex flex-col gap-4">
                    <nav className="flex items-center gap-4" aria-label="Showcase navigation">
                        <Button
                            variant="outline"
                            className="border border-brand-500 bg-transparent hover:bg-transparent"
                            onClick={() => router.get(route('client'))}
                        >
                            <ArrowLeft className="size-4 text-brand-500" />
                        </Button>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span className="flex items-center gap-2 rounded bg-gray-800 px-3 py-1">
                                <User className="size-3" />
                                {showcase.client?.name}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="size-3" />
                                {formatDateRange(showcase.start_date, showcase.end_date)}
                            </span>
                        </div>
                    </nav>

                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <h1 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">{showcase.name}</h1>
                        <span
                            className={`rounded-full px-3 py-1 text-sm whitespace-nowrap ${
                                showcase.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}
                        >
                            {showcase.status === 'published'
                                ? content.live_project_text || 'Live Project'
                                : content.in_development_text || 'In Development'}
                        </span>
                    </div>

                    {showcase.excerpt && <p className="text-lg leading-relaxed text-gray-300">{showcase.excerpt}</p>}
                </header>

                {/* Hero Image */}
                {showcase.thumbnail?.original_url && (
                    <figure className="mb-8">
                        <img src={showcase.thumbnail.original_url} alt={showcase.name} className="w-full rounded-lg object-cover" />
                    </figure>
                )}

                {/* Showcase Content */}
                <article className="prose prose-invert prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                </article>

                {/* Similar Showcases */}
                <section className="mt-16" aria-label="Similar showcases section">
                    <h2 className="mb-8 text-3xl font-bold">{content.similar_projects_title || 'Similar Projects'}</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {recommendations.map((recommendation, index) => (
                            <article key={index}>
                                <Link href={`/client/showcase/${recommendation.slug}`}>
                                    <Card className="overflow-hidden border-gray-800 bg-gray-900 pt-0 transition-colors hover:border-brand-500/50">
                                        <div className="relative aspect-video bg-gray-800">
                                            <img
                                                src={recommendation.thumbnail?.original_url}
                                                alt="Showcase thumbnail"
                                                className="size-full object-cover"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="mb-2 flex items-center space-x-2 text-xs text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <User className="size-3" />
                                                    {recommendation.client?.name}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="size-3" />
                                                    {new Date(recommendation.start_date).getFullYear()}
                                                </span>
                                            </div>
                                            <span
                                                className={`mb-2 inline-block rounded px-2 py-1 text-xs ${
                                                    recommendation.status === 'published'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-yellow-500/20 text-yellow-400'
                                                }`}
                                            >
                                                {recommendation.status === 'published'
                                                    ? content.live_status_text || 'Live'
                                                    : content.in_progress_status_text || 'In Progress'}
                                            </span>
                                            <h3 className="mb-2 text-lg font-bold text-white">{recommendation.name}</h3>
                                            <p className="line-clamp-2 text-base text-gray-400">{recommendation.excerpt}</p>
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

ShowcaseDetail.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
