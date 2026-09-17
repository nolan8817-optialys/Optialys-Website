import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2 } from 'lucide-react';
import {
  FadeIn,
  GlowButton,
  EyebrowRule,
  SequencePills,
  IndexCard,
  Accordion,
  AsteriskDecor,
  type AccordionItem,
} from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

/* Aucun prix dans ce schema : la valeur se justifie au premier appel. */
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Optialys',
  url: 'https://optialys.com',
  logo: 'https://optialys.com/optialys-logo.webp',
  description:
    "Contrôle de gestion opérationnel pour les ateliers haut de gamme travaillant à l'affaire. Optialys mesure l'écart entre les heures devisées et les heures consommées, et pilote la marge chantier par chantier.",
  serviceType: 'Contrôle de gestion opérationnel et pilotage de marge',
  email: 'nolan@optialys.com',
  founder: {
    '@type': 'Person',
    name: 'Nolan Prayagsing',
    url: 'https://optialys.com/a-propos',
    sameAs: 'https://www.linkedin.com/in/nolan-prayagsing-a70815278/',
  },
  areaServed: { '@type': 'Country', name: 'France' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pilotage de marge',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diagnostic de marge',
          description:
            "Reconstitution de l'écart entre le devis et le réel sur trois à cinq chantiers terminés, à partir des données de l'atelier, et chiffrage de ce que cet écart coûte sur un an.",
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Installation',
          description:
            "Mise en place de la base opérationnelle, de la saisie terrain et du moteur d'écart prévu / réel, sans remplacer le logiciel métier existant.",
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pilotage de marge',
          description:
            "Revue de marge mensuelle avec le dirigeant, rapport écrit commenté, alertes de dérive en continu et évolution du système.",
        },
      },
    ],
  },
  sameAs: ['https://www.linkedin.com/company/optialys'],
};

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

/* ── Hero ────────────────────────────────────────────────────────────────
   Centré et sans visuel : la typographie porte l'écran seule.            */
const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero-halo border-b border-border-cream px-6 pt-36 pb-24 md:pt-44 md:pb-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <EyebrowRule align="center" className="mb-10">
          {t('home.hero.eyebrow')}
        </EyebrowRule>

        <h1 className="display-1 text-ink-navy">
          <span className="block">{t('home.hero.title.line1')}</span>
          <span className="display-accent block">{t('home.hero.title.line2')}</span>
        </h1>

        <p className="lead mt-9 max-w-xl">
          {t('home.hero.body')}{' '}
          <span className="highlight-coral font-semibold">
            {t('home.hero.body.highlight')}
          </span>
        </p>

        <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="px-8 py-4 text-base">
              {t('home.hero.cta.primary')} <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </a>
          <Link to="/methode">
            <GlowButton variant="outline" className="px-8 py-4 text-base">
              {t('home.hero.cta.secondary')}
            </GlowButton>
          </Link>
        </div>

        <p className="mt-5 text-xs tracking-wide text-ink-gray">
          {t('home.hero.cta.reassure')}
        </p>

        <SequencePills
          className="mt-14 justify-center"
          items={[t('home.hero.pill.1'), t('home.hero.pill.2'), t('home.hero.pill.3')]}
        />
      </div>
    </section>
  );
};

/* ── La vidéo de présentation ─────────────────────────────────────────
   preload="none" + poster : rien ne se télécharge tant que le visiteur
   n'a pas cliqué. Le fichier fait ~40 Mo, on ne l'impose à personne.  */
const IntroVideo = () => {
  const { t } = useLanguage();
  return (
    <section className="border-b border-border-cream bg-bg-cream-alt px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <EyebrowRule align="center" className="mb-7">
          {t('home.video.eyebrow')}
        </EyebrowRule>
        <h2 className="display-2 mb-12 text-center text-ink-navy">
          {t('home.video.title')}
        </h2>

        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-border-cream bg-ink-navy shadow-[0_24px_60px_rgba(26,26,26,0.14)]">
            <video
              className="block h-auto w-full"
              controls
              preload="none"
              playsInline
              poster="/presentation-optialys-poster.jpg"
              width={1920}
              height={1080}
            >
              <source src="/presentation-optialys.mp4" type="video/mp4" />
              <p className="p-6 text-bg-cream">
                {t('home.video.fallback')}{' '}
                <a href="/presentation-optialys.mp4" className="text-accent-coral underline">
                  {t('home.video.download')}
                </a>
              </p>
            </video>
          </div>
        </FadeIn>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.18em] text-ink-gray">
          {t('home.video.caption')}
        </p>
      </div>
    </section>
  );
};

/* ── Le constat ─────────────────────────────────────────────────────── */
const Problem = () => {
  const { t } = useLanguage();
  const items = [
    { title: t('home.problem.1.title'), desc: t('home.problem.1.desc') },
    { title: t('home.problem.2.title'), desc: t('home.problem.2.desc') },
    { title: t('home.problem.3.title'), desc: t('home.problem.3.desc') },
  ];
  return (
    <section className="bg-bg-cream px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <EyebrowRule className="mb-7">{t('home.problem.eyebrow')}</EyebrowRule>
        <h2 className="display-2 mb-6 max-w-3xl text-ink-navy">
          {t('home.problem.title')}
        </h2>
        <p className="lead mb-16 max-w-2xl">{t('home.problem.intro')}</p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <IndexCard index={i + 1} title={item.title}>
                {item.desc}
              </IndexCard>
            </FadeIn>
          ))}
        </div>

        <p className="lead mt-14 max-w-3xl border-l-2 border-accent-coral pl-6">
          {t('home.problem.close')}
        </p>
      </div>
    </section>
  );
};

/* ── La démonstration ─────────────────────────────────────────────────
   La démo est une page statique (public/demo/index.html), générée depuis
   le second brain. Sur ordinateur, elle tourne dans l'iframe et démarre
   seule quand elle arrive à l'écran (?embed). En dessous de lg, le texte
   serait illisible à l'échelle : on renvoie vers la page complète, qui
   s'affiche alors en défilement.
   /demonstration est une réécriture Vercel : lien <a>, pas <Link>, sinon
   React Router renvoie vers l'accueil.                                 */
const Demo = () => {
  const { t } = useLanguage();
  const frame = useRef<HTMLIFrameElement>(null);
  const fullscreen = () => {
    frame.current?.requestFullscreen?.().catch(() => undefined);
  };
  return (
    <section className="border-t border-border-cream bg-bg-cream-alt px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <EyebrowRule className="mb-7">{t('home.demo.eyebrow')}</EyebrowRule>
        <h2 className="display-2 mb-6 max-w-3xl text-ink-navy">{t('home.demo.title')}</h2>
        <p className="lead mb-14 max-w-2xl">{t('home.demo.intro')}</p>
      </div>

      <FadeIn className="mx-auto hidden max-w-7xl lg:block">
        <div className="overflow-hidden rounded-2xl border border-border-cream bg-bg-cream shadow-[0_24px_60px_rgba(26,26,26,0.14)]">
          <iframe
            ref={frame}
            src="/demo/index.html?embed"
            title={t('home.demo.frameTitle')}
            loading="lazy"
            allow="fullscreen"
            className="block aspect-video w-full"
          />
        </div>
        <div className="mt-5 flex items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-gray">
            {t('home.demo.caption')}
          </p>
          <GlowButton variant="outline" onClick={fullscreen}>
            <Maximize2 className="h-4 w-4" /> {t('home.demo.fullscreen')}
          </GlowButton>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-6xl lg:hidden">
        <div className="rounded-xl border border-border-cream bg-surface-white p-8">
          <p className="mb-6 leading-relaxed text-ink-gray">{t('home.demo.mobile.body')}</p>
          <a href="/demonstration">
            <GlowButton variant="primary">
              {t('home.demo.mobile.cta')} <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </a>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-ink-gray">
            {t('home.demo.caption')}
          </p>
        </div>
      </div>
    </section>
  );
};

/* ── Déjà livré ───────────────────────────────────────────────────────── */
const Proof = () => {
  /* Koosmik est nomme avec l'accord de leur direction (07/09). Les deux
     autres restent anonymes tant que l'accord n'a pas ete demande. */
  const { t } = useLanguage();
  const items = [1, 2, 3].map((i) => ({
    sector: t(`home.proof.${i}.sector`),
    what: t(`home.proof.${i}.what`),
    desc: t(`home.proof.${i}.desc`),
  }));
  return (
    <section className="border-y border-border-cream bg-surface-white px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <EyebrowRule className="mb-7">{t('home.proof.eyebrow')}</EyebrowRule>
        <h2 className="display-2 mb-6 max-w-3xl text-ink-navy">{t('home.proof.title')}</h2>
        <p className="lead mb-14 max-w-2xl">{t('home.proof.intro')}</p>

        <ul>
          {items.map((item, i) => (
            <FadeIn key={item.what} delay={i * 0.06}>
              <li className="accordion-row grid grid-cols-1 gap-3 py-8 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10">
                <p className="tag-optialys pt-1">{item.sector}</p>
                <div>
                  <h3 className="display-3 mb-2 text-ink-navy">{item.what}</h3>
                  <p className="leading-relaxed text-ink-gray">{item.desc}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>

        <p className="lead mt-12 max-w-3xl border-l-2 border-accent-coral pl-6">
          {t('home.proof.close')}
        </p>
      </div>
    </section>
  );
};

/* ── Le retournement ────────────────────────────────────────────────── */
const Turn = () => {
  const { t } = useLanguage();
  return (
    <section className="border-y border-border-cream bg-bg-cream-alt px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <EyebrowRule className="mb-7">{t('home.turn.eyebrow')}</EyebrowRule>
          <h2 className="display-2 text-ink-navy">{t('home.turn.title')}</h2>
        </div>
        <div>
          <figure className="rounded-2xl border-l-2 border-accent-coral bg-ink-navy px-8 py-9 md:px-10">
            <blockquote className="font-serif text-2xl italic leading-snug text-bg-cream md:text-3xl">
              {t('home.turn.quote')}
            </blockquote>
            <figcaption className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-coral">
              {t('home.turn.attribution')}
            </figcaption>
          </figure>
          <p className="lead mt-8">{t('home.turn.body')}</p>
          <p className="lead mt-4">{t('home.turn.body2')}</p>
        </div>
      </div>
    </section>
  );
};

/* ── La méthode, en accordéon ───────────────────────────────────────── */
export const useOfferItems = (): AccordionItem[] => {
  const { t } = useLanguage();
  return [
    {
      label: t('home.offer.1.label'),
      kicker: t('home.offer.1.kicker'),
      body: t('home.offer.1.body'),
      points: [
        t('home.offer.1.p1'),
        t('home.offer.1.p2'),
        t('home.offer.1.p3'),
        t('home.offer.1.p4'),
        t('home.offer.1.p5'),
      ],
    },
    {
      label: t('home.offer.2.label'),
      kicker: t('home.offer.2.kicker'),
      body: t('home.offer.2.body'),
      points: [
        t('home.offer.2.p1'),
        t('home.offer.2.p2'),
        t('home.offer.2.p3'),
        t('home.offer.2.p4'),
        t('home.offer.2.p5'),
      ],
    },
    {
      label: t('home.offer.3.label'),
      kicker: t('home.offer.3.kicker'),
      body: t('home.offer.3.body'),
      points: [
        t('home.offer.3.p1'),
        t('home.offer.3.p2'),
        t('home.offer.3.p3'),
        t('home.offer.3.p4'),
      ],
    },
  ];
};

const Offer = () => {
  const { t } = useLanguage();
  const items = useOfferItems();
  return (
    <section className="bg-bg-cream px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <EyebrowRule className="mb-7">{t('home.offer.eyebrow')}</EyebrowRule>
        <h2 className="display-2 mb-14 max-w-3xl text-ink-navy">
          {t('home.offer.title')}
        </h2>
        <Accordion items={items} />
      </div>
    </section>
  );
};

/* ── L'ancrage ──────────────────────────────────────────────────────── */
const Anchor = () => {
  const { t } = useLanguage();
  return (
    <section className="border-y border-border-cream bg-surface-white px-6 py-24 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <AsteriskDecor size={22} className="mx-auto mb-8" />
        <EyebrowRule align="center" className="mb-7">
          {t('home.anchor.eyebrow')}
        </EyebrowRule>
        <h2 className="display-2 mb-8 text-ink-navy">{t('home.anchor.title')}</h2>
        <p className="lead">{t('home.anchor.body')}</p>
        <p className="lead mt-4 font-semibold text-ink-navy">{t('home.anchor.body2')}</p>
      </div>
    </section>
  );
};

/* ── Pour qui ───────────────────────────────────────────────────────── */
const ForWhom = () => {
  const { t } = useLanguage();
  const nots = [t('home.forwho.not.1'), t('home.forwho.not.2'), t('home.forwho.not.3')];
  return (
    <section className="bg-bg-cream px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <EyebrowRule className="mb-7">{t('home.forwho.eyebrow')}</EyebrowRule>
          <h2 className="display-2 mb-7 text-ink-navy">{t('home.forwho.title')}</h2>
          <p className="lead">{t('home.forwho.body')}</p>
        </div>

        <div className="rounded-xl border border-border-cream bg-surface-white p-8 md:p-9">
          <h3 className="mb-6 text-base font-bold text-ink-navy">
            {t('home.forwho.not.title')}
          </h3>
          <ul className="space-y-4">
            {nots.map((n) => (
              <li key={n} className="flex gap-3 leading-relaxed text-ink-gray">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-gray/40" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* ── CTA final ──────────────────────────────────────────────────────── */
const FinalCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="hero-halo border-t border-border-cream bg-bg-cream px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <EyebrowRule align="center" className="mb-7">
          {t('home.final.eyebrow')}
        </EyebrowRule>
        <h2 className="display-2 mb-6 text-ink-navy">{t('home.final.title')}</h2>
        <p className="lead mb-10">{t('home.final.body')}</p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
          <GlowButton variant="primary" className="px-8 py-4 text-base">
            {t('home.final.cta')} <ArrowRight className="h-4 w-4" />
          </GlowButton>
        </a>
        <p className="mt-5 text-xs tracking-wide text-ink-gray">
          {t('home.hero.cta.reassure')}
        </p>
        <p className="mt-10 text-sm text-ink-gray">
          <a
            href="mailto:nolan@optialys.com"
            className="font-medium text-accent-coral hover:underline"
          >
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
      ? 'Optialys — Je m’occupe de votre marge'
      : 'Optialys — I take care of your margin',
    description: fr
      ? 'Vous devisez 400 heures, le chantier en prend 650, et personne ne le voit avant la facture. Optialys mesure l’écart en continu et pilote la marge des ateliers haut de gamme.'
      : 'You quote 400 hours, the job takes 650, and nobody sees it before the invoice. Optialys measures the gap continuously and steers the margin of high-end workshops.',
    canonical: 'https://optialys.com/',
    schema: ORGANIZATION_SCHEMA,
  });
  return (
    <>
      <Hero />
      <IntroVideo />
      <Problem />
      <Demo />
      <Proof />
      <Turn />
      <Offer />
      <Anchor />
      <ForWhom />
      <FinalCTA />
    </>
  );
};
