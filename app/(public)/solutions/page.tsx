import { getPageSeo, getSpecialities } from '@/app/actions/public-data';
import { SolutionsContent } from './solutions-content';
import { Speciality } from '@/types/speciality';
import { Page } from '@/types/page';

export default async function SolutionsIndex() {
    const specialitiesData = await getSpecialities();
    const pageSeoData = await getPageSeo('solutions');

    // Data injection
    const specialities = specialitiesData.map((s: any) => ({
        ...s,
        features: s.features ? JSON.parse(s.features) : [],
    }));

    // Type casting
    const typedSpecialities = specialities as unknown as (Omit<Speciality, 'features'> & { features: string[] })[];
    const pageSeo = pageSeoData as Page;

    // Use any for the props to avoid strict type mismatch during migration between DB/UI types
    return <SolutionsContent specialities={typedSpecialities as any} pageSeo={pageSeo as any} />;
}
