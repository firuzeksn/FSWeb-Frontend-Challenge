import React from 'react';
import { SiteProvider } from './contexts/SiteContext'; // Context'i import et
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
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