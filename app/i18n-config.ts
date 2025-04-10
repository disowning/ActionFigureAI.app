export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ja', 'fr', 'es', 'de'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const defaultLocale = i18n.defaultLocale;

export function getLocalePartsFrom(path: string): {
  locale: Locale;
  pathname: string;
} {
  const pathnameParts = path.split('/');
  const locale = pathnameParts[1] as Locale;
  const pathname = pathnameParts.slice(2).join('/');

  return {
    locale,
    pathname,
  };
}

export const localeNames = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
}; 