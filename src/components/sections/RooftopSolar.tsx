'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function RooftopSolar() {
  return (
    <section id="rooftop" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-dark-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: Content Area */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 lg:mb-6">
                <span className="w-8 h-px bg-primary mr-4"></span>
                Solution Alpha
              </div>
              
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.02] tracking-tighter mb-4 lg:mb-6">
                Rooftop Solar <br />
                <span className="text-gray-500 italic">Engineering for Integrity.</span>
              </h2>

              <div className="space-y-6 lg:space-y-8 max-w-xl">
                <p className="text-[clamp(1rem,1.2vw,1.25rem)] text-gray-400 font-light leading-relaxed">
                  We don't just "install" panels; we engineer a new layer for your architecture. From RCC slabs to industrial metal roofs, our systems are built to endure the most aggressive Indian weather patterns.
                </p>

                <div className="grid grid-cols-2 gap-6 pb-4">
                  <div className="space-y-2 border-l-2 border-primary/20 pl-4 py-1">
                    <span className="block text-[0.65rem] font-bold text-primary uppercase tracking-widest">Wind Velocity</span>
                    <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">180 KM/H</span>
                  </div>
                  <div className="space-y-2 border-l-2 border-primary/20 pl-4 py-1">
                    <span className="block text-[0.65rem] font-bold text-primary uppercase tracking-widest">Mounting</span>
                    <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">Zero-Leaking</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                   {["Industrial MW", "Residential Luxe", "Institutional"].map((tag, i) => (
                     <span key={i} className="text-[0.6rem] font-bold text-white/40 border border-white/10 px-4 py-2 rounded-full uppercase tracking-widest bg-white/5">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Side: Cinematic Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 h-[40vh] lg:h-[70vh] relative group">
            <FadeUp delay={0.3} className="h-full w-full">
              <div className="relative h-full w-full rounded-massive overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1624397645584-635e98943f6c?q=80&w=2000&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Industrial Rooftop Solar Installation" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Technical HUD Overlay Overlay */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1 italic">Structural Scan</p>
                      <p className="text-xs text-white/60 font-light">Load-optimized structural rib integration.</p>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10">
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                   </div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
