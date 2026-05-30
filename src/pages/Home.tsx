import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Clock, Unplug, Minus } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Optialys",
  "url": "https://optialys.com",
  "logo": "https://optialys.com/optialys-logo.webp",
  "description": "Infrastructure opérationnelle sur mesure pour ateliers et services haut de gamme. On connecte vos outils existants pour piloter votre marge en temps réel.",
  "serviceType": "Infrastructure opérationnelle et automatisation",
  "email": "nolan@optialys.com",
  "founder": {
    "@type": "Person",
    "name": "Nolan Prayagsing",
    "url": "https://optialys.com/about",
    "sameAs": "https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Infrastructure opérationnelle",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diagnostic Rentabilité",
          "description": "2 heures d'audit de vos outils et de vos flux. Identification de 3 à 5 pertes financières concrètes et plan d'action.",
          "url": "https://optialys.com/diagnostic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Infrastructure sur mesure",
          "description": "Connexion de vos outils existants dans un système central : tableau de bord temps réel, alertes budget automatiques, rapports hebdomadaires.",
          "url": "https://optialys.com/optialys-core"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Partenariat mensuel",
          "description": "Maintenance et évolution du système, analyse mensuelle des données, une automatisation nouvelle par mois, support prioritaire sous 24h.",
          "url": "https://optialys.com/optialys-partner"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/optialys"
  ]
};

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-8 h-px bg-accent-coral" />
    <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-coral">{children}</span>
  </div>
);

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-40 pb-24 px-6 border-b border-border-cream">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif font-normal text-ink-navy">
          <span className="block font-sans text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-accent-coral mb-8">
            {t('home.hero.eyebrow')}
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
            {t('home.hero.title.line1')}
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl leading-[1.1] text-accent-coral mt-1">
            {t('home.hero.title.line2')}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-sm md:text-base text-ink-gray leading-relaxed">
          {t('home.hero.body')}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="px-7 py-4 text-base">
              {t('home.hero.cta.primary')} <ArrowRight className="w-4 h-4" />
            </GlowButton>
          </a>
          <Link to="/services">
            <GlowButton variant="outline" className="px-7 py-4 text-base">
              {t('home.hero.cta.secondary')}
            </GlowButton>
          </Link>
        </div>

        <p className="mt-5 text-xs text-ink-gray tracking-wide">
          {t('home.hero.cta.reassure')}
        </p>
      </div>
    </section>
  );
};

const Problem = () => {
  const { t } = useLanguage();
  const items = [
    { icon: <AlertTriangle className="w-6 h-6" />, title: t('home.problem.1.title'), desc: t('home.problem.1.desc') },
    { icon: <Clock className="w-6 h-6" />, title: t('home.problem.2.title'), desc: t('home.problem.2.desc') },
    { icon: <Unplug className="w-6 h-6" />, title: t('home.problem.3.title'), desc: t('home.problem.3.desc') },
  ];
  return (
    <section className="py-24 px-6 bg-bg-cream">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t('home.problem.eyebrow')}</SectionLabel>
        <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-12 max-w-2xl">
          {t('home.problem.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-cream">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="p-8 md:p-10 border-b border-r border-border-cream bg-surface-white h-full">
                <div className="w-11 h-11 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-ink-navy mb-3 leading-snug">{item.title}</h3>
                <p className="text-ink-gray leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const { t } = useLanguage();
  return (
    <section className="py-28 px-6 bg-ink-navy">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel>{t('home.solution.eyebrow')}</SectionLabel>
          <h2 className="text-xl md:text-2xl font-serif font-normal text-white mb-6">
            {t('home.solution.title')}
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            {t('home.solution.body')}
          </p>
        </div>
        <FadeIn direction="right" className="w-full">
          <div className="visual-mockup-wrapper">
            <img
              src="/visuals/dashboard.jpg"
              alt="Tableau de bord temps réel Optialys — Suivi budget chantiers"
              loading="lazy"
              className="visual-mockup mirror"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// Ligne texte + mockup 3D (alternance gauche/droite)
const MockupRow = ({
  src,
  alt,
  badge,
  title,
  desc,
  imageSide,
}: {
  src: string;
  alt: string;
  badge?: string;
  title: string;
  desc: string;
  imageSide: 'left' | 'right';
}) => {
  const imageCol = (
    <FadeIn direction={imageSide === 'left' ? 'left' : 'right'} className="w-full">
      {badge && <p className="visual-badge mb-3">{badge}</p>}
      <div className="visual-mockup-wrapper">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`visual-mockup${imageSide === 'right' ? ' mirror' : ''}`}
        />
      </div>
    </FadeIn>
  );
  const textCol = (
    <FadeIn direction="up">
      <h3 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-4">{title}</h3>
      <p className="text-sm md:text-base text-ink-gray leading-relaxed">{desc}</p>
    </FadeIn>
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {imageSide === 'left' ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
    </div>
  );
};

const ProductVisuals = () => {
  const { t } = useLanguage();
  return (
    <section className="px-6 bg-bg-cream border-t border-border-cream">
      <div className="max-w-6xl mx-auto py-20 space-y-24">
        <MockupRow
          imageSide="left"
          src="/visuals/workflow.jpg"
          alt="Système d'automatisation n8n Optialys — Flux d'alerte budget"
          badge={t('home.visual.workflow.badge')}
          title={t('home.offer.2.name')}
          desc={t('home.offer.2.desc')}
        />
        <MockupRow
          imageSide="right"
          src="/visuals/rapport.jpg"
          alt="Rapport hebdomadaire automatique Optialys — Analyse rentabilité"
          badge={t('home.visual.report.badge')}
          title={t('home.offer.3.name')}
          desc={t('home.offer.3.desc')}
        />
      </div>
    </section>
  );
};

const Offer = () => {
  const { t } = useLanguage();
  const steps = [
    { step: t('home.offer.1.step'), name: t('home.offer.1.name'), desc: t('home.offer.1.desc'), featured: true },
    { step: t('home.offer.2.step'), name: t('home.offer.2.name'), desc: t('home.offer.2.desc'), featured: false },
    { step: t('home.offer.3.step'), name: t('home.offer.3.name'), desc: t('home.offer.3.desc'), featured: false },
  ];
  return (
    <section className="py-24 px-6 bg-bg-cream">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t('home.offer.eyebrow')}</SectionLabel>
        <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-12 max-w-2xl">
          {t('home.offer.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className={`h-full flex flex-col p-8 md:p-10 border bg-surface-white ${
                  s.featured ? 'border-accent-coral' : 'border-border-cream'
                }`}
              >
                <div className="mb-5">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-ink-gray">{s.step}</span>
                </div>
                <h3 className="text-lg font-bold text-ink-navy mb-3 leading-tight">{s.name}</h3>
                <p className="text-ink-gray leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="px-7 py-4 text-base">
              {t('home.hero.cta.primary')} <ArrowRight className="w-4 h-4" />
            </GlowButton>
          </a>
        </div>
      </div>
    </section>
  );
};

const ForWhom = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>{t('home.forwho.eyebrow')}</SectionLabel>
        <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-6">
          {t('home.forwho.title')}
        </h2>
        <p className="text-sm md:text-base text-ink-gray leading-relaxed">
          {t('home.forwho.body')}
        </p>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="py-28 px-6 bg-bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <Minus className="w-8 h-8 text-accent-coral mx-auto mb-6" strokeWidth={3} />
        <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-6">
          {t('home.final.title')}
        </h2>
        <p className="text-sm md:text-base text-ink-gray leading-relaxed mb-8">
          {t('home.final.body')}
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
          <GlowButton variant="primary" className="px-8 py-4 text-base">
            {t('home.final.cta')} <ArrowRight className="w-4 h-4" />
          </GlowButton>
        </a>
        <p className="mt-5 text-xs text-ink-gray tracking-wide">
          {t('home.hero.cta.reassure')}
        </p>
        <p className="mt-8 text-sm text-ink-gray">
          <a href="mailto:nolan@optialys.com" className="text-accent-coral hover:underline font-medium">
            nolan@optialys.com
          </a>
        </p>
      </div>
    </section>
  );
};

export const Home = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  useSEO({
    title: fr
      ? 'Optialys — Infrastructure opérationnelle pour ateliers haut de gamme'
      : 'Optialys — Operational infrastructure for high-end workshops',
    description: fr
      ? 'Vos outils déconnectés vous font perdre de l\'argent. Optialys connecte votre infrastructure et vous donne une vision temps réel de vos chantiers et de votre marge.'
      : 'Disconnected tools are costing you money. Optialys connects your infrastructure and gives you a real-time view of your projects and your margin.',
    canonical: 'https://optialys.com/',
    schema: ORGANIZATION_SCHEMA,
  });
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Offer />
      <ProductVisuals />
      <ForWhom />
      <FinalCTA />
    </>
  );
};
