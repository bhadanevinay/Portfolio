'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { ACHIEVEMENTS } from '@/data/achievements';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export function Achievements() {
  const getAchievementIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-accent" />;
      case 1:
        return <Medal className="w-5 h-5 text-[#FFD700]" />;
      case 2:
        return <Star className="w-5 h-5 text-cyan" />;
      default:
        return <Award className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-20 bg-background border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 07 — RECOGNITION"
          title="MILESTONES &"
          highlight="RECOGNITION."
          description="Competitive programming victories, certifications, and state-level hackathon awards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ACHIEVEMENTS.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-7 sm:p-8 border border-border hover:border-accent/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Corner accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Header: Number & Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-surface border border-border">
                        {getAchievementIcon(index)}
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-secondary-text">
                        {item.organization}
                      </span>
                    </div>
                    <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-primary-text mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Highlight text */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold mb-4">
                    {item.highlight}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-secondary-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
