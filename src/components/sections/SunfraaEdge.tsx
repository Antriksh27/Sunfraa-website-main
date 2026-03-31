'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

const edgePoints = [
  {
    title: "ALMM Compliance",
    desc: "100% of our panels meet the rigorous standards set by the Ministry of New and Renewable Energy (MNRE), guaranteeing subsidy eligibility."
  },
  {
    title: "Cyclone Resilient",
    desc: "Our mounting structures are engineered with hot-dip galvanized steel, certified to withstand wind loads up to 180 km/h."
  },
  {
    title: "Net Metering Handled",
    desc: "We manage the entire state DISCOM net-metering approval process, ensuring you get credited for every unit you export."
  },
  {
    title: "25-Year Warranty",
    desc: "A generational investment secured by an ironclad quarter-century performance warranty on all module transition efficiencies."
  }
];

export default function SunfraaEdge() {
  return (
    <section id="edge" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-soft-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                <span className="w-8 h-px bg-primary mr-4"></span>
                The Standard
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial mb-4">
                Uncompromising <br />
                <span className="text-gray-400">Quality.</span>
              </h2>
              <div className="w-10 h-1 bg-primary mb-6 rounded-full" />
              <p className="text-sm lg:text-base text-gray-500 font-light leading-relaxed max-w-sm">
                We do not compromise on hardware. Our engineering is built specifically to outlast the harsh Indian environment.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:space-y-8 lg:pt-0">
            {edgePoints.map((point, i) => (
              <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                <div className="group relative">
                  <div className="flex gap-4 lg:gap-8">
                    <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-primary transition-colors duration-500 mt-0.5 tracking-tighter">
                       {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-2">
                       <h3 className="text-lg lg:text-xl font-bold text-black tracking-tight-editorial group-hover:text-primary transition-colors duration-500">
                        {point.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-500 font-light leading-relaxed max-w-xl">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 h-px w-full bg-black/5 group-hover:bg-primary/30 transition-colors duration-700" />
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
