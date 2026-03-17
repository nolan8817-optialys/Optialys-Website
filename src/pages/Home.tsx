import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Settings, X, Building2 } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';

const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-[90vh] flex flex-col items-center justify-center text-center gap-12 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-8 w-full"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-xs font-bold tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          Your AI Growth Team — Available 24/7
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
          We Guarantee <br/>
          <span className="relative inline-block my-1">
            <span className="italic font-serif text-gradient-blue pr-2">25 Hours Saved</span>
            <svg className="absolute w-full h-full top-0 left-0 -z-10 scale-110 text-brand-blue/40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                d="M10,50 Q50,10 90,50 Q50,90 10,50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
              />
            </svg>
          </span>
          <br/>
          Every Month.<br/>
          <span className="text-3xl md:text-4xl text-brand-gray mt-4 block">Or We Work For Free.</span>
        </h1>
        
        <p className="text-xl text-brand-gray max-w-2xl leading-relaxed mx-auto">
          For European SMEs ready to stop being their own bottleneck. We build custom automation systems for operations, marketing, and sales — so scaling <span className="font-bold text-white border-b-2 border-brand-blue">finally happens</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full flex-wrap">
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton className="w-full sm:w-auto text-lg px-8 py-4">
              Get Started <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </a>
          <Link to="/diagnostic">
            <GlowButton primary={false} className="w-full sm:w-auto text-lg px-8 py-4 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Free Diagnostic
            </GlowButton>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const SocialProof = () => (
  <FadeIn>
    <section className="py-12 border-y border-brand-blue/10 bg-brand-card/30 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-widest text-brand-gray uppercase mb-8 font-mono">Businesses I've worked with</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500 text-white">
          <span className="font-sans text-2xl font-bold tracking-tight">Alternative AML</span>
          <span className="font-sans text-2xl font-black tracking-widest text-brand-blue">G.I.T.S</span>
          <span className="font-serif text-2xl font-bold italic">Omnitrust</span>
          <span className="font-sans text-2xl font-medium lowercase tracking-wide">koosmik</span>
          <span className="font-sans text-2xl font-bold">Lybra<span className="font-light">Media</span></span>
        </div>
      </div>
    </section>
  </FadeIn>
);

const Stats = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-6 h-6" />, value: "15h+", label: "Saved on average per week by our clients" },
            { icon: <Settings className="w-6 h-6" />, value: "Day 3", label: "First visible result after deployment" },
            { icon: <CheckCircle2 className="w-6 h-6" />, value: "30 Days", label: "Guaranteed deployment timeframe" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/20 backdrop-blur-sm text-center group hover:border-brand-blue/50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-brand-gray font-medium">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link to="/roi-calculator" className="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors font-medium">
              Calculate your potential ROI <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 px-6 bg-brand-navy-2 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold text-white mb-8">Why AI hasn't saved your team's time yet</h2>
            <div className="space-y-8">
              {[
                { title: "We bought the tools, but nobody uses them.", desc: "You pay for AI subscriptions, but your team still spends 15 hours a week copy-pasting client data between emails, spreadsheets, and your CRM." },
                { title: "We tried a pilot, and it went nowhere.", desc: "You spent months on a proof-of-concept that looked great on a slide deck, but never actually replaced the manual admin work your senior staff hates doing." },
                { title: "Every small change requires an IT ticket.", desc: "You want to tweak a simple lead routing rule, but you have to wait three weeks and pay a developer to rewrite the code." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-brand-gray leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="text-3xl font-bold text-brand-blue mb-8">Your operations, fully automated in 30 days.</h2>
            <div className="p-8 rounded-2xl border-2 border-brand-blue bg-brand-blue/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[50px] rounded-full" />
              <p className="text-lg text-white leading-relaxed mb-6 relative z-10">
                We build custom AI systems that connect your existing tools to handle repetitive tasks automatically. In just 30 days, we deploy the workflows and train your team. You just approve the final setup and watch the hours saved pile up.
              </p>
              <p className="text-lg font-bold text-brand-blue relative z-10">
                We guarantee a measurable ROI within 30 days, or we refund your entire investment.
              </p>
              <div className="mt-8 relative z-10">
                <Link to="/optialys-core">
                  <GlowButton primary={false}>Explore the 30-Day Deployment Plan <ArrowRight className="w-4 h-4 ml-2" /></GlowButton>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const ClientReferences = () => {
  const clients = [
    {
      name: "Koosmik",
      sector: "FinTech (Paris)",
      project: "RFP Radar — Automated tender monitoring",
      result: "⚡ 15h+/week saved",
      stack: "n8n · Claude AI · Pipedrive"
    },
    {
      name: "AlternativeAML / GITS / OmniTrust",
      sector: "Compliance (BE/LU)",
      project: "Automated LinkedIn content pipeline — 3 companies",
      result: "⚡ 5 posts/week · 0 human intervention",
      stack: "n8n · Claude AI · Airtable · LinkedIn API"
    },
    {
      name: "LybraMedia",
      sector: "Media Agency",
      project: "Comprehensive Onboarding Infrastructure",
      result: "⚡ 100% automated onboarding",
      stack: "Airtable · n8n · Make"
    },
    {
      name: "lafa-asbl",
      sector: "Association (Belgium)",
      project: "Internal operational process automation",
      result: "✅ Deployed",
      stack: "n8n · Google Workspace"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-navy-2 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by</h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Systems deployed on real businesses. Measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-brand-blue" />
                  <h3 className="text-xl font-bold text-white">{client.name}</h3>
                </div>
                <div className="text-sm text-brand-gray mb-6">{client.sector}</div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-brand-gray uppercase mb-1">Project</div>
                    <div className="text-white font-medium">{client.project}</div>
                  </div>
                  
                  <div className="inline-block px-3 py-1.5 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-bold text-sm">
                    {client.result}
                  </div>
                  
                  <div className="pt-4 border-t border-brand-blue/10">
                    <div className="text-xs font-bold text-brand-gray uppercase mb-2">Tech Stack</div>
                    <div className="text-sm text-brand-gray font-mono">{client.stack}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Two ways to work with us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Optialys Core */}
          <FadeIn direction="left">
            <div className="relative overflow-hidden rounded-3xl bg-brand-card/50 border border-brand-blue/20 p-10 h-full flex flex-col group hover:border-brand-blue/50 transition-colors">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-6 self-start">
                30 days
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Optialys Core™</h3>
              <p className="text-xl font-medium text-brand-blue mb-6">
                One project. One deployment. Results.
              </p>
              <p className="text-brand-gray leading-relaxed mb-10 flex-1">
                Custom automations deployed in 30 days. Delivery guarantee included.
              </p>
              <Link to="/optialys-core" className="w-full">
                <GlowButton className="w-full">
                  Discover <ArrowRight className="w-5 h-5 ml-2" />
                </GlowButton>
              </Link>
            </div>
          </FadeIn>

          {/* Card 2: Optialys Partner */}
          <FadeIn direction="right">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-[#0098CC] p-10 h-full flex flex-col text-brand-navy">
              <motion.div 
                className="absolute inset-0 bg-white/10"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/10 border border-brand-navy/20 text-brand-navy font-bold text-sm mb-6 self-start">
                  Partnership
                </div>
                <h3 className="text-3xl font-bold mb-4">Optialys Partner</h3>
                <p className="text-xl font-medium mb-6 opacity-90">
                  Your AI consultant — integrated into your team.
                </p>
                <p className="leading-relaxed mb-10 flex-1 font-medium opacity-80">
                  AI infrastructure that evolves every month. Setup included. No long-term commitment.
                </p>
                <Link to="/optialys-partner" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-navy text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-brand-navy/50 transition-all flex items-center justify-center"
                  >
                    Discover <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <Stats />
      <ProblemSolution />
      <ClientReferences />
      <CTASection />
    </>
  );
};
