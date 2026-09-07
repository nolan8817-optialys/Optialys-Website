import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { FadeIn, GlowButton, EyebrowRule } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

/* Clé Web3Forms — sans elle le formulaire n'a aucun moyen d'envoyer quoi que
   ce soit. On ne simule JAMAIS un envoi réussi : si la clé manque, on affiche
   l'erreur et l'adresse email. */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-lg border border-border-cream bg-bg-cream px-4 py-3 text-ink-navy transition-colors focus:border-accent-coral focus:outline-none';
const labelClass = 'text-sm font-semibold text-ink-gray';

export const Contact = () => {
  const { t, lang } = useLanguage();
  const fr = lang === 'fr';
  const [status, setStatus] = useState<Status>('idle');

  useSEO({
    title: fr ? 'Contact — Optialys' : 'Contact — Optialys',
    description: fr
      ? 'Quinze minutes en visio. Vous décrivez un chantier récent, je vous dis où je regarderais en premier.'
      : 'Fifteen minutes on a video call. You describe a recent job, I tell you where I would look first.',
    canonical: 'https://optialys.com/contact',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'Optialys — nouvelle demande depuis le site');
    formData.append('from_name', 'Site Optialys');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setStatus(res.ok && data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-bg-cream">
      <section className="hero-halo border-b border-border-cream px-6 pt-36 pb-20 md:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowRule align="center" className="mb-10">
            {t('contact.eyebrow')}
          </EyebrowRule>
          <h1 className="display-1 text-ink-navy">
            <span className="block">{t('contact.title.line1')}</span>
            <span className="display-accent block">{t('contact.title.line2')}</span>
          </h1>
          <p className="lead mx-auto mt-9 max-w-xl">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative flex flex-col gap-12 lg:flex-row">
          {/* Formulaire */}
          <div className="flex-1">
            <FadeIn direction="left" className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border-cream bg-surface-white p-8 md:p-10">
                <h2 className="display-3 mb-2 text-ink-navy">{t('contact.form.heading')}</h2>
                <p className="mb-8 text-ink-gray">{t('contact.form.tagline')}</p>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-1 flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-green/10 text-accent-green">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="display-3 mb-2 text-ink-navy">
                      {t('contact.form.sentTitle')}
                    </h3>
                    <p className="text-ink-gray">{t('contact.form.sentBody')}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-6">
                    {/* Anti-spam Web3Forms */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className={labelClass}>
                          {t('contact.form.firstName')} *
                        </label>
                        <input type="text" id="name" name="name" required className={fieldClass} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className={labelClass}>
                          {t('contact.form.profEmail')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="company" className={labelClass}>
                          {t('contact.form.company')} *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className={fieldClass}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="sector" className={labelClass}>
                          {t('contact.form.sector')} *
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          required
                          defaultValue=""
                          className={`${fieldClass} appearance-none`}
                        >
                          <option value="" disabled>
                            {t('contact.form.selectSector')}
                          </option>
                          <option>{t('contact.form.sector.classicCars')}</option>
                          <option>{t('contact.form.sector.bodywork')}</option>
                          <option>{t('contact.form.sector.furniture')}</option>
                          <option>{t('contact.form.sector.otherWorkshop')}</option>
                          <option>{t('contact.form.sector.other')}</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <label htmlFor="message" className={labelClass}>
                        {t('contact.form.project')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className={`${fieldClass} h-full min-h-[130px] resize-none`}
                        placeholder={t('contact.form.projectPlaceholder')}
                      />
                    </div>

                    {status === 'error' && (
                      <div
                        role="alert"
                        className="flex gap-3 rounded-lg border border-accent-coral/40 bg-accent-peach/40 p-4"
                      >
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent-coral" />
                        <div className="text-sm text-ink-navy">
                          <p className="font-semibold">{t('contact.form.errorTitle')}</p>
                          <p className="mt-1 text-ink-gray">{t('contact.form.errorBody')}</p>
                        </div>
                      </div>
                    )}

                    <GlowButton
                      type="submit"
                      variant="primary"
                      className="mt-auto w-full justify-center"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting'
                        ? t('contact.form.sending')
                        : status === 'error'
                          ? t('contact.form.retry')
                          : t('contact.form.send')}
                      {status === 'idle' && <ArrowRight className="ml-2 h-4 w-4" />}
                    </GlowButton>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Séparateur */}
          <div className="relative hidden w-12 flex-col items-center justify-center lg:flex">
            <div className="absolute inset-y-0 w-px bg-border-cream" />
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border-cream bg-bg-cream text-sm font-bold text-ink-navy">
              {t('contact.or')}
            </div>
          </div>
          <div className="relative flex h-12 items-center justify-center lg:hidden">
            <div className="absolute inset-x-0 h-px bg-border-cream" />
            <div className="relative z-10 rounded-full border border-border-cream bg-bg-cream px-4 py-1 text-sm font-bold text-ink-navy">
              {t('contact.or')}
            </div>
          </div>

          {/* Calendly */}
          <div className="flex-1">
            <FadeIn direction="right" className="h-full">
              <div className="flex h-full flex-col">
                <h2 className="display-3 mb-2 text-ink-navy">
                  {t('contact.calendly.heading')}
                </h2>
                <p className="mb-8 text-ink-gray">{t('contact.calendly.tagline')}</p>
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
