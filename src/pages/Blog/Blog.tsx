import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  PenTool, 
  Database, 
  Code, 
  BarChart, 
  FileSpreadsheet,
  FlaskConical,
  Atom,
  Zap,
  Bot,
  Clock
} from 'lucide-react';
import './Blog.scss';

const blogPosts = [
  {
    category: 'Python',
    icon: Code,
    title: 'Getting Started with Python for Chemistry: A Practical Guide',
    excerpt: 'Learn how to set up Python for scientific computing, essential libraries for chemists, and your first data analysis script with real experimental data.',
    readTime: '8 min read',
    tag: 'Beginner'
  },
  {
    category: 'Data Management',
    icon: Database,
    title: 'Building Your First ETL Pipeline for Lab Data',
    excerpt: 'Step-by-step tutorial on creating an automated data pipeline that extracts data from instruments, cleans it, and loads it into a database.',
    readTime: '12 min read',
    tag: 'Intermediate'
  },
  {
    category: 'Visualization',
    icon: BarChart,
    title: 'Creating Publication-Ready Figures with Python',
    excerpt: 'Master matplotlib and seaborn to create high-quality figures that meet journal requirements, including proper formatting and export settings.',
    readTime: '10 min read',
    tag: 'Intermediate'
  },
  {
    category: 'Automation',
    icon: Zap,
    title: '10 Ways to Automate Repetitive Tasks in Your Research Workflow',
    excerpt: 'Practical automation ideas that can save hours of manual work, from file renaming to report generation, with ready-to-use Python snippets.',
    readTime: '6 min read',
    tag: 'All Levels'
  },
  {
    category: 'Power BI',
    icon: FileSpreadsheet,
    title: 'Power BI for Research Labs: A Comprehensive Tutorial',
    excerpt: 'How to build interactive dashboards for tracking experiments, visualizing results, and sharing insights with your team using Power BI.',
    readTime: '15 min read',
    tag: 'Beginner'
  },
  {
    category: 'Cheminformatics',
    icon: Atom,
    title: 'Introduction to RDKit: Processing Molecular Data in Python',
    excerpt: 'Learn the basics of molecular informatics using RDKit, from reading SMILES to calculating molecular descriptors and performing substructure searches.',
    readTime: '12 min read',
    tag: 'Intermediate'
  },
  {
    category: 'Best Practices',
    icon: FlaskConical,
    title: 'Data Quality Best Practices for Scientific Research',
    excerpt: 'Essential guidelines for ensuring data integrity, documenting your processes, and maintaining reproducibility in your research data.',
    readTime: '7 min read',
    tag: 'All Levels'
  },
  {
    category: 'AI & ML',
    icon: Bot,
    title: 'Machine Learning for Chemists: When and How to Use It',
    excerpt: 'A practical guide to understanding when ML can help your research, choosing the right approaches, and avoiding common pitfalls.',
    readTime: '11 min read',
    tag: 'Advanced'
  },
  {
    category: 'Streamlit',
    icon: Code,
    title: 'Building Interactive Data Apps with Streamlit',
    excerpt: 'Create web applications for data exploration and sharing without extensive web development knowledge using Python and Streamlit.',
    readTime: '9 min read',
    tag: 'Intermediate'
  },
  {
    category: 'Workflow',
    icon: Database,
    title: 'Organizing Your Research Data: A Practical Framework',
    excerpt: 'File naming conventions, folder structures, and metadata practices that will save you hours of searching and prevent data loss.',
    readTime: '8 min read',
    tag: 'Beginner'
  }
];

const Blog: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="blog">
      <section className="blog__hero">
        <div className="blog__hero-container">
          <span className="blog__hero-tag">Blog</span>
          <h1 className="blog__hero-title">
            <span className={gradientClass}>Insights & Tutorials</span>
          </h1>
          <p className="blog__hero-subtitle">
            Practical guides, tutorials, and insights on scientific data management, 
            Python programming, and research automation.
          </p>
        </div>
      </section>

      <section className="blog__content">
        <div className="blog__content-container">
          <div className="blog__content-intro">
            <div className="blog__content-intro-icon">
              <PenTool />
            </div>
            <h2 className="blog__content-intro-title">Coming Soon</h2>
            <p className="blog__content-intro-text">
              The blog is currently under development. Below are planned article topics 
              that will cover practical skills for scientific data management.
            </p>
          </div>

          <div className="blog__content-grid">
            {blogPosts.map((post, index) => (
              <article className="blog__post" key={index}>
                <span className="blog__post-category">
                  <post.icon />
                  {post.category}
                </span>
                <h3 className="blog__post-title">{post.title}</h3>
                <p className="blog__post-excerpt">{post.excerpt}</p>
                <div className="blog__post-meta">
                  <span className="blog__post-tag">{post.tag}</span>
                  <span><Clock size={12} /> {post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog__cta">
        <div className="blog__cta-container">
          <h2 className="blog__cta-title">Want to Be Notified?</h2>
          <p className="blog__cta-desc">
            Get in touch to receive updates when new articles are published 
            and learn about upcoming resources.
          </p>
          <Link to="/contact" className="blog__cta-button">
            Stay Updated
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blog;
