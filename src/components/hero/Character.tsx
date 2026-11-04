'use client';

import React from 'react';
import { motion, MotionValue } from 'motion/react';
import { CharacterBody } from './CharacterBody';
import { CharacterHead } from './CharacterHead';

interface CharacterProps {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  bodyX: MotionValue<number>;
  bodyY: MotionValue<number>;
  isBlinking: boolean;
  className?: string;
}

export function Character({
  smoothX,
  smoothY,
  bodyX,
  bodyY,
  isBlinking,
  className = "w-[300px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-auto",
}: CharacterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative select-none pointer-events-none flex items-center justify-center ${className}`}
    >
      {/* Subtle back ambient glow halo behind the character */}
      <div className="absolute w-[280px] h-[320px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

      {/* Gentle organic breathing container */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full relative"
      >
        <svg
          viewBox="0 0 500 560"
          className="w-full h-auto overflow-visible drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs for gradients & filters */}
          <defs>
            <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3" floodColor="#000000" />
            </filter>
          </defs>

          {/* Torso, Shoulders & Striped Shirt */}
          <CharacterBody bodyX={bodyX} bodyY={bodyY} />

          {/* Head, Face, Ears, Hair, Eyebrows, Eyes & Glasses */}
          <CharacterHead
            smoothX={smoothX}
            smoothY={smoothY}
            isBlinking={isBlinking}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

