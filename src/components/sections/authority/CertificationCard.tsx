'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface CertificationCardProps {
  id: string;
  name: string;
  subtitle: string;
  index: number;
  className?: string;
}

export default function CertificationCard({
  id,
  name,
  subtitle,
  index,
  className,
}: CertificationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const verifiedRef = useRef<HTMLSpanElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Entrance and Idle animations
  useGSAP(
    () => {
      if (!cardRef.current || !badgeRef.current || reducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // 1. Card Entrance: Opacity 0, y: 40px, scale: 0.94, rotateX: 8deg
      tl.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.94,
          rotateX: 8,
          transformPerspective: 800,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.7,
          delay: index * 0.12,
          ease: 'power3.out',
        }
      );

      // 2. Number Badge Entrance: starts at scale 0, rotation -15deg
      tl.fromTo(
        badgeRef.current,
        { scale: 0, rotation: -15 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
        },
        '-=0.05'
      );

      // 3. Typing animation for "Verified"
      tl.call(() => {
        verifiedRef.current?.classList.add('animate-type-in');
      }, [], '+=0.1');

      // 4. Idle Float: Gently bob at different rhythms - starts after stagger
      gsap.to(badgeRef.current, {
        y: -3,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8 + index * 0.4,
      });
    },
    { scope: cardRef, dependencies: [reducedMotion] }
  );

  // Hover Handlers
  const handleMouseEnter = () => {
    if (reducedMotion) return;
    
    // Card lift and scale
    gsap.to(cardRef.current, {
      y: -12,
      scale: 1.04,
      duration: 0.3,
      ease: 'power2.out',
    });

    // Badge scale up
    gsap.to(badgeRef.current, {
      scale: 1.1,
      duration: 0.25,
      ease: 'power2.out',
    });

    // Gold glow shadow
    gsap.to(glowRef.current, {
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;

    // Card settle
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power2.inOut',
    });

    // Badge scale reset
    gsap.to(badgeRef.current, {
      scale: 1,
      duration: 0.35,
      ease: 'power2.inOut',
    });

    // Gold glow shadow reset
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <div className={cn('relative group/card h-[180px]', className)}>
      {/* Gold Glow Hover Shadow (Div behind card) */}
      <div
        ref={glowRef}
        className="absolute inset-2 rounded-[16px] pointer-events-none opacity-0 blur-[16px] z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.4), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Main Card */}
      <div
        ref={cardRef}
        role="article"
        aria-label={`${name} — ${subtitle}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative z-10 w-full h-full flex flex-col bg-white rounded-[16px] px-7 py-9 shadow-[0_2px_10px_rgba(0,0,0,0.05),0_8px_30px_rgba(0,0,0,0.05)]',
          'border border-transparent transition-all duration-300',
          reducedMotion ? 'opacity-100' : 'opacity-0'
        )}
      >
        {/* Hover Border Logic */}
        <div className="absolute inset-0 rounded-[16px] border border-transparent group-hover/card:border-[rgba(201,168,76,0.3)] pointer-events-none transition-colors duration-300" />

        {/* TOP AREA: Circular Number Badge */}
        <div
          ref={badgeRef}
          className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center isolate overflow-hidden shadow-md"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #E8C878)',
          }}
          aria-hidden="true"
        >
          <span className="font-[var(--font-headline)] font-bold text-sm text-[#0D1117] relative z-10">
            {id}
          </span>
          {/* Shine Sweep Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/card:animate-shine-sweep" />
        </div>

        {/* MIDDLE AREA */}
        <p className="font-[var(--font-headline)] text-xl font-bold text-[#1A1A18] mt-2 mb-1.5 leading-tight">
          {name}
        </p>
        <p className="font-[var(--font-body)] text-[11px] font-medium tracking-[0.1em] uppercase text-[#8A8A82]">
          {subtitle}
        </p>

        {/* BOTTOM AREA: Separator & Verified indicator */}
        <div className="mt-auto pt-4">
          <div className="w-full h-px bg-[#E2E0D8] mb-3" />
          <div className="flex items-center justify-between">
            <span
              ref={verifiedRef}
              className="font-[var(--font-body)] text-[11px] font-medium text-[#C9A84C] inline-block max-w-0 overflow-hidden"
              aria-label="Verified certification"
            >
              Verified
            </span>
            <ShieldCheck size={14} className="text-[#C9A84C]" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes typeIn {
          from { max-width: 0; }
          to { max-width: 80px; }
        }
        .animate-type-in {
          animation: typeIn 0.4s steps(8) forwards;
          animation-delay: ${index * 0.15}s;
        }
        @keyframes shine-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine-sweep {
          animation: shine-sweep 0.6s ease-in-out;
        }
      `}} />
    </div>
  );
}
