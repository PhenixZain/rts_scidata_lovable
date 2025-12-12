import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FlaskConical, 
  Database, 
  LineChart, 
  Cog, 
  FileSpreadsheet,
  Microscope,
  CheckCircle
} from 'lucide-react';
import './Portfolio.scss';

const caseIcons = [FlaskConical, Database, LineChart, Cog, Microscope, FileSpreadsheet];

const Portfolio: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="portfolio">
      <section className="portfolio__hero">
        <div className="portfolio__hero-container">
          <span className="portfolio__hero-tag">{t.portfolio.tag}</span>
          <h1 className="portfolio__hero-title">
            <span className={gradientClass}>{t.portfolio.heroTitle}</span>
          </h1>
          <p className="portfolio__hero-subtitle">{t.portfolio.heroSubtitle}</p>
        </div>
      </section>

      <section className="portfolio__cases">
        <div className="portfolio__cases-container">
          <div className="portfolio__cases-grid">
            {t.portfolio.cases.map((study, index) => {
              const Icon = caseIcons[index % caseIcons.length];
              return (
                <article className="portfolio__case" key={index}>
                  <div className="portfolio__case-header">
                    <div className="portfolio__case-icon">
                      <Icon />
                    </div>
                    <h2 className="portfolio__case-title">{study.title}</h2>
                  </div>
                  <div className="portfolio__case-body">
                    <div className="portfolio__case-section">
                      <span className="portfolio__case-label">{t.portfolio.problem}</span>
                      <p className="portfolio__case-text">{study.problem}</p>
                    </div>
                    <div className="portfolio__case-section">
                      <span className="portfolio__case-label">{t.portfolio.solution}</span>
                      <p className="portfolio__case-text">{study.solution}</p>
                    </div>
                    <div className="portfolio__case-section">
                      <span className="portfolio__case-label">{t.portfolio.toolsUsed}</span>
                      <div className="portfolio__case-tools">
                        {study.tools.map((tool, toolIndex) => (
                          <span className="portfolio__case-tool" key={toolIndex}>{tool}</span>
                        ))}
                      </div>
                    </div>
                    <div className="portfolio__case-section">
                      <span className="portfolio__case-label">{t.portfolio.results}</span>
                      <div className="portfolio__case-results">
                        {study.results.map((result, resultIndex) => (
                          <div className="portfolio__case-result" key={resultIndex}>
                            <CheckCircle size={16} />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="portfolio__cta">
        <div className="portfolio__cta-container">
          <h2 className="portfolio__cta-title">{t.services.ctaTitle}</h2>
          <p className="portfolio__cta-desc">{t.services.ctaDesc}</p>
          <Link to="/contact" className="portfolio__cta-button">
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
