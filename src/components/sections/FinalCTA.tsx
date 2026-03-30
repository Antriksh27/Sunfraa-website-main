'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function FinalCTA() {
  const { cta } = homepageData;

  return (
    <section className="py-24 lg:py-64 bg-background relative overflow-hidden border-t border-white/[0.03]">
      {/* Background Ornaments */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] opacity-50" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="s-container relative z-10 text-center">
        <FadeUp delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-primary/30" />
            <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">FINAL_COMMAND_INITIATION</span>
            <span className="w-12 h-[1px] bg-primary/30" />
          </div>
          
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-[800] font-headline text-on-surface leading-[0.85] mb-16 tracking-tighter uppercase max-w-6xl mx-auto">
            Secure Your <br />
            <span className="gold-gradient italic">Energy Future.</span>
          </h2>
          
          <p className="text-[1.25rem] lg:text-[1.5rem] text-on-surface/40 font-body max-w-3xl mx-auto mb-20 leading-relaxed italic">
            Transition to industrial-grade autonomy with India's premier solar infrastructure protocol.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-12 py-8 bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-background text-[0.75rem] font-[800] uppercase tracking-[0.4em] italic flex items-center gap-4">
                  INITIATE_PROTOCOL
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-2 transition-transform duration-500">arrow_right_alt</span>
                </span>
            </button>
            
            <button className="group relative px-12 py-8 border border-white/[0.1] hover:border-primary transition-colors duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-on-surface text-[0.75rem] font-[800] uppercase tracking-[0.4em] italic">
                  DOWNLOAD_SPECS
                </span>
            </button>
          </div>
        </FadeUp>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.02]" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.02]" />
    </section>
  );
}
