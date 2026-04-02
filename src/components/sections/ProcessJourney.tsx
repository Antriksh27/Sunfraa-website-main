'use client';

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Scan, ClipboardCheck, Zap, Radio, ArrowDown } from 'lucide-react';

const protocolSteps = [
  {
    icon: Scan,
    title: 'Precision Audit',
    desc: '3D shadow-profile mapping and structural topology integration.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regulatory Alignment',
    desc: 'ALMM-compliant approvals and Net-Metering bypass logic.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    desc: 'Extreme-weather infrastructure install within a 48H window.',
  },
  {
    icon: Radio,
    title: 'Grid Sync',
    desc: 'Real-time IoT activation and performance-shield initiation.',
  },
];

export default function ProcessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // 1. Line Trace Animation
      gsap.fromTo(lineRef.current, 
        { scaleX: 0, transformOrigin: 'left center' }, 
        { 
          scaleX: 1, 
          duration: 2, 
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );

      // 2. Node staggered reveal
      gsap.fromTo('.protocol-node', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
          }
        }
      );

    });

    // 3. Continuous Infinite Background Scroll (Atmospheric Slow-Burn)
    gsap.to('.protocol-bg-text-inner', {
      xPercent: -33.33333,
      repeat: -1,
      duration: 100,
      ease: 'none',
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="process" 
      className="s-section s-theme-black !p-0 flex items-center justify-center min-h-screen lg:h-screen lg:s-section-full overflow-hidden lg:overflow-hidden h-auto"
    >
      {/* Atmospheric Scrolling Background Text */}
      <div className="absolute inset-0 z-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="protocol-bg-text-inner whitespace-nowrap flex">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-[clamp(6rem,18vw,16rem)] font-black uppercase tracking-tighter text-white/[0.025] leading-none pr-16"
            >
              AUDIT · DESIGN · DEPLOY · COMMISSION · MONITOR ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" />

      <div className="s-container relative z-20 w-full h-auto lg:h-full flex flex-col justify-center lg:justify-around py-20 lg:py-16 gap-16 lg:gap-0">
        {/* Zenith Header Block */}
        <div className="text-center lg:text-left">
           <div className="flex items-center justify-center lg:justify-start gap-4 s-label mb-2">
             Asset Lifecycle
             <span className="w-8 h-px bg-primary/30" />
           </div>
           <h2 className="s-h1 !text-white !text-[clamp(2.2rem,6vw,4rem)] !leading-[0.8] !tracking-[calc(-0.06em)] uppercase">
             Seamless <br/>
             <span className="text-zinc-700 italic lowercase font-body font-light tracking-tight">lifecycle.</span>
           </h2>
        </div>

        {/* The Conductive Path Matrix */}
        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div 
             ref={lineRef}
             className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-gradient-to-r from-white/5 via-primary to-white/5 z-0" 
           />

           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
              {protocolSteps.map((step, i) => (
                <div key={i} className="protocol-node group">
                   <div className="space-y-6 lg:space-y-10 flex flex-col items-center lg:items-start">
                      
                      {/* Technical Node Head */}
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-none bg-zinc-900 border border-white/5 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500 z-10 shadow-lg">
                         <step.icon className="w-6 h-6 text-zinc-600 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                      </div>

                      {/* Content Card */}
                      <div className="text-center lg:text-left space-y-2">
                         <h3 className="s-h3 !text-white !text-xl lg:!text-2xl !tracking-tighter uppercase font-black group-hover:text-primary transition-colors">
                            {step.title}
                         </h3>
                         
                         <p className="s-body !text-zinc-500 !text-[11px] leading-relaxed max-w-[200px]">
                            {step.desc}
                         </p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
