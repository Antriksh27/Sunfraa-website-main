import React, { useRef } from 'react';
import AuthorityHeadline from './authority/AuthorityHeadline';
import CertificationCard from './authority/CertificationCard';
import { cn } from '@/lib/utils/cn';

const certifications = [
  { id: '01', name: 'MNRE Approved', subtitle: 'Government subsidies eligible' },
  { id: '02', name: 'Tier-1 Modules', subtitle: '25-year performance guarantee' },
  { id: '03', name: 'ALMM Compliant', subtitle: 'Govt. mandated standard' },
  { id: '04', name: 'ISO 9001:2015', subtitle: 'Quality management certified' },
  { id: '05', name: 'A++ Rating', subtitle: 'Solar finance grade' },
] as const;

export default function AuthoritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="trust"
      aria-label="Industry certifications and compliance"
      className="s-section s-section-full s-theme-white !p-0 flex items-center justify-center min-h-screen lg:h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
 
      {/* Background Thermal Hint */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
 
      <div className="s-container relative z-20 w-full h-full flex flex-col justify-center py-2 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1">
          
          {/* Left Column: Headline (4/12) */}
          <div className="lg:col-span-4 self-center">
            <AuthorityHeadline />
          </div>
 
          {/* Right Column: 3 over 2 Alignment (8/12) */}
          <div className="lg:col-span-8 flex flex-col gap-y-6 lg:gap-y-6 lg:ml-auto w-full">
            {/* Top Row: 3 Boxes */}
            <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 items-center">
              {certifications.slice(0, 3).map((cert, i) => (
                <CertificationCard
                  key={cert.id}
                  name={cert.name}
                  subtitle={cert.subtitle}
                  index={i}
                  className="relative"
                />
              ))}
            </div>
            
            {/* Bottom Row: 2 Boxes - Aligned Properly */}
            <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 lg:mr-24 items-center">
               {certifications.slice(3, 5).map((cert, i) => (
                <CertificationCard
                  key={cert.id}
                  name={cert.name}
                  subtitle={cert.subtitle}
                  index={i + 3}
                  className="relative"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
