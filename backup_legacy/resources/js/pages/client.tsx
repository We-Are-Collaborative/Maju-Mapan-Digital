import { SeoHead } from '@/components/seo-head';
import { SimplePagination } from '@/components/simple-pagination';
import { Card, CardContent } from '@/components/ui/card';
import { PublicLayout } from '@/layouts/public-layout';
import { Base } from '@/types/base';
import { Client } from '@/types/client';
import { Page } from '@/types/page';
import { Link } from '@inertiajs/react';
import { Building2, ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';

type ClientIndexProps = {
    clients: Base<Client[]>;
    pageSeo: Page;
};

export default function ClientIndex({ clients, pageSeo }: ClientIndexProps) {
    const handlePageChange = (page: number) => {
        const url = new URL(window.location.href);
        url.searchParams.set('page', page.toString());
        window.location.href = url.href;
    };

    // Get content from page configuration with fallbacks
    const content = pageSeo?.content || {};

    return (
        <>
            <SeoHead
                seoConfig={pageSeo?.seo_config}
                fallbackTitle={content.clients_title || 'Our Clients'}
                fallbackDescription={content.clients_description || 'Meet our trusted clients and partners'}
                type="page"
            />
            <main className="container mx-auto max-w-7xl px-4 py-32">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{content.clients_title || 'Our Clients'}</h1>
                    <p className="mt-4 text-lg text-gray-400 md:text-xl">
                        {content.clients_subtitle || 'Trusted partners who have chosen us to bring their visions to life'}
                    </p>
                    {content.clients_description && <p className="mt-2 text-base text-gray-500">{content.clients_description}</p>}
                </header>

                {/* Clients Grid */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {clients.items.map((client, index) => (
                            <article key={index}>
                                <Link href={`/client/${client.slug}`}>
                                    <Card className="group overflow-hidden border-gray-800 bg-gray-900 transition-all duration-300 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10">
                                        <div className="relative flex aspect-video items-center justify-center bg-gray-800 p-8">
                                            {client.logo?.original_url ? (
                                                <img
                                                    src={client.logo.original_url}
                                                    alt={`${client.name} logo`}
                                                    className="max-h-full max-w-full object-contain filter transition-all duration-300 group-hover:brightness-110"
                                                />
                                            ) : (
                                                <div className="flex size-16 items-center justify-center rounded-full bg-gray-700 text-gray-400">
                                                    <Building2 className="size-8" />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                            <div className="absolute right-4 bottom-4 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                                <ExternalLink className="size-5 text-white" />
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-brand-400">
                                                {client.name}
                                            </h3>
                                            {client.excerpt && <p className="line-clamp-2 text-gray-400">{client.excerpt}</p>}

                                            {client.is_featured && (
                                                <div className="mt-3">
                                                    <span className="inline-block rounded-full bg-brand-500/20 px-3 py-1 text-xs font-medium text-brand-400">
                                                        {content.featured_client_label || 'Featured Client'}
                                                    </span>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {clients.items.length === 0 && (
                        <div className="py-16 text-center">
                            <Building2 className="mx-auto mb-4 size-16 text-gray-500" />
                            <h3 className="mb-2 text-xl font-semibold text-gray-400">{content.no_clients_title || 'No clients found'}</h3>
                            <p className="text-gray-500">{content.no_clients_description || "We're working on building our client portfolio."}</p>
                        </div>
                    )}
                </section>

                {/* Pagination */}
                {clients.total_page > 1 && (
                    <SimplePagination
                        currentPage={clients.current_page}
                        totalPages={clients.total_page}
                        hasNextPage={clients.current_page < clients.total_page}
                        hasPreviousPage={clients.current_page > 1}
                        onPageChange={handlePageChange}
                    />
                )}
            </main>
        </>
    );
}

ClientIndex.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
