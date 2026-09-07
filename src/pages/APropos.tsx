import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { GlowButton, EyebrowRule, IndexCard, FadeIn, AsteriskDecor } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nolan Prayagsing',
  url: 'https://optialys.com/a-propos',
  email: 'nolan@optialys.com',
  jobTitle: 'Fondateur, Optialys',
  worksFor: { '@type': 'Organization', name: 'Optialys', url: 'https://optialys.com' },
  sameAs: ['https://www.linkedin.com/in/nolan-prayagsing-a70815278/'],
};

export const APropos = () => {
  const { t, lang } = useLanguage();
  const fr = lang === 'fr';

  useSEO({
    title: fr ? 'À propos — Nolan Prayagsing | Optialys' : 'About — Nolan Prayagsing | Optialys',
    description: fr
      ? 'Contrôle de gestion des entreprises à l’affaire appliqué aux ateliers haut de gamme. Qui je suis, pourquoi ce métier, et comment je travaille.'
      : 'Management accounting for project-based businesses, applied to high-end workshops. Who I am, why this trade, and how I work.',
    canonical: 'https://optialys.com/a-propos',
    schema: PERSON_SCHEMA,
  });

  const principles = [
    { title: t('about.principles.1.title'), desc: t('about.principles.1.desc') },
    { title: t('about.principles.2.title'), desc: t('about.principles.2.desc') },
    { title: t('about.principles.3.title'), desc: t('about.principles.3.desc') },
  ];

  return (
    <div className="bg-bg-cream">
      {/* En-tête */}
      <section className="hero-halo border-b border-border-cream px-6 pt-36 pb-20 md:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <EyebrowRule align="center" className="mb-10">
            {t('about.eyebrow')}
          </EyebrowRule>
          <h1 className="display-1 text-ink-navy">
            <span className="block">{t('about.title.line1')}</span>
            <span className="display-accent block">{t('about.title.line2')}</span>
          </h1>
        </div>
      </section>

      {/* Le récit */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="lead">{t('about.body1')}</p>
          <p className="lead mt-6">{t('about.body2')}</p>
          <p className="lead mt-6">{t('about.body3')}</p>

          <div className="mt-12 flex items-center gap-4 border-t border-border-cream pt-8">
            <span className="text-sm font-medium text-ink-gray">
              Nolan Prayagsing · Optialys
            </span>
            <a
              href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent-coral/20 bg-accent-coral/10 text-accent-coral transition-colors hover:bg-accent-coral hover:text-white"
              aria-label="Nolan Prayagsing sur LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pourquoi les ateliers */}
      <section className="border-y border-border-cream bg-bg-cream-alt px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <EyebrowRule className="mb-7">{t('about.why.eyebrow')}</EyebrowRule>
            <h2 className="display-2 text-ink-navy">{t('about.why.title')}</h2>
          </div>
          <p className="lead">{t('about.why.body')}</p>
        </div>
      </section>

      {/* Principes */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <EyebrowRule className="mb-12">{t('about.principles.eyebrow')}</EyebrowRule>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <IndexCard index={i + 1} title={p.title}>
                  {p.desc}
                </IndexCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-cream px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <AsteriskDecor size={22} className="mx-auto mb-8" />
          <h2 className="display-2 mb-6 text-ink-navy">{t('home.final.title')}</h2>
          <p className="lead mb-10">{t('home.final.body')}</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="px-8 py-4 text-base">
              {t('home.final.cta')} <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </a>
        </div>
      </section>
    </div>
  );
};
