'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import StaggerChildren from '@/components/animations/StaggerChildren';
import homepageData from '@/content/homepage.json';

export default function BenefitsGrid() {
  const { benefits } = homepageData;

  return (
    <section id="benefits" className="py-24 lg:py-40 bg-surface relative overflow-hidden border-t border-white/[0.03]">
      <div className="s-container">
        
        <div className="max-w-4xl mb-24">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-primary/30" />
              <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">ECONOMIC_VECTORS</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] tracking-tight uppercase">
              The Yield <br />
              <span className="gold-gradient">Architecture.</span>
            </h2>
          </FadeUp>
        </div>

        <StaggerChildren stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-0.5 bg-white/[0.05] border border-white/[0.05]">
          {benefits.items.map((item: any, i: number) => (
            <div 
              key={i} 
              className="h-full p-12 lg:p-16 bg-surface group hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-white/[0.03] flex items-center justify-center rounded-sm mb-12 group-hover:bg-primary transition-all duration-700">
                <span className="material-symbols-outlined !text-[36px] text-primary group-hover:text-background transition-colors duration-500">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-[800] font-headline text-on-surface mb-6 uppercase tracking-tight group-hover:text-primary transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-[1rem] lg:text-[1.125rem] text-on-surface/40 font-body leading-relaxed italic">
                {item.desc}
              </p>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/[0.03] group-hover:border-primary/40 transition-colors duration-700" />
            </div>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
