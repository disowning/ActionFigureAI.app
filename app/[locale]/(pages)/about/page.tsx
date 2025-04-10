import { Metadata } from 'next';
import { getDictionary } from '../../lib/dictionary';
import { Locale } from '../../../i18n-config';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - ActionFigureAI',
  description: 'Learn about the ActionFigureAI platform and our mission to bring personalized action figures to everyone.',
};

export default async function About({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dictionary.about.title}</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{dictionary.about.mission}</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-700 mb-6">
                {dictionary.about.missionText.part1}
              </p>
              <p className="text-gray-700">
                {dictionary.about.missionText.part2}
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-tech-dark">
              {/* Placeholder for mission image */}
              <div className="absolute inset-0 flex items-center justify-center">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-64 md:h-96 rounded-lg overflow-hidden bg-tech-dark">
              {/* Placeholder for story image */}
              <div className="absolute inset-0 flex items-center justify-center">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">{dictionary.about.story}</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-700 mb-6">
                {dictionary.about.storyText.part1}
              </p>
              <p className="text-gray-700 mb-6">
                {dictionary.about.storyText.part2}
              </p>
              <p className="text-gray-700">
                {dictionary.about.storyText.part3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{dictionary.about.team}</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-tech-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-tech"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">{dictionary.about.teamMembers.member1.name}</h3>
              <p className="text-secondary font-medium mb-2">{dictionary.about.teamMembers.member1.role}</p>
              <p className="text-gray-600">
                {dictionary.about.teamMembers.member1.description}
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-tech-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-tech"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">{dictionary.about.teamMembers.member2.name}</h3>
              <p className="text-secondary font-medium mb-2">{dictionary.about.teamMembers.member2.role}</p>
              <p className="text-gray-600">
                {dictionary.about.teamMembers.member2.description}
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-tech-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-tech"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">{dictionary.about.teamMembers.member3.name}</h3>
              <p className="text-secondary font-medium mb-2">{dictionary.about.teamMembers.member3.role}</p>
              <p className="text-gray-600">
                {dictionary.about.teamMembers.member3.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 