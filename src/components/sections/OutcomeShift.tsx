'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { BadgeCheck, Search, Landmark, Banknote, ShieldCheck, ChevronRight } from 'lucide-react';

export default function OutcomeShift() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    // 1. Reveal Text & Layout Elements
    tl.fromTo('.reveal-monolith', 
      { opacity: 0, x: -40, filter: 'blur(10px)' }, 
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out' }
    );

    tl.fromTo('.reveal-content', 
      { opacity: 0, x: 20 }, 
      { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: 'power3.out' },
      '-=0.8'
    );

    // 2. Count up the subsidy
    if (!hasAnimated && counterRef.current) {
      tl.fromTo(counterRef.current, 
        { innerText: '0' },
        {
          innerText: '78000',
          duration: 2.5,
          snap: { innerText: 1 },
          ease: 'power4.out',
          onUpdate: function() {
            if (counterRef.current) {
              counterRef.current.innerText = `₹${parseInt(this.targets()[0].innerText).toLocaleString()}`;
            }
          },
          onComplete: () => setHasAnimated(true)
        },
        '-=1.5'
      );
    }

    // 3. Reveal Step Indicators
    tl.fromTo('.step-indicator', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.7)' }, 
      '-=1'
    );
  }, { scope: containerRef, dependencies: [mounted] });

  const steps = [
    { icon: Search, title: "Free Site Audit", desc: "We check your roof potential" },
    { icon: BadgeCheck, title: "Quick Install", desc: "Expert setup in 48 hours" },
    { icon: Banknote, title: "Direct Cashback", desc: "Money credited to your bank" }
  ];

  return (
    <section 
      ref={containerRef}
      id="subsidies" 
      className="s-section s-section-full s-theme-black !p-0 flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
 
      {/* Dynamic Thermal Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.1] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="s-container relative z-20 h-full flex flex-col justify-center">
        <div className="flex flex-col w-full max-h-[98vh] py-1">
            
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch flex-1 min-h-0">
            
            {/* Left: The Massive Subsidy Monolith */}
            <div className="lg:col-span-5 flex flex-col justify-center reveal-monolith">
              <div className="relative group/monolith h-full">
                 <div className="absolute inset-0 bg-white/[0.04] border border-white/[0.1] backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/monolith:bg-white/[0.06]" />
                 
                 <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                        <span className="s-mono !text-[10px] !text-zinc-300 tracking-widest uppercase">Verified by Govt. of India</span>
                     </div>
                     <Landmark className="text-primary/20" size={28} strokeWidth={1.5} />
                   </div>

                   <div className="flex flex-col items-center text-center py-2">
                     <div className="s-label !text-primary !text-[11px] uppercase tracking-[0.4em] mb-2 font-black">Your Direct Subsidy</div>
                     <h3 className="s-h2 !text-white !text-[clamp(2.8rem,7vw,4.5rem)] !leading-[0.8] !tracking-tighter !font-black">
                        <span ref={counterRef}>₹78,000</span>
                     </h3>
                     <div className="mt-4 flex items-center gap-3">
                        <div className="h-px w-6 bg-white/10" />
                        <span className="s-mono !text-[9px] !text-zinc-400 uppercase tracking-widest">PM SURYA GHAR YOJANA</span>
                        <div className="h-px w-6 bg-white/10" />
                     </div>
                   </div>

                   <div className="flex items-center justify-between border-t border-white/[0.05] pt-4">
                      <div className="flex items-center gap-3">
                         <ShieldCheck size={18} className="text-green-500/60" />
                         <div className="flex flex-col">
                            <span className="s-mono !text-[9px] !text-zinc-400 uppercase">Approval Guarantee</span>
                            <span className="s-body !text-white !text-[11px] !font-black uppercase tracking-widest">100% Success Rate</span>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Right: The Helpful Context */}
            <div className="lg:col-span-7 flex flex-col justify-center reveal-content">
               <div className="max-w-[480px] lg:ml-auto space-y-4 lg:space-y-6">
                  
                  <div className="flex items-center gap-3 s-label !text-primary tracking-widest uppercase !text-[10px] font-black">
                     <span className="w-8 h-px bg-primary/50" />
                     Simple 3-Step Process
                  </div>

                  <div className="space-y-2">
                    <h2 className="s-h2 !text-white !text-[clamp(1.5rem,3.5vw,2.5rem)] !leading-[0.9] !tracking-tighter uppercase font-black">
                      Solar shouldn&apos;t <br />
                      <span className="text-primary italic lowercase font-body font-light tracking-tight">be complicated.</span>
                    </h2>
                    
                    <p className="s-body !text-zinc-300 !text-[clamp(0.8rem,1vw,0.85rem)] leading-[1.6]">
                      Under the <span className="text-white font-black underline decoration-primary/50 underline-offset-4 decoration-2">PM Surya Ghar Yojana</span>, the government foots the bill for your switch to solar. We handle the paperwork, you enjoy the savings.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {steps.map((step, idx) => (
                       <div key={idx} className="step-indicator group flex items-center justify-between p-3 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 rounded-none">
                          <div className="flex items-center gap-4">
                             <div className="w-9 h-9 flex items-center justify-center bg-zinc-900 border border-white/[0.1] group-hover:border-primary/40 transition-all rounded-none">
                                <step.icon size={16} className="text-zinc-400 group-hover:text-primary transition-colors" />
                             </div>
                             <div className="flex flex-col">
                                <span className="s-body !text-white !text-[14px] !font-black tracking-tight">{step.title}</span>
                                <span className="s-body !text-zinc-400 !text-[11px]">{step.desc}</span>
                             </div>
                          </div>
                          <ChevronRight size={14} className="text-zinc-800 group-hover:text-primary" />
                       </div>
                    ))}
                  </div>

                  <div className="pt-2">
                      <button className="s-btn s-btn-primary !w-full lg:!w-auto !px-10 !py-3 group !text-[10px] uppercase tracking-[0.2em] rounded-none">
                          Check My Subsidy
                          <BadgeCheck size={16} className="ml-3 transition-transform group-hover:scale-110" />
                      </button>
                  </div>

               </div>
            </div>
  
          </div>
        </div>
      </div>
    </section>
  );
}
