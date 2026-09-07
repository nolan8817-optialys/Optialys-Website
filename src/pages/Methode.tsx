import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GlowButton, EyebrowRule, Accordion, AsteriskDecor } from '../components/ui';
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
