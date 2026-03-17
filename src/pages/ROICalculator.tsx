import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { Link } from 'react-router-dom';

export const ROICalculator = () => {
  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(35);
  const [automationRate, setAutomationRate] = useState(50);
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Calculations
  const annualCost = employees * hours * rate * 52;
  const potentialSavings = annualCost * (automationRate / 100);
  const timeSaved = employees * hours * (automationRate / 100);
  const fteSaved = timeSaved / 35;

  // Urgency Level
  let urgencyLevel = 'LOW';
  let urgencyColor = 'bg-brand-gray';
  let urgencyText = 'text-brand-gray';
  
  if (annualCost >= 60000) {
    urgencyLevel = 'CRITICAL';
    urgencyColor = 'bg-red-500';
    urgencyText = 'text-red-500';
  } else if (annualCost >= 30000) {
    urgencyLevel = 'HIGH';
    urgencyColor = 'bg-brand-blue';
    urgencyText = 'text-brand-blue';
  } else if (annualCost >= 10000) {
    urgencyLevel = 'MEDIUM';
    urgencyColor = 'bg-[#8A9BB5]';
    urgencyText = 'text-[#8A9BB5]';
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate webhook/form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
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
            📊 Free Tool
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            How much does manual data entry really cost you every year?
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto mb-10">
            Most executives massively underestimate the real cost of repetitive tasks in their company. This calculator gives you the exact figure — in euros, in hours, and in full-time equivalent.
          </p>
          
          <div className="p-6 rounded-2xl bg-brand-card/50 border border-brand-blue/10 max-w-2xl mx-auto mb-12">
            <p className="text-white font-medium mb-2">
              "On average, a 10-person SME loses €47,000/year on avoidable manual tasks."
            </p>
            <p className="text-sm text-brand-gray">
              Source: estimate based on 30€/h × 30h/week × 52 weeks
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto" id="calculator">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Inputs */}
          <div className="flex-1 space-y-10">
            <FadeIn direction="left">
              <div className="p-8 rounded-3xl bg-brand-card/50 border border-brand-blue/20 backdrop-blur-sm space-y-10">
                
                {/* Input 1 */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-bold block">How many employees spend time on repetitive tasks?</label>
                    <span className="text-2xl font-black text-brand-blue">{employees}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="50" 
                    value={employees} 
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                </div>

                {/* Input 2 */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-bold block">How many hours per week does each spend on these tasks?</label>
                    <span className="text-2xl font-black text-brand-blue">{hours}h</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="30" 
                    value={hours} 
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                </div>

                {/* Input 3 */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-bold block">What is the average hourly cost of your employees? (salary + taxes)</label>
                    <span className="text-2xl font-black text-brand-blue">{rate}€</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" max="80" 
                    value={rate} 
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                </div>

                {/* Input 4 */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <label className="text-white font-bold block">What portion of these tasks could be automated?</label>
                      <p className="text-xs text-brand-gray mt-1">On average, Optialys automates 50 to 70% of repetitive tasks identified during the diagnostic.</p>
                    </div>
                    <span className="text-2xl font-black text-brand-blue">{automationRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" max="80" step="5"
                    value={automationRate} 
                    onChange={(e) => setAutomationRate(Number(e.target.value))}
                    className="w-full h-2 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Right Column - Results */}
          <div className="flex-1 lg:sticky lg:top-32 h-fit">
            <FadeIn direction="right">
              <div className="p-8 rounded-3xl bg-[#132038] border-2 border-brand-blue shadow-[0_0_40px_rgba(0,194,255,0.15)] flex flex-col h-full">
                
                <div className="space-y-8 flex-1">
                  <div>
                    <p className="text-brand-gray font-bold text-sm uppercase tracking-wider mb-2">What these tasks cost you every year</p>
                    <div className="text-4xl md:text-5xl font-black text-[#FF4444]">
                      {formatCurrency(annualCost)} <span className="text-2xl text-brand-gray font-medium">/ year</span>
                    </div>
                  </div>

                  <div className="h-px w-full bg-brand-blue/20" />

                  <div>
                    <p className="text-brand-gray font-bold text-sm uppercase tracking-wider mb-2">What you could recover with AI</p>
                    <div className="text-3xl md:text-4xl font-black text-brand-blue">
                      {formatCurrency(potentialSavings)} <span className="text-xl text-brand-gray font-medium">saved / year</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-brand-gray font-bold text-xs uppercase tracking-wider mb-2">Hours freed for your team each week</p>
                      <div className="text-2xl font-black text-brand-blue">
                        {timeSaved.toFixed(0)}h <span className="text-sm text-brand-gray font-medium">/ week</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-brand-gray font-bold text-xs uppercase tracking-wider mb-2">Full-time equivalent recovered</p>
                      <div className="text-2xl font-black text-white">
                        {fteSaved.toFixed(1)} FTE
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-white">Urgency Level</span>
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

      {/* Lead Capture */}
      <section className="px-6 max-w-3xl mx-auto mt-24">
        <FadeIn direction="up">
          <div className="p-8 md:p-10 rounded-3xl bg-brand-navy-2 border border-brand-blue/20">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">✅ Your ROI report is on the way.</h3>
                <p className="text-brand-gray mb-8">
                  You will receive it in the next 24h by email.
                </p>
                
                <div className="p-6 rounded-2xl bg-brand-navy border border-brand-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">In the meantime — book your free diagnostic</h4>
                  <p className="text-brand-gray text-sm mb-6">to transform this simulation into a real action plan.</p>
                  <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
                    <GlowButton className="w-full justify-center">
                      Book my slot <ArrowRight className="w-4 h-4 ml-2" />
                    </GlowButton>
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Receive your personalized ROI report by email</h2>
                  <p className="text-brand-gray">
                    We add to your simulation an analysis of automations specific to your sector — for free.
                  </p>
                </div>

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

                  <input type="hidden" name="teamSize" value={employees} />

                  <GlowButton 
                    type="submit" 
                    className="w-full justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Receive my free ROI report'} 
                    {!formStatus && <ArrowRight className="w-4 h-4 ml-2" />}
                  </GlowButton>
                  
                  <p className="text-center text-xs text-brand-gray mt-4">
                    🔒 No spam. Your report arrives within 24h.
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
