import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Anchor, Car, Plane, Hammer, Sparkles, XCircle, CheckCircle2 } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { solutions, getSolution } from '../data/solutions';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

const icons = {
  anchor: Anchor, car: Car, plane: Plane, hammer: Hammer, sparkles: Sparkles,
};

export const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  const solution = getSolution(slug);

  const url = `https://optialys.com/solutions/${slug}`;
  useSEO({
    title: solution ? (fr ? solution.seoTitle.fr : solution.seoTitle.en) : 'Optialys',
    description: solution ? (fr ? solution.seoDescription.fr : solution.seoDescription.en) : '',
    canonical: url,
    schema: solution ? {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": fr ? solution.h1.fr : solution.h1.en,
          "description": fr ? solution.seoDescription.fr : solution.seoDescription.en,
          "serviceType": "Infrastructure opérationnelle et automatisation",
          "areaServed": { "@type": "Country", "name": "France" },
          "provider": { "@type": "Organization", "name": "Optialys", "url": "https://optialys.com" },
          "url": url
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Optialys", "item": "https://optialys.com/" },
            { "@type": "ListItem", "position": 2, "name": fr ? "Pour qui" : "For whom", "item": "https://optialys.com/case-studies" },
            { "@type": "ListItem", "position": 3, "name": fr ? solution.metier.fr : solution.metier.en, "item": url }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": (fr ? solution.faq.fr : solution.faq.en).map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }
      ]
    } : undefined,
  });

  if (!solution) return <Navigate to="/case-studies" replace />;

  const Icon = icons[solution.icon];
  const pains = fr ? solution.pains.fr : solution.pains.en;
  const connect = fr ? solution.connect.fr : solution.connect.en;
  const example = fr ? solution.example.fr : solution.example.en;
  const faq = fr ? solution.faq.fr : solution.faq.en;
  const others = solutions.filter(s => s.slug !== solution.slug);

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-ink-gray hover:text-accent-coral transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {fr ? 'Tous les métiers' : 'All trades'}
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <div className="w-16 h-16 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-8">
          <Icon className="w-8 h-8" />
        </div>
        <PillBadge className="mb-6">{fr ? 'Pour qui' : 'For whom'}</PillBadge>
        <h1 className="text-2xl md:text-3xl font-serif font-normal text-ink-navy mb-6 leading-[1.08]">
          {fr ? solution.h1.fr : solution.h1.en}
        </h1>
        <p className="text-base text-ink-gray leading-relaxed max-w-2xl mb-10">
          {fr ? solution.intro.fr : solution.intro.en}
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
          <GlowButton variant="primary" className="text-base px-7 py-4">
            {fr ? 'Réserver un Diagnostic' : 'Book a Diagnostic'} <ArrowRight className="w-5 h-5" />
          </GlowButton>
        </a>
      </section>

      {/* Pains */}
      <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-16 max-w-2xl">
            {fr ? `Ce qui vous fait perdre de l'argent en ${solution.metier.fr}` : `What's costing you money in ${solution.metier.en}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-cream">
            {pains.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-8 md:p-10 border-b border-r border-border-cream h-full">
                  <div className="w-11 h-11 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-6">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-navy mb-3">{p.title}</h3>
                  <p className="text-ink-gray leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What we connect */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-10">
            {fr ? 'Ce qu\'on connecte' : 'What we connect'}
          </h2>
          <div className="space-y-4">
            {connect.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-5 bg-surface-white border border-border-cream">
                  <CheckCircle2 className="w-6 h-6 text-accent-coral shrink-0 mt-0.5" />
                  <span className="text-ink-navy font-medium text-lg">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-12">
            {fr ? 'Un exemple concret' : 'A concrete example'}
          </h2>
          <div className="grid grid-cols-1 gap-px bg-border-cream border border-border-cream">
            {[
              { label: fr ? 'Situation' : 'Situation', value: example.situation, accent: false },
              { label: fr ? 'Ce qu\'on connecte' : 'What we connect', value: example.solution, accent: false },
              { label: fr ? 'Résultat' : 'Result', value: example.result, accent: true },
            ].map((row, i) => (
              <div key={i} className="bg-bg-cream p-8">
                <div className="text-xs font-bold uppercase tracking-wider text-ink-gray mb-2">{row.label}</div>
                <p className={`text-lg ${row.accent ? 'text-accent-coral font-bold' : 'text-ink-navy'}`}>{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-12">FAQ</h2>
          <div className="space-y-6">
            {faq.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 bg-surface-white border border-border-cream">
                  <h3 className="text-lg font-bold text-ink-navy mb-3">{f.q}</h3>
                  <p className="text-ink-gray leading-relaxed">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other trades — internal linking */}
      <section className="py-20 px-6 bg-surface-white border-t border-border-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-normal text-ink-navy mb-8">
            {fr ? 'Autres métiers que nous accompagnons' : 'Other trades we work with'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s) => {
              const OIcon = icons[s.icon];
              return (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="group p-6 bg-bg-cream border border-border-cream hover:border-accent-coral transition-colors flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral">
                    <OIcon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-ink-navy capitalize group-hover:text-accent-coral transition-colors">
                    {fr ? s.metier.fr : s.metier.en}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-6">
              {fr ? 'Commencez par le diagnostic.' : 'Start with the diagnostic.'}
            </h2>
            <p className="text-base text-ink-gray leading-relaxed max-w-2xl mx-auto">
              {fr
                ? '2 heures pour chiffrer où part votre argent. Vous repartez avec un plan d\'action et un devis fixe.'
                : '2 hours to quantify where your money goes. You leave with an action plan and a fixed quote.'}
            </p>
          </div>
          <FadeIn>
            <CalendlyEmbed />
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
