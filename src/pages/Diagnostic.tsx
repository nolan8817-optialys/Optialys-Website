import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlowButton } from '../components/ui';

const questions = [
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

export const Diagnostic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const totalScore = Object.values(answers).reduce<number>((a, b) => a + Number(b), 0);

  const getResult = () => {
    if (totalScore >= 3) {
      return {
        color: 'text-brand-blue',
        badge: '🔥 High automation potential',
        title: 'Your company has a strong AI automation potential',
        text: 'Based on your answers, your team probably loses between 10 and 20 hours per week on tasks that AI could handle. This is exactly the kind of situation where Optialys intervenes.',
        ctaText: 'Book my free diagnostic',
        ctaLink: 'https://calendly.com/nolprayagsing/automation-strategy-audit'
      };
    } else if (totalScore >= 1) {
      return {
        color: 'text-[#8A9BB5]',
        badge: '⚡ Moderate automation potential',
        title: 'You have quick wins to achieve',
        text: 'Your team manages its operations well, but there are simple automations that could free up several hours per week immediately.',
        ctaText: 'Discover what we can automate',
        ctaLink: '/optialys-core'
      };
    } else {
      return {
        color: 'text-emerald-400',
        badge: '✅ Good operational base',
        title: 'You are well organized — and it\'s the best time to automate',
        text: 'The best companies to automate are those that already have clear processes. You are in the ideal situation to deploy high-impact automations.',
        ctaText: 'See what we can build together',
        ctaLink: '/contact'
      };
    }
  };

  const progress = ((currentStep) / (questions.length + 1)) * 100;

  return (
    <div className="min-h-screen bg-brand-navy pt-24 pb-20 flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-brand-navy-2 z-50">
        <motion.div 
          className="h-full bg-brand-blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          
          {/* Questions */}
          {currentStep < questions.length && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="text-brand-blue font-bold text-sm mb-4">
                Question {currentStep + 1} of {questions.length}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                {questions[currentStep].question}
              </h2>
              
              <div className="space-y-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(questions[currentStep].id, option.score)}
                    className="w-full text-left p-6 rounded-2xl bg-brand-card/50 border border-brand-blue/10 hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300 group flex items-center min-h-[48px]"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-navy border border-brand-blue/30 flex items-center justify-center text-brand-blue font-bold mr-4 group-hover:bg-brand-blue group-hover:text-brand-navy transition-colors">
                      {option.id}
                    </div>
                    <span className="text-white font-medium text-lg">{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Lead Capture Form */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Where would you like to receive your personalized diagnostic?
                </h2>
                <p className="text-brand-gray">
                  Your results are ready. Enter your details to discover them immediately.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-brand-card/50 border border-brand-blue/20 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-brand-gray">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-brand-gray">Professional Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-brand-gray">Company *</label>
                      <input 
                        type="text" 
                        id="company" 
                        required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="sector" className="text-sm font-bold text-brand-gray">Sector *</label>
                      <select 
                        id="sector" 
                        required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                      >
                        <option value="">Select a sector</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Fiduciary">Fiduciary</option>
                        <option value="Consulting">Consulting</option>
                        <option value="HR">HR</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <GlowButton 
                    type="submit" 
                    className="w-full justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Analyzing...' : 'Get my diagnostic'} 
                    {!formStatus && <ArrowRight className="w-4 h-4 ml-2" />}
                  </GlowButton>
                  
                  <p className="text-center text-xs text-brand-gray mt-4">
                    🔒 Your data is confidential.<br/>Results sent immediately by email.
                  </p>
                </form>
              </div>
            </motion.div>
          )}

          {/* Results Page */}
          {formStatus === 'success' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy-2 border border-brand-blue/20 font-bold text-sm mb-8">
                <span className={getResult().color}>{getResult().badge}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {getResult().title}
              </h2>
              
              <p className="text-xl text-brand-gray leading-relaxed mb-12 max-w-2xl mx-auto">
                {getResult().text}
              </p>

              <a href={getResult().ctaLink} target={getResult().ctaLink.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                <GlowButton className="text-lg px-8 py-4">
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
