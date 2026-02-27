import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"
import './globals.css'; // Global styles
import { GoogleTagManager } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: 'Kodes Tech – Automation & IT Support',
  description: 'We help small businesses automate leads, WhatsApp replies, and CRM systems. Website maintenance, AI chatbots, and monthly technical support.',
  keywords: ['automation', 'IT support', 'WhatsApp automation', 'CRM', 'website maintenance', 'AI chatbots', 'technical support', 'small business'],
  authors: [{ name: 'Kodes Tech' }],
  creator: 'Kodes Tech',
  publisher: 'Kodes Tech',
  openGraph: {
    title: 'Kodes Tech – Automation & IT Support',
    description: 'We help small businesses automate leads, WhatsApp replies, and CRM systems. Website maintenance, AI chatbots, and monthly technical support.',
    url: 'https://kodes.in',
    siteName: 'Kodes Tech',
    images: [
      {
        url: 'https://kodes.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kodes Tech – Automation & IT Support',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kodes Tech – Automation & IT Support',
    description: 'We help small businesses automate leads, WhatsApp replies, and CRM systems. Website maintenance, AI chatbots, and monthly technical support.',
    images: ['https://kodes.in/og-image.png'],
    creator: '@kodes_tech',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <GoogleTagManager gtmId="G-XMC42YP9VE" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />

      </head>
      <body suppressHydrationWarning>{children}
        <Analytics />
      </body>
    </html>
  );
}
