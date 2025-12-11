import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Menu, X } from 'lucide-react';
import ThemeController from '../ThemeController/ThemeController';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import './Header.scss';

interface NavItem {
  labelKey: keyof typeof import('../../i18n/translations/en').en.nav;
  path: string;
}

const navItems: NavItem[] = [
  { labelKey: 'home', path: '/' },
  { labelKey: 'about', path: '/about' },
  { labelKey: 'services', path: '/services' },
  { labelKey: 'portfolio', path: '/portfolio' },
  { labelKey: 'research', path: '/research' },
  { labelKey: 'blog', path: '/blog' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <Database />
          </div>
          <span className="header__logo-text">
            <span>SDMR</span>.pro
          </span>
        </Link>

        <nav className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__link ${isActive(item.path) ? 'header__link--active' : ''}`}
            >
              {t.nav[item.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSelector />
          <ThemeController />
          <Link to="/contact" className="header__cta">
            {t.nav.contact}
          </Link>
          <button
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <nav className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`header__mobile-link ${isActive(item.path) ? 'header__mobile-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav[item.labelKey]}
          </Link>
        ))}
        <Link
          to="/contact"
          className="header__mobile-cta"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {t.nav.contact}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
