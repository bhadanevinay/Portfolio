'use client';

import React, { useState, useEffect } from 'react';
import {
  Home,
  Briefcase,
  Code2,
  User,
  Layers,
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
    { label: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { label: 'Skills', href: '#skills', icon: <Code2 className="w-4 h-4" /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Work', href: '#projects', icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 mx-auto w-full z-50 flex items-center justify-center px-4 pointer-events-none">
      <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
        {/* Floating Centered Pill Dock (Matching the visual reference image) */}
        <nav
          className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? isLight
                ? 'bg-white/95 border border-border shadow-[0_12px_36px_rgba(0,0,0,0.08)] backdrop-blur-md'
                : 'glass-panel bg-[#0B0D14]/90 border-border shadow-[0_12px_36px_rgba(0,0,0,0.7)]'
              : isLight
                ? 'bg-white/85 border border-border shadow-md backdrop-blur-md'
                : 'bg-[#12141C]/85 border border-white/[0.08] shadow-lg backdrop-blur-md'
          }`}
        >
          {/* Nav Items */}
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="p-2 sm:px-2.5 sm:py-2 rounded-full text-secondary-text hover:text-primary-text hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-all duration-200 group relative flex items-center justify-center"
              title={item.label}
              aria-label={item.label}
            >
              {item.icon}
              {/* Tooltip on hover */}
              <span className="absolute -bottom-8 px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-primary-text opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md hidden sm:block">
                {item.label}
              </span>
            </a>
          ))}

          {/* Vertical Divider */}
          <span className="w-[1px] h-4 bg-border mx-1" />

          {/* Theme Toggle Button (Dark <-> Light) */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:px-2.5 sm:py-2 rounded-full text-secondary-text hover:text-primary-text hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-all duration-200 relative group flex items-center justify-center cursor-pointer"
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isLight ? (
              <Moon className="w-4 h-4 text-accent transition-transform duration-300 hover:rotate-12" />
            ) : (
              <Sun className="w-4 h-4 text-cyan transition-transform duration-300 hover:rotate-45" />
            )}
            <span className="absolute -bottom-8 px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-primary-text opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md hidden sm:block">
              {isLight ? 'Dark Mode' : 'Light Mode'}
            </span>
          </button>
        </nav>

        {/* Distinct "Let's Talk" / "Book a Call" Button matching the visual reference */}
        <a
          href="#contact"
          className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-display font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-md select-none shrink-0 ${
            isLight
              ? 'bg-[#0E1017] hover:bg-black text-white hover:shadow-[0_0_24px_rgba(0,0,0,0.25)]'
              : 'bg-[#F5F5F0] hover:bg-white text-[#08090C] hover:shadow-[0_0_24px_rgba(245,245,240,0.4)]'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${
              isLight ? 'bg-white text-[#0E1017]' : 'bg-[#08090C] text-white'
            }`}
          >
            <Sparkles className="w-3 h-3 text-accent" />
          </div>
          <span className="hidden xs:inline">Let&apos;s Talk</span>
          <span className="xs:hidden">Chat</span>
        </a>
      </div>
    </header>
  );
}
