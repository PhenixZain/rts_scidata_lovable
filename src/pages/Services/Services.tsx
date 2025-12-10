import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  Database, 
  FlaskConical, 
  Cog, 
  BarChart3, 
  GraduationCap,
  CheckCircle,
  FileSpreadsheet,
  GitBranch,
  Filter,
  TestTube,
  LineChart,
  Atom,
  Zap,
  Terminal,
  LayoutDashboard,
  Bot,
  PieChart,
  FileText,
  Presentation,
  Users,
  Lightbulb,
  Settings
} from 'lucide-react';
import './Services.scss';

const serviceCategories = [
  {
    id: 'data-management',
    icon: Database,
    title: 'Scientific Data Management',
    description: 'Comprehensive data infrastructure solutions that ensure your research data is clean, organized, validated, and accessible.',
    services: [
      {
        icon: Filter,
        title: 'Data Cleaning & Validation',
        description: 'Remove duplicates, handle missing values, standardize formats, and validate against scientific constraints.',
        tags: ['Python', 'Pandas', 'Quality Assurance']
      },
      {
        icon: GitBranch,
        title: 'ETL Pipeline Development',
        description: 'Build automated pipelines that extract data from instruments, transform it into usable formats, and load it into your systems.',
        tags: ['ETL', 'Automation', 'Data Integration']
      },
      {
        icon: FileSpreadsheet,
        title: 'Database Design & Management',
        description: 'Design efficient database schemas optimized for scientific queries and implement robust data governance practices.',
        tags: ['SQL', 'Database Design', 'Data Governance']
      },
      {
        icon: CheckCircle,
        title: 'Data Quality Frameworks',
        description: 'Implement monitoring and alerting systems to catch data issues before they impact your research.',
        tags: ['Monitoring', 'Alerts', 'Quality Control']
      }
    ]
  },
  {
    id: 'analysis',
    icon: FlaskConical,
    title: 'Scientific Analysis',
    description: 'Advanced analytical capabilities leveraging both statistical methods and domain-specific scientific tools.',
    services: [
      {
        icon: LineChart,
        title: 'Statistical Analysis',
        description: 'From descriptive statistics to advanced modeling, extract meaningful insights from your experimental data.',
        tags: ['Statistics', 'Python', 'R']
      },
      {
        icon: Atom,
        title: 'Molecular Data Handling',
        description: 'Work with SMILES notation, molecular descriptors, and chemical structure analysis using RDKit.',
        tags: ['SMILES', 'RDKit', 'Cheminformatics']
      },
      {
        icon: TestTube,
        title: 'Kinetics & Reaction Data',
        description: 'Analyze reaction kinetics, fit rate constants, and model chemical processes from experimental data.',
        tags: ['Kinetics', 'Curve Fitting', 'Modeling']
      },
      {
        icon: BarChart3,
        title: 'Spectroscopic Data Analysis',
        description: 'Process and analyze UV-Vis, IR, NMR, and mass spectrometry data with automated peak detection and integration.',
        tags: ['Spectroscopy', 'Peak Analysis', 'Automation']
      }
    ]
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'Automation & Tools',
    description: 'Custom software solutions that eliminate repetitive tasks and accelerate your research workflows.',
    services: [
      {
        icon: Terminal,
        title: 'Python Automation Scripts',
        description: 'Custom scripts that automate data processing, file management, report generation, and more.',
        tags: ['Python', 'Scripting', 'Automation']
      },
      {
        icon: LayoutDashboard,
        title: 'Streamlit Applications',
        description: 'Interactive web apps for data exploration, parameter optimization, and internal tools.',
        tags: ['Streamlit', 'Web Apps', 'Interactive']
      },
      {
        icon: Bot,
        title: 'Automated Reporting',
        description: 'Generate publication-ready reports, data summaries, and documentation automatically.',
        tags: ['Reports', 'Templates', 'Documentation']
      },
      {
        icon: Zap,
        title: 'Custom Tool Development',
        description: 'ReactJS dashboards and specialized tools tailored to your specific research needs.',
        tags: ['ReactJS', 'Dashboards', 'Custom Dev']
      }
    ]
  },
  {
    id: 'visualization',
    icon: BarChart3,
    title: 'Visualization & Reporting',
    description: 'Transform complex data into clear, compelling visualizations and reports.',
    services: [
      {
        icon: PieChart,
        title: 'Power BI Dashboards',
        description: 'Interactive dashboards with drill-down capabilities, real-time updates, and executive summaries.',
        tags: ['Power BI', 'Interactive', 'Real-time']
      },
      {
        icon: FileSpreadsheet,
        title: 'Excel Automation',
        description: 'Power Query transformations, VBA macros, and automated reporting templates.',
        tags: ['Excel', 'Power Query', 'VBA']
      },
      {
        icon: FileText,
        title: 'Scientific Writing Support',
        description: 'Data visualization for publications, supplementary materials, and grant proposals.',
        tags: ['Publications', 'Graphics', 'Documentation']
      },
      {
        icon: Presentation,
        title: 'Presentation Graphics',
        description: 'High-quality figures and charts optimized for presentations, posters, and manuscripts.',
        tags: ['Figures', 'Charts', 'Design']
      }
    ]
  },
  {
    id: 'consulting',
    icon: GraduationCap,
    title: 'Consulting & Training',
    description: 'Knowledge transfer and strategic guidance to build your team\'s data capabilities.',
    services: [
      {
        icon: Users,
        title: 'Team Training',
        description: 'Workshops on Python, data analysis tools, and best practices tailored to your team\'s needs.',
        tags: ['Training', 'Workshops', 'Skills']
      },
      {
        icon: Lightbulb,
        title: 'Workflow Optimization',
        description: 'Audit current processes and implement improvements to increase efficiency and reduce errors.',
        tags: ['Process', 'Optimization', 'Efficiency']
      },
      {
        icon: Settings,
        title: 'Tool Selection & Implementation',
        description: 'Help choose and set up the right tools for your specific research and data needs.',
        tags: ['Consulting', 'Implementation', 'Strategy']
      },
      {
        icon: GraduationCap,
        title: 'One-on-One Mentoring',
        description: 'Personal guidance for researchers looking to improve their data skills.',
        tags: ['Mentoring', 'Personal', 'Growth']
      }
    ]
  }
];

const Services: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="services">
      <section className="services__hero">
        <div className="services__hero-container">
          <span className="services__hero-tag">Services</span>
          <h1 className="services__hero-title">
            <span className={gradientClass}>Comprehensive Data Solutions</span>
          </h1>
          <p className="services__hero-subtitle">
            From raw instrument output to publication-ready insights. 
            Every service designed with scientific rigor and research workflows in mind.
          </p>
        </div>
      </section>

      <section className="services__list">
        {serviceCategories.map((category) => (
          <div className="services__category" key={category.id} id={category.id}>
            <div className="services__category-header">
              <div className="services__category-icon">
                <category.icon />
              </div>
              <div className="services__category-info">
                <h2 className="services__category-title">{category.title}</h2>
                <p className="services__category-desc">{category.description}</p>
              </div>
            </div>
            <div className="services__items">
              {category.services.map((service, index) => (
                <div className="services__item" key={index}>
                  <h3 className="services__item-title">
                    <service.icon size={20} />
                    {service.title}
                  </h3>
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
        ))}
      </section>

      <section className="services__cta">
        <div className="services__cta-container">
          <h2 className="services__cta-title">Need a Custom Solution?</h2>
          <p className="services__cta-desc">
            Every research project is unique. Let's discuss your specific needs and 
            design a solution that fits your workflow perfectly.
          </p>
          <Link to="/contact" className="services__cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
