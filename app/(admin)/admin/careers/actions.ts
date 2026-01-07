'use server'

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getAdminCareers() {
    return await prisma.career.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            category: true,
            _count: {
                select: { applications: true }
            }
        }
    });
}

export async function deleteCareer(id: string) {
    try {
        await prisma.career.delete({ where: { id } });
        revalidatePath('/admin/careers');
        return { success: true };
    } catch (error) {
        return { success: false, error: 'Failed to delete career' };
    }
}

export async function getCareerById(id: string) {
    return await prisma.career.findUnique({
        where: { id },
        include: { applications: true }
    });
}

export async function saveCareer(formData: FormData) {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const categoryId = formData.get('categoryId') as string;
    const type = formData.get('type') as string;
    const location = formData.get('location') as string;
    const minSalary = formData.get('minSalary') ? parseFloat(formData.get('minSalary') as string) : null;
    const maxSalary = formData.get('maxSalary') ? parseFloat(formData.get('maxSalary') as string) : null;
    const description = formData.get('description') as string;
    const content = formData.get('content') as string; // Rich text / HTML
    const status = formData.get('status') as string;
    const isRemote = formData.get('isRemote') === 'on';

    // Requirements might be passed as a JSON string from a conceptual repeater field
    const requirements = formData.get('requirements') as string || '[]';

    const data = {
        title,
        slug,
        categoryId: categoryId || null,
        type,
        location,
        minSalary,
        maxSalary,
        description, // Short excerpt
        content, // Full HTML
        requirements,
        isRemote,
        status: status || 'draft'
    };

    try {
        if (id) {
            await prisma.career.update({
                where: { id },
                data
            });
        } else {
            await prisma.career.create({
                data
            });
        }
        revalidatePath('/admin/careers');
        revalidatePath('/careers');
        revalidatePath(`/careers/${slug}`);
    } catch (error) {
        console.error('Error saving career:', error);
        return { success: false, error: 'Failed to save career' };
    }

    redirect('/admin/careers');
}

export async function getCategories() {
    return await prisma.category.findMany({
        orderBy: { name: 'asc' }
    });
}
