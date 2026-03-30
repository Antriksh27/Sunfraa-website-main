'use client';

import React, { useState } from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function TechnicalFAQ() {
  const { faq } = homepageData;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-40 bg-background relative overflow-hidden border-t border-white/[0.03]">
      <div className="s-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          
          <div className="lg:col-span-12 mb-20">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-primary/30" />
                <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">TECHNICAL_PROTOCOL_QA</span>
              </div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] tracking-tight uppercase">
                Objections <br />
                <span className="gold-gradient">Handled.</span>
              </h2>
            </FadeUp>
          </div>

          <div className="lg:col-span-12">
            <div className="border-t border-white/[0.05]">
              {faq.items.map((item: any, i: number) => (
                <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                  <div className="group border-b border-white/[0.05]">
                    <button 
                      className="w-full py-12 lg:py-16 flex justify-between items-center group text-left outline-none"
                      onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    >
                      <div className="flex gap-8 lg:gap-16 items-center">
                        <span className="text-sm font-label text-primary/40 group-hover:text-primary transition-colors font-bold">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-2xl lg:text-4xl font-[800] font-headline uppercase tracking-tighter transition-all duration-500 ${activeIndex === i ? 'text-primary' : 'text-on-surface group-hover:text-primary/70'}`}>
                          {item.q}
                        </span>
                      </div>
                      
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className={`absolute w-full h-[1px] bg-primary transition-transform duration-500 ${activeIndex === i ? 'rotate-180' : 'rotate-90'}`} />
                        <div className="absolute w-full h-[1px] bg-primary" />
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === i ? 'max-h-[800px] opacity-100 pb-16' : 'max-h-0 opacity-0'}`}>
                      <div className="flex gap-8 lg:gap-16">
                        <div className="w-14 hidden lg:block" /> {/* Spacer to align with text */}
                        <div className="max-w-3xl space-y-8">
                          <p className="text-[1.125rem] lg:text-[1.35rem] text-on-surface/40 font-body leading-relaxed italic">
                            {item.a}
                          </p>
                          <div className="flex items-center gap-6">
                            <span className="text-[9px] font-label text-primary/40 uppercase tracking-[0.3em] font-bold">Protocol_Verified</span>
                            <div className="h-[1px] w-24 bg-primary/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
