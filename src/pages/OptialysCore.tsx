import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Zap, Settings, CheckCircle2, Shield, Building2, XCircle } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, AsteriskDecor } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { useLanguage } from '../i18n/LanguageContext';

export const OptialysCore = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const problems = fr ? [
    {
      title: "On passe des heures sur des tâches qu'une machine pourrait faire.",
      desc: "Saisie CRM manuelle, relances prospects oubliées, rapports compilés à la main chaque lundi — vos équipes exécutent des tâches répétitives au lieu de se concentrer sur ce qui crée vraiment de la valeur."
    },
    {
      title: "On a testé des outils IA, rien n'a vraiment marché.",
      desc: "Les outils existent. Le problème, c'est l'implémentation. Sans quelqu'un qui comprend votre métier et configure les systèmes dans votre réalité, les pilotes restent des pilotes — et le ROI reste théorique."
    },
    {
      title: "On dépend d'un prestataire pour la moindre modification.",
      desc: "Chaque ajustement demande une intervention externe, un ticket, une attente. Vous n'êtes pas autonome sur votre infrastructure. Et à chaque évolution métier, tout est à refaire."
    }
  ] : [
    {
      title: "We spend hours on tasks a machine could do.",
      desc: "Manual CRM entry, forgotten prospect follow-ups, reports compiled by hand every Monday — your team executes repetitive tasks instead of focusing on what truly generates value."
    },
    {
      title: "We tried AI tools but nothing really worked.",
      desc: "The tools exist. The problem is implementation. Without someone who understands your business and configures the systems in your real context, pilots remain pilots — and the ROI remains theoretical."
    },
    {
      title: "We depend on a technical provider for the slightest modification.",
      desc: "Every adjustment requires an external intervention, a ticket, a wait. You are not autonomous on your own infrastructure. And with every change in your business, everything has to be redone."
    }
  ];

  const steps = fr ? [
    {
      icon: <Search className="w-8 h-8" />,
      badge: "Gratuit · 30 minutes",
      title: "Nous comprenons votre métier avant de construire quoi que ce soit.",
      desc: "Nous analysons vos process opérationnels, identifions les tâches qui coûtent le plus de temps à votre équipe et proposons un plan d'automatisation concret — adapté à votre secteur et à vos outils réels.\n\nVous repartez avec une vision claire de ce qui peut être automatisé, dans quel ordre, et pour quel impact.",
      includes: [
        "Cartographie de vos process clés",
        "Identification des automatisations prioritaires",
        "Plan d'action concret et priorisé",
        "Devis fixe — pas de surprise"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      badge: "Livré en 30 jours",
      title: "Nous construisons et déployons les automatisations adaptées à votre réalité.",
      desc: "Nous configurons chaque automatisation dans votre environnement réel — vos outils, votre CRM, vos process. Tout est fait pour vous. Le premier résultat visible arrive dès les premiers jours — pas à la fin du projet.",
      includes: [
        "Automatisations configurées dans vos outils existants",
        "Intégration CRM, email, calendrier, messagerie",
        "Premier résultat visible dès le 3ᵉ jour",
        "Formation équipe incluse (vidéo courte par automatisation)",
        "Documentation complète de chaque système livré"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      badge: "Livraison garantie",
      title: "Nous livrons. Vous reprenez la main.",
      desc: "À la fin des 30 jours, votre système tourne en autonomie. Vous avez la documentation, la formation et le contrôle total de ce qui a été déployé.\n\nSi vous voulez continuer à faire évoluer votre infrastructure IA, c'est là qu'Optialys Partner prend le relais.",
      includes: [
        "Système 100% opérationnel et documenté",
        "Équipe formée et autonome",
        "Revue de livraison + recommandations futures",
        "Transition vers Optialys Partner si souhaitée"
      ]
    }
  ] : [
    {
      icon: <Search className="w-8 h-8" />,
      badge: "Free · 30 minutes",
      title: "We understand your business before building anything.",
      desc: "We analyze your operational processes, identify the tasks that cost your team the most time, and propose a concrete automation plan — adapted to your sector and your real tools.\n\nYou leave with a clear vision of what can be automated, in what order, and for what impact.",
      includes: [
        "Mapping of your key processes",
        "Identification of priority automations",
        "Concrete and prioritized action plan",
        "Fixed quote — no surprises later"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      badge: "Delivered in 30 days",
      title: "We build and deploy automations adapted to your reality.",
      desc: "We configure each automation in your real environment — your tools, your CRM, your processes. Everything is done for you. The first visible result arrives in the first few days — not at the end of the project.",
      includes: [
        "Automations configured in your existing tools",
        "Integration with CRM, email, calendar, messaging",
        "First visible result from Day 3",
        "Team training included (short video per automation)",
        "Complete documentation of each delivered system"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      badge: "Delivery guaranteed",
      title: "We deliver. You take control.",
      desc: "At the end of the 30 days, your system runs autonomously. You have the documentation, the training, and full control of what was deployed.\n\nIf you want to keep evolving your AI infrastructure, that's where Optialys Partner comes in.",
      includes: [
        "100% operational and documented system",
        "Trained and autonomous team",
        "Delivery review + future recommendations",
        "Transition to Optialys Partner if desired"
      ]
    }
  ];

  const examples = fr ? [
    { sector: "Immobilier", situation: "Chaque nouveau lead remplit un formulaire sur votre site.", automation: "L'IA analyse le profil, attribue un score de qualité, envoie une réponse personnalisée en moins de 2 min et notifie l'agent concerné sur WhatsApp.", result: "Plus aucun lead sans réponse rapide." },
    { sector: "Fiduciaire / Comptabilité", situation: "Vous recevez des dizaines de factures par email chaque semaine.", automation: "Chaque facture reçue est lue automatiquement, les données sont extraites et enregistrées dans votre outil comptable. Alerte Slack en cas d'anomalie.", result: "Zéro saisie manuelle de facture." },
    { sector: "Cabinet de conseil", situation: "Votre équipe passe du temps à compiler les rapports hebdomadaires.", automation: "Chaque lundi matin, un rapport de performance est généré et envoyé automatiquement aux parties prenantes — données à jour, synthèse IA incluse.", result: "3 à 5 heures récupérées par semaine." },
    { sector: "RH / Recrutement", situation: "Vous sourcez des candidats manuellement sur LinkedIn.", automation: "Un système surveille en continu les profils correspondant à vos critères et vous envoie chaque matin une shortlist qualifiée dans votre outil de recrutement.", result: "Volume de sourcing multiplié sans ressource additionnelle." },
    { sector: "Tous secteurs", situation: "Onboarder chaque nouveau client prend plusieurs heures.", automation: "À la signature, un dossier est créé automatiquement, un email de bienvenue personnalisé est envoyé et les tâches internes sont assignées à votre équipe.", result: "Onboarding client en moins de 10 minutes." },
    { sector: "Tous secteurs", situation: "Votre CRM est rempli de doublons et de données incomplètes.", automation: "Un système tourne de nuit pour nettoyer, dédupliquer et enrichir vos contacts automatiquement — sans toucher à votre journée.", result: "CRM propre et fiable en moins de 7 jours." }
  ] : [
    { sector: "Real Estate Company", situation: "Every new lead fills out a form on your site.", automation: "AI analyzes the profile, assigns a quality score, sends a personalized response in under 2 minutes and notifies the relevant agent on WhatsApp.", result: "No more leads without a rapid response." },
    { sector: "Fiduciary / Accounting", situation: "You receive dozens of invoices by email every week.", automation: "Each received invoice is automatically read, data extracted and saved in your accounting tool. Slack alert if an anomaly is detected.", result: "Zero manual invoice entry." },
    { sector: "Consulting Firm", situation: "Your team spends time compiling weekly reports.", automation: "Every Monday morning, a performance report is generated and sent automatically to stakeholders — up-to-date data, AI synthesis included.", result: "3 to 5 hours recovered per week." },
    { sector: "HR / Recruiting Company", situation: "You source candidates manually on LinkedIn.", automation: "A system continuously monitors profiles matching your criteria and sends you a qualified shortlist every morning in your recruiting tool.", result: "Sourcing volume multiplied without additional resources." },
    { sector: "Any Sector", situation: "Onboarding each new client takes several hours.", automation: "Upon signature, a folder is automatically created, a personalized welcome email is sent and internal tasks are assigned to your team.", result: "Client onboarding in under 10 minutes." },
    { sector: "Any Sector", situation: "Your CRM is full of duplicates and incomplete data.", automation: "A system runs at night to clean, deduplicate and enrich your contacts automatically — without touching your day.", result: "Clean and reliable CRM in under 7 days." }
  ];

  const clients = fr ? [
    { name: "Koosmik", sector: "FinTech (Paris)", desc: "L'équipe passait 15h/semaine à surveiller manuellement les appels d'offres. Nous avons déployé un système de veille automatisé qui scanne les plateformes, filtre par pertinence et livre chaque matin une shortlist priorisée dans leur CRM.", result: "15h+/semaine récupérées · Partenariat actif" },
    { name: "AlternativeAML / Global IT Services PSF / OmniTrust", sector: "Compliance (BE/LU)", desc: "Trois sociétés, même besoin : présence LinkedIn régulière sans ressource dédiée. Nous avons déployé un pipeline de génération de contenu automatisé — adapté à la voix de chaque marque.", result: "5 posts/semaine par société · 0 intervention humaine" }
  ] : [
    { name: "Koosmik", sector: "FinTech (Paris)", desc: "The team spent 15 hours a week manually monitoring tenders. We deployed an automated monitoring system that scans platforms, filters by relevance and delivers a prioritized shortlist every morning in their CRM.", result: "15h+/week recovered · Active partnership" },
    { name: "AlternativeAML / Global IT Services PSF / OmniTrust", sector: "Compliance (BE/LU)", desc: "Three companies, same need: regular LinkedIn presence without a dedicated resource. We deployed an automated content generation pipeline — adapted to each brand's voice.", result: "5 posts/week per company · 0 human intervention" }
  ];

  const T = {
    eyebrow: fr ? "Optialys Core™ — Notre méthode de déploiement" : "Optialys Core™ — Our deployment method",
    heroTitle1: fr ? "Vos process manuels" : "Your manual processes",
    heroTitle2: fr ? "automatisés en 30 jours." : "automated in 30 days.",
    heroSub: fr ? "Optialys Core™ est notre méthode de déploiement sur-mesure. Nous analysons vos opérations, construisons les automatisations adaptées à votre métier, et déployons tout — sans que vous ayez à gérer quoi que ce soit techniquement." : "Optialys Core™ is our custom deployment method. We analyze your operations, build the automations adapted to your business, and deploy everything — without you having to manage anything technically.",
    ctaDiag: fr ? "Démarrer avec un diagnostic gratuit" : "Start with a free diagnostic",
    roi: fr ? "Calculez votre ROI potentiel" : "Calculate your potential ROI",
    problemsTitle: fr ? "Ce que vos équipes vivent aujourd'hui" : "What your teams are experiencing right now",
    stepsTitle: fr ? "Comment ça marche" : "How it works",
    stepsSub: fr ? "Trois étapes. Trente jours. Zéro gestion technique de votre côté." : "Three steps. Thirty days. Zero technical management on your end.",
    stepLabel: fr ? "ÉTAPE" : "STEP",
    whatYouGet: fr ? "Ce que vous obtenez :" : "What you get:",
    guaranteeTitle: fr ? "Notre garantie de livraison" : "Our delivery guarantee",
    guaranteeP1: fr ? "Chaque automatisation est livrée fonctionnelle dans les 30 jours suivant le démarrage du déploiement." : "Each automation is delivered functional within 30 days following the start of the deployment.",
    guaranteeP2: fr ? "Si ce délai n'est pas tenu pour une raison imputable à Optialys, nous continuons à travailler sans facturation supplémentaire jusqu'à la livraison complète." : "If this deadline is not met for a reason depending on Optialys, we continue working without additional billing until complete delivery.",
    g1: fr ? "Livraison garantie en 30 jours" : "Delivery guaranteed in 30 days",
    g2: fr ? "Devis fixe — pas de coûts cachés" : "Fixed quote — no hidden costs",
    g3: fr ? "Documentation complète livrée" : "Complete documentation delivered",
    examplesTitle: fr ? "Ce que nous automatisons concrètement" : "What we automate concretely",
    examplesSub: fr ? "Ces exemples sont illustratifs — vos automatisations sont définies pendant le diagnostic." : "These examples are illustrative — your automations are defined during the diagnostic.",
    situation: fr ? "Situation" : "Situation",
    automation: fr ? "Automatisation" : "Automation",
    typicalResult: fr ? "Résultat typique" : "Typical Result",
    examplesFooter: fr ? "Vos automatisations sont définies ensemble pendant le diagnostic gratuit.\nCes exemples illustrent les types de problèmes que nous résolvons." : "Your automations are defined together during the free diagnostic.\nThese examples illustrate the types of problems we solve.",
    proofTitle: fr ? "Ce que nous avons déjà déployé" : "What we have already deployed",
    afterTitle: fr ? "Et après les 30 jours ?" : "And after the 30 days?",
    afterSub: fr ? "Optialys Core™ vous donne une infrastructure IA fonctionnelle. Optialys Partner, c'est ce qui la fait évoluer chaque mois — avec Nolan comme consultant IA intégré à votre équipe." : "Optialys Core™ gives you a functional AI infrastructure. Optialys Partner is what makes it grow every month — with Nolan as an AI consultant integrated into your team.",
    discoverPartner: fr ? "Découvrir Optialys Partner" : "Discover Optialys Partner",
    finalTitle: fr ? "Le premier pas ne coûte rien." : "The first step costs nothing.",
    finalSub: fr ? "Le diagnostic est gratuit, sans engagement, et dure 30 minutes. Vous repartez avec un plan concret et un devis fixe — que vous travailliez avec nous ou non." : "The diagnostic is free, without commitment, and lasts 30 minutes. You leave with a concrete plan and a fixed quote — whether you work with us or not.",
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

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-ink-navy mb-8 leading-tight">
          {T.heroTitle1}<br/>
          <span className="text-accent-coral">{T.heroTitle2}</span>
        </h1>

        <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto mb-12">
          {T.heroSub}
        </p>

        <div className="flex flex-col items-center justify-center gap-6">
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="text-lg px-8 py-4">
              {T.ctaDiag} <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
          <Link to="/roi-calculator" className="text-accent-electric hover:text-ink-navy transition-colors font-medium text-sm flex items-center gap-2">
            {T.roi} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-bg-cream-alt border-y border-border-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-navy mb-4">
              {T.problemsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((prob, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-surface-white border border-border-cream h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 shrink-0">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-navy mb-4">"{prob.title}"</h3>
                  <p className="text-ink-gray leading-relaxed flex-1">{prob.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-24 px-6 bg-bg-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-ink-navy mb-4">{T.stepsTitle}</h2>
            <p className="text-xl text-ink-gray">{T.stepsSub}</p>
          </div>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto md:before:translate-x-0 before:w-px before:bg-border-cream">
            {steps.map((step, i) => (
              <FadeIn key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-bg-cream border-2 border-accent-coral -translate-x-1/2 mt-6 z-10 hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-accent-coral/30 animate-ping" />
                  </div>

                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-accent-coral/10 flex items-center justify-center text-accent-coral ${i % 2 === 0 ? 'md:order-last' : ''}`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-bg-cream border border-accent-coral/20 text-xs font-bold text-accent-coral mb-4">
                      {T.stepLabel} {i + 1} — {step.badge}
                    </div>
                    <h3 className="text-3xl font-bold text-ink-navy mb-4">{step.title}</h3>
                    <div className="text-ink-gray leading-relaxed mb-6 whitespace-pre-line">
                      {step.desc}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="p-8 rounded-2xl bg-surface-white border border-border-cream h-full">
                      <h4 className="text-ink-navy font-bold mb-6">{T.whatYouGet}</h4>
                      <ul className="space-y-4">
                        {step.includes.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-ink-gray">
                            <CheckCircle2 className="w-5 h-5 text-accent-coral shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-6 bg-bg-cream-alt">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="p-10 md:p-16 rounded-3xl bg-surface-white border-2 border-accent-coral/20 relative shadow-[0_0_50px_rgba(232,93,60,0.08)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-coral/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-10 h-10 text-accent-coral" />
                <h2 className="text-3xl md:text-4xl font-bold text-ink-navy">{T.guaranteeTitle}</h2>
              </div>

              <div className="space-y-6 text-lg text-ink-black leading-relaxed mb-12">
                <p className="font-medium">
                  {T.guaranteeP1}
                </p>
                <p className="text-ink-gray">
                  {T.guaranteeP2}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border-cream">
                <div className="flex items-center gap-3 text-sm font-bold text-ink-navy">
                  <span className="text-xl">🛡️</span> {T.g1}
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-ink-navy">
                  <span className="text-xl">📋</span> {T.g2}
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-ink-navy">
                  <span className="text-xl">📁</span> {T.g3}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24 px-6 bg-bg-cream border-y border-border-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink-navy mb-4">{T.examplesTitle}</h2>
            <p className="text-xl text-ink-gray">{T.examplesSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((ex, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-surface-white border border-border-cream h-full flex flex-col group hover:border-accent-coral/30 transition-colors">
                  <div className="inline-block px-3 py-1 rounded-full bg-bg-cream border border-accent-coral/20 text-xs font-bold text-accent-coral mb-6 self-start">
                    {ex.sector}
                  </div>

                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="text-xs font-bold text-ink-gray uppercase mb-2">{T.situation}</div>
                      <p className="text-ink-navy font-medium">{ex.situation}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-ink-gray uppercase mb-2">{T.automation}</div>
                      <p className="text-ink-gray text-sm leading-relaxed">{ex.automation}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border-cream">
                    <div className="text-xs font-bold text-ink-gray uppercase mb-2">{T.typicalResult}</div>
                    <p className="text-accent-green font-bold text-sm">{ex.result}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-ink-gray whitespace-pre-line">
              {T.examplesFooter}
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-bg-cream-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <AsteriskDecor size={20} className="mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-ink-navy">{T.proofTitle}</h2>
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

      {/* Transition to Partner */}
      <section className="py-24 px-6 bg-bg-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-ink-navy to-ink-navy/80 border border-ink-navy/20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{T.afterTitle}</h2>
                <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                  {T.afterSub}
                </p>
                <Link to="/optialys-partner">
                  <GlowButton variant="electric" className="text-lg px-8 py-4">
                    {T.discoverPartner} <ArrowRight className="w-5 h-5 ml-2" />
                  </GlowButton>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-bg-cream-alt relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-ink-navy mb-8">
              {T.finalTitle}
            </h2>
            <p className="text-xl text-ink-gray leading-relaxed">
              {T.finalSub}
            </p>
          </div>

          <FadeIn direction="up">
            <div className="max-h-[600px] overflow-hidden">
              <CalendlyEmbed />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
