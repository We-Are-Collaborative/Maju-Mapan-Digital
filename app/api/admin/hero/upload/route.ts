import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const type = formData.get('type') as string; // 'desktop' or 'mobile'

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Required dimensions (for resizing, not strict validation)
        const targetWidth = type === 'mobile' ? 1080 : 1920;
        const targetHeight = type === 'mobile' ? 1920 : 1080;

        // Convert to WebP and Resize
        const fileName = `${type}_hero_${Date.now()}.webp`;
        const uploadDir = join(process.cwd(), 'public', 'uploads', 'hero');

        // Ensure directory exists
        await mkdir(uploadDir, { recursive: true });

        const filePath = join(uploadDir, fileName);

        await sharp(buffer)
            .resize(targetWidth, targetHeight, {
                fit: 'cover',
                position: 'center'
            })
            .webp({ quality: 85 })
            .toFile(filePath);

        return NextResponse.json({
            success: true,
            url: `/uploads/hero/${fileName}`
        });

    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: error.message || 'Failed to process image' }, { status: 500 });
    }
}
