import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  // LocalStorage'dan başlangıç değerlerini al
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'tr');

  useEffect(() => {
    // Tema değişikliğini HTML elementine yansıt (Tailwind için)
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <SiteContext.Provider value={{ isDarkMode, setIsDarkMode, language, setLanguage }}>
      {children}
    </SiteContext.Provider>
  );
};