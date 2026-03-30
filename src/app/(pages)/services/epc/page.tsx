import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/ui/JsonLd';
import { getServiceSchema } from '@/lib/schema/service';
import { getFAQSchema } from '@/lib/schema/faq';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { baseMeta } from '@/lib/seo/base-metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Solar EPC Services in Gujarat | Sunfraa Global',
  description: 'End-to-end solar EPC services for industrial and commercial clients in Gujarat. Engineering, procurement, installation and commissioning by Sunfraa Global.',
  slug: 'services/epc',
});

export default function EpcPage() {
  const serviceSchema = getServiceSchema({
    name: 'Solar EPC Services',
    description: 'Utility-scale and commercial industrial solar energy solutions.',
    url: `${baseMeta.siteUrl}/services/epc`,
  });
  const faqSchema = getFAQSchema([]); // Empty for now
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: baseMeta.siteUrl },
    { name: 'Services', url: `${baseMeta.siteUrl}/services/epc` }, // Simplified for skeleton
    { name: 'EPC', url: `${baseMeta.siteUrl}/services/epc` },
  ]);

  return (
    <>
      <JsonLd schema={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-5xl lg:text-7xl font-[family-name:var(--font-display)] text-[var(--color-gold)] mb-8 uppercase">
          EPC Services
        </h1>
        <p className="text-xl text-[var(--color-muted)] max-w-2xl">
          TODO: Implement EPC Service Page - Large-scale deployments, Engineering and procurement details.
        </p>
      </div>
    </>
  );
}
