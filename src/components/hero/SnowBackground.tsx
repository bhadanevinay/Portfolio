'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../layout/ThemeContext';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  alpha: number;
  swayFactor: number;
  angle: number;
}

export function SnowBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initSnow();
    };

    window.addEventListener('resize', handleResize);

    const snowflakeCount = Math.floor(Math.min(width * 0.12, 130));
    let snowflakes: Snowflake[] = [];

    const initSnow = () => {
      snowflakes = [];
      for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.4 + 1.0,
          speedY: Math.random() * 1.5 + 0.7,
          speedX: (Math.random() - 0.5) * 0.35,
          alpha: Math.random() * 0.6 + 0.35,
          swayFactor: Math.random() * 0.03 + 0.01,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    initSnow();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render falling snowflakes
      for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i];

        // Horizontal sinusoidal sway
        flake.angle += flake.swayFactor;
        flake.x += Math.sin(flake.angle) * 0.7 + flake.speedX;
        flake.y += flake.speedY;

        // Wrap around when falling past bottom or side
        if (flake.y > height) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

        if (isLight) {
          ctx.fillStyle = `rgba(100, 116, 139, ${flake.alpha * 0.55})`;
          if (flake.radius > 2.0) {
            ctx.shadowBlur = 3;
            ctx.shadowColor = 'rgba(148, 163, 184, 0.4)';
          }
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${flake.alpha})`;
          if (flake.radius > 2.0) {
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
          }
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLight]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Falling snow canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Atmospheric lighting orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-ambient opacity-20 pointer-events-none" />
    </div>
  );
}
