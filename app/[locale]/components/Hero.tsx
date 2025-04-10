'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '../../i18n-config';

interface HeroProps {
  dictionary: any;
  locale: Locale;
}

export default function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary to-primary-light text-white">
      <div className="container-custom mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {dictionary.hero.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-tech">
              {dictionary.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link
                href={`/${locale}#create`}
                className="btn-primary text-center sm:text-left"
              >
                {dictionary.hero.cta}
              </Link>
              <Link
                href={`/${locale}/gallery`}
                className="btn-secondary text-center sm:text-left"
              >
                {dictionary.gallery.title}
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center">
              <span className="text-white text-lg font-medium">AI Generated Action Figure Example</span>
            </div>
            <div className="relative h-full w-full">
              {/* Placeholder image - replace with an actual action figure image */}
              <div className="absolute inset-0 bg-tech-dark flex items-center justify-center">
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
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="relative h-16">
        <svg
          className="absolute bottom-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,74.7C480,96,600,160,720,165.3C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 