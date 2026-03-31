'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function OutcomeShift() {
  return (
    <section id="subsidies" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-6 lg:py-0 bg-dark-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Side: Visual/Cards */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <FadeUp delay={0.1} className="w-full max-w-lg relative">
              
              {/* Main Subsidy Card */}
              <div className="bg-[#262A2E] border border-white/10 rounded-massive p-6 lg:p-10 relative z-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png" className="h-6 object-contain opacity-80" alt="Govt. of India" />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-white mb-2 tracking-tight-editorial">PM Surya Ghar</h3>
                 <p className="text-primary font-semibold tracking-widest text-[10px] uppercase mb-6">Muft Bijli Yojana</p>
                 
                 <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                       <span className="text-gray-400 text-sm font-light">System Capacity</span>
                       <span className="text-white text-sm font-bold">1 kW to 3+ kW</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                       <span className="text-gray-400 text-sm font-light">Subsidy Amount</span>
                       <span className="text-primary font-bold text-lg">Up to ₹78,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-gray-400 text-sm font-light">Sunfraa Assistance</span>
                       <span className="text-white font-bold bg-white/10 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase">100% Handled</span>
                    </div>
                 </div>
              </div>

              {/* Decorative Floating Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 liquid-gradient-orange rounded-full blur-[60px] opacity-40 z-0"></div>
              
            </FadeUp>
          </div>

          {/* Right Side: Text Area */}
          <div className="lg:col-span-6 order-1 lg:order-2 pt-4 lg:pt-0">
            <FadeUp delay={0.2}>
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                <span className="w-8 h-px bg-primary mr-4"></span>
                Government Incentives
              </div>
              
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-[1.05] tracking-tight-editorial mb-4">
                Get Paid to <br />
                <span className="text-gray-500">Go Solar.</span>
              </h2>

              <div className="space-y-5">
                <p className="text-[clamp(1rem,1.2vw,1.15rem)] text-gray-400 font-light leading-relaxed">
                  The Indian Government is actively incentivizing the shift to renewable energy. Under the PM Surya Ghar Yojana, recover your costs directly.
                </p>
                
                <p className="text-[clamp(1rem,1.2vw,1.15rem)] text-white font-medium leading-relaxed">
                  Sunfraa manages the entire bureaucratic process. We ensure you get every rupee you deserve without lifting a finger.
                </p>
                
                <div className="pt-4">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:-translate-y-1 transition-transform shadow-lg shadow-white/10">
                        Check Eligibility
                    </button>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
