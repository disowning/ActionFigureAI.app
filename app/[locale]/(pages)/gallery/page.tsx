import { Metadata } from 'next';
import { getDictionary } from '../../lib/dictionary';
import { Locale } from '../../../i18n-config';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery - ActionFigureAI',
  description: 'Browse our collection of AI-generated personalized action figures created using our platform.',
};

export default async function Gallery({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  // Sample gallery items - in a real app, these would come from a database or API
  const galleryItems = [
    {
      id: 1,
      title: 'Superhero Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.superhero,
    },
    {
      id: 2,
      title: 'Sci-Fi Robot Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.scifi,
    },
    {
      id: 3,
      title: 'Fantasy Warrior Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.fantasy,
    },
    {
      id: 4,
      title: 'Sports Star Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.sports,
    },
    {
      id: 5,
      title: 'Astronaut Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.space,
    },
    {
      id: 6,
      title: 'Western Cowboy Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.western,
    },
    {
      id: 7,
      title: 'Ninja Warrior Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.martialArts,
    },
    {
      id: 8,
      title: 'Medieval Knight Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.medieval,
    },
    {
      id: 9,
      title: 'Pirate Captain Action Figure',
      image: '/placeholder.jpg',
      category: dictionary.gallery.categories.pirates,
    },
  ];

  // Categories for filtering
  const categories = [
    dictionary.gallery.categories.all,
    dictionary.gallery.categories.superhero,
    dictionary.gallery.categories.scifi,
    dictionary.gallery.categories.fantasy,
    dictionary.gallery.categories.sports,
    dictionary.gallery.categories.space,
    dictionary.gallery.categories.western,
    dictionary.gallery.categories.martialArts,
    dictionary.gallery.categories.medieval,
    dictionary.gallery.categories.pirates
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dictionary.gallery.title}</h1>
            <p className="text-lg md:text-xl mb-8 text-tech">
              {dictionary.gallery.subtitle}
            </p>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                  index === 0
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md aspect-square bg-tech-dark hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-medium">{item.title}</h3>
                    <p className="text-tech text-sm">{item.category}</p>
                  </div>
                  
                  {/* Placeholder for image */}
                  <div className="flex items-center justify-center h-full w-full">
                    <svg
                      className="w-12 h-12 text-tech"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Your Own CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.gallery.createYourOwn.title}</h2>
            <p className="text-lg md:text-xl mb-8 text-tech">
              {dictionary.gallery.createYourOwn.subtitle}
            </p>
            <Link
              href={`/${locale}/create`}
              className="btn-secondary text-lg px-8 py-3"
            >
              {dictionary.gallery.createYourOwn.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 