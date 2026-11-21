// news-image-20261121, round 3 — "Sum up 21 November's world news in one image".
// Node 22, standard library only, no network. The rendered front page sits
// next to this file as entry.png; this program checks the file is a complete,
// well-formed PNG of exactly 1024x1024 pixels and at most 1 MiB, then copies
// it byte-for-byte to $MAKEFUN_OUTPUT_DIR (or /output). Because the copy is
// verbatim, two runs always produce identical output bytes.
//
// Checks performed, in order:
//   1. the on-disk size matches the bytes actually read (no truncation);
//   2. total size is within the 1 MiB cap;
//   3. the 8-byte PNG signature is correct;
//   4. the first chunk is IHDR, 13 bytes long, declaring 1024x1024;
//   5. every chunk is whole, its CRC32 matches its contents, at least one
//      IDAT chunk is present, and the file ends exactly at IEND.

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SIZE_CAP = 1048576;
const SIDE = 1024;
const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// CRC-32 (IEEE 802.3) table, built once at startup.
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  crcTable[n] = c >>> 0;
}
function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function fail(message) {
  throw new Error(`entry.png rejected: ${message}`);
}

const entryUrl = new URL('./entry.png', import.meta.url);
const image = readFileSync(entryUrl);
const onDisk = statSync(entryUrl).size;
if (onDisk !== image.length) {
  fail(`on-disk size ${onDisk} differs from ${image.length} bytes read`);
}
if (image.length > SIZE_CAP) {
  fail(`${image.length} bytes exceeds the 1 MiB cap`);
}
if (image.length < 8 || !image.subarray(0, 8).equals(SIGNATURE)) {
  fail('bad PNG signature');
}

// Parse the chunk chain into a list, validating each chunk's CRC as we go.
const chunks = [];
let cursor = 8;
while (cursor + 8 <= image.length) {
  const dataLength = image.readUInt32BE(cursor);
  const type = image.toString('ascii', cursor + 4, cursor + 8);
  const dataEnd = cursor + 8 + dataLength;
  if (dataEnd + 4 > image.length) {
    fail(`chunk ${type} at offset ${cursor} runs past the end of the file`);
  }
  const storedCrc = image.readUInt32BE(dataEnd);
  const actualCrc = crc32(image.subarray(cursor + 4, dataEnd));
  if (storedCrc !== actualCrc) {
    fail(`chunk ${type} at offset ${cursor} has a bad CRC`);
  }
  chunks.push({ type, dataLength, offset: cursor });
  cursor = dataEnd + 4;
  if (type === 'IEND') break;
}
if (cursor !== image.length) {
  fail('trailing bytes after the IEND chunk');
}

const [first] = chunks;
if (!first || first.type !== 'IHDR' || first.dataLength !== 13) {
  fail('first chunk is not a 13-byte IHDR');
}
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width !== SIDE || height !== SIDE) {
  fail(`dimensions are ${width}x${height}, must be exactly ${SIDE}x${SIDE}`);
}
if (!chunks.some((chunk) => chunk.type === 'IDAT')) {
  fail('no IDAT chunk (no image data)');
}
if (chunks[chunks.length - 1].type !== 'IEND') {
  fail('last chunk is not IEND');
}

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(destination, { recursive: true });
const target = join(destination, 'entry.png');
copyFileSync(entryUrl, target);
const digest = createHash('sha256').update(image).digest('hex');
console.log(`entry.png ${width}x${height}, ${image.length} bytes, sha256 ${digest} -> ${target}`);
