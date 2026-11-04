'use client';

import React from 'react';
import { ProjectItem } from '@/types/portfolio';
import { ExternalLink, Trophy, Sparkles } from 'lucide-react';
import { GithubIcon } from '../layout/SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getProjectVisualTheme = (id: string) => {
    switch (id) {
      case 'abhyasmitra':
        return {
          glowColor: 'bg-accent/10',
          metric: '1,000+ Engineering Students',
        };
      case 'votechainx':
        return {
          glowColor: 'bg-cyan/10',
          metric: 'Rank 1 / 96 Teams',
        };
      case 'kumbhprasad':
        return {
          glowColor: 'bg-amber-500/10',
          metric: 'Integrated Razorpay Gateway',
        };
      default:
        return {
          glowColor: 'bg-accent/10',
          metric: 'Full Stack',
        };
    }
  };

  const theme = getProjectVisualTheme(project.id);

  return (
    <article
      className="glass-card rounded-2xl p-6 sm:p-8 lg:p-9 relative overflow-hidden group border border-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between h-full"
    >
      {/* Background ambient corner glow */}
      <div
        className={`absolute top-0 right-0 w-44 h-44 ${theme.glowColor} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Header Row */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">
                {project.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-secondary-text">
                {project.duration}
              </span>
            </div>

            {project.event ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-mono text-[11px] font-semibold shadow-sm">
                <Trophy className="w-3.5 h-3.5" />
                <span>{project.event}</span>
              </div>
            ) : project.featured ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[11px] font-semibold shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>FEATURED PLATFORM</span>
              </div>
            ) : null}
          </div>

          {/* Title & Tagline */}
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary-text tracking-tight uppercase mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="font-mono text-xs text-cyan uppercase tracking-wider mb-4 font-medium">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Bottom Metadata & Tech Stack */}
        <div>
          {/* Key Metric Highlight */}
          <div className="mb-6 p-3 rounded-xl bg-surface border border-border flex items-center justify-between shadow-sm">
            <span className="font-mono text-[11px] uppercase tracking-wider text-secondary-text font-medium">
              Key Metric:
            </span>
            <span className="font-display font-bold text-xs sm:text-sm text-primary-text">
              {theme.metric}
            </span>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-secondary border border-border text-secondary-text group-hover:text-primary-text transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links (Only rendered when actual URLs are provided) */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-secondary-text hover:text-primary-text transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-hover font-semibold transition-colors"
                >
                  <span>Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
