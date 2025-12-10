import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  Beaker, 
  Database, 
  GraduationCap, 
  CheckCircle, 
  MapPin,
  Languages,
  Target,
  Shield,
  Repeat,
  Lock
} from 'lucide-react';
import './About.scss';

const values = [
  {
    icon: Target,
    title: 'Accuracy',
    description: 'Meticulous attention to detail ensuring data integrity and correctness in every analysis and report.'
  },
  {
    icon: Repeat,
    title: 'Reproducibility',
    description: 'Implementing documented, version-controlled processes that can be reliably replicated and audited.'
  },
  {
    icon: Lock,
    title: 'Confidentiality',
    description: 'Strict data protection protocols ensuring your research and proprietary data remain secure.'
  }
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Fluent' },
  { name: 'Arabic', level: 'Native' },
  { name: 'Aramaic', level: 'Native' },
];

const About: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__hero-container">
          <span className="about__hero-tag">About Me</span>
          <h1 className="about__hero-title">
            <span className={gradientClass}>Zain Aldin</span>
          </h1>
          <p className="about__hero-subtitle">
            Scientific Data Manager with 20+ years of research experience, bridging the gap 
            between complex scientific data and actionable business intelligence.
          </p>
        </div>
      </section>

      <section className="about__content">
        <div className="about__content-container">
          <div className="about__bio">
            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <Beaker size={24} />
                Scientific Background
              </h2>
              <p className="about__bio-text">
                My journey in science began with a passion for understanding the molecular world. 
                Over two decades, I've immersed myself in <strong>organometallic chemistry</strong>, 
                <strong>electrochemistry</strong>, and <strong>photochemistry</strong>, contributing 
                to peer-reviewed publications and advancing our understanding of metal complexes 
                and their applications in catalysis and bioinorganic systems.
              </p>
              <p className="about__bio-text">
                This deep scientific background means I don't just handle your data—I <strong>understand</strong> it. 
                Whether you're working with spectroscopic data, kinetic measurements, or molecular structures, 
                I bring contextual expertise that generic data analysts simply cannot offer.
              </p>
            </div>

            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <Database size={24} />
                Data Expertise
              </h2>
              <p className="about__bio-text">
                My transition into scientific data management was natural—I saw how much time 
                researchers waste on repetitive data tasks and inefficient workflows. I've since 
                developed expertise in:
              </p>
              <ul className="about__bio-list">
                <li className="about__bio-item">
                  <CheckCircle size={16} />
                  <span><strong>ETL Pipelines:</strong> Designing robust data extraction, transformation, and loading workflows</span>
                </li>
                <li className="about__bio-item">
                  <CheckCircle size={16} />
                  <span><strong>Python Development:</strong> Custom scripts, Streamlit apps, and automation tools</span>
                </li>
                <li className="about__bio-item">
                  <CheckCircle size={16} />
                  <span><strong>Data Visualization:</strong> Power BI dashboards, interactive reports, and publication graphics</span>
                </li>
                <li className="about__bio-item">
                  <CheckCircle size={16} />
                  <span><strong>Database Management:</strong> SQL databases, data validation, and quality assurance</span>
                </li>
                <li className="about__bio-item">
                  <CheckCircle size={16} />
                  <span><strong>Molecular Informatics:</strong> SMILES notation, RDKit for cheminformatics analysis</span>
                </li>
              </ul>
            </div>

            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <GraduationCap size={24} />
                Research & Academia
              </h2>
              <p className="about__bio-text">
                My academic career has included extensive experience in <strong>research project management</strong> 
                and <strong>supervising academic projects</strong>. I understand the unique pressures of 
                academic publishing timelines, grant requirements, and the need for impeccable data documentation.
              </p>
              <p className="about__bio-text">
                I've published research on organometallic complexes, catalytic systems, photochemical 
                processes, and bioinorganic activity. This publication experience means I know exactly 
                what reviewers and journals expect when it comes to data presentation and supporting materials.
              </p>
            </div>

            <div className="about__bio-section">
              <h2 className="about__bio-title">
                <Shield size={24} />
                What Makes Me Different
              </h2>
              <p className="about__bio-text">
                Most data consultants understand data. I understand <strong>your science</strong>. 
                This means faster onboarding, fewer misunderstandings, and solutions that actually 
                fit how scientists work. I speak your language—both literally and figuratively.
              </p>
              <p className="about__bio-text">
                My problem-solving approach is methodical and thorough, shaped by years of 
                troubleshooting failed reactions and optimizing experimental conditions. 
                I bring that same rigor to every data challenge.
              </p>
            </div>
          </div>

          <aside className="about__sidebar">
            <div className="about__profile-card">
              <div className="about__profile-card-avatar">ZA</div>
              <h3 className="about__profile-card-name">Zain Aldin</h3>
              <p className="about__profile-card-title">Scientific Data Manager</p>
              <p className="about__profile-card-location">
                <MapPin />
                <span>Available Worldwide (Remote)</span>
              </p>
            </div>

            <div className="about__languages">
              <h4 className="about__languages-title">
                <Languages size={20} />
                Languages
              </h4>
              <ul className="about__languages-list">
                {languages.map((lang, index) => (
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
          <span className="about__values-tag">Core Values</span>
          <h2 className="about__values-title">What Drives My Work</h2>
        </div>
        <div className="about__values-grid">
          {values.map((value, index) => (
            <div className="about__values-card" key={index}>
              <div className="about__values-card-icon">
                <value.icon />
              </div>
              <h3 className="about__values-card-title">{value.title}</h3>
              <p className="about__values-card-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
