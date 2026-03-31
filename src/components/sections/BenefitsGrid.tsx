'use client';

import React, { useState } from 'react';
import FadeUp from '@/components/animations/FadeUp';

const featuresData = [
  {
    title: 'Monsoon & Cyclone Ready',
    heading: 'Engineered for India’s harshest weather conditions.',
    desc: 'Our mounting structures are aerodynamically designed and hot-dip galvanized to withstand wind speeds up to 170 km/h, ensuring your investment remains secure during extreme Indian monsoons.',
    img: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Tier-1 ALMM Modules',
    heading: 'Maximum energy yield, even in low-light pollution.',
    desc: 'We strictly deploy DCR (Domestic Content Requirement) compliant panels that feature Half-Cut Cell technology and advanced bypass diodes to prevent energy loss from urban shading and dust accumulation.',
    img: 'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: '25-Year Performance Warranty',
    heading: 'Guaranteed output backed by top-tier insurance.',
    desc: 'Sunfraa guarantees a linear performance reduction of no more than 0.5% per year. Unlike local vendors, our warranties are backed by international insurers, giving you complete peace of mind for decades.',
    img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop'
  }
];

export default function BenefitsGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-soft-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left Side: Text and Accordion */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase">
                <span className="w-8 h-px bg-primary mr-4"></span>
                Engineered Superiority
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-black leading-[1.1] tracking-tight-editorial">
                Built to Outlast <br/>
                <span className="text-gray-400 font-normal">the Indian Elements.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col gap-3 mt-4">
                {featuresData.map((feature, idx) => {
                   const isActive = idx === activeIndex;
                   return (
                     <button 
                       key={idx}
                       onClick={() => setActiveIndex(idx)}
                       className={`flex items-center justify-between px-5 py-3 rounded-2xl w-full text-left transition-all duration-300 border border-black/5 ${
                         isActive ? 'bg-white shadow-xl' : 'bg-transparent hover:bg-white/40'
                       }`}
                     >
                       <span className={`text-lg font-medium tracking-tight-editorial ${isActive ? 'text-black' : 'text-gray-400'}`}>
                         {feature.title}
                       </span>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shadow-inner ${
                         isActive ? 'liquid-gradient-orange text-white' : 'bg-gray-50 text-gray-400 border border-black/5'
                       }`}>
                         <span className="text-xl font-light leading-none">{isActive ? '−' : '+'}</span>
                       </div>
                     </button>
                   );
                })}
              </div>
            </FadeUp>
          </div>

          {/* Right Side: Visual Card */}
          <FadeUp delay={0.4} className="h-full hidden lg:block">
            <div className="bg-white rounded-massive p-6 h-full min-h-[400px] flex flex-col relative overflow-hidden shadow-2xl border border-black/5">
              
              <div className="max-w-md relative z-10 mb-6">
                <h3 className="text-xl font-bold text-black leading-tight mb-3 pr-12 tracking-tight-editorial">
                  {featuresData[activeIndex].heading}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {featuresData[activeIndex].desc}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="mt-auto h-[200px] rounded-[1.5rem] overflow-hidden relative z-10 shadow-2xl border border-white/10 group">
                <img 
                  key={activeIndex} // Force re-render for animation
                  src={featuresData[activeIndex].img}
                  alt={featuresData[activeIndex].title}
                  className="w-full h-full object-cover animate-fade-in group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Decorative Subtle Glowing Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </FadeUp>

        </div>

      </div>
    </section>
  );
}
