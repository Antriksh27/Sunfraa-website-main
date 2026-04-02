'use client';

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Compass, Cpu, Target, ShieldCheck, ArrowUpRight } from 'lucide-react';

const alphaSpecs = [
  {
    id: 'EFF-01',
    icon: Target,
    title: 'Conversion Efficiency',
    value: '22.8% Yield',
    desc: 'Utility-Grade Bifacial Gain',
  },
  {
    id: 'TEC-02',
    icon: Cpu,
    title: 'Cell Architecture',
    value: 'N-Type TopCon',
    desc: 'Zero LID Energy Retention',
  },
  {
    id: 'OUT-03',
    icon: Compass,
    title: 'Generation Output',
    value: '580W+ Matrix',
    desc: 'Grid-Scale Performance',
  },
  {
    id: 'SAF-04',
    icon: ShieldCheck,
    title: 'Utility Integrity',
    value: 'Terrain Adaptive',
    desc: '170km/h Wind Resilience',
  },
];

export default function SolutionAlpha() {
  const [mounted, setMounted] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!containerRef.current) return;
      // 1. Alpha Logo Parallax (Massive background text)
      gsap.fromTo('.alpha-bg-text', 
        { scale: 0.9, opacity: 0, filter: 'blur(20px)' }, 
        { 
          scale: 1.1, 
          opacity: 0.03, 
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );

      // 2. Product Illumination Reveal
      if (productRef.current) {
        gsap.fromTo(productRef.current, 
          { scale: 0.95, filter: 'brightness(0.3) saturate(0.5)' }, 
          { 
            scale: 1, 
            filter: 'brightness(1) saturate(1)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1.5,
            }
          }
        );
      }

      // 3. HUD Spec Staggered Arrival
      gsap.fromTo('.alpha-spec-hud', 
        { opacity: 0, y: 15 }, 
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

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="solution-alpha" 
      className="s-section s-section-full s-theme-grey !p-0 flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.04]" />

      {/* Massive Background Typography Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="alpha-bg-text s-h1 !text-[30vw] !text-black/5 opacity-0 select-none">
          ALPHA
        </h1>
      </div>

      <div className="s-container relative z-20 w-full h-full flex flex-col justify-around py-8 lg:py-12">
        {/* Cinematic Header Block */}
        <div className="text-center lg:text-left">
           <div className="flex items-center justify-center lg:justify-start gap-4 s-label mb-2 !text-zinc-600 font-black">
             Industrial Infrastructure
             <span className="w-8 h-px bg-primary/50" />
           </div>
           <h2 className="s-h2 !text-zinc-900 !text-[clamp(1.5rem,4vw,3.2rem)] !leading-[0.85] !tracking-tighter uppercase whitespace-nowrap font-black">
              Ground Mount <br/>
              <span className="text-primary italic stroke-text-dark lowercase font-body font-light tracking-tight">Utility Solar.</span>
            </h2>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left: Spec Column A */}
          <div className="lg:col-span-3 space-y-8 lg:space-y-12 order-2 lg:order-1">
            {alphaSpecs.slice(0, 2).map((spec, idx) => (
              <div key={idx} className="alpha-spec-hud group relative">
                <div className="space-y-1">
                   <div className="s-label !text-zinc-500 group-hover:text-primary transition-colors tracking-widest uppercase !text-[9.5px] font-black">
                    {spec.title}
                  </div>
                  <h3 className="s-h3 !text-2xl lg:!text-3xl !text-zinc-900 group-hover:text-primary transition-colors !tracking-tighter font-black">
                    {spec.value}
                  </h3>
                  <div className="w-8 h-0.5 bg-black/20 group-hover:bg-primary/60 transition-all mb-2" />
                  <p className="s-body !text-zinc-600 !text-[11px] leading-relaxed max-w-[170px] font-black">
                    {spec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center: The Alpha Reveal Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div ref={productRef} className="relative group/product">
                <div className="relative w-full max-w-[320px] aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.08)] bg-white p-2 border border-black/10 transition-all duration-700 group-hover/product:border-primary/50">
                   <div className="w-full h-full overflow-hidden bg-zinc-100">
                     <img 
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop"
                      alt="Sunfraa Ground Mount Alpha Series"
                      className="w-full h-full object-cover grayscale brightness-90 group-hover/product:grayscale-0 group-hover/product:brightness-100 group-hover/product:scale-105 transition-all duration-1000"
                     />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Visual Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-center whitespace-nowrap">
                   <div className="s-label !text-primary !opacity-80 mb-2 uppercase !text-[9px] tracking-[0.4em] font-black">Alpha Series Utility</div>
                </div>
             </div>
          </div>

          {/* Right: Spec Column B */}
          <div className="lg:col-span-3 space-y-8 lg:space-y-12 order-3 text-right flex flex-col items-end">
            {alphaSpecs.slice(2, 4).map((spec, idx) => (
              <div key={idx} className="alpha-spec-hud group relative flex flex-col items-end">
                <div className="space-y-1 text-right">
                   <div className="s-label !text-zinc-500 group-hover:text-primary transition-colors text-right tracking-widest uppercase !text-[9.5px] font-black">
                    {spec.title}
                  </div>
                  <h3 className="s-h3 !text-2xl lg:!text-3xl !text-zinc-900 group-hover:text-primary transition-colors !tracking-tighter font-black">
                    {spec.value}
                  </h3>
                  <div className="w-8 h-0.5 bg-black/20 group-hover:bg-primary/60 transition-all mb-2" />
                  <p className="s-body !text-zinc-600 !text-[11px] leading-relaxed max-w-[170px] text-right font-black">
                    {spec.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Interaction Row */}
            <div className="pt-4">
               <button className="group/cta flex items-center gap-4 text-right">
                   <span className="s-label !text-zinc-950 group-hover/cta:!text-primary transition-all !text-[10px] uppercase tracking-widest font-black">Specifications</span>
                   <div className="w-10 h-10 flex items-center justify-center rounded-none border border-black/10 bg-white shadow-sm group-hover/cta:border-primary group-hover/cta:text-primary transition-all">
                      <ArrowUpRight size={16} />
                   </div>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
