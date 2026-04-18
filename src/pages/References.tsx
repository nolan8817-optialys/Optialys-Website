import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, TrendingDown } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';

// SEO: "Optialys Références — Case studies AI agents compliance BeNeLux"

const caseStudies = [
  {
    client: 'Koosmik',
    sector: 'FinTech B2B',
    location: 'Paris / Bruxelles',
    tag: 'Veille commerciale automatisée',
    context:
      "Koosmik est une fintech B2B active sur plusieurs marchés européens. L'équipe commerciale passait 15 à 25 heures par semaine à surveiller manuellement les plateformes de marchés publics pour identifier les appels d'offres pertinents — une tâche répétitive, à faible valeur ajoutée, mais critique pour le pipeline.",
    problem:
      "La veille manuelle des tenders publics sur 6 plateformes différentes nécessitait une ressource dédiée à temps partiel. Les opportunités étaient souvent identifiées trop tard pour préparer une réponse qualitative dans les délais.",
    solution:
      "Déploiement du RFP Radar : un agent IA qui surveille en continu les plateformes de marchés publics (TED, e-procurement nationaux), qualifie les opportunités selon les critères Koosmik, et envoie des alertes structurées dans Pipedrive avec résumé, deadline et scoring de pertinence.",
    metric: '15+ heures / semaine économisées sur la veille commerciale.',
    stack: ['n8n', 'Claude API', 'Pipedrive', 'TED / e-procurement EU'],
    deliveryTime: '28 jours',
  },
  {
    client: 'AlternativeAML · GITS · OmniTrust',
    sector: 'Compliance & AML',
    location: 'Belgique / Luxembourg',
    tag: 'Moteur de contenu LinkedIn IA',
    context:
      "Trois cabinets compliance distincts — AlternativeAML, Global IT Services PSF et OmniTrust — avaient le même problème : une présence LinkedIn inexistante ou irrégulière, faute de temps. Le contenu de conformité réglementaire est complexe à rédiger et sensible sur le fond.",
    problem:
      "Chaque cabinet avait besoin de 5 posts par semaine minimum pour maintenir une visibilité sectorielle crédible. Aucun n'avait la bande passante interne pour rédiger, valider et publier ce volume — et externalisés à une agence, le contenu perdait en authenticité et en précision réglementaire.",
    solution:
      "Déploiement d'un moteur de contenu LinkedIn automatisé par cabinet : l'agent génère 5 posts par semaine, adaptés au ton et aux thématiques réglementaires propres à chaque entité, stockés dans Airtable pour une validation humaine de 10 minutes. Publication automatique post-validation.",
    metric: '5 posts/semaine/entreprise — validation humaine uniquement, 10 min/semaine par cabinet.',
    stack: ['n8n', 'Claude API', 'Airtable', 'LinkedIn API'],
    deliveryTime: '21 jours (pour les 3 entités)',
  },
  {
    client: 'Groupe Louyet',
    sector: 'Distribution automobile premium',
    location: 'Belgique',
    tag: 'Opérations multi-sites',
    context:
      "Groupe Louyet est un distributeur automobile premium multi-sites en Belgique. La consolidation des données opérationnelles entre entités et la production de reportings internes mobilisaient des ressources significatives chaque semaine.",
    problem:
      "Le reporting consolidé inter-entités nécessitait une intervention manuelle régulière pour agréger des données provenant de systèmes hétérogènes. La fiabilité et la ponctualité des reportings dépendaient d'une personne.",
    solution:
      "Déploiement d'agents IA pour l'agrégation automatique des données inter-entités et la production de reportings consolidés sur déclenchement ou à intervalles définis.",
    metric: 'Résultat opérationnel spécifique à confirmer avec Nolan avant publication.',
    stack: ['n8n', 'Google Workspace', 'CRM interne'],
    deliveryTime: 'En cours',
  },
];

const CaseStudyCard = ({ cs, index }: { cs: typeof caseStudies[0]; index: number }) => (
  <FadeIn delay={index * 0.1}>
    <article className="p-8 rounded-2xl bg-brand-card/60 border border-brand-blue/15 backdrop-blur-sm space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{cs.client}</h2>
          <p className="text-brand-gray text-sm mt-1">{cs.sector} · {cs.location}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
          {cs.tag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <h3 className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Contexte</h3>
          <p className="text-white/70 text-sm leading-relaxed">{cs.context}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Problème</h3>
          <p className="text-white/70 text-sm leading-relaxed">{cs.problem}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Solution déployée</h3>
          <p className="text-white/70 text-sm leading-relaxed">{cs.solution}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-blue/10">
        <div className="flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-brand-blue" />
          <span className="text-brand-blue font-semibold text-sm">{cs.metric}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {cs.stack.map((s) => (
            <span key={s} className="px-2 py-1 rounded bg-brand-navy border border-brand-blue/10 text-brand-gray text-xs font-mono">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-brand-gray">
          <Clock className="w-3.5 h-3.5" />
          {cs.deliveryTime}
        </div>
      </div>
    </article>
  </FadeIn>
);

// ROI Calculator
const ROICalculator = () => {
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(45);

  const weeklyWaste = hours * rate;
  const monthlyWaste = weeklyWaste * 4;
  const yearlyWaste = monthlyWaste * 12;
  const agentCost = 1500;
  const monthlyGain = monthlyWaste - agentCost;

  return (
    <div className="p-8 rounded-2xl bg-brand-card/80 border border-brand-blue/30 space-y-8">
      <h3 className="text-2xl font-bold text-white">Calculez le coût de vos opérations manuelles</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="text-brand-gray text-sm font-medium block mb-3">
              Heures manuelles par semaine sur des tâches automatisables
              <span className="text-brand-blue ml-2">{hours}h</span>
            </label>
            <input
              type="range"
              min={1}
              max={60}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-brand-blue"
            />
          </div>
          <div>
            <label className="text-brand-gray text-sm font-medium block mb-3">
              Coût horaire moyen (collaborateur)
              <span className="text-brand-blue ml-2">{rate}€/h</span>
            </label>
            <input
              type="range"
              min={20}
              max={150}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-brand-blue"
            />
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Coût hebdomadaire perdu', value: `${weeklyWaste.toLocaleString('fr-FR')}€`, highlight: false },
            { label: 'Coût mensuel perdu', value: `${monthlyWaste.toLocaleString('fr-FR')}€`, highlight: false },
            { label: 'Coût annuel perdu', value: `${yearlyWaste.toLocaleString('fr-FR')}€`, highlight: false },
            { label: 'Gain net / mois avec Optialys Partner', value: `+${monthlyGain > 0 ? monthlyGain.toLocaleString('fr-FR') : 0}€`, highlight: true },
          ].map((row) => (
            <div
              key={row.label}
              className={`flex justify-between items-center p-3 rounded-lg ${
                row.highlight ? 'bg-brand-blue/10 border border-brand-blue/30' : 'bg-brand-navy/50'
              }`}
            >
              <span className="text-sm text-brand-gray">{row.label}</span>
              <span className={`font-bold ${row.highlight ? 'text-brand-blue text-lg' : 'text-white'}`}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-brand-gray">
        Estimation indicative basée sur vos inputs. Le diagnostic gratuit permet de chiffrer précisément
        les gains sur vos workflows réels.
      </p>

      <a
        href="https://calendly.com/nolprayagsing/automation-strategy-audit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlowButton>
          Valider ces chiffres par un diagnostic <ArrowRight className="w-4 h-4" />
        </GlowButton>
      </a>
    </div>
  );
};

export const References = () => (
  <>
    <section className="pt-16 pb-12 px-6 max-w-6xl mx-auto relative z-10">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 leading-tight">
            Déjà déployé.<br />
            <span className="text-white">Déjà en production.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Trois projets. Trois secteurs. Des métriques opérationnelles vérifiables —
            pas des pourcentages de ROI inventés.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-8 mb-24">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={i} cs={cs} index={i} />
        ))}
      </div>

      <FadeIn>
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Estimez ce que ça coûte de ne pas automatiser
          </h2>
          <p className="text-brand-gray text-center mb-10">
            Outil de calcul indicatif — sans compte, sans inscription.
          </p>
          <ROICalculator />
        </div>
      </FadeIn>
    </section>
  </>
);
