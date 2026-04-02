'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function GroundMountSolar() {
  return (
    <section id="ground-mount" className="s-section s-section-full bg-white !p-0">
      <div className="s-container max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: Cinematic Image */}
          <div className="lg:col-span-6 h-[40vh] lg:h-[70vh] relative group order-1">
            <FadeUp delay={0.1} className="h-full w-full">
              <div className="relative h-full w-full rounded-massive overflow-hidden border border-black/5 shadow-2xl bg-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Utility-Scale Ground Mount Solar Installation" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60"></div>
                
                {/* Tech Badges Overlay */}
                <div className="absolute top-8 left-8 flex flex-col gap-3">
                   <div className="bg-white/90 backdrop-blur-sm self-start px-4 py-2 border border-black/5 rounded-full shadow-lg">
                      <span className="s-mono !text-black !text-[0.65rem]">Foundation Alpha</span>
                   </div>
                   <div className="bg-white/90 backdrop-blur-sm self-start px-4 py-2 border border-black/5 rounded-full shadow-lg">
                      <span className="s-mono !text-black !text-[0.65rem]">Max Tilt Optima</span>
                   </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Side: Content Area */}
          <div className="lg:col-span-6 order-2">
            <FadeUp delay={0.3}>
              <div className="flex items-center s-label mb-4 lg:mb-6">
                <span className="w-8 h-px bg-primary mr-4"></span>
                Solution Beta
              </div>
              
              <h2 className="s-h2 !text-black mb-4 lg:mb-6">
                Ground Mount <br />
                <span className="text-gray-400 italic">Utility-Scale Mastery.</span>
              </h2>

              <div className="space-y-6 lg:space-y-8 max-w-xl text-black">
                <p className="s-body !text-black !font-light">
                  Transforming underutilized land into high-yield energy assets. Our ground-mount engineering prioritizes foundation longevity and seasonal tilt optimization to ensure maximum kWh per square meter.
                </p>

                <div className="grid grid-cols-2 gap-6 pb-4">
                  <div className="space-y-2 border-l-2 border-primary/40 pl-4 py-1 bg-primary/5 rounded-r-xl">
                    <span className="s-mono !text-primary block">Foundation</span>
                    <span className="s-h3 !text-xl lg:!text-2xl !text-black tracking-tight">Bore Pile / Ramming</span>
                  </div>
                  <div className="space-y-2 border-l-2 border-primary/40 pl-4 py-1 bg-primary/5 rounded-r-xl">
                    <span className="s-mono !text-primary block">Yield</span>
                    <span className="s-h3 !text-xl lg:!text-2xl !text-black tracking-tight">+15% Efficiency</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                   {["Gated Solar Farms", "Industrial Open Access", "Utility MW"].map((tag, i) => (
                     <span key={i} className="s-mono !text-black/60 border border-black/10 px-5 py-2.5 rounded-full tracking-tighter bg-black/5 hover:bg-black/10 transition-colors">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
