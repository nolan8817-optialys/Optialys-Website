import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { blogArticles, getCategoryColor } from '../data/blog';

// ─── SVG Visuals per article ───────────────────────────────────────────────

const VisualBudgetAlert = () => (
  <div className="my-10 p-8 bg-surface-white border border-border-cream">
    <p className="text-xs font-bold text-ink-gray uppercase tracking-widest mb-6">Budget consommé sur un chantier</p>
    <svg viewBox="0 0 500 120" className="w-full max-w-lg mx-auto block" aria-hidden="true">
      {/* Track */}
      <rect x="0" y="40" width="460" height="26" fill="#1A1A2E" opacity="0.06" />
      {/* Consumed */}
      <motion.rect x="0" y="40" height="26" fill="#E8562A"
        initial={{ width: 0 }} whileInView={{ width: 386 }} viewport={{ once: true }} transition={{ duration: 1 }} />
      {/* Threshold marker at 80% */}
      <line x1="368" y1="30" x2="368" y2="76" stroke="#1A1A2E" strokeWidth="2" strokeDasharray="3 3" />
      <text x="368" y="22" fontSize="10" fill="#1A1A2E" fontFamily="monospace" textAnchor="middle">seuil 80%</text>
      <text x="0" y="96" fontSize="11" fill="#5A5A66" fontFamily="monospace">0 €</text>
      <text x="430" y="96" fontSize="11" fill="#5A5A66" fontFamily="monospace">budget</text>
    </svg>
    <div className="flex items-center gap-3 mt-4 p-3 bg-accent-coral/10 border border-accent-coral/20">
      <span className="text-xl">⚠️</span>
      <span className="text-sm font-bold text-ink-navy">Alerte automatique : 84% du budget consommé — il reste 3 semaines de chantier.</span>
    </div>
  </div>
);

const VisualConnect = () => {
  const tools = ['CRM', 'Chantier', 'Facturation', 'Excel', 'Agenda', 'Terrain'];
  return (
    <div className="my-10 p-8 bg-surface-white border border-border-cream">
      <p className="text-xs font-bold text-ink-gray uppercase tracking-widest mb-8 text-center">Vos outils → un système central</p>
      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6">
        {tools.map((tool, i) => (
          <div key={i} className="py-3 text-center bg-bg-cream border border-border-cream text-xs font-bold text-ink-navy">
            {tool}
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <svg width="20" height="28" viewBox="0 0 20 28" aria-hidden="true">
          <path d="M10 0 V20 M2 14 L10 22 L18 14" stroke="#E8562A" strokeWidth="2.5" fill="none" />
        </svg>
      </div>
      <div className="max-w-md mx-auto py-5 text-center bg-ink-navy text-white font-bold tracking-tight">
        Système central · vision temps réel
      </div>
    </div>
  );
};

const VisualPaperVsLive = () => (
  <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="p-6 bg-surface-white border border-border-cream">
      <div className="text-xs font-bold text-ink-gray uppercase tracking-widest mb-3">Carnet papier</div>
      <div className="text-4xl font-black text-ink-gray mb-1">+1 jour</div>
      <p className="text-sm text-ink-gray">Saisie le soir, encodée le lendemain. Vous décidez sur les chiffres d'hier.</p>
    </div>
    <div className="p-6 bg-surface-white border border-accent-coral">
      <div className="text-xs font-bold text-accent-coral uppercase tracking-widest mb-3">Saisie mobile</div>
      <div className="text-4xl font-black text-accent-coral mb-1">temps réel</div>
      <p className="text-sm text-ink-navy">Saisie une fois sur le terrain. L'information remonte immédiatement partout.</p>
    </div>
  </div>
);

const visuals: Record<string, React.FC> = {
  'chantiers-depassent-budget-sans-alerte': VisualBudgetAlert,
  'connecter-vos-outils-sans-les-remplacer': VisualConnect,
  'fin-du-papier-donnees-terrain-temps-reel': VisualPaperVsLive,
};

// ─── Main Component ────────────────────────────────────────────────────────

const formatDate = (dateStr: string, lang: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
};

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const article = blogArticles.find(a => a.slug === slug);

  // Update document meta for SEO
  useEffect(() => {
    if (!article) return;
    const title = fr ? article.seoTitle.fr : article.seoTitle.en;
    const desc = fr ? article.seoDescription.fr : article.seoDescription.en;
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);

    // JSON-LD structured data
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": fr ? article.title.fr : article.title.en,
      "description": fr ? article.seoDescription.fr : article.seoDescription.en,
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": "Nolan Prayagsing",
        "url": "https://optialys.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Optialys",
        "url": "https://optialys.com"
      },
      "keywords": article.keywords.join(', '),
      "inLanguage": fr ? "fr-FR" : "en-GB",
      "mainEntityOfPage": `https://optialys.com/blog/${article.slug}`
    };

    let scriptTag = document.getElementById('blog-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'blog-schema';
      (scriptTag as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    const faqList = fr ? article.faq?.fr : article.faq?.en;
    const graph: Record<string, unknown>[] = [schema];
    if (faqList && faqList.length > 0) {
      graph.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqList.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      });
    }
    scriptTag.textContent = JSON.stringify(graph.length === 1 ? schema : graph);

    return () => {
      document.title = 'Optialys — Infrastructure opérationnelle pour ateliers haut de gamme';
      document.getElementById('blog-schema')?.remove();
    };
  }, [article, fr]);

  if (!article) return <Navigate to="/blog" replace />;

  const Visual = visuals[article.slug];
  const categoryColor = getCategoryColor(article.categoryKey);
  const content = fr ? article.content.fr : article.content.en;

  const otherArticles = blogArticles.filter(a => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-ink-gray hover:text-accent-coral transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {fr ? 'Retour au blog' : 'Back to blog'}
        </Link>
      </div>

      {/* Article header */}
      <header className="max-w-3xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${categoryColor}`}>
              {fr ? article.category.fr : article.category.en}
            </span>
            <span className="flex items-center gap-1 text-xs text-ink-gray">
              <Calendar className="w-3 h-3" />
              {formatDate(article.date, lang)}
            </span>
            <span className="flex items-center gap-1 text-xs text-ink-gray">
              <Clock className="w-3 h-3" />
              {article.readTime} min
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-ink-navy leading-tight mb-6">
            {fr ? article.title.fr : article.title.en}
          </h1>

          <p className="text-xl text-ink-gray leading-relaxed border-l-4 border-accent-coral pl-5">
            {fr ? article.excerpt.fr : article.excerpt.en}
          </p>
        </motion.div>
      </header>

      {/* Visual illustration */}
      {Visual && (
        <div className="max-w-3xl mx-auto px-6">
          <Visual />
        </div>
      )}

      {/* Article content */}
      <FadeIn>
        <article
          className="max-w-3xl mx-auto px-6 prose-optialys"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </FadeIn>

      {/* Author byline */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="flex items-center gap-4 p-6 bg-surface-white border border-border-cream rounded-2xl">
          <img
            src="/nolan-headshot.jpg"
            alt="Nolan Prayagsing"
            className="w-14 h-14 rounded-full object-cover object-top shrink-0"
          />
          <div>
            <div className="font-bold text-ink-navy">Nolan Prayagsing</div>
            <div className="text-sm text-ink-gray">
              {fr
                ? 'Fondateur Optialys · Infrastructure opérationnelle pour ateliers haut de gamme'
                : 'Founder Optialys · Operational infrastructure for high-end workshops'}
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs text-accent-coral hover:underline font-medium"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="p-10 bg-ink-navy text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white mb-4">
            {fr
              ? 'Prêt à piloter votre marge en temps réel ?'
              : 'Ready to pilot your margin in real time?'}
          </h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed max-w-md mx-auto">
            {fr
              ? 'Diagnostic Rentabilité de 2h — on chiffre vos pertes concrètes et on vous remet un plan d\'action.'
              : 'A 2-hour Profitability Diagnostic — we quantify your concrete leaks and hand you an action plan.'}
          </p>
          <a
            href="https://calendly.com/nolprayagsing/automation-strategy-audit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlowButton variant="primary">
              {fr ? 'Réserver le Diagnostic — 500 €' : 'Book the Diagnostic — €500'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </GlowButton>
          </a>
        </div>
      </div>

      {/* Related articles */}
      {otherArticles.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <h2 className="text-xl font-bold text-ink-navy mb-6">
            {fr ? 'Autres articles' : 'More articles'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.map(other => (
              <Link
                key={other.slug}
                to={`/blog/${other.slug}`}
                className="p-6 bg-surface-white border border-border-cream rounded-2xl hover:border-accent-coral/30 transition-colors group"
              >
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border mb-3 ${getCategoryColor(other.categoryKey)}`}>
                  {fr ? other.category.fr : other.category.en}
                </span>
                <h3 className="text-sm font-bold text-ink-navy group-hover:text-accent-coral transition-colors leading-snug">
                  {fr ? other.title.fr : other.title.en}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
