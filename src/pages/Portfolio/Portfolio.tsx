import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
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

const caseStudies = [
  {
    icon: FlaskConical,
    title: 'Pharmaceutical Compound Library Analysis',
    client: 'European Pharma Company',
    problem: 'A pharmaceutical company had accumulated 15,000+ compound records across multiple Excel files with inconsistent naming conventions, duplicate entries, and missing molecular data. Researchers couldn\'t reliably search or analyze the library.',
    solution: 'Developed a Python-based ETL pipeline that standardized compound names, generated SMILES notation from chemical structures, calculated molecular descriptors using RDKit, and loaded everything into a searchable SQL database with a Streamlit interface.',
    tools: ['Python', 'RDKit', 'SQL', 'Streamlit', 'Pandas'],
    results: [
      '99.2% of compounds successfully standardized',
      '3,200 duplicate entries identified and merged',
      'Search time reduced from hours to seconds',
      'Enabled structure-based similarity searches'
    ]
  },
  {
    icon: LineChart,
    title: 'Electrochemistry Data Pipeline',
    client: 'Academic Research Lab',
    problem: 'A research group generated thousands of cyclic voltammetry (CV) files weekly. Manual data extraction and analysis was consuming 20+ hours per week and introducing transcription errors.',
    solution: 'Built an automated pipeline that monitors folders for new data files, extracts key parameters (peak potentials, currents), performs baseline corrections, and generates summary reports with publication-quality figures.',
    tools: ['Python', 'NumPy', 'Matplotlib', 'Automation'],
    results: [
      '20 hours/week freed for actual research',
      'Zero transcription errors',
      'Consistent analysis methodology',
      'Automated figure generation'
    ]
  },
  {
    icon: Database,
    title: 'Research Data Governance Framework',
    client: 'Biotech Startup',
    problem: 'A growing biotech company had no standardized data management practices. Different teams used different file naming conventions, version control was inconsistent, and finding specific datasets required extensive email chains.',
    solution: 'Designed and implemented a comprehensive data governance framework including naming conventions, folder structures, metadata standards, and a Power BI dashboard for data inventory and quality monitoring.',
    tools: ['Power BI', 'SQL', 'Documentation', 'Training'],
    results: [
      'Standardized practices across 5 departments',
      'Data discovery time reduced by 85%',
      'Full audit trail for regulatory compliance',
      'Team trained on best practices'
    ]
  },
  {
    icon: Cog,
    title: 'Automated Kinetics Report Generator',
    client: 'Industrial R&D Center',
    problem: 'Engineers were spending 2 days per week manually creating kinetics reports from reaction monitoring data, copying data between multiple software tools, and formatting Excel templates.',
    solution: 'Created a Python application that reads raw kinetics data, fits reaction models, calculates rate constants with error estimates, and generates formatted Word reports with embedded charts—all from a single button click.',
    tools: ['Python', 'SciPy', 'python-docx', 'Automation'],
    results: [
      'Report generation: 2 days → 15 minutes',
      'Consistent fitting methodology',
      'Automatic error propagation',
      'Standardized report format'
    ]
  },
  {
    icon: Microscope,
    title: 'Spectroscopy Data Platform',
    client: 'University Chemistry Department',
    problem: 'A chemistry department needed a unified platform for students and researchers to store, process, and analyze various spectroscopic data (UV-Vis, IR, NMR) without expensive commercial software licenses.',
    solution: 'Developed a Streamlit web application with modules for each spectroscopy type, featuring file upload, baseline correction, peak detection, and comparison tools. Data stored in a shared database with access controls.',
    tools: ['Streamlit', 'Python', 'PostgreSQL', 'SciPy'],
    results: [
      '300+ users in first semester',
      'Saved $50,000 in software licenses',
      'Collaborative data sharing enabled',
      'Teaching materials integrated'
    ]
  },
  {
    icon: FileSpreadsheet,
    title: 'Power BI Research Dashboard',
    client: 'Contract Research Organization',
    problem: 'Executives needed visibility into research project progress, resource allocation, and key metrics across 40+ ongoing projects, but data was scattered across project management tools, lab notebooks, and spreadsheets.',
    solution: 'Built a comprehensive Power BI dashboard integrating data from multiple sources via Power Query, featuring project timelines, resource utilization, milestone tracking, and automated weekly email reports.',
    tools: ['Power BI', 'Power Query', 'DAX', 'SQL'],
    results: [
      'Real-time visibility for leadership',
      'Resource conflicts identified early',
      'Weekly manual reporting eliminated',
      'Data-driven project decisions'
    ]
  }
];

const Portfolio: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="portfolio">
      <section className="portfolio__hero">
        <div className="portfolio__hero-container">
          <span className="portfolio__hero-tag">Portfolio</span>
          <h1 className="portfolio__hero-title">
            <span className={gradientClass}>Case Studies</span>
          </h1>
          <p className="portfolio__hero-subtitle">
            Real-world examples of how I've helped research teams, laboratories, 
            and scientific companies transform their data challenges into solutions.
          </p>
        </div>
      </section>

      <section className="portfolio__cases">
        <div className="portfolio__cases-container">
          <div className="portfolio__cases-grid">
            {caseStudies.map((study, index) => (
              <article className="portfolio__case" key={index}>
                <div className="portfolio__case-header">
                  <div className="portfolio__case-icon">
                    <study.icon />
                  </div>
                  <h2 className="portfolio__case-title">{study.title}</h2>
                  <span className="portfolio__case-client">{study.client}</span>
                </div>
                <div className="portfolio__case-body">
                  <div className="portfolio__case-section">
                    <span className="portfolio__case-label">The Challenge</span>
                    <p className="portfolio__case-text">{study.problem}</p>
                  </div>
                  <div className="portfolio__case-section">
                    <span className="portfolio__case-label">The Solution</span>
                    <p className="portfolio__case-text">{study.solution}</p>
                  </div>
                  <div className="portfolio__case-section">
                    <span className="portfolio__case-label">Tools Used</span>
                    <div className="portfolio__case-tools">
                      {study.tools.map((tool, toolIndex) => (
                        <span className="portfolio__case-tool" key={toolIndex}>{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="portfolio__case-section">
                    <span className="portfolio__case-label">Results</span>
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
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio__cta">
        <div className="portfolio__cta-container">
          <h2 className="portfolio__cta-title">Have a Similar Challenge?</h2>
          <p className="portfolio__cta-desc">
            Let's discuss how I can help solve your scientific data challenges 
            with a tailored solution.
          </p>
          <Link to="/contact" className="portfolio__cta-button">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
