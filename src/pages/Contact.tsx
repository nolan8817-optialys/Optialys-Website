import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { useLanguage } from '../i18n/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">{t('contact.title')}</PillBadge>
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight text-ink-navy mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column - Form */}
          <div className="flex-1">
            <FadeIn direction="left" className="h-full">
              <div className="p-8 md:p-10 rounded-3xl bg-surface-white border border-border-cream h-full flex flex-col">
                <h2 className="text-3xl font-bold text-ink-navy mb-2">{t('contact.form.heading')}</h2>
                <p className="text-ink-gray mb-8">{t('contact.form.tagline')}</p>

                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 flex-1"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-ink-navy mb-2">{t('contact.form.sentTitle')}</h3>
                    <p className="text-ink-gray">
                      {t('contact.form.sentBody')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-ink-gray">{t('contact.form.firstName')} *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-ink-gray">{t('contact.form.profEmail')} *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-bold text-ink-gray">{t('contact.form.company')} *</label>
                        <input
                          type="text"
                          id="company"
                          required
                          className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="sector" className="text-sm font-bold text-ink-gray">{t('contact.form.sector')} *</label>
                        <select
                          id="sector"
                          required
                          className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors appearance-none"
                        >
                          <option value="">{t('contact.form.selectSector')}</option>
                          <option value="Real Estate">{t('contact.form.sector.realEstate')}</option>
                          <option value="Fiduciary">{t('contact.form.sector.fiduciary')}</option>
                          <option value="Consulting">{t('contact.form.sector.consulting')}</option>
                          <option value="HR">{t('contact.form.sector.hr')}</option>
                          <option value="Other">{t('contact.form.sector.other')}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 flex-1">
                      <label htmlFor="message" className="text-sm font-bold text-ink-gray">{t('contact.form.project')}</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full h-full min-h-[120px] bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors resize-none"
                        placeholder={t('contact.form.projectPlaceholder')}
                      ></textarea>
                    </div>

                    <GlowButton
                      type="submit"
                      variant="primary"
                      className="w-full justify-center mt-auto"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? t('contact.form.sending') : t('contact.form.send')}
                      {formStatus === 'idle' && <ArrowRight className="w-4 h-4 ml-2" />}
                    </GlowButton>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Separator */}
          <div className="hidden lg:flex flex-col items-center justify-center relative w-12">
            <div className="absolute inset-y-0 w-px bg-border-cream"></div>
            <div className="relative z-10 bg-bg-cream w-10 h-10 rounded-full border border-border-cream flex items-center justify-center text-ink-navy font-bold text-sm">
              {t('contact.or')}
            </div>
          </div>
          <div className="lg:hidden flex items-center justify-center relative h-12">
            <div className="absolute inset-x-0 h-px bg-border-cream"></div>
            <div className="relative z-10 bg-bg-cream px-4 py-1 rounded-full border border-border-cream text-ink-navy font-bold text-sm">
              {t('contact.or')}
            </div>
          </div>

          {/* Right Column - Calendly */}
          <div className="flex-1">
            <FadeIn direction="right" className="h-full">
              <div className="h-full flex flex-col">
                <h2 className="text-3xl font-bold text-ink-navy mb-2">{t('contact.calendly.heading')}</h2>
                <p className="text-ink-gray mb-8">{t('contact.calendly.tagline')}</p>
                <div className="flex-1">
                  <CalendlyEmbed />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
};
