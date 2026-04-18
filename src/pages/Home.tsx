import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, ChevronDown, Clock, AlertTriangle, BarChart3 } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';

// Section 1 — Hero
const Hero = () => (
  <section className="pt-16 pb-20 px-6 max-w-5xl mx-auto min-h-[88vh] flex flex-col items-center justify-center text-center gap-10 relative z-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/8 rounded-full blur-[140px] -z-10 pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="flex flex-col items-center gap-8"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-brand-blue">
        Des AI agents qui opèrent<br />
        <span className="text-white">pour les cabinets réglementés.</span>
      </h1>

      <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
        Optialys déploie des agents IA dédiés aux fiduciaires, cabinets compliance et trust offices
        en Belgique, Luxembourg et France. KYC, reporting client, onboarding —
        en production sous 30 jours.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <a
          href="https://calendly.com/nolprayagsing/automation-strategy-audit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlowButton className="text-base px-8 py-4">
            Réserver un diagnostic de 30 min <ArrowRight className="w-5 h-5" />
          </GlowButton>
        </a>
        <a href="#methode" className="text-brand-blue font-medium hover:text-white transition-colors text-base">
          Comment ça marche →
        </a>
      </div>
    </motion.div>

    {/* Diagram */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.25 }}
      className="flex items-center gap-3 md:gap-6 mt-4 px-6 py-5 rounded-2xl bg-brand-card/60 border border-brand-blue/20 backdrop-blur-sm"
    >
      {[
        { label: 'Données client', sub: 'CRM · Email · ERP' },
        null,
        { label: 'Agent Optialys', sub: 'Traitement autonome', highlight: true },
        null,
        { label: 'Résultat métier', sub: 'KYC · Rapport · Alerte' },
      ].map((item, i) =>
        item === null ? (
          <div key={i} className="text-brand-blue text-xl font-bold select-none">→</div>
        ) : (
          <div
            key={i}
            className={`px-4 py-3 rounded-xl text-center ${
              item.highlight
                ? 'bg-brand-blue text-brand-navy font-bold'
                : 'bg-brand-navy border border-brand-blue/30 text-white'
            }`}
          >
            <div className="text-sm font-semibold whitespace-nowrap">{item.label}</div>
            <div className={`text-xs mt-0.5 ${item.highlight ? 'text-brand-navy/70' : 'text-brand-gray'}`}>
              {item.sub}
            </div>
          </div>
        )
      )}
    </motion.div>
  </section>
);

// Section 2 — Problème ciblé
const ProblemeSection = () => {
  const metrics = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: '15-25h / semaine',
      label: "Temps d'un analyste junior sur la saisie KYC dans un cabinet fiduciaire 5-20 personnes.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      value: '2-4 semaines',
      label: 'Délai moyen d'onboarding client BeNeLux. Benchmark cabinet avec agents IA : 3-5 jours.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      value: '40%+',
      label: 'Part des heures équipe sur l'ops admin non-facturable dans un cabinet conseil moyen.',
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Le vrai coût des opérations manuelles dans un cabinet réglementé.
          </h2>
          <p className="text-brand-gray text-center mb-14 max-w-2xl mx-auto">
            Ces chiffres ne viennent pas d'une étude de cabinet conseil. Ils viennent des cabinets avec lesquels on travaille.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-brand-card/60 border border-brand-blue/15 backdrop-blur-sm h-full flex flex-col gap-5">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  {m.icon}
                </div>
                <div className="text-3xl font-extrabold text-brand-blue">{m.value}</div>
                <p className="text-brand-gray text-sm leading-relaxed">{m.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 3 — Offre
const OffreSection = () => (
  <section className="py-24 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Deux façons de travailler avec Optialys.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* Card 1 — Core */}
        <FadeIn direction="left">
          <div className="h-full p-8 rounded-2xl bg-brand-card/60 border border-brand-blue/15 backdrop-blur-sm flex flex-col gap-6">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider self-start">
              Déploiement 30 jours
            </div>
            <h3 className="text-2xl font-bold text-white">Un projet. Un système livré.</h3>
            <p className="text-brand-gray leading-relaxed text-sm">
              Diagnostic opérationnel sur site, mapping des workflows critiques, déploiement d'agents IA
              custom en 30 jours, formation équipe, documentation complète. Garantie de livraison : si les
              deliverables ne sont pas en production à J30, je continue sans facturation additionnelle.
            </p>
            <ul className="space-y-3 flex-1">
              {[
                'Diagnostic opérationnel complet (2h sur site ou visio)',
                '1 à 3 agents IA en production',
                'Intégrations CRM, ERP, email, Slack',
                'Formation équipe (vidéo + session live)',
                'Monitoring 24/7 en place',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/nolprayagsing/automation-strategy-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              Discuter d'un projet <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Card 2 — Partner (featured) */}
        <FadeIn direction="right">
          <div className="h-full p-8 rounded-2xl bg-brand-card/80 border-2 border-brand-blue backdrop-blur-sm flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="inline-block px-3 py-1 rounded-full bg-brand-blue text-brand-navy text-xs font-bold uppercase tracking-wider self-start relative z-10">
              Engagement mensuel
            </div>
            <h3 className="text-2xl font-bold text-white relative z-10">Votre équipe IA embarquée.</h3>
            <p className="text-brand-gray leading-relaxed text-sm relative z-10">
              Partenariat mensuel où j'opère comme consultant IA intégré à votre cabinet. Je diagnostique,
              construis et optimise vos agents en continu. Sans engagement long — mensuel, préavis 30 jours.
            </p>
            <ul className="space-y-3 flex-1 relative z-10">
              {[
                "Jusqu'à 3 nouveaux agents / mois",
                'Maintenance & monitoring continu',
                'Canal Slack dédié (réponse < 24h)',
                'Strategy call mensuel',
                'Agents qui évoluent avec vos données',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/nolprayagsing/automation-strategy-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              <GlowButton className="w-full justify-center">
                Voir si on matche <ArrowRight className="w-4 h-4" />
              </GlowButton>
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  </section>
);

// Section 4 — Preuves
const PreuvesSection = () => {
  const clients = [
    {
      name: 'Koosmik',
      sector: 'FinTech · Paris / Bruxelles',
      context: 'Cabinet fintech B2B actif sur les marchés publics européens.',
      solution: 'RFP Radar : monitoring automatisé des tenders publics, qualification et alertes en temps réel.',
      metric: '15+ heures/semaine économisées sur la veille commerciale.',
      stack: 'n8n · Claude API · Pipedrive',
    },
    {
      name: 'AlternativeAML · GITS · OmniTrust',
      sector: 'Compliance · BeNeLux',
      context: 'Trois cabinets compliance avec besoin de présence LinkedIn régulière sans y consacrer de ressources.',
      solution: 'Moteur de contenu LinkedIn IA : 5 posts/semaine/entreprise, validation humaine uniquement.',
      metric: '0 heure d'écriture — validation en 10 min/semaine par cabinet.',
      stack: 'n8n · Claude API · Airtable · LinkedIn',
    },
    {
      name: 'Groupe Louyet',
      sector: 'Distribution automobile premium · Belgique',
      context: 'Groupe automobile premium avec processus opérationnels multi-sites.',
      solution: 'Automatisation des flux de données inter-entités et reporting consolidé.',
      metric: 'Résultat opérationnel à confirmer avec Nolan avant publication.',
      stack: 'n8n · Google Workspace · CRM',
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Déjà déployé. Déjà en production.
          </h2>
          <p className="text-brand-gray text-center mb-14 max-w-xl mx-auto">
            Pas de POC. Pas de roadmap à 18 mois. Des agents qui tournent aujourd'hui.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-7 rounded-2xl bg-brand-card/60 border border-brand-blue/15 backdrop-blur-sm h-full flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{client.name}</h3>
                  <p className="text-xs text-brand-gray mt-0.5">{client.sector}</p>
                </div>
                <p className="text-sm text-brand-gray leading-relaxed">{client.context}</p>
                <p className="text-sm text-white/80 leading-relaxed">{client.solution}</p>
                <div className="mt-auto pt-4 border-t border-brand-blue/10">
                  <span className="text-brand-blue text-sm font-semibold">{client.metric}</span>
                </div>
                <p className="text-xs text-brand-gray/60 font-mono">{client.stack}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5 — Méthode
const MethodeSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnostic',
      sub: 'Semaine 1',
      desc: 'Audit sur site ou visio. Cartographie de vos workflows, outils, bottlenecks. Plan chiffré en heures et en deliverables — pas en "phases".',
    },
    {
      num: '02',
      title: 'Build',
      sub: 'Semaines 2-4',
      desc: 'Construction des agents IA dans votre stack existant (CRM, Google Workspace, Slack, outils métier). Testé sur données réelles. Aucun code côté client.',
    },
    {
      num: '03',
      title: 'Production & optimisation',
      sub: 'J30 et après',
      desc: 'Go-live, formation équipe, monitoring continu. En Partner : nouveaux agents et optimisation chaque mois.',
    },
  ];

  return (
    <section id="methode" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Un processus en 3 étapes. Pas de mystère.
          </h2>
          <p className="text-brand-gray text-center mb-16 max-w-xl mx-auto">
            Déployé, pas promis.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16.5%] right-[16.5%] h-px bg-brand-blue/30 z-0" />

          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative flex flex-col items-center text-center px-6 pb-8">
                <div className="relative z-10 w-24 h-24 rounded-full bg-brand-card border-2 border-brand-blue flex flex-col items-center justify-center mb-6">
                  <span className="text-brand-blue text-xs font-bold tracking-wider">{step.num}</span>
                  <span className="text-white font-bold text-sm mt-0.5">{step.title}</span>
                </div>
                <p className="text-brand-blue text-xs font-semibold mb-3 tracking-wide uppercase">{step.sub}</p>
                <p className="text-brand-gray text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 6 — FAQ
const faqData = [
  {
    q: "Je n'ai pas d'équipe tech. C'est un problème ?",
    a: "Non. Vous n'avez jamais à toucher au code ou à n8n. Votre seule interaction : Slack ou email pour les demandes, Calendly pour les checkpoints.",
  },
  {
    q: 'Mes données clients sont sensibles (secret professionnel, RGPD). Où vont-elles ?',
    a: "Aucune donnée ne sort de votre stack (Google Workspace ou Microsoft 365, votre CRM existant). Les agents tournent en cloud EU ou self-host selon vos besoins. Documentation RGPD fournie pour chaque projet.",
  },
  {
    q: 'Combien ça coûte ?',
    a: "Le prix dépend de la complexité, chiffré après diagnostic. Optialys Core démarre typiquement entre 1 500 et 3 500€ pour un projet 30 jours. Optialys Partner démarre à 1 500€/mois. Le diagnostic est gratuit et sans engagement.",
  },
  {
    q: "Pourquoi Optialys et pas une agence IA généraliste ?",
    a: "Parce que je travaille avec des cabinets compliance (OmniTrust, AlternativeAML, GITS), une fintech (Koosmik) et un distributeur premium (Groupe Louyet). La profondeur métier bat le volume d'agences généralistes en 2026.",
  },
  {
    q: 'Mon équipe utilise déjà ChatGPT. En quoi c'est différent ?',
    a: "ChatGPT = outil individuel, contexte perdu à chaque session, aucune intégration à vos outils. Un agent Optialys = processus métier autonome, connecté à votre CRM, exécutant une tâche précise 24/7, traçable et auditable.",
  },
  {
    q: 'Vous avez 18 ans. Sérieusement ?',
    a: "Oui. Mes clients — Koosmik, OmniTrust, Groupe Louyet — sont des boîtes sérieuses. Le travail se juge sur les agents en production, pas sur l'âge.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
            Questions fréquentes.
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl bg-brand-card/60 border border-brand-blue/10 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left text-white font-medium hover:text-brand-blue transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-brand-blue transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-brand-gray leading-relaxed text-sm">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7 — CTA final + Calendly
const CTAFinalSection = () => (
  <section className="py-24 px-6 relative z-10">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            30 minutes pour voir ce qui est automatisable dans votre cabinet.
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Diagnostic gratuit, sans engagement. Si on ne matche pas, vous repartez avec
            une cartographie opérationnelle utilisable en interne.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <CalendlyEmbed />
      </FadeIn>
    </div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <ProblemeSection />
    <OffreSection />
    <PreuvesSection />
    <MethodeSection />
    <FAQSection />
    <CTAFinalSection />
  </>
);
