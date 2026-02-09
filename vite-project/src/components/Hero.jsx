
import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';
import { Github, Linkedin } from 'lucide-react'; // İkonlar için

const Hero = () => {
  const { language } = useContext(SiteContext);
  const data = content[language].hero;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-4 max-w-6xl mx-auto min-h-[500px]">
      
      {/* Sol Taraf: Metin İçeriği */}
      <div className="flex-1 flex flex-col items-start gap-8">
        
        {/* İnce Mor Çizgi ve İsim */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-[2px] bg-brand-purple"></div>
          <span className="text-brand-purple dark:text-dark-text font-medium tracking-widest uppercase">
            Almila Su
          </span>
        </div>

        {/* Ana Başlık */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#1F2937] dark:text-[#AEB1FF] leading-tight">
          {data.title}
        </h1>

        {/* Açıklama Metni */}
        <p className="text-lg text-gray-500 dark:text-white max-w-lg leading-relaxed">
          {data.description}
        </p>

        {/* Butonlar ve Sosyal Medya */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="bg-brand-purple text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-all">
            {language === 'tr' ? 'Beni İşe Al' : 'Hire Me'}
          </button>
          
          <a href="https://github.com" className="flex items-center gap-2 border border-brand-purple text-brand-purple dark:bg-[#383838] dark:text-[#E1E1FF] px-6 py-3 rounded-md font-bold hover:bg-brand-purple hover:text-white transition-all">
            <Github size={20} />
            Github
          </a>

          <a href="https://linkedin.com" className="flex items-center gap-2 border border-brand-purple text-brand-purple dark:bg-[#383838] dark:text-[#E1E1FF] px-6 py-3 rounded-md font-bold hover:bg-brand-purple hover:text-white transition-all">
            <Linkedin size={20} />
            Linkedin
          </a>
        </div>
      </div>

      {/* Sağ Taraf: Profil Fotoğrafı */}
      <div className="flex-1 relative">
        <div className="relative z-10 w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform translate-x-4 -translate-y-4">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Fotoğrafın Arkasındaki Dekoratif Kutu (Görseldeki gibi) */}
        <div className="absolute top-0 right-0 w-full max-w-[450px] aspect-[4/3] bg-brand-purple rounded-2xl -z-10 translate-x-0 translate-y-0"></div>
      </div>

    </section>
  );
};

export default Hero;