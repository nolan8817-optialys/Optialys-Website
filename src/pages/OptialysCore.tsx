import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Boxes, Gauge, CheckCircle2, Shield, XCircle } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, AsteriskDecor } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

export const OptialysCore = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  useSEO({
    title: fr
      ? 'Infrastructure sur mesure — Connecter vos outils, piloter votre marge | Optialys'
      : 'Custom infrastructure — Connect your tools, pilot your margin | Optialys',
    description: fr
      ? 'En 4 à 6 semaines, Optialys connecte vos outils existants dans un système central : tableau de bord temps réel, alertes budget automatiques, rapports hebdomadaires.'
      : 'In 4 to 6 weeks, Optialys connects your existing tools into a central system: real-time dashboard, automatic budget alerts, weekly reports.',
    canonical: 'https://optialys.com/optialys-core',
  });

  const problems = fr ? [
    {
      title: "On découvre les dépassements trop tard.",
      desc: "Un chantier dérape, mais personne ne le voit avant la facture finale. Les heures, les achats, les imprévus s'accumulent sans alerte — et la marge fond sans qu'on puisse réagir."
    },
    {
      title: "Les données vivent dans dix endroits différents.",
      desc: "Le CRM ici, le logiciel de chantier là, la facturation ailleurs, et le reste sur Excel. Personne n'a une vue d'ensemble. Compiler un état de situation prend une demi-journée."
    },
    {
      title: "Les techniciens encodent sur papier.",
      desc: "Les heures et les relevés terrain sont notés à la main, puis ressaisis le lendemain. Vous pilotez votre activité sur des informations qui datent déjà d'un jour."
    }
  ] : [
    {
      title: "Overruns are discovered too late.",
      desc: "A project slips, but no one sees it before the final invoice. Hours, purchases and surprises pile up without warning — and the margin melts away before you can react."
    },
    {
      title: "Data lives in ten different places.",
      desc: "CRM here, project software there, invoicing elsewhere, the rest on Excel. No one has the full picture. Compiling a status report takes half a day."
    },
    {
      title: "Technicians record on paper.",
      desc: "Hours and field readings are written by hand, then re-keyed the next day. You run your business on information that is already a day old."
    }
  ];

  const steps = fr ? [
    {
      icon: <Search className="w-7 h-7" />,
      badge: "Semaine 1 — Cartographie",
      title: "On part du Diagnostic Rentabilité.",
      desc: "On repart du diagnostic : vos outils, vos flux, vos pertes chiffrées. On valide ensemble ce qui doit remonter dans le système central et dans quel ordre.",
      includes: [
        "Cartographie de vos outils et de vos flux",
        "Pertes financières identifiées et priorisées",
        "Périmètre validé — devis fixe, pas de surprise"
      ]
    },
    {
      icon: <Boxes className="w-7 h-7" />,
      badge: "Semaines 2 à 5 — Connexion",
      title: "On connecte vos outils existants.",
      desc: "On ne remplace rien. On branche votre CRM, votre logiciel de chantier, votre facturation et vos tableurs sur un système central. L'information remonte automatiquement, en temps réel.",
      includes: [
        "Vos outils existants connectés — sans remplacement",
        "Saisie terrain centralisée, fini le papier",
        "Alertes budget automatiques par chantier",
        "Rapports hebdomadaires générés tout seuls"
      ]
    },
    {
      icon: <Gauge className="w-7 h-7" />,
      badge: "Semaine 6 — Pilotage",
      title: "Vous pilotez depuis votre téléphone.",
      desc: "Un tableau de bord temps réel : marge par chantier, heures consommées, dépassements signalés avant qu'il soit trop tard. On forme l'équipe, on documente, vous gardez le contrôle.",
      includes: [
        "Tableau de bord temps réel sur mobile",
        "Marge et budget par chantier, en direct",
        "Équipe formée, documentation complète"
      ]
    }
  ] : [
    {
      icon: <Search className="w-7 h-7" />,
      badge: "Week 1 — Mapping",
      title: "We start from the Profitability Diagnostic.",
      desc: "We build on the diagnostic: your tools, your flows, your quantified leaks. Together we confirm what needs to flow into the central system, and in what order.",
      includes: [
        "Mapping of your tools and flows",
        "Financial leaks identified and prioritized",
        "Scope confirmed — fixed quote, no surprises"
      ]
    },
    {
      icon: <Boxes className="w-7 h-7" />,
      badge: "Weeks 2 to 5 — Connection",
      title: "We connect your existing tools.",
      desc: "We replace nothing. We plug your CRM, project software, invoicing and spreadsheets into one central system. Information flows up automatically, in real time.",
      includes: [
        "Your existing tools connected — no replacement",
        "Field entry centralized, paper gone",
        "Automatic budget alerts per project",
        "Weekly reports generated on their own"
      ]
    },
    {
      icon: <Gauge className="w-7 h-7" />,
      badge: "Week 6 — Piloting",
      title: "You pilot from your phone.",
      desc: "A real-time dashboard: margin per project, hours consumed, overruns flagged before it's too late. We train the team, document everything, you keep control.",
      includes: [
        "Real-time dashboard on mobile",
        "Margin and budget per project, live",
        "Team trained, full documentation"
      ]
    }
  ];

  const examples = fr ? [
    { sector: "Rénovation de yachts", situation: "Les heures passées sur chaque refit sont notées sur des feuilles, ressaisies en fin de semaine.", solution: "Pointage terrain centralisé : chaque heure remonte en direct, rattachée au bon chantier et au bon poste de budget.", result: "Marge réelle visible en cours de chantier, pas à la livraison." },
    { sector: "Voitures de collection", situation: "Achats de pièces dispersés entre emails, factures et carnets. Impossible de suivre le budget pièces.", solution: "Tous les achats remontent dans le système, rattachés au véhicule. Alerte automatique dès qu'un budget approche du seuil.", result: "Plus aucun dépassement découvert à la facture finale." },
    { sector: "Conciergerie de luxe", situation: "Les demandes clients arrivent par dix canaux différents et se perdent.", solution: "Toutes les demandes centralisées dans un système unique, assignées automatiquement et suivies jusqu'à la clôture.", result: "Zéro demande oubliée, vision temps réel de la charge." },
    { sector: "Atelier sur mesure", situation: "Le dirigeant n'a aucune visibilité sur l'avancement réel des commandes.", solution: "Tableau de bord temps réel : avancement, marge et échéances par commande, consultable depuis le téléphone.", result: "Décisions prises sur des données du jour, pas d'hier." }
  ] : [
    { sector: "Yacht refit", situation: "Hours spent on each refit are written on sheets, re-keyed at the end of the week.", solution: "Centralized field tracking: every hour flows up live, tied to the right project and budget line.", result: "Real margin visible during the project, not at delivery." },
    { sector: "Classic cars", situation: "Parts purchases scattered across emails, invoices and notebooks. Impossible to track the parts budget.", solution: "All purchases flow into the system, tied to the vehicle. Automatic alert as soon as a budget nears its threshold.", result: "No more overruns discovered on the final invoice." },
    { sector: "Luxury concierge", situation: "Client requests come in through ten different channels and get lost.", solution: "All requests centralized in one system, automatically assigned and tracked to closure.", result: "Zero forgotten request, real-time view of the workload." },
    { sector: "Bespoke workshop", situation: "The owner has no visibility on the real progress of orders.", solution: "Real-time dashboard: progress, margin and deadlines per order, viewable from the phone.", result: "Decisions made on today's data, not yesterday's." }
  ];

  const T = {
    eyebrow: fr ? "Étape 2 — Infrastructure sur mesure" : "Step 2 — Custom infrastructure",
    heroTitle1: fr ? "Vos outils, connectés." : "Your tools, connected.",
    heroTitle2: fr ? "Votre marge, en temps réel." : "Your margin, in real time.",
    heroSub: fr ? "En 4 à 6 semaines, on connecte vos outils existants dans un système central. Tableau de bord temps réel, alertes budget automatiques, rapports hebdomadaires. On ne remplace rien — on fait enfin parler ce que vous avez déjà." : "In 4 to 6 weeks, we connect your existing tools into one central system. Real-time dashboard, automatic budget alerts, weekly reports. We replace nothing — we finally make what you already have talk to each other.",
    ctaDiag: fr ? "Réserver un Diagnostic" : "Book a Diagnostic",
    problemsTitle: fr ? "Ce que vivent les ateliers aujourd'hui" : "What workshops live through today",
    stepsTitle: fr ? "Comment on s'y prend" : "How we do it",
    stepsSub: fr ? "Trois temps. Quatre à six semaines. Zéro gestion technique de votre côté." : "Three phases. Four to six weeks. Zero technical management on your side.",
    whatYouGet: fr ? "Ce que vous obtenez :" : "What you get:",
    guaranteeTitle: fr ? "On s'adapte à vos outils, pas l'inverse" : "We adapt to your tools, not the other way around",
    guaranteeP1: fr ? "Aucun outil à remplacer, aucune migration douloureuse. On branche ce que vous utilisez déjà sur un système central qui fait circuler l'information." : "No tool to replace, no painful migration. We connect what you already use to a central system that makes information flow.",
    guaranteeP2: fr ? "Le périmètre et le prix sont fixés dès le diagnostic. Pas de coûts cachés, pas de dérive." : "Scope and price are fixed from the diagnostic. No hidden costs, no drift.",
    g1: fr ? "Vos outils existants — sans remplacement" : "Your existing tools — no replacement",
    g2: fr ? "Devis fixe dès le diagnostic" : "Fixed quote from the diagnostic",
    g3: fr ? "Documentation et formation incluses" : "Documentation and training included",
    examplesTitle: fr ? "Ce que ça donne concrètement" : "What it looks like in practice",
    examplesSub: fr ? "Quelques exemples par métier. Votre périmètre est défini pendant le diagnostic." : "A few examples by trade. Your scope is defined during the diagnostic.",
    situation: fr ? "Situation" : "Situation",
    solution: fr ? "Ce qu'on connecte" : "What we connect",
    typicalResult: fr ? "Résultat" : "Result",
    afterTitle: fr ? "Et une fois le système en place ?" : "And once the system is in place?",
    afterSub: fr ? "L'infrastructure vous donne la visibilité. Le Partenariat mensuel, c'est ce qui la fait évoluer : analyse de vos données, une automatisation nouvelle par mois, conseil croissance." : "The infrastructure gives you visibility. The Monthly Partnership is what makes it grow: analysis of your data, one new automation per month, growth advice.",
    discoverPartner: fr ? "Découvrir le Partenariat mensuel" : "Discover the Monthly Partnership",
    finalTitle: fr ? "Commencez par le diagnostic." : "Start with the diagnostic.",
    finalSub: fr ? "2 heures pour identifier où part votre argent. Vous repartez avec un plan d'action et un devis fixe — déduit du setup si vous démarrez dans les 30 jours." : "2 hours to pinpoint where your money goes. You leave with an action plan and a fixed quote — deducted from the setup if you start within 30 days.",
  };

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto mb-28">
        <PillBadge className="mb-8">{T.eyebrow}</PillBadge>
        <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-ink-navy mb-6 leading-[1.1]">
          {T.heroTitle1}<br />
          <span className="text-accent-coral">{T.heroTitle2}</span>
        </h1>
        <p className="text-base text-ink-gray leading-relaxed max-w-2xl mb-8">
          {T.heroSub}
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="text-base px-7 py-4">
              {T.ctaDiag} <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-ink-navy mb-16 max-w-2xl">
            {T.problemsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-cream">
            {problems.map((prob, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-8 md:p-10 border-b border-r border-border-cream h-full">
                  <div className="w-11 h-11 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-6">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-navy mb-3">{prob.title}</h3>
                  <p className="text-ink-gray leading-relaxed">{prob.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-ink-navy mb-4">{T.stepsTitle}</h2>
            <p className="text-base text-ink-gray">{T.stepsSub}</p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-2 border border-border-cream bg-surface-white">
                  <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border-cream">
                    <div className="w-12 h-12 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-5">
                      {step.icon}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-accent-coral mb-3">{step.badge}</div>
                    <h3 className="text-2xl font-bold text-ink-navy mb-4">{step.title}</h3>
                    <p className="text-ink-gray leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="p-8 md:p-10 bg-bg-cream">
                    <h4 className="text-ink-navy font-bold mb-5 text-sm uppercase tracking-wider">{T.whatYouGet}</h4>
                    <ul className="space-y-4">
                      {step.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-ink-gray">
                          <CheckCircle2 className="w-5 h-5 text-accent-coral shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach guarantee */}
      <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="p-10 md:p-14 border border-accent-coral bg-bg-cream">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-9 h-9 text-accent-coral" />
                <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-ink-navy">{T.guaranteeTitle}</h2>
              </div>
              <div className="space-y-5 text-lg text-ink-navy leading-relaxed mb-10">
                <p className="font-medium">{T.guaranteeP1}</p>
                <p className="text-ink-gray">{T.guaranteeP2}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border-cream">
                {[T.g1, T.g2, T.g3].map((g, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-bold text-ink-navy">
                    <CheckCircle2 className="w-5 h-5 text-accent-coral shrink-0" /> {g}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Examples */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-ink-navy mb-4">{T.examplesTitle}</h2>
            <p className="text-base text-ink-gray">{T.examplesSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((ex, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-8 bg-surface-white border border-border-cream h-full flex flex-col">
                  <div className="inline-block px-3 py-1 rounded-sm bg-bg-cream border border-border-cream text-xs font-bold text-accent-coral mb-6 self-start uppercase tracking-wider">
                    {ex.sector}
                  </div>
                  <div className="space-y-5 flex-1">
                    <div>
                      <div className="text-xs font-bold text-ink-gray uppercase mb-2 tracking-wider">{T.situation}</div>
                      <p className="text-ink-navy font-medium">{ex.situation}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-ink-gray uppercase mb-2 tracking-wider">{T.solution}</div>
                      <p className="text-ink-gray text-sm leading-relaxed">{ex.solution}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-5 border-t border-border-cream">
                    <div className="text-xs font-bold text-ink-gray uppercase mb-2 tracking-wider">{T.typicalResult}</div>
                    <p className="text-accent-green font-bold text-sm">{ex.result}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transition to Partner */}
      <section className="py-24 px-6 bg-ink-navy">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <AsteriskDecor size={20} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">{T.afterTitle}</h2>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">{T.afterSub}</p>
            <Link to="/optialys-partner">
              <GlowButton variant="primary" className="text-base px-7 py-4">
                {T.discoverPartner} <ArrowRight className="w-5 h-5" />
              </GlowButton>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-navy mb-6">{T.finalTitle}</h2>
            <p className="text-base text-ink-gray leading-relaxed max-w-2xl mx-auto">{T.finalSub}</p>
          </div>
          <FadeIn>
            <CalendlyEmbed />
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
