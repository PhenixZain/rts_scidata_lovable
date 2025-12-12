import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Beaker, 
  FlaskConical,
  Zap,
  Sun,
  Microscope
} from 'lucide-react';
import './Research.scss';

const expertiseIcons = [FlaskConical, Zap, Sun, Microscope];

const Research: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="research">
      <section className="research__hero">
        <div className="research__hero-container">
          <span className="research__hero-tag">{t.research.tag}</span>
          <h1 className="research__hero-title">
            <span className={gradientClass}>{t.research.heroTitle}</span>
          </h1>
          <p className="research__hero-subtitle">{t.research.heroSubtitle}</p>
        </div>
      </section>

      <section className="research__papers">
        <div className="research__papers-container">
          <div className="research__papers-grid">
            {t.research.papers.map((paper, index) => (
              <article className="research__paper" key={index}>
                <div className="research__paper-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="research__paper-content">
                  <h3 className="research__paper-title">{paper.title}</h3>
                  <p className="research__paper-summary">{paper.abstract}</p>
                  <div className="research__paper-section">
                    <h4 className="research__paper-section-title">{t.research.keyFindings}</h4>
                    <div className="research__paper-highlights">
                      {paper.findings.map((finding, fIndex) => (
                        <span className="research__paper-highlight" key={fIndex}>{finding}</span>
                      ))}
                    </div>
                  </div>
                  <div className="research__paper-section">
                    <h4 className="research__paper-section-title">{t.research.significance}</h4>
                    <p className="research__paper-significance">{paper.significance}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Research;
