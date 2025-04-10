import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { i18n, Locale } from '../i18n-config';
import Header from './components/Header';
import Footer from './components/Footer';
import { getDictionary } from './lib/dictionary';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
  
  return {
    title: 'ActionFigureAI - Transform Yourself Into an Action Figure',
    description: 'Upload your photo and let AI create a personalized action figure. Choose styles and customize your own unique action figure.',
    keywords: 'action figure, AI, personalized, custom, 3D model, avatar, action figure generator',
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(params.locale);

  return (
    <html lang={params.locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header dictionary={dictionary} locale={params.locale} />
          <main className="flex-grow">{children}</main>
          <Footer dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
} 