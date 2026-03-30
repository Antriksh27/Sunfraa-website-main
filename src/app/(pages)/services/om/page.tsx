import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/ui/JsonLd';
import { getServiceSchema } from '@/lib/schema/service';
import { getFAQSchema } from '@/lib/schema/faq';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { baseMeta } from '@/lib/seo/base-metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Solar O&M Services | Sunfraa Global',
  description: 'Solar operations and maintenance services across Gujarat. Performance monitoring, preventive maintenance and SLA-backed support by Sunfraa Global.',
  slug: 'services/om',
});

export default function OmPage() {
  const serviceSchema = getServiceSchema({
    name: 'Solar O&M Services',
    description: 'Expert operation and maintenance for peak efficiency.',
    url: `${baseMeta.siteUrl}/services/om`,
  });
  const faqSchema = getFAQSchema([]);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: baseMeta.siteUrl },
    { name: 'Services', url: `${baseMeta.siteUrl}/services/om` },
    { name: 'O&M', url: `${baseMeta.siteUrl}/services/om` },
  ]);

  return (
    <>
      <JsonLd schema={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-5xl lg:text-7xl font-[family-name:var(--font-display)] text-[var(--color-gold)] mb-8 uppercase">
          O&M Services
        </h1>
        <p className="text-xl text-[var(--color-muted)] max-w-2xl">
          TODO: Implement O&M Service Page - Performance monitoring and preventive maintenance.
        </p>
      </div>
    </>
  );
}
