import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowRight, ChevronRight, Play } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { GlowButton } from './ui';

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = 'hook' | 'quiz' | 'contact' | 'video';

interface Answer {
  question: string;
  answer: string;
  tag: string;
}

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// ─── Quiz questions ───────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    question: 'Combien de demandes entrantes recevez-vous par mois ?',
    options: [
      { label: 'Moins de 20 — je gère encore manuellement', tag: 'LOW_VOLUME' },
      { label: 'Entre 20 et 50 — ça commence à déborder', tag: 'MED_VOLUME' },
      { label: 'Entre 50 et 100 — difficile de tout suivre', tag: 'HIGH_VOLUME' },
      { label: 'Plus de 100 — c\'est le chaos', tag: 'VERY_HIGH_VOLUME' },
    ],
  },
  {
    question: 'En combien de temps contactez-vous un nouveau lead ?',
    options: [
      { label: 'Dans l\'heure — j\'ai un process', tag: 'FAST_RESPONSE' },
      { label: 'Le même jour', tag: 'SAME_DAY' },
      { label: 'Sous 2-3 jours', tag: 'SLOW_RESPONSE' },
      { label: 'Souvent trop tard…', tag: 'VERY_SLOW_RESPONSE' },
    ],
  },
  {
    question: 'Quel est votre plus grand obstacle aujourd\'hui ?',
    options: [
      { label: 'Je manque de temps pour relancer', tag: 'NO_TIME' },
      { label: 'Je ne sais pas quels leads sont chauds', tag: 'NO_QUALIFICATION' },
      { label: 'Mes outils ne se parlent pas', tag: 'BAD_TOOLS' },
      { label: 'Mon équipe se noie dans l\'administratif', tag: 'ADMIN_OVERLOAD' },
    ],
  },
  {
    question: 'Combien d\'heures/semaine vos agents passent-ils sur des tâches non-commerciales ?',
    options: [
      { label: 'Moins de 5h — on est efficaces', tag: 'LOW_ADMIN' },
      { label: 'Entre 5h et 10h', tag: 'MED_ADMIN' },
      { label: 'Entre 10h et 20h', tag: 'HIGH_ADMIN' },
      { label: 'Plus de 20h — c\'est alarmant', tag: 'VERY_HIGH_ADMIN' },
    ],
  },
  {
    question: 'Si vous pouviez automatiser UNE chose dès demain, ce serait ?',
    options: [
      { label: 'La qualification automatique des leads', tag: 'AUTO_QUALIFY' },
      { label: 'Les relances et suivi clients', tag: 'AUTO_FOLLOWUP' },
      { label: 'Le reporting et tableaux de bord', tag: 'AUTO_REPORTING' },
      { label: 'La prise de rendez-vous', tag: 'AUTO_BOOKING' },
    ],
  },
];

// Priority scoring — higher = more critical pain point
const PAIN_PRIORITY: Record<string, number> = {
  VERY_HIGH_VOLUME: 5, HIGH_VOLUME: 4, MED_VOLUME: 2, LOW_VOLUME: 1,
  VERY_SLOW_RESPONSE: 5, SLOW_RESPONSE: 4, SAME_DAY: 2, FAST_RESPONSE: 1,
  ADMIN_OVERLOAD: 5, NO_QUALIFICATION: 4, NO_TIME: 4, BAD_TOOLS: 3,
  VERY_HIGH_ADMIN: 5, HIGH_ADMIN: 4, MED_ADMIN: 2, LOW_ADMIN: 1,
  AUTO_FOLLOWUP: 4, AUTO_QUALIFY: 4, AUTO_BOOKING: 3, AUTO_REPORTING: 3,
};

function getTopPainPoints(answers: Answer[]): string[] {
  return [...answers]
    .sort((a, b) => (PAIN_PRIORITY[b.tag] ?? 0) - (PAIN_PRIORITY[a.tag] ?? 0))
    .slice(0, 3)
    .map((a) => a.tag);
}

// ─── Constants ────────────────────────────────────────────────────────────────

const POPUP_KEY = 'optialys_popup_seen';
const TTL_MS = 7 * 24 * 60 * 60 * 1000;
const CALENDLY_URL = 'https://calendly.com/nolprayagsing/automation-strategy-audit';

// ─── Component ────────────────────────────────────────────────────────────────

export const LeadPopup = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<Step>('hook');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [contact, setContact] = useState<ContactData>({ firstName: '', lastName: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Only trigger on homepage
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const seen = localStorage.getItem(POPUP_KEY);
    if (seen) {
      try {
        const { ts } = JSON.parse(seen);
        if (Date.now() - ts < TTL_MS) return;
      } catch {
        // stale entry — ignore and show
      }
    }

    timerRef.current = setTimeout(() => setVisible(true), 8000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isHome]);

  const close = () => {
    setVisible(false);
    localStorage.setItem(POPUP_KEY, JSON.stringify({ ts: Date.now() }));
  };

  const handleAnswer = (q: typeof QUESTIONS[0], option: typeof QUESTIONS[0]['options'][0]) => {
    const newAnswers = [...answers, { question: q.question, answer: option.label, tag: option.tag }];
    setAnswers(newAnswers);
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((n) => n + 1);
    } else {
      setStep('contact');
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('video');
    localStorage.setItem(POPUP_KEY, JSON.stringify({ ts: Date.now() }));

    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
    if (!webhookUrl) return;

    const payload = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      answers,
      painPoints: getTopPainPoints(answers),
      source: 'optialys.com popup',
      timestamp: new Date().toISOString(),
    };

    try {
      setSubmitting(true);
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Silent fail — user experience unaffected
    } finally {
      setSubmitting(false);
    }
  };

  if (!isHome) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-ink-navy/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step !== 'hook' ? close : undefined}
          />

          {/* Card */}
          <motion.div
            key="card"
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-surface-white rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden"
              initial={{ scale: 0.93, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 24 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              {/* Close button — hidden on hook step */}
              {step !== 'hook' && (
                <button
                  onClick={close}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-bg-cream hover:bg-border-cream transition-colors text-ink-gray"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <AnimatePresence mode="wait">
                {/* ── STEP: HOOK ── */}
                {step === 'hook' && (
                  <StepHook key="hook" onStart={() => setStep('quiz')} onClose={close} />
                )}

                {/* ── STEP: QUIZ ── */}
                {step === 'quiz' && (
                  <StepQuiz
                    key="quiz"
                    currentQuestion={currentQuestion}
                    onAnswer={handleAnswer}
                  />
                )}

                {/* ── STEP: CONTACT ── */}
                {step === 'contact' && (
                  <StepContact
                    key="contact"
                    contact={contact}
                    onChange={setContact}
                    onSubmit={handleContactSubmit}
                    submitting={submitting}
                  />
                )}

                {/* ── STEP: VIDEO ── */}
                {step === 'video' && (
                  <StepVideo
                    key="video"
                    firstName={contact.firstName}
                    videoError={videoError}
                    onVideoError={() => setVideoError(true)}
                    onClose={close}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ─── Sub-steps ────────────────────────────────────────────────────────────────

const stepVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.2 } },
};

// Hook step
const StepHook = ({ onStart, onClose }: { onStart: () => void; onClose: () => void }) => (
  <motion.div
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-ink-navy text-surface-white rounded-3xl p-8 md:p-10 text-center"
  >
    <button
      onClick={onClose}
      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-surface-white/10 hover:bg-surface-white/20 transition-colors text-surface-white/70"
      aria-label="Fermer"
    >
      <X className="w-4 h-4" />
    </button>

    <div className="inline-flex items-center gap-2 bg-accent-coral/20 text-accent-coral text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
      Agences immobilières
    </div>

    <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
      Alors ?{' '}
      <span className="text-accent-coral">Combien de leads vous perdez</span>{' '}
      chaque mois, vous pensez ?
    </h2>

    <p className="text-surface-white/70 text-sm md:text-base mb-8 leading-relaxed">
      2 minutes pour le découvrir — et voir comment y remédier concrètement.
    </p>

    <GlowButton variant="primary" onClick={onStart} className="w-full justify-center text-base py-4">
      Je veux savoir
      <ArrowRight className="w-4 h-4" />
    </GlowButton>

    <p className="text-surface-white/40 text-xs mt-4">
      Quiz rapide · Aucun engagement · Résultat immédiat
    </p>
  </motion.div>
);

// Quiz step
const StepQuiz = ({
  currentQuestion,
  onAnswer,
}: {
  currentQuestion: number;
  onAnswer: (q: typeof QUESTIONS[0], o: typeof QUESTIONS[0]['options'][0]) => void;
}) => {
  const q = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion) / QUESTIONS.length) * 100;

  return (
    <motion.div
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-8 md:p-10"
    >
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-ink-gray uppercase tracking-widest">
            Question {currentQuestion + 1} / {QUESTIONS.length}
          </span>
          <span className="text-xs text-ink-gray">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-border-cream rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-coral rounded-full"
            initial={{ width: `${progress}%` }}
            animate={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-ink-navy mb-6 leading-snug">
        {q.question}
      </h3>

      <div className="space-y-3">
        {q.options.map((option) => (
          <button
            key={option.tag}
            onClick={() => onAnswer(q, option)}
            className="w-full text-left px-4 py-3.5 rounded-2xl border border-border-cream bg-bg-cream hover:border-accent-coral hover:bg-accent-coral/5 hover:text-accent-coral transition-all duration-150 text-sm font-medium text-ink-navy group flex items-center justify-between"
          >
            <span>{option.label}</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-accent-coral transition-opacity" />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// Contact step
const StepContact = ({
  contact,
  onChange,
  onSubmit,
  submitting,
}: {
  contact: ContactData;
  onChange: (c: ContactData) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitting: boolean;
}) => (
  <motion.div
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="p-8 md:p-10"
  >
    <div className="mb-6">
      <div className="h-1.5 bg-accent-coral rounded-full" />
    </div>

    <h3 className="text-xl font-bold text-ink-navy mb-1">
      Presque là !
    </h3>
    <p className="text-sm text-ink-gray mb-6">
      Où dois-je envoyer votre analyse personnalisée ?
    </p>

    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-ink-gray uppercase tracking-wide">Prénom *</label>
          <input
            type="text"
            required
            value={contact.firstName}
            onChange={(e) => onChange({ ...contact, firstName: e.target.value })}
            placeholder="Marie"
            className="w-full bg-bg-cream border border-border-cream rounded-xl px-3 py-2.5 text-ink-navy text-sm focus:outline-none focus:border-accent-coral transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-ink-gray uppercase tracking-wide">Nom *</label>
          <input
            type="text"
            required
            value={contact.lastName}
            onChange={(e) => onChange({ ...contact, lastName: e.target.value })}
            placeholder="Dupont"
            className="w-full bg-bg-cream border border-border-cream rounded-xl px-3 py-2.5 text-ink-navy text-sm focus:outline-none focus:border-accent-coral transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-ink-gray uppercase tracking-wide">Email professionnel *</label>
        <input
          type="email"
          required
          value={contact.email}
          onChange={(e) => onChange({ ...contact, email: e.target.value })}
          placeholder="marie@agence-dupont.fr"
          className="w-full bg-bg-cream border border-border-cream rounded-xl px-3 py-2.5 text-ink-navy text-sm focus:outline-none focus:border-accent-coral transition-colors"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-ink-gray uppercase tracking-wide">
          Téléphone <span className="font-normal normal-case text-ink-gray/60">(facultatif)</span>
        </label>
        <input
          type="tel"
          value={contact.phone}
          onChange={(e) => onChange({ ...contact, phone: e.target.value })}
          placeholder="+33 6 00 00 00 00"
          className="w-full bg-bg-cream border border-border-cream rounded-xl px-3 py-2.5 text-ink-navy text-sm focus:outline-none focus:border-accent-coral transition-colors"
        />
      </div>

      <GlowButton
        type="submit"
        variant="primary"
        className="w-full justify-center mt-2"
        disabled={submitting}
      >
        Voir ma vidéo personnalisée
        <ArrowRight className="w-4 h-4" />
      </GlowButton>

      <p className="text-center text-xs text-ink-gray/60">
        Pas de spam. Vos données restent confidentielles.
      </p>
    </form>
  </motion.div>
);

// Video step
const StepVideo = ({
  firstName,
  videoError,
  onVideoError,
  onClose,
}: {
  firstName: string;
  videoError: boolean;
  onVideoError: () => void;
  onClose: () => void;
}) => (
  <motion.div
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="p-8 md:p-10"
  >
    <div className="text-center mb-6">
      <div className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
        Analyse envoyée ✓
      </div>
      <h3 className="text-xl font-bold text-ink-navy mb-2">
        {firstName ? `${firstName}, voici` : 'Voici'} exactement ce que je peux faire pour vous
      </h3>
      <p className="text-sm text-ink-gray">
        Vous recevrez votre analyse personnalisée par email dans quelques instants.
      </p>
    </div>

    {/* Video or placeholder */}
    {videoError ? (
      <VideoPlaceholder />
    ) : (
      <video
        autoPlay
        controls
        playsInline
        className="w-full rounded-2xl bg-ink-navy/5 aspect-video object-cover mb-6"
        onError={onVideoError}
      >
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>
    )}

    <div className="space-y-3">
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={onClose}>
        <GlowButton variant="primary" className="w-full justify-center">
          Booker un appel stratégique →
        </GlowButton>
      </a>
      <button
        onClick={onClose}
        className="w-full text-center text-xs text-ink-gray/60 hover:text-ink-gray transition-colors py-1"
      >
        Fermer et continuer sur le site
      </button>
    </div>
  </motion.div>
);

// Placeholder shown when video file is not yet uploaded
const VideoPlaceholder = () => (
  <div className="w-full aspect-video rounded-2xl bg-ink-navy/5 border-2 border-dashed border-border-cream flex flex-col items-center justify-center mb-6 gap-3">
    <div className="w-14 h-14 rounded-full bg-accent-coral/10 flex items-center justify-center">
      <Play className="w-6 h-6 text-accent-coral ml-1" />
    </div>
    <p className="text-sm font-semibold text-ink-navy">Vidéo bientôt disponible</p>
    <p className="text-xs text-ink-gray text-center px-4">
      En attendant, bookez un appel pour découvrir comment automatiser vos leads.
    </p>
  </div>
);
