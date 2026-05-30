import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Target, Plug, Eye, Linkedin } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, NPByline } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

export const About = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  useSEO({
    title: fr
      ? 'À propos — Nolan Prayagsing, fondateur d\'Optialys'
      : 'About — Nolan Prayagsing, founder of Optialys',
    description: fr
      ? 'Optialys est fondé par Nolan Prayagsing. On connecte les outils existants des ateliers et services haut de gamme dans un système central pour piloter la marge en temps réel.'
      : 'Optialys is founded by Nolan Prayagsing. We connect the existing tools of high-end workshops and services into a central system to pilot margin in real time.',
    canonical: 'https://optialys.com/about',
  });

  const T = {
    title: fr ? "À propos d'Optialys" : "About Optialys",
    subtitle: fr ? "On construit l'infrastructure opérationnelle qui permet aux ateliers et services haut de gamme de piloter leur marge en temps réel." : "We build the operational infrastructure that lets high-end workshops and services pilot their margin in real time.",
    role: fr ? "Fondateur · Infrastructure opérationnelle" : "Founder · Operational infrastructure",
    badge1: "🇫🇷 France",
    badge2: "SKEMA Business School",
    badge3: fr ? "Systèmes opérationnels" : "Operational systems",
    p1: fr ? "Depuis plus de deux ans, je construis des systèmes opérationnels pour des entreprises qui exécutent des projets complexes. Le constat est toujours le même : d'excellents ateliers, des équipes solides — mais des outils qui ne se parlent pas et une marge pilotée à l'aveugle." : "For over two years, I've been building operational systems for businesses that run complex projects. The pattern is always the same: excellent workshops, solid teams — but tools that don't talk to each other and a margin piloted blind.",
    p2: fr ? "La donnée existe déjà. Elle est juste éparpillée entre le CRM, le logiciel de chantier, la facturation et dix tableurs. Personne n'a de vue d'ensemble, et les dépassements se découvrent trop tard. Le problème n'est pas le manque d'outils — c'est l'absence de connexion entre eux." : "The data already exists. It's just scattered across the CRM, project software, invoicing and ten spreadsheets. No one has the full picture, and overruns are discovered too late. The problem isn't a lack of tools — it's the absence of connection between them.",
    p3: fr ? "J'ai créé Optialys pour ça : connecter l'existant dans un système central, automatiser la circulation de l'information, et donner au dirigeant une vision temps réel de son activité — depuis son téléphone." : "I built Optialys for exactly this: connect what exists into one central system, automate how information flows, and give the owner a real-time view of the business — from their phone.",
    p4: fr ? "Pas de remplacement brutal, pas de jargon. Juste une infrastructure qui fait enfin parler ce que vous avez déjà." : "No brutal replacement, no jargon. Just an infrastructure that finally makes what you already have talk.",
    tagline1: fr ? "Optialys ne vend pas un logiciel." : "Optialys doesn't sell software.",
    tagline2: fr ? "On connecte le vôtre pour que vous pilotiez votre marge." : "We connect yours so you can pilot your margin.",
    dna: fr ? "Comment on travaille" : "How we work",
    missionT: fr ? "Connecter, pas remplacer" : "Connect, don't replace",
    missionD: fr ? "On part de vos outils existants. Aucune migration douloureuse — on les branche sur un système central qui fait circuler l'information." : "We start from your existing tools. No painful migration — we plug them into a central system that makes information flow.",
    approachT: fr ? "Visibilité avant tout" : "Visibility first",
    approachD: fr ? "L'objectif n'est pas l'automatisation pour l'automatisation. C'est que vous voyiez votre marge et vos dépassements en temps réel, pour agir avant qu'il soit trop tard." : "The goal isn't automation for its own sake. It's that you see your margin and overruns in real time, to act before it's too late.",
    valuesT: fr ? "Vous gardez le contrôle" : "You keep control",
    valuesD: fr ? "Le système vous appartient. On documente tout, on forme votre équipe. Transparence totale, devis fixe, obligation de résultat." : "The system is yours. We document everything and train your team. Total transparency, fixed quote, commitment to results.",
    ctaTitle: fr ? "On regarde vos opérations ensemble ?" : "Shall we look at your operations together?",
    ctaSub: fr ? "2 heures pour identifier où part votre argent. Vous repartez avec un plan d'action concret." : "2 hours to pinpoint where your money goes. You leave with a concrete action plan.",
    ctaBtn: fr ? "Réserver un Diagnostic" : "Book a Diagnostic",
  };

  const values = [
    { icon: <Plug className="w-10 h-10" />, t: T.missionT, d: T.missionD },
    { icon: <Eye className="w-10 h-10" />, t: T.approachT, d: T.approachD },
    { icon: <Target className="w-10 h-10" />, t: T.valuesT, d: T.valuesD },
  ];

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">{T.title}</PillBadge>
          <h1 className="text-2xl md:text-xl font-serif font-normal text-ink-navy mb-6">{T.title}</h1>
          <p className="text-base text-ink-gray leading-relaxed max-w-2xl">{T.subtitle}</p>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto space-y-32">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-5/12 flex justify-center md:justify-start shrink-0">
              <div className="relative rounded-sm overflow-hidden border border-border-cream max-w-sm w-full">
                <img
                  src="/nolan-headshot.jpg"
                  alt="Nolan Prayagsing, fondateur d'Optialys"
                  className="w-full h-auto object-cover aspect-[3/4] bg-surface-white"
                />
              </div>
            </div>

            <div className="w-full md:w-7/12 flex flex-col">
              <div className="mb-8">
                <h2 className="text-xl font-serif font-normal text-ink-navy mb-2">Nolan Prayagsing</h2>
                <p className="text-xl font-medium text-accent-coral mb-4">{T.role}</p>
                <div className="flex flex-wrap gap-2 text-sm font-bold text-ink-gray">
                  <span className="px-3 py-1 rounded-sm bg-surface-white border border-border-cream">{T.badge1}</span>
                  <span className="px-3 py-1 rounded-sm bg-surface-white border border-border-cream">{T.badge2}</span>
                  <span className="px-3 py-1 rounded-sm bg-surface-white border border-border-cream">{T.badge3}</span>
                </div>
              </div>

              <div className="space-y-6 text-ink-gray leading-relaxed text-lg mb-10">
                <p>{T.p1}</p>
                <p>{T.p2}</p>
                <p>{T.p3}</p>
                <p>{T.p4}</p>
              </div>

              <div className="text-ink-navy text-lg md:text-xl font-serif font-normal leading-tight mb-10">
                <p>{T.tagline1}</p>
                <p className="text-accent-coral">{T.tagline2}</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-accent-coral/10 text-accent-coral border border-accent-coral/20 hover:bg-accent-coral hover:text-white transition-colors duration-200"
                  aria-label="Nolan Prayagsing sur LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <NPByline />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <h2 className="text-xl font-serif font-normal text-ink-navy mb-12">{T.dna}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-cream">
            {values.map((v, i) => (
              <div key={i} className="p-8 border-b border-r border-border-cream bg-surface-white">
                <div className="w-14 h-14 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-ink-navy mb-4">{v.t}</h3>
                <p className="text-ink-gray leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mt-32 py-24 bg-surface-white border-y border-border-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-xl font-serif font-normal text-ink-navy mb-6">{T.ctaTitle}</h2>
            <p className="text-base text-ink-gray mb-12">{T.ctaSub}</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <GlowButton variant="primary" className="text-base px-8 py-4">
                {T.ctaBtn} <ArrowRight className="w-5 h-5" />
              </GlowButton>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
