'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 234;
const FRAME_BASE_URL = '/hero-frames/ezgif-frame-';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // 1. Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const preloadImages = () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `${FRAME_BASE_URL}${frameNumber}.jpg`;
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
        };
        loadedImages[i - 1] = img;
      }
    };

    preloadImages();
  }, []);

  // 2. Canvas Rendering Engine
  useGSAP(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img) return;

      // Cover scaling logic
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;
      
      const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, newWidth, newHeight);
    };

    // Initialize first frame
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // GSAP ScrollTrigger Sequence
    const sequence = { frame: 0 };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // 3 full scrolls
        scrub: 1.2, // Extra smooth scrub
        pin: true,
      }
    });

    // Set Hero active state (handled by globals.css initially)
    document.body.setAttribute('data-hero-active', 'true');

    // 1. Frame Scrubbing Layer
    tl.to(sequence, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      duration: 1,
      onUpdate: () => renderFrame(Math.round(sequence.frame))
    }, 0);

    // 2. Smooth Reveal Sequence (Final 30% of scroll)
    // Synchronized Navbar, Content, and Stats
    
    // Scroll Indicator Vanish (Early in the scroll)
    tl.to('.scroll-indicator', { opacity: 0, y: 20, duration: 0.1, ease: 'sine.in' }, 0.1);

    // Navbar Reveal
    tl.fromTo('.nav-visibility-wrapper', 
      { opacity: 0, y: -20, visibility: 'hidden' }, 
      { opacity: 1, y: 0, visibility: 'visible', duration: 0.2, ease: 'sine.inOut' }, 
      0.7
    );

    // Hero Main Content
    tl.fromTo('.hero-content', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.2, ease: 'sine.out' }, 
      0.75
    );

    // Stats Hero
    tl.fromTo('.hero-stats', 
      { opacity: 0, y: 20, scale: 0.98 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'sine.out' }, 
      0.8
    );

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeAttribute('data-hero-active');
      document.body.removeAttribute('data-nav-visible');
    };
  }, [isLoaded, images]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-label">
          <div className="text-2xl font-bold mb-4 tracking-widest uppercase italic">
            Sunfraa Protocol <span className="text-primary">Loading</span>
          </div>
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <div className="mt-2 text-[10px] opacity-40 uppercase tracking-[0.4em]">
            Syncing Solar Frames... {loadProgress}%
          </div>
        </div>
      )}

      {/* Canvas for Video Scrubbing */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Hero Content Overlay */}
      <div className="s-container relative z-10 h-full flex flex-col justify-end pb-32">
        <div className="hero-content max-w-2xl opacity-0">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-1.5 rounded-full font-medium text-[10px] mb-6 tracking-[0.2em] uppercase">
            Sovereign Solar Infrastructure
          </div>
          <h1 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight-editorial mb-8 drop-shadow-2xl font-headline">
            Powering India's <br />
            <span className="liquid-gradient-orange py-1">Sustainable</span> Future.
          </h1>
        </div>

        {/* Protruding Stats Overlay */}
        <div className="hero-stats absolute bottom-24 right-16 hidden lg:flex items-center gap-6 opacity-0">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-massive p-6 shadow-2xl flex items-center gap-8 text-white">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight-editorial">10k+</span>
              <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">Installations</span>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight-editorial">50MW</span>
              <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">Active Power</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white drop-shadow-lg">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>

      {/* Dark Overlay for improved text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none z-[5]" />
    </section>
  );
}
