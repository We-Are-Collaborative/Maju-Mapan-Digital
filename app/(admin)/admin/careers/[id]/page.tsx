import { getCareerById, getCategories } from '../actions';
import { CareerForm } from './career-form';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdminCareerEditPage({ params }: PageProps) {
    const { id } = await params;

    // Parallel fetch
    const careerPromise = id === 'new' ? Promise.resolve(null) : getCareerById(id);
    const categoriesPromise = getCategories();

    const [career, categories] = await Promise.all([careerPromise, categoriesPromise]);

    return <CareerForm career={career} categories={categories} />;
}
