'use client';

import Link from 'next/link';
import { Locale } from '../../i18n-config';

interface FeaturedGalleryProps {
  dictionary: any;
  locale: Locale;
}

export default function FeaturedGallery({ dictionary, locale }: FeaturedGalleryProps) {
  // Sample gallery items - in a real app, these would come from a database or API
  const galleryItems = [
    {
      id: 1,
      title: 'Superhero Action Figure',
      image: '/placeholder.jpg',
      category: 'Superhero',
    },
    {
      id: 2,
      title: 'Sci-Fi Robot Action Figure',
      image: '/placeholder.jpg',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'Fantasy Warrior Action Figure',
      image: '/placeholder.jpg',
      category: 'Fantasy',
    },
    {
      id: 4,
      title: 'Sports Star Action Figure',
      image: '/placeholder.jpg',
      category: 'Sports',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="gallery">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.gallery.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {dictionary.gallery.subtitle}
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="text-center mt-12">
          <Link href={`/${locale}/gallery`} className="btn-primary">
            {dictionary.gallery.viewMore}
          </Link>
        </div>
      </div>
    </section>
  );
} 