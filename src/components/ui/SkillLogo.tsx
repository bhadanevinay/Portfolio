import React from 'react';

interface SkillLogoProps {
  iconId: string;
  className?: string;
  size?: number;
}

export function SkillLogo({ iconId, className = "w-6 h-6", size = 24 }: SkillLogoProps) {
  switch (iconId.toLowerCase()) {
    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8.5 18c3 .5 6-.5 8.5-1.5M7 20c4.5 1 9 .5 12-1" stroke="#ED8B00" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 3c-1 3-3 4-1 7-2-2-1-4 0-6 0-1 1-1 1-1zM15 5c-1 2.5-2.5 3.5-.8 6-1.5-1.7-.8-3.4.8-6z" fill="#ED8B00" />
        </svg>
      );

    case 'javascript':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6 16.5C6.5 17.5 7.5 18 8.7 18C10.2 18 11.2 17.2 11.2 15.6V10M14 15.5C14.2 16.8 15.3 18 17.2 18C19 18 20 16.8 20 15.5C20 13.6 18.2 13.2 16.8 12.6C15.2 11.9 14.3 11.3 14.3 10C14.3 8.7 15.3 8 16.8 8C18.2 8 19.2 8.7 19.5 9.8"
            stroke="#000000"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M11.9 2c-3.1 0-4.9.4-4.9 2.2v2.3h5v.8H5.2C3 7.3 2 8.7 2 11.5s1.2 4.2 3.5 4.2h1.5v-2c0-1.8 1.5-3.3 3.3-3.3h5.4c1.5 0 2.7-1.2 2.7-2.7V4.7C18.4 2.4 16 2 11.9 2zm-2.7 2c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
          <path d="M12.1 22c3.1 0 4.9-.4 4.9-2.2v-2.3h-5v-.8h6.8c2.2 0 3.2-1.4 3.2-4.2s-1.2-4.2-3.5-4.2H17v2c0 1.8-1.5 3.3-3.3 3.3H8.3c-1.5 0-2.7 1.2-2.7 2.7v3c0 2.3 2.4 2.7 6.5 2.7zm2.7-2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
        </svg>
      );

    case 'c':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#00599C" />
          <path
            d="M17.5 8.5C16.5 7.2 14.8 6.5 12.8 6.5C8.8 6.5 6 9.2 6 12C6 14.8 8.8 17.5 12.8 17.5C15 17.5 16.7 16.6 17.5 15.2"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'nextjs':
      return (
        <svg width={size} height={size} viewBox="0 0 180 180" className={className} fill="none">
          <mask id="next-mask-ui" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#next-mask-ui)">
            <circle cx="90" cy="90" r="90" fill="#FFFFFF" />
            <path
              d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
              fill="black"
            />
            <rect x="115" y="54" width="12" height="72" fill="black" />
          </g>
        </svg>
      );

    case 'html5':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3z" fill="#E34F26" />
          <path d="M12 3.8v16.7l5.9-1.8L19.2 3.8H12z" fill="#EF652A" />
          <path d="M12 7.7H7.7l.3 3.4H12v-3.4zm0 6.6H9.4l.2 2.3 2.4.7v-3zm0-6.6h4.3l-.4 4.5H12v-4.5zm0 6.6h2.5l-.2 2.3-2.3.7v-3z" fill="#FFFFFF" />
        </svg>
      );

    case 'css3':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3z" fill="#1572B6" />
          <path d="M12 3.8v16.7l5.9-1.8L19.2 3.8H12z" fill="#33A9DC" />
          <path d="M12 7.7H7.7l.3 3.4H12v-3.4zm0 6.6H9.4l.2 2.3 2.4.7v-3zm0-6.6h4.3l-.4 4.5H12v-4.5zm0 6.6h2.5l-.2 2.3-2.3.7v-3z" fill="#FFFFFF" />
        </svg>
      );

    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.598 15.026 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.202 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.798 9.026 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.402 8.975 12 6.001 12z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'firebase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4.5 17.5L8.2 3.2c.1-.5.7-.7 1-.3l2.8 5.2-7.5 9.4z" fill="#FFA000" />
          <path d="M14.2 8.5l-2.2-4.2c-.3-.5-.9-.5-1.1 0L4.5 17.5l9.7-9z" fill="#F57C00" />
          <path d="M4.5 17.5l7 4c.3.2.7.2 1 0l7-4-15 0z" fill="#FFCA28" />
          <path d="M19.5 17.5L16.2 10c-.2-.5-.8-.6-1.1-.2l-8.6 7.7 13 0z" fill="#FFA000" />
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="7" rx="8" ry="3.5" stroke="#00758F" strokeWidth="1.8" />
          <path d="M4 7v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V7M4 12v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-5" stroke="#F29111" strokeWidth="1.8" />
        </svg>
      );

    case 'firestore':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="#FFCA28" strokeWidth="1.8" />
          <path d="M7 8h10M7 12h10M7 16h6" stroke="#FFA000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M19.8 10.3l-6.1-6.1c-.8-.8-2-.8-2.8 0L9.4 5.7l3.5 3.5c.6-.2 1.4 0 1.8.4.5.5.6 1.2.3 1.8l3.4 3.4c.6-.3 1.3-.2 1.8.3.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.3-1.8L14 12.4v5.3c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.7.5-.9v-5.6l-2.6-2.6L4.2 14.7c-.8.8-.8 2 0 2.8l6.1 6.1c.8.8 2 .8 2.8 0l6.7-6.7c.8-.7.8-2 0-2.8z" fill="#F05032" />
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'vercel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 3L22 20.5H2L12 3Z" />
        </svg>
      );

    case 'dsa':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#A78BFA" strokeWidth="1.8">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M7.8 7.8L10.5 16M16.2 7.8L13.5 16" />
        </svg>
      );

    case 'oop':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#64D8FF" strokeWidth="1.8">
          <rect x="3" y="3" width="8" height="8" rx="2" />
          <rect x="13" y="13" width="8" height="8" rx="2" />
          <path d="M11 7h6a2 2 0 0 1 2 2v4M7 11v6a2 2 0 0 0 2 2h4" strokeDasharray="2 2" />
        </svg>
      );

    case 'os':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#A78BFA" strokeWidth="1.8">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4M6 8l3 3-3 3M11 14h4" />
        </svg>
      );

    case 'dbms':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#64D8FF" strokeWidth="1.8">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}

