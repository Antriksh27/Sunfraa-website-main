import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/ui/JsonLd';
import { getServiceSchema } from '@/lib/schema/service';
import { getFAQSchema } from '@/lib/schema/faq';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { baseMeta } from '@/lib/seo/base-metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Rooftop Solar Installation in Ahmedabad | Sunfraa Global',
  description: 'Rooftop solar installation for homes, societies and commercial buildings in Ahmedabad and Gujarat. Turnkey solutions by Sunfraa Global.',
  slug: 'services/rooftop',
});

export default function RooftopPage() {
  const serviceSchema = getServiceSchema({
    name: 'Rooftop Solar Installation',
    description: 'Commercial and industrial rooftop installations.',
    url: `${baseMeta.siteUrl}/services/rooftop`,
  });
  const faqSchema = getFAQSchema([]);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: baseMeta.siteUrl },
    { name: 'Services', url: `${baseMeta.siteUrl}/services/rooftop` },
    { name: 'Rooftop Solar', url: `${baseMeta.siteUrl}/services/rooftop` },
  ]);

  return (
    <>
      <JsonLd schema={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-5xl lg:text-7xl font-[family-name:var(--font-display)] text-[var(--color-gold)] mb-8 uppercase">
          Rooftop Solar
        </h1>
        <p className="text-xl text-[var(--color-muted)] max-w-2xl">
          TODO: Implement Rooftop Solar Page - Commercial and residential installation details.
        </p>
      </div>
    </>
  );
}
