import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SnowBackground } from '@/components/hero/SnowBackground';
import { HeroSection } from '@/components/hero/HeroSection';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen bg-background text-primary-text overflow-x-hidden">
        {/* Continuous falling snow across the entire background of the website */}
        <SnowBackground />

        {/* HERO: Custom 2D Illustrated Developer Character with Cursor Tracking */}
        <HeroSection />

        {/* SECTION 02 — ABOUT ME */}
        <About />

        {/* SECTION 03 — TECHNICAL SKILLS */}
        <Skills />

        {/* SECTION 04 — PROFESSIONAL EXPERIENCE */}
        <Experience />

        {/* SECTION 05 — FEATURED PROJECTS */}
        <Projects />

        {/* SECTION 06 — EDUCATION */}
        <Education />

        {/* SECTION 07 — ACHIEVEMENTS */}
        <Achievements />

        {/* SECTION 08 — CONTACT */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
