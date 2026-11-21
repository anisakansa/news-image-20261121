// news-image-20261121 — "Sum up 21 November's world news in one image".
// Node 22, standard library only, no network. The entry image lives beside
// this file as entry.png; this program validates it and copies it byte-for-byte
// to /output/entry.png (or $MAKEFUN_OUTPUT_DIR for local runs), so two runs
// always write identical bytes.
//
// Validation: PNG magic, width/height from the IHDR chunk (max 1024x1024),
// an IEND chunk at the end, and a total size of at most 1 MiB (1048576 bytes).

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576;
const MAX_DIMENSION = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const IEND_TAIL = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);

if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG (bad magic bytes)');
}
// IHDR: length (4) + "IHDR" (4) + width (4, BE) + height (4, BE).
if (bytes.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk after the PNG signature');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
// Walk the chunk chain: every chunk must be whole, an IDAT chunk must exist,
// and the last chunk must be IEND (checked below via the tail bytes).
let offset = 8;
let sawIdat = false;
while (offset + 8 <= bytes.length) {
  const chunkLength = bytes.readUInt32BE(offset);
  const chunkType = bytes.toString('ascii', offset + 4, offset + 8);
  if (offset + 12 + chunkLength > bytes.length) {
    throw new Error(`entry.png chunk ${chunkType} at ${offset} is truncated`);
  }
  if (chunkType === 'IDAT') sawIdat = true;
  offset += 12 + chunkLength;
  if (chunkType === 'IEND') break;
}
if (!sawIdat) {
  throw new Error('entry.png has no IDAT chunk (no image data)');
}
if (offset !== bytes.length) {
  throw new Error('entry.png has trailing bytes after the IEND chunk');
}
if (!bytes.subarray(bytes.length - 12).equals(IEND_TAIL)) {
  throw new Error('entry.png has no IEND chunk at the end');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`entry.png ${width}x${height}, ${bytes.length} bytes -> ${join(outDir, 'entry.png')}`);
