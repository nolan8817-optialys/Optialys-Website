import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Settings, Compass, MessageSquare, CheckCircle2, XCircle, Building2, Shield } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';
import { CalendlyEmbed } from '../components/CalendlyEmbed';

export const OptialysPartner = () => {
  const { scrollYProgress } = useScroll();

  const comparison = {
    without: [
      "Static automations that don't adapt",
      "No one to identify new AI gains",
      "AI training budget with no concrete results",
      "AI decisions without internal expertise",
      "Recruiting an AI profile impossible to find"
    ],
    with: [
      "AI infrastructure that evolves every month",
      "New automations identified and deployed continuously",
      "AI strategic advice aligned with your business goals",
      "A single point of contact who knows your business deeply",
      "The expertise of a senior AI consultant — without the cost of a full-time employee"
    ]
  };

  const monthlyFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "New automations",
      desc: "Every month, we identify the next processes to automate in your business and deploy them. Your AI infrastructure grows continuously."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Maintenance & optimization",
      desc: "All your active systems are monitored continuously. We optimize what can be optimized and intervene proactively before you even notice an issue."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "AI strategic advice",
      desc: "A monthly call to review your business priorities and align your AI strategy accordingly. You make AI decisions with someone who knows your sector and tools."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Dedicated support",
      desc: "A direct communication channel with Nolan. Questions, adjustments, new ideas — response under 24h, without tickets, without intermediaries."
    }
  ];

  const timeline = [
    {
      month: "MONTH 1 & 2",
      title: "Onboarding & Initial Deployment",
      desc: "The first two months are dedicated to an in-depth diagnostic and the deployment of the first foundational automations. It's the same work as Optialys Core™ — included in the partnership. You do not pay a separate setup fee."
    },
    {
      month: "MONTH 3",
      title: "Your infrastructure is running",
      desc: "Your systems are operational. The results are visible. We start identifying the next high-impact automations."
    },
    {
      month: "MONTH 3 AND BEYOND",
      title: "Active partnership",
      desc: "Every month: new automations deployed, optimizations, strategic advice. Your AI infrastructure becomes a true competitive advantage — not just a tool."
    }
  ];

  const clients = [
    {
      name: "Koosmik",
      sector: "FinTech (Paris)",
      desc: "Active partnership since the deployment of the RFP Radar. New modules identified and deployed continuously.",
      result: "15h+/week recovered · Ongoing partnership"
    },
    {
      name: "AlternativeAML / GITS / OmniTrust",
      sector: "Compliance (BE/LU)",
      desc: "Three companies, automated LinkedIn infrastructure, maintenance and monthly evolution of the content pipeline.",
      result: "5 posts/week · 0 human intervention · Active maintenance"
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
          Optialys Partner — Embedded AI Consultant
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          Your internal AI consultant —<br/>
          <span className="text-brand-blue">without recruiting.</span>
        </h1>
        
        <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto mb-12">
          Optialys Partner is Nolan integrated into your team as a dedicated AI consultant — every month, new automations deployed, your infrastructure evolving, and continuous AI strategic vision.
        </p>

        <div className="flex flex-col items-center justify-center">
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton className="text-lg px-8 py-4">
              Discuss a partnership <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
          <p className="mt-4 text-sm font-medium text-brand-gray">
            No long-term commitment · Cancel anytime
          </p>
        </div>
      </section>

      {/* Positioning Comparison */}
      <section className="py-24 px-6 bg-brand-navy-2 border-y border-brand-blue/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What you have today vs what you will have
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="p-8 rounded-3xl bg-brand-card/30 border border-red-500/20 h-full">
                <h3 className="text-xl font-bold text-white mb-8 pb-4 border-b border-red-500/20">Without Optialys Partner</h3>
                <ul className="space-y-6">
                  {comparison.without.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-gray">
                      <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="p-8 rounded-3xl bg-brand-navy border-2 border-brand-blue relative shadow-[0_0_30px_rgba(0,194,255,0.1)] h-full">
                <h3 className="text-xl font-bold text-white mb-8 pb-4 border-b border-brand-blue/20">With Optialys Partner</h3>
                <ul className="space-y-6">
                  {comparison.with.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white font-medium">
                      <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What we do every month */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What you get every month</h2>
            <p className="text-xl text-brand-gray">An active partnership — not passive maintenance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monthlyFeatures.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/20 backdrop-blur-sm h-full flex flex-col group hover:border-brand-blue/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-brand-gray leading-relaxed flex-1">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-brand-navy-2 border-y border-brand-blue/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">How an Optialys Partner partnership starts</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto md:before:translate-x-0 before:w-px before:bg-brand-blue/20">
            {timeline.map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="relative flex flex-col md:flex-row gap-8 items-center">
                  
                  <div className="hidden md:flex w-1/2 justify-end pr-12">
                    {i % 2 === 0 && (
                      <div className="text-right">
                        <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-2">
                          {step.month}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-brand-gray leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-brand-navy border-2 border-brand-blue -translate-x-1/2 z-10">
                    <div className="absolute inset-0 rounded-full bg-brand-blue/50 animate-ping" />
                  </div>

                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    {i % 2 !== 0 && (
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-2">
                          {step.month}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-brand-gray leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                    {/* Mobile view fallback */}
                    <div className="md:hidden">
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-2">
                        {step.month}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-brand-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card border border-brand-blue/20 text-sm font-medium text-brand-gray">
              <Shield className="w-4 h-4 text-brand-blue" /> No long-term commitment. You can stop at any time with a 30-day notice.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Optialys Partner is for you if...</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="space-y-6">
                {[
                  "Your business generates enough processes to justify continuous AI evolution every month",
                  "You have seen the results of a first automation and want to go further",
                  "You don't have the resources to recruit an internal AI profile",
                  "You want a single point of contact who understands your business deeply over the long term",
                  "You are looking for an active partnership — not just maintenance"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-brand-card/30 border border-brand-blue/10">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="p-8 rounded-3xl bg-brand-card/50 border border-red-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Optialys Partner is not suitable if:</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium mb-2">You haven't tested automation in your business yet</p>
                      <Link to="/optialys-core" className="text-brand-blue text-sm hover:underline flex items-center gap-1">
                        → Start with Optialys Core™
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium mb-2">You are looking for a one-off provider for a defined project</p>
                      <Link to="/optialys-core" className="text-brand-blue text-sm hover:underline flex items-center gap-1">
                        → Optialys Core™ is more suitable
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-24 px-6 bg-brand-navy-2 border-y border-brand-blue/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">What it looks like in practice</h2>
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

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden bg-brand-navy-2">
        <div className="absolute inset-0 bg-brand-blue/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              A partnership starts with a conversation.
            </h2>
            <p className="text-xl text-brand-gray leading-relaxed">
              We discuss your business, your current situation, and what an Optialys Partner partnership could bring you concretely.
              <br/><br/>
              <span className="text-white font-medium">No pitch. No generic template. A real conversation about your reality.</span>
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
