import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/ui/JsonLd';
import { getOrganizationSchema } from '@/lib/schema/organization';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { baseMeta } from '@/lib/seo/base-metadata';
import { AboutContent } from '@/components/layout/NovaPages';

export const metadata: Metadata = generateMetadata({
  title: 'About Us | Sunfraa Global',
  description: 'Learn about Sunfraa Global — founded in Ahmedabad, Gujarat. Our story, our team, and why 100+ clients trust us with their solar investments.',
  slug: 'about',
});

export default function AboutPage() {
  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: baseMeta.siteUrl },
    { name: 'About', url: `${baseMeta.siteUrl}/about` },
  ]);

  return (
    <>
      <JsonLd schema={[organizationSchema, breadcrumbSchema]} />
      <AboutContent />
    </>
  );
}
