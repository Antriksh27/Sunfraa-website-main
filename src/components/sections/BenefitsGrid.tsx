'use client';

import { Features } from '@/components/ui/features';
import { ShieldCheck, Zap, Award } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Monsoon & Cyclone Ready',
    description:
      'Our mounting structures are aerodynamically designed and hot-dip galvanized to withstand wind speeds up to 170 km/h, ensuring your investment remains secure during extreme Indian monsoons.',
    image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Tier-1 ALMM Modules',
    description:
      'We strictly deploy DCR (Domestic Content Requirement) compliant panels that feature Half-Cut Cell technology and advanced bypass diodes to prevent energy loss from urban shading and dust accumulation.',
    image: 'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    icon: Award,
    title: '25-Year Performance Warranty',
    description:
      'Sunfraa guarantees a linear performance reduction of no more than 0.5% per year. Unlike local vendors, our warranties are backed by international insurers, giving you complete peace of mind for decades.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function BenefitsGrid() {
  return (
    <section id="features" className="min-h-[100dvh] lg:min-h-screen flex flex-col justify-center bg-soft-container relative overflow-hidden">
      <Features
        features={features}
        primaryColor="primary"
        progressGradientLight="bg-gradient-to-r from-primary to-primary-light"
        progressGradientDark="bg-gradient-to-r from-primary-light to-primary"
      />
    </section>
  );
}
