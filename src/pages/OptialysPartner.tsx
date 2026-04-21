import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Settings, Compass, MessageSquare, CheckCircle2, XCircle, Building2, Shield } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, AsteriskDecor } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { useLanguage } from '../i18n/LanguageContext';

export const OptialysPartner = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const comparison = fr ? {
    without: [
      "Des automatisations figées qui ne s'adaptent pas",
      "Personne pour identifier les nouveaux gains IA",
      "Budget formation IA sans résultat concret",
      "Des décisions IA sans expertise interne",
      "Recruter un profil IA impossible à trouver"
    ],
    with: [
      "Infrastructure IA qui évolue chaque mois",
      "Nouvelles automatisations identifiées et déployées en continu",
      "Conseil stratégique IA aligné avec vos objectifs business",
      "Un point de contact unique qui connaît votre métier en profondeur",
      "L'expertise d'un consultant IA senior — sans le coût d'un temps plein"
    ]
  } : {
    without: [
      "Static automations that don't adapt",
      "No one to identify new AI gains",
      "AI training budget with no concrete results",
      "AI decisions without internal expertise",
      "Recruiting an AI profile impossible to find"
    ],
    with: [
      "AI infrastructure that evolves every month",
      "New automations identified and deployed continuously",
      "AI strategic advice aligned with your business goals",
      "A single point of contact who knows your business deeply",
      "The expertise of a senior AI consultant — without the cost of a full-time employee"
    ]
  };

  const monthlyFeatures = fr ? [
    { icon: <Zap className="w-8 h-8" />, title: "Nouvelles automatisations", desc: "Chaque mois, nous identifions les prochains processus à automatiser dans votre activité et les déployons. Votre infrastructure IA grandit en continu." },
    { icon: <Settings className="w-8 h-8" />, title: "Maintenance & optimisation", desc: "Tous vos systèmes actifs sont surveillés en continu. Nous optimisons ce qui peut l'être et intervenons proactivement avant même que vous ne voyiez un problème." },
    { icon: <Compass className="w-8 h-8" />, title: "Conseil stratégique IA", desc: "Un call mensuel pour passer en revue vos priorités business et aligner votre stratégie IA. Vous prenez vos décisions avec quelqu'un qui connaît votre secteur et vos outils." },
    { icon: <MessageSquare className="w-8 h-8" />, title: "Support dédié", desc: "Un canal direct avec Nolan. Questions, ajustements, nouvelles idées — réponse sous 24h, sans tickets, sans intermédiaires." }
  ] : [
    { icon: <Zap className="w-8 h-8" />, title: "New automations", desc: "Every month, we identify the next processes to automate in your business and deploy them. Your AI infrastructure grows continuously." },
    { icon: <Settings className="w-8 h-8" />, title: "Maintenance & optimization", desc: "All your active systems are monitored continuously. We optimize what can be optimized and intervene proactively before you even notice an issue." },
    { icon: <Compass className="w-8 h-8" />, title: "AI strategic advice", desc: "A monthly call to review your business priorities and align your AI strategy accordingly. You make AI decisions with someone who knows your sector and tools." },
    { icon: <MessageSquare className="w-8 h-8" />, title: "Dedicated support", desc: "A direct communication channel with Nolan. Questions, adjustments, new ideas — response under 24h, without tickets, without intermediaries." }
  ];

  const timeline = fr ? [
    { month: "MOIS 1 & 2", title: "Onboarding & déploiement initial", desc: "Les deux premiers mois sont dédiés à un diagnostic approfondi et au déploiement des premières automatisations fondatrices. C'est le même travail qu'Optialys Core™ — inclus dans le partenariat. Vous ne payez pas de setup séparé." },
    { month: "MOIS 3", title: "Votre infrastructure tourne", desc: "Vos systèmes sont opérationnels. Les résultats sont visibles. Nous commençons à identifier les prochaines automatisations à fort impact." },
    { month: "MOIS 3 ET AU-DELÀ", title: "Partenariat actif", desc: "Chaque mois : nouvelles automatisations déployées, optimisations, conseil stratégique. Votre infrastructure IA devient un vrai avantage compétitif — pas juste un outil." }
  ] : [
    { month: "MONTH 1 & 2", title: "Onboarding & Initial Deployment", desc: "The first two months are dedicated to an in-depth diagnostic and the deployment of the first foundational automations. It's the same work as Optialys Core™ — included in the partnership. You do not pay a separate setup fee." },
    { month: "MONTH 3", title: "Your infrastructure is running", desc: "Your systems are operational. The results are visible. We start identifying the next high-impact automations." },
    { month: "MONTH 3 AND BEYOND", title: "Active partnership", desc: "Every month: new automations deployed, optimizations, strategic advice. Your AI infrastructure becomes a true competitive advantage — not just a tool." }
  ];

  const clients = fr ? [
    { name: "Koosmik", sector: "FinTech (Paris)", desc: "Partenariat actif depuis le déploiement du RFP Radar. Nouveaux modules identifiés et déployés en continu.", result: "15h+/semaine récupérées · Partenariat actif" },
    { name: "AlternativeAML / Global IT Services PSF / OmniTrust", sector: "Compliance (BE/LU)", desc: "Trois sociétés, infrastructure LinkedIn automatisée, maintenance et évolution mensuelle du pipeline de contenu.", result: "5 posts/semaine · 0 intervention humaine · Maintenance active" }
  ] : [
    { name: "Koosmik", sector: "FinTech (Paris)", desc: "Active partnership since the deployment of the RFP Radar. New modules identified and deployed continuously.", result: "15h+/week recovered · Ongoing partnership" },
    { name: "AlternativeAML / Global IT Services PSF / OmniTrust", sector: "Compliance (BE/LU)", desc: "Three companies, automated LinkedIn infrastructure, maintenance and monthly evolution of the content pipeline.", result: "5 posts/week · 0 human intervention · Active maintenance" }
  ];

  const forYou = fr ? [
    "Votre activité génère assez de process pour justifier une évolution IA continue chaque mois",
    "Vous avez vu les résultats d'une première automatisation et voulez aller plus loin",
    "Vous n'avez pas les ressources pour recruter un profil IA interne",
    "Vous voulez un point de contact unique qui comprend votre métier en profondeur sur la durée",
    "Vous cherchez un partenariat actif — pas juste de la maintenance"
  ] : [
    "Your business generates enough processes to justify continuous AI evolution every month",
    "You have seen the results of a first automation and want to go further",
    "You don't have the resources to recruit an internal AI profile",
    "You want a single point of contact who understands your business deeply over the long term",
    "You are looking for an active partnership — not just maintenance"
  ];

  const T = {
    eyebrow: fr ? "Optialys Partner — Consultant IA intégré" : "Optialys Partner — Embedded AI Consultant",
    heroTitle1: fr ? "Votre consultant IA interne —" : "Your internal AI consultant —",
    heroTitle2: fr ? "sans recrutement." : "without recruiting.",
    heroSub: fr ? "Optialys Partner, c'est Nolan intégré à votre équipe comme consultant IA dédié — chaque mois, de nouvelles automatisations déployées, votre infrastructure qui évolue, et une vision stratégique IA continue." : "Optialys Partner is Nolan integrated into your team as a dedicated AI consultant — every month, new automations deployed, your infrastructure evolving, and continuous AI strategic vision.",
    heroCta: fr ? "Discuter d'un partenariat" : "Discuss a partnership",
    heroMicro: fr ? "Sans engagement long terme · Résiliable à tout moment" : "No long-term commitment · Cancel anytime",
    compareTitle: fr ? "Ce que vous avez aujourd'hui vs ce que vous aurez" : "What you have today vs what you will have",
    without: fr ? "Sans Optialys Partner" : "Without Optialys Partner",
    withLabel: fr ? "Avec Optialys Partner" : "With Optialys Partner",
    monthlyTitle: fr ? "Ce que vous recevez chaque mois" : "What you get every month",
    monthlySub: fr ? "Un partenariat actif — pas de la maintenance passive." : "An active partnership — not passive maintenance.",
    timelineTitle: fr ? "Comment démarre un partenariat Optialys Partner" : "How an Optialys Partner partnership starts",
    noCommit: fr ? "Sans engagement long terme. Vous pouvez arrêter à tout moment avec un préavis de 30 jours." : "No long-term commitment. You can stop at any time with a 30-day notice.",
    forYouTitle: fr ? "Optialys Partner est pour vous si…" : "Optialys Partner is for you if...",
    notForYouTitle: fr ? "Optialys Partner ne convient pas si :" : "Optialys Partner is not suitable if:",
    notForYou1: fr ? "Vous n'avez pas encore testé l'automatisation dans votre activité" : "You haven't tested automation in your business yet",
    startCore: fr ? "→ Démarrez avec Optialys Core™" : "→ Start with Optialys Core™",
    notForYou2: fr ? "Vous cherchez un prestataire ponctuel pour un projet défini" : "You are looking for a one-off provider for a defined project",
    coreBetter: fr ? "→ Optialys Core™ est plus adapté" : "→ Optialys Core™ is more suitable",
    practiceTitle: fr ? "À quoi ça ressemble en pratique" : "What it looks like in practice",
    finalTitle: fr ? "Un partenariat commence par une conversation." : "A partnership starts with a conversation.",
    finalP1: fr ? "Nous parlons de votre activité, de votre situation actuelle et de ce qu'un partenariat Optialys Partner pourrait vous apporter concrètement." : "We discuss your business, your current situation, and what an Optialys Partner partnership could bring you concretely.",
    finalP2: fr ? "Pas de pitch. Pas de template générique. Une vraie conversation sur votre réalité." : "No pitch. No generic template. A real conversation about your reality.",
  };

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <PillBadge className="mb-8">{T.eyebrow}</PillBadge>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-navy mb-8 leading-tight">
          {T.heroTitle1}<br/>
          <span className="text-accent-coral">{T.heroTitle2}</span>
        </h1>

        <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto mb-12">
          {T.heroSub}
        </p>

        <div className="flex flex-col items-center justify-center">
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="text-lg px-8 py-4">
              {T.heroCta} <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
          <p className="mt-4 text-sm font-medium text-ink-gray">
            {T.heroMicro}
          </p>
        </div>
      </section>

      {/* Positioning Comparison */}
      <section className="py-24 px-6 bg-bg-cream-alt border-y border-border-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-ink-navy mb-4">
              {T.compareTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="p-8 rounded-3xl bg-surface-white border border-red-200 h-full">
                <h3 className="text-xl font-bold text-ink-navy mb-8 pb-4 border-b border-red-100">{T.without}</h3>
                <ul className="space-y-6">
                  {comparison.without.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-gray">
                      <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="p-8 rounded-3xl bg-surface-white border-2 border-accent-coral/30 relative shadow-[0_0_30px_rgba(232,93,60,0.08)] h-full">
                <h3 className="text-xl font-bold text-ink-navy mb-8 pb-4 border-b border-accent-coral/20">{T.withLabel}</h3>
                <ul className="space-y-6">
                  {comparison.with.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-black font-medium">
                      <CheckCircle2 className="w-6 h-6 text-accent-coral shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What we do every month */}
      <section className="py-24 px-6 bg-bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink-navy mb-4">{T.monthlyTitle}</h2>
            <p className="text-xl text-ink-gray">{T.monthlySub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monthlyFeatures.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-surface-white border border-border-cream h-full flex flex-col group hover:border-accent-coral/30 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-ink-navy mb-4">{feature.title}</h3>
                  <p className="text-ink-gray leading-relaxed flex-1">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-bg-cream-alt border-y border-border-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-ink-navy mb-4">{T.timelineTitle}</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto md:before:translate-x-0 before:w-px before:bg-border-cream">
            {timeline.map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="relative flex flex-col md:flex-row gap-8 items-center">

                  <div className="hidden md:flex w-1/2 justify-end pr-12">
                    {i % 2 === 0 && (
                      <div className="text-right">
                        <div className="inline-block px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral font-bold text-sm mb-2">
                          {step.month}
                        </div>
                        <h3 className="text-2xl font-bold text-ink-navy mb-3">{step.title}</h3>
                        <p className="text-ink-gray leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-bg-cream border-2 border-accent-coral -translate-x-1/2 z-10">
                    <div className="absolute inset-0 rounded-full bg-accent-coral/30 animate-ping" />
                  </div>

                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    {i % 2 !== 0 && (
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral font-bold text-sm mb-2">
                          {step.month}
                        </div>
                        <h3 className="text-2xl font-bold text-ink-navy mb-3">{step.title}</h3>
                        <p className="text-ink-gray leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                    {/* Mobile view fallback */}
                    <div className="md:hidden">
                      <div className="inline-block px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral font-bold text-sm mb-2">
                        {step.month}
                      </div>
                      <h3 className="text-2xl font-bold text-ink-navy mb-3">{step.title}</h3>
                      <p className="text-ink-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-white border border-border-cream text-sm font-medium text-ink-gray">
              <Shield className="w-4 h-4 text-accent-coral" /> {T.noCommit}
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 bg-bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-ink-navy">{T.forYouTitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="space-y-6">
                {forYou.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-surface-white border border-border-cream">
                    <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0 mt-0.5" />
                    <span className="text-ink-black font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="p-8 rounded-3xl bg-surface-white border border-red-200">
                <h3 className="text-xl font-bold text-ink-navy mb-6">{T.notForYouTitle}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-ink-black font-medium mb-2">{T.notForYou1}</p>
                      <Link to="/optialys-core" className="text-accent-electric text-sm hover:underline flex items-center gap-1">
                        {T.startCore}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-ink-black font-medium mb-2">{T.notForYou2}</p>
                      <Link to="/optialys-core" className="text-accent-electric text-sm hover:underline flex items-center gap-1">
                        {T.coreBetter}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-24 px-6 bg-bg-cream-alt border-y border-border-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <AsteriskDecor size={20} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-ink-navy">{T.practiceTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-surface-white border border-border-cream h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-accent-coral" />
                    <h3 className="text-xl font-bold text-ink-navy">{client.name}</h3>
                  </div>
                  <div className="text-sm text-ink-gray mb-6">{client.sector}</div>

                  <p className="text-ink-gray leading-relaxed mb-8 flex-1 italic">
                    "{client.desc}"
                  </p>

                  <div className="inline-block px-4 py-2 rounded-lg bg-accent-electric/10 border border-accent-electric/20 text-accent-electric font-bold text-sm self-start">
                    → {client.result}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-bg-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-navy mb-8">
              {T.finalTitle}
            </h2>
            <p className="text-xl text-ink-gray leading-relaxed">
              {T.finalP1}
              <br/><br/>
              <span className="text-ink-navy font-medium">{T.finalP2}</span>
            </p>
          </div>

          <FadeIn direction="up">
            <CalendlyEmbed />
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
