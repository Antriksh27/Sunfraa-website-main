'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function CredibilityStrip() {
  const { trust } = homepageData;

  return (
    <section className="py-12 bg-surface/50 backdrop-blur-sm border-y border-white/[0.03]">
      <div className="s-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/30" />
              <span className="text-[0.625rem] font-[600] uppercase tracking-[0.4em] font-label text-primary/40 italic">
                {trust.label || "STRATEGIC_ALLIANCES"}
              </span>
            </div>
          </FadeUp>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-16 gap-y-6">
            {trust.partners.map((partner, i) => (
              <FadeUp key={i} delay={0.2 + (i * 0.05)}>
                <span className="text-[0.7rem] font-[700] font-label text-on-surface/20 hover:text-primary transition-all duration-700 uppercase tracking-[0.2em] cursor-default border-b border-transparent hover:border-primary/20 pb-1">
                  {partner}
                </span>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
