'use client';

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Layers, Wind, Droplets, Shield, ArrowUpRight } from 'lucide-react';

const rooftopSpecs = [
  {
    icon: Layers,
    title: 'Precision Mounting',
    value: 'Load-Neutral',
    desc: 'Zero slab stress distribution.',
  },
  {
    icon: Wind,
    title: 'Velocity Limit',
    value: '180 KM/H',
    desc: 'Uplift-resistant structural logic.',
  },
  {
    icon: Droplets,
    title: 'Water Integrity',
    value: 'Drainage Flow',
    desc: 'Zero-stagnation rib alignment.',
  },
  {
    icon: Shield,
    title: 'Fixture Alloy',
    value: 'Pure Aluminum',
    desc: 'Corrosion-free industrial seal.',
  },
];

export default function RooftopSolar() {
  const [mounted, setMounted] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!containerRef.current) return;
      // 1. Background Watermark Parallax
      gsap.fromTo('.rooftop-bg-text', 
        { x: -50, opacity: 0 }, 
        { 
          x: 50, 
          opacity: 0.05, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );

      // 2. Visual Reveal with Scan-line
      if (visualRef.current) {
        gsap.fromTo(visualRef.current, 
          { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1 }, 
          { 
            clipPath: 'inset(0% 0% 0% 0%)', 
            scale: 1,
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
            }
          }
        );
      }

      // 3. HUD Spec Stagger
      gsap.fromTo('.rooftop-spec-hud', 
        { opacity: 0, y: 20 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.05, 
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    });

  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section 
      ref={containerRef}
      id="rooftop" 
      className="s-section s-section-full s-theme-grey !p-0 flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-[0.05]" />
      
      <div className="s-container relative z-20 w-full h-full flex flex-col justify-around py-6 lg:py-10">
        {/* Zenith Header Block */}
        <div className="text-center lg:text-left">
           <div className="flex items-center justify-center lg:justify-start gap-4 s-label mb-2 !text-zinc-600 font-black">
             Industrial Benchmarks
             <span className="w-8 h-px bg-primary/40" />
           </div>
           <h2 className="s-h1 !text-zinc-900 !text-[clamp(2rem,5vw,3.5rem)] !leading-[0.9] !tracking-tighter uppercase font-black">
             Rooftop <br/>
             <span className="text-primary italic lowercase font-body font-light tracking-tight">Infrastructure.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left: Spec Column A */}
          <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
            {rooftopSpecs.slice(0, 2).map((spec, i) => (
              <div key={i} className="rooftop-spec-hud group relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-black/20 group-hover:bg-primary/50 transition-all" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="s-label !text-zinc-600 !text-[10px] group-hover:text-primary transition-colors font-black uppercase tracking-widest">
                      {spec.title}
                    </div>
                    <h3 className="s-h3 !text-2xl lg:!text-3xl !text-zinc-900 group-hover:text-primary transition-colors uppercase font-black tracking-tight">
                      {spec.value}
                    </h3>
                    <p className="s-body !text-zinc-700 !text-[11px] font-black leading-relaxed max-w-[180px]">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center: The Structural Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div ref={visualRef} className="relative group/visual">
                <div className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-none shadow-[0_40px_120px_rgba(0,0,0,0.18)] bg-zinc-200 border border-black/10 transition-all duration-700 group-hover/visual:border-primary/50 p-2">
                   <div className="w-full h-full overflow-hidden bg-zinc-300">
                     <img 
                      src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2000&auto=format&fit=crop"
                      alt="Sunfraa High-End Rooftop Integration"
                      className="w-full h-full object-cover grayscale brightness-90 group-hover/visual:grayscale-0 group-hover/visual:brightness-100 group-hover/visual:scale-105 transition-all duration-1000"
                     />
                   </div>
                   
                   {/* HUD Overlay Scan Lines */}
                   <div className="absolute inset-x-0 top-0 h-px bg-primary/40 shadow-[0_0_20px_rgba(234,126,38,0.5)] animate-scan-y pointer-events-none z-20" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Visual Label */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-center whitespace-nowrap">
                   <div className="s-label !text-primary !opacity-100 mb-2 uppercase tracking-[0.4em] text-[10px] font-black">Structural Engineering</div>
                   <div className="w-px h-12 bg-primary/30" />
                </div>
             </div>
          </div>

          {/* Right: Spec Column B */}
          <div className="lg:col-span-3 space-y-8 order-3 text-right flex flex-col items-end">
            {rooftopSpecs.slice(2, 4).map((spec, i) => (
              <div key={i} className="rooftop-spec-hud group relative flex flex-col items-end">
                <div className="space-y-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-8 h-0.5 bg-black/20 group-hover:bg-primary/50 transition-all" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="s-label !text-zinc-600 !text-[10px] group-hover:text-primary transition-colors text-right font-black uppercase tracking-widest">
                      {spec.title}
                    </div>
                    <h3 className="s-h3 !text-2xl lg:!text-3xl !text-zinc-900 group-hover:text-primary transition-colors uppercase font-black tracking-tight">
                      {spec.value}
                    </h3>
                    <p className="s-body !text-zinc-700 !text-[11px] font-black leading-relaxed max-w-[180px] text-right">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
 
            {/* CTA Overlay */}
            <div className="pt-4">
               <button className="group/cta flex flex-col items-end gap-2 text-right">
                  <div className="flex items-center gap-4 text-zinc-950">
                     <span className="s-label !text-zinc-950 group-hover/cta:!text-primary transition-colors uppercase tracking-[0.3em] text-[10.5px] font-black">Structural Report</span>
                     <div className="w-10 h-10 flex items-center justify-center rounded-none border border-black/15 bg-white shadow-sm group-hover/cta:border-primary group-hover/cta:bg-primary/10 group-hover/cta:text-primary transition-all">
                        <ArrowUpRight size={16} />
                     </div>
                  </div>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
