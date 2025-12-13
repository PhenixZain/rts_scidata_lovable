import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Beaker, 
  Database, 
  GraduationCap, 
  CheckCircle, 
  MapPin,
  Languages,
  Shield,
  Target,
  Repeat,
  Lock,
  Quote,
  Sparkles
} from 'lucide-react';
import './About.scss';

const valueIcons = [Target, Repeat, Lock];

const About: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="about about-animate">
      <section className="about__hero">
        <div className="about__hero-container">
          <span className="about__hero-tag">{t.about.tag}</span>
          <h1 className="about__hero-title">
            <span className={gradientClass}>Zain Aldin</span>
          </h1>
          <div className="about__roles">
            {t.about.roles.map((role, index) => (
              <span className="about__role-tag" key={index}>{role}</span>
            ))}
          </div>
          <p className="about__hero-subtitle">{t.about.heroSubtitle}</p>
        </div>
      </section>

      <section className="about__quotes">
        <div className="about__quotes-container">
          {t.about.quotes.map((quote, index) => (
            <blockquote className="about__quote" key={index}>
              <Quote className="about__quote-icon" />
              <p>{quote}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="about__skills-section">
        <div className="about__skills-container">
          <div className="about__skills-header">
            <Sparkles className="about__skills-icon" />
            <h2>{t.about.skillsTitle}</h2>
          </div>
          <div className="about__skills-grid">
            {t.about.skills.map((skill, index) => (
              <span className="about__skill-badge" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="about__content">
        <div className="about__content-container">
          <div className="about__bio">
            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <Beaker size={24} />
                {t.about.scientificTitle}
              </h2>
              <p className="about__bio-text">{t.about.scientificText1}</p>
              <p className="about__bio-text">{t.about.scientificText2}</p>
            </div>

            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <Database size={24} />
                {t.about.dataTitle}
              </h2>
              <p className="about__bio-text">{t.about.dataText}</p>
              <ul className="about__bio-list">
                {t.about.dataItems.map((item, index) => (
                  <li className="about__bio-item" key={index}>
                    <CheckCircle size={16} />
                    <span><strong>{item.title}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <GraduationCap size={24} />
                {t.about.researchTitle}
              </h2>
              <p className="about__bio-text">{t.about.researchText1}</p>
              <p className="about__bio-text">{t.about.researchText2}</p>
            </div>

            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <Shield size={24} />
                {t.about.differentTitle}
              </h2>
              <p className="about__bio-text">{t.about.differentText1}</p>
              <p className="about__bio-text">{t.about.differentText2}</p>
            </div>
          </div>

          <aside className="about__sidebar">
            <div className="about__profile-card">
              <div className="about__profile-card-avatar">ZA</div>
              <h3 className="about__profile-card-name">Zain Aldin</h3>
              <p className="about__profile-card-title">{t.about.profileTitle}</p>
              <p className="about__profile-card-location">
                <MapPin />
                <span>{t.about.profileLocation}</span>
              </p>
            </div>

            <div className="about__languages">
              <h4 className="about__languages-title">
                <Languages size={20} />
                {t.about.languagesTitle}
              </h4>
              <ul className="about__languages-list">
                {t.about.languages.map((lang, index) => (
                  <li className="about__languages-item" key={index}>
                    <span className="about__languages-name">{lang.name}</span>
                    <span className="about__languages-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="about__values">
        <div className="about__values-header">
          <span className="about__values-tag">{t.about.valuesTag}</span>
          <h2 className="about__values-title">{t.about.valuesTitle}</h2>
        </div>
        <div className="about__values-grid">
          {t.about.values.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <div className="about__values-card" key={index}>
                <div className="about__values-card-icon">
                  <Icon />
                </div>
                <h3 className="about__values-card-title">{value.title}</h3>
                <p className="about__values-card-desc">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default About;
