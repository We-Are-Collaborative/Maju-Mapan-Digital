'use server';

import { prisma } from '@/lib/db';
import { Prisma } from '@prisma/client';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function getUserApplications() {
    const session = await getServerSession(authOptions);

    if (!(session?.user as any)?.id) {
        return [];
    }

    try {
        const applications = await prisma.jobApplication.findMany({
            where: {
                userId: (session?.user as any)?.id
            },
            include: {
                career: {
                    select: {
                        title: true,
                        slug: true,
                        location: true,
                        type: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        type ApplicationWithCareer = Prisma.JobApplicationGetPayload<{
            include: {
                career: {
                    select: {
                        title: true,
                        slug: true,
                        location: true,
                        type: true
                    }
                }
            }
        }>;

        return applications.map((app: ApplicationWithCareer) => ({
            id: app.id,
            position: app.career.title,
            slug: app.career.slug,
            location: app.career.location,
            type: app.career.type,
            status: app.status,
            appliedAt: app.createdAt.toISOString(),
        }));
    } catch (error) {
        console.error("Error fetching user applications:", error);
        return [];
    }
}
