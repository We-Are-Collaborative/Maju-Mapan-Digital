'use server';

import { prisma } from '@/lib/db';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    userType: z.enum(["employee", "candidate", "client"]),
});

export async function registerUser(prevState: any, formData: FormData) {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        userType: formData.get('userType'),
    };

    const validatedFields = registerSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please check your inputs.'
        };
    }

    const { name, email, password, userType } = validatedFields.data;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        if (userType === 'employee') {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) return { success: false, message: 'User with this email already exists.' };
            await prisma.user.create({ data: { name, email, password: hashedPassword, role: 'user' } });
        }
        else if (userType === 'candidate') {
            const existingCandidate = await prisma.candidate.findUnique({ where: { email } });
            if (existingCandidate) return { success: false, message: 'Candidate with this email already exists.' };
            await prisma.candidate.create({ data: { name, email, password: hashedPassword } });
        }
        else if (userType === 'client') {
            // Check if client exists by slug (name-based) or creating new? 
            // Better to check email if added, but for now let's creating a new client entry or linking?
            // User request implies "push into clients table".
            // We added email to Client, so check unique email.
            const existingClient = await prisma.client.findUnique({ where: { email } });
            if (existingClient) return { success: false, message: 'Client with this email already exists.' };

            await prisma.client.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    slug: name.toLowerCase().replace(/ /g, '-') + '-' + Math.floor(Math.random() * 1000) // Ensure slug uniqueness
                }
            });
        }

        return { success: true, message: 'Registration successful! You can now login.' };

        return { success: true, message: 'Registration successful! You can now login.' };
    } catch (error) {
        console.error("Registration error:", error);
        return { success: false, message: 'Something went wrong. Please try again.' };
    }
}
