'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State
      gsap.set('.preloader-char', { opacity: 0, y: 20 });
      
      const timeline = gsap.timeline({
        onUpdate: () => {
          setPercentage(Math.round(timeline.progress() * 100));
        },
        onComplete: () => {
          // 3. Final Exit Sequence
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: 'power4.inOut',
            delay: 0.5,
            onComplete: () => {
               window.dispatchEvent(new Event('sunfraa_preloader_complete'));
            }
          });
        }
      });

      // 2. The Boot Sequence
      timeline
        .to('.preloader-char', {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power3.out'
        })
        .to(progressRef.current, {
          scaleX: 1,
          duration: 2.5,
          ease: 'expo.inOut'
        }, '<')
        .to('.preloader-status', {
           opacity: 1,
           duration: 0.4
        }, '-=1.5')
        .to('.preloader-char', {
           opacity: 0,
           y: -20,
           stagger: 0.02,
           duration: 0.5,
           ease: 'power3.in'
        }, '-=0.3');

    });

    return () => ctx.revert();
  }, []);

  const brand = "SUNFRAA_GLOBAL".split("");

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-background flex flex-col items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Cinematic Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150"></div>

      <div className="relative w-full max-w-2xl px-12 space-y-8">
        
        {/* Brand Reveal */}
        <div className="flex justify-center overflow-hidden">
          {brand.map((char, i) => (
            <span 
              key={i} 
              className="preloader-char inline-block font-headline font-black text-4xl md:text-6xl tracking-tighter text-on-background"
            >
              {char}
            </span>
          ))}
        </div>

        {/* Progress System */}
        <div className="space-y-4">
          <div className="h-px w-full bg-white/5 relative overflow-hidden">
             <div 
               ref={progressRef}
               className="absolute top-0 left-0 h-full w-full bg-primary scale-x-0 origin-left shadow-[0_0_20px_rgba(230,195,100,0.6)]"
             ></div>
          </div>
          
          <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.4em] uppercase font-black text-primary/60 preloader-status opacity-0">
             <span>Protocol_Initialize: v6.0</span>
             <span className="text-on-background">{percentage}%</span>
          </div>
        </div>

      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
}
