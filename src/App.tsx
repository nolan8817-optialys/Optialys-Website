import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { OptialysCore } from './pages/OptialysCore';
import { OptialysPartner } from './pages/OptialysPartner';
import { CaseStudies } from './pages/CaseStudies';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { ROICalculator } from './pages/ROICalculator';
import { Diagnostic } from './pages/Diagnostic';
import { LanguageProvider } from './i18n/LanguageContext';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="fixed inset-0 z-[-1] bg-bg-cream bg-dot-grid pointer-events-none" />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/optialys-core" element={<OptialysCore />} />
            <Route path="/optialys-partner" element={<OptialysPartner />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
