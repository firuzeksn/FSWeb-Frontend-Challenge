import React, { useEffect } from 'react'; // useEffect eklendi
import axios from 'axios'; // axios eklendi
import { SiteProvider } from './contexts/SiteContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  // Şemadaki "Persistence & API" katmanını temsil eden kısım
  useEffect(() => {
    const dummyData = {
      project: "Workintech",
      status: "Successful",
      layers: ["Presentation", "Business", "Persistence", "Database"]
    };

    // Eski satırı şu şekilde güncelliyoruz:
    axios.post('https://jsonplaceholder.typicode.com/posts', dummyData)
      .then(res => {
        console.log("Dış kaynakla iletişim sağlandı (POST):", res.data);
      })
      .catch(err => {
        console.error("API hatası:", err);
      });
  }, []);// Boş dizi sayesinde sadece sayfa ilk açıldığında bir kez çalışır

  return (
    <SiteProvider> 
      <div className="main-wrapper">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </main>
        <Footer />
      </div>
    </SiteProvider>
  );
}

export default App;