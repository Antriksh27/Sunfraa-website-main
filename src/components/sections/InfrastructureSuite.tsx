'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Cpu, Zap, Battery, ArrowRight, Activity } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

const assets = [
  {
    name: "N-Type TOPCon Panels",
    spec: "Efficiency: 24.5%",
    desc: "Bi-facial cells optimized for high-albedo Indian terrain. Enhanced thermal coefficients ensure consistent 450W+ output in peak irradiance.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
    icon: Zap,
    metrics: ["Low-LID Tech", "Multi-Busbar Array", "Anti-Reflective Surface"]
  },
  {
    name: "Smart Grid Inverters",
    spec: "Conversion: 99.1%",
    desc: "String-level MPPT tracking with integrated AI diagnostics. Grid-forming capabilities for seamless off-grid transitions within 10ms.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    icon: Cpu,
    metrics: ["AFCI Protection", "Rapid Shutdown Ready", "Cloud-Sync Logic"]
  },
  {
    name: "LiFePO4 Storage",
    spec: "Density: 180Wh/kg",
    desc: "Industrial-grade Lithium Iron Phosphate chemistry. Modular architecture allows for seamless scaling from 10kWh to utility-level MWh arrays.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    icon: Battery,
    metrics: ["10k Cycle Life", "Thermal Guard Gen-3", "Zero Degrade Cell"]
  }
];

export default function InfrastructureSuite() {
  const [activeAsset, setActiveAsset] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Cross-fade animation for the showcase image
    gsap.fromTo('.asset-image', 
      { opacity: 0, scale: 1.1, filter: 'blur(10px)' }, 
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'expo.out' }
    );

    gsap.fromTo('.asset-blueprint-line', 
      { scaleX: 0, opacity: 0 }, 
      { scaleX: 1, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power4.out', stagger: 0.1 }
    );

  }, { scope: containerRef, dependencies: [activeAsset, mounted] });

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    gsap.fromTo('.infra-entrance-el', 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section 
      ref={containerRef}
      id="infrastructure" 
      className="s-section s-theme-black !p-0 min-h-screen lg:h-screen lg:s-section-full overflow-hidden lg:overflow-hidden h-auto"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="flex flex-col lg:flex-row h-full w-full relative z-20">
        
        {/* LEFT: Technical Manifest (40%) */}
        <div className="w-full lg:w-[40%] bg-black/40 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-around py-16 lg:py-16 px-6 lg:px-16 relative z-20 shrink-0">
           <div className="infra-entrance-el space-y-8 lg:space-y-10">
              <div className="flex items-center gap-3 s-label">
                 <Activity size={16} className="text-primary" />
                 Hardware Stack & Integration
              </div>
              
              <h2 className="s-h1 !text-white !text-[clamp(2rem,4vw,3.5rem)] !leading-[0.8] !tracking-[calc(-0.06em)] uppercase">
                High Precision <br />
                <span className="text-primary font-light italic lowercase font-body tracking-tight">Infrastructure.</span>
              </h2>

              <div className="space-y-4">
                  {assets.map((asset, idx) => (
                    <button
                       key={idx}
                       onMouseEnter={() => setActiveAsset(idx)}
                       className={cn(
                          "w-full text-left p-4 lg:p-6 rounded-none transition-all duration-500 group flex items-center justify-between border relative overflow-hidden",
                          activeAsset === idx 
                          ? "bg-white/10 border-white/20 shadow-2xl" 
                          : "bg-transparent border-transparent opacity-85 hover:opacity-100 hover:bg-white/5"
                        )}
                    >
                       <div className="flex items-center gap-6">
                          <span className="s-mono !text-[10px] text-primary/70 font-bold">0{idx + 1}</span>
                          <div className="space-y-0.5">
                             <span className={cn(
                                "text-[13px] font-headline font-black uppercase tracking-wider transition-colors block leading-none",
                                activeAsset === idx ? "text-white" : "text-zinc-200"
                             )}>
                                {asset.name}
                             </span>
                          </div>
                       </div>
                       <ArrowRight 
                          size={18} 
                          className={cn(
                             "transition-all duration-500",
                             activeAsset === idx ? "translate-x-0 opacity-100 text-primary" : "-translate-x-4 opacity-0"
                          )} 
                       />
                    </button>
                  ))}
              </div>

              <p className="s-body !text-zinc-500 !text-[11px] max-w-xs">
                We deploy exclusively Tier-1 components under our "ALMM-Lockdown" protocol, ensuring maximum CAPEX efficiency for institutional assets.
              </p>
           </div>
        </div>

        {/* RIGHT: Immersive Showcase (60%) */}
        <div className="w-full lg:flex-1 relative overflow-hidden bg-[#0A0A0A] aspect-[4/5] md:aspect-video lg:aspect-auto lg:h-full flex flex-col justify-center border-t border-white/5">
           
           {/* Cinematic Image Container */}
           <div className="absolute inset-0">
              <Image 
                src={assets[activeAsset].image}
                alt={assets[activeAsset].name}
                fill
                className="asset-image object-cover opacity-55 mix-blend-luminosity scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0A]/40" />
           </div>

           {/* Technical Blueprint Overlays with Glass Backdrop */}
           <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 h-full">
              <div className="asset-blueprint-line bg-black/40 backdrop-blur-md border border-white/5 p-8 lg:p-12 max-w-2xl space-y-[clamp(1.1rem,2vh,2.5rem)] shadow-2xl relative overflow-hidden group/card text-white">
                  {/* Digital corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30" />
                  
                  <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-none s-mono !opacity-100 !text-white shadow-sm">
                     {assets[activeAsset].spec}
                  </div>

                 <h3 className="s-h2 !text-white !tracking-tighter !py-1">
                    {assets[activeAsset].name.split(' ').map((word, i) => (
                       <span key={i} className={i === 0 ? "block" : "block text-primary italic font-light lowercase font-body ml-8 lg:ml-12 opacity-100"}>
                          {word}
                       </span>
                    ))}
                 </h3>

                  <p className="s-body !text-zinc-200 !text-[clamp(0.9rem,1.5vw,1rem)] !leading-relaxed">
                     {assets[activeAsset].desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-5 mt-4">
                    {assets[activeAsset].metrics.map((metric, i) => (
                       <div key={i} className="flex items-center gap-4 group/metric">
                          <div className="w-1.5 h-1.5 rounded-none bg-primary/40 group-hover/metric:bg-primary transition-colors" />
                          <span className="s-label !text-zinc-300 group-hover/metric:!text-white transition-colors uppercase !text-[10px]">{metric}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

        </div>

      </div>

    </section>
  );
}
