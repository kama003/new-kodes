import type { Metadata } from 'next';
import './globals.css'; // Global styles
import { GoogleTagManager } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: 'My Google AI Studio App',
  description: 'My Google AI Studio App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <GoogleTagManager gtmId="G-XMC42YP9VE" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
