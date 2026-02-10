
import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';

const Projects = () => {
  const { language } = useContext(SiteContext);
  const projectsData = content[language].projects;

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto w-full">
  <h2 className="text-5xl font-bold text-[#000000] dark:text-[#000000] mb-12">
    {language === 'tr' ? 'Projeler' : 'Projects'}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projectsData.map((project, index) => (
      <div key={index} className="flex flex-col gap-4">
        {/* Proje Görseli */}
        <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Proje Başlığı - Mor Renk Güncellendi */}
        <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#B7A9FF]">
          {project.title}
        </h3>

        {/* Proje Açıklaması - Gri Renk Güncellendi */}
        <p className="text-sm text-[#6B7280] dark:text-[#D1D5DB] leading-relaxed">
          {project.description}
        </p>

        {/* Teknolojik Etiketler - Kenarlık ve Yazı Rengi Güncellendi */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="border border-[#4731D3] text-[#4731D3] dark:border-[#4731D3] dark:text-[#4731D3] px-4 py-1 rounded-full text-xs font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Linkler - Alt Çizgi ve Yazı Rengi Güncellendi */}
        <div className="flex justify-between items-center mt-2 font-bold underline decoration-[#4731D3] dark:decoration-[#4731D3] underline-offset-8">
          <a href={project.github} className="text-[#4731D3] dark:text-[#4731D3] hover:opacity-70 transition-opacity">
            GitHub
          </a>
          <a href={project.viewSite} className="text-[#4731D3] dark:text-[#4731D3] hover:opacity-70 transition-opacity">
            {language === 'tr' ? 'Siteyi Görüntüle' : 'View Site'}
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Projects;