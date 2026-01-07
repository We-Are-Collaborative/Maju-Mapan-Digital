import { SeoHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PublicLayout } from '@/layouts/public-layout';
import { Client } from '@/types/client';
import { Page } from '@/types/page';
import { Showcase } from '@/types/showcase';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, Building2, Calendar, ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';

type ClientDetailProps = {
    client: Client;
    showcases: Showcase[];
    pageSeo: Page;
};

export default function ClientDetail({ client, showcases, pageSeo }: ClientDetailProps) {
    // Get content from page configuration with fallbacks
    const content = pageSeo?.content || {};

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle={client.name}
                fallbackDescription={client.excerpt}
                fallbackImage={client.logo?.original_url}
                type="page"
            />
            <main className="container mx-auto max-w-7xl px-4 py-32">
                <header className="mb-8 flex flex-col gap-4">
                    <nav className="flex items-center gap-4" aria-label="Client navigation">
                        <Button
                            variant="outline"
                            className="border border-brand-500 bg-transparent hover:bg-transparent"
                            onClick={() => router.get(route('client'))}
                        >
                            <ArrowLeft className="size-4 text-brand-500" />
                        </Button>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span className="rounded bg-gray-800 px-3 py-1">{content.client_profile_label || 'Client Profile'}</span>
                            <span>{new Date(client.created_at).toLocaleDateString('en-US', { dateStyle: 'medium' })}</span>
                        </div>
                    </nav>

                    <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex-shrink-0">
                                {client.logo?.original_url ? (
                                    <div className="relative flex size-24 items-center justify-center overflow-hidden rounded-lg bg-gray-800 p-4 md:size-32">
                                        <img
                                            src={client.logo.original_url}
                                            alt={`${client.name} logo`}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex size-24 items-center justify-center rounded-lg bg-gray-800 text-gray-400 md:size-32">
                                        <Building2 className="size-12 md:size-16" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h1 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">{client.name}</h1>
                                {client.excerpt && <p className="mt-2 text-lg leading-relaxed text-gray-300">{client.excerpt}</p>}
                            </div>
                        </div>

                        {client.is_featured && (
                            <span className="inline-block rounded-full bg-brand-500/20 px-4 py-2 text-sm font-medium text-brand-400">
                                {content.featured_client_label || '⭐ Featured Client'}
                            </span>
                        )}
                    </div>
                </header>

                {/* Client Description */}
                {client.description && (
                    <section className="mb-12">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: client.description }} />
                        </div>
                    </section>
                )}

                {/* Client Showcases */}
                <section aria-label="Client showcases section">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-3xl font-bold">{content.projects_showcases_title || 'Projects & Showcases'}</h2>
                        <span className="text-sm text-gray-400">
                            {showcases.length}{' '}
                            {showcases.length === 1 ? content.project_singular || 'project' : content.projects_plural || 'projects'}
                        </span>
                    </div>

                    {showcases.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {showcases.map((showcase, index) => (
                                <article key={index}>
                                    <Link href={`/client/showcase/${showcase.slug}`}>
                                        <Card className="overflow-hidden border-gray-800 bg-gray-900 pt-0 transition-colors hover:border-brand-500/50">
                                            <div className="relative aspect-video bg-gray-800">
                                                {showcase.thumbnail?.original_url ? (
                                                    <img
                                                        src={showcase.thumbnail.original_url}
                                                        alt="Showcase thumbnail"
                                                        className="size-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex size-full items-center justify-center text-gray-500">
                                                        <ExternalLink className="size-12" />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute right-4 bottom-4 left-4">
                                                    <span
                                                        className={`mb-2 inline-block rounded px-2 py-1 text-xs ${
                                                            showcase.status === 'published'
                                                                ? 'bg-green-500/20 text-green-400'
                                                                : 'bg-yellow-500/20 text-yellow-400'
                                                        }`}
                                                    >
                                                        {showcase.status === 'published'
                                                            ? content.live_status_text || 'Live'
                                                            : content.in_progress_status_text || 'In Progress'}
                                                    </span>
                                                </div>
                                            </div>
                                            <CardContent className="p-4">
                                                <div className="mb-2 flex items-center space-x-2 text-xs text-gray-400">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="size-3" />
                                                        {new Date(showcase.start_date).getFullYear()}
                                                    </span>
                                                    {showcase.end_date && <span>- {new Date(showcase.end_date).getFullYear()}</span>}
                                                </div>
                                                <h3 className="mb-2 text-lg font-bold text-white">{showcase.name}</h3>
                                                <p className="line-clamp-2 text-base text-gray-400">{showcase.excerpt}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 text-center">
                            <ExternalLink className="mx-auto mb-4 size-16 text-gray-500" />
                            <h3 className="mb-2 text-xl font-semibold text-gray-400">{content.no_projects_title || 'No projects yet'}</h3>
                            <p className="text-gray-500">
                                {content.no_projects_description
                                    ? content.no_projects_description.replace('{client_name}', client.name)
                                    : `We're working on exciting projects with ${client.name}. Stay tuned!`}
                            </p>
                        </div>
                    )}
                </section>

                {/* Back to Clients */}
                <div className="mt-16 text-center">
                    <Link href={route('client')}>
                        <Button variant="outline" className="border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white">
                            <ArrowLeft className="mr-2 size-4" />
                            {content.back_to_clients_text || 'Back to All Clients'}
                        </Button>
                    </Link>
                </div>
            </main>
        </>
    );
}

ClientDetail.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
