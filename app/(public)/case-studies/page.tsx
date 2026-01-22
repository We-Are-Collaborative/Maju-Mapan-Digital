import { getCaseStudies, getPageSeo } from '@/app/actions/public-data';
import { CaseStudyContent } from './case-study-content';
import { Suspense } from 'react';

export default async function CaseStudyPage() {
    const studiesData = await getCaseStudies();
    const pageSeoData = await getPageSeo('case-studies');

    // Transform or typecast as needed
    const caseStudies = studiesData as any[];
    const pageSeo = pageSeoData as any;

    return (
        <Suspense fallback={<div className="min-h-screen bg-black/95 flex items-center justify-center text-white">Loading projects...</div>}>
            <CaseStudyContent caseStudies={caseStudies} pageSeo={pageSeo} />
        </Suspense>
    );
}
