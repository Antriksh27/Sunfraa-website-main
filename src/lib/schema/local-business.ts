import { LocalBusiness, ProfessionalService, WithContext } from 'schema-dts';
import { getOrganizationSchema } from './organization';

export function getLocalBusinessSchema(): WithContext<LocalBusiness | ProfessionalService> {
  const organizationSchema = getOrganizationSchema() as any;
  
  return {
    ...organizationSchema,
    '@type': ['LocalBusiness', 'ProfessionalService'],
    priceRange: '₹₹₹',
    openingHours: 'Mo-Sa 09:00-18:00',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714,
    },
    hasMap: 'https://goo.gl/maps/placeholder',
  };
}
