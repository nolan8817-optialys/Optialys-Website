import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LineChart, Wrench, Compass, MessageSquare, CheckCircle2, XCircle } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, AsteriskDecor } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

export const OptialysPartner = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  useSEO({
    title: fr
      ? 'Partenariat mensuel — Faire évoluer votre système chaque mois | Optialys'
      : 'Monthly partnership — Evolve your system every month | Optialys',
    description: fr
      ? 'Analyse mensuelle de vos données, une automatisation nouvelle par mois, conseil croissance et support prioritaire sous 24h. Votre infrastructure devient un avantage qui se renforce.'
      : 'Monthly analysis of your data, one new automation per month, growth advice and priority support within 24h. Your infrastructure becomes a compounding advantage.',
    canonical: 'https://optialys.com/optialys-partner',
  });

  const monthlyFeatures = fr ? [
    { icon: <LineChart className="w-7 h-7" />, title: "Analyse mensuelle de vos données", desc: "Chaque mois, on passe vos chiffres au crible : marge par chantier, dérives, postes qui coûtent. Vous savez exactement où vous gagnez et où vous perdez." },
    { icon: <Wrench className="w-7 h-7" />, title: "1 automatisation nouvelle par mois", desc: "On identifie le prochain flux à fluidifier et on le déploie. Votre système ne stagne pas — il s'enrichit mois après mois." },
    { icon: <Compass className="w-7 h-7" />, title: "Conseil croissance", desc: "Un point mensuel pour décider sur des données réelles, pas sur des impressions. On aligne le système sur vos priorités du moment." },
    { icon: <MessageSquare className="w-7 h-7" />, title: "Support prioritaire sous 24h", desc: "Un canal direct. Une question, un ajustement, une idée — réponse sous 24h, sans ticket, sans intermédiaire." }
  ] : [
    { icon: <LineChart className="w-7 h-7" />, title: "Monthly analysis of your data", desc: "Every month we go through your numbers: margin per project, drifts, the line items that cost. You know exactly where you win and where you lose." },
    { icon: <Wrench className="w-7 h-7" />, title: "One new automation per month", desc: "We identify the next flow to smooth out and deploy it. Your system doesn't stagnate — it grows month after month." },
    { icon: <Compass className="w-7 h-7" />, title: "Growth advice", desc: "A monthly review to decide on real data, not impressions. We align the system with your current priorities." },
    { icon: <MessageSquare className="w-7 h-7" />, title: "Priority support within 24h", desc: "A direct channel. A question, an adjustment, an idea — answered within 24h, no ticket, no middleman." }
  ];

  const comparison = fr ? {
    without: [
      "Un système figé qui vieillit dès la livraison",
      "Des données que personne n'exploite vraiment",
      "Les mêmes pertes qui reviennent, mois après mois",
      "Des décisions prises au feeling, sans chiffres",
      "Personne à appeler quand quelque chose casse"
    ],
    with: [
      "Un système qui s'enrichit chaque mois",
      "Vos données analysées et transformées en décisions",
      "Les dérives repérées avant qu'elles coûtent",
      "Du conseil croissance basé sur vos indicateurs",
      "Un contact unique qui connaît votre activité"
    ]
  } : {
    without: [
      "A frozen system that ages from day one",
      "Data that no one really uses",
      "The same leaks coming back, month after month",
      "Decisions made on gut feeling, without numbers",
      "No one to call when something breaks"
    ],
    with: [
      "A system that grows every month",
      "Your data analyzed and turned into decisions",
      "Drifts caught before they cost you",
      "Growth advice based on your indicators",
      "A single contact who knows your business"
    ]
  };

  const forYou = fr ? [
    "Votre infrastructure est en place et vous voulez qu'elle continue d'évoluer",
    "Vous voulez piloter votre marge sur des chiffres à jour, chaque mois",
    "Vous n'avez ni le temps ni l'envie de gérer ça en interne",
    "Vous cherchez un partenaire sur la durée, pas un prestataire ponctuel"
  ] : [
    "Your infrastructure is in place and you want it to keep evolving",
    "You want to pilot your margin on up-to-date numbers, every month",
    "You have neither the time nor the desire to manage this in-house",
    "You're looking for a long-term partner, not a one-off provider"
  ];

  const T = {
    eyebrow: fr ? "Étape 3 — Partenariat mensuel" : "Step 3 — Monthly partnership",
    heroTitle1: fr ? "Votre système ne s'arrête pas" : "Your system doesn't stop",
    heroTitle2: fr ? "à la livraison." : "at delivery.",
    heroSub: fr ? "Chaque mois : analyse de vos données, une automatisation nouvelle, conseil croissance basé sur vos indicateurs, support prioritaire sous 24h. Votre infrastructure devient un avantage qui se renforce, pas un outil qui vieillit." : "Every month: analysis of your data, one new automation, growth advice based on your indicators, priority support within 24h. Your infrastructure becomes an advantage that compounds, not a tool that ages.",
    heroCta: fr ? "Réserver un Diagnostic — 500 €" : "Book a Diagnostic — €500",
    price: fr ? "1 500 € à 2 500 € / mois · Sans engagement long terme" : "€1,500 to €2,500 / month · No long-term commitment",
    monthlyTitle: fr ? "Ce que vous recevez chaque mois" : "What you get every month",
    monthlySub: fr ? "Un partenariat actif — pas de la maintenance passive." : "An active partnership — not passive maintenance.",
    compareTitle: fr ? "Sans le partenariat vs avec" : "Without the partnership vs with",
    without: fr ? "Sans partenariat" : "Without the partnership",
    withLabel: fr ? "Avec le partenariat mensuel" : "With the monthly partnership",
    forYouTitle: fr ? "C'est pour vous si…" : "It's for you if...",
    finalTitle: fr ? "Un partenariat commence par un diagnostic." : "A partnership starts with a diagnostic.",
    finalP1: fr ? "On regarde vos outils, vos chiffres et ce qu'un suivi mensuel changerait concrètement pour votre marge." : "We look at your tools, your numbers and what a monthly cadence would concretely change for your margin.",
    finalP2: fr ? "Pas de pitch générique. Une vraie conversation sur votre activité." : "No generic pitch. A real conversation about your business.",
  };

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto mb-28">
        <PillBadge className="mb-8">{T.eyebrow}</PillBadge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-ink-navy mb-8 leading-[1.05]">
          {T.heroTitle1}<br />
          <span className="text-accent-coral">{T.heroTitle2}</span>
        </h1>
        <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mb-10">{T.heroSub}</p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
          <GlowButton variant="primary" className="text-base px-7 py-4">
            {T.heroCta} <ArrowRight className="w-5 h-5" />
          </GlowButton>
        </a>
        <p className="mt-5 text-sm font-medium text-ink-gray">{T.price}</p>
      </section>

      {/* Monthly features */}
      <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-navy mb-4">{T.monthlyTitle}</h2>
            <p className="text-xl text-ink-gray">{T.monthlySub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border-cream">
            {monthlyFeatures.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-8 md:p-10 border-b border-r border-border-cream h-full">
                  <div className="w-12 h-12 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ink-navy mb-3">{feature.title}</h3>
                  <p className="text-ink-gray leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-navy mb-16">{T.compareTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="p-8 bg-surface-white border border-border-cream h-full">
                <h3 className="text-lg font-bold text-ink-navy mb-6 pb-4 border-b border-border-cream uppercase tracking-wider text-sm">{T.without}</h3>
                <ul className="space-y-5">
                  {comparison.without.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-gray">
                      <XCircle className="w-5 h-5 text-ink-gray/50 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="p-8 bg-surface-white border border-accent-coral h-full">
                <h3 className="text-lg font-bold text-ink-navy mb-6 pb-4 border-b border-accent-coral/30 uppercase tracking-wider text-sm">{T.withLabel}</h3>
                <ul className="space-y-5">
                  {comparison.with.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-navy font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent-coral shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* For you */}
      <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-navy mb-12">{T.forYouTitle}</h2>
          <div className="space-y-4">
            {forYou.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-5 bg-bg-cream border border-border-cream">
                  <CheckCircle2 className="w-6 h-6 text-accent-coral shrink-0 mt-0.5" />
                  <span className="text-ink-navy font-medium text-lg">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <AsteriskDecor size={20} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-navy mb-6">{T.finalTitle}</h2>
            <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
              {T.finalP1}<br /><br />
              <span className="text-ink-navy font-medium">{T.finalP2}</span>
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
