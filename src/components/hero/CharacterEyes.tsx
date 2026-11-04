'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';

interface CharacterEyesProps {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  isBlinking: boolean;
}

export function CharacterEyes({ smoothX, smoothY, isBlinking }: CharacterEyesProps) {
  // Constrained pupil movements within sclera (max ±6.5px horizontal, ±4.5px vertical)
  const pupilX = useTransform(smoothX, [-1, 1], [-6.5, 6.5]);
  const pupilY = useTransform(smoothY, [-1, 1], [-4.5, 4.5]);

  return (
    <g id="character-eyes">
      {/* Eye lids clipping/animation for natural blinking */}
      <motion.g
        animate={{ scaleY: isBlinking ? 0.08 : 1 }}
        transition={{ duration: 0.12, ease: 'easeInOut' }}
        style={{ originY: '245px', originX: '250px' }}
      >
        {/* ================= LEFT EYE ================= */}
        <g id="left-eye">
          {/* Eye White (Sclera) */}
          <ellipse
            cx="200"
            cy="245"
            rx="18"
            ry="13"
            fill="#FFFFFF"
            stroke="#12141A"
            strokeWidth="3.2"
          />

          {/* Left Pupil (Tracks Cursor) */}
          <motion.g style={{ x: pupilX, y: pupilY }}>
            <circle cx="200" cy="245" r="7.2" fill="#12141A" />
            {/* Catchlight / Specular highlight */}
            <circle cx="202.5" cy="242.5" r="2.2" fill="#FFFFFF" />
            <circle cx="198" cy="246" r="1.1" fill="#FFFFFF" opacity="0.6" />
          </motion.g>

          {/* Subtle upper eyelid crease */}
          <path
            d="M 180 236 Q 200 230 220 236"
            fill="none"
            stroke="#12141A"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>

        {/* ================= RIGHT EYE ================= */}
        <g id="right-eye">
          {/* Eye White (Sclera) */}
          <ellipse
            cx="300"
            cy="245"
            rx="18"
            ry="13"
            fill="#FFFFFF"
            stroke="#12141A"
            strokeWidth="3.2"
          />

          {/* Right Pupil (Tracks Cursor) */}
          <motion.g style={{ x: pupilX, y: pupilY }}>
            <circle cx="300" cy="245" r="7.2" fill="#12141A" />
            {/* Catchlight / Specular highlight */}
            <circle cx="302.5" cy="242.5" r="2.2" fill="#FFFFFF" />
            <circle cx="298" cy="246" r="1.1" fill="#FFFFFF" opacity="0.6" />
          </motion.g>

          {/* Subtle upper eyelid crease */}
          <path
            d="M 280 236 Q 300 230 320 236"
            fill="none"
            stroke="#12141A"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>
      </motion.g>

      {/* Closed eye slit lines shown during blink */}
      {isBlinking && (
        <g id="blinking-lines">
          <path
            d="M 182 245 Q 200 248 218 245"
            fill="none"
            stroke="#12141A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 282 245 Q 300 248 318 245"
            fill="none"
            stroke="#12141A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>
      )}
    </g>
  );
}

