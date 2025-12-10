import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Linkedin, Github, Twitter, Mail } from 'lucide-react';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-icon">
              <Database />
            </div>
            <span className="footer__logo-text">
              <span>SDMR</span>.pro
            </span>
          </Link>
          <p className="footer__description">
            Expert scientific data management and reporting services. 
            Transforming complex research data into actionable insights with 20+ years of chemistry expertise.
          </p>
          <div className="footer__social">
            <a href="https://linkedin.com" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com" className="footer__social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="mailto:contact@sdmr.pro" className="footer__social-link" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Services</h4>
          <nav className="footer__links">
            <Link to="/services#data-management" className="footer__link">Data Management</Link>
            <Link to="/services#analysis" className="footer__link">Scientific Analysis</Link>
            <Link to="/services#automation" className="footer__link">Automation & Tools</Link>
            <Link to="/services#visualization" className="footer__link">Visualization</Link>
            <Link to="/services#consulting" className="footer__link">Consulting</Link>
          </nav>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Resources</h4>
          <nav className="footer__links">
            <Link to="/portfolio" className="footer__link">Case Studies</Link>
            <Link to="/research" className="footer__link">Research</Link>
            <Link to="/blog" className="footer__link">Blog</Link>
            <Link to="/about" className="footer__link">About Me</Link>
          </nav>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Contact</h4>
          <nav className="footer__links">
            <Link to="/contact" className="footer__link">Get in Touch</Link>
            <a href="mailto:contact@sdmr.pro" className="footer__link">contact@sdmr.pro</a>
            <span className="footer__link">Remote Worldwide</span>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} SDMR.pro - Zain Aldin. All rights reserved.
        </p>
        <nav className="footer__legal">
          <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
          <Link to="/terms" className="footer__legal-link">Terms & Conditions</Link>
          <Link to="/data-confidentiality" className="footer__legal-link">Data Confidentiality</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
