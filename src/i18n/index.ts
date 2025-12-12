import { en, Translations } from './translations/en';
import { fr } from './translations/fr';
import { nl } from './translations/nl';
import { ar } from './translations/ar';

export type Language = 'en' | 'fr' | 'nl' | 'ar';

export const translations: Record<Language, Translations> = {
  en,
  fr,
  nl,
  ar,
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  nl: 'Nederlands',
  ar: 'العربية',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  nl: '🇳🇱',
  ar: '🇸🇦',
};

export { en, fr, nl, ar };
export type { Translations };
