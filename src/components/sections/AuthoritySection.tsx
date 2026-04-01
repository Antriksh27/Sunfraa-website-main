import React from 'react';
import AuthorityHeadline from './authority/AuthorityHeadline';
import CertificationCard from './authority/CertificationCard';

const certifications = [
  { id: '01', name: 'MNRE Approved', subtitle: 'Government subsidies eligible' },
  { id: '02', name: 'Tier-1 Modules', subtitle: '25-year performance guarantee' },
  { id: '03', name: 'ALMM Compliant', subtitle: 'Govt. mandated standard' },
  { id: '04', name: 'ISO 9001:2015', subtitle: 'Quality management certified' },
  { id: '05', name: 'A++ Rating', subtitle: 'Solar finance grade' },
] as const;

export default function AuthoritySection() {
  return (
    <section
      id="trust"
      aria-label="Industry certifications and compliance"
      className="relative overflow-hidden py-28 md:py-36 isolate"
      style={{ backgroundColor: '#F7F5F0' }}
    >
      {/* SVG Noise Filter */}
      <svg className="sr-only h-0 w-0" aria-hidden="true">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{ filter: 'url(#noise)' }}
        aria-hidden="true"
      />

      {/* Very faint radial primary warmth glow at center */}
      <div
        className="pointer-events-none absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-[0.05]"
        style={{
          background:
            'radial-gradient(ellipse at center, #EA7E26 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="s-container max-w-[1400px] relative z-10">
        {/* Headline block */}
        <AuthorityHeadline />

        {/* Certification cards container */}
        <div
          className="
            mt-16 md:mt-20
            grid gap-4 md:gap-6
            grid-cols-1
            md:grid-cols-3
            lg:flex lg:flex-row lg:justify-between
            authority-cards-wrapper
          "
          style={{ perspective: '1200px' }}
        >
          {certifications.map((cert, i) => (
            <CertificationCard
              key={cert.id}
              id={cert.id}
              name={cert.name}
              subtitle={cert.subtitle}
              index={i}
              className={
                i >= 3
                  ? 'md:col-span-1 md:flex md:justify-center lg:flex-grow lg:max-w-[260px]'
                  : 'md:col-span-1 lg:flex-grow lg:max-w-[260px]'
              }
            />
          ))}
        </div>
        
        {/* Specific layout fix for tablet (3 + 2) */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 768px) and (max-width: 1023px) {
            .authority-cards-wrapper > :nth-child(4) {
              grid-column: 1 / span 3;
              justify-self: center;
              width: fit-content;
              display: flex;
              gap: 24px;
            }
            /* Actually, a cleaner grid approach is better for 3+2 */
            .authority-cards-wrapper {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
            }
            .authority-cards-wrapper > :nth-child(4) {
              grid-column: 1 / span 1.5;
              grid-column-start: 1;
              justify-self: end;
              width: 100%;
              max-width: 280px;
            }
             .authority-cards-wrapper > :nth-child(5) {
              grid-column: span 1.5;
              grid-column-start: 2;
              justify-self: start;
              width: 100%;
              max-width: 280px;
              margin-left: 50%;
            }
          }
        `}} />
      </div>
    </section>
  );
}
