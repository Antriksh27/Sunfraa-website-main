'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function ProblemFraming() {
  const { problem } = homepageData;

  return (
    <section id="problem" className="py-24 lg:py-40 bg-background relative overflow-hidden border-t border-white/[0.03]">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="s-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          
          <div className="lg:col-span-5 sticky top-32">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-[1px] bg-primary/40" />
                <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">
                  {problem.label || "THE_ENTROPY_ANALYSIS"}
                </span>
              </div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] mb-10 tracking-tight uppercase">
                {problem.title}
              </h2>
              <div className="h-[1px] w-full bg-white/[0.05] mb-10" />
              <p className="text-[1.1rem] lg:text-[1.25rem] text-on-surface/50 font-body leading-relaxed max-w-xl italic">
                "{problem.desc}"
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-7 space-y-12 lg:pt-12">
            {problem.metrics?.map((metric: any, i: number) => (
              <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                <div className="group relative">
                   {/* Numbering */}
                   <div className="absolute -left-12 top-0 hidden lg:block">
                     <span className="text-[10px] font-label text-primary/20 tracking-tighter">PHASE_{String(i+1).padStart(2, '0')}</span>
                   </div>

                  <div className="p-8 lg:p-12 bg-white/[0.01] border-l-2 border-white/[0.05] group-hover:bg-white/[0.02] group-hover:border-primary transition-all duration-700">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                      <div>
                        <h3 className="text-[0.75rem] font-[700] uppercase tracking-[0.2em] font-label text-primary/60 mb-2">
                          {metric.label}
                        </h3>
                        <p className="text-[0.875rem] text-on-surface/40 font-body lowercase tracking-tight max-w-sm">
                          {metric.description || "Infrastructural energy leakage leading to systematic capital attrition."}
                        </p>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-[800] font-headline text-on-surface tracking-tighter">{metric.value}</span>
                        <span className="text-[0.7rem] font-label text-on-surface/20 uppercase tracking-widest font-bold">Limit</span>
                      </div>
                    </div>
                    
                    {/* Industrial Progress Bar */}
                    <div className="relative h-[4px] w-full bg-white/[0.03] overflow-hidden">
                      <div 
                        className="absolute left-0 top-0 h-full bg-primary origin-left transition-transform duration-1000 ease-out" 
                        style={{ width: metric.value.includes('%') ? metric.value : '100%' }}
                      />
                      <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-r from-transparent to-primary/20 animate-pulse" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
