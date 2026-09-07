import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Methode } from './pages/Methode';
import { APropos } from './pages/APropos';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { LanguageProvider } from './i18n/LanguageContext';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { SolutionDetail } from './pages/SolutionDetail';

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
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-bg-cream bg-dot-grid" />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/methode" element={<Methode />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />

            {/* Anciennes URLs — les 301 sont dans vercel.json ; ce filet
                évite une page blanche si une route passe au travers. */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
