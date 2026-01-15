import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const MEDIA_ROOT = path.join(process.cwd(), 'public', 'assets', 'media');
const PUBLIC_ROOT = path.join(process.cwd(), 'public');

async function syncMedia() {
    console.log('🚀 Starting Media Sync Pipeline...');

    // 1. Ensure categorical directories exist
    const categories = ['clients', 'hero', 'icons', 'general', 'articles', 'specialities', 'values', 'team', 'news'];
    for (const cat of categories) {
        const dir = path.join(MEDIA_ROOT, cat);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
        }
    }

    // 2. Scan for images in common locations
    const scanPaths = [
        { dir: path.join(PUBLIC_ROOT, 'assets', 'client'), category: 'clients' },
        { dir: path.join(PUBLIC_ROOT, 'uploads', 'hero'), category: 'hero' },
        { dir: path.join(PUBLIC_ROOT, 'assets', 'icons'), category: 'icons' },
        { dir: path.join(PUBLIC_ROOT, 'assets', 'images'), category: 'general' },
        { dir: PUBLIC_ROOT, category: 'general', depth: 1 } // Only root files like next.svg, etc.
    ];

    const movedFiles = new Map<string, string>(); // oldPath -> newPath (relative to public)

    for (const scan of scanPaths) {
        if (!fs.existsSync(scan.dir)) continue;

        const files = fs.readdirSync(scan.dir);
        for (const file of files) {
            const fullPath = path.join(scan.dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
                const category = scan.category;
                const newFileName = `${path.basename(file, path.extname(file))}_${Date.now()}${path.extname(file)}`;
                const newRelativePath = `/assets/media/${category}/${newFileName}`;
                const newFullPath = path.join(MEDIA_ROOT, category, newFileName);

                const oldRelativePath = '/' + path.relative(PUBLIC_ROOT, fullPath);

                // Move file
                fs.copyFileSync(fullPath, newFullPath);
                // We keep originals for safety in this version, but we register the move
                movedFiles.set(oldRelativePath, newRelativePath);

                // Register in MediaAsset DB
                await prisma.mediaAsset.create({
                    data: {
                        fileName: newFileName,
                        originalName: file,
                        altTag: `Migrated ${category} asset: ${file}`,
                        filePath: newRelativePath,
                        fileSizeKb: parseFloat((stat.size / 1024).toFixed(2)),
                        format: path.extname(file).replace('.', '').toLowerCase(),
                        type: file.endsWith('.svg') ? 'IMAGE' : 'IMAGE', // Default to IMAGE for now
                        dimensions: null // Dimensions would require sharp, skipping for sync
                    }
                });

                console.log(`✅ Migrated: ${oldRelativePath} -> ${newRelativePath}`);
            }
        }
    }

    // 3. Update Database References
    console.log('🔄 Updating Database References...');

    const updates = [
        { model: prisma.client, fields: ['logoUrl'] },
        { model: prisma.article, fields: ['thumbnailUrl'] },
        { model: prisma.caseStudy, fields: ['thumbnailUrl'] },
        { model: prisma.teamMember, fields: ['thumbnailUrl'] },
        { model: prisma.speciality, fields: ['iconUrl', 'bgUrl', 'thumbnailUrl'] },
        { model: prisma.value, fields: ['iconUrl', 'bgUrl'] },
        { model: prisma.homeHeroSlide, fields: ['bgImageDesktop', 'bgImageMobile'] },
        { model: prisma.globalSettings, fields: ['logoGifUrl'] }
    ];

    for (const update of updates) {
        // @ts-ignore
        const records = await update.model.findMany();
        for (const record of records) {
            let hasChanges = false;
            const updatedData: any = {};

            for (const field of update.fields) {
                const oldValue = record[field];
                if (oldValue && movedFiles.has(oldValue)) {
                    updatedData[field] = movedFiles.get(oldValue);
                    hasChanges = true;
                    console.log(`   Updating ${field} in ${record.id}: ${oldValue} -> ${updatedData[field]}`);
                }
            }

            if (hasChanges) {
                // @ts-ignore
                await update.model.update({
                    where: { id: record.id },
                    data: updatedData
                });
            }
        }
    }

    console.log('✨ Sync Completed Successfully!');
}

syncMedia()
    .catch(err => {
        console.error('❌ Sync Failed:', err);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
