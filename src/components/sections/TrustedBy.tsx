'use client';

import React from 'react';
import FadeUp from '@/components/animations/FadeUp';
import { LogoCloud } from '@/components/ui/logo-cloud-3';

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk",
  },
];

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="relative flex flex-col items-center justify-center py-16 lg:py-24 bg-dark-container overflow-hidden"
    >
      {/* Subtle radial glow behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[40vmin] rounded-full opacity-[0.07]"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-primary), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="s-container max-w-[1400px] relative z-10">
        <FadeUp delay={0.1}>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.3em] uppercase">
              <span className="w-8 h-px bg-primary mr-4"></span>
              Industry Leaders
              <span className="w-8 h-px bg-primary ml-4"></span>
            </div>

            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-white text-center tracking-tight-editorial leading-tight">
              Trusted by Experts.{' '}
              <br />
              <span className="text-gray-500">Used by the Leaders.</span>
            </h2>

            <div className="mx-auto h-px w-full max-w-sm bg-white/10 [mask-image:linear-gradient(to_right,transparent,white,transparent)]" />
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <LogoCloud
            logos={logos}
            className="[&_img]:brightness-0 [&_img]:invert [&_img]:opacity-50 [&_img]:hover:opacity-80 [&_img]:transition-opacity"
          />
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="mt-8 h-px w-full bg-white/10 [mask-image:linear-gradient(to_right,transparent,white,transparent)]" />
        </FadeUp>
      </div>
    </section>
  );
}
