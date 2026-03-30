'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { cn } from '@/lib/utils/cn';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = '',
  duration = 2,
  className = '',
}: CountUpProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  useGSAP(() => {
    if (reducedMotion) {
      setDisplayValue(target.toLocaleString('en-IN'));
      return;
    }

    if (!containerRef.current) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        setDisplayValue(Math.floor(obj.value).toLocaleString('en-IN'));
      },
      onComplete: () => {
        setDisplayValue(target.toLocaleString('en-IN'));
      },
    });
  }, { scope: containerRef });

  return (
    <span
      ref={containerRef}
      className={cn('tabular-nums inline-block', className)}
    >
      {displayValue}
      {suffix}
    </span>
  );
}
