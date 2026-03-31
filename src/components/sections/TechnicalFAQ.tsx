'use client';

import React, { useState } from 'react';
import FadeUp from '@/components/animations/FadeUp';

const faqItems = [
  {
    q: "Do the panels generate power during monsoons?",
    a: "Absolutely. Even during heavy overcast conditions, our N-Type TOPCon panels capture diffused light, generally producing 40-60% of their peak summer output. You will still see significant reductions in your electricity bill."
  },
  {
    q: "How long does the subsidy process actually take?",
    a: "Under the PM Surya Ghar Yojana, the typical cycle from portal registration to direct benefit transfer (DBT) is 45-60 days. However, Sunfraa manages the entire bureaucratic pipeline, handling the technical feasibility reports and DISCOM inspections on your behalf."
  },
  {
    q: "Will the installation damage my roof structure?",
    a: "No. For flat RCC roofs common in India, we design wind-tunnel tested, ballast-mounted structures or use non-invasive chemical anchoring that permanently waterproofs any minor penetrations, ensuring absolute structural integrity."
  },
  {
    q: "What maintenance is required?",
    a: "Minimal. Washing the panels twice a month with water is usually sufficient to remove dust. Our systems also feature remote SCADA monitoring, meaning we detect and alert you to any voltage drops before you even notice an issue."
  }
];

export default function TechnicalFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-white-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-5">
            <FadeUp delay={0.1} className="lg:sticky lg:top-32">
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4: lg:mb-6">
                <span className="w-8 h-px bg-primary mr-4"></span>
                Clarification
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial mb-4">
                Common <br />
                <span className="text-gray-400">Questions.</span>
              </h2>
            </FadeUp>
          </div>

          <div className="lg:col-span-7 pt-2">
            <div className="border-t border-gray-200">
              {faqItems.map((item, i) => (
                <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                  <div className="group border-b border-gray-200">
                    <button 
                      className="w-full py-4 lg:py-6 flex justify-between items-center group text-left outline-none"
                      onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    >
                      <span className={`text-base lg:text-lg font-bold tracking-tight-editorial transition-colors duration-500 pr-8 ${activeIndex === i ? 'text-primary' : 'text-black group-hover:text-primary/70'}`}>
                        {item.q}
                      </span>
                      
                      <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                        <div className={`absolute w-full h-[1.5px] bg-black transition-transform duration-500 rounded-full ${activeIndex === i ? 'rotate-180 bg-primary' : 'rotate-90'}`} />
                        <div className={`absolute w-full h-[1.5px] bg-black transition-colors duration-500 rounded-full ${activeIndex === i ? 'bg-primary' : ''}`} />
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === i ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                      <div className="max-w-xl">
                        <p className="text-sm lg:text-base text-gray-500 font-light leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
