import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code, CheckCircle2, Users } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      id: "core",
      icon: <Zap className="w-12 h-12" />,
      badge: t('services.core.badge'),
      title: "Optialys Core™",
      desc: t('services.core.desc'),
      includes: [
        t('services.core.inc.1'),
        t('services.core.inc.2'),
        t('services.core.inc.3')
      ],
      cta: t('services.core.cta'),
      link: "/optialys-core"
    },
    {
      id: "partner",
      icon: <Users className="w-12 h-12" />,
      badge: t('services.partner.badge'),
      title: "Optialys Partner",
      desc: t('services.partner.desc'),
      includes: [
        t('services.partner.inc.1'),
        t('services.partner.inc.2'),
        t('services.partner.inc.3')
      ],
      cta: t('services.partner.cta'),
      link: "/optialys-partner"
    }
  ];

  const additionalService = {
    id: "custom",
    icon: <Code className="w-12 h-12" />,
    badge: t('services.custom.badge'),
    title: t('services.custom.title'),
    desc: t('services.custom.desc'),
    cta: t('services.custom.cta'),
    link: "https://calendly.com/nolprayagsing/automation-strategy-audit"
  };

  const techStack = [
    "n8n", "Claude AI", "GPT-4", "Airtable", "Google Workspace",
    "WhatsApp Business API", "Slack", "Apollo.io", "Pipedrive",
    "Dropcontact", "LinkedIn API", "Make (migration)"
  ];

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">{t('services.page.title')}</PillBadge>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-ink-navy mb-6">
            {t('services.page.title')}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
            {t('services.page.subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="flex flex-col h-full p-10 rounded-3xl bg-surface-white border border-border-cream hover:border-accent-coral/30 transition-colors">
                <div className="w-20 h-20 rounded-2xl bg-accent-coral/10 flex items-center justify-center text-accent-coral mb-8">
                  {service.icon}
                </div>

                <span className="inline-block px-4 py-1.5 rounded-full bg-bg-cream border border-accent-coral/20 text-sm font-bold text-accent-coral mb-6 self-start">
                  {service.badge}
                </span>
                <h2 className="text-3xl font-bold text-ink-navy mb-4">{service.title}</h2>
                <p className="text-lg text-ink-gray leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>

                <div className="bg-bg-cream border border-border-cream rounded-xl p-6 mb-8">
                  <h4 className="text-ink-navy font-bold mb-4">{t('services.keyPoints')}</h4>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink-gray">
                        <CheckCircle2 className="w-5 h-5 text-accent-coral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.cta && service.link && (
                  service.link.startsWith('http') ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                      <GlowButton variant="primary" className="w-full">
                        {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                      </GlowButton>
                    </a>
                  ) : (
                    <Link to={service.link} className="mt-auto">
                      <GlowButton variant="dark" className="w-full justify-center">
                        {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                      </GlowButton>
                    </Link>
                  )
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Additional Service Separator */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="h-px bg-gradient-to-r from-transparent via-border-cream to-transparent w-full" />
      </div>

      <section className="px-6 max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row gap-8 items-center p-10 rounded-3xl bg-surface-white border border-border-cream">
            <div className="w-20 h-20 rounded-2xl bg-accent-electric/10 flex items-center justify-center text-accent-electric shrink-0">
              {additionalService.icon}
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-bg-cream border border-accent-coral/20 text-xs font-bold text-accent-coral mb-4">
                {additionalService.badge}
              </span>
              <h3 className="text-2xl font-bold text-ink-navy mb-3">{t('services.custom.label')} — {additionalService.title}</h3>
              <p className="text-ink-gray leading-relaxed mb-6">
                {additionalService.desc}
              </p>
              <a href={additionalService.link} target="_blank" rel="noopener noreferrer">
                <GlowButton variant="outline" className="w-full sm:w-auto">
                  {additionalService.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </GlowButton>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mt-32 py-24 bg-bg-cream-alt border-y border-border-cream">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-ink-navy mb-4">{t('services.stack.title')}</h2>
            <p className="text-ink-gray mb-12">{t('services.stack.subtitle')}</p>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, i) => (
                <span key={i} className="px-6 py-3 rounded-xl bg-surface-white border border-border-cream text-ink-navy font-mono font-medium hover:border-accent-coral/40 hover:text-accent-coral transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
