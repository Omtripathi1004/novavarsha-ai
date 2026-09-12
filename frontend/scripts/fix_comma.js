import fs from 'fs';

const p = 'src/i18n/languages.js';
let s = fs.readFileSync(p, 'utf8');
s = s.replace("  'Replay Audio'", "  'Replay Audio'"); // just checking
const target = "  'Top 3 Optimal Crops for this Region': {";
const prevTarget = "  }\n  // ── Top 3 Recommended Crops & Rationales ──";
const replacement = "  },\n  // ── Top 3 Recommended Crops & Rationales ──";

if (s.includes(prevTarget)) {
  s = s.replace(prevTarget, replacement);
  fs.writeFileSync(p, s, 'utf8');
  console.log('Comma successfully added!');
} else {
  console.log('prevTarget not found, trying line replacement');
  const lines = s.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('// ── Top 3 Recommended Crops & Rationales ──')) {
      if (lines[i-1].trim() === '}') {
        lines[i-1] = '  },';
        fs.writeFileSync(p, lines.join('\n'), 'utf8');
        console.log('Comma added via lines!');
        break;
      }
    }
  }
}
