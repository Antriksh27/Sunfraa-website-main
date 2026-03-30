'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import CountUp from '@/components/animations/CountUp';
import homepageData from '@/content/homepage.json';

export default function ROIPanel() {
  const { roi } = homepageData;

  return (
    <section id="roi" className="py-24 lg:py-64 bg-background relative overflow-hidden border-t border-white/[0.03]">
      <div className="s-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-end">
          
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-primary/30" />
                <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">YIELD_PROJECTION_v2</span>
              </div>
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-[800] font-headline text-on-surface leading-[0.85] mb-12 tracking-tighter uppercase max-w-4xl">
                The Capital <br />
                <span className="gold-gradient italic">Multiplier.</span>
              </h2>
              <p className="text-[1.125rem] lg:text-[1.35rem] text-on-surface/40 font-body leading-relaxed max-w-2xl italic">
                Quantified performance metrics for institutional-grade energy deployments. Zero-friction capital recovery.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-12 lg:items-end mt-12 lg:mt-0">
            {roi.stats.map((stat: any, i: number) => (
              <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                <div className="flex flex-col lg:items-end group">
                  <div className="flex items-baseline gap-2 lg:gap-4 mb-2">
                    <span className="text-[clamp(3.5rem,5vw,8rem)] font-[800] font-headline text-on-surface tracking-tighter uppercase group-hover:text-primary transition-colors duration-500 italic leading-none">
                      <CountUp target={stat.value} duration={2.5} />
                    </span>
                    <span className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-[800] font-headline text-primary uppercase italic leading-none">{stat.unit}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-primary/30" />
                    <span className="text-[0.75rem] font-[700] uppercase tracking-[0.4em] font-label text-on-surface/40 group-hover:text-on-surface transition-colors duration-500">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-[1rem] text-on-surface/30 font-body mt-6 max-w-[280px] lg:text-right italic">
                    {stat.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative HUD markers */}
      <div className="absolute top-12 left-12 text-[10px] font-mono text-primary/20 uppercase tracking-[0.5em] vertical-rl hidden lg:block">ROI_SYSTEM_STATUS: ONLINE</div>
      <div className="absolute bottom-12 right-12 text-[10px] font-mono text-primary/20 uppercase tracking-[0.5em] vertical-rl hidden lg:block">DATA_REFRESH: 24H_CYCLE</div>
    </section>
  );
}
