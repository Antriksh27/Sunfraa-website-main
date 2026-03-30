import { CreativeWork, WithContext } from 'schema-dts';
import { baseMeta } from '../seo/base-metadata';

export function getProjectSchema(project: {
  name: string;
  description: string;
  client: string;
  location: string;
  capacity: string;
  completionDate: string;
}): WithContext<CreativeWork> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    author: {
      '@id': `${baseMeta.siteUrl}/#organization`,
    },
    identifier: {
      '@type': 'PropertyValue',
      name: 'Capacity',
      value: project.capacity,
    },
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    dateCreated: project.completionDate,
    datePublished: project.completionDate,
    keywords: 'Solar Installation, Renewable Energy, Sunfraa Global',
  };
}
