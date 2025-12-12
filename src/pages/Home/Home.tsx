import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Beaker, 
  Database, 
  BarChart3, 
  Code2, 
  FileSpreadsheet, 
  Microscope,
  Award
} from 'lucide-react';
import './Home.scss';

const technologies = [
  { name: 'Python', icon: 'Py' },
  { name: 'SQL', icon: 'SQL' },
  { name: 'Power BI', icon: 'PBI' },
  { name: 'React', icon: 'Re' },
  { name: 'Streamlit', icon: 'St' },
  { name: 'RDKit', icon: 'RD' },
  { name: 'ETL', icon: 'ETL' },
  { name: 'Pandas', icon: 'Pd' },
  { name: 'Excel', icon: 'XL' },
  { name: 'SMILES', icon: 'SM' },
  { name: 'Power Query', icon: 'PQ' },
  { name: 'Automation', icon: 'Au' },
];

const strengthIcons = [Beaker, Database, BarChart3, Code2, FileSpreadsheet, Microscope];

const Home: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-bg" />
        <div className="home__hero-content">
          <div className="home__hero-badge">
            <Award />
            <span>{t.home.badge}</span>
          </div>
          
          <h1 className="home__hero-title">
            {t.home.heroTitle}{' '}
            <span className={gradientClass}>{t.home.heroTitleHighlight}</span>
            {' '}{t.home.heroTitleEnd}
          </h1>
          
          <p className="home__hero-subtitle">{t.home.heroSubtitle}</p>
          
          <div className="home__hero-actions">
            <Link to="/services" className="home__hero-cta">
              {t.home.exploreServices}
            </Link>
            <Link to="/contact" className="home__hero-secondary">
              {t.home.getInTouch}
            </Link>
          </div>

          <div className="home__hero-stats">
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">{t.home.stats.experience.value}</div>
              <div className="home__hero-stat-label">{t.home.stats.experience.label}</div>
            </div>
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">{t.home.stats.projects.value}</div>
              <div className="home__hero-stat-label">{t.home.stats.projects.label}</div>
            </div>
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">{t.home.stats.languages.value}</div>
              <div className="home__hero-stat-label">{t.home.stats.languages.label}</div>
            </div>
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">{t.home.stats.satisfaction.value}</div>
              <div className="home__hero-stat-label">{t.home.stats.satisfaction.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="home__strengths">
        <div className="home__section-header">
          <span className="home__section-header-tag">{t.home.strengthsTag}</span>
          <h2 className="home__section-header-title">{t.home.strengthsTitle}</h2>
          <p className="home__section-header-desc">{t.home.strengthsDesc}</p>
        </div>

        <div className="home__strengths-grid">
          {t.home.strengths.map((strength, index) => {
            const Icon = strengthIcons[index];
            return (
              <div className="home__strength-card" key={index}>
                <div className="home__strength-card-icon">
                  <Icon />
                </div>
                <h3 className="home__strength-card-title">{strength.title}</h3>
                <p className="home__strength-card-desc">{strength.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="home__tech">
        <div className="home__section-header">
          <span className="home__section-header-tag">{t.home.techTag}</span>
          <h2 className="home__section-header-title">{t.home.techTitle}</h2>
          <p className="home__section-header-desc">{t.home.techDesc}</p>
        </div>

        <div className="home__tech-grid">
          {technologies.map((tech, index) => (
            <div className="home__tech-item" key={index}>
              <div className="home__tech-item-icon">{tech.icon}</div>
              <span className="home__tech-item-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="home__cta">
        <div className="home__cta-container">
          <h2 className="home__cta-title">{t.home.ctaTitle}</h2>
          <p className="home__cta-desc">{t.home.ctaDesc}</p>
          <Link to="/contact" className="home__cta-button">
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
