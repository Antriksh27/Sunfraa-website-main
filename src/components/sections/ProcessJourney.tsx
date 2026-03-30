'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function ProcessJourney() {
  const { process } = homepageData;

  return (
    <section id="process" className="py-24 lg:py-48 bg-background relative overflow-hidden border-t border-white/[0.03]">
      
      {/* Background Decorative Grid line */}
      <div className="absolute top-[50%] left-0 w-full h-[1px] bg-white/[0.03] hidden lg:block" />

      <div className="s-container relative z-10">
        
        <div className="max-w-4xl mb-24">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-primary/30" />
              <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">ONBOARDING_SEQUENCE</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] tracking-tight uppercase">
              Operational <br />
              <span className="gold-gradient">Transition.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-0.5 bg-white/[0.05] border border-white/[0.05]">
          {process.steps.map((step: any, i: number) => (
            <FadeUp key={i} delay={0.2 + (i * 0.1)}>
              <div className="h-full p-12 lg:p-16 bg-surface group hover:bg-white/[0.02] transition-all duration-700 relative">
                <div className="flex flex-col">
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 bg-white/[0.03] flex items-center justify-center rounded-sm mb-12 border border-white/[0.1] group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                    <span className="text-xl font-headline font-[800] text-primary group-hover:text-background transition-colors duration-500">
                      0{i + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-[800] font-headline text-on-surface mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[1rem] lg:text-[1.125rem] text-on-surface/40 font-body leading-relaxed italic">
                    {step.desc}
                  </p>
                </div>

                {/* Technical Connector Dot (Desktop only) */}
                <div className="hidden lg:block absolute top-[50%] -right-1 w-2 h-2 bg-primary rounded-full translate-y-[-50%] scale-0 group-hover:scale-100 transition-transform duration-500 z-20" />
              </div>
            </FadeUp>
          ))}
        </div>

      </div>

    </section>
  );
}
