'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Quote, ArrowLeft, ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

const testimonials = [
  {
    id: "01",
    name: "Rajesh Sharma",
    designation: "Residential Asset Owner - Jaipur",
    quote: "Sunfraa eliminated our monthly bill. The subsidy process was handled with surgical precision — zero friction from survey to commissioning.",
    scale: "8.5 kWp",
    yield: "12,400 kWh/yr",
    roi: "3.2 Years",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Anjali Desai",
    designation: "Textile Unit Director - Surat",
    quote: "Industrial reliability was our priority. Sunfraa's cyclone-rated structures and TOPCon panels delivered on every promise. An exceptional engineering partner.",
    scale: "150 kWp",
    yield: "215,000 kWh/yr",
    roi: "4.1 Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Vikram Patel",
    designation: "Managing Director - Apex Agri",
    quote: "Their ground-mount methodology is sophisticated. Maximized generation while maintaining 100% land accessibility. A masterclass in utility design.",
    scale: "250 kWp",
    yield: "365,000 kWh/yr",
    roi: "3.8 Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  }
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Editorial Reveal Animation
    const ctx = gsap.context(() => {
      gsap.fromTo('.testi-content', 
        { opacity: 0, x: -30, filter: 'blur(10px)' }, 
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power4.out', stagger: 0.1 }
      );

      gsap.fromTo('.testi-image', 
        { opacity: 0, scale: 1.1, rotateY: 10 }, 
        { opacity: 1, scale: 1, rotateY: 0, duration: 1.2, ease: 'expo.out' }
      );

      gsap.fromTo('.testi-stamp', 
        { scale: 1.5, opacity: 0, rotate: -15 }, 
        { scale: 1, opacity: 0.1, rotate: 0, duration: 2, ease: 'elastic.out(1, 0.3)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef, dependencies: [active, mounted] });

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    gsap.fromTo('.testi-entrance-el', 
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
      id="testimonials" 
      className="s-section s-section-full s-theme-white !p-0 h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary -top-20 -right-20 opacity-[0.05]" />

      {/* Background Architectural Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', 
        backgroundSize: '80px 80px' 
      }} />

      <div className="flex h-full w-full relative z-20">
        
        {/* LEFT: Success Narrative (55%) */}
        <div className="w-[55%] flex flex-col justify-center px-12 lg:px-24 relative z-20 h-full overflow-hidden bg-black/[0.01] border-r border-black/5">
           <div className="testi-entrance-el space-y-6 lg:space-y-10">
              
              <div className="flex items-center gap-4 s-label mb-1">
                 <Activity size={14} className="text-primary" />
                 Client Testimony
              </div>
 
              <div className="relative">
                 <Quote size={50} className="absolute -top-10 -left-10 text-primary opacity-[0.08] -z-10" />
                 <div className="space-y-6">
                    <p className="testi-content s-h2 !text-[clamp(1.6rem,3.5vw,2.8rem)] italic !font-body !leading-[1.05] !text-zinc-900 !tracking-tight">
                       &ldquo;{testimonials[active].quote}&rdquo;
                    </p>
                    
                    <div className="testi-content flex items-center gap-6">
                       <div className="h-px w-8 bg-primary" />
                       <div className="space-y-1">
                          <h4 className="s-h3 !text-zinc-900 uppercase !text-[12px] font-black">{testimonials[active].name}</h4>
                          <p className="s-mono !text-zinc-600 !text-[10px] uppercase tracking-wider">{testimonials[active].designation}</p>
                       </div>
                    </div>
                 </div>
              </div>

               {/* Technical Results Grid */}
              <div className="testi-content grid grid-cols-3 gap-8 border-t border-black/5 pt-8">
                 <div className="space-y-1">
                    <span className="s-mono !text-zinc-500 !opacity-100 block uppercase !text-[8.5px] font-bold">Project Scale</span>
                    <span className="s-h3 !text-zinc-900 !text-xl lg:!text-2xl font-black">{testimonials[active].scale}</span>
                 </div>
                 <div className="space-y-1">
                    <span className="s-mono !text-zinc-500 !opacity-100 block uppercase !text-[8.5px] font-bold">Annual Yield</span>
                    <span className="s-h3 !text-zinc-900 !text-xl lg:!text-2xl font-black">{testimonials[active].yield}</span>
                 </div>
                 <div className="space-y-1">
                    <span className="s-mono !text-zinc-500 !opacity-100 block uppercase !text-[8.5px] font-bold">ROI Achievement</span>
                    <span className="s-h3 !text-primary italic !text-xl lg:!text-2xl font-black">{testimonials[active].roi}</span>
                 </div>
              </div>

               {/* Carousel Controls */}
              <div className="testi-content flex items-center gap-6 pt-6 lg:pt-8">
                 <button 
                   onClick={handlePrev}
                   className="w-10 h-10 rounded-none border border-black/10 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all active:scale-95 group text-zinc-900 shadow-sm"
                 >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                 </button>
                 <div className="s-mono !text-zinc-500 font-black !text-[11px] tracking-widest">
                    <span className="text-zinc-900">0{active + 1}</span> <span className="mx-2 opacity-30">/</span> 0{testimonials.length}
                 </div>
                 <button 
                   onClick={handleNext}
                   className="w-10 h-10 rounded-none border border-black/10 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all active:scale-95 group text-zinc-900 shadow-sm"
                 >
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

           </div>
        </div>

          {/* RIGHT: Visual Evidence (45%) */}
        <div className="flex-1 relative overflow-hidden bg-zinc-200 h-full">
           
           {/* Cinematic Portrait Container */}
           <div className="absolute inset-0">
              <Image 
                src={testimonials[active].image}
                alt={testimonials[active].name}
                fill
                className="testi-image object-cover brightness-90 contrast-110 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/20 via-transparent to-transparent" />
           </div>

           {/* Verified Badge Pillar */}
           <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-6">
              <div className="flex items-center gap-5 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-none shadow-2xl border border-black/5">
                 <div className="w-10 h-10 rounded-none bg-primary flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                    <ShieldCheck size={20} className="text-white" strokeWidth={2.5} />
                 </div>
                 <div className="space-y-0.5">
                    <div className="s-mono !opacity-100 text-zinc-900 tracking-tighter uppercase !text-[10px] font-black">Verified Partnership</div>
                    <div className="s-mono !text-zinc-600 !opacity-100 !text-[9px] font-bold">Industrial Excellence</div>
                 </div>
              </div>
           </div>

           {/* Dimensional Lighting */}
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />
        </div>

      </div>

    </section>
  );
}
