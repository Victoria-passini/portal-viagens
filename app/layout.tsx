import type { Metadata } from 'next';
import './globals.css';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Portal de Viagens',
  description: 'Explore destinos incríveis ao redor do mundo!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {
        <Layout>
          {children}
        </Layout>
      }</body>
    </html>
  );
}

