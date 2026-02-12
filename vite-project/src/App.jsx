import React, { useEffect } from 'react'; 
import axios from 'axios'; 
import { SiteProvider } from './contexts/SiteContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const dummyData = {
      project: "Workintech",
      status: "Successful",
      layers: ["Presentation", "Business", "Persistence", "Database"]
    };
    axios.post('https://jsonplaceholder.typicode.com/posts', dummyData)
      .then(res => {
        console.log("Dış kaynakla iletişim sağlandı (POST):", res.data);
      })
      .catch(err => {
        console.error("API hatası:", err);
      });
  }, []);
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