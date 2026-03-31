'use client';

import React, { useState } from 'react';
import FadeUp from '@/components/animations/FadeUp';

export default function ROIPanel() {
  const [bill, setBill] = useState(5000);

  const estimatedSystem = (bill / 1000).toFixed(1); // Roughly 1kW per 1000 INR bill
  const savingsAnnum = (bill * 12).toLocaleString('en-IN');
  const payback = "3.5 Years";

  return (
    <section id="roi" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-soft-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          <div className="lg:col-span-6">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                <span className="w-8 h-px bg-primary mr-4"></span>
                Financial Engineering
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial mb-4">
                Calculate Your <br />
                <span className="text-gray-400">Independence.</span>
              </h2>
              <p className="text-sm lg:text-base text-gray-500 font-light leading-relaxed max-w-xl">
                Enter your average monthly electricity bill below to see the exact system size you need, and how quickly your investment will pay for itself.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-6">
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-massive p-6 lg:p-8 border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                
                <div className="mb-6">
                  <div className="flex justify-between items-end mb-3">
                    <label className="text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-gray-400 block">Average Monthly Bill</label>
                    <span className="text-xl lg:text-2xl font-bold text-black tracking-tight-editorial">₹{bill.toLocaleString('en-IN')}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="500" 
                    value={bill} 
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-medium">
                    <span>₹1,000</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                <div className="bg-white rounded-[1.5rem] p-4 lg:p-6 border border-gray-100 shadow-sm space-y-3 lg:space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3 lg:pb-4">
                    <span className="text-[10px] lg:text-xs font-semibold text-gray-500 uppercase tracking-widest">Est. System Size</span>
                    <span className="text-lg lg:text-xl font-bold text-black">{estimatedSystem} kW</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3 lg:pb-4">
                    <span className="text-[10px] lg:text-xs font-semibold text-gray-500 uppercase tracking-widest">Annual Savings</span>
                    <span className="text-lg lg:text-xl font-bold text-primary">₹{savingsAnnum}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] lg:text-xs font-semibold text-gray-500 uppercase tracking-widest">Payback Period</span>
                    <span className="text-lg lg:text-xl font-bold text-black">{payback}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full liquid-gradient-orange text-white py-3 rounded-full font-bold tracking-widest uppercase text-[10px] lg:text-xs shadow-xl shadow-orange-500/20 hover:-translate-y-1 transition-transform">
                    Request Formal Quote
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
