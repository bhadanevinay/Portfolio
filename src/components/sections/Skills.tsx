'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/skills';
import { SkillLogo } from '../ui/SkillLogo';
import { Sparkles, Terminal, Cpu, Database, Cloud, BookOpen, Layers } from 'lucide-react';

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Flatten all skills with category metadata
  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryName: cat.title,
      categoryId: cat.id,
      categoryNumber: cat.number,
    }))
  );

  const filterTabs = [
    { id: 'all', label: 'All Stack', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'programming-languages', label: 'Languages', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'backend-databases', label: 'Backend & DB', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'cloud-and-tools', label: 'Cloud & Tools', icon: <Cloud className="w-3.5 h-3.5" /> },
    { id: 'core-concepts', label: 'CS Concepts', icon: <BookOpen className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = allSkills.filter((skill) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'backend-databases') {
      return skill.categoryId === 'backend' || skill.categoryId === 'databases';
    }
    return skill.categoryId === selectedFilter;
  });

  // Doubled arrays for smooth seamless infinite continuous marquee ticker
  const marqueeRow1 = [...allSkills, ...allSkills];
  const marqueeRow2 = [...allSkills.slice().reverse(), ...allSkills.slice().reverse()];

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-20 bg-background border-t border-border overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 03 — TECHNICAL SKILLS"
          title="MODERN TECHNICAL"
          highlight="ARSENAL."
          description="A production-ready stack of modern programming languages, reactive frameworks, distributed databases, and core computer science fundamentals."
        />

        {/* ================= CONTINUOUS INFINITE TICKER MARQUEE ================= */}
        <div className="relative w-full mb-16 overflow-hidden py-4 -mx-6 sm:-mx-12 lg:-mx-20">
          {/* Edge gradient mask for smooth fade in/out */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward continuous animation */}
          <div className="animate-marquee-continuous gap-4 mb-4">
            {marqueeRow1.map((skill, idx) => (
              <div
                key={`row1-${skill.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 shrink-0 shadow-sm cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center p-1 shrink-0">
                  <SkillLogo iconId={skill.iconId} size={16} />
                </div>
                <span className="font-display font-medium text-xs sm:text-sm text-primary-text whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              </div>
            ))}
          </div>

          {/* Row 2: Rightward continuous animation */}
          <div className="animate-marquee-continuous-reverse gap-4">
            {marqueeRow2.map((skill, idx) => (
              <div
                key={`row2-${skill.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface border border-border hover:border-cyan/50 transition-all duration-300 hover:scale-105 shrink-0 shadow-sm cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center p-1 shrink-0">
                  <SkillLogo iconId={skill.iconId} size={16} />
                </div>
                <span className="font-display font-medium text-xs sm:text-sm text-primary-text whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= INTERACTIVE CATEGORY FILTER TABS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer select-none ${
                  isActive
                    ? 'text-primary-text font-bold shadow-md'
                    : 'text-secondary-text hover:text-primary-text bg-surface/60 hover:bg-surface border border-border'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-accent/20 border border-accent/60 shadow-[0_0_15px_rgba(167,139,250,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= INTERACTIVE TECHNOLOGY GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-5 border border-border hover:border-accent/40 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Top Corner Glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Card Header: Icon + Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-surface border border-border group-hover:border-accent/40 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                      <SkillLogo iconId={skill.iconId} size={24} />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary border border-border text-secondary-text">
                      {skill.categoryNumber}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h4 className="font-display font-bold text-base sm:text-lg text-primary-text mb-1 group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <span>{skill.name}</span>
                    <Sparkles className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>

                  {/* Category Name */}
                  <span className="font-mono text-[11px] text-cyan uppercase tracking-wider block">
                    {skill.categoryName}
                  </span>
                </div>

                {/* Bottom Status Indicator */}
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between font-mono text-[10px] text-secondary-text">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified</span>
                  </span>
                  <span className="text-secondary-text/80">Production Stack</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
