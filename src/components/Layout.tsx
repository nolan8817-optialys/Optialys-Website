import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Linkedin, ChevronDown } from 'lucide-react';
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
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, lang } = useLanguage();
  const fr = lang === 'fr';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close "More" dropdown on route change
  useEffect(() => {
    setMoreOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Primary links — always visible in desktop navbar
  const primaryLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.core', path: '/optialys-core' },
    { label: fr ? 'Blog' : 'Blog', path: '/blog' },
    { key: 'nav.contact', path: '/contact' },
  ];

  // Secondary links — shown in "Plus / More" dropdown
  const secondaryLinks = [
    { key: 'nav.partner', path: '/optialys-partner' },
    { key: 'nav.caseStudies', path: '/case-studies' },
    { key: 'nav.diagnostic', path: '/diagnostic' },
    { key: 'nav.about', path: '/about' },
  ];

  const allMobileLinks = [...primaryLinks, ...secondaryLinks];

  const isSecondaryActive = secondaryLinks.some(l => location.pathname === l.path);

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

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-medium text-ink-gray">
          {/* Primary links */}
          {primaryLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative whitespace-nowrap transition-colors hover:text-accent-coral ${
                location.pathname === link.path ? 'text-ink-navy font-semibold' : ''
              }`}
            >
              {link.key ? t(link.key) : link.label}
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

          {/* "Plus / More" dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`flex items-center gap-1 whitespace-nowrap transition-colors hover:text-accent-coral ${
                isSecondaryActive ? 'text-ink-navy font-semibold' : ''
              }`}
            >
              {fr ? 'Plus' : 'More'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-surface-white border border-border-cream rounded-xl shadow-xl overflow-hidden py-2"
                >
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-bg-cream hover:text-accent-coral ${
                        location.pathname === link.path ? 'text-accent-coral font-semibold bg-bg-cream' : 'text-ink-gray'
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-cream border-b border-border-cream p-6 flex flex-col gap-1 shadow-2xl lg:hidden"
          >
            {primaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent-coral bg-accent-coral/5'
                    : 'text-ink-navy hover:bg-bg-cream-alt'
                }`}
              >
                {link.key ? t(link.key) : link.label}
              </Link>
            ))}

            <div className="my-2 border-t border-border-cream" />
            <p className="px-3 text-xs font-bold text-ink-gray uppercase tracking-widest mb-1">
              {fr ? 'Autres pages' : 'More pages'}
            </p>

            {secondaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent-coral bg-accent-coral/5'
                    : 'text-ink-navy hover:bg-bg-cream-alt'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <LangToggle />
            </div>
            <a
              href="https://calendly.com/nolprayagsing/automation-strategy-audit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GlowButton variant="primary" className="w-full justify-center mt-2">
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
              <p>🇫🇷 Nice, France</p>
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
              <li><Link to="/blog" className="hover:text-accent-coral transition-colors">Blog</Link></li>
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
