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
    categories: {
      all: string
      superhero: string
      scifi: string
      fantasy: string
      sports: string
      space: string
      western: string
      martialArts: string
      medieval: string
      pirates: string
    }
    createYourOwn: {
      title: string
      subtitle: string
      cta: string
    }
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
    missionText: {
      part1: string
      part2: string
    }
    storyText: {
      part1: string
      part2: string
      part3: string
    }
    teamMembers: {
      member1: {
        name: string
        role: string
        description: string
      }
      member2: {
        name: string
        role: string
        description: string
      }
      member3: {
        name: string
        role: string
        description: string
      }
    }
  }
  footer: {
    rights: string
    privacy: string
    terms: string
    contact: string
  }
}

// Update to include all locales with dictionary files
type AvailableLocales = 'en' | 'zh' | 'ja' | 'fr' | 'es' | 'de';

const dictionaries: Record<AvailableLocales, () => Promise<Dictionary>> = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  zh: () => import('../dictionaries/zh.json').then((module) => module.default),
  ja: () => import('../dictionaries/ja.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  es: () => import('../dictionaries/es.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => {
  // 检查是否是有效的语言代码
  const validLocales: AvailableLocales[] = ['en', 'zh', 'ja', 'fr', 'es', 'de'];
  const isValidLocale = validLocales.includes(locale as AvailableLocales);
  
  // 对于无效的语言代码，默认使用英语
  if (!isValidLocale) {
    return dictionaries['en']();
  }
  
  return dictionaries[locale as AvailableLocales]();
}; 