import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
  noindex?: boolean;
  type?: 'website' | 'article';
}

export const DEFAULT_OG_IMAGE = 'https://optialys.com/og-optialys.jpg';
const DEFAULT_TITLE_SUFFIX = ' | Optialys';

export const fullTitleOf = (title: string) =>
  title.includes('Optialys') ? title : title + DEFAULT_TITLE_SUFFIX;

/* Prérendu (23/11/2026) : au build, les pages sont rendues en HTML par
   scripts/prerender.mjs. Les effets ne tournent pas côté serveur : le hook
   dépose donc ses valeurs ici, et le script les écrit dans le <head> de
   chaque page. Une seule source pour le titre, la description, le canonical
   et le JSON-LD, côté navigateur comme côté robots. */
export const ssrHead: { current: SEOProps | null } = { current: null };

export function useSEO(props: SEOProps) {
  const { title, description, canonical, ogImage, schema, noindex, type } = props;
  if (typeof window === 'undefined') ssrHead.current = props;

  useEffect(() => {
    const fullTitle = fullTitleOf(title);
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name')) {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] ?? '');
        } else if (selector.startsWith('meta[property')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '');
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const image = ogImage ?? DEFAULT_OG_IMAGE;
    const canonicalUrl = canonical ?? `https://optialys.com${window.location.pathname}`;

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setMeta('meta[property="og:type"]', 'content', type ?? 'website');
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link') as HTMLLinkElement;
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonicalUrl;

    const SCHEMA_ID = 'page-schema';
    let scriptEl = document.getElementById(SCHEMA_ID);
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = SCHEMA_ID;
        (scriptEl as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, canonical, ogImage, schema, noindex, type]);
}
