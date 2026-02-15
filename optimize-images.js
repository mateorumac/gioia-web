import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'src', 'assets', 'images');
const BACKUP_DIR = path.join(__dirname, 'src', 'assets', 'images-original');

// Configuration
const CONFIG = {
  maxWidth: 1920,       // Max width in pixels
  maxHeight: 2880,      // Max height in pixels (maintains 2:3 aspect ratio)
  quality: 85,          // WebP quality (0-100)
  progressive: true,    // Progressive loading
};

async function ensureBackupDir() {
  try {
    await fs.access(BACKUP_DIR);
    console.log('✓ Backup directory already exists');
  } catch {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    console.log('✓ Created backup directory');
  }
}

async function getImageFiles() {
  const files = await fs.readdir(IMAGES_DIR);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.webp', '.jpg', '.jpeg', '.png'].includes(ext);
  });
}

async function backupImage(filename) {
  const sourcePath = path.join(IMAGES_DIR, filename);
  const backupPath = path.join(BACKUP_DIR, filename);

  try {
    await fs.access(backupPath);
    // Backup already exists, skip
  } catch {
    await fs.copyFile(sourcePath, backupPath);
    console.log(`  📦 Backed up: ${filename}`);
  }
}

async function optimizeImage(filename) {
  const inputPath = path.join(IMAGES_DIR, filename);
  const outputPath = inputPath; // Overwrite original

  try {
    const metadata = await sharp(inputPath).metadata();
    const originalSize = (await fs.stat(inputPath)).size;

    console.log(`\n📷 Processing: ${filename}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${(originalSize / 1024).toFixed(2)} KB`);

    // Calculate new dimensions
    let width = metadata.width;
    let height = metadata.height;

    if (width > CONFIG.maxWidth || height > CONFIG.maxHeight) {
      const widthRatio = CONFIG.maxWidth / width;
      const heightRatio = CONFIG.maxHeight / height;
      const ratio = Math.min(widthRatio, heightRatio);

      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }

    // Backup original first
    await backupImage(filename);

    // Optimize and resize
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({
        quality: CONFIG.quality,
        effort: 6, // Compression effort (0-6, higher = smaller file but slower)
      })
      .toFile(outputPath + '.tmp');

    // Replace original with optimized version
    await fs.unlink(outputPath);
    await fs.rename(outputPath + '.tmp', outputPath);

    const newSize = (await fs.stat(outputPath)).size;
    const savedKB = ((originalSize - newSize) / 1024).toFixed(2);
    const savedPercent = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(`  ✓ Optimized: ${width}x${height}, ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`  💾 Saved: ${savedKB} KB (${savedPercent}%)`);

    return {
      filename,
      originalSize,
      newSize,
      saved: originalSize - newSize,
    };
  } catch (error) {
    console.error(`  ❌ Error processing ${filename}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log(`📁 Images directory: ${IMAGES_DIR}`);
  console.log(`📦 Backup directory: ${BACKUP_DIR}`);
  console.log(`⚙️  Max dimensions: ${CONFIG.maxWidth}x${CONFIG.maxHeight}`);
  console.log(`⚙️  Quality: ${CONFIG.quality}%\n`);

  // Ensure backup directory exists
  await ensureBackupDir();

  // Get all image files
  const imageFiles = await getImageFiles();
  console.log(`\n📊 Found ${imageFiles.length} images to optimize\n`);

  if (imageFiles.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  // Process all images
  const results = [];
  for (const file of imageFiles) {
    const result = await optimizeImage(file);
    if (result) {
      results.push(result);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📈 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));

  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalSaved = totalOriginal - totalNew;
  const percentSaved = ((totalSaved / totalOriginal) * 100).toFixed(1);

  console.log(`✓ Images processed: ${results.length}/${imageFiles.length}`);
  console.log(`📉 Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📊 Optimized total: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${percentSaved}%)`);
  console.log(`\n📦 Original images backed up to: ${BACKUP_DIR}`);
  console.log('\n✅ Optimization complete!\n');
}

main().catch(console.error);
