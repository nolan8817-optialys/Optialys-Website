import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`flex items-center gap-3 group ${className}`}>
    <img src="/optialys-logo.webp" alt="Optialys monogram" className="h-10 w-10 object-contain" />
    <span className="font-serif font-normal text-2xl tracking-tight text-ink-navy leading-none">
      Optialys
    </span>
  </a>
);

export const Magnetic = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const middleX = clientX - (rect.left + rect.width / 2);
      const middleY = clientY - (rect.top + rect.height / 2);
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    }
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, className = "", direction = "up", ...props }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "left" | "right" | "in", [key: string]: any }) => {
  const variants = {
    up: { y: 40, opacity: 0 },
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    in: { scale: 0.85, opacity: 0 }
  };

  const initial = variants[direction];
  const animate = { y: 0, x: 0, scale: 1, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const GlowButton = ({ children, className = '', variant = 'primary', ...props }: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'electric' | 'outline' | 'dark' | 'gold';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const base = 'relative inline-flex items-center justify-center gap-2 rounded-sm font-semibold text-sm px-6 py-3 cursor-pointer transition-colors duration-200';
  const variants = {
    // CTA principal — sombre, l'or réservé aux détails (Charte)
    primary: 'bg-ink-navy text-bg-cream hover:bg-ink-navy/90',
    electric: 'bg-ink-navy text-bg-cream hover:bg-ink-navy/90',
    outline: 'border border-accent-coral text-ink-navy hover:bg-accent-peach bg-transparent',
    dark: 'bg-ink-navy text-bg-cream hover:bg-ink-navy/90',
    gold: 'bg-accent-coral text-ink-navy hover:bg-accent-coral/90',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Highlight block — mot(s) surlignés en Or Ambré
export const HighlightBlock = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`highlight-coral font-semibold ${className}`}>{children}</span>
);

// Tag de section (Charte) — Inter Bold UPPERCASE espacé, Or Ambré, sans fond
export const PillBadge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`tag-optialys inline-flex items-center ${className}`}>
    {children}
  </span>
);

// Asterisk decoratif Or Ambré 8 branches
export const AsteriskDecor = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <g fill="#D4A017">
      <rect x="11" y="1" width="2" height="22" rx="1"/>
      <rect x="1" y="11" width="22" height="2" rx="1"/>
      <rect x="3.515" y="3.515" width="2" height="17" rx="1" transform="rotate(45 3.515 3.515)"/>
      <rect x="3.515" y="17.485" width="2" height="17" rx="1" transform="rotate(-45 3.515 17.485)"/>
    </g>
  </svg>
);

// Citation encadrée (Charte) — fond Noir Encre, bordure gauche Or, Cormorant italic
export const QuoteBlock = ({
  children,
  attribution,
  className = '',
}: {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}) => (
  <figure className={`bg-ink-navy border-l-4 border-accent-coral px-8 py-7 ${className}`}>
    <blockquote className="font-serif italic text-xl md:text-2xl leading-snug text-bg-cream">
      {children}
    </blockquote>
    {attribution && (
      <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-coral">
        {attribution}
      </figcaption>
    )}
  </figure>
);

// Module numéroté (Charte) — numéro Cormorant Or, fond Beige Chaud
export const NumberedModule = ({
  number,
  title,
  children,
  dark = false,
  className = '',
}: {
  number: string | number;
  title: string;
  children?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) => (
  <div className={`${dark ? 'bg-ink-navy' : 'bg-bg-cream-alt'} p-8 md:p-10 h-full ${className}`}>
    <span className="block font-serif text-5xl leading-none text-accent-coral mb-4">{number}</span>
    <h3 className={`text-lg font-semibold mb-2 ${dark ? 'text-bg-cream' : 'text-ink-navy'}`}>{title}</h3>
    {children && (
      <p className={`leading-relaxed ${dark ? 'text-bg-cream/70' : 'text-ink-gray'}`}>{children}</p>
    )}
  </div>
);

// Indicateur de timing / jalon (Charte) — Vert Forêt, usage interne
export const TimingIndicator = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-accent-green ${className}`}>
    <span aria-hidden="true">→</span>
    {children}
  </span>
);

// Byline signature NP
export const NPByline = ({ className = '' }: { className?: string }) => (
  <div className={`inline-flex items-center gap-3 ${className}`}>
    <div className="w-8 h-8 rounded-full bg-ink-navy flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
      NP
    </div>
    <span className="text-sm text-ink-gray font-medium">Nolan Prayagsing · Optialys</span>
  </div>
);
