import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const line = 'The girl ran her cracked fingertips over the cedar hull and found no more snags, the wood finally reflecting her face in a deep, red glow after a winter spent in the sanding dust.';
const length = Array.from(line).length;
if (length < 1 || length > 240 || /[\r\n]/.test(line)) throw new Error('Invalid line');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, `${line}\n`);
const written = readFileSync(`${outputDir}/entry.txt`, 'utf8');
if (written !== `${line}\n`) throw new Error('Entry content mismatch');
const writtenLine = written.slice(0, -1);
const writtenLength = Array.from(writtenLine).length;
if (writtenLength !== length) throw new Error('Entry length mismatch');
if (writtenLength < 1 || writtenLength > 240 || /[\r\n]/.test(writtenLine)) throw new Error('Invalid entry shape');
