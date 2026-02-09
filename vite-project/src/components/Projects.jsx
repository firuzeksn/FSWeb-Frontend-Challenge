
import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';

const Projects = () => {
  const { language } = useContext(SiteContext);
  const projectsData = content[language].projects;

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto w-full">
      <h2 className="text-5xl font-bold text-[#1F2937] dark:text-[#AEB1FF] mb-12">
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

            {/* Proje Başlığı */}
            <h3 className="text-3xl font-medium text-brand-purple dark:text-[#B7A9FF]">
              {project.title}
            </h3>

            {/* Proje Açıklaması */}
            <p className="text-sm text-gray-500 dark:text-white leading-relaxed">
              {project.description}
            </p>

            {/* Teknolojik Etiketler */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="border border-brand-purple text-brand-purple dark:border-[#B7A9FF] dark:text-[#B7A9FF] px-4 py-1 rounded-full text-xs font-bold uppercase">
                  {tag}
                </span>
              ))}
            </div>

            {/* Linkler */}
            <div className="flex justify-between items-center mt-2 font-bold underline decoration-brand-purple underline-offset-4">
              <a href={project.github} className="text-brand-purple dark:text-[#B7A9FF] hover:opacity-70 transition-opacity">GitHub</a>
              <a href={project.viewSite} className="text-brand-purple dark:text-[#B7A9FF] hover:opacity-70 transition-opacity">View Site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;