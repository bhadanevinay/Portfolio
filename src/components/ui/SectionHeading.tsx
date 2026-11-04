import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tag: string;
  title: string;
  highlight?: string;
  description?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  highlight,
  description,
  alignment = 'left',
  className,
}: SectionHeadingProps) {
  const isCenter = alignment === 'center';

  return (
    <div
      className={cn(
        "flex flex-col mb-14 lg:mb-20",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {/* Category Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {tag}
        </span>
      </div>

      {/* Oversized Editorial Heading */}
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary-text uppercase leading-[1.08] mb-4">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#C4B5FD] to-cyan">
            {highlight}
          </span>
        )}
      </h2>

      {/* Supporting Text */}
      {description && (
        <p className="font-sans text-sm sm:text-base text-secondary-text max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

