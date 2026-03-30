import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/ui/JsonLd';
import { getLocalBusinessSchema } from '@/lib/schema/local-business';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { baseMeta } from '@/lib/seo/base-metadata';
import ContactContent from '@/components/layout/ContactContent';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Sunfraa Global | Solar EPC Enquiries',
  description: 'Get in touch with Sunfraa Global for solar EPC, O&M or rooftop solar enquiries. Based in Ahmedabad, Gujarat. Call, WhatsApp or fill the enquiry form.',
  slug: 'contact',
});

export default function ContactPage() {
  const localBusinessSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: baseMeta.siteUrl },
    { name: 'Contact', url: `${baseMeta.siteUrl}/contact` },
  ]);

  return (
    <>
      <JsonLd schema={[localBusinessSchema, breadcrumbSchema]} />
      <ContactContent />
    </>
  );
}
