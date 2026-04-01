'use client';

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';

export default function AuthorityHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLSpanElement>(null);
  const lineRightRef = useRef<HTMLSpanElement>(null);
  const headLine1Ref = useRef<HTMLSpanElement>(null);
  const headLine2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      // a) Eyebrow left line: scaleX 0 → 1
      tl.fromTo(
        lineLeftRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'right center' }
      );

      // b) Eyebrow right line: scaleX 0 → 1 (same time as a)
      tl.fromTo(
        lineRightRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'left center' },
        '<'
      );

      // c) Eyebrow text: opacity 0 → 1, y: 8 → 0
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.3'
      );

      // d) Headline line 1: opacity 0 → 1, y: 24 → 0, skewY: 1.5 → 0
      tl.fromTo(
        headLine1Ref.current,
        { opacity: 0, y: 24, skewY: 1.5 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.2'
      );

      // e) Headline line 2: opacity 0 → 1, y: 24 → 0, skewY: 1.5 → 0
      tl.fromTo(
        headLine2Ref.current,
        { 
          opacity: 0, 
          y: 24, 
          skewY: 1.5,
          webkitTextStroke: '1.5px transparent'
        },
        { 
          opacity: 1, 
          y: 0, 
          skewY: 0, 
          webkitTextStroke: '1.5px #C9A84C',
          duration: 0.7, 
          ease: 'power3.out' 
        },
        '-=0.55'
      );

    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="text-center relative z-10">
      {/* Eyebrow [————] Text [————] */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span
          ref={lineLeftRef}
          className="block h-px w-12"
          style={{ backgroundColor: '#C9A84C' }}
          aria-hidden="true"
        />
        <div ref={eyebrowRef} className="opacity-0">
          <p
            role="doc-subtitle"
            className="font-[var(--font-body)] text-[11px] font-semibold tracking-[0.16em] uppercase"
            style={{ color: '#C9A84C' }}
          >
            Certified · Compliant · Trusted
          </p>
        </div>
        <span
          ref={lineRightRef}
          className="block h-px w-12"
          style={{ backgroundColor: '#C9A84C' }}
          aria-hidden="true"
        />
      </div>

      {/* Extreme weight contrast headline */}
      <h2 className="flex flex-col items-center">
        <span
          ref={headLine1Ref}
          className="block font-[var(--font-headline)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em] leading-[1.05] opacity-0"
          style={{ color: '#1A1A18' }}
        >
          Trusted by the industry.
        </span>
        <span
          ref={headLine2Ref}
          className="block font-[var(--font-headline)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em] leading-[1.05] opacity-0"
          style={{ color: 'transparent', WebkitTextStroke: '1.5px transparent' }}
        >
          Certified for performance.
        </span>
      </h2>


    </div>
  );
}
