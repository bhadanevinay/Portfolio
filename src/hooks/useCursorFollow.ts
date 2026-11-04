'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring } from 'motion/react';

export function useCursorFollow(containerRef?: React.RefObject<HTMLElement | null>) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth springs for natural organic motion
  const smoothX = useSpring(rawX, { stiffness: 90, damping: 18, mass: 0.6 });
  const smoothY = useSpring(rawY, { stiffness: 90, damping: 18, mass: 0.6 });

  // Separate slower spring for body/shoulders to give depth
  const bodyX = useSpring(rawX, { stiffness: 45, damping: 22, mass: 1 });
  const bodyY = useSpring(rawY, { stiffness: 45, damping: 22, mass: 1 });

  const [isBlinking, setIsBlinking] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Natural periodic eye blink animation (every 3.2 to 5 seconds)
    let blinkTimeout: NodeJS.Timeout;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        const nextBlinkDelay = Math.random() * 2200 + 3200;
        blinkTimeout = setTimeout(triggerBlink, nextBlinkDelay);
      }, 150);
    };

    blinkTimeout = setTimeout(triggerBlink, 3000);

    // 2. Mouse / Pointer tracking
    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      let clientX = e.clientX;
      let clientY = e.clientY;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
      }

      // Calculate normalized offset from center (-1 to 1) clamped
      const deltaX = (clientX - centerX) / (window.innerWidth * 0.45);
      const deltaY = (clientY - centerY) / (window.innerHeight * 0.45);

      const clampedX = Math.max(-1, Math.min(1, deltaX));
      const clampedY = Math.max(-1, Math.min(1, deltaY));

      rawX.set(clampedX);
      rawY.set(clampedY);

      // Reset idle timer
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        // Return to neutral position slowly when mouse is idle
        rawX.set(0);
        rawY.set(0);
      }, 3500);
    };

    const handlePointerLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    // Touch device support
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove({
          clientX: touch.clientX,
          clientY: touch.clientY,
        } as MouseEvent);
      }
    };

    const handleTouchEnd = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(blinkTimeout);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [rawX, rawY, containerRef]);

  return {
    smoothX,
    smoothY,
    bodyX,
    bodyY,
    isBlinking,
  };
}

