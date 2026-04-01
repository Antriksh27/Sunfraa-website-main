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
      className="min-h-[100dvh] lg:h-screen flex flex-col justify-center py-8 lg:py-0 bg-soft-container relative overflow-hidden"
    >
      <div className="s-container max-w-[1400px]">

        {/* ── Header Row ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-4 lg:mb-6 gap-4">
          <FadeUp delay={0.1} className="max-w-3xl">
            <div className="inline-flex items-center text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-3 lg:mb-4">
              <span className="w-8 h-px bg-primary mr-4" />
              Our Work
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black leading-[1.05] tracking-tight-editorial">
              Proven <br />
              <span className="text-gray-400 font-light">Deployments.</span>
            </h2>
          </FadeUp>

          {/* Navigation Arrows (Testimonial-style) */}
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-black flex items-center justify-center hover:bg-gray-50 transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.05)] disabled:opacity-30"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full liquid-gradient-orange text-white flex items-center justify-center hover:scale-105 transition-transform shadow-xl shadow-orange-500/30 disabled:opacity-30"
              >
                <ArrowRight className="w-5 h-5" />
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
          >
            <CarouselContent className="-ml-4 lg:-ml-6">
              {portfolioItems.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 lg:pl-6 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[40%]"
                >
                  <div className="group relative aspect-[3/2] rounded-massive overflow-hidden bg-black/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-black/5 cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                      <div className="mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                        <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-primary mb-1 block">
                          {project.type}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight-editorial">
                          {project.title}
                        </h3>
                      </div>

                      {/* Stats row — reveal on hover */}
                      <div className="grid grid-cols-2 gap-4 pt-3 lg:pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                        <div>
                          <span className="text-[0.55rem] font-semibold text-gray-300 uppercase tracking-widest block mb-1">
                            ANNUAL SAVINGS
                          </span>
                          <span className="text-sm lg:text-base font-bold text-white">
                            {project.savings}
                          </span>
                        </div>
                        <div>
                          <span className="text-[0.55rem] font-semibold text-gray-300 uppercase tracking-widest block mb-1">
                            ROI PERIOD
                          </span>
                          <span className="text-sm lg:text-base font-bold text-white">
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

        {/* ── Pagination Dots + Drag Label ──────────── */}
        <FadeUp delay={0.4} className="flex flex-col items-center mt-6 gap-3">
          <div className="flex justify-center gap-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? 'w-6 bg-primary'
                    : 'w-1.5 bg-black/10 hover:bg-black/20'
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-semibold">
            Drag to explore
          </span>
        </FadeUp>

      </div>
    </section>
  );
}
