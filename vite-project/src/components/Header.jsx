
import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';

const Header = () => {
  const { isDarkMode, setIsDarkMode, language, setLanguage } = useContext(SiteContext);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'tr' ? 'en' : 'tr'));
  };

  return (
    <header className="flex flex-col gap-4 py-8 px-4 max-w-6xl mx-auto w-full">
      <div className="flex justify-end items-center gap-4 text-xs font-bold tracking-wider">
        
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => {setIsDarkMode(!isDarkMode);}}>
          <div className={`w-12 h-6 rounded-full relative transition-colors ${isDarkMode ? 'bg-[#252128]' : 'bg-[#4731D3]'}`}>
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-yellow-400 transition-all ${isDarkMode ? 'left-1' : 'right-1'}`}></div>
          </div>
          <span className="text-[#777777] dark:text-[#D9D9D9]">
            {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
          </span>
        </div>

        <span className="text-gray-300">|</span>

        {/* Dil Seçimi */}
        <div className="cursor-pointer transition-colors" onClick={toggleLanguage}>
          <span className="text-[#4731D3] font-bold">
            {language === 'tr' ? 'ENGLISH' : 'TÜRKÇE'}
          </span>
          <span className="text-gray-500">
            {language === 'tr' ? " SWITCH": " 'YE GEÇ" }
          </span>
        </div>
      </div>
      {/* Alt Kısım: Logo ve Navigasyon */}
      <div className="flex justify-between items-center mt-4">
        {/* Logo Alanı */}
        
        <div className="logo w-12 h-12 bg-[#EEEBFF] rounded-full flex items-center justify-center transform rotate-45">
  <span className="logo-text text-[#7B61FF]  font-bold text-xl -rotate-45">
    A
  </span>
</div>

        {/* Nav Linkleri */}
        <nav className="flex items-center gap-8 text-gray-500 dark:text-gray-400 font-medium">
          <a href="#skills" className="hover:text-brand-purple transition-colors">{language === 'tr' ? 'Yetenekler' : 'Skills'}</a>
          <a href="#projects" className="hover:text-brand-purple transition-colors">{language === 'tr' ? 'Projeler' : 'Projects'}</a>
          <a 
            href="mailto:almila@email.com" 
className="border border-[#4731D3] text-[#4731D3] dark:bg-white dark:text-[#4731D3] px-6 py-2 rounded-md font-bold hover:bg-[#4731D3] hover:text-white transition-all"          >
            {language === 'tr' ? 'Beni İşe Al' : 'Hire Me'}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;