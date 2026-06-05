import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AllsafeAfrica | Securing Africa\'s Digital Future',
  description:
    'AllsafeAfrica is Africa\'s Digital Trust Ecosystem delivering cybersecurity, compliance, ESG innovation, talent development, media, and digital inclusion initiatives.',
  keywords: [
    'Cybersecurity Africa',
    'SCOPD',
    'Digital Trust',
    'Cyber Hub',
    'GreenGuard AI',
    'CyberWakanda',
    'Compliance',
    'ESG',
    'Digital Inclusion',
    'Cyber Training',
  ],
  openGraph: {
    title: 'AllsafeAfrica | Africa\'s Digital Trust Ecosystem',
    description:
      'Securing Africa. Empowering Talent. Building the Future.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllsafeAfrica | Securing Africa\'s Digital Future',
    description: 'Africa\'s Digital Trust Ecosystem',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%2300B8FF'>A</text></svg>" />
      </head>
      <body className="bg-cyber-black text-text-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
