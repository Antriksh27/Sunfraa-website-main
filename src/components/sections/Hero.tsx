'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeUp from '@/components/animations/FadeUp';
import StaggerChildren from '@/components/animations/StaggerChildren';
import homepageData from '@/content/homepage.json';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { hero } = homepageData;
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Cinematic Parallax for Video
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 200,
      opacity: 0.2,
      scale: 1.1,
    });

    // HUD element floating animations
    gsap.to('.hud-float', {
      y: 'random(-10, 10)',
      x: 'random(-5, 5)',
      duration: 'random(3, 5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* ── CINEMATIC BACKGROUND ─────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-[1.1] scale-105"
        >
          <source src="https://assets.mixkit.io/videos/preview/mixkit-solar-panels-in-a-sunny-day-4416-large.mp4" type="video/mp4" />
        </video>
        
        {/* Layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
        <div className="nova-noise-overlay z-20" />
        
        {/* Solar Pulse Orb */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-solar-pulse pointer-events-none z-10" />
      </div>

      {/* ── HUD METADATA ─────────────────────────────────── */}
      <div className="absolute top-32 left-10 hidden lg:block z-30 hud-float">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="hud-tag opacity-60">GEOGRAPHIC_LOCK</span>
            <span className="text-[10px] font-label text-primary tracking-widest">23.0225° N, 72.5714° E</span>
          </div>
          <div className="hud-line !w-16" />
          <div className="flex flex-col gap-1">
            <span className="hud-tag opacity-60">SYSTEM_AUTH</span>
            <span className="text-[10px] font-label text-on-surface/40 tracking-widest">SUNFRAA_GEN_PROT_V4</span>
          </div>
        </div>
      </div>

      <div className="absolute top-32 right-10 hidden lg:block z-30 hud-float text-right">
        <div className="space-y-2">
          <span className="hud-tag block opacity-40">SOVEREIGN_ENGINEERING</span>
          <div className="flex items-center justify-end gap-3">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_var(--color-secondary)]" />
            <span className="text-[10px] font-label text-on-surface/60 tracking-tighter uppercase">GRID_SECURE_STABLE</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="s-container relative z-30 flex flex-col justify-center h-full">
        <div className="max-w-4xl pt-20">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <div className="hero-badge m-0">
                <span className="hero-badge-dot" />
                {hero.badge}
              </div>
              <div className="h-[1px] w-20 bg-primary/20" />
              <span className="font-label text-[9px] uppercase tracking-[0.4em] text-on-surface/30">EST_2015</span>
            </div>
          </FadeUp>

          <StaggerChildren stagger={0.1}>
            <h1 className="flex flex-col font-headline font-[800] leading-[0.9] tracking-[-0.04em] mb-10">
              <span className="text-[clamp(3.5rem,10vw,8rem)] text-on-surface/10 uppercase"
                    style={{ WebkitTextStroke: '1.5px rgba(201, 168, 76, 0.3)', color: 'transparent' }}>
                {hero.title}_
              </span>
              <span className="text-[clamp(4.5rem,14vw,11rem)] gold-gradient uppercase -mt-[0.1em] drop-shadow-[0_20px_60px_rgba(201,168,76,0.15)]">
                {hero.highlight}
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="max-w-xl space-y-10">
                <p className="text-[1.125rem] lg:text-[1.35rem] text-on-surface/60 font-body leading-relaxed border-l-2 border-primary/20 pl-8">
                  {hero.desc}
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <Link href="/book-audit" className="btn-primary min-w-[240px] group">
                    <span>{hero.cta.primary}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/#manifesto" className="btn-outline min-w-[200px] border-on-surface/10 hover:border-primary/50 text-on-surface/80">
                    {hero.cta.secondary}
                  </Link>
                </div>
              </div>
            </div>
          </StaggerChildren>
        </div>
      </div>

      {/* ── BOTTOM STATS BAR ─────────────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full z-40 bg-background/80 backdrop-blur-xl border-t border-white/[0.03]">
        <div className="s-container py-8 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 relative group">
                <div className="text-[9px] font-label text-primary/30 tracking-widest absolute -top-4">[{String(i+1).padStart(2, '0')}]</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl lg:text-4xl font-headline font-[800] text-on-surface group-hover:text-primary transition-colors duration-500 tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[0.7rem] font-label text-primary/60 font-bold uppercase">{stat.unit}</span>
                </div>
                <div className="h-[1px] w-full bg-white/[0.05] relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/40 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700" />
                </div>
                <p className="text-[0.6rem] font-label text-on-surface/30 uppercase tracking-[0.25em]">{stat.label}</p>
              </div>
            ))}
            
            {/* Real-time Ticker Placeholder */}
            <div className="hidden lg:flex flex-col justify-center border-l border-white/[0.05] pl-12">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] font-label text-secondary uppercase tracking-widest">Live_Production</span>
              </div>
              <span className="text-xl font-headline font-bold text-on-surface/80">42,891 <span className="text-[10px] font-label opacity-40">MWh</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SIDEBAR PROTOCOL LABEL ───────────────────────── */}
      <div className="absolute right-12 top-1/2 -rotate-90 origin-right translate-y-[-50%] hidden xl:block z-30">
        <span className="text-[10px] font-label uppercase tracking-[1em] text-on-surface/10">
          SOLAR_SUPREMACY_SYSTEM_INIT
        </span>
      </div>
    </section>
  );
}
