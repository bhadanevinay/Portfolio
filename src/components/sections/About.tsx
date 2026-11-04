'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_INFO } from '@/data/personal';
import { Code, Cpu, Rocket, Users } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: 'Scalable Architecture',
      desc: 'Building production-grade web systems designed for efficiency, resilience, and high availability.',
    },
    {
      icon: <Code className="w-5 h-5 text-cyan" />,
      title: 'Clean & Maintainable Code',
      desc: 'Prioritizing structured modular patterns, strict typing, and accessible user interfaces.',
    },
    {
      icon: <Rocket className="w-5 h-5 text-accent" />,
      title: 'Concept to Deployment',
      desc: 'Proven experience taking complex software ideas from whiteboarding to cloud deployment.',
    },
    {
      icon: <Users className="w-5 h-5 text-cyan" />,
      title: 'Leadership & Teamwork',
      desc: 'Demonstrated collaboration and innovation, securing 1st place among 96 teams at state-level competition.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-20 bg-secondary/40 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 02 — ABOUT ME"
          title="BEYOND"
          highlight="THE CODE."
          description="A look into my engineering philosophy, background, and approach to building digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Text Column (Sliding in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-8 rounded-2xl glass-card border border-border">
              <p className="font-display font-medium text-xl sm:text-2xl text-primary-text leading-snug mb-6">
                &ldquo;Passionate Full Stack Web Developer and Computer Engineering undergraduate who enjoys building production-ready web applications that are scalable, efficient, and accessible.&rdquo;
              </p>

              <div className="space-y-4 font-sans text-sm sm:text-base text-secondary-text leading-relaxed">
                <p>
                  I believe in writing clean, maintainable, and well-structured code while creating intuitive user experiences. As a proactive learner with strong problem-solving and leadership skills, I have hands-on experience taking ideas from concept to deployment.
                </p>
                <p>
                  Recognized for innovation and teamwork by securing <span className="text-cyan font-semibold">1st place among 96 teams in a State-Level Hackathon</span>. I am always eager to learn new technologies and contribute to building impactful software.
                </p>
              </div>

              {/* Quick Profile Meta */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3 rounded-xl bg-secondary/80 border border-border">
                  <span className="block text-secondary-text uppercase tracking-wider text-[10px] mb-1">Focus</span>
                  <span className="font-semibold text-primary-text">Full Stack Web Dev</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/80 border border-border">
                  <span className="block text-secondary-text uppercase tracking-wider text-[10px] mb-1">Academics</span>
                  <span className="font-semibold text-primary-text">Computer Engg (8.76)</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/80 border border-border">
                  <span className="block text-secondary-text uppercase tracking-wider text-[10px] mb-1">Hackathon</span>
                  <span className="font-semibold text-accent">1st / 96 Teams</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillars Column (Sliding in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-surface border border-border hover:border-accent/40 shadow-sm transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary border border-border group-hover:border-accent/40 transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-primary-text">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
