import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  Beaker, 
  Database, 
  BarChart3, 
  Code2, 
  FileSpreadsheet, 
  Microscope,
  Zap,
  Shield,
  Award,
  Globe
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

const strengths = [
  {
    icon: Beaker,
    title: 'Chemistry Expertise',
    description: '20+ years in organometallics, electrochemistry, and photochemistry research with deep domain knowledge.'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Expert ETL pipelines, data cleaning, validation, and management for complex scientific datasets.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Statistical analysis, kinetics modeling, molecular handling with SMILES/RDKit for meaningful insights.'
  },
  {
    icon: Code2,
    title: 'Custom Solutions',
    description: 'Python scripts, Streamlit apps, and ReactJS dashboards tailored to your specific research needs.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Visualization',
    description: 'Interactive Power BI dashboards and automated Excel reports that communicate results effectively.'
  },
  {
    icon: Microscope,
    title: 'Research Focus',
    description: 'Scientific rigor ensuring accuracy, reproducibility, and confidentiality in every project.'
  }
];

const Home: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-bg" />
        <div className="home__hero-content">
          <div className="home__hero-badge">
            <Award />
            <span>20+ Years of Scientific Excellence</span>
          </div>
          
          <h1 className="home__hero-title">
            Transform Your{' '}
            <span className={gradientClass}>Scientific Data</span>
            {' '}Into Actionable Insights
          </h1>
          
          <p className="home__hero-subtitle">
            Expert data management, analysis, and automation services for research laboratories, 
            pharma, biotech, and academic institutions. From raw data to publication-ready results.
          </p>
          
          <div className="home__hero-actions">
            <Link to="/services" className="home__hero-cta">
              Explore Services
            </Link>
            <Link to="/contact" className="home__hero-secondary">
              Get in Touch
            </Link>
          </div>

          <div className="home__hero-stats">
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">20+</div>
              <div className="home__hero-stat-label">Years Experience</div>
            </div>
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">50+</div>
              <div className="home__hero-stat-label">Projects Delivered</div>
            </div>
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">4</div>
              <div className="home__hero-stat-label">Languages Spoken</div>
            </div>
            <div className="home__hero-stat">
              <div className="home__hero-stat-value">100%</div>
              <div className="home__hero-stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="home__strengths">
        <div className="home__section-header">
          <span className="home__section-header-tag">Why Choose Me</span>
          <h2 className="home__section-header-title">
            Bridging Science and Data Technology
          </h2>
          <p className="home__section-header-desc">
            A unique combination of deep scientific expertise and modern data engineering skills 
            to deliver solutions that truly understand your research challenges.
          </p>
        </div>

        <div className="home__strengths-grid">
          {strengths.map((strength, index) => (
            <div className="home__strength-card" key={index}>
              <div className="home__strength-card-icon">
                <strength.icon />
              </div>
              <h3 className="home__strength-card-title">{strength.title}</h3>
              <p className="home__strength-card-desc">{strength.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="home__tech">
        <div className="home__section-header">
          <span className="home__section-header-tag">Tech Stack</span>
          <h2 className="home__section-header-title">
            Technologies & Tools I Use
          </h2>
          <p className="home__section-header-desc">
            Leveraging industry-standard and specialized tools to deliver robust, 
            scalable scientific data solutions.
          </p>
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
          <h2 className="home__cta-title">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="home__cta-desc">
            Let's discuss how I can help transform your scientific data challenges 
            into streamlined, automated solutions.
          </p>
          <Link to="/contact" className="home__cta-button">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
