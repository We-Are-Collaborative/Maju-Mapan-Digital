'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { updateAudienceContext } from '@/app/actions/personalization';

export function AudienceTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            const searchQuery = searchParams.get('q') || searchParams.get('s') || undefined;
            updateAudienceContext(pathname, searchQuery);
        }
    }, [pathname, searchParams]);

    return null; // This component doesn't render anything
}
