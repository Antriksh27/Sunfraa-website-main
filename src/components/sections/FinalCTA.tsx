'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Activity, ArrowRight, Radio, Cpu, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Entrance Stagger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.cta-orb', 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 0.6, duration: 1.5, ease: 'expo.out' }
    )
    .fromTo('.cta-title', 
      { opacity: 0, y: 30, filter: 'blur(10px)' }, 
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' },
      '-=0.8'
    )
    .fromTo('.cta-meta', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.cta-button-wrap', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Continuous Orb Pulse
    gsap.to(orbRef.current, {
      scale: 1.1,
      opacity: 0.8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Magnetic Button Logic
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < 150) {
        gsap.to(buttonRef.current, {
          x: distanceX * 0.3,
          y: distanceY * 0.3,
          duration: 0.4,
          ease: 'power3.out'
        });
      } else {
        gsap.to(buttonRef.current, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section 
      ref={containerRef}
      id="cta" 
      className="s-section s-section-full s-theme-black !p-0 h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Background Architectural Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
        backgroundSize: '120px 120px' 
      }} />

      {/* The Central Power Hub (Orb) - Optimized for DARK */}
      <div 
        ref={orbRef}
        className="cta-orb absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-primary/15 blur-[150px] pointer-events-none z-0 opacity-40 shadow-[0_0_100px_rgba(234,126,38,0.1)]" 
      />
      
      {/* Immersive Layout */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        
        {/* Content Monolith */}
        <div className="space-y-10">
           
           <div className="space-y-6">
            <div className="cta-meta inline-flex items-center gap-4 px-8 py-3 rounded-none border border-white/10 bg-zinc-900/80 backdrop-blur-3xl shadow-2xl">
               <Activity size={16} className="text-primary animate-pulse" />
               <span className="s-mono !text-zinc-300 uppercase !text-[11px] font-black tracking-[0.3em]">Project Initiation Phase</span>
            </div>
              
            <h2 className="s-h2 !text-white cta-title !text-[clamp(2.5rem,6vw,5.5rem)] !leading-[0.8] tracking-tighter uppercase font-black">
               Initiate Your <br />
               <span className="text-primary italic lowercase font-body font-light tracking-tight">Energy Independence.</span>
            </h2>
           </div>

           <p className="s-body !text-zinc-300 max-w-2xl mx-auto cta-meta !text-xl !leading-relaxed font-bold">
             Join thousands of Indian businesses bypassing the unstable grid. <br className="hidden lg:block" /> Your high-yield engineering journey starts here.
           </p>

           <div className="cta-button-wrap relative pt-8">
              <Link 
                ref={buttonRef}
                href="/contact" 
                className="group relative inline-flex items-center justify-center gap-10 bg-white text-zinc-950 font-black px-16 py-7 lg:px-24 lg:py-10 rounded-none text-xs lg:text-[13px] transition-all duration-700 hover:bg-white overflow-hidden shadow-[0_20px_80px_rgba(255,255,255,0.05)] border border-white/20"
              >
                <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <span className="relative z-10 s-mono !tracking-[0.8em] group-hover:text-white transition-colors duration-500 uppercase ml-[0.8em]">Sync Project Profile</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-4 transition-transform duration-700 group-hover:text-white" />
              </Link>
           </div>

        </div>
      </div>


    </section>
  );
}
