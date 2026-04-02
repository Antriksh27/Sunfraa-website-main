'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { ShieldCheck, Activity, Wind, Repeat, Zap, Shield } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const comparisons = [
  {
    title: "Cyclone Resilience",
    standard: "Mild Steel / 120 km/h",
    sunfraa: "Hot-Dip Galvanized / 180 km/h",
    icon: Wind
  },
  {
    title: "Subsidy Compliance",
    standard: "Partial ALMM Sync",
    sunfraa: "100% MNRE Approved ALMM",
    icon: ShieldCheck
  },
  {
    title: "Energy Transition",
    standard: "Standard String Inverters",
    sunfraa: "MPPT Architecture",
    icon: Zap
  },
  {
    title: "Lifecycle Assurance",
    standard: "10-12 Year Standard",
    sunfraa: "25-Year Performance",
    icon: Shield
  }
];

export default function SunfraaEdge() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Entrance Stagger
    gsap.fromTo('.edge-row', 
      { opacity: 0, x: 30 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      }
    );

    gsap.fromTo('.edge-header-el', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );

  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section 
      ref={containerRef}
      id="edge" 
      className="s-section s-theme-grey !p-0 min-h-screen lg:h-screen lg:s-section-full overflow-hidden lg:overflow-hidden h-auto"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      <div className="s-container relative z-20 w-full h-auto lg:h-full flex flex-col lg:flex-row items-center justify-center">
        
        {/* LEFT: The Narrative (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 lg:px-20 h-auto lg:h-full border-b lg:border-b-0 lg:border-r border-black/5 bg-black/[0.02] py-16 lg:py-0">
           <div className="edge-header-el space-y-8 lg:space-y-12">
              <div className="flex items-center gap-4 s-label mb-2">
                 <Repeat size={16} className="text-primary" />
                 Operational Benchmark
              </div>
  
               <div className="space-y-6">
                  <h2 className="s-h1 !text-zinc-900 !text-[clamp(2.2rem,6vw,3.5rem)] !leading-[0.8] !tracking-[calc(-0.06em)] uppercase">
                    The Sunfraa <br />
                    <span className="text-primary font-light italic lowercase font-body tracking-tight">Performance Edge.</span>
                  </h2>
                  <p className="s-body !text-zinc-600 !text-[13px] leading-relaxed max-w-sm">
                     We bypass industrial averages. Every component is engineered to exceed the standard Indian operational threshold.
                  </p>
               </div>
            </div>
        </div>

        {/* RIGHT: The Comparative Manifest (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col justify-around px-6 lg:px-20 h-auto lg:h-full relative lg:overflow-hidden py-16 lg:py-16">
           
           <div className="w-full max-w-4xl space-y-2 lg:space-y-4">
              
              {/* Table Header */}
              <div className="edge-row grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-10 border-b border-black/10 pb-4 mb-6">
                 <div className="col-span-2 lg:col-span-6 s-label !text-zinc-900 !tracking-[0.3em] uppercase !text-[10px] lg:text-[11px]">Engineering Metric</div>
                 <div className="hidden lg:block lg:col-span-3 s-label !text-zinc-500 !tracking-[0.3em] uppercase !text-[10px] lg:text-[11px]">Standard</div>
                 <div className="hidden lg:block lg:col-span-3 s-label !text-primary !tracking-[0.3em] uppercase !text-[10px] lg:text-[11px]">Sunfraa Edge</div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-1 lg:space-y-0">
                {comparisons.map((item, i) => (
                  <div className="edge-row group relative grid grid-cols-2 lg:grid-cols-12 gap-y-4 lg:gap-10 items-center py-8 lg:py-8 border-b border-black/5 hover:bg-white/60 transition-colors rounded-none px-4 -mx-4">
                     
                     {/* Metric & Icon */}
                     <div className="col-span-2 lg:col-span-6 flex items-center gap-4 lg:gap-8">
                        <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-none bg-black/5 border border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                           <item.icon size={20} className="text-zinc-600 group-hover:text-white transition-colors" strokeWidth={1} />
                        </div>
                        <div className="flex flex-col gap-1">
                           <h4 className="font-headline font-black uppercase text-zinc-900 text-[13px] lg:text-[16px] tracking-tight leading-none">{item.title}</h4>
                           <div className="lg:hidden flex items-center gap-2 mt-1">
                              <span className="text-[9px] uppercase text-primary font-bold tracking-widest px-2 py-0.5 bg-primary/10">Premium Threshold</span>
                           </div>
                        </div>
                     </div>

                     {/* Standard Value */}
                     <div className="lg:col-span-3 flex flex-col justify-center">
                        <span className="lg:hidden text-[9px] uppercase text-zinc-400 font-bold tracking-wider mb-2">Market Standard</span>
                        <p className="text-[11px] lg:text-[14px] font-medium text-zinc-500 line-through decoration-primary/30 opacity-80 leading-relaxed uppercase">
                           {item.standard}
                        </p>
                     </div>

                     {/* Sunfraa Value (The Edge) */}
                     <div className="lg:col-span-3 flex flex-col justify-center">
                        <span className="lg:hidden text-[9px] uppercase text-primary font-black tracking-widest mb-2 px-3 py-1 bg-primary/5 border border-primary/20 self-end mr-1">Sunfraa Edge</span>
                        <div className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-none bg-primary hidden lg:block shrink-0" />
                           <p className="text-[13px] lg:text-[15px] font-black text-zinc-900 uppercase tracking-tight leading-tight">
                              {item.sunfraa}
                           </p>
                        </div>
                     </div>

                     {/* Interactive Sweep Background */}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  </div>
                ))}
              </div>

           </div>

        </div>

      </div>
      
    </section>
  );
}
