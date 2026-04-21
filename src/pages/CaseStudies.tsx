import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Target, Lightbulb, TrendingUp, Code } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export const CaseStudies = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const cases = fr ? [
    {
      id: "koosmik",
      client: "Koosmik",
      sector: "FinTech (Paris)",
      title: "RFP Radar — Veille automatisée des appels d'offres",
      challenge: "L'équipe passait des heures chaque semaine à surveiller manuellement les appels d'offres publics et privés, et ratait souvent des opportunités clés.",
      solution: "Déploiement d'un système de veille automatisé via n8n qui scrape les sources, filtre via IA selon les critères de Koosmik et notifie l'équipe commerciale sur Slack.",
      results: ["15h+/semaine économisées", "0 opportunité manquée", "Réactivité multipliée par 3"],
      stack: ["n8n", "Claude AI", "Pipedrive", "Slack"]
    },
    {
      id: "alternative-aml",
      client: "AlternativeAML / Global IT Services PSF / OmniTrust",
      sector: "Compliance (BE/LU)",
      title: "Pipeline LinkedIn automatisé",
      challenge: "Maintenir une présence forte sur LinkedIn pour 3 entités différentes sans y consacrer de temps interne.",
      solution: "Création d'un pipeline de contenu automatisé. L'IA génère des posts basés sur l'actualité réglementaire, validés dans Airtable, puis publiés automatiquement via l'API LinkedIn.",
      results: ["5 posts/semaine par entité", "0 intervention humaine", "+45% d'engagement en 2 mois"],
      stack: ["n8n", "Claude AI", "Airtable", "LinkedIn API"]
    },
    {
      id: "lybramedia",
      client: "LybraMedia",
      sector: "Média",
      title: "Infrastructure d'onboarding complète",
      challenge: "Process d'onboarding manuel, désorganisé et chronophage pour les nouveaux clients et membres d'équipe.",
      solution: "Construction d'une infrastructure centralisée sur Airtable pour automatiser tout le workflow d'onboarding, de la collecte à l'assignation des tâches.",
      results: ["Onboarding 100% automatisé", "Gestion des données centralisée", "Temps significatif gagné par nouveau client"],
      stack: ["Airtable", "n8n", "Make"]
    },
    {
      id: "lafa",
      client: "lafa-asbl",
      sector: "Association (Belgique)",
      title: "Automatisation des processus opérationnels internes",
      challenge: "Gestion administrative chronophage (inscriptions, facturation, communication membres).",
      solution: "Digitalisation et automatisation complète des flux opérationnels via Google Workspace et n8n.",
      results: ["100% des inscriptions automatisées", "0 erreur de saisie", "20h/mois économisées en admin"],
      stack: ["n8n", "Google Workspace", "Stripe"]
    }
  ] : [
    {
      id: "koosmik",
      client: "Koosmik",
      sector: "FinTech (Paris)",
      title: "RFP Radar — Automated tender monitoring",
      challenge: "The team spent hours every week manually monitoring public and private tenders, often missing key opportunities.",
      solution: "Deployment of an automated monitoring system via n8n that scrapes sources, filters via AI according to Koosmik's criteria, and notifies the sales team on Slack.",
      results: ["15h+/week saved", "0 missed opportunities", "Reactivity increased by 300%"],
      stack: ["n8n", "Claude AI", "Pipedrive", "Slack"]
    },
    {
      id: "alternative-aml",
      client: "AlternativeAML / Global IT Services PSF / OmniTrust",
      sector: "Compliance (BE/LU)",
      title: "Automated LinkedIn content pipeline",
      challenge: "Need to maintain a strong presence on LinkedIn for 3 different entities without spending internal time.",
      solution: "Creation of an automated content pipeline. AI generates posts based on regulatory news, validated in Airtable, then published automatically via the LinkedIn API.",
      results: ["5 posts/week per entity", "0 human intervention required", "+45% engagement in 2 months"],
      stack: ["n8n", "Claude AI", "Airtable", "LinkedIn API"]
    },
    {
      id: "lybramedia",
      client: "LybraMedia",
      sector: "Media Company",
      title: "Comprehensive Onboarding Infrastructure",
      challenge: "Manual, disorganized, and time-consuming onboarding process for new clients and team members.",
      solution: "Built a centralized infrastructure using Airtable to automate and streamline the entire onboarding workflow, from data collection to task assignment.",
      results: ["100% automated onboarding", "Centralized data management", "Significant time saved per new client"],
      stack: ["Airtable", "n8n", "Make"]
    },
    {
      id: "lafa",
      client: "lafa-asbl",
      sector: "Association (Belgium)",
      title: "Internal operational process automation",
      challenge: "Time-consuming administrative management (registrations, billing, member communication).",
      solution: "Complete digitization and automation of operational flows via Google Workspace and n8n.",
      results: ["100% of registrations automated", "0 manual data entry errors", "20h/month saved on admin"],
      stack: ["n8n", "Google Workspace", "Stripe"]
    }
  ];

  const T = {
    title: fr ? "Nos références" : "Our Case Studies",
    subtitle: fr ? "Découvrez comment nous avons aidé ces sociétés à faire passer leurs opérations à l'échelle avec l'IA." : "Discover how we helped these companies scale their operations with AI.",
    challenge: fr ? "Problématique" : "Challenge",
    solution: fr ? "Solution" : "Solution",
    results: fr ? "Résultats" : "Results",
    ctaTitle: fr ? "Envie des mêmes résultats ?" : "Ready to get the same results?",
    ctaBtn: fr ? "Réserver un audit gratuit" : "Book a free audit",
  };

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">{T.title}</PillBadge>
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight text-ink-navy mb-6">
            {T.title}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
            {T.subtitle}
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-5xl mx-auto space-y-24">
        {cases.map((study, index) => (
          <FadeIn key={study.id} direction="up" delay={index * 0.1}>
            <div className="rounded-3xl bg-surface-white border border-border-cream overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-coral/10 text-accent-coral font-bold">
                    <Building2 className="w-4 h-4" />
                    {study.client}
                  </div>
                  <div className="text-ink-gray text-sm font-medium">
                    {study.sector}
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-ink-navy mb-8">{study.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="flex items-center gap-2 text-red-400 font-bold mb-4">
                      <Target className="w-5 h-5" /> {T.challenge}
                    </div>
                    <p className="text-ink-gray leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-accent-electric font-bold mb-4">
                      <Lightbulb className="w-5 h-5" /> {T.solution}
                    </div>
                    <p className="text-ink-gray leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-bg-cream border border-border-cream mb-8">
                  <div className="flex items-center gap-2 text-accent-green font-bold mb-6">
                    <TrendingUp className="w-5 h-5" /> {T.results}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-ink-navy font-medium">
                        <span className="text-accent-coral mr-2">✓</span> {result}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8 border-t border-border-cream">
                  <Code className="w-5 h-5 text-ink-gray" />
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-bg-cream border border-border-cream text-xs font-mono text-ink-gray">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="mt-32 py-24 px-6 text-center bg-bg-cream-alt border-t border-border-cream">
        <FadeIn>
          <h2 className="text-3xl font-bold text-ink-navy mb-8">{T.ctaTitle}</h2>
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="text-lg px-8 py-4">
              {T.ctaBtn} <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
        </FadeIn>
      </section>
    </div>
  );
};
