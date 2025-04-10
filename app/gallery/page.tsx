import { getDictionary } from '@/app/lib/dictionary'
import { Locale } from '@/app/i18n-config'
import Image from 'next/image'
import Link from 'next/link'

// This would typically come from your database or API
const MOCK_FIGURES = [
  {
    id: 1,
    name: 'Superhero Figure',
    category: 'superhero',
    imageUrl: '/placeholder-1.jpg',
  },
  {
    id: 2,
    name: 'Sci-Fi Warrior',
    category: 'scifi',
    imageUrl: '/placeholder-2.jpg',
  },
  // Add more mock data as needed
]

export default async function GalleryPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // 确保 lang 是有效的语言代码
  const validLang = lang === 'en' || lang === 'zh' ? lang : 'en';
  const dict = await getDictionary(validLang)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {dict.gallery.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">{dict.gallery.subtitle}</p>
          <Link
            href="/create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            {dict.hero.cta}
          </Link>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {Object.entries(dict.gallery.categories).map(([key, label]) => (
              <button
                key={key}
                className="px-6 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_FIGURES.map((figure) => (
              <div
                key={figure.id}
                className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={figure.imageUrl}
                    alt={figure.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{figure.name}</h3>
                    <p className="text-gray-300">
                      {dict.gallery.categories[figure.category as keyof typeof dict.gallery.categories]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.gallery.createYourOwn.title}
          </h2>
          <p className="text-xl mb-8">{dict.gallery.createYourOwn.subtitle}</p>
          <Link
            href="/create"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            {dict.gallery.createYourOwn.cta}
          </Link>
        </div>
      </section>
    </main>
  )
} 