import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Olga Nielsen | Tech Lawyer & Data Compliance Expert',
  description:
    'lga Nielsen is a tech lawyer with 10+ years of experience in GDPR, AI Act, NIS2, and data compliance. She specializes in AI, cybersecurity, and digital regulations.',
  keywords: [
    'Olga Nielsen',
    'Tech Lawyer',
    'Data Protection',
    'GDPR Expert',
    'AI Act',
    'NIS2',
    'Cybersecurity',
    'Data Compliance',
    'Digital Law',
    'Information Security',
    'DPO as a Service',
  ].join(', '),
  authors: [{ name: 'Olga Nielsen', url: 'https://olganielsen.com' }],
  openGraph: {
    title: 'Olga Nielsen | Tech Lawyer & Data Compliance Expert',
    description:
      'Tech lawyer with expertise in GDPR, AI, cybersecurity, and data compliance. Helping businesses navigate EU digital regulations.',
    url: 'https://olganielsen.com',
    siteName: 'Olga Nielsen - Tech Lawyer',
    type: 'profile',
  },

  alternates: {
    canonical: 'https://olganielsen.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
