
import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';

const Footer = () => {
  const { language } = useContext(SiteContext);
  const data = content[language].footer;

  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#141414] py-20 px-4">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12">
        
        {/* Ana Mesaj */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEB1FF] max-w-2xl leading-tight">
          {data.title}
        </h2>

        {/* İletişim ve Linkler Satırı */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Sol: Email Linki */}
          <a 
            href={`mailto:${data.email}`} 
            className="text-lg font-medium text-[#AF0C48] dark:text-[#BAB2E7] flex items-center gap-2 hover:opacity-80 transition-opacity underline underline-offset-4"
          >
            👉 <span className="underline">{data.email}</span>
          </a>

          {/* Sağ: Sosyal Linkler */}
          <nav className="flex gap-6 font-bold text-lg">
            {data.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className={`transition-colors hover:opacity-70 ${
                  link.name === 'Github' ? 'text-[#00AB6B]' : 
                  link.name === 'Linkedin' ? 'text-[#0077B5]' : 'text-[#0A0A14] dark:text-[#E1E1FF]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;