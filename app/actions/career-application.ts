'use server';

import { prisma } from '@/lib/db';
import { z } from 'zod';

const applicationSchema = z.object({
    careerId: z.string(),
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    linkedinUrl: z.string().url().optional().or(z.literal('')),
    portfolioUrl: z.string().url().optional().or(z.literal('')),
    resumeUrl: z.string().url({ message: "Please provide a valid URL to your resume" }),
    coverLetter: z.string().optional(),
    answers: z.record(z.string()).optional(),
});

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function submitApplication(prevState: any, formData: FormData) {
    const session = await getServerSession(authOptions);

    // Optional: Enforce server-side check (though client will also handle)
    // if (!session?.user?.id) {
    //     return { success: false, message: 'You must be logged in to apply.' };
    // }

    const rawData = {
        careerId: formData.get('careerId'),
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        linkedinUrl: formData.get('linkedinUrl'),
        portfolioUrl: formData.get('portfolioUrl'),
        resumeUrl: formData.get('resumeUrl'),
        coverLetter: formData.get('coverLetter'),
        answers: formData.get('answers') ? JSON.parse(formData.get('answers') as string) : {},
    };

    const validatedFields = applicationSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please check your inputs.'
        };
    }

    try {
        await prisma.jobApplication.create({
            data: {
                careerId: validatedFields.data.careerId,
                fullName: validatedFields.data.fullName,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone || null,
                linkedinUrl: validatedFields.data.linkedinUrl || null,
                portfolioUrl: validatedFields.data.portfolioUrl || null,
                resumeUrl: validatedFields.data.resumeUrl || null,
                coverLetter: validatedFields.data.coverLetter || null,
                answers: JSON.stringify(validatedFields.data.answers),
                userId: (session?.user as any)?.id, // Link to user if logged in
            }
        });

        return { success: true, message: 'Application submitted successfully!' };
    } catch (error) {
        console.error('Submission error:', error);
        return { success: false, message: 'Failed to submit application. Please try again.' };
    }
}
