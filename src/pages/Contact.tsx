import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';

// SEO: "Optialys Contact — Diagnostic gratuit cabinet fiduciaire compliance"

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    // TODO: wire to a real form handler (Formspree, Netlify Forms, etc.)
    setTimeout(() => setFormStatus('success'), 1200);
  };

  return (
    <div className="pb-20 relative z-10">

      {/* Header */}
      <section className="pt-16 pb-16 px-6 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-5 leading-tight">
            Parlons de votre cabinet.
          </h1>
          <p className="text-lg text-white/80 leading-relaxed font-light">
            Une question, un projet, ou juste savoir si Optialys peut vous aider — écrivez en dessous
            ou réservez directement un créneau de 30 minutes.
          </p>
        </motion.div>
      </section>

      {/* Form + Calendly */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Form */}
          <div className="flex-1 w-full">
            <FadeIn direction="left">
              <div className="p-8 rounded-2xl bg-brand-card/60 border border-brand-blue/15 backdrop-blur-sm">
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message reçu.</h3>
                    <p className="text-brand-gray text-sm">
                      Je reviendrai vers vous dans les 24h ouvrées.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-white mb-6">Envoyer un message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-brand-gray mb-2 uppercase tracking-wider">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/40"
                          placeholder="Nolan Prayagsing"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-brand-gray mb-2 uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/40"
                          placeholder="nolan@cabinet.be"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-brand-gray mb-2 uppercase tracking-wider">
                        Cabinet / Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/40"
                        placeholder="OmniTrust SA"
                      />
                    </div>

                    <div>
                      <label htmlFor="bottleneck" className="block text-xs font-semibold text-brand-gray mb-2 uppercase tracking-wider">
                        Quel est votre plus gros bottleneck opérationnel aujourd'hui ?
                      </label>
                      <textarea
                        id="bottleneck"
                        name="bottleneck"
                        required
                        rows={4}
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none placeholder:text-brand-gray/40"
                        placeholder="Ex. : La saisie KYC prend 20h/semaine à mon analyste, l'onboarding client dure 3 semaines..."
                      />
                    </div>

                    <GlowButton
                      type="submit"
                      className="w-full justify-center"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer'}
                      {formStatus === 'idle' && <ArrowRight className="w-4 h-4" />}
                    </GlowButton>

                    <p className="text-xs text-brand-gray text-center">
                      Réponse sous 24h ouvrées. Pas de newsletter, pas de relance commerciale automatique.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Separator */}
          <div className="hidden lg:flex flex-col items-center justify-center relative w-8 self-stretch">
            <div className="absolute inset-y-0 w-px bg-brand-blue/20" />
            <div className="relative z-10 bg-brand-navy px-2 py-1 rounded text-brand-blue/60 text-xs font-medium">ou</div>
          </div>

          {/* Calendly */}
          <div className="flex-1 w-full">
            <FadeIn direction="right">
              <CalendlyEmbed />
            </FadeIn>
          </div>

        </div>
      </section>

    </div>
  );
};
