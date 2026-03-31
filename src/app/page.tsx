'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import CredibilityStrip from '@/components/sections/CredibilityStrip';
import ProblemFraming from '@/components/sections/ProblemFraming';
import OutcomeShift from '@/components/sections/OutcomeShift';
import BenefitsGrid from '@/components/sections/BenefitsGrid';
import RooftopSolar from '@/components/sections/RooftopSolar';
import GroundMountSolar from '@/components/sections/GroundMountSolar';
import GlobalPortfolio from '@/components/sections/GlobalPortfolio';
import ProcessJourney from '@/components/sections/ProcessJourney';
import ServicesBento from '@/components/sections/ServicesBento';
import ROIPanel from '@/components/sections/ROIPanel';
import InfrastructureSuite from '@/components/sections/InfrastructureSuite';
import Testimonial from '@/components/sections/Testimonial';
import SunfraaEdge from '@/components/sections/SunfraaEdge';
import TechnicalFAQ from '@/components/sections/TechnicalFAQ';
import AuthorityPartners from '@/components/sections/AuthorityPartners';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ProblemFraming />
      <OutcomeShift />
      <BenefitsGrid />
      <RooftopSolar />
      <GroundMountSolar />
      <GlobalPortfolio />
      <ProcessJourney />
      <ServicesBento />
      <ROIPanel />
      <InfrastructureSuite />
      <Testimonial />
      <SunfraaEdge />
      <TechnicalFAQ />
      <AuthorityPartners />
      <FinalCTA />
    </>
  );
}
