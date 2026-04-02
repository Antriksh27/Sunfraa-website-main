'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Activity, Globe, Database, Award } from 'lucide-react';
import { LogoCloud } from '@/components/ui/logo-cloud-2';

export default function TrustedBy() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    gsap.fromTo('.alliance-header', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );

    gsap.fromTo('.alliance-cloud-container', 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
    );

  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section 
      ref={containerRef}
      id="trusted-by" 
      className="s-section s-section-full s-theme-black !p-0 h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />

      <div className="s-container max-w-[1400px] w-full relative z-20 px-6 lg:px-20 h-full flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <div className="alliance-header mb-6 lg:mb-10 space-y-4 text-center">
           <div className="flex items-center justify-center gap-4 s-label uppercase !text-zinc-400 !text-[11px] font-bold">
              <Globe size={14} className="text-primary" />
              Strategic Network
           </div>
            <h2 className="s-h1 !text-white !text-[clamp(2rem,5vw,3.5rem)] !leading-[0.8] !tracking-[calc(-0.06em)] uppercase">
              The Sunfraa <br />
              <span className="text-primary font-light italic lowercase font-body tracking-tight">Alliance Partners.</span>
            </h2>
        </div>

        {/* Industrial Alliance Grid */}
        <div className="alliance-cloud-container relative mx-auto w-full max-w-5xl border-t border-b border-white/5 py-4 lg:py-10 bg-white/[0.01]">
           <LogoCloud className="rounded-none border-none bg-transparent" />
        </div>

         {/* Bottom Metadata - Higher Contrast */}
        <div className="alliance-header mt-8 lg:mt-12 flex flex-wrap justify-center gap-8 lg:gap-12">
           <div className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity">
              <Activity size={14} className="text-primary" />
              <div className="s-mono !text-zinc-300 uppercase !text-[9.5px] font-bold tracking-wider">National Deployment</div>
           </div>
           <div className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity">
              <Activity size={14} className="text-primary" />
              <div className="s-mono !text-zinc-300 uppercase !text-[10px] font-bold tracking-wider">MNRE ALMM Approved</div>
           </div>
           <div className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity">
              <Activity size={14} className="text-primary" />
              <div className="s-mono !text-zinc-300 uppercase !text-[9.5px] font-bold tracking-wider">ISO Quality Sync</div>
           </div>
        </div>

      </div>

      
    </section>
  );
}
