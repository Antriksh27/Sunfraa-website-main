import type { Metadata, Viewport } from "next";
import { spaceGrotesk, inter, jetBrainsMono } from "@/lib/utils/fonts";
import "@/styles/globals.css";
import { baseMeta } from "@/lib/seo/base-metadata";
import JsonLd from "@/components/ui/JsonLd";
import { getOrganizationSchema } from "@/lib/schema/organization";
import { getLocalBusinessSchema } from "@/lib/schema/local-business";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/animations/Preloader";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(baseMeta.siteUrl),
  title: {
    default: baseMeta.defaultTitle,
    template: `%s | ${baseMeta.siteName}`,
  },
  description: baseMeta.defaultDescription,
  openGraph: {
    title: baseMeta.defaultTitle,
    description: baseMeta.defaultDescription,
    url: baseMeta.siteUrl,
    siteName: baseMeta.siteName,
    locale: baseMeta.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: baseMeta.defaultTitle,
    description: baseMeta.defaultDescription,
    creator: baseMeta.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} scroll-smooth`}
    >
      <head>
        <JsonLd schema={[organizationSchema, localBusinessSchema]} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="antialiased bg-background text-on-background selection:bg-nova-gold selection:text-on-primary overflow-x-hidden">
        <Preloader />
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-0 left-0 p-4 bg-nova-gold text-on-primary z-[100]"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="relative min-h-screen">
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>

        <Footer />
      </body>
    </html>
  );
}
