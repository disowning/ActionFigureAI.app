import { Metadata } from 'next';
import { getDictionary } from '../../lib/dictionary';
import { Locale } from '../../../i18n-config';
import FormUpload from './FormUpload';

export const metadata: Metadata = {
  title: 'Create Your Action Figure - ActionFigureAI',
  description: 'Upload your photo and create a personalized AI-generated action figure in different styles.',
};

export default async function Create({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  // Define available action figure styles
  const figureStyles = [
    {
      id: 'superhero',
      name: dictionary.gallery.categories.superhero,
      image: '/placeholder.jpg',
    },
    {
      id: 'scifi',
      name: dictionary.gallery.categories.scifi,
      image: '/placeholder.jpg',
    },
    {
      id: 'fantasy',
      name: dictionary.gallery.categories.fantasy,
      image: '/placeholder.jpg',
    },
    {
      id: 'sports',
      name: dictionary.gallery.categories.sports,
      image: '/placeholder.jpg',
    },
    {
      id: 'space',
      name: dictionary.gallery.categories.space,
      image: '/placeholder.jpg',
    },
    {
      id: 'western',
      name: dictionary.gallery.categories.western,
      image: '/placeholder.jpg',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dictionary.navigation.create}</h1>
            <p className="text-lg md:text-xl mb-8 text-tech">
              {dictionary.hero.subtitle}
            </p>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Create Action Figure Form */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {dictionary.features.title}
                </h2>
                
                <FormUpload dictionary={dictionary} figureStyles={figureStyles} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 