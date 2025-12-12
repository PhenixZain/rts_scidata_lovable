import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Database, 
  FlaskConical, 
  Cog, 
  BarChart3, 
  GraduationCap
} from 'lucide-react';
import './Services.scss';

const categoryIcons = [Database, FlaskConical, Cog, BarChart3, GraduationCap];

const Services: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="services">
      <section className="services__hero">
        <div className="services__hero-container">
          <span className="services__hero-tag">{t.services.tag}</span>
          <h1 className="services__hero-title">
            <span className={gradientClass}>{t.services.heroTitle}</span>
          </h1>
          <p className="services__hero-subtitle">{t.services.heroSubtitle}</p>
        </div>
      </section>

      <section className="services__list">
        {t.services.categories.map((category, catIndex) => {
          const Icon = categoryIcons[catIndex];
          return (
            <div className="services__category" key={category.id} id={category.id}>
              <div className="services__category-header">
                <div className="services__category-icon">
                  <Icon />
                </div>
                <div className="services__category-info">
                  <h2 className="services__category-title">{category.title}</h2>
                  <p className="services__category-desc">{category.description}</p>
                </div>
              </div>
              <div className="services__items">
                {category.services.map((service, index) => (
                  <div className="services__item" key={index}>
                    <h3 className="services__item-title">{service.title}</h3>
                    <p className="services__item-desc">{service.description}</p>
                    <div className="services__item-tags">
                      {service.tags.map((tag, tagIndex) => (
                        <span className="services__item-tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="services__cta">
        <div className="services__cta-container">
          <h2 className="services__cta-title">{t.services.ctaTitle}</h2>
          <p className="services__cta-desc">{t.services.ctaDesc}</p>
          <Link to="/contact" className="services__cta-button">
            {t.services.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
