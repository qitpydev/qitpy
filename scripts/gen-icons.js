import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(__dirname, '../public/favicon.svg'));

const sizes = [
  { size: 32,  name: 'favicon-32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

for (const { size, name } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(__dirname, '../public', name));
  console.log(`✓ ${name} (${size}×${size})`);
}
