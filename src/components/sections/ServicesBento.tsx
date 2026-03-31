'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function ServicesBento() {
  return (
    <section id="services" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-dark-container overflow-hidden relative">
      <div className="s-container max-w-[1400px]">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-6 lg:mb-8">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-3 lg:mb-4">
              <span className="w-8 h-px bg-primary mr-4"></span>
              Tailored Energy Scale
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-white leading-[1.05] tracking-tight-editorial">
              Powering Everything from <br />
              <span className="text-gray-500">Villas to Factories.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:auto-rows-[250px]">
          
          {/* Card 1: Residential */}
          <FadeUp delay={0.1} className="lg:col-span-8 lg:row-span-1">
            <div className="h-full bg-[#262A2E] rounded-massive p-6 lg:p-8 relative overflow-hidden group border border-white/5 shadow-2xl">
               <div className="max-w-lg relative z-10 flex flex-col h-full justify-center">
                 <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight-editorial group-hover:text-primary transition-colors">
                   Residential <br/> <span className="font-light text-gray-500">Rooftop Solar</span>
                 </h3>
                 <p className="text-sm text-gray-400 leading-relaxed font-light">
                   Eliminate your home's electricity bill completely with our sleek, high-efficiency solar integration. Subsidies included.
                 </p>
               </div>
               
                <img 
                   src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop" 
                   className="absolute right-0 top-0 w-1/2 h-full object-cover rounded-l-[4rem] group-hover:scale-105 transition-transform duration-1000 hidden md:block" 
                   alt="Residential Solar" 
                />
            </div>
          </FadeUp>

          {/* Card 2: Micro-grid (Small Card) */}
          <FadeUp delay={0.2} className="lg:col-span-4 lg:row-span-1">
            <div className="h-full bg-black/20 rounded-massive p-6 lg:p-8 relative overflow-hidden group border border-white/5 shadow-2xl">
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <span className="w-10 h-10 lg:w-12 lg:h-12 bg-[#262A2E] rounded-full flex items-center justify-center shadow-inner mb-3 border border-white/10 group-hover:border-primary transition-colors">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </span>
                 <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-1 tracking-tight-editorial transition-colors group-hover:text-primary">Zero Downtime</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      Beat grid outages with hybrid systems and advanced lithium-ion storage loops.
                    </p>
                 </div>
               </div>
            </div>
          </FadeUp>

          {/* Card 3: Finance (Small Card) */}
          <FadeUp delay={0.3} className="lg:col-span-4 lg:row-span-1">
            <div className="h-full liquid-gradient-orange rounded-massive p-6 lg:p-8 relative overflow-hidden group shadow-xl shadow-orange-500/20">
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <h3 className="text-2xl font-bold text-white mb-3 tracking-tight-editorial leading-tight">
                    Seamless <br/> Financing
                 </h3>
                 <p className="text-xs text-white/90 leading-relaxed font-medium">
                   Partnered with leading Indian banks for 0% EMI and collateral-free solar loans.
                 </p>
               </div>
               {/* Decorative Circle */}
               <div className="absolute right-[-20%] bottom-[-20%] w-48 h-48 border-[20px] border-white/10 rounded-full" />
            </div>
          </FadeUp>

          {/* Card 4: Commercial */}
          <FadeUp delay={0.4} className="lg:col-span-8 lg:row-span-1">
            <div className="h-full bg-[#262A2E] rounded-massive p-6 lg:p-10 relative overflow-hidden group border border-white/5 shadow-2xl">
               <div className="max-w-lg relative z-10 flex flex-col h-full justify-center">
                 <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight-editorial group-hover:text-primary transition-colors">
                   Commercial <br/> <span className="font-light text-gray-500">& Industrial Solar</span>
                 </h3>
                 <p className="text-sm text-gray-400 leading-relaxed font-light">
                   Scale your operations and unlock tax depreciation benefits. Megawatt scale installations deployed with minimal disruption.
                 </p>
               </div>

               <img 
                  src="https://images.unsplash.com/photo-1566094758224-aac44dc21c2a?q=80&w=2000&auto=format&fit=crop" 
                  className="absolute right-0 top-0 w-1/2 h-full object-cover rounded-l-[4rem] group-hover:scale-105 transition-transform duration-1000 hidden md:block" 
                  alt="Commercial Solar" 
               />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
