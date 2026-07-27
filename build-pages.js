#!/usr/bin/env node
const { readFileSync, writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');
const { marked } = require('marked');

const ROOT = __dirname;
const CONTENT_DIR = join(ROOT, 'content');

mkdirSync(CONTENT_DIR, { recursive: true });

const pages = [
  {
    md: 'README.md',
    smd: 'content/readme.smd',
    title: 'xkb.sccl - readme',
    tab: 'readme',
    description: 'xkb.sccl - XKB config generator for Linux',
  },
  {
    md: 'CONTRIBUTING.md',
    smd: 'content/contributing.smd',
    title: 'xkb.sccl - contributing',
    tab: 'contributing',
    description: 'How to contribute a keyboard layout to xkb.sccl',
  },
];

for (const page of pages) {
  const md = readFileSync(join(ROOT, page.md), 'utf8');
  let html = marked.parse(md);
  html = html.replace(/ disabled=""/g, '');

  const smd = `---
.title = "${page.title}",
.date = .date("${new Date().toISOString().slice(0, 10)}T00:00:00"),
.authors = ["sccl"],
.layout = "page.shtml",
.custom = .{
    .tab = "${page.tab}",
    .description = "${page.description}",
},
---

\`\`\`=html
<div class="page-content">
${html}
</div>
\`\`\`
`;

  writeFileSync(join(ROOT, page.smd), smd);
  console.log(`${page.md} → ${page.smd}`);
}
