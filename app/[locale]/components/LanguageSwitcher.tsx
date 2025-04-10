'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Locale, localeNames } from '../../i18n-config';

// Include all available locales with dictionary files
const availableLocales = ['en', 'zh', 'ja', 'fr', 'es', 'de'] as const;

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Remove the current locale from the pathname
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 hover:text-secondary transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{localeNames[locale]}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white text-primary rounded-md shadow-lg z-50">
          <div className="py-1">
            {availableLocales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}${pathnameWithoutLocale}`}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                  locale === loc ? 'font-bold bg-gray-50' : ''
                }`}
                onClick={closeDropdown}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 