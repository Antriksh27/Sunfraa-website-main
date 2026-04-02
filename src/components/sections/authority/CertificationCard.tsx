'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface CertificationCardProps {
  name: string;
  subtitle: string;
  index: number;
  className?: string;
}

export default function CertificationCard({
  name,
  subtitle,
  index,
  className,
}: CertificationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  useGSAP(
    () => {
      if (!cardRef.current || reducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      // 1. Drawing the pillar line
      tl.fromTo(
        lineRef.current,
        { scaleY: 0 },
        { 
          scaleY: 1, 
          duration: 1, 
          ease: 'power4.out', 
          transformOrigin: 'top center' 
        }
      );

      // 2. Content reveal
      tl.fromTo(
        contentRef.current,
        { opacity: 0, x: -10 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          ease: 'power2.out' 
        },
        '-=0.6'
      );

      // 3. Constant IDLE Floating (Bobbing)
      gsap.to(cardRef.current, {
        y: '+=8',
        duration: 2 + index * 0.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });
    },
    { scope: cardRef, dependencies: [reducedMotion] }
  );

  return (
    <div 
      ref={cardRef}
      className={cn(
        's-card !rounded-none !bg-white/90 backdrop-blur-3xl border-zinc-100 !p-5 flex items-start gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      {/* The Compliance Pillar Line */}
      <div 
        ref={lineRef}
        className="w-[1.8px] h-8 bg-primary/40 self-start group-hover:bg-primary transition-colors"
        aria-hidden="true"
      />
 
      {/* Content */}
      <div ref={contentRef} className="flex flex-col gap-1">
        <h3 className="s-h3 !text-zinc-900 !text-[16px] lg:!text-xl !tracking-tighter uppercase font-black whitespace-nowrap">
          {name}
        </h3>
        <p className="s-body !text-zinc-600 !text-[10px] lg:!text-[11px] leading-tight max-w-[200px] font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
