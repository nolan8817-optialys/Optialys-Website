import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Settings, X, Building2 } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, AsteriskDecor } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-[90vh] flex flex-col items-center justify-center text-center gap-12 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-accent-coral/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-8 w-full"
      >
        <PillBadge className="gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          {t('home.hero.badge')}
        </PillBadge>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink-navy">
          {t('home.hero.title.part1')} <br/>
          <span className="relative inline-block my-1">
            <span className="italic font-serif text-gradient-electric pr-2">{t('home.hero.title.highlight')}</span>
            <svg className="absolute w-full h-full top-0 left-0 -z-10 scale-110 text-accent-coral/40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                d="M10,50 Q50,10 90,50 Q50,90 10,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          <br/>
          {t('home.hero.title.part2')}<br/>
          <span className="text-2xl md:text-3xl text-ink-gray mt-4 block">{t('home.hero.title.part3')}</span>
        </h1>

        <p className="text-xl text-ink-gray max-w-2xl leading-relaxed mx-auto">
          {t('home.hero.subtitle.pre')}<span className="font-bold text-ink-navy border-b-2 border-accent-coral">{t('home.hero.subtitle.bold')}</span>{t('home.hero.subtitle.post')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full flex-wrap">
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
              {t('home.hero.cta.getStarted')} <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </a>
          <Link to="/diagnostic">
            <GlowButton variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-accent-green/40 text-accent-green hover:bg-accent-green/10">
              <CheckCircle2 className="w-5 h-5 text-accent-green" /> {t('home.hero.cta.diagnostic')}
            </GlowButton>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const SocialProof = () => {
  const { t } = useLanguage();
  return (
    <FadeIn>
      <section className="py-12 border-y border-border-cream bg-surface-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-ink-gray uppercase mb-8 font-mono">{t('home.social.label')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500 text-ink-navy">
            <span className="font-sans text-2xl font-bold tracking-tight">Alternative AML</span>
            <span className="font-sans text-2xl font-black tracking-widest text-accent-electric">Global IT Services PSF</span>
            <span className="font-serif text-2xl font-bold italic">Omnitrust</span>
            <span className="font-sans text-2xl font-medium lowercase tracking-wide">koosmik</span>
            <span className="font-sans text-2xl font-bold">Lybra<span className="font-light">Media</span></span>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

const Stats = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 bg-bg-cream relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-6 h-6" />, value: t('home.stats.1.value'), label: t('home.stats.1.label') },
            { icon: <Settings className="w-6 h-6" />, value: t('home.stats.2.value'), label: t('home.stats.2.label') },
            { icon: <CheckCircle2 className="w-6 h-6" />, value: t('home.stats.3.value'), label: t('home.stats.3.label') }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-surface-white border border-border-cream text-center group hover:border-accent-coral/30 transition-colors">
                <div className="w-12 h-12 mx-auto bg-accent-coral/10 rounded-full flex items-center justify-center text-accent-coral mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-accent-electric mb-2">{stat.value}</div>
                <div className="text-sm text-ink-gray font-medium">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link to="/roi-calculator" className="inline-flex items-center gap-2 text-accent-coral hover:text-ink-navy transition-colors font-medium">
              {t('home.stats.roi')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 bg-bg-cream-alt relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold text-ink-navy mb-8">{t('home.problem.title')}</h2>
            <div className="space-y-8">
              {[
                { title: t('home.problem.1.title'), desc: t('home.problem.1.desc') },
                { title: t('home.problem.2.title'), desc: t('home.problem.2.desc') },
                { title: t('home.problem.3.title'), desc: t('home.problem.3.desc') }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-navy mb-2">{item.title}</h3>
                    <p className="text-ink-gray leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="text-3xl font-bold text-accent-coral mb-8">{t('home.solution.title')}</h2>
            <div className="p-8 rounded-2xl border-2 border-accent-coral/20 bg-surface-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-coral/5 blur-[50px] rounded-full" />
              <p className="text-lg text-ink-black leading-relaxed mb-6 relative z-10">
                {t('home.solution.desc')}
              </p>
              <p className="text-lg font-bold text-accent-coral relative z-10">
                {t('home.solution.guarantee')}
              </p>
              <div className="mt-8 relative z-10">
                <Link to="/optialys-core">
                  <GlowButton variant="outline">{t('home.solution.cta')} <ArrowRight className="w-4 h-4 ml-2" /></GlowButton>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const ClientReferences = () => {
  const { t } = useLanguage();
  const clients = [
    {
      name: "Koosmik",
      sector: t('home.clients.1.sector'),
      project: t('home.clients.1.project'),
      result: t('home.clients.1.result'),
      stack: "n8n · Claude AI · Pipedrive"
    },
    {
      name: "AlternativeAML / Global IT Services PSF / OmniTrust",
      sector: t('home.clients.2.sector'),
      project: t('home.clients.2.project'),
      result: t('home.clients.2.result'),
      stack: "n8n · Claude AI · Airtable · LinkedIn API"
    },
    {
      name: "LybraMedia",
      sector: t('home.clients.3.sector'),
      project: t('home.clients.3.project'),
      result: t('home.clients.3.result'),
      stack: "Airtable · n8n · Make"
    },
    {
      name: "lafa-asbl",
      sector: t('home.clients.4.sector'),
      project: t('home.clients.4.project'),
      result: t('home.clients.4.result'),
      stack: "n8n · Google Workspace"
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-cream relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AsteriskDecor size={20} className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-ink-navy mb-4">{t('home.clients.title')}</h2>
          <p className="text-xl text-ink-gray max-w-2xl mx-auto">
            {t('home.clients.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-surface-white border border-border-cream">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-accent-coral" />
                  <h3 className="text-xl font-bold text-ink-navy">{client.name}</h3>
                </div>
                <div className="text-sm text-ink-gray mb-6">{client.sector}</div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-ink-gray uppercase mb-1">{t('home.clients.project')}</div>
                    <div className="text-ink-black font-medium">{client.project}</div>
                  </div>

                  <div className="inline-block px-3 py-1.5 rounded-lg bg-accent-electric/10 border border-accent-electric/20 text-accent-electric font-bold text-sm">
                    {client.result}
                  </div>

                  <div className="pt-4 border-t border-border-cream">
                    <div className="text-xs font-bold text-ink-gray uppercase mb-2">{t('home.clients.stack')}</div>
                    <div className="text-sm text-ink-gray font-mono">{client.stack}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 bg-bg-cream-alt relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-ink-navy mb-4">{t('home.cta.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Optialys Core */}
          <FadeIn direction="left">
            <div className="relative overflow-hidden rounded-3xl bg-surface-white border border-border-cream p-10 h-full flex flex-col group hover:border-accent-coral/30 transition-colors">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent-coral/10 text-accent-coral font-bold text-sm mb-6 self-start">
                {t('home.cta.core.badge')}
              </div>
              <h3 className="text-3xl font-bold text-ink-navy mb-4">Optialys Core™</h3>
              <p className="text-xl font-medium text-accent-coral mb-6">
                {t('home.cta.core.subtitle')}
              </p>
              <p className="text-ink-gray leading-relaxed mb-10 flex-1">
                {t('home.cta.core.desc')}
              </p>
              <Link to="/optialys-core" className="w-full">
                <GlowButton variant="primary" className="w-full">
                  {t('home.cta.discover')} <ArrowRight className="w-5 h-5 ml-2" />
                </GlowButton>
              </Link>
            </div>
          </FadeIn>

          {/* Card 2: Optialys Partner */}
          <FadeIn direction="right">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-coral to-accent-coral-soft p-10 h-full flex flex-col text-white">
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white font-bold text-sm mb-6 self-start">
                  {t('home.cta.partner.badge')}
                </div>
                <h3 className="text-3xl font-bold mb-4">Optialys Partner</h3>
                <p className="text-xl font-medium mb-6 opacity-90">
                  {t('home.cta.partner.subtitle')}
                </p>
                <p className="leading-relaxed mb-10 flex-1 font-medium opacity-80">
                  {t('home.cta.partner.desc')}
                </p>
                <Link to="/optialys-partner" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-ink-navy text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center"
                  >
                    {t('home.cta.discover')} <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <Stats />
      <ProblemSolution />
      <ClientReferences />
      <CTASection />
    </>
  );
};
