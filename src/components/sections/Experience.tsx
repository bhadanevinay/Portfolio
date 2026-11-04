'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { EXPERIENCES } from '@/data/experience';
import { Briefcase, Calendar, CheckCircle2, Globe } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-20 bg-secondary/30 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 04 — PROFESSIONAL EXPERIENCE"
          title="WHERE I'VE"
          highlight="WORKED."
          description="Industry software engineering experience delivering full-stack solutions within agile teams."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-border max-w-3xl">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group mb-8 last:mb-0"
            >
              {/* Timeline Indicator Dot with Continuous Pulse */}
              <div className="absolute -left-[32px] sm:-left-[41px] top-2 flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-accent/40 animate-ping opacity-75" />
                <span className="relative w-4 h-4 rounded-full bg-accent border-2 border-background shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
              </div>

              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border group-hover:border-accent/40 transition-all duration-300">
                {/* Header: Role & Organization */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-border">
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-primary-text mb-1 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan font-mono text-sm font-semibold">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-secondary-text">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span className="font-medium text-primary-text">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-secondary-text">
                      <Globe className="w-3.5 h-3.5" />
                      <span>{exp.workMode}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-3 font-sans text-sm sm:text-base text-secondary-text mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Key technologies used */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-text mr-1">
                    Core Environment:
                  </span>
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Agile / Scrum'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full font-mono text-[11px] bg-secondary border border-border text-secondary-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
