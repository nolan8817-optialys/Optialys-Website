import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Linkedin } from 'lucide-react';
import { Logo, GlowButton, AsteriskDecor } from './ui';
import { useLanguage } from '../i18n/LanguageContext';

const LangToggle = ({ className = '' }: { className?: string }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-2 text-sm font-medium select-none ${className}`}>
      <button
        onClick={() => setLang('fr')}
        className={`transition-colors ${lang === 'fr' ? 'text-ink-navy font-bold' : 'text-ink-gray hover:text-accent-coral'}`}
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-border-cream">|</span>
      <button
        onClick={() => setLang('en')}
        className={`transition-colors ${lang === 'en' ? 'text-ink-navy font-bold' : 'text-ink-gray hover:text-accent-coral'}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.core', path: '/optialys-core' },
    { key: 'nav.partner', path: '/optialys-partner' },
    { key: 'nav.caseStudies', path: '/case-studies' },
    { key: 'nav.diagnostic', path: '/diagnostic' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-cream/95 backdrop-blur-[20px] border-b border-border-cream py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-ink-gray">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative whitespace-nowrap transition-colors hover:text-accent-coral ${
                location.pathname === link.path ? 'text-ink-navy' : ''
              }`}
            >
              {t(link.key)}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent-coral"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LangToggle />
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="text-sm px-5 py-2.5">
              {t('nav.freeAudit')} <ArrowRight className="w-4 h-4 ml-1" />
            </GlowButton>
          </a>
        </div>

        <button
          className="lg:hidden text-ink-navy p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-cream border-b border-border-cream p-6 flex flex-col gap-4 shadow-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-accent-coral' : 'text-ink-navy'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="pt-2">
              <LangToggle />
            </div>
            <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <GlowButton variant="primary" className="w-full justify-center mt-4">
                {t('nav.freeAudit')} <ArrowRight className="w-4 h-4 ml-1" />
              </GlowButton>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-bg-cream-alt border-t border-border-cream pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Logo />
            <p className="text-ink-gray text-sm">
              {t('footer.tagline')}
            </p>
            <div className="text-sm text-ink-gray space-y-2">
              <p>🇱🇺 Luxembourg</p>
              <a href="mailto:nolan@optialys.com" className="text-accent-electric hover:underline block mt-4 mb-6">
                nolan@optialys.com
              </a>
              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-coral/10 text-accent-coral border border-accent-coral/20 hover:bg-accent-coral hover:text-white transition-colors duration-300"
                  aria-label="Optialys on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-ink-navy font-bold mb-6">{t('footer.navigation')}</h4>
            <ul className="space-y-3 text-sm text-ink-gray">
              <li><Link to="/" className="hover:text-accent-coral transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/services" className="hover:text-accent-coral transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/optialys-core" className="hover:text-accent-coral transition-colors">{t('nav.core')}</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent-coral transition-colors">{t('nav.caseStudies')}</Link></li>
              <li><Link to="/about" className="hover:text-accent-coral transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-accent-coral transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-ink-navy font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3 text-sm text-ink-gray">
              <li><Link to="/diagnostic" className="hover:text-accent-coral transition-colors">{t('footer.aiAudit')}</Link></li>
              <li><Link to="/roi-calculator" className="hover:text-accent-coral transition-colors">{t('footer.roiCalc')}</Link></li>
              <li><Link to="/optialys-core" className="hover:text-accent-coral transition-colors">{t('nav.core')}</Link></li>
              <li><Link to="/services" className="hover:text-accent-coral transition-colors">{t('footer.maintenance')}</Link></li>
              <li><Link to="/services" className="hover:text-accent-coral transition-colors">{t('footer.customDev')}</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-ink-navy font-bold mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm text-ink-gray">
              <li><Link to="/legal" className="hover:text-accent-coral transition-colors">{t('footer.legalNotice')}</Link></li>
              <li><Link to="/legal" className="hover:text-accent-coral transition-colors">{t('footer.privacy')}</Link></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-border-cream text-center text-sm text-ink-gray"
        >
          <AsteriskDecor size={16} className="inline-block mr-2 opacity-60 align-middle" />
          © {new Date().getFullYear()} {t('footer.copyright')}
        </motion.div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-bg-cream text-ink-black font-sans overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
