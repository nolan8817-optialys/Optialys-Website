import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Linkedin } from 'lucide-react';
import { Logo, GlowButton, AsteriskDecor } from './ui';
import { useLanguage } from '../i18n/LanguageContext';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

const LangToggle = ({ className = '' }: { className?: string }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex select-none items-center gap-2 text-sm font-medium ${className}`}>
      <button
        onClick={() => setLang('fr')}
        className={`transition-colors ${lang === 'fr' ? 'font-bold text-ink-navy' : 'text-ink-gray hover:text-accent-coral'}`}
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-border-cream">|</span>
      <button
        onClick={() => setLang('en')}
        className={`transition-colors ${lang === 'en' ? 'font-bold text-ink-navy' : 'text-ink-gray hover:text-accent-coral'}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

/* Trois liens. Volontairement. Un menu qui déborde dilue l'offre. */
const NAV_LINKS = [
  { key: 'nav.methode', path: '/methode' },
  { key: 'nav.about', path: '/a-propos' },
  { key: 'nav.contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border-cream bg-bg-cream/95 py-4 backdrop-blur-[20px]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-8 text-sm font-medium text-ink-gray lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative whitespace-nowrap transition-colors hover:text-accent-coral ${
                location.pathname === link.path ? 'font-semibold text-ink-navy' : ''
              }`}
            >
              {t(link.key)}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-accent-coral"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle />
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <GlowButton variant="primary" className="px-5 py-2.5 text-sm">
              {t('nav.cta')} <ArrowRight className="ml-1 h-4 w-4" />
            </GlowButton>
          </a>
        </div>

        <button
          className="p-2 text-ink-navy lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileMenuOpen}
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
            className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-border-cream bg-bg-cream p-6 shadow-2xl lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-accent-coral/5 text-accent-coral'
                    : 'text-ink-navy hover:bg-bg-cream-alt'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="flex items-center justify-between pt-4">
              <LangToggle />
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <GlowButton variant="primary" className="mt-2 w-full justify-center">
                {t('nav.cta')} <ArrowRight className="ml-1 h-4 w-4" />
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
    <footer className="relative overflow-hidden border-t border-border-cream bg-bg-cream-alt pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Logo />
            <p className="max-w-xs text-sm text-ink-gray">{t('footer.tagline')}</p>
            <div className="space-y-2 text-sm text-ink-gray">
              <p>France</p>
              <a
                href="mailto:nolan@optialys.com"
                className="mb-6 mt-4 block text-accent-coral hover:underline"
              >
                nolan@optialys.com
              </a>
              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-coral/20 bg-accent-coral/10 text-accent-coral transition-colors duration-300 hover:bg-accent-coral hover:text-white"
                  aria-label="Optialys sur LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
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
            <h4 className="mb-6 font-bold text-ink-navy">{t('footer.navigation')}</h4>
            <ul className="space-y-3 text-sm text-ink-gray">
              <li><Link to="/" className="transition-colors hover:text-accent-coral">{t('nav.home')}</Link></li>
              <li><Link to="/methode" className="transition-colors hover:text-accent-coral">{t('nav.methode')}</Link></li>
              <li><Link to="/a-propos" className="transition-colors hover:text-accent-coral">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-accent-coral">{t('nav.contact')}</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-6 font-bold text-ink-navy">{t('footer.resources')}</h4>
            <ul className="space-y-3 text-sm text-ink-gray">
              <li><Link to="/blog" className="transition-colors hover:text-accent-coral">{t('footer.blog')}</Link></li>
              <li>
                <Link to="/solutions/voitures-collection" className="transition-colors hover:text-accent-coral">
                  {t('footer.sectors')}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-6 font-bold text-ink-navy">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm text-ink-gray">
              <li><Link to="/legal" className="transition-colors hover:text-accent-coral">{t('footer.legalNotice')}</Link></li>
              <li><Link to="/legal" className="transition-colors hover:text-accent-coral">{t('footer.privacy')}</Link></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-border-cream pt-8 text-center text-sm text-ink-gray"
        >
          <AsteriskDecor size={16} className="mr-2 inline-block align-middle opacity-60" />
          © {new Date().getFullYear()} {t('footer.copyright')}
        </motion.div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-cream font-sans text-ink-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
