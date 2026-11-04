'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/personal';
import { Button } from '../ui/Button';
import { Mail, Phone, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../layout/SocialIcons';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-20 bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-border relative overflow-hidden">
          {/* Subtle ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                // 08 — GET IN TOUCH
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-primary-text uppercase leading-[1.05] mb-6">
              LET&apos;S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#C4B5FD] to-cyan">
                SOMETHING GREAT.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-secondary-text leading-relaxed mb-10">
              &ldquo;Have an idea, an opportunity or a project in mind? Let&apos;s connect and create something meaningful.&rdquo;
            </p>

            {/* Direct Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-secondary-text uppercase tracking-wider flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-accent" />
                      Email Address
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-md hover:bg-secondary text-secondary-text hover:text-primary-text transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-display font-semibold text-base sm:text-lg text-primary-text hover:text-accent transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="mt-4 pt-3 border-t border-border">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-hover font-medium"
                  >
                    <span>Send Message</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-surface border border-border hover:border-cyan/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-secondary-text uppercase tracking-wider flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-cyan" />
                      Phone Dispatch
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 rounded-md hover:bg-secondary text-secondary-text hover:text-primary-text transition-colors"
                      title="Copy phone to clipboard"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-display font-semibold text-base sm:text-lg text-primary-text hover:text-cyan transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="mt-4 pt-3 border-t border-border">
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:text-cyan-hover font-medium"
                  >
                    <span>Direct Call</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-secondary border border-border hover:border-accent text-secondary-text hover:text-primary-text font-display text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-accent" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-secondary border border-border hover:border-cyan text-secondary-text hover:text-primary-text font-display text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-cyan" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

