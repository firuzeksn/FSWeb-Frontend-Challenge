import React, { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { content } from '../data';

const Profile = () => {
  const { language } = useContext(SiteContext);
  const data = content[language].profile;

  return (
    <section className="py-0 px-4 max-w-6xl mx-auto w-full">
     {/* Bölüm Başlığı */}
<h2 className="text-5xl font-bold text-[#1F2937] dark:text-[#000000] mb-12">
  {data.title}
</h2>

<div className="flex flex-col md:flex-row gap-12">
  
  {/* Sol Taraf: Temel Bilgiler */}
  <div className="flex-1">
    <h3 className="text-3xl font-medium text-[#4731D3]  mb-8">
      {data.basicInfo.title}
    </h3>
    
    <div className="flex flex-col gap-4">
      {data.basicInfo.items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <span className="font-semibold   w-1/3">
            {item.label}
          </span>
          <span className="  w-2/3">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Sağ Taraf: Hakkımda */}
  <div className="flex-1 flex flex-col gap-6">
    <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#4731D3] mb-8">
      {data.aboutMe.title}
    </h3>
    <div className="text-lg text-[#6B7280] dark:text-[#5F5F5F] leading-relaxed space-y-4">
      <p>{data.aboutMe.p1}</p>
      <p>{data.aboutMe.p2}</p>
    </div>
  </div>

</div>

      {/* Alt Çizgi */}
      <div className="w-full h-[1px] bg-[#BAB2E7] dark:bg-[#444] mt-16"></div>
    </section>
  );
};

export default Profile;