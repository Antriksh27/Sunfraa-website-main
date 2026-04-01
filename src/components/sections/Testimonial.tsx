'use client';

import React from 'react';
import { AnimatedTestimonials } from '@/components/ui/testimonial';
import type { Testimonial } from '@/components/ui/testimonial';

const sunfraaTestimonials: Testimonial[] = [
  {
    quote:
      'Sunfraa completely eliminated our ₹12,000 monthly electricity bill. The PM Surya Ghar subsidy process was handled flawlessly — we didn\'t have to chase a single document.',
    name: 'Rajesh Sharma',
    designation: 'Residential Owner, Jaipur',
    src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'We installed a 100kW rooftop system for our textile unit. The ALMM-compliant panels and heavy-duty cyclone-rated structures give us immense confidence in our investment.',
    name: 'Anjali Desai',
    designation: 'Textile Manufacturing, Surat',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'Sunfraa\'s engineering team designed a ground-mount solution for our 5-acre site that maximises generation while keeping our land accessible. Truly world-class execution.',
    name: 'Vikram Patel',
    designation: 'Agricultural Landowner, Ahmedabad',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'From survey to commissioning, Sunfraa delivered our 250kW commercial plant in under 45 days. Their project management and after-sales monitoring are outstanding.',
    name: 'Meera Krishnan',
    designation: 'Operations Head, Chennai IT Park',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The ROI was almost immediate — within 3 years we\'ll have recovered our entire investment. Sunfraa\'s transparent pricing and Tier-1 components set them apart.',
    name: 'Arjun Mehta',
    designation: 'CFO, Apex Group of Industries',
    src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="min-h-[100dvh] lg:min-h-screen flex flex-col justify-center bg-white-container relative overflow-hidden text-black"
    >
      {/* Animated grid background */}
      <style>
        {`
          @keyframes testimonial-grid {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .testimonial-animated-grid {
            width: 200%;
            height: 200%;
            background-image: 
              linear-gradient(to right, #e2e8f0 1px, transparent 1px), 
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
            background-size: 3rem 3rem;
            animation: testimonial-grid 40s linear infinite alternate;
          }
        `}
      </style>
      <div className="testimonial-animated-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />

      {/* Section Header */}
      <div className="s-container max-w-[1400px] relative z-10 pt-12 lg:pt-0">
        <div className="inline-flex items-center text-[var(--color-primary)] font-bold text-[10px] tracking-[0.2em] uppercase mb-2">
          <span className="w-8 h-px bg-[var(--color-primary)] mr-4"></span>
          Client Success
        </div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial">
          Trusted by Thousands<br />
          <span className="text-gray-400">of Indian Homes &amp; Businesses.</span>
        </h2>
      </div>

      {/* Animated Testimonials */}
      <div className="relative z-10">
        <AnimatedTestimonials testimonials={sunfraaTestimonials} autoplay />
      </div>
    </section>
  );
}
