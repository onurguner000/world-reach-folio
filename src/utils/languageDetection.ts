/**
 * Language Detection Utility
 * Detects user's preferred language based on browser settings and geolocation
 */

export type SupportedLanguage = 'en' | 'tr' | 'zh' | 'de' | 'es' | 'fr' | 'ar';

interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: Record<SupportedLanguage, LanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr'
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    dir: 'ltr'
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    dir: 'ltr'
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr'
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    dir: 'ltr'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    dir: 'ltr'
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl'
  }
};

/**
 * Maps country codes to preferred languages
 */
const COUNTRY_TO_LANGUAGE: Record<string, SupportedLanguage> = {
  // Turkish
  TR: 'tr',
  
  // Chinese
  CN: 'zh',
  HK: 'zh',
  TW: 'zh',
  SG: 'zh',
  
  // German
  DE: 'de',
  AT: 'de',
  CH: 'de',
  LI: 'de',
  LU: 'de',
  
  // Spanish
  ES: 'es',
  MX: 'es',
  CO: 'es',
  PE: 'es',
  VE: 'es',
  CL: 'es',
  EC: 'es',
  GT: 'es',
  CU: 'es',
  BO: 'es',
  DO: 'es',
  HN: 'es',
  PY: 'es',
  SV: 'es',
  NI: 'es',
  CR: 'es',
  PA: 'es',
  UY: 'es',
  
  // French
  FR: 'fr',
  BE: 'fr',
  MC: 'fr',
  
  // Arabic
  SA: 'ar',
  AE: 'ar',
  EG: 'ar',
  IQ: 'ar',
  JO: 'ar',
  KW: 'ar',
  LB: 'ar',
  LY: 'ar',
  MA: 'ar',
  OM: 'ar',
  PS: 'ar',
  QA: 'ar',
  SD: 'ar',
  SY: 'ar',
  TN: 'ar',
  YE: 'ar',
  BH: 'ar',
  DZ: 'ar',
  
  // Default to English for other countries
  US: 'en',
  GB: 'en',
  AU: 'en',
  IE: 'en',
  NZ: 'en',
  ZA: 'en',
  IN: 'en'
};

/**
 * Detects user's language from browser settings
 */
export const detectBrowserLanguage = (): SupportedLanguage => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Check if the detected language is supported
  if (langCode in SUPPORTED_LANGUAGES) {
    return langCode as SupportedLanguage;
  }
  
  return 'en'; // Default to English
};

/**
 * Detects user's language based on geolocation (IP-based)
 * Uses a free API to detect country code
 */
export const detectGeolocationLanguage = async (): Promise<SupportedLanguage> => {
  try {
    // Using ipapi.co for geolocation (free tier: 1000 requests/day)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    const countryCode = data.country_code;
    
    if (countryCode && countryCode in COUNTRY_TO_LANGUAGE) {
      return COUNTRY_TO_LANGUAGE[countryCode];
    }
    
    // Fallback to browser language
    return detectBrowserLanguage();
  } catch (error) {
    console.warn('Failed to detect geolocation language:', error);
    return detectBrowserLanguage();
  }
};

/**
 * Gets the best language for the user
 * Priority: Saved preference > Geolocation > Browser > Default (English)
 */
export const detectUserLanguage = async (): Promise<SupportedLanguage> => {
  // 1. Check saved preference
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && savedLang in SUPPORTED_LANGUAGES) {
    return savedLang as SupportedLanguage;
  }
  
  // 2. Try geolocation detection
  try {
    const geoLang = await detectGeolocationLanguage();
    return geoLang;
  } catch (error) {
    console.warn('Geolocation detection failed:', error);
  }
  
  // 3. Fallback to browser language
  return detectBrowserLanguage();
};

/**
 * Saves user's language preference
 */
export const saveLanguagePreference = (language: SupportedLanguage): void => {
  localStorage.setItem('preferred-language', language);
  
  // Set document direction for RTL languages
  document.documentElement.dir = SUPPORTED_LANGUAGES[language].dir;
  document.documentElement.lang = language;
};
