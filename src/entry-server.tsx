import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App';
import { ssrHead, fullTitleOf, DEFAULT_OG_IMAGE } from './hooks/useSEO';
import { blogArticles } from './data/blog';
import { solutions } from './data/solutions';

/* Prérendu au build (23/11/2026) : une page HTML par route, lue par
   scripts/prerender.mjs. Le contenu est rendu en français (langue par défaut). */
export const routes = (): string[] => [
  '/',
  '/methode',
  '/sites-internet',
  '/a-propos',
  '/contact',
  '/blog',
  ...blogArticles.map((a) => `/blog/${a.slug}`),
  ...solutions.map((s) => `/solutions/${s.slug}`),
  '/legal',
];

export const render = (url: string) => {
  ssrHead.current = null;
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </React.StrictMode>,
  );
  const seo = ssrHead.current;
  return {
    html,
    seo: seo && {
      ...seo,
      fullTitle: fullTitleOf(seo.title),
      ogImage: seo.ogImage ?? DEFAULT_OG_IMAGE,
    },
  };
};
