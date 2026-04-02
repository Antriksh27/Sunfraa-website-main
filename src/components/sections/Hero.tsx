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

      const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
      const newWidth = img.width * ratio;
      const newHeight = img.height * ratio;
      const x = (canvas.width - newWidth) / 2;
      const y = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, newWidth, newHeight);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const sequence = { frame: 0 };
    const counts = { projects: 0, capacity: 0, years: 0 };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        scrub: 1.2,
        pin: true,
      }
    });

    document.body.setAttribute('data-hero-active', 'true');

    tl.to(sequence, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      duration: 1,
      onUpdate: () => renderFrame(Math.round(sequence.frame))
    }, 0);

    // Animate Ghost Monolith Depth
    tl.fromTo('.hero-monolith', 
      { opacity: 0, scale: 1.1, filter: 'blur(10px)' }, 
      { opacity: 0.35, scale: 1, filter: 'blur(0px)', duration: 0.4, ease: 'power2.out' }, 
      0.1
    );

    tl.to('.scroll-indicator', { opacity: 0, y: 20, duration: 0.1, ease: 'sine.in' }, 0.1);

    tl.fromTo('.nav-visibility-wrapper', 
      { opacity: 0, y: -20, visibility: 'hidden' }, 
      { opacity: 1, y: 0, visibility: 'visible', duration: 0.2, ease: 'sine.inOut' }, 
      0.7
    );

    tl.fromTo('.hero-content', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.2, ease: 'sine.out' }, 
      0.75
    );

    // Stats Hero with counting animation
    tl.fromTo('.hero-stats', 
      { opacity: 0, y: 20, scale: 0.98 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.2, 
        ease: 'sine.out',
        onStart: () => {
          gsap.to(counts, {
            projects: 100,
            capacity: 50,
            years: 7,
            duration: 1.5,
            ease: 'power3.out',
            onUpdate: () => {
              const projEl = document.getElementById('stat-projects');
              const capEl = document.getElementById('stat-capacity');
              const yearEl = document.getElementById('stat-years');
              if (projEl) projEl.innerText = Math.floor(counts.projects).toString();
              if (capEl) capEl.innerText = Math.floor(counts.capacity).toString();
              if (yearEl) yearEl.innerText = Math.floor(counts.years).toString();
            }
          });
        }
      }, 
      0.8
    );

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeAttribute('data-hero-active');
    };
  }, [isLoaded, images]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="s-section s-section-full bg-black !p-0"
    >
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white p-6">
          <div className="flex flex-col items-center max-w-xs w-full">
            <div className="s-label mb-8 animate-pulse text-center">
              Initializing solar infrastructure
            </div>
            
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-4">
              <div 
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-out" 
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            
            <div className="flex justify-between w-full">
              <span className="s-mono">Protocol.Alpha</span>
              <span className="s-mono">{loadProgress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Canvas for Video Scrubbing */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Cinematic Ghost Monolith - Visual Depth Enhancement */}
      <div 
        className="hero-monolith absolute inset-0 z-[2] opacity-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/hero-monolith.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Hero Content Overlay */}
      <div className="s-container relative z-10 h-full flex flex-col justify-end pb-32">
        <div className="hero-content max-w-2xl opacity-0">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-1.5 rounded-full s-label mb-6 !tracking-[0.2em] !text-[10px]">
            Engineering Sustainable Sovereignty
          </div>
          <h1 className="s-h1 text-white mb-8 drop-shadow-2xl">
            Powering India's <br />
            <span className="liquid-gradient-orange py-1">Industrial</span> Future.
          </h1>
        </div>

        {/* Protruding Stats Overlay */}
        <div className="hero-stats absolute bottom-24 right-16 hidden lg:flex items-center gap-6 opacity-0">
          <div className="s-card p-8 shadow-2xl flex items-center gap-10 text-white !rounded-massive border-white/10">
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span id="stat-projects" className="text-4xl font-bold tracking-tight-editorial">0</span>
                <span className="text-xl font-bold text-primary ml-1">+</span>
              </div>
              <span className="s-mono !opacity-40 mt-1">Projects</span>
            </div>
            
            <div className="h-10 w-px bg-white/10"></div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span id="stat-capacity" className="text-4xl font-bold tracking-tight-editorial">0</span>
                <span className="text-xl font-bold text-primary ml-1">MW</span>
              </div>
              <span className="s-mono !opacity-40 mt-1">Capacity</span>
            </div>

            <div className="h-10 w-px bg-white/10"></div>

            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span id="stat-years" className="text-4xl font-bold tracking-tight-editorial">0</span>
                <span className="text-xl font-bold text-primary ml-1">+</span>
              </div>
              <span className="s-mono !opacity-40 mt-1">Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="s-label !text-white !opacity-60 drop-shadow-lg">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      </div>

      {/* Dark Overlay for improved text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none z-[5]" />
    </section>
  );
}
