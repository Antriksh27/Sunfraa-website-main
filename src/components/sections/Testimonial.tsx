'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import homepageData from '@/content/homepage.json';

export default function Testimonial() {
  const { testimonials } = homepageData;

  return (
    <section id="trust" className="py-24 lg:py-64 bg-background relative overflow-hidden border-t border-white/[0.03]">
      
      {/* Background Decorative Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="s-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <FadeUp delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className="w-12 h-[1px] bg-primary/30" />
              <span className="text-[0.625rem] font-[700] uppercase tracking-[0.5em] font-label text-primary italic text-center">VOICE_OF_AUTHORITY</span>
              <span className="w-12 h-[1px] bg-primary/30" />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <blockquote className="relative">
              <span className="material-symbols-outlined absolute -top-12 left-1/2 -translate-x-1/2 text-primary opacity-20 text-6xl select-none">format_quote</span>
              
              <p className="text-[clamp(1.75rem,4vw,3.5rem)] font-[400] font-headline text-on-surface leading-[1.2] mb-20 italic tracking-tight uppercase">
                "{testimonials.quote}"
              </p>
              
              <footer className="flex flex-col items-center">
                <div className="w-20 h-20 bg-surface border border-white/[0.1] p-1 mb-8 relative group">
                  <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <img 
                    src={testimonials.author.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"} 
                    alt={testimonials.author.name} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                  />
                </div>
                <cite className="not-italic">
                  <span className="block text-[1.5rem] font-[800] font-headline text-on-surface mb-2 uppercase tracking-tight italic">
                    {testimonials.author.name}
                  </span>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-4 bg-primary/30" />
                    <span className="text-[0.75rem] font-label text-primary uppercase tracking-[0.3em] font-bold italic">
                      {testimonials.author.role}
                    </span>
                    <div className="h-[1px] w-4 bg-primary/30" />
                  </div>
                </cite>
              </footer>
            </blockquote>
          </FadeUp>

        </div>
      </div>

      {/* Decorative HUD markers */}
      <div className="absolute top-12 left-12 text-[10px] font-mono text-primary/10 uppercase tracking-[0.5em] hidden lg:block">VERIFIED_TESTIMONIAL_001</div>
    </section>
  );
}
