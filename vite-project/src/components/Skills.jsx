
import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';

const Skills = () => {
  const { language } = useContext(SiteContext);
  const skillsData = content[language].skills;

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto w-full">
      {/* Bölüm Başlığı */}
      <h2 className="text-5xl font-bold text-[#1F2937] dark:text-[#AEB1FF] mb-12">
        {language === 'tr' ? 'Yetenekler' : 'Skills'}
      </h2>

      {/* Yetenekler Listesi - Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Yetenek Başlığı */}
            <h3 className="text-3xl font-medium text-brand-purple dark:text-[#B7A9FF]">
              {skill.title}
            </h3>
            {/* Yetenek Açıklaması */}
            <p className="text-gray-500 dark:text-white leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Tasarımdaki Alt Çizgi */}
      <div className="w-full h-[1px] bg-[#BAB2E7] dark:bg-[#444] mt-16"></div>
    </section>
  );
};

export default Skills;