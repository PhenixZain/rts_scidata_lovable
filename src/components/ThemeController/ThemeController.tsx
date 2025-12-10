import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Palette, Sparkles, Type, Check } from 'lucide-react';
import './ThemeController.scss';

const ThemeController: React.FC = () => {
  const { theme, gradientMode, toggleTheme, setGradientMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="theme-controller">
      <button
        className="theme-controller__button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>

      <div className="theme-controller__dropdown" ref={dropdownRef}>
        <button
          className={`theme-controller__button ${isOpen ? 'theme-controller__button--active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Theme options"
        >
          <Palette />
        </button>

        <div className={`theme-controller__menu ${isOpen ? 'theme-controller__menu--open' : ''}`}>
          <span className="theme-controller__label">Gradient Style</span>
          
          <button
            className={`theme-controller__menu-item ${gradientMode === 'static' ? 'theme-controller__menu-item--active' : ''}`}
            onClick={() => setGradientMode('static')}
          >
            <Type />
            <span>Static Gradient</span>
            {gradientMode === 'static' && <Check style={{ marginLeft: 'auto' }} />}
          </button>

          <button
            className={`theme-controller__menu-item ${gradientMode === 'animated' ? 'theme-controller__menu-item--active' : ''}`}
            onClick={() => setGradientMode('animated')}
          >
            <Sparkles />
            <span>Animated Gradient</span>
            {gradientMode === 'animated' && <Check style={{ marginLeft: 'auto' }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeController;
