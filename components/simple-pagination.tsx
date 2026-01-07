import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { router } from '@/lib/inertia-adapter';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface SimplePaginationProps extends React.ComponentProps<'div'> {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    onPageChange?: (page: number) => void;
    baseUrl?: string;
}

export function SimplePagination({
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    onPageChange,
    baseUrl,
    className,
    ...props
}: SimplePaginationProps) {
    const handlePageChange = (page: number) => {
        if (onPageChange) {
            onPageChange(page);
        } else if (baseUrl) {
            const url = new URL(window.location.href);
            url.searchParams.set('page', page.toString());
            router.get(url.href, {}, { preserveState: true, replace: true });
        }
    };

    const generatePageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 7;

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total pages are less than max visible
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            // Show pages around current page
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            // Always show last page
            if (totalPages > 1) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className={cn('flex items-center justify-center gap-2 py-4', className)} {...props}>
            {/* First page button */}
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handlePageChange(1)}
                disabled={!hasPreviousPage}
                aria-label="Go to first page"
            >
                <ChevronsLeft className="h-4 w-4" />
            </Button>

            {/* Previous page button */}
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!hasPreviousPage}
                aria-label="Go to previous page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page numbers */}
            {generatePageNumbers().map((page, index) => (
                <Button
                    key={index}
                    variant={page === currentPage ? 'default' : 'outline'}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    disabled={typeof page === 'string'}
                    aria-label={typeof page === 'number' ? `Go to page ${page}` : undefined}
                >
                    {page}
                </Button>
            ))}

            {/* Next page button */}
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
                aria-label="Go to next page"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Last page button */}
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handlePageChange(totalPages)}
                disabled={!hasNextPage}
                aria-label="Go to last page"
            >
                <ChevronsRight className="h-4 w-4" />
            </Button>
        </div>
    );
}
