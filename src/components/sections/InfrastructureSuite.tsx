'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function InfrastructureSuite() {
  const { solutions } = homepageData;

  return (
    <section id="solutions" className="py-24 lg:py-40 bg-surface relative overflow-hidden border-t border-white/[0.03]">
      <div className="s-container">
        
        <div className="max-w-4xl mb-24">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-primary/30" />
              <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">SOLUTIONS_MATRIX</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] tracking-tight uppercase">
              Infrastructure <br />
              <span className="gold-gradient">Protocols.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-0.5 bg-white/[0.05] border border-white/[0.05]">
          {solutions.items.map((item: any, i: number) => (
            <FadeUp key={i} delay={0.2 + (i * 0.1)}>
              <div className="h-full p-12 lg:p-16 bg-surface group hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[0.625rem] font-label text-primary uppercase tracking-[0.3em] font-bold italic">PROT_0{i+1}</span>
                  <span className="material-symbols-outlined text-primary/20 text-5xl group-hover:text-primary group-hover:scale-110 transition-all duration-700">
                    {i === 0 ? 'account_balance' : i === 1 ? 'factory' : 'corporate_fare'}
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-[800] font-headline text-on-surface mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                  {item.title}
                </h3>
                
                <span className="text-[0.75rem] font-label text-on-surface/30 uppercase tracking-[0.2em] block mb-8 font-bold italic">
                   {item.sub}
                </span>
                
                <p className="text-[1rem] lg:text-[1.125rem] text-on-surface/40 font-body leading-relaxed mb-16 italic">
                  {item.desc}
                </p>
                
                <div className="mt-auto pt-10 border-t border-white/[0.03]">
                   <button className="flex items-center gap-4 text-[0.625rem] font-label text-primary uppercase tracking-[0.4em] font-bold group/btn">
                      REQUEST_BLUEPRINT
                      <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-2 transition-transform duration-500">arrow_right_alt</span>
                   </button>
                </div>

                {/* Decorative scanning line animation on hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[2000ms] ease-in-out opacity-0 group-hover:opacity-100" />
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
