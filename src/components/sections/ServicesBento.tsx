'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function ServicesBento() {
  return (
    <section id="services" className="py-24 lg:py-40 bg-background overflow-hidden relative border-t border-white/[0.03]">
      <div className="s-container">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-primary/30" />
              <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">OPERATIONAL_CORE</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] tracking-tight uppercase">
              Precision <br />
              <span className="gold-gradient">Sovereignty.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 lg:auto-rows-[300px] border border-white/[0.05] bg-white/[0.05]">
          
          {/* Card 1: Core Tech */}
          <FadeUp delay={0.1} className="lg:col-span-8 lg:row-span-2">
            <div className="h-full bg-surface p-12 lg:p-16 relative overflow-hidden group">
               <span className="text-[0.625rem] font-label text-primary uppercase tracking-[0.3em] mb-6 block font-bold italic">PROT_CORE_TECH</span>
               <h3 className="text-4xl lg:text-6xl font-[800] font-headline text-on-surface mb-10 leading-[0.9] uppercase tracking-tighter">
                 The Reactor: <br />
                 N-Type Precision.
               </h3>
               <p className="text-[1.125rem] text-on-surface/40 font-body max-w-md italic leading-relaxed">
                 Utilizing Bi-Facial N-Type TOPCon cells for maximum photon-to-electron transition efficiency in extreme Indian thermal vectors.
               </p>
               <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] group-hover:bg-primary/10 transition-colors duration-1000" />
            </div>
          </FadeUp>

          {/* Card 2: Aesthetic */}
          <FadeUp delay={0.2} className="lg:col-span-4 lg:row-span-2">
            <div className="h-full bg-surface p-12 lg:p-16 relative overflow-hidden group border-l border-white/[0.05]">
               <span className="text-[0.625rem] font-label text-primary uppercase tracking-[0.3em] mb-6 block font-bold italic">PROT_DESIGN_CODE</span>
               <h3 className="text-4xl lg:text-5xl font-[800] font-headline text-on-surface mb-8 uppercase tracking-tighter">Solar Noir.</h3>
               <p className="text-[1rem] text-on-surface/40 font-body leading-relaxed italic">
                 All-black minimalist hardware integration. Removing industrial clutter for architectural purity.
               </p>
               <div className="mt-16 w-full h-[1px] bg-white/[0.05]" />
               <div className="mt-10 flex justify-between items-center text-on-surface/20 group-hover:text-primary transition-colors duration-700">
                 <span className="text-[0.625rem] font-label uppercase tracking-[0.2em] font-bold italic">Finish: Matte Black</span>
                 <span className="material-symbols-outlined text-3xl">palette</span>
               </div>
            </div>
          </FadeUp>

          {/* Card 3: Protocol */}
          <FadeUp delay={0.3} className="lg:col-span-4 lg:row-span-2">
            <div className="h-full bg-surface p-12 lg:p-16 relative overflow-hidden group border-t border-white/[0.05]">
               <span className="text-[0.625rem] font-label text-primary uppercase tracking-[0.3em] mb-6 block font-bold italic">PROT_OPS_SYST</span>
               <h3 className="text-4xl lg:text-5xl font-[800] font-headline text-on-surface mb-8 uppercase tracking-tighter">MW Precision.</h3>
               <p className="text-[1.125rem] text-on-surface/40 font-body leading-relaxed italic">
                 Real-time SCADA integration for total transparency of energy harvesting metrics.
               </p>
               <div className="absolute inset-0 bg-primary/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
            </div>
          </FadeUp>

          {/* Card 4: Safety */}
          <FadeUp delay={0.4} className="lg:col-span-8 lg:row-span-2">
            <div className="h-full bg-surface p-12 lg:p-16 relative overflow-hidden group border-l border-t border-white/[0.05]">
               <span className="text-[0.625rem] font-label text-primary uppercase tracking-[0.3em] mb-6 block font-bold italic">PROT_RELIABILITY</span>
               <h3 className="text-4xl lg:text-6xl font-[800] font-headline text-on-surface mb-10 leading-[0.9] uppercase tracking-tighter">Industrial Shield.</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <p className="text-[1.125rem] text-on-surface/40 font-body italic leading-relaxed">
                   Structural integrity tested for 180km/h wind vectors and seismic resilience.
                 </p>
                 <div className="flex gap-6 items-end justify-end opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="material-symbols-outlined text-6xl text-primary">verified_user</span>
                    <span className="material-symbols-outlined text-6xl text-primary">token</span>
                 </div>
               </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
