'use client';

import React from 'react';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';

export default function FinalCTA() {
  return (
    <section className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-dark-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        <FadeUp delay={0.1}>
          <div className="relative w-full rounded-massive overflow-hidden min-h-[400px] lg:min-h-[500px] flex flex-col items-center justify-center p-6 lg:p-12 text-center border border-white/10 bg-accent-container shadow-[0_20px_60px_-15px_rgba(234,126,38,0.5)]">
            
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />

            {/* Top Text Meta */}
            <div className="absolute top-0 left-0 w-full p-4 lg:p-8 flex justify-between items-start z-10 text-white/40">
              <span className="text-[10px] font-bold tracking-widest uppercase">System Initialization</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Grid Independence</span>
            </div>

            {/* Main Center Content */}
            <div className="relative z-10 max-w-4xl mt-8 mb-8 lg:mt-6 lg:mb-12">
              <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold text-white leading-[1.0] tracking-tight-editorial mb-4">
                Ready to own <br />
                <span className="text-white/40 font-light italic">your power?</span>
              </h2>
              <p className="text-sm lg:text-base text-white/80 font-light max-w-xl mx-auto">
                Join thousands of Indian businesses and homeowners leveraging the PM Surya Ghar Yojana. We handle the paperwork, you enjoy the returns.
              </p>
            </div>
            
            {/* Action Button */}
            <div className="relative z-20">
               <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-500 overflow-hidden">
                 <span className="relative z-10 tracking-widest uppercase text-[10px] lg:text-xs">Initiate Project</span>
                 <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform duration-500 text-sm">arrow_right_alt</span>
                 
                 {/* Internal Gradient Hover */}
                 <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                 <span className="relative z-10 text-white font-bold tracking-widest uppercase text-[10px] lg:text-xs opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-500">
                    Initiate Project
                    <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                 </span>
               </Link>
               
               {/* Outer Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[40px] rounded-full z-0 pointer-events-none" />
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}
