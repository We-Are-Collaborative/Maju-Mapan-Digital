import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import sharp from 'sharp';
import { mkdir, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const fileNameInput = formData.get('file_name') as string;
        const altTag = formData.get('alt_tag') as string;

        if (!file || !fileNameInput || !altTag) {
            return NextResponse.json({ error: 'Missing required fields: file, file_name, and alt_tag are mandatory.' }, { status: 400 });
        }

        // Validate Alt Tag length (10-120 chars)
        if (altTag.length < 10 || altTag.length > 120) {
            return NextResponse.json({ error: 'Alt tag must be between 10 and 120 characters for optimal SEO.' }, { status: 400 });
        }

        // Sanitize File Name (Slugify)
        const sanitizedFileName = fileNameInput
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        if (!sanitizedFileName) {
            return NextResponse.json({ error: 'Invalid file name. Please use alphanumeric characters.' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const originalExtension = extname(file.name).toLowerCase();
        const mimeType = file.type;

        let outputBuffer: Buffer;
        let finalFilename: string;
        let format: string;
        let type: 'IMAGE' | 'VIDEO' | 'DOCUMENT' = 'DOCUMENT';
        let dimensions: string | null = null;

        const isImage = mimeType.startsWith('image/');
        const isSvg = mimeType === 'image/svg+xml' || originalExtension === '.svg';
        const isVideo = mimeType.startsWith('video/');

        if (isImage && !isSvg) {
            // Process Image with Sharp
            const image = sharp(buffer);
            const metadata = await image.metadata();

            format = 'webp';
            type = 'IMAGE';
            dimensions = `${metadata.width}x${metadata.height}`;

            let processedImage = image.webp({ quality: 85, effort: 6 });
            if (metadata.width && metadata.width > 1920) {
                processedImage = processedImage.resize(1920, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });
            }
            outputBuffer = await processedImage.toBuffer();
            finalFilename = `${sanitizedFileName}_${Date.now()}.webp`;
        } else {
            // Passthrough for SVG, Video, and other documents
            outputBuffer = buffer;
            finalFilename = `${sanitizedFileName}_${Date.now()}${originalExtension}`;
            format = originalExtension.replace('.', '');

            if (isSvg) type = 'IMAGE';
            else if (isVideo) type = 'VIDEO';
            else type = 'DOCUMENT';
        }

        const uploadDir = join(process.cwd(), 'public', 'assets', 'media');
        await mkdir(uploadDir, { recursive: true });

        const filePath = join(uploadDir, finalFilename);
        await writeFile(filePath, outputBuffer);

        const relativePath = `/assets/media/${finalFilename}`;

        // Save to Database
        const asset = await prisma.mediaAsset.create({
            data: {
                fileName: finalFilename,
                originalName: file.name,
                altTag: altTag,
                filePath: relativePath,
                fileSizeKb: parseFloat((outputBuffer.length / 1024).toFixed(2)),
                format: format,
                type: type,
                dimensions: dimensions
            }
        });

        return NextResponse.json({
            success: true,
            asset: asset,
            // Backward compatibility for existing SeoImageUpload usages
            file_path: asset.filePath,
            alt_tag: asset.altTag,
            size_kb: asset.fileSizeKb,
            format: asset.format
        });

    } catch (error: any) {
        console.error('[Media Upload Error]', error);
        return NextResponse.json({ error: error.message || 'Failed to process asset' }, { status: 500 });
    }
}
