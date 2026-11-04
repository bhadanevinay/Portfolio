'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/personal';
import { Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-background border-t border-border py-12 px-6 sm:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-accent" />
            </div>
            <div>
              <span className="font-display font-extrabold text-base text-primary-text tracking-wider block">
                VINAY S. BHADANE
              </span>
              <span className="font-mono text-[10px] text-secondary-text uppercase tracking-widest">
                Full Stack Web Developer
              </span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-secondary border border-border hover:border-accent text-secondary-text hover:text-primary-text transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-secondary border border-border hover:border-accent text-secondary-text hover:text-primary-text transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-secondary border border-border hover:border-cyan text-secondary-text hover:text-primary-text transition-colors ml-2 flex items-center gap-1.5 font-mono text-xs cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-cyan" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Copyright & Meta */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-secondary-text">
          <p>© {new Date().getFullYear()} Vinay S. Bhadane. All rights reserved.</p>
          <p className="text-secondary-text/70">
            Engineered with Next.js App Router, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
