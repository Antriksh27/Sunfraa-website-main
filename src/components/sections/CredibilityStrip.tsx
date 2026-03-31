'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function CredibilityStrip() {
  const credentials = [
    { name: 'MNRE Approved', sub: 'Subsidies' },
    { name: 'Tier-1 Modules', sub: '25-Yr Perfomance' },
    { name: 'ALMM Compliant', sub: 'Govt. Mandated' },
    { name: 'ISO 9001:2015', sub: 'Quality Assured' },
    { name: 'A++ Rating', sub: 'Solar Finance' }
  ];

  return (
    <section id="trust" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center bg-soft-container py-8 relative z-40">
      <div className="s-container max-w-[1400px]">
        <FadeUp delay={0.2}>
          <div className="flex flex-col items-center gap-4 mb-10 lg:mb-12">
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.3em] uppercase">
              <span className="w-8 h-px bg-primary mr-4"></span>
              The Authority
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-black text-center tracking-tight-editorial leading-tight">
              Trusted by the Industry. <br/>
              <span className="text-gray-400">Certified for Performance.</span>
            </h2>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {credentials.map((cred, i) => (
              <div key={i} className="flex flex-col items-center bg-white px-5 py-8 rounded-massive shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-black/5 hover:border-primary transition-all duration-500 cursor-default group h-full justify-center">
                 <span className="text-black text-lg font-bold tracking-tight-editorial group-hover:text-primary transition-colors text-center">{cred.name}</span>
                 <span className="text-gray-400 text-[10px] mt-2 uppercase tracking-widest text-center">{cred.sub}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
