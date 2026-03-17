import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code, CheckCircle2, Users } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';

export const Services = () => {
  const services = [
    {
      id: "core",
      icon: <Zap className="w-12 h-12" />,
      badge: "Project · 30 days",
      title: "Optialys Core™",
      desc: "A custom, complete deployment, delivered in 30 days. Ideal to start and see concrete results quickly.",
      includes: [
        "Free diagnostic included",
        "Automations adapted to your business",
        "30-day delivery guarantee"
      ],
      cta: "Discover Optialys Core™",
      link: "/optialys-core"
    },
    {
      id: "partner",
      icon: <Users className="w-12 h-12" />,
      badge: "Partnership · Long term",
      title: "Optialys Partner",
      desc: "Nolan integrated into your team as a dedicated AI consultant — new automations every month, strategic advice, infrastructure that evolves with your business.",
      includes: [
        "Setup included in the first months",
        "New automations deployed every month",
        "No long-term commitment"
      ],
      cta: "Discover Optialys Partner",
      link: "/optialys-partner"
    }
  ];

  const additionalService = {
    id: "custom",
    icon: <Code className="w-12 h-12" />,
    badge: "On quote",
    title: "Custom Development",
    desc: "For specific needs outside the standard framework — complex integrations, advanced AI agents, special projects.",
    cta: "Request a quote",
    link: "https://calendly.com/nolprayagsing/automation-strategy-audit"
  };

  const techStack = [
    "n8n", "Claude AI", "GPT-4", "Airtable", "Google Workspace",
    "WhatsApp Business API", "Slack", "Apollo.io", "Pipedrive",
    "Dropcontact", "LinkedIn API", "Make (migration)"
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Our Offers
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Two ways to work with Optialys — depending on where you are.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="flex flex-col h-full p-10 rounded-3xl bg-brand-card/30 border border-brand-blue/10 hover:border-brand-blue/30 transition-colors">
                <div className="w-20 h-20 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8">
                  {service.icon}
                </div>

                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy border border-brand-blue/30 text-sm font-bold text-brand-blue mb-6 self-start">
                  {service.badge}
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-lg text-brand-gray leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>

                <div className="bg-brand-navy/50 border border-brand-blue/10 rounded-xl p-6 mb-8">
                  <h4 className="text-white font-bold mb-4">Key points:</h4>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-gray">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.cta && service.link && (
                  service.link.startsWith('http') ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                      <GlowButton className="w-full">
                        {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                      </GlowButton>
                    </a>
                  ) : (
                    <Link to={service.link} className="mt-auto">
                      <GlowButton className="w-full">
                        {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                      </GlowButton>
                    </Link>
                  )
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Additional Service Separator */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent w-full" />
      </div>

      <section className="px-6 max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row gap-8 items-center p-10 rounded-3xl bg-brand-card/30 border border-brand-blue/10">
            <div className="w-20 h-20 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
              {additionalService.icon}
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-navy border border-brand-blue/30 text-xs font-bold text-brand-blue mb-4">
                {additionalService.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">ADDITIONAL SERVICE — {additionalService.title}</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                {additionalService.desc}
              </p>
              <a href={additionalService.link} target="_blank" rel="noopener noreferrer">
                <GlowButton primary={false} className="w-full sm:w-auto">
                  {additionalService.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </GlowButton>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mt-32 py-24 bg-brand-navy-2 border-y border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Our technical stack</h2>
            <p className="text-brand-gray mb-12">The tools we master and deploy for our clients</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, i) => (
                <span key={i} className="px-6 py-3 rounded-xl bg-brand-card border border-brand-blue/20 text-white font-medium hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
