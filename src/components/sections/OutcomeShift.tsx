'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import Image from 'next/image';
import homepageData from '@/content/homepage.json';

export default function OutcomeShift() {
  const { outcome } = homepageData;

  return (
    <section id="outcome" className="py-24 lg:py-40 bg-background relative overflow-hidden">
      <div className="s-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1 min-w-0">
            <FadeUp delay={0.1}>
              <div className="relative aspect-[4/5] lg:aspect-[16/10] overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
                  alt="Industrial Solar Infrastructure"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* HUD Overlay */}
                <div className="absolute top-6 left-6 p-4 glass border-white/[0.05] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block">
                  <span className="text-[9px] font-label text-primary uppercase tracking-widest block mb-1">Asset_Verification</span>
                  <div className="h-[1px] w-full bg-primary/30 mb-2" />
                  <span className="text-xs font-headline text-on-surface">STATUS: OPTIMIZED</span>
                </div>
              </div>

              {/* Floating Data Badge */}
              <div className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-6 lg:-right-10 p-6 sm:p-10 bg-surface/80 border border-white/[0.05] backdrop-blur-2xl group shadow-2xl max-w-[85vw] sm:max-w-none">
                <span className="text-[0.625rem] font-label text-primary uppercase tracking-[0.2em] block mb-3 italic">ROVEREIGN_METRIC_ACTIVATE</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-headline font-[900] text-on-surface tracking-tight leading-[1] block">100%<br />AUTONOMY</span>
                <div className="h-1 w-12 bg-primary mt-6 group-hover:w-full transition-all duration-700" />
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 min-w-0 pt-8 lg:pt-0">
            <FadeUp delay={0.2}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic break-words w-full sm:w-auto">
                  {outcome.label || "THE_SOLAR_SHIFT"}
                </span>
                <div className="h-[1px] flex-grow bg-white/[0.05] hidden sm:block" />
              </div>
              
              <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-[800] font-headline gold-gradient uppercase leading-[0.9] mb-10 tracking-tight break-words">
                {outcome.title}
              </h2>

              <div className="space-y-8">
                <p className="text-[1.125rem] lg:text-[1.35rem] text-on-surface/50 font-body leading-relaxed italic break-words pr-4 lg:pr-0">
                  {outcome.desc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-4 p-8 border-l border-white/[0.05] hover:border-primary transition-colors">
                    <span className="text-[0.625rem] font-label text-primary tracking-widest block font-bold">FROM: LIABILITY</span>
                    <p className="text-sm text-on-surface/40 leading-relaxed font-body">Monthly capital drainage into non-renewable utility grids with zero terminal value.</p>
                  </div>
                  <div className="space-y-4 p-8 border-l border-white/[0.05] hover:border-primary transition-colors">
                    <span className="text-[0.625rem] font-label text-secondary tracking-widest block font-bold">TO: SOVEREIGNTY</span>
                    <p className="text-sm text-on-surface/40 leading-relaxed font-body">Permanent energy independence through self-owned generation infrastructure.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
