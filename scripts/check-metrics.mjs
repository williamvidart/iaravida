import opentype from 'opentype.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const font = opentype.parse(readFileSync(join(__dir, '../public/fonts/Grandenhas.otf')).buffer);
const o = font.charToGlyph('o');
const A = font.charToGlyph('A');
const a = font.charToGlyph('a');
console.log('UPM:', font.unitsPerEm);
console.log('ascender:', font.ascender, 'descender:', font.descender);
console.log('o bbox:', JSON.stringify(o.getBoundingBox()));
console.log('A bbox:', JSON.stringify(A.getBoundingBox()));
console.log('a bbox:', JSON.stringify(a.getBoundingBox()));
