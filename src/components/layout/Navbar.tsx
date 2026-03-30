'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const NAV_LINKS = [
  { label: 'Philosophy',       href: '/#philosophy' },
  { label: 'Solutions',        href: '/#solutions' },
  { label: 'Impact',           href: '/#roi-intelligence' },
  { label: 'Asset Repository',  href: '/#portfolio' },
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/[0.05] h-20' 
            : 'bg-transparent border-b border-transparent h-28'
        }`}
      >
        <div className="s-container h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <Link href="/" className="group flex flex-col">
              <span className="text-[1.25rem] font-[800] tracking-[-0.02em] font-headline text-on-surface uppercase leading-none">
                SUNFRAA <span className="text-primary italic group-hover:text-on-surface transition-colors duration-500">GLOBAL</span>
              </span>
              <span className="text-[0.5rem] font-[700] font-label text-primary uppercase tracking-[0.6em] mt-1 italic opacity-60">SOVEREIGN_SYSTEMS</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-12">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-[0.625rem] font-[700] uppercase tracking-[0.3em] font-label text-on-surface/40 hover:text-primary transition-colors duration-500 group py-2"
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
                  INITIATE_PROTOCOL
                </span>
              </Link>
            </div>

            {/* Mobile Trigger */}
            <button
              className="lg:hidden text-on-surface hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[110] bg-background p-8 transition-transform duration-500 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="text-[1.25rem] font-[700] tracking-[0.05em] font-headline">SUNFRAA GLOBAL</span>
          <button onClick={() => setMobileOpen(false)}><X size={24} /></button>
        </div>
        <div className="flex flex-col gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-headline font-bold text-on-surface"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full justify-center mt-8"
          >
            Initiate Protocol
          </Link>
        </div>
      </div>
    </>
  );
}
