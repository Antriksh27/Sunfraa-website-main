'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const NAV_LINKS = [
  { label: 'About',          href: '/#about' },
  { label: 'Services',       href: '/#services' },
  { label: 'ROI Calculator', href: '/#roi-intelligence' },
  { label: 'Projects',       href: '/#portfolio' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-[background,height,backdrop-filter,border] duration-700 ease-io ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/[0.05] h-20' 
            : 'bg-transparent border-b border-transparent h-28'
        } nav-visibility-wrapper`}
      >
        <div className="s-container h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <Link href="/" className="group relative flex items-center shrink-0">
              <div className={`relative transition-all duration-700 ${scrolled ? 'h-[4.5rem] md:h-[6rem]' : 'h-[6rem] md:h-28'} ${!scrolled ? 'bg-white p-3 md:p-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] ring-1 ring-white/20' : ''} -ml-2 lg:-ml-6`}>
                <img 
                  src="/sunfraa-global-logo.png" 
                  alt="Sunfraa Global"
                  className="w-auto h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-12">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-[0.625rem] font-[700] uppercase tracking-[0.3em] font-label text-on-background hover:text-primary transition-colors duration-500 group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Action */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact" className="group relative px-8 py-4 bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-background text-[0.625rem] font-[800] uppercase tracking-[0.3em] italic">
                  Get a Quote
                </span>
              </Link>
            </div>

            {/* Mobile Trigger */}
            <button
              className="lg:hidden relative z-[120] p-2 -mr-2 text-on-background hover:text-primary transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay (Full Screen) */}
      <div
        className={`fixed inset-0 z-[115] bg-background/95 backdrop-blur-2xl transition-all duration-700 ease-io ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="flex flex-col h-full p-8 pt-32">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[clamp(1.5rem,8vw,2.5rem)] font-headline font-black uppercase tracking-tighter text-on-background transition-all duration-500 hover:text-primary ${
                  mobileOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-[0.4em] s-mono !text-primary/40 mr-4">0{i+1}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={`mt-auto space-y-8 transition-all duration-700 delay-500 ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link 
              href="/contact" 
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Get a Quote
            </Link>
            
            <div className="flex flex-col gap-2">
              <span className="s-mono !text-[10px] !opacity-40">Direct Line</span>
              <a href="tel:+91XXXXXXXXXX" className="text-xl font-headline font-bold text-on-background">+91 91122 34567</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
