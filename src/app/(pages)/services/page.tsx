'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';

const ENGERY_PROTOCOLS = [
  { id: '01', title: 'Solar EPC', description: 'Complete orchestration of large-scale solar infrastructure. Engineering, Procurement, and Construction with absolute precision.' },
  { id: '02', title: 'O&M Protocol', description: 'Institutional-grade Operations and Maintenance. Real-time monitoring and asset preservation for 99.8% uptime.' },
  { id: '03', title: 'Rooftop Sovereign', capacity: '5kW - 50kW', description: 'Transforming architectural space into energy-independent assets for industrial and residential hubs.' },
];

export default function ServicesPage() {
  return (
    <div className="nova-scene pt-48 pb-96 min-h-screen bg-background relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150"></div>
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-nova-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-24 relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-48">
          <FadeUp className="space-y-8">
            <span className="font-mono text-nova-gold text-[12px] uppercase tracking-[0.8em] font-black block">SYSTEM_ACCESS: SOLUTIONS_V5.1</span>
            <h1 className="text-8xl md:text-[20rem] font-headline font-black uppercase tracking-tighter leading-[0.75] nova-outline-text hover:text-white transition-all duration-[3s]">
              Energy <br />
              <span className="text-on-surface italic">Protocols.</span>
            </h1>
          </FadeUp>
        </div>

        <div className="nova-grid-stagger gap-24 items-start">
           {ENGERY_PROTOCOLS.map((protocol, idx) => (
             <div key={protocol.id} className="col-span-12 lg:col-span-4 h-full">
                <FadeUp delay={idx * 0.2} className="h-full flex flex-col justify-between p-12 bg-surface-container/10 border border-white/5 backdrop-blur-3xl group hover:border-nova-gold transition-colors duration-1000 min-h-[500px]">
                   <div className="space-y-12">
                      <div className="flex justify-between items-start">
                         <span className="font-mono text-nova-gold text-[10px] uppercase tracking-[0.5em] font-black">PROTOCOL://{protocol.id}</span>
                         <div className="w-1.5 h-1.5 rounded-full bg-nova-gold animate-ping"></div>
                      </div>
                      <h3 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white group-hover:translate-x-4 transition-transform duration-700 leading-none">
                         {protocol.title}
                      </h3>
                      <p className="text-xl text-on-surface-variant font-light leading-relaxed border-l-4 border-nova-gold/20 pl-8 group-hover:border-nova-gold transition-colors duration-1000">
                         {protocol.description}
                      </p>
                   </div>

                   <div className="pt-16">
                      <Link href={`/services/${protocol.id}`} className="nova-magnetic inline-block px-12 py-4 border border-white/10 rounded-sm font-label text-[10px] uppercase tracking-[0.6em] text-white hover:bg-white hover:text-black transition-all">
                        Initiate Deep_Dive
                      </Link>
                   </div>
                </FadeUp>
             </div>
           ))}
        </div>

        {/* Global Resource View */}
        <div className="mt-64 p-24 border border-nova-gold/20 relative overflow-hidden group">
           <div className="absolute inset-0 solar-grid opacity-[0.03] group-hover:opacity-10 transition-opacity"></div>
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
              <div className="max-w-2xl space-y-8">
                 <h4 className="text-4xl md:text-6xl font-light text-on-surface leading-tight">
                   The architecture of light is <span className="text-nova-gold">absolute.</span>
                 </h4>
                 <p className="text-2xl text-on-surface-variant font-light leading-relaxed">
                   Every protocol we deploy is engineered for the long-term sovereignty of your energy infrastructure.
                 </p>
              </div>
              <Link href="/contact" className="nova-magnetic bg-nova-gold text-black px-16 py-8 rounded-sm font-headline font-black text-sm uppercase tracking-[0.8em] shadow-[0_0_50px_rgba(245,198,76,0.3)] hover:scale-110 transition-all duration-700">
                Initialize Consultation
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
