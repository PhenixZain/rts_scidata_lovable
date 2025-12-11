import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Language, languageNames, languageFlags } from '../../i18n';
import './LanguageSelector.scss';

const languages: Language[] = ['en', 'fr', 'nl'];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className={`language-selector__button ${isOpen ? 'language-selector__button--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="flag">{languageFlags[language]}</span>
        <span className="code">{language}</span>
        <ChevronDown />
      </button>

      {isOpen && (
        <div className="language-selector__dropdown">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`language-selector__option ${lang === language ? 'language-selector__option--active' : ''}`}
              onClick={() => handleSelect(lang)}
            >
              <span className="flag">{languageFlags[lang]}</span>
              <span className="name">{languageNames[lang]}</span>
              {lang === language && <Check className="check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
