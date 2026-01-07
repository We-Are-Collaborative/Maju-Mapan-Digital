import { getCareers, getCategories, getPageSeo } from '@/app/actions/public-data';
import { CareersContent } from './careers-content';

export default async function CareersIndex() {
    const careersData = await getCareers();
    const categoriesData = await getCategories();
    const pageSeoData = await getPageSeo('careers');

    // Data injection
    const careers = careersData as any[];
    const categories = categoriesData as any[];
    const pageSeo = pageSeoData as any;

    return <CareersContent careers={careers} categories={categories} pageSeo={pageSeo} />;
}
