import React, { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'tr');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  return (
    <SiteContext.Provider value={{ isDarkMode, setIsDarkMode, language, setLanguage }}>
      {children}
    </SiteContext.Provider>
  );
};