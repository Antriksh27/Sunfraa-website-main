'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

const hardware = [
  {
    title: "N-Type TOPCon Panels",
    desc: "Bi-facial cells ensuring maximum photon-to-electron transition efficiency even in peak Indian heat environments.",
    icon: "solar_power"
  },
  {
    title: "String Inverters",
    desc: "Grid-forming smart inverters managing real-time loads with 99% conversion efficiency.",
    icon: "electric_bolt"
  },
  {
    title: "Lithium-Ion Storage",
    desc: "Modular battery systems that kick in instantly during grid failures. Zero blackout guarantee.",
    icon: "battery_charging_full"
  }
];

export default function InfrastructureSuite() {
  return (
    <section id="solutions" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-[#16181B] relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        
        <div className="max-w-4xl mb-6 lg:mb-8">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-3: lg:mb-4">
              <span className="w-8 h-px bg-primary mr-4"></span>
              Core Technology
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-white leading-[1.05] tracking-tight-editorial">
              Industrial Grade <br />
              <span className="text-gray-500 font-light">Hardware.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {hardware.map((item, i) => (
            <FadeUp key={i} delay={0.2 + (i * 0.1)} className="h-full">
              <div className="h-full p-6 lg:p-8 bg-dark-container border border-white/5 rounded-massive group hover:bg-[#2A2E33] hover:-translate-y-1 transition-all duration-700 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col justify-between">
                
                <div className="flex justify-between items-start mb-4 lg:mb-6 relative z-10">
                  <span className="text-[0.6rem] font-bold text-primary uppercase tracking-[0.3em] bg-white/5 px-2 py-1 rounded-full">Spec 0{i+1}</span>
                  <span className="material-symbols-outlined text-primary/30 text-3xl lg:text-4xl group-hover:text-primary group-hover:scale-110 transition-transform duration-700">
                    {item.icon}
                  </span>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 tracking-tight-editorial group-hover:text-primary transition-colors duration-500 relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed mb-4 relative z-10 flex-grow">
                  {item.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/10 relative z-10">
                   <button className="flex items-center gap-3 text-[10px] font-semibold text-primary uppercase tracking-widest group/btn hover:text-white transition-colors">
                      View Factsheet
                      <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform duration-500">arrow_right_alt</span>
                   </button>
                </div>

                {/* Decorative Glowing Element */ }
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
