import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/ui/JsonLd';
import { getOrganizationSchema } from '@/lib/schema/organization';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { baseMeta } from '@/lib/seo/base-metadata';
import { ProjectsContent } from '@/components/layout/NovaPages';

export const metadata: Metadata = generateMetadata({
  title: 'Solar Projects Portfolio | Sunfraa Global',
  description: "Explore Sunfraa Global's portfolio of 100+ solar installations across Gujarat. Industrial, commercial and residential projects with real capacity and savings data.",
  slug: 'projects',
});

export default function ProjectsPage() {
  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: baseMeta.siteUrl },
    { name: 'Projects', url: `${baseMeta.siteUrl}/projects` },
  ]);

  return (
    <>
      <JsonLd schema={[organizationSchema, breadcrumbSchema]} />
      <ProjectsContent />
    </>
  );
}
