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
          skewY: 1.5
        },
        { 
          opacity: 1, 
          y: 0, 
          skewY: 0, 
          duration: 0.7, 
          ease: 'power3.out' 
        },
        '-=0.55'
      );

    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="max-w-xl relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div ref={eyebrowRef} className="opacity-0">
          <p
            role="doc-subtitle"
            className="s-label !text-primary uppercase tracking-[0.2em]"
          >
            Authority & Compliance
          </p>
        </div>
      </div>

      {/* High-Contrast Dynamic Headline */}
      <h2 className="flex flex-col gap-2">
        <span
          ref={headLine1Ref}
          className="block s-h1 !text-zinc-900 !text-[clamp(2rem,5vw,3.5rem)] !leading-[0.9] !tracking-tighter uppercase opacity-0"
        >
          Trusted by the <br />
          <span className="text-primary italic lowercase font-body font-light tracking-tight">Global Industry.</span>
        </span>
        <span
          ref={headLine2Ref}
          className="block s-body !text-zinc-500 opacity-100 !text-[clamp(1rem,1.2vw,1.1rem)]"
        >
          Built for 25 Years of Uninterrupted Performance.
        </span>
      </h2>
      
      <p className="mt-6 s-body !text-zinc-400 max-w-sm leading-relaxed !text-[0.9rem]">
        We don't just build solar plants; we engineer sovereign energy assets that comply with the highest global standards.
      </p>
    </div>
  );
}
