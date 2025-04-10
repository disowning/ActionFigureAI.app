'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale, i18n, localeNames } from '../../i18n-config';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  dictionary: any;
  locale: Locale;
}

export default function Header({ dictionary, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white">
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href={`/${locale}`}>
              <span className="text-xl font-bold">ActionFigureAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href={`/${locale}`} className="hover:text-secondary transition-colors">
              {dictionary.navigation.home}
            </Link>
            <Link href={`/${locale}/about`} className="hover:text-secondary transition-colors">
              {dictionary.navigation.about}
            </Link>
            <Link href={`/${locale}/gallery`} className="hover:text-secondary transition-colors">
              {dictionary.navigation.gallery}
            </Link>
            <Link href={`/${locale}/create`} className="btn-primary text-sm px-4 py-2">
              {dictionary.navigation.create}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href={`/${locale}`} className="hover:text-secondary transition-colors" onClick={toggleMenu}>
                {dictionary.navigation.home}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                {dictionary.navigation.about}
              </Link>
              <Link
                href={`/${locale}/gallery`}
                className="hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                {dictionary.navigation.gallery}
              </Link>
              <Link
                href={`/${locale}/create`}
                className="btn-primary text-sm px-4 py-2 inline-block text-center"
                onClick={toggleMenu}
              >
                {dictionary.navigation.create}
              </Link>
              
              <div className="pt-2">
                <LanguageSwitcher locale={locale} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 