import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export const ROICalculator = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(35);
  const [automationRate, setAutomationRate] = useState(50);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const annualCost = employees * hours * rate * 52;
  const potentialSavings = annualCost * (automationRate / 100);
  const timeSaved = employees * hours * (automationRate / 100);
  const fteSaved = timeSaved / 35;

  let urgencyLevel = fr ? 'FAIBLE' : 'LOW';
  let urgencyColor = 'bg-brand-gray';
  let urgencyText = 'text-brand-gray';

  if (annualCost >= 60000) {
    urgencyLevel = fr ? 'CRITIQUE' : 'CRITICAL';
    urgencyColor = 'bg-red-500';
    urgencyText = 'text-red-500';
  } else if (annualCost >= 30000) {
    urgencyLevel = fr ? 'ÉLEVÉ' : 'HIGH';
    urgencyColor = 'bg-brand-blue';
    urgencyText = 'text-brand-blue';
  } else if (annualCost >= 10000) {
    urgencyLevel = fr ? 'MOYEN' : 'MEDIUM';
    urgencyColor = 'bg-[#8A9BB5]';
    urgencyText = 'text-[#8A9BB5]';
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat(fr ? 'fr-FR' : 'en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const T = {
    tool: fr ? "📊 Outil gratuit" : "📊 Free Tool",
    title: fr ? "Combien vous coûte vraiment la saisie manuelle chaque année ?" : "How much does manual data entry really cost you every year?",
    subtitle: fr ? "La plupart des dirigeants sous-estiment massivement le vrai coût des tâches répétitives dans leur société. Ce calculateur vous donne le chiffre exact — en euros, en heures, et en ETP." : "Most executives massively underestimate the real cost of repetitive tasks in their company. This calculator gives you the exact figure — in euros, in hours, and in full-time equivalent.",
    quote: fr ? "« En moyenne, une PME de 10 personnes perd 47 000 €/an sur des tâches manuelles évitables. »" : "\"On average, a 10-person SME loses €47,000/year on avoidable manual tasks.\"",
    source: fr ? "Source : estimation basée sur 30€/h × 30h/semaine × 52 semaines" : "Source: estimate based on 30€/h × 30h/week × 52 weeks",
    emp: fr ? "Combien de collaborateurs passent du temps sur des tâches répétitives ?" : "How many employees spend time on repetitive tasks?",
    hrs: fr ? "Combien d’heures par semaine chacun y consacre ?" : "How many hours per week does each spend on these tasks?",
    rate: fr ? "Quel est le coût horaire moyen de vos collaborateurs ? (salaire + charges)" : "What is the average hourly cost of your employees? (salary + taxes)",
    auto: fr ? "Quelle part de ces tâches pourrait être automatisée ?" : "What portion of these tasks could be automated?",
    autoNote: fr ? "En moyenne, Optialys automatise 50 à 70% des tâches répétitives identifiées pendant le diagnostic." : "On average, Optialys automates 50 to 70% of repetitive tasks identified during the diagnostic.",
    cost: fr ? "Ce que ces tâches vous coûtent chaque année" : "What these tasks cost you every year",
    year: fr ? "/ an" : "/ year",
    recover: fr ? "Ce que vous pourriez récupérer avec l’IA" : "What you could recover with AI",
    savedYear: fr ? "économisés / an" : "saved / year",
    hoursFreed: fr ? "Heures libérées pour votre équipe chaque semaine" : "Hours freed for your team each week",
    week: fr ? "/ semaine" : "/ week",
    fte: fr ? "Équivalent temps plein récupéré" : "Full-time equivalent recovered",
    urgency: fr ? "Niveau d’urgence" : "Urgency Level",
    reportTitle: fr ? "Recevez votre rapport ROI personnalisé par email" : "Receive your personalized ROI report by email",
    reportSub: fr ? "Nous ajoutons à votre simulation une analyse des automatisations propres à votre secteur — gratuitement." : "We add to your simulation an analysis of automations specific to your sector — for free.",
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
    sending: fr ? "Envoi…" : "Sending...",
    submitReport: fr ? "Recevoir mon rapport ROI gratuit" : "Receive my free ROI report",
    noSpam: fr ? "🔒 Pas de spam. Votre rapport arrive sous 24h." : "🔒 No spam. Your report arrives within 24h.",
    successTitle: fr ? "✅ Votre rapport ROI est en route." : "✅ Your ROI report is on the way.",
    successSub: fr ? "Vous le recevrez dans les 24h par email." : "You will receive it in the next 24h by email.",
    meantimeTitle: fr ? "En attendant — réservez votre diagnostic gratuit" : "In the meantime — book your free diagnostic",
    meantimeSub: fr ? "pour transformer cette simulation en plan d’action réel." : "to transform this simulation into a real action plan.",
    bookSlot: fr ? "Réserver mon créneau" : "Book my slot",
  };

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-6">
            <Calculator className="w-4 h-4" />
            {T.tool}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            {T.title}
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto mb-10">
            {T.subtitle}
          </p>

          <div className="p-6 rounded-2xl bg-brand-card/50 border border-brand-blue/10 max-w-2xl mx-auto mb-12">
            <p className="text-white font-medium mb-2">
              {T.quote}
            </p>
            <p className="text-sm text-brand-gray">
              {T.source}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto" id="calculator">
        <div className="flex flex-col lg:flex-row gap-12">

          <div className="flex-1 space-y-10">
            <FadeIn direction="left">
              <div className="p-8 rounded-3xl bg-brand-card/50 border border-brand-blue/20 backdrop-blur-sm space-y-10">

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-bold block">{T.emp}</label>
                    <span className="text-2xl font-black text-brand-blue">{employees}</span>
                  </div>
                  <input type="range" min="1" max="50" value={employees} onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-bold block">{T.hrs}</label>
                    <span className="text-2xl font-black text-brand-blue">{hours}h</span>
                  </div>
                  <input type="range" min="1" max="30" value={hours} onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-bold block">{T.rate}</label>
                    <span className="text-2xl font-black text-brand-blue">{rate}€</span>
                  </div>
                  <input type="range" min="20" max="80" value={rate} onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <label className="text-white font-bold block">{T.auto}</label>
                      <p className="text-xs text-brand-gray mt-1">{T.autoNote}</p>
                    </div>
                    <span className="text-2xl font-black text-brand-blue">{automationRate}%</span>
                  </div>
                  <input type="range" min="20" max="80" step="5" value={automationRate} onChange={(e) => setAutomationRate(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue" />
                </div>

              </div>
            </FadeIn>
          </div>

          <div className="flex-1 lg:sticky lg:top-32 h-fit">
            <FadeIn direction="right">
              <div className="p-8 rounded-3xl bg-[#132038] border-2 border-brand-blue shadow-[0_0_40px_rgba(0,194,255,0.15)] flex flex-col h-full">
                <div className="space-y-8 flex-1">
                  <div>
                    <p className="text-brand-gray font-bold text-sm uppercase tracking-wider mb-2">{T.cost}</p>
                    <div className="text-4xl md:text-5xl font-black text-[#FF4444]">
                      {formatCurrency(annualCost)} <span className="text-2xl text-brand-gray font-medium">{T.year}</span>
                    </div>
                  </div>

                  <div className="h-px w-full bg-brand-blue/20" />

                  <div>
                    <p className="text-brand-gray font-bold text-sm uppercase tracking-wider mb-2">{T.recover}</p>
                    <div className="text-3xl md:text-4xl font-black text-brand-blue">
                      {formatCurrency(potentialSavings)} <span className="text-xl text-brand-gray font-medium">{T.savedYear}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-brand-gray font-bold text-xs uppercase tracking-wider mb-2">{T.hoursFreed}</p>
                      <div className="text-2xl font-black text-brand-blue">
                        {timeSaved.toFixed(0)}h <span className="text-sm text-brand-gray font-medium">{T.week}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-brand-gray font-bold text-xs uppercase tracking-wider mb-2">{T.fte}</p>
                      <div className="text-2xl font-black text-white">
                        {fteSaved.toFixed(1)} {fr ? 'ETP' : 'FTE'}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-white">{T.urgency}</span>
                      <span className={`text-sm font-bold ${urgencyText}`}>{urgencyLevel}</span>
                    </div>
                    <div className="w-full h-2 bg-brand-navy rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${urgencyColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (annualCost / 80000) * 100)}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-3xl mx-auto mt-24">
        <FadeIn direction="up">
          <div className="p-8 md:p-10 rounded-3xl bg-brand-navy-2 border border-brand-blue/20">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{T.successTitle}</h3>
                <p className="text-brand-gray mb-8">
                  {T.successSub}
                </p>

                <div className="p-6 rounded-2xl bg-brand-navy border border-brand-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">{T.meantimeTitle}</h4>
                  <p className="text-brand-gray text-sm mb-6">{T.meantimeSub}</p>
                  <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
                    <GlowButton className="w-full justify-center">
                      {T.bookSlot} <ArrowRight className="w-4 h-4 ml-2" />
                    </GlowButton>
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">{T.reportTitle}</h2>
                  <p className="text-brand-gray">
                    {T.reportSub}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-brand-gray">{T.firstName} *</label>
                      <input type="text" id="firstName" required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-brand-gray">{T.profEmail} *</label>
                      <input type="email" id="email" required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-brand-gray">{T.company} *</label>
                      <input type="text" id="company" required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="sector" className="text-sm font-bold text-brand-gray">{T.sector} *</label>
                      <select id="sector" required
                        className="w-full bg-brand-navy border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                        <option value="">{T.selectSector}</option>
                        <option value="Real Estate">{T.secRe}</option>
                        <option value="Fiduciary">{T.secFid}</option>
                        <option value="Consulting">{T.secCons}</option>
                        <option value="HR">{T.secHr}</option>
                        <option value="Other">{T.secOther}</option>
                      </select>
                    </div>
                  </div>

                  <input type="hidden" name="teamSize" value={employees} />

                  <GlowButton
                    type="submit"
                    className="w-full justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? T.sending : T.submitReport}
                    {formStatus === 'idle' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </GlowButton>

                  <p className="text-center text-xs text-brand-gray mt-4">
                    {T.noSpam}
                  </p>
                </form>
              </>
            )}
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
