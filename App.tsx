
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader.tsx';
import Navbar from './components/Navbar.tsx';
import BackgroundEffects from './components/BackgroundEffects.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Achievements from './components/Achievements.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import Chatbot from './components/Chatbot.tsx';
import { SOCIAL_LINKS } from './constants.ts';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-[#6366f1] selection:text-white">
      <Loader />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />

      <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>

      <Chatbot />

      <footer className="py-12 border-t border-white/5 text-center bg-black/40 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-mono text-white/30 uppercase tracking-widest">
            © {new Date().getFullYear()} VINITH M // CSE STUDENT // TAMIL NADU
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <button 
              onClick={scrollToTop}
              className="text-sm font-mono text-white/40 hover:text-[#00f3ff] transition-colors uppercase"
            >
              Back to Top
            </button>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-mono text-white/40 hover:text-[#00f3ff] transition-colors uppercase"
            >
              Resources
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert('Terminal Access Restricted. Developer Mode only.'); }}
              className="text-sm font-mono text-white/40 hover:text-[#ec4899] transition-colors uppercase"
            >
              Terminal
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
