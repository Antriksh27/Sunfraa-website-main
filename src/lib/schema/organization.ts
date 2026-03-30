import { Organization, WithContext } from 'schema-dts';
import { baseMeta } from '../seo/base-metadata';

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseMeta.siteUrl}/#organization`,
    name: baseMeta.siteName,
    url: baseMeta.siteUrl,
    logo: `${baseMeta.siteUrl}/images/logo.png`,
    description: baseMeta.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    sameAs: [
      'https://www.linkedin.com/company/sunfraaglobal',
      'https://www.facebook.com/sunfraaglobal',
    ],
    foundingDate: '2017',
  };
}
