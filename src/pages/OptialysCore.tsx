import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Zap, Settings, CheckCircle2, Shield, Building2, XCircle } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';

export const OptialysCore = () => {
  const { scrollYProgress } = useScroll();

  const problems = [
    {
      title: "We spend hours on tasks a machine could do.",
      desc: "Manual CRM entry, forgotten prospect follow-ups, reports compiled by hand every Monday — your team executes repetitive tasks instead of focusing on what truly generates value."
    },
    {
      title: "We tried AI tools but nothing really worked.",
      desc: "The tools exist. The problem is implementation. Without someone who understands your business and configures the systems in your real context, pilots remain pilots — and the ROI remains theoretical."
    },
    {
      title: "We depend on a technical provider for the slightest modification.",
      desc: "Every adjustment requires an external intervention, a ticket, a wait. You are not autonomous on your own infrastructure. And with every change in your business, everything has to be redone."
    }
  ];

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      badge: "Free · 30 minutes",
      title: "We understand your business before building anything.",
      desc: "We analyze your operational processes, identify the tasks that cost your team the most time, and propose a concrete automation plan — adapted to your sector and your real tools.\n\nYou leave with a clear vision of what can be automated, in what order, and for what impact.",
      includes: [
        "Mapping of your key processes",
        "Identification of priority automations",
        "Concrete and prioritized action plan",
        "Fixed quote — no surprises later"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      badge: "Delivered in 30 days",
      title: "We build and deploy automations adapted to your reality.",
      desc: "We configure each automation in your real environment — your tools, your CRM, your processes. Everything is done for you. The first visible result arrives in the first few days — not at the end of the project.",
      includes: [
        "Automations configured in your existing tools",
        "Integration with CRM, email, calendar, messaging",
        "First visible result from Day 3",
        "Team training included (short video per automation)",
        "Complete documentation of each delivered system"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      badge: "Delivery guaranteed",
      title: "We deliver. You take control.",
      desc: "At the end of the 30 days, your system runs autonomously. You have the documentation, the training, and full control of what was deployed.\n\nIf you want to keep evolving your AI infrastructure, that's where Optialys Partner comes in.",
      includes: [
        "100% operational and documented system",
        "Trained and autonomous team",
        "Delivery review + future recommendations",
        "Transition to Optialys Partner if desired"
      ]
    }
  ];

  const examples = [
    {
      sector: "Real Estate Company",
      situation: "Every new lead fills out a form on your site.",
      automation: "AI analyzes the profile, assigns a quality score, sends a personalized response in under 2 minutes and notifies the relevant agent on WhatsApp.",
      result: "No more leads without a rapid response."
    },
    {
      sector: "Fiduciary / Accounting",
      situation: "You receive dozens of invoices by email every week.",
      automation: "Each received invoice is automatically read, data extracted and saved in your accounting tool. Slack alert if an anomaly is detected.",
      result: "Zero manual invoice entry."
    },
    {
      sector: "Consulting Firm",
      situation: "Your team spends time compiling weekly reports.",
      automation: "Every Monday morning, a performance report is generated and sent automatically to stakeholders — up-to-date data, AI synthesis included.",
      result: "3 to 5 hours recovered per week."
    },
    {
      sector: "HR / Recruiting Company",
      situation: "You source candidates manually on LinkedIn.",
      automation: "A system continuously monitors profiles matching your criteria and sends you a qualified shortlist every morning in your recruiting tool.",
      result: "Sourcing volume multiplied without additional resources."
    },
    {
      sector: "Any Sector",
      situation: "Onboarding each new client takes several hours.",
      automation: "Upon signature, a folder is automatically created, a personalized welcome email is sent and internal tasks are assigned to your team.",
      result: "Client onboarding in under 10 minutes."
    },
    {
      sector: "Any Sector",
      situation: "Your CRM is full of duplicates and incomplete data.",
      automation: "A system runs at night to clean, deduplicate and enrich your contacts automatically — without touching your day.",
      result: "Clean and reliable CRM in under 7 days."
    }
  ];

  const clients = [
    {
      name: "Koosmik",
      sector: "FinTech (Paris)",
      desc: "The team spent 15 hours a week manually monitoring tenders. We deployed an automated monitoring system that scans platforms, filters by relevance and delivers a prioritized shortlist every morning in their CRM.",
      result: "15h+/week recovered · Active partnership"
    },
    {
      name: "AlternativeAML / GITS / OmniTrust",
      sector: "Compliance (BE/LU)",
      desc: "Three companies, same need: regular LinkedIn presence without a dedicated resource. We deployed an automated content generation pipeline — adapted to each brand's voice.",
      result: "5 posts/week per company · 0 human intervention"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/30 text-sm font-bold tracking-wide uppercase mb-8"
        >
          Optialys Core™ — Our deployment method
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          Your manual processes<br/>
          <span className="text-brand-blue">automated in 30 days.</span>
        </h1>
        
        <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto mb-12">
          Optialys Core™ is our custom deployment method. We analyze your operations, build the automations adapted to your business, and deploy everything — without you having to manage anything technically.
        </p>

        <div className="flex flex-col items-center justify-center gap-6">
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton className="text-lg px-8 py-4">
              Start with a free diagnostic <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
          <Link to="/roi-calculator" className="text-brand-blue hover:text-white transition-colors font-medium text-sm flex items-center gap-2">
            Calculate your potential ROI <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-brand-navy-2 border-y border-brand-blue/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What your teams are experiencing right now
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((prob, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 shrink-0">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">"{prob.title}"</h3>
                  <p className="text-brand-gray leading-relaxed flex-1">{prob.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-xl text-brand-gray">Three steps. Thirty days. Zero technical management on your end.</p>
          </div>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto md:before:translate-x-0 before:w-px before:bg-brand-blue/20">
            {steps.map((step, i) => (
              <FadeIn key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-navy border-2 border-brand-blue -translate-x-1/2 mt-6 z-10 hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-brand-blue/50 animate-ping" />
                  </div>

                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue ${i % 2 === 0 ? 'md:order-last' : ''}`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-navy border border-brand-blue/30 text-xs font-bold text-brand-blue mb-4">
                      STEP {i + 1} — {step.badge}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <div className="text-brand-gray leading-relaxed mb-6 whitespace-pre-line">
                      {step.desc}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/10 h-full">
                      <h4 className="text-white font-bold mb-6">What you get:</h4>
                      <ul className="space-y-4">
                        {step.includes.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-brand-gray">
                            <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="p-10 md:p-16 rounded-3xl bg-brand-navy border-2 border-brand-blue relative shadow-[0_0_50px_rgba(0,194,255,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-10 h-10 text-brand-blue" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our delivery guarantee</h2>
              </div>

              <div className="space-y-6 text-lg text-white leading-relaxed mb-12">
                <p className="font-medium">
                  Each automation is delivered functional within 30 days following the start of the deployment.
                </p>
                <p className="text-brand-gray">
                  If this deadline is not met for a reason depending on Optialys, we continue working without additional billing until complete delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-brand-blue/20">
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <span className="text-xl">🛡️</span> Delivery guaranteed in 30 days
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <span className="text-xl">📋</span> Fixed quote — no hidden costs
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <span className="text-xl">📁</span> Complete documentation delivered
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24 px-6 bg-brand-navy-2 border-y border-brand-blue/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What we automate concretely</h2>
            <p className="text-xl text-brand-gray">These examples are illustrative — your automations are defined during the diagnostic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((ex, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/20 backdrop-blur-sm h-full flex flex-col group hover:border-brand-blue/50 transition-colors">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-navy border border-brand-blue/30 text-xs font-bold text-brand-blue mb-6 self-start">
                    {ex.sector}
                  </div>
                  
                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="text-xs font-bold text-brand-gray uppercase mb-2">Situation</div>
                      <p className="text-white font-medium">{ex.situation}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-gray uppercase mb-2">Automation</div>
                      <p className="text-brand-gray text-sm leading-relaxed">{ex.automation}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-brand-blue/10">
                    <div className="text-xs font-bold text-brand-gray uppercase mb-2">Typical Result</div>
                    <p className="text-emerald-400 font-bold text-sm">{ex.result}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-brand-gray">
              Your automations are defined together during the free diagnostic.<br/>
              These examples illustrate the types of problems we solve.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">What we have already deployed</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/10 backdrop-blur-sm h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-brand-blue" />
                    <h3 className="text-xl font-bold text-white">{client.name}</h3>
                  </div>
                  <div className="text-sm text-brand-gray mb-6">{client.sector}</div>
                  
                  <p className="text-brand-gray leading-relaxed mb-8 flex-1 italic">
                    "{client.desc}"
                  </p>
                  
                  <div className="inline-block px-4 py-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-bold text-sm self-start">
                    → {client.result}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transition to Partner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-blue/20 border border-brand-blue/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">And after the 30 days?</h2>
                <p className="text-xl text-brand-gray leading-relaxed mb-10 max-w-2xl mx-auto">
                  Optialys Core™ gives you a functional AI infrastructure. Optialys Partner is what makes it grow every month — with Nolan as an AI consultant integrated into your team.
                </p>
                <Link to="/optialys-partner">
                  <GlowButton primary={false} className="text-lg px-8 py-4">
                    Discover Optialys Partner <ArrowRight className="w-5 h-5 ml-2" />
                  </GlowButton>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden bg-brand-navy-2">
        <div className="absolute inset-0 bg-brand-blue/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              The first step costs nothing.
            </h2>
            <p className="text-xl text-brand-gray leading-relaxed">
              The diagnostic is free, without commitment, and lasts 30 minutes. You leave with a concrete plan and a fixed quote — whether you work with us or not.
            </p>
          </div>
          
          <FadeIn direction="up">
            <CalendlyEmbed />
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
