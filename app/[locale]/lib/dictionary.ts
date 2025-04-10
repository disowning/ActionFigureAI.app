import 'server-only';
import type { Locale } from '../../i18n-config';

type Dictionary = {
  navigation: {
    home: string
    about: string
    gallery: string
    create: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  features: {
    title: string
    upload: {
      title: string
      description: string
    }
    customize: {
      title: string
      description: string
    }
    generate: {
      title: string
      description: string
    }
    download: {
      title: string
      description: string
    }
  }
  gallery: {
    title: string
    subtitle: string
    viewMore: string
  }
  testimonials: {
    title: string
    viewAll: string
  }
  about: {
    title: string
    mission: string
    story: string
    team: string
  }
  footer: {
    rights: string
    privacy: string
    terms: string
    contact: string
  }
}

// Only include locales that have dictionary files
type AvailableLocales = 'en' | 'zh';

const dictionaries: Record<AvailableLocales, () => Promise<Dictionary>> = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  zh: () => import('../dictionaries/zh.json').then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => {
  // 检查是否是有效的语言代码
  const isValidLocale = locale === 'en' || locale === 'zh';
  
  // 对于无效的语言代码，默认使用英语
  if (!isValidLocale) {
    return dictionaries['en']();
  }
  
  return dictionaries[locale as AvailableLocales]();
}; 