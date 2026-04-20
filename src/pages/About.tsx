import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Target, Lightbulb, ShieldCheck, Linkedin } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, NPByline } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export const About = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const T = {
    title: fr ? "À propos d'Optialys" : "About Optialys",
    subtitle: fr ? "Nous construisons les systèmes IA qui permettent aux cabinets et PME en BeNeLux de passer à l'échelle sans exploser leurs coûts." : "We build the AI systems that allow European SMEs to scale without exploding their costs.",
    role: fr ? "Fondateur & Consultant en automatisation IA" : "Founder & AI Automation Consultant",
    badge1: "🇫🇷 Nice, France",
    badge2: "SKEMA Business School",
    badge3: "Expert n8n",
    p1: fr ? "J'ai 18 ans, j'étudie au Global BBA de SKEMA Business School — et depuis 3 ans, je travaille comme consultant indépendant, aidant des sociétés à construire leur infrastructure opérationnelle avec des outils comme Airtable." : "I'm 18 years old, studying for a Global BBA at SKEMA Business School — and for the past 3 years, I've been working as an independent consultant, helping companies build operational infrastructure using tools like Airtable.",
    p2: fr ? "Au fil des projets, j'ai remarqué quelque chose qui change tout : chaque infrastructure que je construisais pouvait être 10× plus puissante avec les bonnes automatisations connectées dessus. J'ai donc passé ces 3 années à apprendre l'IA et l'automatisation — pas en théorie, mais en déployant des systèmes réels pour des entreprises réelles." : "Along the way, I noticed something that changed everything: every infrastructure I built could be 10x more powerful with the right automations connected to it. So I spent those 3 years learning AI and automation — not in theory, but by deploying real systems for real businesses.",
    p3: fr ? "Travailler avec des sociétés comme Koosmik, AlternativeAML, OmniTrust, Global IT Services PSF et LybraMedia m'a appris l'essentiel : la plupart des PME ne manquent pas d'outils — elles manquent de quelqu'un qui sait les implémenter correctement dans leur réalité métier." : "Working with companies like Koosmik, AlternativeAML, OmniTrust, Global IT Services PSF and LybraMedia taught me something essential: most SMEs don't lack the tools — they lack someone who knows how to implement them properly inside their specific business reality.",
    p4: fr ? "C'est exactement pour ça que j'ai créé Optialys." : "That's exactly why I built Optialys.",
    p5: fr ? "D'abord, pour poser une structure sérieuse sur laquelle les entreprises peuvent vraiment s'appuyer. Ensuite, parce que je suis convaincu de pouvoir aider bien plus de sociétés à adopter l'IA correctement — pas juste déployer des automatisations une fois, mais améliorer leurs systèmes en continu pour qu'elles gardent un temps d'avance chaque mois." : "First, to establish a serious, structured entity that businesses can trust and rely on. And second, because I'm convinced I can help far more companies adopt AI the right way — not just deploying automations once, but continuously improving their systems so they stay ahead of their competition every single month.",
    tagline1: fr ? "Optialys n'est pas une société qui vend un logiciel." : "Optialys is not a company that sells software.",
    tagline2: fr ? "C'est un partenaire qui garde votre activité en tête." : "It's a partner that keeps your business ahead.",
    dna: fr ? "Notre ADN" : "Our DNA",
    missionT: fr ? "Notre mission" : "Our Mission",
    missionD: fr ? "Démocratiser l'accès aux technologies d'automatisation avancées pour les cabinets et PME en BeNeLux, transformant l'IA en avantage compétitif tangible et mesurable." : "Democratize access to advanced automation technologies for European SMEs, transforming AI into a tangible and measurable competitive advantage.",
    approachT: fr ? "Notre approche" : "Our Approach",
    approachD: fr ? "Pragmatique et orientée ROI. Nous ne déployons pas de l'IA pour le buzz, mais uniquement là où elle génère un gain de temps massif ou une hausse directe de revenus." : "Pragmatic and ROI-oriented. We don't deploy AI for the buzz, but only where it generates a massive time saving or a direct increase in revenue.",
    valuesT: fr ? "Nos valeurs" : "Our Values",
    valuesD: fr ? "Transparence totale, obligation de résultat, engagement absolu sur la réussite de nos clients. Nous sommes votre partenaire technique de confiance." : "Total transparency, obligation of results, and an absolute commitment to our clients' success. We are your trusted technical partner.",
    ctaTitle: fr ? "Prêt à transformer vos opérations ?" : "Ready to transform your operations?",
    ctaSub: fr ? "Parlons de vos défis actuels et voyons comment l'automatisation IA peut vous aider à les résoudre." : "Let's discuss your current challenges and see how AI automation can help you overcome them.",
    ctaBtn: fr ? "Réserver un appel" : "Schedule a call",
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-ink-navy mb-6">
            {T.title}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
            {T.subtitle}
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto space-y-32">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-5/12 flex justify-center md:justify-start shrink-0">
              <div className="relative rounded-[12px] overflow-hidden shadow-[0_4px_30px_rgba(10,22,40,0.12)] max-w-sm w-full">
                <img
                  src="/nolan-headshot.jpg"
                  alt="Nolan Prayagsing - Founder of Optialys"
                  className="w-full h-auto object-cover aspect-[3/4] bg-bg-cream-alt"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="w-full md:w-7/12 flex flex-col">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black text-ink-navy mb-2">Nolan Prayagsing</h2>
                <p className="text-xl font-medium text-accent-coral mb-4">{T.role}</p>
                <div className="flex flex-wrap gap-2 text-sm font-bold text-ink-gray">
                  <span className="px-3 py-1 rounded-full bg-surface-white border border-border-cream">{T.badge1}</span>
                  <span className="px-3 py-1 rounded-full bg-surface-white border border-border-cream">{T.badge2}</span>
                  <span className="px-3 py-1 rounded-full bg-surface-white border border-border-cream">{T.badge3}</span>
                </div>
              </div>

              <div className="space-y-6 text-ink-gray leading-relaxed text-lg mb-12">
                <p>{T.p1}</p>
                <p>{T.p2}</p>
                <p>{T.p3}</p>
                <p>{T.p4}</p>
                <p>{T.p5}</p>
              </div>

              <div className="text-accent-electric text-2xl md:text-3xl font-bold leading-tight mb-10">
                <p>{T.tagline1}</p>
                <p>{T.tagline2}</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-coral/10 text-accent-coral border border-accent-coral/20 hover:bg-accent-coral hover:text-white hover:shadow-[0_0_20px_rgba(232,93,60,0.3)] transition-all duration-300"
                  aria-label="Nolan Prayagsing on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <NPByline />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink-navy">{T.dna}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-white border border-border-cream text-center">
              <Target className="w-12 h-12 text-accent-coral mx-auto mb-6" />
              <h3 className="text-xl font-bold text-ink-navy mb-4">{T.missionT}</h3>
              <p className="text-ink-gray leading-relaxed">{T.missionD}</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-white border border-border-cream text-center">
              <Lightbulb className="w-12 h-12 text-accent-electric mx-auto mb-6" />
              <h3 className="text-xl font-bold text-ink-navy mb-4">{T.approachT}</h3>
              <p className="text-ink-gray leading-relaxed">{T.approachD}</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-white border border-border-cream text-center">
              <ShieldCheck className="w-12 h-12 text-accent-coral mx-auto mb-6" />
              <h3 className="text-xl font-bold text-ink-navy mb-4">{T.valuesT}</h3>
              <p className="text-ink-gray leading-relaxed">{T.valuesD}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mt-32 py-24 bg-bg-cream-alt border-y border-border-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-ink-navy mb-6">{T.ctaTitle}</h2>
            <p className="text-xl text-ink-gray mb-12">
              {T.ctaSub}
            </p>
            <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
              <GlowButton variant="primary" className="text-lg px-8 py-4">
                {T.ctaBtn} <ArrowRight className="w-5 h-5 ml-2" />
              </GlowButton>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
