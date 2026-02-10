import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    /* bg-white: Light mode rengi
       dark:bg-[#252128]: Dark mode rengi (Butona basınca aktif olur)
    */
    <div className="min-h-screen bg-white dark:bg-[#252128] text-gray-900 dark:text-white transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;