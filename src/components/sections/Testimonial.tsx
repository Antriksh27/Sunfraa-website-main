'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

const testimonialsData = [
  {
    type: 'image',
    img: 'https://images.unsplash.com/photo-1548678967-f1fc5d33934d?q=80&w=2000&auto=format&fit=crop',
    alt: 'Customer smiling'
  },
  {
    type: 'quote',
    name: 'Rajesh Sharma',
    company: 'Residential Owner, Jaipur',
    quote: 'Sunfraa completely eliminated our ₹12,000 monthly electricity bill. The PM Surya Ghar subsidy process was handled flawlessly.'
  },
  {
    type: 'image',
    img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=2000&auto=format&fit=crop',
    alt: 'Business woman with tablet'
  },
  {
    type: 'quote',
    name: 'Anjali Desai',
    company: 'Textile Manufacturing, Surat',
    quote: 'We installed a 100kW system. The ALMM-compliant panels and heavy-duty cyclone structures give us immense confidence.'
  }
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-white-container relative overflow-hidden text-black">
      <div className="s-container max-w-[1400px]">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-4 lg:mb-6 gap-4">
          <FadeUp delay={0.1} className="max-w-3xl">
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-3: lg:mb-4">
              <span className="w-8 h-px bg-primary mr-4"></span>
              Client Success
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial">
              Trusted by Thousands<br/><span className="text-gray-400">of Indian Homes.</span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-black flex items-center justify-center hover:bg-gray-50 transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full liquid-gradient-orange text-white flex items-center justify-center hover:scale-105 transition-transform shadow-xl shadow-orange-500/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Carousel */}
        <FadeUp delay={0.3}>
          <div className="flex overflow-x-auto gap-4 lg:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonialsData.map((item, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] md:w-[340px] lg:w-[380px] h-[320px] rounded-massive overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
                {item.type === 'image' ? (
                  <div className="w-full h-full relative group bg-gray-100">
                    <img 
                      src={item.img} 
                      alt={item.alt} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-dark-container p-6 lg:p-8 flex flex-col justify-between relative group hover:bg-[#212529] transition-colors duration-500 text-white border border-white/5">
                     <p className="text-sm lg:text-base leading-[1.4] font-light text-gray-300">
                       "{item.quote}"
                     </p>
                     <div>
                       <h4 className="font-bold text-lg mb-1 tracking-tight-editorial">{item.name}</h4>
                       <p className="text-primary text-[10px] uppercase tracking-widest">{item.company}</p>
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Drag Indicator */}
        <FadeUp delay={0.4} className="flex justify-center mt-2">
            <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-semibold">Drag to slide</span>
        </FadeUp>

      </div>
    </section>
  );
}
