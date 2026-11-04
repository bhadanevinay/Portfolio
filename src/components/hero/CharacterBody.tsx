'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { useTheme } from '../layout/ThemeContext';

interface CharacterBodyProps {
  bodyX: MotionValue<number>;
  bodyY: MotionValue<number>;
}

export function CharacterBody({ bodyX, bodyY }: CharacterBodyProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Very subtle body tilt and shift
  const torsoRotate = useTransform(bodyX, [-1, 1], [-2.5, 2.5]);
  const torsoShiftX = useTransform(bodyX, [-1, 1], [-3, 3]);

  // Dynamic theme dress colors
  // In Light mode: Shirt is deep dark navy (#0F172A) with white stripes (#FFFFFF)
  // In Dark mode: Shirt is crisp white (#FFFFFF) with black stripes (#12141A)
  const shirtBaseColor = isLight ? '#0F172A' : '#FFFFFF';
  const stripeColor = isLight ? '#FFFFFF' : '#12141A';
  const shirtOutlineColor = '#12141A';
  const neckFillColor = '#FFFFFF';
  const neckShadowColor = isLight ? '#CBD5E1' : '#E6E8EF';

  return (
    <motion.g
      id="character-body-group"
      style={{
        rotate: torsoRotate,
        x: torsoShiftX,
        originX: '250px',
        originY: '480px',
      }}
    >
      {/* ================= NECK ================= */}
      <g id="neck">
        {/* Neck Column */}
        <path
          d="M 216 320 L 216 385 C 216 395, 284 395, 284 385 L 284 320 Z"
          fill={neckFillColor}
          stroke={shirtOutlineColor}
          strokeWidth="3.6"
        />

        {/* Neck Shadow under chin */}
        <path
          d="M 216 324 Q 250 342 284 324 L 284 340 Q 250 354 216 340 Z"
          fill={neckShadowColor}
          stroke="none"
        />
      </g>

      {/* ================= SHOULDERS & TORSO ================= */}
      {/* Clip path for horizontal shirt stripes to stay cleanly within the shirt outline */}
      <clipPath id="shirt-clip">
        <path
          d="M 188 384
             C 140 395, 80 435, 60 560
             L 440 560
             C 420 435, 360 395, 312 384
             C 292 396, 208 396, 188 384 Z"
        />
      </clipPath>

      <g id="torso">
        {/* Shirt Base Outline */}
        <path
          d="M 188 384
             C 140 395, 80 435, 60 560
             L 440 560
             C 420 435, 360 395, 312 384
             C 292 396, 208 396, 188 384 Z"
          fill={shirtBaseColor}
          stroke={shirtOutlineColor}
          strokeWidth="3.8"
          strokeLinejoin="round"
          className="transition-colors duration-300"
        />

        {/* Horizontal Stripes (Clipped inside shirt) */}
        <g clipPath="url(#shirt-clip)">
          {/* Stripe 1 */}
          <rect x="50" y="420" width="400" height="15" fill={stripeColor} className="transition-colors duration-300" />
          {/* Stripe 2 */}
          <rect x="50" y="460" width="400" height="15" fill={stripeColor} className="transition-colors duration-300" />
          {/* Stripe 3 */}
          <rect x="50" y="500" width="400" height="15" fill={stripeColor} className="transition-colors duration-300" />
          {/* Stripe 4 */}
          <rect x="50" y="540" width="400" height="15" fill={stripeColor} className="transition-colors duration-300" />
        </g>

        {/* Re-stroke shirt border on top of stripes for clean outlines */}
        <path
          d="M 188 384
             C 140 395, 80 435, 60 560
             L 440 560
             C 420 435, 360 395, 312 384
             C 292 396, 208 396, 188 384 Z"
          fill="none"
          stroke={shirtOutlineColor}
          strokeWidth="3.8"
          strokeLinejoin="round"
        />

        {/* Collar Band Outline */}
        <path
          d="M 194 382 Q 250 398 306 382"
          fill="none"
          stroke={shirtOutlineColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 197 390 Q 250 404 303 390"
          fill="none"
          stroke={isLight ? '#475569' : '#12141A'}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity={isLight ? 0.7 : 0.5}
        />
      </g>
    </motion.g>
  );
}
