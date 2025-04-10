import { Inter } from 'next/font/google';
import { getDictionary } from '../[locale]/lib/dictionary';
import Header from '../[locale]/components/Header';
import Footer from '../[locale]/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default async function GalleryLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate the language code
  const validLocales = ['en', 'zh'] as const;
  const languageCode = validLocales.includes(locale as any) ? locale : 'en';

  // Get the dictionary for the current locale
  const dictionary = await getDictionary(languageCode as 'en' | 'zh');

  return (
    <html lang={languageCode}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header dictionary={dictionary} locale={languageCode as 'en' | 'zh'} />
          <main className="flex-grow">{children}</main>
          <Footer dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
} 