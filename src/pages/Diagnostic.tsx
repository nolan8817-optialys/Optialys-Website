import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const CALENDLY = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

export const Diagnostic = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  useSEO({
    title: fr
      ? 'Diagnostic — Où part votre marge ? | Optialys'
      : 'Diagnostic — Where does your margin go? | Optialys',
    description: fr
      ? 'Répondez à 4 questions et découvrez votre potentiel de pilotage : où vos outils déconnectés vous font perdre de l\'argent, et par quoi commencer.'
      : 'Answer 4 questions and discover your piloting potential: where your disconnected tools are costing you money, and where to start.',
    canonical: 'https://optialys.com/diagnostic',
  });

  const questions = fr ? [
    {
      id: 1,
      question: "Comment savez-vous, en cours de chantier, si vous tenez votre budget ?",
      options: [
        { id: 'A', text: "On le voit en temps réel, outil à l'appui", score: 0 },
        { id: 'B', text: "On fait un point manuel de temps en temps", score: 1 },
        { id: 'C', text: "On le découvre surtout à la facture finale", score: 1 },
        { id: 'D', text: "Honnêtement, on navigue à vue", score: 1 }
      ]
    },
    {
      id: 2,
      question: "Vos techniciens, comment remontent-ils leurs heures et leurs relevés terrain ?",
      options: [
        { id: 'A', text: "Saisie directe dans un outil centralisé", score: 0 },
        { id: 'B', text: "Sur papier, ressaisi plus tard", score: 1 },
        { id: 'C', text: "Par SMS / WhatsApp, compilé à la main", score: 1 },
        { id: 'D', text: "C'est très variable d'une personne à l'autre", score: 1 }
      ]
    },
    {
      id: 3,
      question: "Combien d'outils différents utilisez-vous pour piloter votre activité ?",
      options: [
        { id: 'A', text: "Un système unique, tout est connecté", score: 0 },
        { id: 'B', text: "2 ou 3 outils qui communiquent à peu près", score: 0 },
        { id: 'C', text: "Plusieurs outils qui ne se parlent pas", score: 1 },
        { id: 'D', text: "Beaucoup d'outils + énormément d'Excel", score: 1 }
      ]
    },
    {
      id: 4,
      question: "Quelle est la taille de votre équipe terrain ?",
      options: [
        { id: 'A', text: "Moins de 10 collaborateurs", score: 0 },
        { id: 'B', text: "10 à 20 collaborateurs", score: 1 },
        { id: 'C', text: "20 à 40 collaborateurs", score: 1 },
        { id: 'D', text: "Plus de 40 collaborateurs", score: 1 }
      ]
    }
  ] : [
    {
      id: 1,
      question: "How do you know, mid-project, whether you're holding your budget?",
      options: [
        { id: 'A', text: "We see it in real time, with a tool", score: 0 },
        { id: 'B', text: "We do a manual check now and then", score: 1 },
        { id: 'C', text: "We mostly find out on the final invoice", score: 1 },
        { id: 'D', text: "Honestly, we're flying blind", score: 1 }
      ]
    },
    {
      id: 2,
      question: "How do your technicians report their hours and field readings?",
      options: [
        { id: 'A', text: "Direct entry into a central tool", score: 0 },
        { id: 'B', text: "On paper, re-keyed later", score: 1 },
        { id: 'C', text: "By SMS / WhatsApp, compiled by hand", score: 1 },
        { id: 'D', text: "It varies a lot from person to person", score: 1 }
      ]
    },
    {
      id: 3,
      question: "How many different tools do you use to run your business?",
      options: [
        { id: 'A', text: "One system, everything connected", score: 0 },
        { id: 'B', text: "2 or 3 tools that roughly communicate", score: 0 },
        { id: 'C', text: "Several tools that don't talk to each other", score: 1 },
        { id: 'D', text: "Many tools + a lot of Excel", score: 1 }
      ]
    },
    {
      id: 4,
      question: "How big is your field team?",
      options: [
        { id: 'A', text: "Fewer than 10 people", score: 0 },
        { id: 'B', text: "10 to 20 people", score: 1 },
        { id: 'C', text: "20 to 40 people", score: 1 },
        { id: 'D', text: "More than 40 people", score: 1 }
      ]
    }
  ];

  const T = {
    questionOf: fr ? (i: number, n: number) => `Question ${i} sur ${n}` : (i: number, n: number) => `Question ${i} of ${n}`,
    formTitle: fr ? "Où souhaitez-vous recevoir votre diagnostic ?" : "Where would you like to receive your diagnostic?",
    formSub: fr ? "Vos résultats sont prêts. Entrez vos coordonnées pour les découvrir." : "Your results are ready. Enter your details to see them.",
    firstName: fr ? "Prénom" : "First Name",
    profEmail: fr ? "Email professionnel" : "Professional Email",
    company: fr ? "Entreprise" : "Company",
    sector: fr ? "Activité" : "Activity",
    selectSector: fr ? "Choisir votre activité" : "Select your activity",
    secRe: fr ? "Rénovation de yachts" : "Yacht refit",
    secFid: fr ? "Voitures de collection" : "Classic cars",
    secCons: fr ? "Conciergerie / services" : "Concierge / services",
    secHr: fr ? "Atelier sur mesure" : "Bespoke workshop",
    secOther: fr ? "Autre" : "Other",
    analyzing: fr ? "Analyse…" : "Analyzing...",
    getDiag: fr ? "Voir mon diagnostic" : "See my diagnostic",
    privacy: fr ? "🔒 Vos données restent confidentielles." : "🔒 Your data stays confidential.",
    high: fr ? "Forte fuite de marge" : "High margin leak",
    highTitle: fr ? "Vous perdez probablement de l'argent chaque semaine" : "You're probably losing money every week",
    highText: fr ? "D'après vos réponses, vos outils ne se parlent pas et vos budgets se découvrent trop tard. C'est exactement la situation où une infrastructure centrale change tout. Commençons par chiffrer ces pertes." : "Based on your answers, your tools don't talk to each other and your budgets surface too late. This is exactly where a central infrastructure changes everything. Let's start by quantifying those leaks.",
    highCta: fr ? "Réserver mon Diagnostic" : "Book my Diagnostic",
    mid: fr ? "Marge à sécuriser" : "Margin to secure",
    midTitle: fr ? "Quelques connexions vous feraient gagner gros" : "A few connections would gain you a lot",
    midText: fr ? "Vous êtes plutôt organisés, mais certaines informations circulent encore mal. Quelques connexions ciblées vous donneraient une vraie visibilité temps réel." : "You're fairly organized, but some information still flows poorly. A few targeted connections would give you real real-time visibility.",
    midCta: fr ? "Voir l'infrastructure" : "See the infrastructure",
    low: fr ? "Bonne base" : "Good base",
    lowTitle: fr ? "Vous êtes bien structurés — le moment idéal pour aller plus loin" : "You're well structured — the ideal time to go further",
    lowText: fr ? "Les ateliers les mieux organisés sont ceux qui tirent le plus d'une infrastructure connectée. Voyons ce qu'on peut construire sur vos bases." : "The best-organized workshops get the most out of a connected infrastructure. Let's see what we can build on your foundations.",
    lowCta: fr ? "On en parle" : "Let's talk",
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { id: string, text: string, score: number }>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const [formData, setFormData] = useState({ firstName: '', email: '', company: '', sector: '' });

  const handleAnswer = (questionId: number, option: { id: string, text: string, score: number }) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    setTimeout(() => setCurrentStep(prev => prev + 1), 400);
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
      return { color: 'text-accent-coral', badge: T.high, title: T.highTitle, text: T.highText, ctaText: T.highCta, ctaLink: CALENDLY };
    } else if (totalScore >= 1) {
      return { color: 'text-accent-coral', badge: T.mid, title: T.midTitle, text: T.midText, ctaText: T.midCta, ctaLink: '/optialys-core' };
    } else {
      return { color: 'text-accent-green', badge: T.low, title: T.lowTitle, text: T.lowText, ctaText: T.lowCta, ctaLink: '/contact' };
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
              <div className="text-accent-coral font-bold text-sm mb-4 uppercase tracking-wider">
                {T.questionOf(currentStep + 1, questions.length)}
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-ink-navy mb-10 leading-tight">
                {questions[currentStep].question}
              </h2>

              <div className="space-y-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(questions[currentStep].id, option)}
                    className="w-full text-left p-4 md:p-6 rounded-sm bg-surface-white border border-border-cream hover:border-accent-coral hover:bg-accent-coral/5 transition-all duration-200 group flex items-center min-h-[48px]"
                  >
                    <div className="w-8 h-8 rounded-sm bg-bg-cream border border-border-cream flex items-center justify-center text-ink-navy font-bold mr-4 group-hover:bg-accent-coral group-hover:text-white group-hover:border-accent-coral transition-colors">
                      {option.id}
                    </div>
                    <span className="text-ink-navy font-medium text-lg">{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === questions.length && formStatus !== 'success' && (
            <motion.div
              key="capture"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="text-center mb-10">
                <h2 className="text-xl font-extrabold tracking-tight text-ink-navy mb-4">{T.formTitle}</h2>
                <p className="text-ink-gray">{T.formSub}</p>
              </div>

              <div className="p-4 md:p-8 bg-surface-white border border-border-cream">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-ink-gray">{T.firstName} *</label>
                      <input type="text" id="firstName" required value={formData.firstName} onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-sm px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-ink-gray">{T.profEmail} *</label>
                      <input type="email" id="email" required value={formData.email} onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-sm px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-ink-gray">{T.company} *</label>
                      <input type="text" id="company" required value={formData.company} onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-sm px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="sector" className="text-sm font-bold text-ink-gray">{T.sector} *</label>
                      <select id="sector" required value={formData.sector} onChange={handleInputChange}
                        className="w-full bg-bg-cream border border-border-cream rounded-sm px-4 py-3 text-ink-navy focus:outline-none focus:border-accent-coral transition-colors appearance-none">
                        <option value="">{T.selectSector}</option>
                        <option value="yacht">{T.secRe}</option>
                        <option value="classic-cars">{T.secFid}</option>
                        <option value="concierge">{T.secCons}</option>
                        <option value="workshop">{T.secHr}</option>
                        <option value="other">{T.secOther}</option>
                      </select>
                    </div>
                  </div>

                  <GlowButton type="submit" variant="primary" className="w-full" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? T.analyzing : T.getDiag}
                    {formStatus === 'idle' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </GlowButton>

                  <p className="text-center text-xs text-ink-gray mt-4">{T.privacy}</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-surface-white border border-border-cream font-bold text-sm mb-8 uppercase tracking-wider">
                <span className={getResult().color}>{getResult().badge}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-ink-navy mb-6 leading-tight">
                {getResult().title}
              </h2>

              <p className="text-base text-ink-gray leading-relaxed mb-12 max-w-2xl mx-auto">
                {getResult().text}
              </p>

              <a href={getResult().ctaLink} target={getResult().ctaLink.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                <GlowButton variant="primary" className="text-base px-8 py-4">
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
