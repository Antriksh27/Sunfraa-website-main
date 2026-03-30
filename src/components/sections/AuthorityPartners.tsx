'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function AuthorityPartners() {
  const { authority } = homepageData;

  return (
    <section id="authority" className="py-24 lg:py-48 bg-surface-container-low overflow-hidden relative border-t border-white/[0.03]">
      <div className="s-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
          
          <div>
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-primary/30" />
                <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">AUTHORITY_PROTOCOL</span>
              </div>
              
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] mb-12 tracking-tight uppercase">
                Global <br /> 
                <span className="gold-gradient">Presence.</span>
              </h2>
              
              <p className="text-[1.125rem] lg:text-[1.35rem] text-on-surface/40 font-body leading-relaxed max-w-md mb-16 italic">
                Operational assets deployed across the Indian industrial heartlands. From textile hubs to manufacturing corridors.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/[0.05]">
                {authority.seals.map((seal: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
                    <span className="text-[0.75rem] font-label text-on-surface/60 uppercase tracking-[0.2em] font-bold group-hover:text-on-surface transition-colors duration-500">{seal}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="relative">
            <FadeUp delay={0.3}>
              <div className="aspect-square bg-surface border border-white/[0.05] p-16 lg:p-24 relative flex items-center justify-center group overflow-hidden">
                {/* Conceptual Map / Pulse Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000" />
                
                {/* Technical HUD interface */}
                <div className="absolute inset-0 border-[24px] border-background z-10" />
                <div className="absolute inset-8 border border-white/[0.03] pointer-events-none" />
                
                <span className="text-[14rem] material-symbols-outlined text-primary/5 select-none ornament scale-110 group-hover:scale-125 transition-transform duration-[3000ms] ease-out">public</span>
                
                {/* Floating Authority Points */}
                <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_20px_var(--color-primary)] z-20" />
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse delay-700 shadow-[0_0_15px_var(--color-primary)] z-20" />
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-primary/40 rounded-full animate-ping delay-1000 z-20" />
                
                {/* Coordinate Markers */}
                <div className="absolute top-4 left-4 text-[8px] font-mono text-primary/30 uppercase tracking-widest hidden lg:block">LAT: 28.6139° N</div>
                <div className="absolute bottom-4 right-4 text-[8px] font-mono text-primary/30 uppercase tracking-widest hidden lg:block">LONG: 77.2090° E</div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
