import { getArticles, getCategories, getPageSeo } from '@/app/actions/public-data';
import { InsightsContent } from './insights-content';

export default async function InsightsIndex() {
    const articlesData = await getArticles();
    const categoriesData = await getCategories();
    const pageSeoData = await getPageSeo('insights');

    // Data injection with explicit any cast to avoid type friction for now
    const allArticles = articlesData as any[];
    const categories = categoriesData as any[];
    const pageSeo = pageSeoData as any;

    return <InsightsContent articles={allArticles} categories={categories} pageSeo={pageSeo} />;
}
