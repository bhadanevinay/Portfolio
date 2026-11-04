'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start justify-center max-w-sm lg:max-w-md z-10"
    >
      {/* Large Left Heading matching visual reference */}
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] tracking-tight text-primary-text leading-[1.08] mb-6">
        Full Stack <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#C4B5FD] to-cyan">
          Web Developer
        </span>
      </h1>

      {/* Action Buttons matching visual reference pills */}
      <div className="flex flex-wrap items-center gap-3.5">
        {/* About Me Pill Button */}
        <a
          href="#about"
          className="px-6 py-2.5 rounded-full bg-secondary hover:bg-surface border border-border text-primary-text font-display font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
        >
          About me
        </a>

        {/* See My Work ↗ Pill Button */}
        <a
          href="#projects"
          className="px-6 py-2.5 rounded-full bg-surface hover:bg-secondary border border-border hover:border-accent text-primary-text font-display font-medium text-sm transition-all duration-300 flex items-center gap-1.5 hover:text-accent hover:-translate-y-0.5 shadow-sm"
        >
          <span>See my work</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start justify-center max-w-sm lg:max-w-md z-10"
    >
      {/* 1. Greeting: Hi, I'm Vinay. */}
      <div className="mb-2.5">
        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-primary-text tracking-tight">
          Hi, I&apos;m Vinay.
        </h2>
      </div>

      {/* 2. Headline: I design and build full stack web apps */}
      <div className="flex items-center gap-2 mb-3.5">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h3 className="font-display font-bold text-base sm:text-lg text-primary-text leading-snug">
          I design and build full stack web apps
        </h3>
      </div>

      {/* 3. Narrative: Passionate Full Stack Web Developer and Computer Engineering undergraduate... */}
      <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed mb-6">
        Passionate Full Stack Web Developer and Computer Engineering undergraduate. Experienced in turning ideas into production-ready software, recognized with 1st Place in a State-Level Hackathon.
      </p>

      {/* 4. Core Focus: Full Stack Architecture, Next.js, Java, Firebase & Cloud Deployment */}
      <div className="pt-4 border-t border-border w-full">
        <span className="font-mono text-xs uppercase tracking-wider text-secondary-text block mb-1.5 font-medium">
          Core Focus:
        </span>
        <p className="font-sans text-xs sm:text-sm text-primary-text font-semibold leading-relaxed">
          Full Stack Architecture, Next.js, Java, Firebase & Cloud Deployment
        </p>
      </div>
    </motion.div>
  );
}
