import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Contact Optialys
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Ready to automate your processes and free up your time? Let's discuss your AI project.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column - Form */}
          <div className="flex-1">
            <FadeIn direction="left" className="h-full">
              <div className="p-8 md:p-10 rounded-3xl bg-brand-card/50 border border-brand-blue/20 backdrop-blur-sm h-full flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-2">Prefer to write?</h2>
                <p className="text-brand-gray mb-8">Send us a message and we will reply within 24 hours.</p>
                
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 flex-1"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                    <p className="text-brand-gray">
                      We will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-brand-gray">First Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-brand-gray">Professional Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-bold text-brand-gray">Company *</label>
                        <input 
                          type="text" 
                          id="company" 
                          required
                          className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="sector" className="text-sm font-bold text-brand-gray">Sector *</label>
                        <select 
                          id="sector" 
                          required
                          className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                        >
                          <option value="">Select a sector</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Fiduciary">Fiduciary</option>
                          <option value="Consulting">Consulting</option>
                          <option value="HR">HR</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 flex-1">
                      <label htmlFor="message" className="text-sm font-bold text-brand-gray">Your Project</label>
                      <textarea 
                        id="message" 
                        required
                        rows={5}
                        className="w-full h-full min-h-[120px] bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                        placeholder="Briefly describe your current processes and what you would like to automate..."
                      ></textarea>
                    </div>

                    <GlowButton 
                      type="submit" 
                      className="w-full justify-center mt-auto"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send message'} 
                      {!formStatus && <ArrowRight className="w-4 h-4 ml-2" />}
                    </GlowButton>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Separator */}
          <div className="hidden lg:flex flex-col items-center justify-center relative w-12">
            <div className="absolute inset-y-0 w-px bg-brand-blue/30"></div>
            <div className="relative z-10 bg-brand-navy-2 w-10 h-10 rounded-full border border-brand-blue/30 flex items-center justify-center text-brand-blue font-bold text-sm">
              or
            </div>
          </div>
          <div className="lg:hidden flex items-center justify-center relative h-12">
            <div className="absolute inset-x-0 h-px bg-brand-blue/30"></div>
            <div className="relative z-10 bg-brand-navy-2 px-4 py-1 rounded-full border border-brand-blue/30 text-brand-blue font-bold text-sm">
              or
            </div>
          </div>

          {/* Right Column - Calendly */}
          <div className="flex-1">
            <FadeIn direction="right" className="h-full">
              <div className="h-full flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-2">Prefer to book directly?</h2>
                <p className="text-brand-gray mb-8">Schedule an appointment in our calendar for a live discussion.</p>
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
