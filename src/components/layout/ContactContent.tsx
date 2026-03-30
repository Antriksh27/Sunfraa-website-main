'use client';

import React, { useState } from 'react';
import gsap from 'gsap';
import FadeUp from '@/components/animations/FadeUp';

export default function ContactContent() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      gsap.fromTo('.success-check', { scale: 0, rotate: -45 }, { scale: 1, rotate: 0, duration: 1, ease: 'elastic.out(1, 0.5)' });
    }, 2500);
  };

  return (
    <div className="nova-scene pt-48 pb-96 min-h-screen bg-background relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150"></div>
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-nova-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-24 relative z-10">
        
        {/* Header - Editorial Scale */}
        <div className="mb-48">
          <FadeUp className="space-y-8">
            <span className="font-mono text-nova-gold text-[12px] uppercase tracking-[0.8em] font-black block">SYSTEM_ACCESS: THE_CONVERGENCE</span>
            <h1 className="text-8xl md:text-[18rem] font-headline font-black uppercase tracking-tighter leading-[0.7] nova-outline-text hover:text-white transition-all duration-[2s]">
              Channel <br />
              <span className="text-on-surface italic">Sovereignty.</span>
            </h1>
          </FadeUp>
        </div>

        <div className="nova-grid-stagger gap-32">
          {/* Direct Info */}
          <div className="col-span-12 lg:col-span-4 space-y-20">
            <FadeUp delay={0.2} className="space-y-16">
              <div className="space-y-6 border-l-4 border-nova-gold/30 pl-12 group hover:border-nova-gold transition-colors duration-1000">
                <span className="font-label text-[11px] text-on-surface-variant uppercase tracking-[0.5em] font-black block">Institutional_Base</span>
                <p className="text-3xl font-light text-on-surface">Sunfraa Global HQ<br />Ahmedabad, Gujarat 380001</p>
              </div>

              <div className="space-y-6 border-l-4 border-nova-gold/30 pl-12 group hover:border-nova-gold transition-colors duration-1000">
                <span className="font-label text-[11px] text-on-surface-variant uppercase tracking-[0.5em] font-black block">Secure_Comms</span>
                <p className="text-3xl font-light text-on-surface underline underline-offset-8 decoration-nova-gold/30">hello@sunfraa.com</p>
                <p className="text-2xl font-mono text-nova-gold opacity-60">+91 98 765 432 10</p>
              </div>

              <div className="pt-12">
                 <div className="p-10 bg-surface-container/10 border border-white/5 rounded-sm space-y-8 backdrop-blur-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 solar-grid opacity-10"></div>
                    <span className="font-mono text-[10px] text-nova-gold uppercase tracking-[0.4em] font-black block">NETWORK_STATUS</span>
                    <div className="flex items-center gap-6">
                       <div className="h-3 w-3 rounded-full bg-nova-gold animate-ping"></div>
                       <span className="font-headline font-black text-2xl uppercase tracking-tighter text-white">Active Reception</span>
                    </div>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                      Lead Auditors are currently online. <br />Response latency: &lt; 4 Earth Cycles.
                    </p>
                 </div>
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <FadeUp delay={0.4} className="bg-surface-container/10 border border-white/10 rounded-sm p-12 md:p-24 backdrop-blur-4xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] solar-grid opacity-[0.03] group-hover:opacity-10 transition-opacity duration-[3s]"></div>
              
              {formState === 'success' ? (
                <div className="min-h-[500px] flex flex-col items-center justify-center text-center space-y-12">
                   <div className="success-check h-32 w-32 rounded-full border-2 border-nova-gold flex items-center justify-center text-nova-gold mb-12">
                      <span className="material-symbols-outlined text-7xl">check</span>
                   </div>
                   <h2 className="text-6xl font-headline font-black uppercase tracking-tighter">Protocol_Sent</h2>
                   <p className="text-2xl text-on-surface-variant font-light max-w-md leading-relaxed border-t border-white/10 pt-12">
                     Your atmospheric inquiry has been synchronized with our Lead Auditor network. Expect initialization shortly.
                   </p>
                   <button onClick={() => setFormState('idle')} className="nova-magnetic text-nova-gold font-label text-[11px] uppercase tracking-[0.5em] font-black border border-nova-gold/20 px-10 py-4 hover:bg-nova-gold hover:text-black transition-all">
                     Initialize New Session
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-20 relative z-10">
                   {/* Form Fields - Replicating original content with better structure for client component */}
                   <div className="grid md:grid-cols-2 gap-16">
                      <div className="space-y-6 group/input">
                         <label className="font-label text-[10px] text-nova-gold uppercase tracking-[0.6em] font-black block">Identity_Key</label>
                         <input required type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-6 text-2xl font-light text-on-surface focus:outline-none focus:border-nova-gold transition-colors placeholder:opacity-20 placeholder:italic" />
                      </div>
                      <div className="space-y-6 group/input">
                         <label className="font-label text-[10px] text-nova-gold uppercase tracking-[0.6em] font-black block">System_Node</label>
                         <input required type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-6 text-2xl font-light text-on-surface focus:outline-none focus:border-nova-gold transition-colors placeholder:opacity-20 placeholder:italic" />
                      </div>
                   </div>
                   <div className="space-y-6 group/input">
                      <label className="font-label text-[10px] text-nova-gold uppercase tracking-[0.6em] font-black block">Project_Scale</label>
                      <select required className="w-full bg-transparent border-b border-white/10 py-6 text-2xl font-light text-on-surface focus:outline-none focus:border-nova-gold transition-colors appearance-none cursor-pointer">
                         <option className="bg-slate-900">Rooftop Sovereign (3-10kW)</option>
                         <option className="bg-slate-900">Portfolio Optimization (10-50kW)</option>
                         <option className="bg-slate-900">Institutional Grid (50kW+)</option>
                      </select>
                   </div>
                   <div className="space-y-6 group/input">
                      <label className="font-label text-[10px] text-nova-gold uppercase tracking-[0.6em] font-black block">Narrative_Override</label>
                      <textarea required rows={4} placeholder="Brief your requirements..." className="w-full bg-transparent border-b border-white/10 py-6 text-2xl font-light text-on-surface focus:outline-none focus:border-nova-gold transition-colors placeholder:opacity-20 placeholder:italic resize-none"></textarea>
                   </div>
                   <div className="pt-16 flex items-center justify-between gap-12">
                      <div className="flex items-center gap-6 group cursor-pointer">
                         <div className="w-6 h-6 rounded-sm border border-nova-gold/40 flex items-center justify-center p-1 group-hover:border-nova-gold transition-colors">
                            <div className="w-full h-full bg-nova-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>
                         <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.3em] font-black">I agree to the Sovereign Privacy Protocol</span>
                      </div>
                      <button disabled={formState === 'submitting'} className="nova-magnetic bg-white text-black px-16 py-6 rounded-sm font-headline font-black text-sm uppercase tracking-[0.8em] hover:bg-nova-gold transition-all duration-700 disabled:opacity-50 disabled:cursor-wait min-w-[280px]">
                        {formState === 'submitting' ? 'SYNCHRONIZING...' : 'Initialize Protocol'}
                      </button>
                   </div>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
