import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn, GlowButton, EyebrowRule, Accordion, AsteriskDecor } from '../components/ui';
import { useOfferItems } from './Home';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

const METHOD_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://optialys.com/' },
    { '@type': 'ListItem', position: 2, name: 'La méthode', item: 'https://optialys.com/methode' },
  ],
};

/* ── La démonstration ─────────────────────────────────────────────────
   Premier bloc de la page, sous le titre (demande de Nolan, 17/09).
   Depuis le 29/09 : la vidéo commentée par Nolan (2 min 44, tournée sur
   la démo « L'Atelier Témoin »), lisible aussi sur téléphone. preload="none"
   + poster : rien ne se télécharge avant le clic. La démo interactive reste
   accessible en dessous : page statique public/demo/index.html, générée
   depuis le second brain.
   /demonstration est une réécriture Vercel : lien <a>, pas <Link>, sinon
   React Router renvoie vers l'accueil.                                 */
const Demo = () => {
  const { t } = useLanguage();
  return (
    <section className="border-b border-border-cream bg-bg-cream-alt px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <EyebrowRule align="center" className="mb-6">
          {t('methode.demo.eyebrow')}
        </EyebrowRule>
        <p className="lead mx-auto mb-12 max-w-2xl">{t('methode.demo.intro')}</p>
      </div>

      <FadeIn className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-border-cream bg-bg-cream shadow-[0_24px_60px_rgba(26,26,26,0.14)]">
          <video
            className="block h-auto w-full"
            controls
            preload="none"
            playsInline
            poster="/demo-atelier-temoin-poster.jpg"
            width={1920}
            height={996}
            aria-label={t('methode.demo.frameTitle')}
          >
            <source src="/demo-atelier-temoin.mp4" type="video/mp4" />
            <p className="p-6">
              {t('home.video.fallback')}{' '}
              <a href="/demo-atelier-temoin.mp4" className="underline">
                {t('home.video.download')}
              </a>
            </p>
          </video>
        </div>
        <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-gray">
            {t('methode.demo.caption')}
          </p>
          <a href="/demonstration">
            <GlowButton variant="outline">
              {t('methode.demo.interactive')} <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export const Methode = () => {
  const { t, lang } = useLanguage();
  const fr = lang === 'fr';
  const items = useOfferItems();

  useSEO({
    title: fr ? 'La méthode — Optialys' : 'The method — Optialys',
    description: fr
      ? 'Diagnostic, installation, pilotage. Trois temps pour mesurer l’écart entre les heures devisées et les heures consommées, sans remplacer votre logiciel métier.'
      : 'Diagnostic, installation, steering. Three stages to measure the gap between quoted and consumed hours, without replacing your trade software.',
    canonical: 'https://optialys.com/methode',
    schema: METHOD_SCHEMA,
  });

  return (
    <div className="bg-bg-cream">
      {/* En-tête */}
      <section className="hero-halo border-b border-border-cream px-6 pt-36 pb-20 md:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <EyebrowRule align="center" className="mb-10">
            {t('methode.eyebrow')}
          </EyebrowRule>
          <h1 className="display-1 text-ink-navy">
            <span className="block">{t('methode.title.line1')}</span>
            <span className="display-accent block">{t('methode.title.line2')}</span>
          </h1>
          <p className="lead mx-auto mt-9 max-w-2xl">{t('methode.intro')}</p>
        </div>
      </section>

      {/* La démonstration, en premier */}
      <Demo />

      {/* Les trois temps */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Accordion items={items} />
        </div>
      </section>

      {/* Les deux règles */}
      <section className="border-y border-border-cream bg-bg-cream-alt px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <EyebrowRule className="mb-7">{t('methode.rule.eyebrow')}</EyebrowRule>
            <h2 className="display-3 mb-5 text-ink-navy">{t('methode.rule.title')}</h2>
            <p className="lead">{t('methode.rule.body')}</p>
          </div>
          <div>
            <EyebrowRule className="mb-7">{t('methode.adoption.eyebrow')}</EyebrowRule>
            <h2 className="display-3 mb-5 text-ink-navy">{t('methode.adoption.title')}</h2>
            <p className="lead">{t('methode.adoption.body')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <AsteriskDecor size={22} className="mx-auto mb-8" />
          <h2 className="display-2 mb-6 text-ink-navy">{t('methode.cta.title')}</h2>
          <p className="lead mb-10">{t('methode.cta.body')}</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="px-8 py-4 text-base">
              {t('home.final.cta')} <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </a>
          <p className="mt-5 text-xs tracking-wide text-ink-gray">
            {t('home.hero.cta.reassure')}
          </p>
        </div>
      </section>
    </div>
  );
};
