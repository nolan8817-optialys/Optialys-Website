import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { blogArticles, getCategoryColor } from '../data/blog';

// ─── SVG Visuals per article ───────────────────────────────────────────────

const VisualLeadResponse = () => (
  <div className="my-10 p-8 bg-surface-white border border-border-cream rounded-2xl">
    <p className="text-xs font-bold text-ink-gray uppercase tracking-widest mb-6 text-center">Comparaison délai de réponse</p>
    <svg viewBox="0 0 500 160" className="w-full max-w-lg mx-auto block" aria-hidden="true">
      {/* Traditional - slow bar */}
      <text x="0" y="28" fontSize="11" fill="#6B6B6B" fontFamily="monospace">Sans IA</text>
      <rect x="0" y="36" width="420" height="28" rx="6" fill="#0A1628" opacity="0.08" />
      <rect x="0" y="36" width="420" height="28" rx="6" fill="#E85D3C" opacity="0.15" />
      <text x="426" y="56" fontSize="12" fontWeight="bold" fill="#E85D3C" fontFamily="sans-serif">2h47</text>

      {/* With AI - fast bar */}
      <text x="0" y="100" fontSize="11" fill="#6B6B6B" fontFamily="monospace">Avec IA</text>
      <rect x="0" y="108" width="420" height="28" rx="6" fill="#0A1628" opacity="0.05" />
      <rect x="0" y="108" width="26" height="28" rx="6" fill="#00C2FF" opacity="0.8" />
      <text x="32" y="128" fontSize="12" fontWeight="bold" fill="#00C2FF" fontFamily="sans-serif">4 min</text>

      {/* Labels */}
      <text x="0" y="155" fontSize="10" fill="#6B6B6B" fontFamily="monospace">0 min</text>
      <text x="390" y="155" fontSize="10" fill="#6B6B6B" fontFamily="monospace">3h</text>
    </svg>
    <div className="flex justify-center gap-8 mt-4">
      <div className="text-center">
        <div className="text-2xl font-black text-accent-coral">-82%</div>
        <div className="text-xs text-ink-gray">délai de réponse</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-black text-accent-electric">+35%</div>
        <div className="text-xs text-ink-gray">mandats signés</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-black text-ink-navy">24/7</div>
        <div className="text-xs text-ink-gray">disponibilité</div>
      </div>
    </div>
  </div>
);

const VisualAutomations = () => {
  const items = [
    { icon: '⚡', label: 'Réponse leads', time: '45 min/j', color: '#E85D3C' },
    { icon: '📅', label: 'Planif. visites', time: '20 min/rdv', color: '#00C2FF' },
    { icon: '📋', label: 'Relances mandats', time: '2h/sem', color: '#4A7B5C' },
    { icon: '🎙️', label: 'CR de visite', time: '15 min/visite', color: '#E85D3C' },
    { icon: '📱', label: 'LinkedIn auto', time: '3h/sem', color: '#00C2FF' },
  ];
  return (
    <div className="my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {items.map((item, i) => (
        <div key={i} className="p-5 bg-surface-white border border-border-cream rounded-xl text-center hover:border-accent-coral/30 transition-colors">
          <div className="text-3xl mb-2">{item.icon}</div>
          <div className="text-xs font-bold text-ink-navy mb-1">{item.label}</div>
          <div className="text-xs font-mono" style={{ color: item.color }}>
            -{item.time} économisées
          </div>
        </div>
      ))}
    </div>
  );
};

const VisualTimeAudit = () => {
  const tasks = [
    { label: 'Emails & WhatsApp', min: 47, color: '#E85D3C' },
    { label: 'Mise à jour CRM', min: 38, color: '#00C2FF' },
    { label: 'Comptes-rendus', min: 32, color: '#4A7B5C' },
    { label: 'Planification', min: 28, color: '#E85D3C' },
    { label: 'Relances mandats', min: 25, color: '#00C2FF' },
    { label: 'Documents', min: 21, color: '#4A7B5C' },
  ];
  const maxMin = 47;
  return (
    <div className="my-10 p-8 bg-surface-white border border-border-cream rounded-2xl">
      <p className="text-xs font-bold text-ink-gray uppercase tracking-widest mb-6">Audit temps journalier — tâches administratives</p>
      <div className="space-y-4">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-36 text-xs text-ink-gray shrink-0">{task.label}</div>
            <div className="flex-1 h-6 bg-bg-cream rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(task.min / maxMin) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="h-full rounded-full"
                style={{ backgroundColor: task.color, opacity: 0.7 }}
              />
            </div>
            <div className="text-sm font-bold text-ink-navy w-14 text-right">{task.min} min</div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border-cream flex items-center justify-between">
        <span className="text-sm text-ink-gray">Total admin/jour</span>
        <span className="text-xl font-black text-accent-coral">3h11</span>
      </div>
    </div>
  );
};

const visuals: Record<string, React.FC> = {
  'repondre-leads-immobilier-4-minutes-ia': VisualLeadResponse,
  '5-automatisations-agence-immobiliere-cette-semaine': VisualAutomations,
  'pourquoi-agents-perdent-3h-par-jour': VisualTimeAudit,
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
    scriptTag.textContent = JSON.stringify(schema);

    return () => {
      document.title = 'Optialys — Automatisation IA pour Agences Immobilières';
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
                ? 'Fondateur Optialys · Consultant IA pour agences immobilières'
                : 'Founder Optialys · AI Consultant for Real Estate Agencies'}
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
        <div className="p-10 rounded-3xl bg-ink-navy text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent-coral/10 blur-[50px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              {fr
                ? 'Prêt à automatiser votre agence ?'
                : 'Ready to automate your agency?'}
            </h2>
            <p className="text-white/70 mb-8 text-sm leading-relaxed max-w-md mx-auto">
              {fr
                ? 'Diagnostic gratuit de 72h — on identifie vos meilleures opportunités et on vous dit exactement ce qu\'on ferait en premier.'
                : 'Free 72h diagnostic — we identify your best opportunities and tell you exactly what we\'d do first.'}
            </p>
            <a
              href="https://calendly.com/nolprayagsing/automation-strategy-audit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlowButton variant="primary">
                {fr ? 'Réserver le diagnostic gratuit' : 'Book the free diagnostic'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlowButton>
            </a>
          </div>
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
