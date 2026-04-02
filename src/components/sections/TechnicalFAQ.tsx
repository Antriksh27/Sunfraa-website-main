'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Activity, ChevronRight, Zap, CloudRain, ShieldCheck, Settings } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const faqItems = [
  {
    id: "01",
    q: "Do the panels generate power during monsoons?",
    a: "Absolutely. Even during heavy overcast conditions, our N-Type TOPCon panels capture diffused light, generally producing 40-60% of their peak summer output. You will still see significant reductions in your electricity bill.",
    icon: CloudRain,
    category: "Operational Dynamics"
  },
  {
    id: "02",
    q: "How long does the subsidy process actually take?",
    a: "Under the PM Surya Ghar Yojana, the typical cycle from portal registration to direct benefit transfer (DBT) is 45-60 days. However, Sunfraa manages the entire bureaucratic pipeline, handling the technical feasibility reports and DISCOM inspections on your behalf.",
    icon: ShieldCheck,
    category: "Financial Ledger"
  },
  {
    id: "03",
    q: "Will the installation damage my roof structure?",
    a: "No. For flat RCC roofs common in India, we design wind-tunnel tested, ballast-mounted structures or use non-invasive chemical anchoring that permanently waterproofs any minor penetrations, ensuring absolute structural integrity.",
    icon: Settings,
    category: "Engineering Specs"
  },
  {
    id: "04",
    q: "What maintenance is required?",
    a: "Minimal. Washing the panels twice a month with water is usually sufficient to remove dust. Our systems also feature remote SCADA monitoring, meaning we detect and alert you to any voltage drops before you even notice an issue.",
    icon: Zap,
    category: "System Reliability"
  }
];

export default function TechnicalFAQ() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Entrance Animation
    gsap.fromTo('.faq-header-el', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );

    gsap.fromTo('.faq-item', 
      { opacity: 0, x: -30 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );

  }, { scope: containerRef, dependencies: [mounted] });

  // Resolution Viewport Transition
  useGSAP(() => {
    if (!mounted || !viewportRef.current) return;

    gsap.fromTo('.faq-resolution-content',
      { opacity: 0, filter: 'blur(10px)', y: 20 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, { scope: viewportRef, dependencies: [active, mounted] });

  return (
    <section 
      ref={containerRef}
      id="faq" 
      className="s-section min-h-[120vh] lg:min-h-screen s-theme-grey !p-0 overflow-x-hidden lg:overflow-hidden lg:h-screen"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Background Architectural Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', 
        backgroundSize: '80px 80px' 
      }} />

      <div className="flex flex-col lg:flex-row h-full w-full relative z-20">
        
         {/* LEFT: Query Manifest */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-24 pb-12 lg:py-8 bg-black/[0.02] relative z-20 border-b lg:border-b-0 lg:border-r border-black/5 overflow-hidden">
           <div className="faq-header-el space-y-6 lg:space-y-10">
              
              <div className="flex items-center gap-4 s-label uppercase font-black tracking-widest !text-zinc-600">
                 <Activity size={14} className="text-primary" />
                 Technical Analysis
              </div>
  
              <div className="space-y-2">
                 <h2 className="s-h2 !text-zinc-900 !text-[clamp(1.8rem,3.5vw,2.8rem)] !leading-[1.05] tracking-tighter uppercase font-headline font-black">
                    Technical <br />
                    <span className="text-primary italic lowercase font-body font-light">Resolution.</span>
                 </h2>
              </div>

              {/* Manifest List */}
              <div className="space-y-3 pt-4 lg:pt-6">
                 {faqItems.map((item, i) => (
                    <button 
                      key={i}
                      onClick={() => {
                        setActive(i);
                        // On mobile, scroll the content into view
                        if (window.innerWidth < 1024) {
                          document.getElementById('faq-content')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={cn(
                        "faq-item w-full group flex items-center justify-between p-4 lg:p-5 rounded-none transition-all duration-500 text-left border relative overflow-hidden",
                        active === i ? "bg-white border-black/10 shadow-2xl shadow-black/5" : "hover:bg-black/5 border-transparent opacity-80 hover:opacity-100"
                      )}
                    >
                       <div className="space-y-1 lg:space-y-2 relative z-10">
                          <div className={cn(
                            "s-mono !font-black transition-colors duration-500 !text-[8.5px] lg:!text-[10px] tracking-widest",
                            active === i ? "!text-primary" : "!text-zinc-500"
                          )}>
                             ENTRY_{item.id}
                          </div>
                          <div className={cn(
                            "font-headline font-black uppercase text-[11px] lg:!text-[13px] tracking-tight transition-colors duration-500 !leading-tight",
                            active === i ? "!text-zinc-900" : "!text-zinc-600 group-hover:text-zinc-800"
                          )}>
                             {item.q}
                          </div>
                       </div>
                       <ChevronRight size={16} className={cn(
                         "transition-transform duration-500 relative z-10 shrink-0",
                         active === i ? "text-primary translate-x-1" : "text-zinc-400 group-hover:text-zinc-600"
                       )} />
                    </button>
                 ))}
              </div>

           </div>
        </div>

        {/* RIGHT: Resolution Viewport */}
        <div id="faq-content" ref={viewportRef} className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-32 py-16 lg:py-0 relative min-h-[60vh] lg:h-full overflow-hidden bg-white/40">
           
           <div className="faq-resolution-content w-full max-w-2xl space-y-10 lg:space-y-16">
              
              <div className="flex items-center gap-4 lg:gap-6">
                 <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-none bg-primary/10 flex items-center justify-center border border-primary/20 shadow-xl shadow-primary/5 backdrop-blur-xl group-hover:scale-105 transition-transform">
                    {React.createElement(faqItems[active].icon, { size: 24, className: "text-primary lg:size-[36px]", strokeWidth: 2 })}
                 </div>
                 <div className="space-y-0.5 lg:space-y-1">
                    <div className="s-mono !text-primary !opacity-100 uppercase !text-[8.5px] lg:!text-[10px] font-black tracking-widest">Technical Domain</div>
                    <h3 className="s-h3 !text-xl lg:!text-4xl !text-zinc-900 uppercase !tracking-tighter font-black">{faqItems[active].category}</h3>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="h-[2px] w-full bg-black/5 relative">
                    <div className="absolute top-0 left-0 h-[2px] w-32 bg-primary shadow-[0_0_20px_rgba(244,114,22,0.6)]" />
                 </div>
                 
                 <p className="s-body !text-lg md:!text-xl lg:!text-3xl !text-zinc-700 !font-light !leading-[1.4] !tracking-tight italic font-body">
                    &ldquo;{faqItems[active].a}&rdquo;
                 </p>
                 
                 <div className="flex flex-wrap gap-3 lg:gap-4 pt-4 lg:pt-6">
                    <div className="px-4 lg:px-5 py-2 lg:py-2.5 bg-white border border-black/10 rounded-none s-mono !text-zinc-600 uppercase !text-[8.5px] lg:!text-[10px] font-black tracking-tighter shadow-sm">
                       Compliance Verified
                    </div>
                    <div className="px-4 lg:px-5 py-2 lg:py-2.5 bg-white border border-black/10 rounded-none s-mono !text-zinc-600 uppercase !text-[8.5px] lg:!text-[10px] font-black tracking-tighter shadow-sm">
                       Tier 1 Standard
                    </div>
                 </div>
              </div>

           </div>

           {/* Architectural Decor */}
           <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 w-24 h-24 lg:w-40 lg:h-40 border border-black/5 opacity-30 lg:opacity-50 s-mono !text-zinc-300 font-bold text-[60px] lg:!text-[80px] pointer-events-none select-none">
              {faqItems[active].id}
           </div>

        </div>

      </div>

      
    </section>
  );
}
