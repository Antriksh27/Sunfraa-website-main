import { Metadata } from 'next';
import { baseMeta } from './base-metadata';

interface SeoProps {
  title: string;
  description: string;
  slug: string;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  slug,
  ogImage = '/og-default.jpg',
}: SeoProps): Metadata {
  const url = `${baseMeta.siteUrl}/${slug}`;
  const fullTitle = `${title} | ${baseMeta.siteName}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url,
      siteName: baseMeta.siteName,
      locale: baseMeta.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: baseMeta.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
