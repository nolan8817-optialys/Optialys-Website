import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Approche } from './pages/Approche';
import { References } from './pages/References';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
// Legacy pages kept for direct-link compatibility
import { Services } from './pages/Services';
import { OptialysCore } from './pages/OptialysCore';
import { OptialysPartner } from './pages/OptialysPartner';
import { About } from './pages/About';
import { ROICalculator } from './pages/ROICalculator';
import { Diagnostic } from './pages/Diagnostic';

// --- Background Effects ---

const FlowLine = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.2]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none flex justify-center overflow-hidden opacity-25">
      <svg className="w-full h-full max-w-7xl" viewBox="0 0 1000 2000" preserveAspectRatio="xMidYMin slice">
        <motion.path
          d="M 500 0 C 700 300, 300 600, 500 1000 C 700 1400, 300 1700, 500 2000"
          fill="none"
          stroke="url(#flow-gradient)"
          strokeWidth="2"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="flow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00C2FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#0098CC" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const BackgroundEffects = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-fluid-flow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-beam-texture" />
      <FlowLine />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] rounded-full bg-brand-accent/5 blur-[100px]"
      />
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-blue/15 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <BackgroundEffects />
      <Layout>
        <Routes>
          {/* Primary routes */}
          <Route path="/" element={<Home />} />
          <Route path="/approche" element={<Approche />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />

          {/* Legacy routes — kept for backwards compatibility */}
          <Route path="/services" element={<Services />} />
          <Route path="/optialys-core" element={<OptialysCore />} />
          <Route path="/optialys-partner" element={<OptialysPartner />} />
          <Route path="/about" element={<About />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/case-studies" element={<Navigate to="/references" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
