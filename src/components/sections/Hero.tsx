'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/data/personal';
import { Button } from '../ui/Button';
import { ArrowDownRight, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../layout/SocialIcons';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-ambient opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Availability Badge & Technical Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          {PERSONAL_INFO.availableForWork && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary-text font-medium">
                Available For Opportunities
              </span>
            </div>
          )}

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-xs text-secondary-text uppercase tracking-wider">
              Computer Engineering Undergraduate
            </span>
          </div>
        </motion.div>

        {/* Main Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="block font-display font-medium text-lg sm:text-xl md:text-2xl text-secondary-text uppercase tracking-[0.25em] mb-2">
            HELLO, I&apos;M
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-primary-text uppercase leading-[0.98]">
            VINAY{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#C4B5FD] to-cyan text-glow-accent">
              BHADANE.
            </span>
          </h1>
        </motion.div>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-accent to-cyan" />
            <h2 className="font-mono font-bold text-base sm:text-lg md:text-xl text-cyan uppercase tracking-[0.2em]">
              {PERSONAL_INFO.title}
            </h2>
          </div>
        </motion.div>

        {/* Supporting Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-lg md:text-xl text-secondary-text max-w-2xl leading-relaxed mb-10"
        >
          &ldquo;{PERSONAL_INFO.supportingIntro}&rdquo;
        </motion.p>

        {/* Action Buttons & Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          {/* View My Work button */}
          <Button
            variant="primary"
            size="md"
            href="#projects"
            icon={<ArrowDownRight className="w-4 h-4" />}
          >
            View My Work
          </Button>

          {/* Download Resume button */}
          <Button
            variant="secondary"
            size="md"
            href={PERSONAL_INFO.resumeUrl}
            download="Vinay_Bhadane_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Download className="w-4 h-4 text-accent" />}
          >
            Download Resume
          </Button>

          {/* Social and Contact Icons */}
          <div className="flex items-center gap-2.5 ml-0 sm:ml-4 pt-2 sm:pt-0">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full bg-secondary border border-border hover:border-accent/50 text-secondary-text hover:text-primary-text transition-all duration-300 hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full bg-secondary border border-border hover:border-accent/50 text-secondary-text hover:text-primary-text transition-all duration-300 hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-3 rounded-full bg-secondary border border-border hover:border-accent/50 text-secondary-text hover:text-primary-text transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

