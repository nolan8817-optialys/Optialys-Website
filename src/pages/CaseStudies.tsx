import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Car, Plane, Hammer, Sparkles, Target, Wrench, TrendingUp } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

export const CaseStudies = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  useSEO({
    title: fr
      ? 'Pour qui — Ateliers et services haut de gamme | Optialys'
      : 'For whom — High-end workshops and services | Optialys',
    description: fr
      ? 'Optialys accompagne les ateliers de rénovation (yachts, voitures de collection, jets, mobilier sur mesure), conciergeries et services premium dont les outils ne se parlent pas.'
      : 'Optialys works with restoration workshops (yachts, classic cars, jets, bespoke furniture), concierge and premium services whose tools don\'t talk to each other.',
    canonical: 'https://optialys.com/case-studies',
  });

  const segments = fr ? [
    { slug: "renovation-yachts", icon: <Anchor className="w-7 h-7" />, name: "Rénovation de yachts", desc: "Refits longs, équipes terrain, achats lourds. Le suivi des heures et du budget pièces décide de la marge — et reste invisible jusqu'à la livraison." },
    { slug: "voitures-collection", icon: <Car className="w-7 h-7" />, name: "Voitures de collection", desc: "Restaurations sur mesure, pièces rares, devis qui s'étalent dans le temps. Chaque heure et chaque achat doivent être rattachés au bon véhicule." },
    { slug: "jets-aeronautique", icon: <Plane className="w-7 h-7" />, name: "Jets & aéronautique", desc: "Interventions techniques exigeantes, traçabilité critique, marges serrées. La donnée terrain doit remonter en temps réel, pas le lendemain." },
    { slug: "mobilier-sur-mesure", icon: <Hammer className="w-7 h-7" />, name: "Mobilier sur mesure", desc: "Ateliers d'ébénisterie et de fabrication haut de gamme. Suivi des commandes, des délais et de la rentabilité par projet." },
    { slug: "conciergerie-luxe", icon: <Sparkles className="w-7 h-7" />, name: "Conciergeries & services premium", desc: "Demandes clients multicanal, prestations multiples, équipes mobiles. Tout doit être centralisé, assigné et suivi sans rien perdre." },
  ] : [
    { slug: "renovation-yachts", icon: <Anchor className="w-7 h-7" />, name: "Yacht refit", desc: "Long refits, field teams, heavy purchases. Tracking hours and the parts budget decides the margin — and stays invisible until delivery." },
    { slug: "voitures-collection", icon: <Car className="w-7 h-7" />, name: "Classic cars", desc: "Bespoke restorations, rare parts, quotes that stretch over time. Every hour and purchase must be tied to the right vehicle." },
    { slug: "jets-aeronautique", icon: <Plane className="w-7 h-7" />, name: "Jets & aerospace", desc: "Demanding technical work, critical traceability, tight margins. Field data must flow up in real time, not the next day." },
    { slug: "mobilier-sur-mesure", icon: <Hammer className="w-7 h-7" />, name: "Bespoke furniture", desc: "High-end joinery and fabrication workshops. Tracking orders, deadlines and profitability per project." },
    { slug: "conciergerie-luxe", icon: <Sparkles className="w-7 h-7" />, name: "Concierge & premium services", desc: "Multichannel client requests, multiple services, mobile teams. Everything must be centralized, assigned and tracked without losing anything." },
  ];

  const profile = fr ? [
    { label: "Taille d'équipe", value: "10 à 40 collaborateurs" },
    { label: "Taille des projets", value: "30 000 € à 500 000 €" },
    { label: "Profil", value: "Dirigeants d'ateliers et services haut de gamme" },
  ] : [
    { label: "Team size", value: "10 to 40 people" },
    { label: "Project size", value: "€30,000 to €500,000" },
    { label: "Profile", value: "Owners of high-end workshops and services" },
  ];

  const transformation = fr ? [
    { icon: <Target className="w-6 h-6" />, before: "Marge découverte à la facture finale", after: "Marge par chantier visible en temps réel" },
    { icon: <Wrench className="w-6 h-6" />, before: "Données dispersées dans dix outils", after: "Tout remonte dans un système central" },
    { icon: <TrendingUp className="w-6 h-6" />, before: "Décisions prises sur des chiffres d'hier", after: "Décisions prises sur les chiffres du jour" },
  ] : [
    { icon: <Target className="w-6 h-6" />, before: "Margin discovered on the final invoice", after: "Margin per project visible in real time" },
    { icon: <Wrench className="w-6 h-6" />, before: "Data scattered across ten tools", after: "Everything flows into one central system" },
    { icon: <TrendingUp className="w-6 h-6" />, before: "Decisions made on yesterday's numbers", after: "Decisions made on today's numbers" },
  ];

  const T = {
    eyebrow: fr ? "Pour qui" : "For whom",
    title: fr ? "Pour les ateliers où chaque heure compte" : "For workshops where every hour counts",
    subtitle: fr ? "Optialys est conçu pour les ateliers et services haut de gamme dont les outils ne se parlent pas — et dont la marge en souffre." : "Optialys is built for high-end workshops and services whose tools don't talk to each other — and whose margin suffers for it.",
    segmentsTitle: fr ? "Les métiers qu'on accompagne" : "The trades we work with",
    profileTitle: fr ? "Le profil type" : "The typical profile",
    transfoTitle: fr ? "Ce qui change" : "What changes",
    before: fr ? "Avant" : "Before",
    after: fr ? "Après" : "After",
    ctaTitle: fr ? "Votre atelier est dans la liste ?" : "Is your workshop on the list?",
    ctaBtn: fr ? "Réserver un Diagnostic" : "Book a Diagnostic",
  };

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">{T.eyebrow}</PillBadge>
          <h1 className="text-lg md:text-xl font-serif font-normal text-ink-navy mb-6">{T.title}</h1>
          <p className="text-base text-ink-gray leading-relaxed max-w-2xl">{T.subtitle}</p>
        </motion.div>
      </section>

      {/* Segments */}
      <section className="px-6 max-w-6xl mx-auto mb-28">
        <h2 className="text-lg md:text-xl font-serif font-normal text-ink-navy mb-12">{T.segmentsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-cream">
          {segments.map((seg, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <Link
                to={`/solutions/${seg.slug}`}
                className="group block p-8 border-b border-r border-border-cream bg-surface-white h-full hover:bg-bg-cream transition-colors"
              >
                <div className="w-12 h-12 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-6">
                  {seg.icon}
                </div>
                <h3 className="text-xl font-bold text-ink-navy mb-3 group-hover:text-accent-coral transition-colors">{seg.name}</h3>
                <p className="text-ink-gray leading-relaxed text-sm mb-4">{seg.desc}</p>
                <span className="inline-flex items-center gap-2 text-accent-coral font-semibold text-sm">
                  {fr ? 'Voir cette page' : 'View this page'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Profile */}
      <section className="px-6 max-w-5xl mx-auto mb-28">
        <h2 className="text-lg md:text-xl font-serif font-normal text-ink-navy mb-12">{T.profileTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="p-8 bg-surface-white border border-border-cream h-full">
                <div className="text-xs font-bold uppercase tracking-wider text-ink-gray mb-3">{p.label}</div>
                <div className="text-2xl font-bold text-ink-navy">{p.value}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Transformation */}
      <section className="py-24 px-6 bg-surface-white border-y border-border-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg md:text-xl font-serif font-normal text-ink-navy mb-12">{T.transfoTitle}</h2>
          <div className="space-y-4">
            {transformation.map((row, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr] items-center gap-4 md:gap-6 p-6 bg-bg-cream border border-border-cream">
                  <div className="w-11 h-11 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral">
                    {row.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink-gray mb-1">{T.before}</div>
                    <div className="text-ink-gray">{row.before}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent-coral hidden md:block" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-accent-coral mb-1">{T.after}</div>
                    <div className="text-ink-navy font-medium">{row.after}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-serif font-normal text-ink-navy mb-8">{T.ctaTitle}</h2>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="text-base px-8 py-4">
              {T.ctaBtn} <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </a>
        </FadeIn>
      </section>
    </div>
  );
};
