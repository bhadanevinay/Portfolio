'use client';

import React, { useRef } from 'react';
import { useCursorFollow } from '@/hooks/useCursorFollow';
import { Character } from './Character';
import { HeroLeft, HeroRight } from './HeroIntroduction';

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { smoothX, smoothY, bodyX, bodyY, isBlinking } = useCursorFollow(heroRef);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-transparent"
    >
      {/* Main Hero Body:
          On mobile: stacked vertically matching the mobile reference image (Heading -> Character -> Bio).
          On desktop: 3-column layout matching the desktop reference image (Heading on Left -> Character in Center -> Bio on Right).
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 my-auto pt-4 pb-6">
        {/* Left Column: Heading & Action Pills (Mobile: Order 1) */}
        <div className="w-full lg:w-1/3 flex justify-start order-1">
          <HeroLeft />
        </div>

        {/* Center Column: 2D Illustrated Developer Character (Mobile: Order 2, between heading and bio) */}
        <div className="w-full lg:w-1/3 flex justify-center items-center order-2 my-2 lg:my-0">
          <Character
            smoothX={smoothX}
            smoothY={smoothY}
            bodyX={bodyX}
            bodyY={bodyY}
            isBlinking={isBlinking}
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-auto"
          />
        </div>

        {/* Right Column: Greeting, Summary & Focus (Mobile: Order 3, below character) */}
        <div className="w-full lg:w-1/3 flex justify-start lg:justify-end order-3">
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
