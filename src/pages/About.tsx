import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, ShieldCheck, Users, Linkedin } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';

export const About = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            About Optialys
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
            We build the AI systems that allow European SMEs to scale without exploding their costs.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto space-y-32">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Photo Section (Left on desktop, Top on mobile) */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-start shrink-0">
              <div 
                className="relative rounded-[12px] overflow-hidden shadow-[0_0_40px_rgba(0,194,255,0.15)] max-w-sm w-full"
              >
                <img 
                  src="/nolan-headshot.jpg" 
                  alt="Nolan Prayagsing - Founder of Optialys" 
                  className="w-full h-auto object-cover aspect-[3/4] bg-brand-navy-2"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bio Section (Right on desktop, Bottom on mobile) */}
            <div className="w-full md:w-7/12 flex flex-col">
              {/* Name & Title Block */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2">Nolan Prayagsing</h2>
                <p className="text-xl font-medium text-brand-blue mb-4">Founder & AI Automation Consultant</p>
                <div className="flex flex-wrap gap-2 text-sm font-bold text-brand-gray">
                  <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">🇫🇷 Nice, France</span>
                  <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">SKEMA Business School</span>
                  <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">n8n Expert</span>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-6 text-brand-gray leading-relaxed text-lg mb-12">
                <p>
                  I'm 18 years old, studying for a Global BBA at SKEMA Business School —
                  and for the past 3 years, I've been working as an independent consultant,
                  helping companies build operational infrastructure using tools like Airtable.
                </p>
                <p>
                  Along the way, I noticed something that changed everything: every
                  infrastructure I built could be 10x more powerful with the right
                  automations connected to it. So I spent those 3 years learning AI
                  and automation — not in theory, but by deploying real systems for
                  real businesses.
                </p>
                <p>
                  Working with companies like Koosmik, AlternativeAML, OmniTrust,
                  GITS and LybraMedia taught me something essential: most SMEs
                  don't lack the tools — they lack someone who knows how to implement
                  them properly inside their specific business reality.
                </p>
                <p>
                  That's exactly why I built Optialys.
                </p>
                <p>
                  First, to establish a serious, structured entity that businesses
                  can trust and rely on. And second, because I'm convinced I can help
                  far more companies adopt AI the right way — not just deploying
                  automations once, but continuously improving their systems so they
                  stay ahead of their competition every single month.
                </p>
              </div>

              {/* Closing Statement */}
              <div className="text-[#00C2FF] text-2xl md:text-3xl font-bold leading-tight mb-10">
                <p>Optialys is not an agency that sells software.</p>
                <p>It's a partner that keeps your business ahead.</p>
              </div>

              {/* Social Link */}
              <div>
                <a 
                  href="https://www.linkedin.com/in/nolan-prayagsing-a70815278/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 hover:bg-brand-blue hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all duration-300"
                  aria-label="Nolan Prayagsing on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Our DNA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/10 text-center">
              <Target className="w-12 h-12 text-brand-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-brand-gray leading-relaxed">
                Democratize access to advanced automation technologies for European SMEs, transforming AI into a tangible and measurable competitive advantage.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/10 text-center">
              <Lightbulb className="w-12 h-12 text-brand-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
              <p className="text-brand-gray leading-relaxed">
                Pragmatic and ROI-oriented. We don't deploy AI for the buzz, but only where it generates a massive time saving or a direct increase in revenue.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-blue/10 text-center">
              <ShieldCheck className="w-12 h-12 text-brand-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-brand-gray leading-relaxed">
                Total transparency, obligation of results, and an absolute commitment to our clients' success. We are your trusted technical partner.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mt-32 py-24 bg-brand-navy-2 border-y border-brand-blue/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your operations?</h2>
            <p className="text-xl text-brand-gray mb-12">
              Let's discuss your current challenges and see how AI automation can help you overcome them.
            </p>
            <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
              <GlowButton className="text-lg px-8 py-4">
                Schedule a call <ArrowRight className="w-5 h-5 ml-2" />
              </GlowButton>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

// Simple inline logo for the about page
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-24 h-24 ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
      <path d="M 35 50 A 15 15 0 1 1 50 65" stroke="#00C2FF" strokeWidth="4" strokeLinecap="round" />
      <path d="M 65 50 A 15 15 0 0 0 50 35" stroke="#0098CC" strokeWidth="4" strokeLinecap="round" />
      <path d="M 25 50 A 25 25 0 0 1 65 20 L 75 10 A 35 35 0 0 0 15 50 Z" fill="#00C2FF" />
      <path d="M 65 20 L 75 25 L 70 35 Z" fill="#00C2FF" />
      <path d="M 75 50 A 25 25 0 0 1 35 80 L 25 90 A 35 35 0 0 0 85 50 Z" fill="#0098CC" />
      <path d="M 35 80 L 25 75 L 30 65 Z" fill="#0098CC" />
    </svg>
  </div>
);
