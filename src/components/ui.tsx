import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`flex items-center gap-3 group ${className}`}>
    <div className="relative w-10 h-10 shrink-0">
      <img src="/optialys-logo.webp" alt="Optialys Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
    </div>
    <span className="font-sans font-bold text-2xl tracking-tight text-ink-navy">
      <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-[360deg]">O</span>ptialys
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
  variant?: 'primary' | 'electric' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const base = 'relative inline-flex items-center gap-2 rounded-full font-semibold text-sm px-6 py-3 cursor-pointer transition-all duration-200 overflow-hidden';
  const variants = {
    primary: 'bg-accent-coral text-white hover:bg-accent-coral/90',
    electric: 'bg-accent-electric text-ink-navy hover:bg-accent-electric/90',
    outline: 'border border-ink-navy/20 text-ink-navy hover:bg-ink-navy/5 bg-transparent',
  };
  const shadows = {
    primary: '0 4px 20px rgba(232,93,60,0.3)',
    electric: '0 4px 20px rgba(0,194,255,0.3)',
    outline: 'none',
  };

  return (
    <Magnetic>
      <button
        className={`${base} ${variants[variant]} ${className}`}
        style={{ boxShadow: shadows[variant] }}
        {...props}
      >
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
        )}
        {children}
      </button>
    </Magnetic>
  );
};

// Highlight block — mot(s) sur fond coral-soft
export const HighlightBlock = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`highlight-coral font-semibold ${className}`}>{children}</span>
);

// Pill badge coral — labels de section
export const PillBadge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full bg-accent-coral text-white text-xs font-bold tracking-wider uppercase ${className}`}>
    {children}
  </span>
);

// Asterisk decoratif coral 8 branches
export const AsteriskDecor = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <g fill="#E85D3C">
      <rect x="11" y="1" width="2" height="22" rx="1"/>
      <rect x="1" y="11" width="22" height="2" rx="1"/>
      <rect x="3.515" y="3.515" width="2" height="17" rx="1" transform="rotate(45 3.515 3.515)"/>
      <rect x="3.515" y="17.485" width="2" height="17" rx="1" transform="rotate(-45 3.515 17.485)"/>
    </g>
  </svg>
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
