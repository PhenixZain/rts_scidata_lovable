import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';
type GradientMode = 'static' | 'animated';

interface ThemeContextType {
  theme: Theme;
  gradientMode: GradientMode;
  toggleTheme: () => void;
  setGradientMode: (mode: GradientMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('sdmr-theme');
    return (saved as Theme) || 'dark';
  });

  const [gradientMode, setGradientMode] = useState<GradientMode>(() => {
    const saved = localStorage.getItem('sdmr-gradient');
    return (saved as GradientMode) || 'animated';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sdmr-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('sdmr-gradient', gradientMode);
  }, [gradientMode]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, gradientMode, toggleTheme, setGradientMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
