'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';

import ProblemFraming from '@/components/sections/ProblemFraming';
import OutcomeShift from '@/components/sections/OutcomeShift';
import BenefitsGrid from '@/components/sections/BenefitsGrid';
import SolutionAlpha from '@/components/sections/SolutionAlpha';
import RooftopSolar from '@/components/sections/RooftopSolar';
import GlobalPortfolio from '@/components/sections/GlobalPortfolio';
import ProcessJourney from '@/components/sections/ProcessJourney';
import ServicesBento from '@/components/sections/ServicesBento';
import ROIPanel from '@/components/sections/ROIPanel';
import InfrastructureSuite from '@/components/sections/InfrastructureSuite';
import Testimonial from '@/components/sections/Testimonial';
import SunfraaEdge from '@/components/sections/SunfraaEdge';
import TrustedBy from '@/components/sections/TrustedBy';
import TechnicalFAQ from '@/components/sections/TechnicalFAQ';
import AuthoritySection from '@/components/sections/AuthoritySection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemFraming />
      <OutcomeShift />
      <SolutionAlpha />
      <AuthoritySection />
      <BenefitsGrid />
      <RooftopSolar />
      <GlobalPortfolio />
      <ProcessJourney />
      <ServicesBento />
      <ROIPanel />
      <InfrastructureSuite />
      <SunfraaEdge />
      <Testimonial />
      <TrustedBy />
      <TechnicalFAQ />
      <FinalCTA />
    </>
  );
}
