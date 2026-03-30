import { Service, WithContext } from 'schema-dts';
import { baseMeta } from '../seo/base-metadata';

export function getServiceSchema(service: {
  name: string;
  description: string;
  url?: string;
  serviceType?: string;
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url || `${baseMeta.siteUrl}/services`,
    provider: {
      '@id': `${baseMeta.siteUrl}/#organization`,
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Gujarat',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    serviceType: service.serviceType || 'Solar Energy',
  };
}
