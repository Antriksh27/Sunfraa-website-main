'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';

export function AboutContent() {
  return (
    <div className="nova-scene pt-48 pb-96 min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150"></div>
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-nova-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="max-w-[1800px] mx-auto px-8 md:px-24 relative z-10">
        <div className="mb-48">
          <FadeUp className="space-y-8">
            <span className="font-mono text-nova-gold text-[12px] uppercase tracking-[0.8em] font-black block">ORIGIN_PROTOCOL: THE_VISION</span>
            <h1 className="text-8xl md:text-[20rem] font-headline font-black uppercase tracking-tighter leading-[0.75] nova-outline-text hover:text-white transition-all duration-[3s]">
              The <br />
              <span className="text-on-surface italic">Collective.</span>
            </h1>
          </FadeUp>
        </div>
        <div className="nova-grid-stagger gap-24 items-start">
           <div className="col-span-12 lg:col-span-6 space-y-16">
              <FadeUp delay={0.2} className="space-y-12">
                 <h2 className="text-5xl md:text-7xl font-light text-on-surface leading-[1.1]">
                   We are architects of the <span className="text-nova-gold">energy transition.</span>
                 </h2>
                 <p className="text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl border-l-[12px] border-nova-gold/20 pl-12">
                   Founded with a singular directive: to strip away the complexity of solar investment and replace it with extreme precision. We engineering sovereign assets.
                 </p>
                 <div className="pt-12 grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <span className="text-6xl font-headline font-black text-white">100+</span>
                       <span className="font-mono text-[10px] text-nova-gold uppercase tracking-[0.4em] block">Successful_Nodes</span>
                    </div>
                    <div className="space-y-4">
                       <span className="text-6xl font-headline font-black text-white">50MW+</span>
                       <span className="font-mono text-[10px] text-nova-gold uppercase tracking-[0.4em] block">Soverign_Capacity</span>
                    </div>
                 </div>
              </FadeUp>
           </div>
           <div className="col-span-12 lg:col-span-5 lg:col-start-8 space-y-24">
              <FadeUp delay={0.4} className="p-16 bg-surface-container/10 border border-white/5 backdrop-blur-3xl relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-48 h-48 solar-grid opacity-10 group-hover:opacity-30 transition-opacity"></div>
                 <h3 className="font-mono text-nova-gold text-[11px] uppercase tracking-[0.6em] font-black mb-12">OPERATIONAL_MANTRA</h3>
                 <div className="space-y-16">
                    <div className="space-y-4 font-headline font-black uppercase tracking-tighter">
                       <h4 className="text-3xl uppercase">01 // Precision</h4>
                       <p className="text-on-surface-variant font-light lowercase">Every photon is accounted for.</p>
                    </div>
                    <div className="space-y-4 font-headline font-black uppercase tracking-tighter">
                       <h4 className="text-3xl uppercase">02 // Intent</h4>
                       <p className="text-on-surface-variant font-light lowercase">No generic solutions.</p>
                    </div>
                    <div className="space-y-4 font-headline font-black uppercase tracking-tighter">
                       <h4 className="text-3xl uppercase">03 // Stewardship</h4>
                       <p className="text-on-surface-variant font-light lowercase">Institutional rigor.</p>
                    </div>
                 </div>
              </FadeUp>
           </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsContent() {
  const registry = [
    { id: '01', title: 'Industrial Grid', capacity: '1.2MW', location: 'Ahmedabad' },
    { id: '02', title: 'Rooftop Sovereign', capacity: '550kW', location: 'Surat' },
  ];
  return (
    <div className="nova-scene pt-48 pb-96 min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150"></div>
      <div className="max-w-[1800px] mx-auto px-8 md:px-24">
        <div className="mb-48 border-b border-white/5 pb-24">
          <FadeUp className="space-y-8">
            <span className="font-mono text-nova-gold text-[12px] uppercase tracking-[0.8em] font-black block">LEDGER_ACCESS: RECORDS_V921</span>
            <h1 className="text-8xl md:text-[18rem] font-headline font-black uppercase tracking-tighter leading-[0.7] nova-outline-text hover:text-white transition-all duration-[3s]">
              Registry <br /><span className="text-on-surface italic">of Records.</span>
            </h1>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {registry.map((project, idx) => (
             <FadeUp key={project.id} delay={idx * 0.1}>
                <div className="group relative h-[600px] bg-surface-container/10 border border-white/5 overflow-hidden">
                   <div className="solar-grid absolute inset-0 opacity-[0.05]"></div>
                   <div className="absolute inset-0 p-12 flex flex-col justify-between">
                      <span className="font-mono text-[10px] text-nova-gold uppercase tracking-[0.5em]">ID://{project.id}</span>
                      <h3 className="text-6xl font-headline font-black uppercase tracking-tighter text-white">{project.title}</h3>
                      <div className="flex justify-between items-center"><span className="text-white">{project.capacity}</span><span>{project.location}</span></div>
                   </div>
                </div>
             </FadeUp>
           ))}
        </div>
      </div>
    </div>
  );
}
