import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, Lightbulb, TrendingUp, Code } from 'lucide-react';
import { FadeIn, GlowButton } from '../components/ui';

export const CaseStudies = () => {
  const cases = [
    {
      id: "koosmik",
      client: "Koosmik",
      sector: "FinTech (Paris)",
      title: "RFP Radar — Automated tender monitoring",
      challenge: "The team spent hours every week manually monitoring public and private tenders, often missing key opportunities.",
      solution: "Deployment of an automated monitoring system via n8n that scrapes sources, filters via AI according to Koosmik's criteria, and notifies the sales team on Slack.",
      results: [
        "15h+/week saved",
        "0 missed opportunities",
        "Reactivity increased by 300%"
      ],
      stack: ["n8n", "Claude AI", "Pipedrive", "Slack"]
    },
    {
      id: "alternative-aml",
      client: "AlternativeAML / GITS / OmniTrust",
      sector: "Compliance (BE/LU)",
      title: "Automated LinkedIn content pipeline",
      challenge: "Need to maintain a strong presence on LinkedIn for 3 different entities without spending internal time.",
      solution: "Creation of an automated content pipeline. AI generates posts based on regulatory news, validated in Airtable, then published automatically via the LinkedIn API.",
      results: [
        "5 posts/week per entity",
        "0 human intervention required",
        "+45% engagement in 2 months"
      ],
      stack: ["n8n", "Claude AI", "Airtable", "LinkedIn API"]
    },
    {
      id: "lybramedia",
      client: "LybraMedia",
      sector: "Media Company",
      title: "Comprehensive Onboarding Infrastructure",
      challenge: "Manual, disorganized, and time-consuming onboarding process for new clients and team members.",
      solution: "Built a centralized infrastructure using Airtable to automate and streamline the entire onboarding workflow, from data collection to task assignment.",
      results: [
        "100% automated onboarding",
        "Centralized data management",
        "Significant time saved per new client"
      ],
      stack: ["Airtable", "n8n", "Make"]
    },
    {
      id: "lafa",
      client: "lafa-asbl",
      sector: "Association (Belgium)",
      title: "Internal operational process automation",
      challenge: "Time-consuming administrative management (registrations, billing, member communication).",
      solution: "Complete digitization and automation of operational flows via Google Workspace and n8n.",
      results: [
        "100% of registrations automated",
        "0 manual data entry errors",
        "20h/month saved on admin"
      ],
      stack: ["n8n", "Google Workspace", "Stripe"]
    }
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
            Our Case Studies
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Discover how we helped these companies scale their operations with AI.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-5xl mx-auto space-y-24">
        {cases.map((study, index) => (
          <FadeIn key={study.id} direction="up" delay={index * 0.1}>
            <div className="rounded-3xl bg-brand-card/30 border border-brand-blue/10 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold">
                    <Building2 className="w-4 h-4" />
                    {study.client}
                  </div>
                  <div className="text-brand-gray text-sm font-medium">
                    {study.sector}
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-8">{study.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="flex items-center gap-2 text-red-400 font-bold mb-4">
                      <Target className="w-5 h-5" /> Challenge
                    </div>
                    <p className="text-brand-gray leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-brand-blue font-bold mb-4">
                      <Lightbulb className="w-5 h-5" /> Solution
                    </div>
                    <p className="text-brand-gray leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-brand-navy border border-brand-blue/20 mb-8">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-6">
                    <TrendingUp className="w-5 h-5" /> Results
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-white font-medium">
                        <span className="text-brand-blue mr-2">✓</span> {result}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8 border-t border-brand-blue/10">
                  <Code className="w-5 h-5 text-brand-gray" />
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-brand-navy border border-brand-blue/10 text-xs font-mono text-brand-gray">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="mt-32 py-24 px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-8">Ready to get the same results?</h2>
          <a href="https://calendly.com/nolprayagsing/automation-strategy-audit" target="_blank" rel="noopener noreferrer">
            <GlowButton className="text-lg px-8 py-4">
              Book a free audit <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
        </FadeIn>
      </section>
    </div>
  );
};
