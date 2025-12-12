import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

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
          <p className="footer__description">{t.footer.description}</p>
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
          <h4 className="footer__title">{t.footer.services}</h4>
          <nav className="footer__links">
            <Link to="/services#data-management" className="footer__link">{t.footer.dataManagement}</Link>
            <Link to="/services#analysis" className="footer__link">{t.footer.scientificAnalysis}</Link>
            <Link to="/services#automation" className="footer__link">{t.footer.automation}</Link>
            <Link to="/services#visualization" className="footer__link">{t.footer.visualization}</Link>
            <Link to="/services#consulting" className="footer__link">{t.footer.consulting}</Link>
          </nav>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">{t.footer.company}</h4>
          <nav className="footer__links">
            <Link to="/portfolio" className="footer__link">{t.footer.portfolio}</Link>
            <Link to="/research" className="footer__link">{t.footer.research}</Link>
            <Link to="/blog" className="footer__link">{t.footer.blog}</Link>
            <Link to="/about" className="footer__link">{t.footer.about}</Link>
          </nav>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">{t.footer.contact}</h4>
          <nav className="footer__links">
            <Link to="/contact" className="footer__link">{t.nav.contact}</Link>
            <a href="mailto:contact@sdmr.pro" className="footer__link">contact@sdmr.pro</a>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">{t.footer.copyright}</p>
        <nav className="footer__legal">
          <Link to="/privacy" className="footer__legal-link">{t.footer.privacy}</Link>
          <Link to="/terms" className="footer__legal-link">{t.footer.terms}</Link>
          <Link to="/data-confidentiality" className="footer__legal-link">{t.footer.dataConfidentiality}</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
