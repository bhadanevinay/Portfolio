'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
}

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const starCount = Math.floor(Math.min(width * 0.08, 90));
    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.4,
          alpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.85) {
          star.alpha = 0.85;
          star.twinkleSpeed = -Math.abs(star.twinkleSpeed);
        } else if (star.alpha < 0.15) {
          star.alpha = 0.15;
          star.twinkleSpeed = Math.abs(star.twinkleSpeed);
        }

        // Slow ambient drift
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 240, ${star.alpha})`;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = 'rgba(167, 139, 250, 0.6)';
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
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Atmospheric radial glow orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[550px] bg-accent/8 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-cyan/6 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 -left-40 w-[450px] h-[450px] bg-accent/6 rounded-full blur-[140px]" />

      {/* Subtle grid layer */}
      <div className="absolute inset-0 grid-ambient opacity-30" />
    </div>
  );
}

