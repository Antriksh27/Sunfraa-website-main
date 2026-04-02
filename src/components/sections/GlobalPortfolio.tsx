'use client';

import React, { useEffect, useState } from 'react';
import FadeUp from '@/components/animations/FadeUp';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const portfolioItems = [
  {
    id: 'surat-textile',
    title: 'Surat Textile Hub',
    type: 'Industrial · 150 kW',
    description:
      'A massive rooftop deployment across 3 industrial sheds, slashing energy costs by ₹1.2L/month and achieving full ROI in just 3.4 years.',
    savings: '₹1.2L / mo',
    payback: '3.4 Yrs',
    image:
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'rajkot-residence',
    title: 'Rajkot Residence',
    type: 'Residential · 12 kW',
    description:
      'A premium residential installation with ALMM-compliant modules, eliminating ₹14,000/month electricity bills with a sleek, zero-intrusion design.',
    savings: '₹14K / mo',
    payback: '4.5 Yrs',
    image:
      'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'ahmedabad-pharma',
    title: 'Ahmedabad Pharma Plant',
    type: 'Ground Mount · 500 kW',
    description:
      'A utility-scale ground mount deployment for a tier-1 pharmaceutical manufacturer, delivering 40% accelerated depreciation benefits.',
    savings: '₹5.8L / mo',
    payback: '3.1 Yrs',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'gandhinagar-school',
    title: 'Gandhinagar Campus',
    type: 'Institutional · 80 kW',
    description:
      'Solar-powered smart campus for a leading educational institution, featuring real-time IoT energy monitoring and PM Surya Ghar subsidy integration.',
    savings: '₹72K / mo',
    payback: '4.0 Yrs',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'vadodara-factory',
    title: 'Vadodara Factory Complex',
    type: 'Industrial · 1.2 MW',
    description:
      'Megawatt-scale industrial deployment with cyclone-resistant hot-dip galvanized structures, net-metering, and 25-year performance warranty.',
    savings: '₹9.4L / mo',
    payback: '2.8 Yrs',
    image:
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function GlobalPortfolio() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    update();
    carouselApi.on('select', update);
    return () => { carouselApi.off('select', update); };
  }, [carouselApi]);

  return (
    <section
      id="portfolio"
      className="s-section s-section-full s-theme-white !p-0 flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Atmospheric Glow */}
      <div className="s-glow-primary top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="s-container max-w-[1400px] w-full h-full flex flex-col justify-around py-6 lg:py-10 relative z-20">
 
        {/* ── Header Row ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <FadeUp delay={0.1} className="max-w-3xl">
            <div className="flex items-center s-label mb-2 !text-zinc-600 font-black">
              <span className="w-8 h-px bg-primary/50 mr-4" />
              Global Impact
            </div>
            <h2 className="s-h1 !text-zinc-900 !text-[clamp(2rem,5vw,3.5rem)] !leading-[0.9] !tracking-tighter uppercase font-black">
              Our <br />
              <span className="text-primary italic lowercase font-body font-light tracking-tight">Deployments.</span>
            </h2>
          </FadeUp>

          {/* Navigation Arrows (Industrial HUD) */}
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-px">
               <button
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-16 h-16 bg-white border border-black/10 text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-all active:scale-95 disabled:opacity-30 cursor-pointer shadow-sm"
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-6 h-6 stroke-[2]" />
              </button>
              <button
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="w-16 h-16 bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-30 cursor-pointer shadow-[0_10px_40px_rgba(234,126,38,0.2)] border border-primary/20"
                aria-label="Next Project"
              >
                <ArrowRight className="w-6 h-6 stroke-[2]" />
              </button>
            </div>
          </FadeUp>
        </div>

        {/* ── Carousel ───────────────────────────────── */}
        <FadeUp delay={0.3}>
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: 'start',
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 lg:-ml-10">
              {portfolioItems.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-6 lg:pl-10 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[40%]"
                >
                  <div className="group relative aspect-[4/3] rounded-none overflow-hidden bg-zinc-200 shadow-[0_45px_110px_-25px_rgba(0,0,0,0.15)] border border-black/10 cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.4] group-hover:grayscale-0 brightness-[0.85] group-hover:brightness-100"
                    />
 
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.95] via-black/[0.4] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                      <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                         <span className="s-mono !text-primary !opacity-100 mb-2 block !text-[10px] font-black tracking-widest uppercase">
                           {project.type}
                         </span>
                          <h3 className="s-h3 !text-white !text-2xl lg:!text-3xl uppercase font-black tracking-tighter">
                            {project.title}
                          </h3>
                       </div>
 
                       {/* Stats row — always visible or reveal on hover? User wants perfection, so better hover contrast */}
                       <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                          <div>
                            <span className="s-body !text-zinc-300 block !text-[9.5px] font-black tracking-[0.2em] mb-2 uppercase">
                              SAVINGS
                            </span>
                            <span className="text-xl font-black text-white tracking-tighter">
                              {project.savings}
                            </span>
                         </div>
                         <div>
                            <span className="s-body !text-zinc-300 block !text-[9.5px] font-black tracking-[0.2em] mb-2 uppercase">
                              ROI PERIOD
                            </span>
                           <span className="text-xl font-black text-white tracking-tighter">
                             {project.payback}
                           </span>
                         </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </FadeUp>

        {/* ── Pagination Dots ──────────── */}
        <FadeUp delay={0.4} className="flex justify-center">
          <div className="flex justify-center gap-3">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                 className={`h-1.5 rounded-none transition-all duration-700 border border-black/5 ${
                  currentSlide === index
                    ? 'w-16 bg-primary shadow-[0_0_15px_rgba(234,126,38,0.3)]'
                    : 'w-6 bg-black/10 hover:bg-black/20'
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
