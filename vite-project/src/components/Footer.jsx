import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';

const Footer = () => {
  const { language } = useContext(SiteContext);
  const data = content[language].footer;

  return (
    <footer className="bg-[#FAF7F2] py-20 px-4">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12">
        
        {/* Ana Mesaj - Görseldeki sola hizalı ve geniş başlık */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-[#000000] max-w-2xl leading-tight">
          {data.title}
        </h2>

        {/* İletişim ve Linkler Satırı */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Sol: Email Linki - Görseldeki kırmızı/pembe tonlu altı çizili mail */}
          <div className="flex items-center gap-2">
            <span className="text-xl">👉</span>
            <a 
              href={`mailto:${data.email}`} 
              className="text-lg font-medium text-[#CE2829] dark:text-[#CE2829] hover:opacity-80 transition-opacity underline decoration-1 underline-offset-4"
            >
              {data.email}
            </a>
          </div>

          {/* Sağ: Sosyal Linkler - Görseldeki renkli link yapısı */}
          <nav className="flex gap-6 font-medium text-lg">
            <a 
              href="#" 
              className="text-[#0A0A14] dark:text-[#000000] hover:opacity-70 transition-colors"
            >
              Personal Blog
            </a>
            <a 
              href="https://github.com" 
              className="text-[#00AB6B] hover:opacity-70 transition-colors"
            >
              Github
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-[#0077B5] hover:opacity-70 transition-colors"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;