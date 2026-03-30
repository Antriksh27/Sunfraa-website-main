'use client';

import React from 'react';
import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function GlobalPortfolio() {
  const { portfolio } = homepageData;

  return (
    <section id="portfolio" className="py-24 lg:py-48 bg-background relative overflow-hidden border-t border-white/[0.03]">
      <div className="s-container">
        
        <div className="max-w-4xl mb-24">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-primary/30" />
              <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic">GLOBAL_PROJECT_ARCHIVE</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[800] font-headline text-on-surface leading-[0.95] tracking-tight uppercase">
              Operational <br />
              <span className="gold-gradient">Impact.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-0.5 bg-white/[0.05] border border-white/[0.05]">
          {portfolio.projects.map((project: any, i: number) => (
            <FadeUp key={i} delay={0.2 + (i * 0.1)}>
              <div className="group relative aspect-[16/10] overflow-hidden bg-surface cursor-crosshair">
                <Image
                  src={project.image || "https://images.unsplash.com/photo-1542336391-ae2936d8ef4b?q=80&w=2070&auto=format&fit=crop"}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-12 lg:p-16 flex flex-col justify-end">
                  <div className="mb-8">
                    <span className="text-[0.625rem] font-label uppercase tracking-[0.4em] text-primary mb-4 block font-bold italic">
                      PROT_TYPE_{project.type.toUpperCase().replace(/\s+/g, '_')}
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-[800] font-headline text-on-surface uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/[0.05] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div>
                      <span className="text-[0.625rem] font-label text-on-surface/30 uppercase tracking-[0.2em] block mb-2 font-bold">ANNUAL_YIELD_DELTA</span>
                      <span className="text-2xl font-headline font-[800] text-on-surface italic">{project.savings}</span>
                    </div>
                    <div>
                      <span className="text-[0.625rem] font-label text-on-surface/30 uppercase tracking-[0.2em] block mb-2 font-bold">CAPEX_RECOVERY</span>
                      <span className="text-2xl font-headline font-[800] text-on-surface italic">{project.payback}</span>
                    </div>
                  </div>
                </div>

                {/* Technical Aesthetic Corner */}
                <div className="absolute top-12 right-12 w-12 h-12 border-t border-r border-white/[0.1] group-hover:border-primary transition-colors duration-500" />
                <div className="absolute top-12 right-12 w-4 h-4 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
