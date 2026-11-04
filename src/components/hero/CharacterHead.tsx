'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { CharacterEyes } from './CharacterEyes';

interface CharacterHeadProps {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  isBlinking: boolean;
}

export function CharacterHead({ smoothX, smoothY, isBlinking }: CharacterHeadProps) {
  // Head 2.5D rotations and translations
  const headRotate = useTransform(smoothX, [-1, 1], [-8, 8]); // Max 8 deg horizontal
  const headTiltY = useTransform(smoothY, [-1, 1], [-5, 5]); // Max 5 deg vertical tilt
  const headX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const headY = useTransform(smoothY, [-1, 1], [-5, 5]);

  // Subtle 2.5D parallax for glasses (sits slightly forward in depth)
  const glassesParallaxX = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);
  const glassesParallaxY = useTransform(smoothY, [-1, 1], [-1.8, 1.8]);

  // Eyebrows subtle tilt
  const browTilt = useTransform(smoothY, [-1, 1], [1.5, -2]);

  return (
    <motion.g
      id="character-head-group"
      style={{
        rotate: headRotate,
        x: headX,
        y: headY,
        originX: '250px',
        originY: '290px',
      }}
    >
      {/* ================= EARS ================= */}
      {/* Left Ear */}
      <g id="left-ear">
        <path
          d="M 166 238 C 142 240, 140 278, 166 288"
          fill="#FFFFFF"
          stroke="#12141A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Inner ear detail */}
        <path
          d="M 158 252 C 150 258, 152 272, 163 274"
          fill="none"
          stroke="#12141A"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>

      {/* Right Ear */}
      <g id="right-ear">
        <path
          d="M 334 238 C 358 240, 360 278, 334 288"
          fill="#FFFFFF"
          stroke="#12141A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Inner ear detail */}
        <path
          d="M 342 252 C 350 258, 348 272, 337 274"
          fill="none"
          stroke="#12141A"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>

      {/* ================= FACE BASE CONTOUR ================= */}
      {/* Smooth tapered jaw and chin outline */}
      <path
        d="M 166 200 
           C 162 250, 168 298, 205 328
           C 225 344, 275 344, 295 328
           C 332 298, 338 250, 334 200
           C 334 140, 166 140, 166 200 Z"
        fill="#FFFFFF"
        stroke="#12141A"
        strokeWidth="3.8"
        strokeLinejoin="round"
      />

      {/* ================= HAIR ================= */}
      {/* Black textured hair framing crown and temples, matching reference */}
      <path
        d="M 164 212 
           C 160 160, 185 116, 250 114
           C 315 116, 340 160, 336 212
           C 330 200, 324 165, 305 160
           C 285 155, 275 166, 240 162
           C 210 160, 195 168, 178 178
           C 168 188, 165 204, 164 212 Z"
        fill="#12141A"
        stroke="#12141A"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Subtle hair texture styling strokes */}
      <path
        d="M 215 130 Q 240 124 270 128"
        fill="none"
        stroke="#2E3342"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 235 142 Q 255 138 285 144"
        fill="none"
        stroke="#2E3342"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ================= EYEBROWS ================= */}
      <motion.g style={{ y: browTilt }}>
        {/* Left Eyebrow */}
        <path
          d="M 180 216 Q 200 207 222 216"
          fill="none"
          stroke="#12141A"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Right Eyebrow */}
        <path
          d="M 278 216 Q 300 207 320 216"
          fill="none"
          stroke="#12141A"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </motion.g>

      {/* ================= EYES ================= */}
      <CharacterEyes
        smoothX={smoothX}
        smoothY={smoothY}
        isBlinking={isBlinking}
      />

      {/* ================= NOSE ================= */}
      {/* Minimal clean friendly nose */}
      <path
        d="M 249 252 L 246 270 Q 252 274 256 270"
        fill="none"
        stroke="#12141A"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ================= MOUTH / SMILE ================= */}
      {/* Friendly subtle smile line */}
      <path
        d="M 235 296 Q 250 306 265 296"
        fill="none"
        stroke="#12141A"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* ================= GLASSES ================= */}
      {/* Modern rounded-rectangular acetate glasses matching the visual reference */}
      <motion.g
        id="character-glasses"
        style={{
          x: glassesParallaxX,
          y: glassesParallaxY,
        }}
      >
        {/* Left Lens Frame */}
        <rect
          x="172"
          y="223"
          width="56"
          height="45"
          rx="14"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="#12141A"
          strokeWidth="4"
        />

        {/* Right Lens Frame */}
        <rect
          x="272"
          y="223"
          width="56"
          height="45"
          rx="14"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="#12141A"
          strokeWidth="4"
        />

        {/* Center Bridge */}
        <path
          d="M 228 242 Q 250 238 272 242"
          fill="none"
          stroke="#12141A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />

        {/* Left Temple to Ear */}
        <path
          d="M 172 241 L 158 244"
          fill="none"
          stroke="#12141A"
          strokeWidth="3.6"
          strokeLinecap="round"
        />

        {/* Right Temple to Ear */}
        <path
          d="M 328 241 L 342 244"
          fill="none"
          stroke="#12141A"
          strokeWidth="3.6"
          strokeLinecap="round"
        />

        {/* Subtle glass reflection highlight */}
        <path
          d="M 180 230 L 195 230"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 280 230 L 295 230"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </motion.g>
    </motion.g>
  );
}

