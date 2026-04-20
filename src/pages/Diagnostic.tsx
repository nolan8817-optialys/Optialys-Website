import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { GlowButton, PillBadge } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export const Diagnostic = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const questions = fr ? [
    {
      id: 1,
      question: "Combien d'heures par semaine votre équipe passe-t-elle sur des tâches répétitives ? (saisie, relances, rapports…)",
      options: [
        { id: 'A', text: "Moins de 2h — nous sommes plutôt efficaces", score: 0 },
        { id: 'B', text: "Entre 2h et 5h — c'est gérable mais améliorable", score: 0 },
        { id: 'C', text: "Entre 5h et 15h — c'est un vrai problème", score: 1 },
        { id: 'D', text: "Plus de 15h — on perd beaucoup de temps", score: 1 }
      ]
    },
    {
      id: 2,
      question: "Avez-vous déjà essayé d'automatiser un process dans votre entreprise ?",
      options: [
        { id: 'A', text: "Non, jamais essayé", score: 0 },
        { id: 'B', text: "Essayé mais ça n'a pas vraiment marché", score: 1 },
        { id: 'C', text: "On utilise quelques outils basiques (ex : emails auto)", score: 0 },
        { id: 'D', text: "Oui, nous avons déjà des automatisations en place", score: 0 }
      ]
    },
    {
      id: 3,
      question: "Quel est votre plus gros problème opérationnel actuel ?",
      options: [
        { id: 'A', text: "On perd des leads parce qu'on répond trop lentement", score: 1 },
        { id: 'B', text: "Notre CRM est en désordre — données manquantes, doublons", score: 1 },
        { id: 'C', text: "On passe trop de temps sur les rapports et la saisie", score: 1 },
        { id: 'D', text: "On manque de visibilité temps réel sur notre activité", score: 0 }
      ]
    },
    {
      id: 4,
      question: "Quelle est la taille de votre équipe ?",
      options: [
        { id: 'A', text: "1 à 5 personnes", score: 0 },
        { id: 'B', text: "6 à 15 personnes", score: 0 },
        { id: 'C', text: "16 à 50 personnes", score: 1 },
        { id: 'D', text: "Plus de 50 personnes", score: 1 }
      ]
    }
  ] : [
    {
      id: 1,
      question: "How many hours per week does your team spend on repetitive tasks? (data entry, follow-ups, reports...)",
      options: [
        { id: 'A', text: "Less than 2h — we are quite efficient", score: 0 },
        { id: 'B', text: "Between 2h and 5h — it's manageable but could be better", score: 0 },
        { id: 'C', text: "Between 5h and 15h — it's a real problem", score: 1 },
        { id: 'D', text: "More than 15h — we lose a lot of time", score: 1 }
      ]
    },
    {
      id: 2,
      question: "Have you ever tried to automate a process in your company?",
      options: [
        { id: 'A', text: "No, we never tried", score: 0 },
        { id: 'B', text: "We tried but it didn't really work", score: 1 },
        { id: 'C', text: "We use some basic tools (e.g., automated emails)", score: 0 },
        { id: 'D', text: "Yes, we already have automations in place", score: 0 }
      ]
    },
    {
      id: 3,
      question: "What is your biggest operational problem right now?",
      options: [
        { id: 'A', text: "We lose leads because we respond too slowly", score: 1 },
        { id: 'B', text: "Our CRM is a mess — missing data, duplicates", score: 1 },
        { id: 'C', text: "We spend too much time on reports and data entry", score: 1 },
        { id: 'D', text: "We lack real-time visibility on our activity", score: 0 }
      ]
    },
    {
      id: 4,
      question: "How many people are in your team?",
      options: [
        { id: 'A', text: "1 to 5 people", score: 0 },
        { id: 'B', text: "6 to 15 people", score: 0 },
        { id: 'C', text: "16 to 50 people", score: 1 },
        { id: 'D', text: "More than 50 people", score: 1 }
      ]
    }
  ];

  const T = {
    questionOf: fr ? (i: number, n: number) => `Question ${i} sur ${n}` : (i: number, n: number) => `Question ${i} of ${n}`,
    formTitle: fr ? "Où souhaitez-vous recevoir votre diagnostic personnalisé ?" : "Where would you like to receive your personalized diagnostic?",
    formSub: fr ? "Vos résultats sont prêts. Entrez vos coordonnées pour les découvrir immédiatement." : "Your results are ready. Enter your details to discover them immediately.",
    firstName: fr ? "Prénom" : "First Name",
    profEmail: fr ? "Email professionnel" : "Professional Email",
    company: fr ? "Entreprise" : "Company",
    sector: fr ? "Secteur" : "Sector",
    selectSector: fr ? "Choisir un secteur" : "Select a sector",
    secRe: fr ? "Immobilier" : "Real Estate",
    secFid: fr ? "Fiduciaire" : "Fiduciary",
    secCons: fr ? "Conseil" : "Consulting",
    secHr: fr ? "RH" : "HR",
    secOther: fr ? "Autre" : "Other",
    analyzing: fr ? "Analyse…" : "Analyzing...",
    getDiag: fr ? "Obtenir mon diagnostic" : "Get my diagnostic",
    privacy: fr ? "🔒 Vos données sont confidentielles.\nRésultats envoyés immédiatement par email." : "🔒 Your data is confidential.\nResults sent immediately by email.",
    high: fr ? "🔥 Fort potentiel d'automatisation" : "🔥 High automation potential",
    highTitle: fr ? "Votre société a un fort potentiel d'automatisation IA" : "Your company has a strong AI automation potential",
    highText: fr ? "D'après vos réponses, votre équipe perd probablement entre 10 et 20 heures par semaine sur des tâches que l'IA pourrait gérer. C'est exactement le type de situation où Optialys intervient." : "Based on your answers, your team probably loses between 10 and 20 hours per week on tasks that AI could handle. This is exactly the kind of situation where Optialys intervenes.",
    highCta: fr ? "Réserver mon diagnostic gratuit" : "Book my free diagnostic",
    mid: fr ? "⚡ Potentiel d'automatisation modéré" : "⚡ Moderate automation potential",
    midTitle: fr ? "Vous avez des quick wins à aller chercher" : "You have quick wins to achieve",
    midText: fr ? "Votre équipe gère bien ses opérations, mais il existe des automatisations simples qui pourraient libérer plusieurs heures par semaine immédiatement." : "Your team manages its operations well, but there are simple automations that could free up several hours per week immediately.",
    midCta: fr ? "Voir ce que nous pouvons automatiser" : "Discover what we can automate",
    low: fr ? "✅ Bonne base opérationnelle" : "✅ Good operational base",
    lowTitle: fr ? "Vous êtes bien organisés — et c'est le meilleur moment pour automatiser" : "You are well organized — and it's the best time to automate",
    lowText: fr ? "Les meilleures sociétés à automatiser sont celles qui ont déjà des process clairs. Vous êtes dans la situation idéale pour déployer des automatisations à fort impact." : "The best companies to automate are those that already have clear processes. You are in the ideal situation to deploy high-impact automations.",
    lowCta: fr ? "Voir ce qu'on peut construire ensemble" : "See what we can build together",
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { id: string, text: string, score: number }>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: '',
    sector: ''
  });

  const handleAnswer = (questionId: number, option: { id: string, text: string, score: number }) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 400);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const payload = {
        ...formData,
        answers: Object.entries(answers).map(([qId, ans]: [string, any]) => ({
          questionId: Number(qId),
          question: questions.find(q => q.id === Number(qId))?.question,
          selectedOptionId: ans.id,
          selectedOptionText: ans.text,
          score: ans.score
        })),
        totalScore: Object.values(answers).reduce<number>((a, b: any) => a + Number(b.score), 0),
        timestamp: new Date().toISOString(),
        lang
      };

      await fetch('https://nolanprayagsing.app.n8n.cloud/webhook/Diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setFormStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('success');
    }
  };

  const totalScore = Object.values(answers).reduce<number>((a, b: any) => a + Number(b.score), 0);

  const getResult = () => {
    if (totalScore >= 3) {
      return {
        color: 'text-accent-coral',
        badge: T.high,
        title: T.highTitle,
        text: T.highText,
        ctaText: T.highCta,
        ctaLink: 'https://calendly.com/nolprayagsing/automation-strategy-audit'
      };
    } else if (totalScore >= 1) {
      return {
        color: 'text-accent-electric',
        badge: T.mid,
        title: T.midTitle,
        text: T.midText,
        ctaText: T.midCta,
        ctaLink: '/optialys-core'
      };
    } else {
      return {
        color: 'text-accent-green',
        badge: T.low,
        title: T.lowTitle,
        text: T.lowText,
        ctaText: T.lowCta,
        ctaLink: '/contact'
      };
    }
  };

  const progress = ((currentStep) / (questions.length + 1)) * 100;

  return (
    <div className="min-h-screen bg-bg-cream pt-24 pb-20 flex flex-col">
      <div className="fixed top-0 left-0 w-full h-1.5 bg-border-cream z-50">
        <motion.div
          className="h-full bg-accent-coral"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">

          {currentStep < questions.length && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="text-accent-coral font-bold text-sm mb-4">
                {T.questionOf(currentStep + 1, questions.length)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink-navy mb-10 leading-tight">
                {questions[currentStep].question}
              </h2>

              <div className="space-y-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(questions[currentStep].id, option)}
                    className="w-full text-left p-4 md:p-6 rounded-2xl bg-surface-white border border-border-cream hover:border-accent-coral hover:bg-accent-coral/5 transition-all duration-300 group flex items-center min-h-[48px]"
                  >
                    <div className="w-8 h-8 rounded-full bg-bg-cream border border-border-cream flex items-center justify-center text-ink-navy font-bold mr-4 group-hover:bg-accent-coral group-hover:text-white group-hover:border-accent-coral transition-colors">
                      {option.id}
                    </div>
                    <span className="text-ink-black font-medium text-lg">{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === questions.length && formStatus !== 'success' && (
            <motion.div
              key="lead-capture"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-ink-navy mb-4">
                  {T.formTitle}
                </h2>
                <p className="text-ink-gray">
                  {T.formSub}
                </p>
              </div>

              <div className="p-4 md:p-6 rounded-3xl bg-surface-white border border-border-cream">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-ink-gray">{T.firstName} *</label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-ink-gray">{T.profEmail} *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-ink-gray">{T.company} *</label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="sector" className="text-sm font-bold text-ink-gray">{T.sector} *</label>
                      <select
                        id="sector"
                        required
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-xl px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors appearance-none"
                      >
                        <option value="">{T.selectSector}</option>
                        <option value="Real Estate">{T.secRe}</option>
                        <option value="Fiduciary">{T.secFid}</option>
                        <option value="Consulting">{T.secCons}</option>
                        <option value="HR">{T.secHr}</option>
                        <option value="Other">{T.secOther}</option>
                      </select>
                    </div>
                  </div>

                  <GlowButton
                    type="submit"
                    variant="primary"
                    className="w-full justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? T.analyzing : T.getDiag}
                    {formStatus === 'idle' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </GlowButton>

                  <p className="text-center text-xs text-ink-gray mt-4 whitespace-pre-line">
                    {T.privacy}
                  </p>
                </form>
              </div>
            </motion.div>
          )}

          {formStatus === 'success' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-white border border-border-cream font-bold text-sm mb-8">
                <span className={getResult().color}>{getResult().badge}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-ink-navy mb-6 leading-tight">
                {getResult().title}
              </h2>

              <p className="text-xl text-ink-gray leading-relaxed mb-12 max-w-2xl mx-auto">
                {getResult().text}
              </p>

              <a href={getResult().ctaLink} target={getResult().ctaLink.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                <GlowButton variant="primary" className="text-lg px-8 py-4">
                  {getResult().ctaText} <ArrowRight className="w-5 h-5 ml-2" />
                </GlowButton>
              </a>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
