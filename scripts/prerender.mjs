// Prérendu au build (23/11/2026).
//
// Le site est une SPA : sans ce script, chaque URL renvoyait le même HTML vide
// (audit SEO du 20/09/2026). Ici, après `vite build` et le build SSR, chaque
// route est rendue en HTML avec son propre <title>, sa description, son
// canonical, ses balises Open Graph et son JSON-LD. Le navigateur affiche ce
// HTML tout de suite, puis React reprend la main (createRoot).
//
// Sortie : dist/index.html (accueil) et dist/<route>.html (servi sans .html grâce
// à "cleanUrls" dans vercel.json). Le sitemap est régénéré à partir des routes
// indexables.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const SITE = 'https://optialys.com';

const { render, routes } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Le JSON-LD va dans un <script> : on neutralise « </ » pour ne pas le fermer.
const jsonLd = (o) => JSON.stringify(o).replace(/<\//g, '<\\/');

const headFor = (route, seo) => {
  const url = seo.canonical ?? SITE + (route === '/' ? '/' : route);
  const robots = seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  const lines = [
    `<title>${esc(seo.fullTitle)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="${seo.type ?? 'website'}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(seo.fullTitle)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:image" content="${esc(seo.ogImage)}" />`,
    `<meta name="twitter:title" content="${esc(seo.fullTitle)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(seo.ogImage)}" />`,
  ];
  if (seo.schema) {
    lines.push(`<script type="application/ld+json" id="page-schema">${jsonLd(seo.schema)}</script>`);
  }
  return { head: lines.join('\n    '), url, indexable: !seo.noindex };
};

const START = '<!--seo:start-->';
const END = '<!--seo:end-->';
if (!template.includes(START) || !template.includes(END) || !template.includes('<!--app-html-->')) {
  throw new Error('prerender : marqueurs absents de dist/index.html');
}

const sitemap = [];
let count = 0;
for (const route of routes()) {
  const { html, seo } = render(route);
  if (!seo) throw new Error(`prerender : ${route} n'appelle pas useSEO`);
  if (!html || html.length < 500) throw new Error(`prerender : ${route} a rendu une page vide`);
  const { head, url, indexable } = headFor(route, seo);
  const page = template
    .slice(0, template.indexOf(START))
    .concat(head, template.slice(template.indexOf(END) + END.length))
    .replace('<!--app-html-->', html);
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, `${route.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  count += 1;
  if (indexable && url === SITE + (route === '/' ? '/' : route)) sitemap.push(route);
  console.log(`  ${indexable ? 'index  ' : 'noindex'}  ${route}  (${(page.length / 1024).toFixed(1)} Ko)`);
}

const today = new Date().toISOString().slice(0, 10);
const priority = (r) => (r === '/' ? '1.0' : r === '/methode' ? '0.9' : r.startsWith('/blog/') ? '0.6' : '0.8');
const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  sitemap
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE}${r === '/' ? '/' : r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(r)}</priority>\n  </url>`,
    )
    .join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerender : ${count} pages, ${sitemap.length} dans le sitemap.`);
