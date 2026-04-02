'use client';

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { Home, ClipboardCheck, Factory, Cog, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const eliteServices = [
  {
    title: 'Residential Solar',
    desc: 'Bespoke rooftop ecosystems for modern estates. Zero-bill autonomy with seamless compliance.',
    specs: ['Subsidy-Ready', 'ALMM-Certified', 'Cyclone-Rated'],
    icon: Home,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1400&auto=format&fit=crop',
    cols: 'lg:col-span-7',
    tag: 'Strategic ROI',
  },
  {
    title: 'Commercial Solar',
    desc: 'High-yield energy infrastructure. Designed for maximum tax depreciation & ESG targets.',
    specs: ['Tier-1 Modules', 'Net-Metering', '0% Financing'],
    icon: ClipboardCheck,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
    cols: 'lg:col-span-5',
    tag: 'Zero Capex',
  },
  {
    title: 'Maintenance Services',
    desc: 'Industrial-grade O&M lifecycle management. 24/7 technical shielding and robotic scaling.',
    specs: ['Robotic Cleaning', '24/7 Monitoring', 'Annual Audit'],
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1400&auto=format&fit=crop',
    cols: 'lg:col-span-12 lg:row-span-1 xl:col-span-5',
    tag: '99% Uptime',
  },
  {
    title: 'Industrial Solar',
    desc: 'Heavy-duty deployments for high-load manufacturing. Multi-megawatt engineering precision.',
    specs: ['Load Balancing', 'ASME Structural', 'HV-Sync'],
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1400&auto=format&fit=crop',
    cols: 'lg:col-span-12 lg:row-span-1 xl:col-span-7',
    tag: '25Y Lifetime',
  },
];

export default function ServicesBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.elite-bento-tile', 
      { opacity: 0, y: 40, scale: 0.98 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="s-section s-section-full s-theme-grey !p-0 flex items-center justify-center overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary top-[10%] left-[10%] opacity-[0.03]" />

      <div className="s-container relative z-20 w-full h-full flex flex-col justify-around py-4 lg:py-6">
        {/* Elite Header Block */}
        <div className="text-center lg:text-left shrink-0">
           <div className="flex items-center justify-center lg:justify-start gap-4 s-label mb-1">
             Integrated Capabilities
             <span className="w-10 h-px bg-primary/30" />
           </div>
            <h2 className="s-h1 !text-zinc-900 !text-[clamp(1.5rem,3.5vw,2.5rem)] !leading-none !tracking-[calc(-0.06em)] uppercase pb-2">
              Service <br/>
              <span className="text-primary italic lowercase font-body font-light tracking-tight normal-case">ecosystem.</span>
            </h2>
        </div>

        {/* Dynamic Asymmetric Bento Grid - Optimized for 100vh */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-3 flex-1 min-h-0">
          {eliteServices.map((service, idx) => (
                 <div 
                key={idx} 
                className={cn(
                  "elite-bento-tile group relative rounded-none overflow-hidden transition-all duration-700 bg-zinc-900 border border-white/5 flex flex-col hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)] cursor-pointer",
                  service.cols
                )}
              >
                 {/* Immersive Background Reveal Layer */}
                 <div className="absolute inset-0 z-0 overflow-hidden">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale-[60%] group-hover:grayscale-0"
                   />
                   {/* Dark overlay that lifts on hover */}
                   <div className="absolute inset-0 bg-zinc-950/60 group-hover:bg-zinc-950/10 transition-colors duration-700" />
                 </div>
 
                 {/* Content Overlay */}
                 <div className="relative z-10 p-4 lg:p-6 flex flex-col h-full justify-between transition-all duration-500 text-white">
                    
                    {/* Top Bar: ID and Technical Tag */}
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                           <h3 className="text-xl lg:text-2xl font-headline font-black tracking-tighter uppercase leading-none mt-2 transition-transform group-hover:translate-x-1">
                              {service.title}
                           </h3>
                        </div>
                                            <div className="flex flex-col items-end gap-3 text-right">
                           <div className="px-3 py-1 bg-white/10 text-white s-mono !text-[10px] !opacity-100 group-hover:bg-primary group-hover:text-white transition-colors border border-white/10">
                              {service.tag}
                           </div>
                          <service.icon className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all text-white" strokeWidth={1.5} />
                       </div>
                   </div>

                   {/* Bottom Bar: Specs Reveal & CTA */}
                   <div className="flex items-end justify-between gap-8">
                      <div className="space-y-3">
                         <p className="s-body !text-white/70 group-hover:!text-white !text-[12px] leading-snug max-w-[300px] transition-colors">
                            {service.desc}
                         </p>
                                                  <div className="flex flex-wrap gap-1.5 opacity-40 group-hover:opacity-100 transition-all duration-700 delay-100">
                              {service.specs.map(spec => (
                                 <span key={spec} className="px-2 py-1 border border-white/20 s-mono !opacity-100 bg-white/5 !text-[9px] uppercase tracking-widest">
                                    {spec}
                                 </span>
                              ))}
                           </div>
                      </div>

                        <div className="flex flex-col items-end gap-3 group-hover:translate-x-2 transition-transform duration-500">
                           <div className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                              <ArrowUpRight size={16} className="text-white/60 group-hover:text-white transition-colors" />
                           </div>
                        </div>
                   </div>
                </div>

                <div className="absolute top-10 right-0 w-px h-20 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
