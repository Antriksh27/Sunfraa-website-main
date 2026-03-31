'use client';

import React from 'react';
import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function GlobalPortfolio() {
  const { portfolio } = homepageData;

  return (
    <section id="portfolio" className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-soft-container relative overflow-hidden">
      <div className="s-container max-w-[1400px]">
        
        <div className="max-w-4xl mb-6 lg:mb-8">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-3 lg:mb-4">
              <span className="w-8 h-px bg-primary mr-4"></span>
              Our Work
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial">
              Proven <br />
              <span className="text-gray-400 font-light">Deployments.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolio.projects.map((project: any, i: number) => (
            <FadeUp key={i} delay={0.2 + (i * 0.1)} className="h-full">
              <div className="group relative aspect-[3/2] rounded-massive overflow-hidden bg-black/20 shadow-2xl h-full border border-white/5">
                <Image
                  src={project.image || "https://images.unsplash.com/photo-1466611653911-95282fc14560?q=80&w=2000&auto=format&fit=crop"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-primary mb-1 block">
                      {project.type}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight-editorial">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-3 lg:pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div>
                      <span className="text-[0.55rem] font-semibold text-gray-300 uppercase tracking-widest block mb-1">ANNUAL SAVINGS</span>
                      <span className="text-sm lg:text-base font-bold text-white">{project.savings}</span>
                    </div>
                    <div>
                      <span className="text-[0.55rem] font-semibold text-gray-300 uppercase tracking-widest block mb-1">ROI PERIOD</span>
                      <span className="text-sm lg:text-base font-bold text-white">{project.payback}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
