import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '../public/icon.png');

// PNG sizes for browser/iOS
const sizes = [
  { size: 32,  name: 'favicon-32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

for (const { size, name } of sizes) {
  await sharp(src).resize(size, size).png().toFile(join(__dirname, '../public', name));
  console.log(`✓ ${name} (${size}×${size})`);
}

// SVG wrapper that embeds a 512×512 resized copy as base64 (HiDPI favicons)
const pngBuf = await sharp(src).resize(256, 256).png({ compressionLevel: 9 }).toBuffer();
const b64 = pngBuf.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256">
  <image href="data:image/png;base64,${b64}" width="256" height="256"/>
</svg>`;
writeFileSync(join(__dirname, '../public/favicon.svg'), svg);
console.log('✓ favicon.svg (SVG wrapper with embedded PNG)');
