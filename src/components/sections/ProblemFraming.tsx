'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function ProblemFraming() {
  return (
    <section id="about" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-6 lg:py-0 bg-white-container relative overflow-hidden text-black z-30">
      <div className="s-container max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Visual Area */}
          <FadeUp delay={0.2} className="relative w-full max-w-[400px] mx-auto md:max-w-none md:mx-0">
            {/* The Image */}
            <div className="w-full aspect-square lg:aspect-[4/4.5] rounded-massive overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative group">
              <img 
                src="https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=2000&auto=format&fit=crop"
                alt="Indian Solar Engineer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Overlapping cut-out style button on top right */}
            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 lg:-translate-y-6 lg:translate-x-6 bg-white rounded-massive p-2 lg:p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
              <button className="w-10 h-10 lg:w-14 lg:h-14 liquid-gradient-orange text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl shadow-orange-500/30">
                <svg className="w-5 h-5 lg:w-7 lg:h-7 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </FadeUp>

          {/* Right Text Area */}
          <div className="flex flex-col">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-primary mr-4"></span>
                The Indian Energy Reality
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-4">
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight-editorial leading-[1.1] text-black">
                  Rising Tariffs are <br/>
                  <span className="text-gray-400">Costing You Crores.</span>
                </h2>
                
                <p className="text-[clamp(1rem,1.2vw,1.15rem)] text-gray-500 font-light leading-relaxed">
                  With grid electricity prices in India surging by up to 40% in the last decade, traditional energy isn't just unsustainable—it's financially draining.
                </p>

                <p className="text-[clamp(1rem,1.2vw,1.15rem)] text-black font-semibold leading-relaxed">
                  Sunfraa engineers bespoke, cyclone-resistant solar infrastructure that permanently fixes your energy costs while leveraging PM Surya Ghar subsidies.
                </p>
                
                <div className="pt-4">
                    <button className="bg-dark-container text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:-translate-y-1 transition-transform shadow-lg">
                        Calculate Your Savings
                    </button>
                </div>
              </div>
            </FadeUp>
          </div>
          
        </div>
      </div>
    </section>
  );
}
