
import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl = 'https://smart-productivity.in';

export const metadata: Metadata = {
  title: {
    default: 'Smart Productivity',
    template: '%s | Smart Productivity',
  },
  description: 'Build focus. Eliminate noise. Do meaningful work.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Smart Productivity',
    description: 'Build focus. Eliminate noise. Do meaningful work.',
    url: siteUrl,
    siteName: 'Smart Productivity',
    images: [
      {
        url: '/logo2.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Productivity',
    description: 'Build focus. Eliminate noise. Do meaningful work.',
    images: ['/logo2.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Smart Productivity',
    url: siteUrl,
    logo: `${siteUrl}/logo2.png`,
    description: 'Build focus. Eliminate noise. Do meaningful work.',
    sameAs: [
      // Add social media links here if available
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };


  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-body antialiased', inter.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
