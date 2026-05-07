import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

const DEFAULT_OG_IMAGE = 'https://optialys.com/optialys-logo.webp';
const DEFAULT_TITLE_SUFFIX = ' | Optialys';

export function useSEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('Optialys') ? title : title + DEFAULT_TITLE_SUFFIX;
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

    return () => {
      document.title = 'Optialys — Automatisation IA pour Agences Immobilières';
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        'Optialys automatise la qualification de leads, le suivi des mandats et l\'admin de votre agence immobilière. Votre lead reçoit une réponse en 4 minutes — même à 23h.'
      );
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, [title, description, canonical, ogImage, schema]);
}
