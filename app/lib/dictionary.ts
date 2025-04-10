import 'server-only'
import type { Locale } from '@/app/i18n-config'

type Dictionary = {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  gallery: {
    title: string
    subtitle: string
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
}

// Only include locales that have dictionary files
type AvailableLocales = 'en' | 'zh'

const dictionaries: Record<AvailableLocales, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => {
  // 检查是否是有效的语言代码
  const isValidLocale = locale === 'en' || locale === 'zh';
  
  // 对于无效的语言代码，默认使用英语
  if (!isValidLocale) {
    return dictionaries['en']();
  }
  
  return dictionaries[locale as AvailableLocales]()
} 