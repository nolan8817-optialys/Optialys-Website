import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { FadeIn, GlowButton, PillBadge, AsteriskDecor } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { blogArticles, getCategoryColor, type BlogArticle } from '../data/blog';
import { useSEO } from '../hooks/useSEO';

const categoryFilters = {
  fr: ['Tous', 'Pilotage de marge', 'Infrastructure', 'Terrain'],
  en: ['All', 'Margin piloting', 'Infrastructure', 'On the floor'],
};

const categoryMap: Record<string, BlogArticle['categoryKey'] | 'all'> = {
  'Tous': 'all', 'All': 'all',
  'Pilotage de marge': 'pilotage', 'Margin piloting': 'pilotage',
  'Infrastructure': 'infrastructure',
  'Terrain': 'terrain', 'On the floor': 'terrain',
};

const formatDate = (dateStr: string, lang: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
};

const ArticleCard: React.FC<{ article: BlogArticle; lang: string }> = ({ article, lang }) => {
  const fr = lang === 'fr';
  const categoryColor = getCategoryColor(article.categoryKey);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-surface-white border border-border-cream overflow-hidden hover:border-accent-coral transition-colors duration-200 flex flex-col"
    >
      {/* Category color band */}
      <div className={`h-1 w-full ${article.categoryKey === 'pilotage' ? 'bg-accent-coral' : article.categoryKey === 'infrastructure' ? 'bg-ink-navy' : 'bg-accent-green'}`} />

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
  useSEO({
    title: fr
      ? 'Blog — Piloter un atelier haut de gamme | Optialys'
      : 'Blog — Running a high-end workshop | Optialys',
    description: fr
      ? 'Guides concrets sur le pilotage de marge, l\'infrastructure opérationnelle et le suivi terrain pour ateliers et services haut de gamme.'
      : 'Practical guides on margin piloting, operational infrastructure and field tracking for high-end workshops and services.',
    canonical: 'https://optialys.com/blog',
  });
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
            {fr ? 'Ressources' : 'Resources'}
          </PillBadge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-navy mb-6">
            {fr ? 'Piloter un atelier haut de gamme' : 'Running a high-end workshop'}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
            {fr
              ? 'Guides concrets sur le pilotage de marge, l\'infrastructure opérationnelle et le suivi terrain pour ateliers et services haut de gamme.'
              : 'Practical guides on margin piloting, operational infrastructure and field tracking for high-end workshops and services.'}
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
          <div className="p-10 bg-ink-navy text-center">
            <AsteriskDecor size={20} className="mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">
              {fr
                ? 'Vous perdez de l\'argent chaque semaine.'
                : 'You lose money every week.'}
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              {fr
                ? 'Diagnostic Rentabilité de 2h — on chiffre 3 à 5 pertes concrètes et on vous remet un plan d\'action.'
                : 'A 2-hour Profitability Diagnostic — we quantify 3 to 5 concrete leaks and hand you an action plan.'}
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
        </section>
      </FadeIn>
    </div>
  );
};
