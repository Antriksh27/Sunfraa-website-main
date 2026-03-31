'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

const steps = [
  {
    title: "Site Audit",
    desc: "Our engineers analyze your roof structure, shadow profile, and electricity bills to design an optimal system."
  },
  {
    title: "Bureaucracy Cleared",
    desc: "We handle all ALMM approvals, Net Metering applications, and PM Surya Ghar portal registrations."
  },
  {
    title: "Precision Install",
    desc: "High-grade panels mounted on extreme-weather resistant structures within 48 hours."
  },
  {
    title: "System Live",
    desc: "Your meter spins backwards. Instant savings activated with a 25-year performance warranty."
  }
];

export default function ProcessJourney() {
  return (
    <section id="process" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-white-container relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="s-container max-w-[1400px] relative z-10">
        
        <div className="max-w-4xl mb-6 lg:mb-8">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-3 lg:mb-4">
              <span className="w-8 h-px bg-primary mr-4"></span>
              The Blueprint
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial">
              Seamless <br />
              <span className="text-gray-400 font-light">Execution.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <FadeUp key={i} delay={0.2 + (i * 0.1)} className="h-full">
              <div className="h-full p-6 lg:p-8 bg-gray-50 border border-black/5 rounded-massive group hover:bg-white transition-all duration-700 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 flex flex-col justify-between">
                
                {/* Number Watermark */}
                <div className="absolute -right-2 -bottom-2 text-[6rem] lg:text-[8rem] font-bold text-black/[0.02] leading-none select-none group-hover:text-primary/5 transition-colors duration-700 z-0">
                  {i + 1}
                </div>

                <div className="flex flex-col relative z-10 h-full">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 flex items-center justify-center rounded-full mb-4 lg:mb-6 border border-black/10 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-700 shadow-inner">
                    <span className="text-base lg:text-lg font-bold text-primary">
                      0{i + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-black mb-2 tracking-tight-editorial group-hover:text-primary transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed flex-grow">
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
