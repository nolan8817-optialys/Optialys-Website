import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Boxes, RefreshCw, CheckCircle2 } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

export const Services = () => {
  const { t, lang } = useLanguage();
  const fr = lang === 'fr';
  useSEO({
    title: fr
      ? 'La méthode Optialys — Du diagnostic au pilotage temps réel'
      : 'The Optialys method — From diagnostic to real-time piloting',
    description: fr
      ? 'Diagnostic Rentabilité, infrastructure sur mesure et partenariat mensuel pour ateliers et services haut de gamme. On connecte vos outils, vous pilotez votre marge.'
      : 'Profitability Diagnostic, custom infrastructure and monthly partnership for high-end workshops and services. We connect your tools, you pilot your margin.',
    canonical: 'https://optialys.com/services',
  });

  const steps = [
    {
      id: 'diagnostic',
      icon: <Search className="w-10 h-10" />,
      badge: t('services.custom.badge'),
      title: t('services.custom.title'),
      desc: t('services.custom.desc'),
      includes: [] as string[],
      cta: t('services.custom.cta'),
      link: CALENDLY,
    },
    {
      id: 'core',
      icon: <Boxes className="w-10 h-10" />,
      badge: t('services.core.badge'),
      title: t('services.core.cta'),
      desc: t('services.core.desc'),
      includes: [t('services.core.inc.1'), t('services.core.inc.2'), t('services.core.inc.3')],
      cta: t('services.core.cta'),
      link: '/optialys-core',
    },
    {
      id: 'partner',
      icon: <RefreshCw className="w-10 h-10" />,
      badge: t('services.partner.badge'),
      title: t('services.partner.cta'),
      desc: t('services.partner.desc'),
      includes: [t('services.partner.inc.1'), t('services.partner.inc.2'), t('services.partner.inc.3')],
      cta: t('services.partner.cta'),
      link: '/optialys-partner',
    },
  ];

  const tools = [
    'CRM', 'Logiciel de chantier', 'Facturation', 'Excel / Google Sheets',
    'Email', 'Agenda', 'Messagerie équipe', 'Suivi temps & pointage',
  ];

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">{t('services.hero.eyebrow')}</PillBadge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-navy mb-6">
            {t('services.page.title')}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl">
            {t('services.page.subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <FadeIn key={step.id}>
              <div className="flex flex-col h-full p-8 bg-surface-white border border-border-cream">
                <div className="w-16 h-16 rounded-sm bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-8">
                  {step.icon}
                </div>

                <span className="inline-block px-3 py-1 rounded-sm bg-bg-cream border border-border-cream text-xs font-bold text-accent-coral mb-5 self-start uppercase tracking-wider">
                  {step.badge}
                </span>
                <h2 className="text-2xl font-bold text-ink-navy mb-4">{step.title}</h2>
                <p className="text-ink-gray leading-relaxed mb-8 flex-1">{step.desc}</p>

                {step.includes.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {step.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink-gray text-sm">
                        <CheckCircle2 className="w-5 h-5 text-accent-coral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {step.link.startsWith('http') ? (
                  <a href={step.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <GlowButton variant="primary" className="w-full">
                      {step.cta} <ArrowRight className="w-4 h-4" />
                    </GlowButton>
                  </a>
                ) : (
                  <Link to={step.link} className="mt-auto">
                    <GlowButton variant="outline" className="w-full">
                      {step.cta} <ArrowRight className="w-4 h-4" />
                    </GlowButton>
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-32 py-24 bg-surface-white border-y border-border-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink-navy mb-4">{t('services.stack.title')}</h2>
            <p className="text-ink-gray mb-12">{t('services.stack.subtitle')}</p>

            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, i) => (
                <span key={i} className="px-5 py-2.5 rounded-sm bg-bg-cream border border-border-cream text-ink-navy font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-navy mb-8">{t('services.cta.book')}</h2>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="text-base px-8 py-4">
              {t('home.hero.cta.primary')} <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </a>
        </FadeIn>
      </section>
    </div>
  );
};
