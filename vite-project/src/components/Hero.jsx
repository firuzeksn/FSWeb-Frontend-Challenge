
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
        <div className="person flex items-center gap-3">
          <div className=" person w-12 h-[2px] bg-[#4731D3]"></div>        
          <span className="person text-[#4731D3] font-medium tracking-widest uppercase">            
            Almila Su
          </span>
        </div>

        {/* Ana Başlık */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#000000]  leading-tight">
          {data.title}
        </h1>

        {/* Açıklama Metni */}
        <p className="text-lg text-[#5F5F5F] max-w-lg leading-relaxed">
  {data.description}
</p>

        {/* Butonlar ve Sosyal Medya */}
        <div className="flex flex-wrap gap-3 mt-4 items-center">
  {/* HIRE ME (Solid - İçi Dolu) */}
  <a 
    href="mailto:almila@email.com" 
    className="bg-[#4731D3] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#3b29b1] transition-all text-center min-w-[120px]"
  >
    {language === 'tr' ? 'Beni İşe Al' : 'Hire Me'}
  </a>

  {/* GITHUB (Outline - İçi Boş) */}
  <a 
    href="https://github.com" 
    className="flex items-center gap-2 border-2 border-[#4731D3] text-[#4731D3] bg-white px-6 py-[10px] rounded-lg font-bold hover:bg-[#4731D3] hover:text-white transition-all"
  >
    <Github size={24} />
    Github
  </a>

  {/* LINKEDIN (Outline - İçi Boş) */}
  <a 
    href="https://linkedin.com" 
    className="flex items-center gap-2 border-2 border-[#4731D3] text-[#4731D3] bg-white px-6 py-[10px] rounded-lg font-bold hover:bg-[#4731D3] hover:text-white transition-all"
  >
    <Linkedin size={24} />
    Linkedin
  </a>
</div>
      </div>

      {/* Sağ Taraf: Profil Fotoğrafı */}
      <div className="flex-1 relative">
        <div className="relative z-10 w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform translate-x-4 -translate-y-4">
          <img 
            src="././public/Resim1.png" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;