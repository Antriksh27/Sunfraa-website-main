'use client';

import React from 'react';
import Link from 'next/link';

const FOOTER_NAV = [
  {
    title: 'Solutions_Suite',
    links: [
      { label: 'Industrial MW', href: '/#solutions' },
      { label: 'Institutional',  href: '/#solutions' },
      { label: 'Commercial',  href: '/#solutions' },
      { label: 'Energy Audit',      href: '/audit' },
    ],
  },
  {
    title: 'Enterprise',
    links: [
      { label: 'Asset Portfolio',    href: '/#projects' },
      { label: 'The Process',    href: '/#process' },
      { label: 'Authority',  href: '/#authority' },
      { label: 'Technical FAQ',             href: '/#faq' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface py-16 lg:py-32 relative overflow-hidden border-t border-white/[0.03]">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="s-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-24 lg:gap-32">

          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="group flex items-center pt-2">
              <div className="relative h-16 md:h-20 bg-white p-3 md:p-4 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] ring-1 ring-white/10">
                <img 
                  src="/sunfraa-global-logo.png" 
                  alt="Sunfraa Global"
                  className="w-auto h-full object-contain"
                />
              </div>
            </Link>
            
            <p className="text-[1.125rem] text-on-surface/50 font-body max-w-sm leading-relaxed italic">
              Engineering the transition to industrial autonomy. High-precision EPC protocols for the Indian solar sector.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               {['ISO_9001', 'IEC_61215', 'MNRE_CERT'].map((tag, i) => (
                 <span key={i} className="text-[0.5rem] font-[800] font-label text-primary/40 border border-primary/10 px-4 py-2 uppercase tracking-[0.3em] italic bg-primary/5">
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          {/* Navigation Groups */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:gap-16 pt-2">
            {FOOTER_NAV.map((col, i) => (
              <div key={i} className="space-y-8">
                <h4 className="text-[0.625rem] font-[800] font-label text-primary uppercase tracking-[0.3em] flex items-center gap-4 italic whitespace-nowrap">
                  <span className="w-4 h-[1px] bg-primary/30 shrink-0" />
                  {col.title}
                </h4>
                <ul className="space-y-4 pl-8">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <Link href={link.href} className="text-[0.75rem] font-[500] font-label text-on-surface/40 hover:text-primary transition-colors uppercase tracking-[0.2em] italic">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Protocol */}
          <div className="lg:col-span-3 space-y-8 pt-2">
            <h4 className="text-[0.625rem] font-[800] font-label text-primary uppercase tracking-[0.3em] flex items-center gap-4 italic whitespace-nowrap">
              <span className="w-4 h-[1px] bg-primary/30 shrink-0" />
              CONTACT_PROTOCOL
            </h4>
            <div className="space-y-8 pl-8">
               <div className="group">
                  <span className="block text-[0.5rem] font-[800] font-label text-on-surface/20 uppercase mb-2 tracking-[0.4em] italic">DIRECT_CHANNEL</span>
                  <a href="mailto:ops@sunfraa.com" className="text-[0.875rem] font-[500] font-label text-on-surface/80 group-hover:text-primary transition-colors duration-500 uppercase tracking-widest italic select-all">ops@sunfraa.com</a>
               </div>
               <div>
                  <span className="block text-[0.5rem] font-[800] font-label text-on-surface/20 uppercase mb-2 tracking-[0.4em] italic">HQ_COORDINATES</span>
                  <p className="text-[0.75rem] font-[500] font-label text-on-surface/40 leading-loose uppercase tracking-[0.2em] italic pr-4">
                    Block B, Corporate Park <br />
                    Ahmedabad, GJ 380001
                  </p>
               </div>
            </div>
          </div>

        </div>

        {/* Legal Strip */}
        <div className="mt-40 pt-16 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-primary animate-pulse" />
             <span className="text-[0.625rem] font-[800] font-label text-on-surface/20 uppercase tracking-[0.3em] italic">
               © {year} Sunfraa Global Pvt Ltd // All Rights Reserved
             </span>
           </div>
           
           <div className="flex gap-12">
              {['Privacy', 'Governance', 'Sitemap'].map((legal, i) => (
                 <Link key={i} href="#" className="relative text-[0.625rem] font-[800] font-label text-on-surface/20 hover:text-on-surface transition-colors uppercase tracking-[0.3em] italic group">
                   {legal}
                   <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-on-surface/10 transition-all duration-500 group-hover:w-full" />
                 </Link>
              ))}
           </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-24 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 right-24 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
    </footer>
  );
}
