import { en, Translations } from './translations/en';
import { fr } from './translations/fr';
import { nl } from './translations/nl';

export type Language = 'en' | 'fr' | 'nl';

export const translations: Record<Language, Translations> = {
  en,
  fr,
  nl,
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  nl: 'Nederlands',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  nl: '🇳🇱',
};

export { en, fr, nl };
export type { Translations };
