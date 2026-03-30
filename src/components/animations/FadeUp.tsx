'use client';

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { cn } from '@/lib/utils/cn';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  onClick?: () => void;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.9,
  threshold = 0.1,
  className = '',
  onClick,
}: FadeUpProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        y: 20,
        visibility: 'hidden',
      },
      {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onStart: () => {
          if (elementRef.current) {
            elementRef.current.style.willChange = 'transform, opacity';
          }
        },
        onComplete: () => {
          if (elementRef.current) {
            elementRef.current.style.willChange = 'auto';
          }
        },
      }
    );
  }, { scope: elementRef });

  return (
    <div
      ref={elementRef}
      className={cn('gsap-reveal', className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
