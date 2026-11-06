import { useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { profile, viewerProfiles, type ProfileId } from '../data/portfolio';
import { EASE } from './fx';

export function ProfileAvatar({ id, size = 'lg' }: { id: ProfileId; size?: 'sm' | 'lg' }) {
  const p = viewerProfiles.find((v) => v.id === id)!;
  const box = size === 'lg' ? 'h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-xl' : 'h-8 w-8 rounded-md';
  if (id === 'vinay') {
    return (
      <span className={`relative block overflow-hidden ${box}`} style={{ background: 'radial-gradient(circle at 50% 30%, #7a0f24, #1a0509)' }}>
        <img src="/assets/portrait-420.webp" alt="" className="absolute inset-x-0 bottom-0 mx-auto h-[115%] w-auto max-w-none -translate-x-[3%] object-cover object-top" />
      </span>
    );
  }
  const glyph = { recruiter: 'R', developer: '</>', creative: '✦' }[id];
  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden font-display text-bone ${box}`}
      style={{ background: `linear-gradient(145deg, ${p.color}, #0b0b10 120%)` }}
    >
      <span className={size === 'lg' ? 'text-4xl sm:text-5xl' : 'text-sm'}>{glyph}</span>
    </span>
  );
}

interface Destination {
  id: string;
  sectionId: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeBg: string;
  bgGradient: string;
  icon: ReactNode;
}

const DESTINATIONS: Destination[] = [
  {
    id: 'about',
    sectionId: 'about',
    title: 'About Vinay',
    subtitle: 'Background & Education',
    badge: 'BIO',
    badgeBg: 'bg-crimson',
    bgGradient: 'radial-gradient(circle at 50% 30%, #7a0f24, #110307)',
    icon: (
      <img
        src="/assets/portrait-420.webp"
        alt="Vinay Bhadane"
        className="absolute inset-x-0 bottom-0 mx-auto h-[115%] w-auto max-w-none -translate-x-[3%] object-cover object-top transition duration-500 group-hover:scale-105"
      />
    ),
  },
  {
    id: 'achievements',
    sectionId: 'moments',
    title: 'Achievements',
    subtitle: 'PromptWar & Hackathons',
    badge: 'RANK 1',
    badgeBg: 'bg-amber-600',
    bgGradient: 'radial-gradient(circle at 50% 30%, #6e4006, #120902)',
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#ffb547] transition duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    id: 'skills',
    sectionId: 'skills',
    title: 'Skills',
    subtitle: 'Frontend, Backend & Stack',
    badge: 'TECH',
    badgeBg: 'bg-sky-600',
    bgGradient: 'radial-gradient(circle at 50% 30%, #0d4a6e, #03101c)',
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#4cc9ff] transition duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    id: 'contact',
    sectionId: 'contact',
    title: 'Contact Vinay',
    subtitle: "Let's Connect & Build",
    badge: 'CONNECT',
    badgeBg: 'bg-violet-600',
    bgGradient: 'radial-gradient(circle at 50% 30%, #4c1d6e, #0d041c)',
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#b98bff] transition duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function ProfileSelector({ onPick }: { onPick: (sectionId?: string) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onPick();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: EASE }}
      role="dialog"
      aria-label="Where would you like to start?"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(229,19,43,0.16),transparent_70%)]" />

      <motion.div
        className="relative mb-10 text-center"
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <span className="font-sans text-xs font-bold uppercase tracking-[0.32em] text-crimson-2 sm:text-sm">
          EXPLORE PORTFOLIO
        </span>
        <h2 className="mt-2 font-display text-4xl tracking-tight text-bone sm:text-6xl">
          Where would you like to start?
        </h2>
        <p className="mt-2 text-xs text-smoke sm:text-sm">
          Select a section to dive right in, or explore the complete portfolio.
        </p>
      </motion.div>

      <motion.ul
        className="relative grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6 md:gap-8 max-w-4xl w-full"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
      >
        {DESTINATIONS.map((d) => (
          <motion.li
            key={d.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
          >
            <button
              type="button"
              onClick={() => onPick(d.sectionId)}
              data-cursor="play"
              className="group flex w-full flex-col items-center gap-3.5 text-center focus:outline-none"
            >
              <span
                className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl ring-2 ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:ring-bone group-focus-visible:ring-bone group-hover:shadow-[0_0_35px_rgba(229,19,43,0.35)] sm:h-36 sm:w-36 md:h-40 md:w-40"
                style={{ background: d.bgGradient }}
              >
                {d.icon}
                <span className={`absolute right-2 top-2 rounded-full ${d.badgeBg} px-2 py-0.5 text-[9px] font-bold tracking-[0.16em] text-white shadow-md`}>
                  {d.badge}
                </span>
              </span>
              <span className="font-sans text-sm font-semibold tracking-tight text-bone transition-colors group-hover:text-white sm:text-base">
                {d.title}
              </span>
              <span className="max-w-[10rem] text-[11px] leading-snug text-smoke transition-colors group-hover:text-mist">
                {d.subtitle}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="relative mt-12 flex flex-col items-center gap-3 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
      >
        <button
          type="button"
          onClick={() => onPick()}
          data-cursor="play"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold tracking-[0.16em] text-bone transition hover:border-crimson-2 hover:bg-white/10 hover:text-white"
        >
          <span className="text-crimson-2 transition-transform group-hover:scale-125">▶</span> START FROM THE BEGINNING
        </button>
        <p className="max-w-md text-xs leading-relaxed text-smoke">
          Full journey of {profile.fullName} • B.E. Computer Engineering
        </p>
      </motion.div>
    </motion.div>
  );
}
