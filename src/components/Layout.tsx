import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Linkedin } from 'lucide-react';
import { Logo, GlowButton, CustomCursor } from './ui';

const Bandeau = () => (
  <div className="w-full bg-brand-card/90 border-b border-brand-blue/10 text-center py-2 px-4 text-sm text-brand-gray backdrop-blur-sm">
    <span className="text-brand-blue font-semibold mr-2">●</span>
    Actuellement disponible pour 2 nouveaux projets en Q2 2026.
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approche', path: '/approche' },
    { name: 'Références', path: '/references' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy/95 backdrop-blur-[20px] border-b border-brand-blue/10 py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-gray">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition-colors hover:text-brand-blue ${
                location.pathname === link.path ? 'text-white' : ''
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-blue"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://calendly.com/nolprayagsing/automation-strategy-audit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlowButton className="text-sm px-5 py-2.5">
              Réserver un diagnostic <ArrowRight className="w-4 h-4 ml-1" />
            </GlowButton>
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
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
            className="absolute top-full left-0 right-0 bg-brand-navy border-b border-brand-blue/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-brand-blue' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://calendly.com/nolprayagsing/automation-strategy-audit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GlowButton className="w-full justify-center mt-4">
                Réserver un diagnostic <ArrowRight className="w-4 h-4 ml-1" />
              </GlowButton>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-navy border-t border-brand-blue/10 pt-16 pb-10 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-brand-blue to-transparent opacity-50" />
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <Logo />
          <p className="text-brand-gray text-sm leading-relaxed">
            Basé en France. Clients actifs en Belgique, Luxembourg, Suisse et France.
          </p>
          <a href="mailto:nolan@optialys.com" className="text-brand-blue hover:underline text-sm block">
            nolan@optialys.com
          </a>
          <a
            href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 hover:bg-brand-blue hover:text-brand-navy transition-colors duration-300"
            aria-label="Optialys sur LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-white font-bold mb-5">Navigation</h4>
          <ul className="space-y-3 text-sm text-brand-gray">
            <li><Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link></li>
            <li><Link to="/approche" className="hover:text-brand-blue transition-colors">Approche</Link></li>
            <li><Link to="/references" className="hover:text-brand-blue transition-colors">Références</Link></li>
            <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-white font-bold mb-5">Offres</h4>
          <ul className="space-y-3 text-sm text-brand-gray">
            <li>Optialys Core — projet 30 jours</li>
            <li>Optialys Partner — mensuel</li>
            <li>
              <a
                href="https://calendly.com/nolprayagsing/automation-strategy-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
              >
                Diagnostic gratuit (30 min)
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-white font-bold mb-5">RGPD & Légal</h4>
          <ul className="space-y-3 text-sm text-brand-gray">
            <li><Link to="/legal" className="hover:text-brand-blue transition-colors">Mentions légales</Link></li>
            <li><Link to="/legal" className="hover:text-brand-blue transition-colors">Politique de confidentialité</Link></li>
            <li className="pt-2 text-xs leading-relaxed">
              Documentation RGPD fournie pour chaque projet.
            </li>
          </ul>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="pt-8 border-t border-brand-blue/10 text-center text-sm text-brand-gray"
      >
        © {new Date().getFullYear()} Optialys — Agents IA pour cabinets réglementés en Europe
      </motion.div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-brand-navy text-white font-sans selection:bg-brand-blue/30 selection:text-white overflow-x-hidden">
    <CustomCursor />
    <div className="fixed top-0 left-0 right-0 z-50">
      <Bandeau />
      <Navbar />
    </div>
    <main className="pt-28">{children}</main>
    <Footer />
  </div>
);
