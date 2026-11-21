// World-news poster entry for make.fun news-image-20261121 (Node 22, standard library only).
// The poster is the entry.png beside this file; the program copies it to /output/entry.png.
// The image sums up the world's news of Saturday 21 November 2026: six stories, drawn
// as a newspaper front page with the date in the masthead.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
