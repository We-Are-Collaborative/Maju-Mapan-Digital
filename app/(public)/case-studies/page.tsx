import { getCaseStudies, getPageSeo } from '@/app/actions/public-data';
import { CaseStudyContent } from './case-study-content';

export default async function CaseStudyPage() {
    const studiesData = await getCaseStudies();
    const pageSeoData = await getPageSeo('case-studies');

    // Transform or typecast as needed
    const caseStudies = studiesData as any[];
    const pageSeo = pageSeoData as any;

    return <CaseStudyContent caseStudies={caseStudies} pageSeo={pageSeo} />;
}
