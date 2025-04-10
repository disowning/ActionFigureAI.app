import { Locale } from '../../i18n-config';

/**
 * 格式化日期为本地化字符串
 * @param date 要格式化的日期
 * @param locale 语言代码
 * @param options 可选的日期格式化选项
 * @returns 格式化后的日期字符串
 */
export function formatDate(
  date: Date | string | number,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
): string {
  const dateToFormat = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(getLocaleCode(locale), options).format(dateToFormat);
}

/**
 * 格式化数字为本地化字符串
 * @param number 要格式化的数字
 * @param locale 语言代码
 * @param options 可选的数字格式化选项
 * @returns 格式化后的数字字符串
 */
export function formatNumber(
  number: number,
  locale: Locale,
  options: Intl.NumberFormatOptions = {}
): string {
  return new Intl.NumberFormat(getLocaleCode(locale), options).format(number);
}

/**
 * 格式化货币为本地化字符串
 * @param amount 要格式化的金额
 * @param locale 语言代码
 * @param currency 货币代码 (如 'USD', 'EUR', 'JPY')
 * @returns 格式化后的货币字符串
 */
export function formatCurrency(
  amount: number,
  locale: Locale,
  currency: string = 'USD'
): string {
  return new Intl.NumberFormat(getLocaleCode(locale), {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * 获取相对时间的本地化字符串 (如 "2 days ago", "in 3 hours")
 * @param date 要格式化的日期
 * @param locale 语言代码
 * @returns 格式化后的相对时间字符串
 */
export function formatRelativeTime(
  date: Date | string | number,
  locale: Locale
): string {
  const dateToFormat = date instanceof Date ? date : new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateToFormat.getTime()) / 1000);
  
  const rtf = new Intl.RelativeTimeFormat(getLocaleCode(locale), { numeric: 'auto' });
  
  // 选择最合适的时间单位
  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(-diffInSeconds, 'second');
  } else if (Math.abs(diffInSeconds) < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
  } else if (Math.abs(diffInSeconds) < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
  } else if (Math.abs(diffInSeconds) < 2592000) {
    return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
  } else if (Math.abs(diffInSeconds) < 31536000) {
    return rtf.format(-Math.floor(diffInSeconds / 2592000), 'month');
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 31536000), 'year');
  }
}

/**
 * 映射Next.js语言代码到Intl API使用的BCP 47语言标签
 * @param locale Next.js locale代码
 * @returns BCP 47语言标签
 */
function getLocaleCode(locale: Locale): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    zh: 'zh-CN',
    ja: 'ja-JP',
    fr: 'fr-FR',
    es: 'es-ES',
    de: 'de-DE'
  };
  
  return localeMap[locale] || 'en-US';
}