import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, Check, X } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';

// SEO: "Optialys Approche — AI agents vs automatisation simple | BeNeLux"

const ApprochePage = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      q: 'Votre cabinet compte combien de personnes ?',
      options: ['Moins de 5', '5 à 20', '20 à 50', 'Plus de 50'],
    },
    {
      q: 'Quel est votre principal secteur d'activité ?',
      options: ['Fiduciaire / Comptabilité', 'Compliance / AML / KYC', 'Trust office / Family office', 'Autre secteur réglementé'],
    },
    {
      q: 'Quel processus vous prend le plus de temps manuel chaque semaine ?',
      options: ['Saisie et vérification KYC', 'Reporting client / production documents', 'Onboarding nouveaux clients', 'Veille réglementaire / contenu'],
    },
    {
      q: 'Avez-vous déjà tenté d'automatiser un processus ?',
      options: ['Non, jamais', 'Oui, avec des outils comme Zapier / Make', 'Oui, avec une agence — sans résultat durable', 'Oui, partiellement en interne'],
    },
    {
      q: 'Quel est votre horizon pour voir des résultats ?',
      options: ['Immédiat (< 4 semaines)', '1 à 3 mois', '3 à 6 mois', 'Pas de pression'],
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (quizStep + 1 < quizQuestions.length) {
      setQuizStep(quizStep + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 px-6 max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 leading-tight">
              Ce qu'on fait.<br />
              <span className="text-white">Et ce qu'on ne fait pas.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Un agent IA n'est pas un chatbot, pas un Zapier sophistiqué, pas une automatisation RPA.
              Voici ce que ça veut dire concrètement — et pourquoi la spécialisation sectorielle change tout.
            </p>
          </div>
        </FadeIn>

        {/* Distinction Agent IA vs Automatisation */}
        <FadeIn delay={0.1}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-10 text-center">
              AI agents ≠ automatisation simple
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-brand-card/60 border border-white/10">
                <h3 className="text-white font-bold mb-5 text-lg">Automatisation classique</h3>
                <ul className="space-y-3">
                  {[
                    'Exécute des règles fixes définies à l'avance',
                    'Bloque dès qu'une exception survient',
                    'Nécessite un déclencheur manuel ou un cron',
                    'Ne comprend pas le contexte métier',
                    'Maintenance dès que le format change',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-gray">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-brand-card/80 border-2 border-brand-blue/40">
                <h3 className="text-brand-blue font-bold mb-5 text-lg">Agent IA Optialys</h3>
                <ul className="space-y-3">
                  {[
                    'Raisonne sur des données non-structurées',
                    'Gère les exceptions avec une logique contextuelle',
                    'Surveille et agit de façon autonome, 24/7',
                    'Comprend le jargon métier de votre secteur',
                    'S'améliore avec vos données réelles',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Spécialisation sectorielle */}
        <FadeIn delay={0.15}>
          <div className="mb-20 p-8 rounded-2xl bg-brand-card/60 border border-brand-blue/15">
            <h2 className="text-2xl font-bold text-white mb-6">
              Pourquoi la spécialisation verticale bat l'agence généraliste en 2026
            </h2>
            <div className="space-y-5 text-brand-gray leading-relaxed">
              <p>
                Une agence IA généraliste peut déployer un chatbot ou connecter deux APIs. Ce qu'elle
                ne peut pas faire : comprendre que la directive AMLD6 interdit de stocker tel type de
                donnée dans un CRM cloud, ou qu'un trust office luxembourgeois a des obligations de
                reporting trimestriel avec des formats précis.
              </p>
              <p>
                La profondeur métier, c'est ce qui détermine si un agent IA est utilisable en production
                ou juste impressionnant en démo. Optialys travaille exclusivement avec des cabinets
                réglementés — fiduciaires, compliance, trust offices — pour une raison : c'est là que
                la connaissance sectorielle fait la différence entre un agent qui tourne en prod et un
                projet qui s'arrête après la démonstration.
              </p>
              <p>
                Les clients actuels (OmniTrust, AlternativeAML, GITS, Koosmik, Groupe Louyet) ne paient
                pas pour une technologie. Ils paient pour un résultat opérationnel mesurable, délivré
                par quelqu'un qui comprend leur métier.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Stack technique */}
        <FadeIn delay={0.2}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Le stack technique — sans jargon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  tool: 'n8n',
                  role: 'Orchestration des workflows',
                  detail: 'Plateforme open-source qui connecte vos outils existants (CRM, email, Slack, ERP). Déployée en cloud EU ou self-hosted chez vous.',
                },
                {
                  tool: 'Claude API',
                  role: 'Intelligence des agents',
                  detail: 'Le modèle de langage d'Anthropic qui permet à l'agent de comprendre des documents, rédiger des rapports et prendre des décisions contextuelles.',
                },
                {
                  tool: 'Vos outils existants',
                  role: 'Intégrations natives',
                  detail: 'Google Workspace, Microsoft 365, Pipedrive, HubSpot, Airtable, Slack, LinkedIn. Aucune migration de données requise.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-brand-card/60 border border-brand-blue/10">
                  <div className="text-brand-blue font-bold text-lg mb-1">{item.tool}</div>
                  <div className="text-white text-sm font-medium mb-3">{item.role}</div>
                  <p className="text-brand-gray text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Ce qu'on ne fait pas */}
        <FadeIn delay={0.25}>
          <div className="mb-20 p-8 rounded-2xl bg-brand-card/40 border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">Ce qu'on ne fait pas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Développement d'applications web ou mobiles sur mesure',
                'Projets hors cabinets réglementés (e-commerce, SaaS généraliste...)',
                'Promesses de ROI chiffré sans diagnostic préalable',
                'Retouches d'un système construit par une autre agence sans évaluation',
                'Projets nécessitant une équipe tech côté client',
                'Automatisations RPA (robots de clics d'écran)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-brand-gray p-3 rounded-lg bg-brand-card/30">
                  <X className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Quiz diagnostic */}
        <FadeIn delay={0.3}>
          <div className="p-8 rounded-2xl bg-brand-card/80 border-2 border-brand-blue/30">
            <h2 className="text-2xl font-bold text-white mb-3 text-center">
              Est-ce qu'Optialys peut vous aider ?
            </h2>
            <p className="text-brand-gray text-center mb-8 text-sm">
              5 questions — moins de 2 minutes.
            </p>

            {!showResult ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs text-brand-gray">Question {quizStep + 1} / {quizQuestions.length}</span>
                  <div className="flex gap-1">
                    {quizQuestions.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-8 rounded-full transition-colors ${
                          i <= quizStep ? 'bg-brand-blue' : 'bg-brand-gray/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-white font-medium text-lg mb-6">
                  {quizQuestions[quizStep].q}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quizQuestions[quizStep].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      className="p-4 rounded-xl border border-brand-blue/20 text-brand-gray text-sm text-left hover:border-brand-blue hover:text-white hover:bg-brand-blue/5 transition-all duration-200"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Profil compatible avec Optialys.
                </h3>
                <p className="text-brand-gray mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  Basé sur vos réponses, votre cabinet correspond au profil des organisations avec
                  lesquelles on travaille. La prochaine étape : un diagnostic de 30 min pour cartographier
                  vos workflows et identifier les 2-3 automations à plus fort impact.
                </p>
                <a
                  href="https://calendly.com/nolprayagsing/automation-strategy-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlowButton>
                    Réserver le diagnostic gratuit <ArrowRight className="w-4 h-4" />
                  </GlowButton>
                </a>
                <button
                  onClick={() => { setQuizStep(0); setAnswers([]); setShowResult(false); }}
                  className="mt-4 block mx-auto text-xs text-brand-gray hover:text-white transition-colors"
                >
                  Recommencer
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export const Approche = ApprochePage;
