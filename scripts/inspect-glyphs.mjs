import opentype from 'opentype.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const font = opentype.parse(readFileSync(join(__dir, '../public/fonts/Grandenhas.otf')).buffer);

const chars = ['A', 'a', '.', ',', ';', 'e', 'E', 'o', 'O'];
for (const c of chars) {
  const g = font.charToGlyph(c);
  const bb = g.path ? g.getBoundingBox() : null;
  console.log(`\n=== '${c}' advance=${g.advanceWidth} bbox=${JSON.stringify(bb)} ===`);
  if (g.path) console.log(JSON.stringify(g.path.commands));
}
