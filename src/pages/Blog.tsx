import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, AsteriskDecor } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { blogArticles, getCategoryColor, type BlogArticle } from '../data/blog';

const categoryFilters = {
  fr: ['Tous', 'Immobilier & IA', 'Automatisation pratique', 'Croissance agence'],
  en: ['All', 'Real Estate & AI', 'Practical Automation', 'Agency Growth'],
};

const categoryMap: Record<string, BlogArticle['categoryKey'] | 'all'> = {
  'Tous': 'all', 'All': 'all',
  'Immobilier & IA': 'real-estate-ai', 'Real Estate & AI': 'real-estate-ai',
  'Automatisation pratique': 'automation', 'Practical Automation': 'automation',
  'Croissance agence': 'growth', 'Agency Growth': 'growth',
};

const formatDate = (dateStr: string, lang: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
};

const ArticleCard = ({ article, lang }: { article: BlogArticle; lang: string }) => {
  const fr = lang === 'fr';
  const categoryColor = getCategoryColor(article.categoryKey);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-surface-white border border-border-cream rounded-2xl overflow-hidden hover:border-accent-coral/30 hover:shadow-[0_8px_30px_rgba(232,93,60,0.08)] transition-all duration-300 flex flex-col"
    >
      {/* Category color band */}
      <div className={`h-1 w-full ${article.categoryKey === 'real-estate-ai' ? 'bg-accent-coral' : article.categoryKey === 'automation' ? 'bg-accent-electric' : 'bg-accent-green'}`} />

      <div className="p-8 flex flex-col flex-1">
        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-5 flex-wrap">
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

        {/* Title */}
        <h2 className="text-xl font-bold text-ink-navy mb-3 leading-snug group-hover:text-accent-coral transition-colors">
          {fr ? article.title.fr : article.title.en}
        </h2>

        {/* Excerpt */}
        <p className="text-ink-gray text-sm leading-relaxed mb-6 flex-1">
          {fr ? article.excerpt.fr : article.excerpt.en}
        </p>

        {/* CTA */}
        <Link
          to={`/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-accent-coral font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          {fr ? 'Lire l\'article' : 'Read article'}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
};

export const Blog = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  const [activeFilter, setActiveFilter] = useState(fr ? 'Tous' : 'All');

  const filters = fr ? categoryFilters.fr : categoryFilters.en;

  const filteredArticles = blogArticles.filter(article => {
    const filterKey = categoryMap[activeFilter];
    return filterKey === 'all' || article.categoryKey === filterKey;
  });

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">
            {fr ? 'Ressources gratuites' : 'Free resources'}
          </PillBadge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-navy mb-6">
            {fr ? 'Immobilier & Automatisation IA' : 'Real Estate & AI Automation'}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
            {fr
              ? 'Guides pratiques, études de cas et stratégies pour les agences immobilières qui veulent automatiser intelligemment.'
              : 'Practical guides, case studies and strategies for real estate agencies looking to automate intelligently.'}
          </p>
        </motion.div>
      </section>

      {/* Category filters */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-ink-navy text-white border-ink-navy'
                  : 'bg-surface-white text-ink-gray border-border-cream hover:border-accent-coral/40 hover:text-accent-coral'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Articles grid */}
      <section className="px-6 max-w-6xl mx-auto">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 text-ink-gray">
            {fr ? 'Aucun article dans cette catégorie pour l\'instant.' : 'No articles in this category yet.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} lang={lang} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter / CTA */}
      <FadeIn>
        <section className="px-6 max-w-3xl mx-auto mt-24">
          <div className="p-10 rounded-3xl bg-ink-navy text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-coral/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <AsteriskDecor size={20} className="mx-auto mb-4 text-white/30" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {fr
                  ? 'Votre agence perd des leads cette nuit.'
                  : 'Your agency is losing leads tonight.'}
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                {fr
                  ? 'Diagnostic gratuit de 72h — on identifie vos 3 meilleures opportunités d\'automatisation et on vous dit exactement ce qu\'on ferait en premier.'
                  : 'Free 72h diagnostic — we identify your top 3 automation opportunities and tell you exactly what we\'d do first.'}
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
        </section>
      </FadeIn>
    </div>
  );
};
