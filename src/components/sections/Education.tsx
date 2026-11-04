'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { EDUCATION_LIST } from '@/data/education';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 px-6 sm:px-12 lg:px-20 bg-secondary/30 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 06 — ACADEMIC FOUNDATION"
          title="MY EDUCATIONAL"
          highlight="JOURNEY."
          description="Formal computer engineering credentials and academic achievements in software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {EDUCATION_LIST.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-7 sm:p-8 border border-border hover:border-accent/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                    <div className="p-2.5 rounded-xl bg-surface border border-border group-hover:border-accent/40 transition-colors">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-secondary-text">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-primary-text mb-1">
                    {edu.degree}
                  </h3>

                  <p className="font-sans text-sm text-cyan font-medium mb-3">
                    {edu.institution}
                  </p>

                  {edu.branch && (
                    <div className="flex items-center gap-2 font-mono text-xs text-secondary-text mb-4">
                      <BookOpen className="w-3.5 h-3.5 text-accent" />
                      <span>Branch: {edu.branch}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                    {edu.score}
                  </span>

                  {edu.achievement && (
                    <div className="flex items-center gap-1.5 font-mono text-xs text-cyan font-semibold">
                      <Award className="w-4 h-4 text-cyan" />
                      <span>{edu.achievement}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
