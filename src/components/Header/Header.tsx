import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Menu, X } from 'lucide-react';
import ThemeController from '../ThemeController/ThemeController';
import './Header.scss';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Research', path: '/research' },
  { label: 'Blog', path: '/blog' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeController />
          <Link to="/contact" className="header__cta">
            Contact Me
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
            {item.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="header__mobile-cta"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
