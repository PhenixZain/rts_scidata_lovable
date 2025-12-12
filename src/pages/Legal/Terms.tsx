import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { FileText } from 'lucide-react';
import './Legal.scss';

const Terms: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="legal">
      <section className="legal__hero">
        <div className="legal__hero-container">
          <h1 className="legal__hero-title">
            <span className={gradientClass}>{t.legal.terms.title}</span>
          </h1>
          <p className="legal__hero-updated">{t.legal.terms.lastUpdated}</p>
        </div>
      </section>

      <section className="legal__content">
        <div className="legal__content-container">
          {t.legal.terms.sections.map((section, index) => (
            <div className="legal__section" key={index}>
              <h2 className="legal__heading">{section.title}</h2>
              <p className="legal__text">{section.content}</p>
            </div>
          ))}

          <div className="legal__contact">
            <h3 className="legal__contact-title">
              <FileText size={20} />
              Legal Inquiries
            </h3>
            <a href="mailto:legal@sdmr.pro" className="legal__contact-email">
              legal@sdmr.pro
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
