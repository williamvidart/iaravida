import opentype from 'opentype.js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const fontPath = join(__dir, '../public/fonts/Grandenhas.otf');
const outPath = join(__dir, '../public/fonts/Grandenhas-WithComma.otf');

const font = opentype.parse(readFileSync(fontPath).buffer, { lowMemory: false });

// ─── COMMA ─────────────────────────────────────────────────────────────────
// Exact copy of the semicolon's lower tail — the comma Iara already designed.
// Semicolon tail: M(123,275) sweeps left-down to (67,170), inner edge returns.
const commaPath = new opentype.Path();

// Semicolon tail: shifted down 100 (dy=-100) and left 40 (dx=-40) to sit closer to preceding letter
const dy = -100;
const dx = -40;
commaPath.moveTo(123 + dx, 275 + dy);
commaPath.quadraticCurveTo(125 + dx, 281 + dy, 131.5 + dx, 279.5 + dy);
commaPath.quadraticCurveTo(138 + dx, 278 + dy, 142 + dx, 270 + dy);
commaPath.quadraticCurveTo(144 + dx, 264 + dy, 144 + dx, 259 + dy);
commaPath.quadraticCurveTo(144 + dx, 226 + dy, 120 + dx, 202 + dy);
commaPath.quadraticCurveTo(90 + dx, 170 + dy, 67 + dx, 170 + dy);
commaPath.quadraticCurveTo(58 + dx, 170 + dy, 56 + dx, 179 + dy);
commaPath.quadraticCurveTo(55 + dx, 187 + dy, 70 + dx, 195 + dy);
commaPath.quadraticCurveTo(83 + dx, 202 + dy, 97.5 + dx, 220 + dy);
commaPath.quadraticCurveTo(112 + dx, 238 + dy, 117 + dx, 254 + dy);
commaPath.quadraticCurveTo(120 + dx, 266 + dy, 123 + dx, 275 + dy);
commaPath.closePath();

// ─── Ê (U+00EA) ─────────────────────────────────────────────────────────────
const eGlyph = font.charToGlyph('e');
const ehatPath = new opentype.Path();

for (const cmd of eGlyph.path.commands) {
  switch (cmd.type) {
    case 'M': ehatPath.moveTo(cmd.x, cmd.y); break;
    case 'L': ehatPath.lineTo(cmd.x, cmd.y); break;
    case 'Q': ehatPath.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y); break;
    case 'Z': ehatPath.closePath(); break;
  }
}

// Circumflex: organic chevron above e (top at y=391), peak at y=510, A-inspired
// Circumflex — very thick: peak gap ~32 units, arms ~28 units wide
ehatPath.moveTo(65, 428);
ehatPath.quadraticCurveTo(90, 470, 115, 514);    // outer left → peak
ehatPath.quadraticCurveTo(140, 470, 165, 428);   // outer right from peak
ehatPath.quadraticCurveTo(155, 406, 146, 414);   // right base inner — pulled well down
ehatPath.quadraticCurveTo(132, 450, 115, 482);   // inner right → inner peak (32 units below outer)
ehatPath.quadraticCurveTo(98, 450, 84, 414);     // inner left arm
ehatPath.quadraticCurveTo(75, 406, 65, 428);     // close at left base
ehatPath.closePath();

// ─── Ó (U+00F3) ─────────────────────────────────────────────────────────────
// Acute accent = left arm of circumflex, shifted dx=+12 to center over 'o'
// 'o' center x ≈ 127 vs 'e' center x ≈ 115, so all x coords +12
const oGlyph = font.charToGlyph('o');
const oacutePath = new opentype.Path();

for (const cmd of oGlyph.path.commands) {
  switch (cmd.type) {
    case 'M': oacutePath.moveTo(cmd.x, cmd.y); break;
    case 'L': oacutePath.lineTo(cmd.x, cmd.y); break;
    case 'Q': oacutePath.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y); break;
    case 'Z': oacutePath.closePath(); break;
  }
}

// Acute: diagonal slash above 'o'. ê circumflex peaks at y=514; ó acute ≈ 40% of that = y=440
// Starts just above 'o' top (y=390), peak at y=440, ~half the ê circumflex height
oacutePath.moveTo(108, 400);
oacutePath.quadraticCurveTo(117, 420, 127, 440);   // outer rise to peak
oacutePath.quadraticCurveTo(136, 437, 135, 425);   // tip round
oacutePath.quadraticCurveTo(129, 412, 120, 400);   // inner arm descending
oacutePath.quadraticCurveTo(113, 394, 108, 400);   // close
oacutePath.closePath();

const oacuteGlyph = new opentype.Glyph({
  name: 'oacute',
  unicode: 0x00F3,
  advanceWidth: oGlyph.advanceWidth,
  path: oacutePath,
});

// ─── Add all glyphs ────────────────────────────────────────────────────────
// Comma: replace the placeholder (box) glyph
const commaGlyph = new opentype.Glyph({
  name: 'comma',
  unicode: 0x002C,
  advanceWidth: 196,
  path: commaPath,
});

// ê: add as new glyph
const ehatGlyph = new opentype.Glyph({
  name: 'ecircumflex',
  unicode: 0x00EA,
  advanceWidth: eGlyph.advanceWidth,
  path: ehatPath,
});

// Replace comma slot
const commaIndex = font.tables.cmap.glyphIndexMap[0x002C];
console.log('Existing comma glyph index:', commaIndex);

// If comma already has a slot, replace it; otherwise add new
if (commaIndex !== undefined && commaIndex > 0) {
  font.glyphs.glyphs[commaIndex] = commaGlyph;
} else {
  const idx = font.glyphs.length;
  font.glyphs.glyphs[idx] = commaGlyph;
  font.glyphs.length = idx + 1;
  font.tables.cmap.glyphIndexMap[0x002C] = idx;
}

// Add ê
const ehatIndex = font.glyphs.length;
font.glyphs.glyphs[ehatIndex] = ehatGlyph;
font.glyphs.length = ehatIndex + 1;
font.tables.cmap.glyphIndexMap[0x00EA] = ehatIndex;

// Add ó
const oacuteIndex = font.glyphs.length;
font.glyphs.glyphs[oacuteIndex] = oacuteGlyph;
font.glyphs.length = oacuteIndex + 1;
font.tables.cmap.glyphIndexMap[0x00F3] = oacuteIndex;

const outBuffer = font.toArrayBuffer();
writeFileSync(outPath, Buffer.from(outBuffer));
console.log(`Written: ${outPath}`);
