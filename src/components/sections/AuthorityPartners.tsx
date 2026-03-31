'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function AuthorityPartners() {
  const stats = [
    { value: '500+', label: 'Megawatts Installed' },
    { value: '1.2Cr', label: 'Rupees Saved Annually' },
    { value: '15,000+', label: 'Indian Homes Powered' },
    { value: '0.0%', label: 'Down Payment Required' }
  ];

  return (
    <section id="authority" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-soft-container overflow-hidden relative border-t border-black/5">
      <div className="s-container max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          <div className="flex-1 w-full">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                <span className="w-8 h-px bg-primary mr-4"></span>
                The Impact
              </div>
              
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] mb-4 tracking-tight-editorial">
                India's Energy <br /> 
                <span className="text-gray-400 font-light">Revolution.</span>
              </h2>
              
              <p className="text-sm lg:text-base text-gray-500 font-light leading-relaxed max-w-xl mb-6">
                We aren't just installing panels—we are decentralizing India's power grid. Every rooftop we transform is a step towards absolute energy sovereignty.
              </p>
            </FadeUp>
          </div>

          <div className="flex-1 w-full text-right bg-white p-6 lg:p-8 rounded-massive shadow-2xl border border-black/5 relative overflow-hidden group">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-1000 z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 relative z-10">
              {stats.map((stat, i) => (
                <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                  <div className={`flex flex-col text-left ${i % 2 === 1 ? 'sm:border-l sm:border-black/5 sm:pl-6' : ''}`}>
                    <span className="text-3xl lg:text-4xl font-bold liquid-gradient-orange text-transparent bg-clip-text tracking-tight-editorial mb-1 block drop-shadow-sm">
                        {stat.value}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        {stat.label}
                    </span>
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
