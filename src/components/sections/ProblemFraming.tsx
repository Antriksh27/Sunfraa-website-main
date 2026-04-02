'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { AlertCircle, TrendingUp, Zap, Clock } from 'lucide-react';

const problems = [
  {
    icon: TrendingUp,
    title: 'Tariff Inflation',
    desc: 'Grid electricity prices are surging by 7-10% annually across Indian industrial hubs.',
    tag: 'FINANCIAL_BLEED'
  },
  {
    icon: AlertCircle,
    title: 'Grid Instability',
    desc: 'Voltage fluctuations and downtime risk sensitive manufacturing equipment health.',
    tag: 'OPERATIONAL_RISK'
  },
  {
    icon: Zap,
    title: 'Carbon Intensity',
    desc: 'B2B supply chains now mandate low-carbon manufacturing for global compliance.',
    tag: 'ESG_COMPLIANCE'
  },
  {
    icon: Clock,
    title: 'CapEx Inertia',
    desc: 'Traditional solar deployment is slow, bureaucratic, and technically fragmented.',
    tag: 'DEPLOYMENT_LAG'
  }
];

export default function ProblemFraming() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    gsap.fromTo('.reveal-text', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );

    gsap.fromTo('.problem-card', 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
    );

    gsap.fromTo('.visual-monolith', 
      { opacity: 0, x: 40, scale: 1.05 }, 
      { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 60%' } }
    );

  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section 
      ref={containerRef}
      id="problem" 
      className="s-section s-section-full s-theme-white !p-0 flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay - Optimized Industrial Noise */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
 
      {/* Background Architectural Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)', 
        backgroundSize: 'clamp(50px, 8vw, 120px) clamp(50px, 8vw, 120px)' 
      }} />

      <div className="s-container h-full relative z-20 flex flex-col justify-center">
        <div className="flex flex-col w-full max-h-[92vh] py-2 lg:py-4">
           
          {/* Header Area */}
          <div className="mb-4 lg:mb-6 text-center lg:text-left">
              <h2 className="reveal-text s-h2 !text-zinc-900 !text-[clamp(1.8rem,4vw,3.2rem)] !leading-[0.85] !tracking-tighter uppercase font-black">
                The Industrial <br />
                <span className="text-primary italic lowercase font-body font-light tracking-tight">Inefficiency Loop.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-stretch flex-1 min-h-0">

            {/* Left: Content Zone */}
            <div className="lg:col-span-8 flex flex-col justify-between min-h-0">
               
               {/* Problem Cards - Tight Grid */}
               <div className="grid grid-cols-2 gap-3 lg:gap-4 flex-1 min-h-0">
                 {problems.map((prob, i) => (
                    <div key={i} className="problem-card group relative overflow-hidden transition-all duration-500 hover:scale-[1.01]">
                       <div className="s-card h-full !bg-white !backdrop-blur-none !rounded-none !border-l-[3px] !border-l-zinc-200 !border-y-0 !border-r-0 !p-4 lg:!p-5 shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 hover:!border-l-primary !border-black/[0.03] flex flex-col justify-between">
                           <div className="relative z-10 flex flex-col h-full">
                              <div className="flex items-center justify-between mb-3">
                                 <div className="w-10 h-10 rounded-none bg-zinc-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors border border-black/[0.03]">
                                    <prob.icon size={20} className="text-zinc-400 group-hover:text-primary transition-all duration-500" strokeWidth={1.5} />
                                 </div>
                              </div>

                              <div className="space-y-3 mt-auto">
                                 <div>
                                    <h3 className="s-h3 !text-[11px] lg:!text-[13px] !font-black !text-zinc-900 group-hover:text-primary transition-colors tracking-[0.25em] uppercase mb-2">
                                       {prob.title}
                                    </h3>
                                    {/* Primary Underline Accent */}
                                    <div className="h-[2px] w-8 bg-primary/40 group-hover:w-full group-hover:bg-primary transition-all duration-1000 ease-in-out" />
                                 </div>
                                 <p className="s-body !text-zinc-800 !text-[clamp(0.75rem,0.95vw,0.85rem)] !leading-relaxed transition-colors font-medium">
                                    {prob.desc}
                                 </p>
                              </div>
                           </div>
                       </div>
                    </div>
                 ))}
               </div>

               {/* The Manifesto - Extremely Tight for Zenith */}
               <div ref={contentRef} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 pt-4 lg:pt-5 border-t border-black/[0.08] mt-4">
                   <div className="reveal-text flex-1">
                      <p className="s-body !text-zinc-600 !text-[clamp(0.75rem,0.85vw,0.82rem)] leading-[1.6]">
                        With grid electricity prices in Gujarat surging by <span className="text-zinc-900 font-black underline decoration-primary/50 underline-offset-4 decoration-2">40% in a decade</span>, traditional energy isn&apos;t just a cost—it&apos;s a financial leak.
                      </p>
                   </div>

                   <div className="reveal-text flex-1">
                      <p className="s-body !text-zinc-900 !text-[clamp(0.75rem,0.85vw,0.82rem)] !font-black border-l-[3px] border-primary pl-6 py-2 bg-zinc-100/50 backdrop-blur-sm">
                        High-yield solar infrastructure that fixes your energy costs for 25+ years.
                      </p>
                   </div>
               </div>
            </div>

            {/* Right: Visual Monolith */}
            <div className="lg:col-span-4 hidden lg:block h-full">
               <div className="visual-monolith relative h-full w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 overflow-hidden border border-black/[0.08] shadow-2xl">
                  {/* Stable Unsplash Industrial Solar Asset */}
                  <img 
                     src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1500" 
                     alt="Industrial Solar Factory Zenith"
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
