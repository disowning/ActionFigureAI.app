import { Metadata } from 'next';
import { getDictionary } from './lib/dictionary';
import { Locale } from '../i18n-config';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturedGallery from './components/FeaturedGallery';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'ActionFigureAI - Transform Yourself Into an Action Figure',
  description: 'Upload your photo and let AI create a personalized action figure. Choose styles and customize your own unique action figure.',
};

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <div>
      <Hero dictionary={dictionary} locale={locale} />
      <HowItWorks dictionary={dictionary} />
      <FeaturedGallery dictionary={dictionary} locale={locale} />
      <Testimonials dictionary={dictionary} />
      <NewsletterSignup dictionary={dictionary} />
    </div>
  );
} 