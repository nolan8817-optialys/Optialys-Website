import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-3 group ${className}`}>
    <div className="relative w-10 h-10 shrink-0">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Center Dot */}
        <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
        {/* Inner Ring */}
        <path d="M 35 50 A 15 15 0 1 1 50 65" stroke="#00C2FF" strokeWidth="4" strokeLinecap="round" />
        <path d="M 65 50 A 15 15 0 0 0 50 35" stroke="#0098CC" strokeWidth="4" strokeLinecap="round" />
        {/* Outer Swoosh Top-Right */}
        <path d="M 25 50 A 25 25 0 0 1 65 20 L 75 10 A 35 35 0 0 0 15 50 Z" fill="#00C2FF" />
        <path d="M 65 20 L 75 25 L 70 35 Z" fill="#00C2FF" />
        {/* Outer Swoosh Bottom-Left */}
        <path d="M 75 50 A 25 25 0 0 1 35 80 L 25 90 A 35 35 0 0 0 85 50 Z" fill="#0098CC" />
        <path d="M 35 80 L 25 75 L 30 65 Z" fill="#0098CC" />
      </svg>
    </div>
    <span className="font-sans font-bold text-2xl tracking-tight text-white">
      <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-[360deg]">O</span>ptialys
    </span>
  </Link>
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

export const GlowButton = ({ children, primary = true, className = "", ...props }: any) => {
  return (
    <Magnetic>
      <motion.button
        whileHover={{ scale: 1.02, y: -3 }}
        whileTap={{ scale: 0.98 }}
        className={`relative group overflow-hidden rounded-lg px-7 py-3.5 font-bold transition-all duration-300 ${
          primary 
            ? "bg-brand-blue text-brand-navy hover:bg-brand-blue-hover shadow-[0_0_0_rgba(0,194,255,0)] hover:shadow-[0_10px_30px_rgba(0,194,255,0.4)]" 
            : "bg-brand-card text-white border border-brand-blue/20 hover:border-brand-blue/40 hover:bg-brand-blue/5"
        } ${className}`}
        {...props}
      >
        {primary && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
        <span className="relative flex items-center gap-2">{children}</span>
      </motion.button>
    </Magnetic>
  );
};

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-blue rounded-full pointer-events-none z-[100]"
        animate={{ x: mousePosition.x - 3, y: mousePosition.y - 3 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-blue rounded-full pointer-events-none z-[99]"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 194, 255, 0.1)' : 'transparent'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
};
