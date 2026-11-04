'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  download,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer select-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-accent text-[#08090C] font-semibold hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(167,139,250,0.45)] hover:-translate-y-0.5",
    secondary: "bg-secondary text-primary-text border border-border hover:border-accent/40 hover:bg-[#141722] hover:-translate-y-0.5",
    outline: "bg-transparent text-primary-text border border-border hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5",
    ghost: "bg-transparent text-secondary-text hover:text-primary-text hover:bg-white/[0.04]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={combinedClasses}
      >
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
}

