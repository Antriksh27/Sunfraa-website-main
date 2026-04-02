'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Zap, TrendingUp, Leaf, Shield, ArrowDown, Activity } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const NumberTicker = ({ value, prefix = "", suffix = "" }: { value: number | string, prefix?: string, suffix?: string }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(0);

  useEffect(() => {
    const targetValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
    const obj = { val: prevValue.current };
    
    gsap.to(obj, {
      val: targetValue,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.innerText = prefix + obj.val.toLocaleString('en-IN', {
            minimumFractionDigits: typeof value === 'number' && value % 1 !== 0 ? 1 : 0,
            maximumFractionDigits: typeof value === 'number' && value % 1 !== 0 ? 1 : 0,
          }) + suffix;
        }
      }
    });

    prevValue.current = targetValue;
  }, [value, prefix, suffix]);

  return <span ref={elementRef} className="font-mono !opacity-100 tabular-nums">{prefix}{value}{suffix}</span>;
};

export default function ROIPanel() {
  const [mounted, setMounted] = useState(false);
  const [bill, setBill] = useState(12500);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const kwScale = (bill / 920).toFixed(1);
  const annualSavings = Math.round(bill * 11.4);
  const carbonTons = (parseFloat(kwScale) * 1.3).toFixed(1);
  const payback = bill > 18000 ? "2.6Y" : "3.2Y";

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Background Scan-line Loop
    gsap.to('.roi-scan-line', {
      top: '100%',
      duration: 8,
      repeat: -1,
      ease: 'none',
    });

    // Content Entrance
    gsap.fromTo('.bespoke-audit-el', 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'expo.out',
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
      id="roi" 
      className="s-section s-section-full s-theme-white !p-0 flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* 1. Immersive Grid Mesh & Scan-line */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.4]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4vw_4vw]" />
        <div className="roi-scan-line absolute top-[-10%] left-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-3xl opacity-30" />
      </div>

      <div className="s-container relative z-20 w-full h-full flex flex-col justify-around py-8 lg:py-16">
        
        {/* TOP: Header and Asset Legend */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-0">
          <div className="bespoke-audit-el space-y-2 lg:w-1/2">
             <div className="flex items-center gap-3 s-label mb-2">
                <Activity size={16} className="text-primary" />
                Asset Performance Analysis
             </div>
             <h2 className="s-h1 !text-zinc-900 !text-[clamp(2.5rem,6vw,4rem)] !leading-[0.8] !tracking-[calc(-0.06em)] uppercase">
               The Yield <br />
               <span className="text-primary font-light italic lowercase font-body tracking-tight">multiplier.</span>
             </h2>
          </div>

          <div className="bespoke-audit-el lg:w-1/4 lg:border-l border-black/5 lg:pl-10 space-y-4 lg:mb-2">
             <div className="space-y-1">
                <div className="s-label !text-zinc-600 !text-[9px]">Classification</div>
                <div className="text-xs uppercase font-black tracking-tight text-zinc-900">Utility-Grade Infrastructure</div>
             </div>
             <div className="space-y-1">
                <div className="s-label !text-zinc-600 !text-[9px]">Recapture</div>
                <div className="text-xs uppercase font-black tracking-tight text-primary italic flex items-center gap-2">
                   Direct ROI <ArrowDown size={12} className="animate-bounce" />
                </div>
             </div>
          </div>
        </div>

        {/* MIDDLE: Interactive Dial */}
        <div className="bespoke-audit-el relative flex flex-col items-center justify-center py-4">
           <div className="s-label !text-zinc-500 !text-[10px] uppercase tracking-[0.4em] mb-6">
              Adjust Monthly Bill
           </div>
           
           <div className="relative w-full flex items-center justify-center">
              {/* Massive Backdrop Watermark Number */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                 <span className="text-[25vw] font-black text-zinc-900 opacity-[0.06] tracking-tighter transition-all duration-700">
                    {bill}
                 </span>
              </div>
              
              <div className="relative z-10 w-full max-w-4xl text-center space-y-[clamp(1rem,2vh,3rem)]">
                 <div className="text-6xl lg:text-[10vw] font-mono font-black text-zinc-900 flex items-center justify-center tracking-tighter leading-none">
                    <span className="text-primary/70 text-[0.4em] mr-4">₹</span>
                    <NumberTicker value={bill} />
                 </div>
                                  <div className="px-4 lg:px-20 relative w-full">
                    <input 
                       type="range" 
                       min="2000" 
                       max="100000" 
                       step="500" 
                       value={bill} 
                       onChange={(e) => setBill(Number(e.target.value))}
                       className="w-full h-1 bg-zinc-100 rounded-none appearance-none cursor-pointer accent-primary hover:accent-orange-500 transition-all"
                    />
                    <div className="flex justify-between s-label !text-zinc-500 mt-6 !text-[10px]">
                       <span>₹ 2K</span>
                       <span>₹ 100K+</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* BOTTOM: Results */}
        <div className="bespoke-audit-el grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 border-t border-black/5 pt-10">
           
           {[
             { label: 'System Capacity', val: kwScale, Unit: 'kW', icon: Zap, detail: 'N-Type Modules' },
             { label: 'Annual Savings', val: annualSavings, Unit: '₹', icon: TrendingUp, detail: 'Inflation Shield' },
             { label: 'Net Payback', val: payback, Unit: '', icon: Shield, detail: 'ROI Lock-in' },
             { label: 'Carbon Avoided', val: carbonTons, Unit: 'Tons', icon: Leaf, detail: 'ESG Protocol' }
           ].map((item, i) => (
              <div key={item.label} className="group space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-none bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                       <item.icon size={16} className="text-zinc-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="s-label !text-zinc-700 group-hover:text-zinc-900 transition-colors uppercase !text-[10px] tracking-[0.2em]">{item.label}</span>
                 </div>
                 <div className="space-y-1">
                    <div className="text-2xl lg:text-3xl font-headline font-black text-zinc-900 flex items-baseline gap-1 tracking-tighter">
                       {item.Unit === '₹' && <span className="text-[0.4em] text-primary/70">₹</span>}
                       {typeof item.val === 'number' ? <NumberTicker value={item.val} /> : item.val}
                       <span className="text-[0.4em] font-headline text-zinc-600 ml-1">{item.Unit !== '₹' ? item.Unit : ''}</span>
                    </div>
                    <div className="s-body !text-zinc-500 !text-[10px] uppercase font-bold tracking-widest">{item.detail}</div>
                 </div>
              </div>
           ))}
        </div>

      </div>

    </section>
  );
}

