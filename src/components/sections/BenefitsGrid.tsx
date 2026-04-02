'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Zap, HardHat, Cog, Activity, GraduationCap } from 'lucide-react';

const engineeringSpecs = [
  { id: '01', icon: HardHat, title: 'Monsoon Resilience', value: '170 km/h Load', label: 'Mechanical Protocol' },
  { id: '02', icon: Zap, title: 'Tier-1 Silicon', value: 'ALMM / DCR', label: 'Module Compliance' },
  { id: '03', icon: ShieldCheck, title: 'Sovereign Warranty', value: '25-Year Asset', label: 'Linear Protection' },
  { id: '04', icon: Cog, title: 'Bypass Isolation', value: 'Triple-Diode', label: 'Shade Mitigation' },
  { id: '05', icon: Activity, title: 'AI Diagnostics', value: 'Real-time HUD', label: 'IoT Diagnostics' },
  { id: '06', icon: GraduationCap, title: 'Precision Safety', value: 'ISO / MNRE', label: 'Safety Protocol' },
];

export default function BenefitsGrid() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || typeof window === 'undefined' || !containerRef.current || !imageRef.current) return;

    // Classic overflow-parallax: the section has overflow:hidden,
    // the image is taller than the section and moves vertically as you scroll past.
    // NO pin — the section stays in normal document flow.
    gsap.fromTo(imageRef.current,
      { yPercent: -20 },
      {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // when section top enters viewport bottom
          end: 'bottom top',   // when section bottom leaves viewport top
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    // Content entrance
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section
      ref={containerRef}
      id="superiority"
      // overflow-hidden is KEY — it clips the oversized background image
      // so the parallax shift is invisible outside the section bounds.
      className="relative overflow-hidden flex items-center justify-center bg-black min-h-screen"
    >
      {/* Parallax Background — taller than the section, clipped by parent overflow-hidden */}
      <div
        className="absolute inset-x-0 z-0 pointer-events-none"
        style={{ top: '-20%', bottom: '-20%' }}
      >
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial Solar Array"
          className="w-full h-full object-cover opacity-40 grayscale"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Vignette overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/20 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />

      {/* Texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Content */}
      <div ref={contentRef} className="s-container relative z-10 w-full flex flex-col justify-around py-8 lg:py-16">
        {/* Headline */}
        <div className="text-center lg:text-left mb-8 lg:mb-16">
          <div className="flex items-center justify-center lg:justify-start gap-4 s-label mb-2">
            Industrial Superiority
            <span className="w-12 h-px bg-primary/30" />
          </div>
          <h2 className="s-h1 !text-white !text-[clamp(1.8rem,5vw,3.5rem)] lg:!text-6xl !leading-[0.85] !tracking-tighter uppercase">
            Engineered <br />
            <span className="text-zinc-700 italic lowercase font-body font-light tracking-tight">Supremacy.</span>
          </h2>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-16 lg:gap-y-12">
          {engineeringSpecs.map((spec) => (
            <div key={spec.id} className="group transition-all duration-700">
              <div className="flex items-center gap-6 lg:gap-8">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center bg-zinc-900/60 border border-white/5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                  <spec.icon size={22} className="text-zinc-500 group-hover:text-primary transition-colors" strokeWidth={1} />
                </div>
                <div className="space-y-1">
                  <div className="s-label !text-zinc-600 !text-[10px] tracking-[0.3em] group-hover:text-primary/70 transition-colors">
                    {spec.label}
                  </div>
                  <h3 className="s-h3 !text-white !text-xl lg:!text-2xl !tracking-tighter group-hover:!text-primary transition-colors leading-none">
                    {spec.title}
                  </h3>
                  <span className="text-zinc-500 group-hover:text-white transition-colors text-[11px] uppercase font-bold tracking-tight">
                    {spec.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
