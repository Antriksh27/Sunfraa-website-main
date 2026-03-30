'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function SunfraaEdge() {
  const { edge } = homepageData;

  return (
    <section id="edge" className="py-24 lg:py-40 bg-surface border-t border-white/[0.03] relative overflow-hidden">
      <div className="s-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          
          <div className="lg:col-span-5 sticky top-32">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-[1px] bg-primary/40" />
                <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">
                   {edge.label || "SOVEREIGN_EDGE"}
                </span>
              </div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] mb-12 tracking-tight uppercase">
                {edge.title}
              </h2>
              <div className="w-24 h-[2px] bg-primary mb-12" />
              <p className="text-[1.125rem] lg:text-[1.35rem] text-on-surface/40 font-body italic leading-relaxed max-w-md">
                "Our engineering is built for the next 25 years of climate-critical energy production."
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-7 space-y-12 lg:pt-12">
            {edge.points.map((point: any, i: number) => (
              <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                <div className="group relative">
                  <div className="flex gap-12 lg:gap-16">
                    <span className="text-xl font-headline font-[900] text-primary/20 group-hover:text-primary transition-colors duration-500 mt-2">
                       {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-6">
                      <h3 className="text-3xl lg:text-4xl font-[800] font-headline text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors duration-500">
                        {point.title}
                      </h3>
                      <p className="text-[1rem] lg:text-[1.125rem] text-on-surface/50 font-body leading-relaxed max-w-xl">
                        {point.desc}
                      </p>
                      
                      <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                         <span className="text-[9px] font-label text-primary uppercase tracking-[0.3em]">Protocol_Ready</span>
                         <div className="h-[1px] w-12 bg-primary/30" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 h-[1px] w-full bg-white/[0.05] group-hover:bg-primary/20 transition-colors duration-700" />
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
